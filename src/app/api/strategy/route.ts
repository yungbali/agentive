import { NextResponse } from 'next/server';
import { generateStrategy } from '@/utils/openai';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { prompt } = body;

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    const strategy = await generateStrategy(prompt);
    
    return NextResponse.json({ strategy });
  } catch (error) {
    console.error('Strategy generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate strategy' },
      { status: 500 }
    );
  }
} 