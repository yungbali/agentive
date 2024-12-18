import OpenAI from 'openai';

// Create a single instance of the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Add this for client-side usage
});

export async function generateStrategy(prompt: string) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4", // or "gpt-3.5-turbo" depending on your needs
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that generates music marketing strategies."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error generating strategy:', error);
    throw error;
  }
}

export default openai;
