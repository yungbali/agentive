import { NextRequest } from 'next/server';
import { OpenAIStreamWrapper } from '@/utils/openai';
import type { ChatCompletionMessageParam } from 'openai/resources/chat/completions';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  try {
    if (req.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    const body = await req.json();
    
    const { region, category, timeframe, budget } = body;
    if (!region || !category || !timeframe || !budget) {
      return new Response(
        JSON.stringify({ 
          error: 'Missing required fields',
          details: 'All fields are required: region, category, timeframe, budget'
        }),
        { status: 400 }
      );
    }

    const messages: ChatCompletionMessageParam[] = [
      {
        role: "system",
        content: `You are a music industry AI strategist specializing in African music markets.
        
Format your response in clean markdown with the following sections:

## Market Analysis
- Current market state
- Target audience
- Competitive landscape

## Strategy Overview
- Core objectives
- Key differentiators
- Value proposition

## Implementation Steps
1. [Step One]
2. [Step Two]
3. [Step Three]
(Include 3-5 detailed steps)

## Budget Allocation
- Breakdown of costs
- ROI projections
- Risk mitigation

## Timeline
- Phase 1: [Timeline]
- Phase 2: [Timeline]
- Phase 3: [Timeline]

## KPIs
- Primary metrics
- Success indicators
- Monitoring plan`
      },
      {
        role: "user",
        content: `Create a detailed ${category} strategy for ${region} with a timeframe of ${timeframe} and budget range of ${budget}.`
      }
    ];

    const stream = await OpenAIStreamWrapper({
      model: "gpt-4",
      messages,
      temperature: 0.7,
      max_tokens: 2000,
      stream: true
    });

    return new Response(stream);

  } catch (error: any) {
    console.error('Strategy API error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Strategy generation failed',
        details: error.message 
      }),
      { status: 500 }
    );
  }
} 