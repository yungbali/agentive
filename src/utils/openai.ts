import OpenAI from 'openai';
import type { ChatCompletionMessageParam } from 'openai/resources/chat/completions';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface ChatCompletionRequest {
  model: string;
  messages: ChatCompletionMessageParam[];
  temperature?: number;
  max_tokens?: number;
  stream: true;  // Always true for streaming
}

export async function OpenAIStreamWrapper(params: ChatCompletionRequest) {
  const response = await openai.chat.completions.create({
    ...params,
    stream: true
  });

  const encoder = new TextEncoder();

  return new ReadableStream({
    async start(controller) {
      for await (const chunk of response) {
        const text = chunk.choices[0]?.delta?.content || '';
        const queue = encoder.encode(text);
        controller.enqueue(queue);
      }
      controller.close();
    }
  });
}

export const OpenAIStream = async function streamCompletion(payload: {
  model: string;
  messages: Array<{role: string; content: string}>;
  temperature?: number;
  max_tokens?: number;
  stream?: boolean;
}) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ''}`,
    },
    method: 'POST',
    body: JSON.stringify(payload),
  });

  const encoder = new TextEncoder();
  return new ReadableStream({
    async start(controller) {
      const reader = response.body?.getReader();
      if (!reader) throw new Error('No reader available');

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = new TextDecoder().decode(value);
          const lines = chunk
            .split('\n')
            .filter(line => line.trim().startsWith('data: '));

          for (const line of lines) {
            const data = line.replace(/^data: /, '');
            if (data === '[DONE]') return;

            try {
              const json = JSON.parse(data);
              const text = json.choices[0]?.delta?.content || '';
              const queue = encoder.encode(text);
              controller.enqueue(queue);
            } catch (e) {
              // Skip invalid JSON
            }
          }
        }
      } finally {
        reader.releaseLock();
        controller.close();
      }
    }
  });
}
