import { ErrorCode, ApiError, StrategyError } from '@/types/errors';
import { OpenAI } from 'openai';

export function handleApiError(error: unknown): ApiError {
  console.error('Raw error:', error);

  if (error instanceof OpenAI.APIError) {
    return {
      code: ErrorCode.OPENAI_ERROR,
      message: 'AI Service Error',
      details: {
        status: error.status,
        message: error.message,
        type: error.type
      },
      timestamp: new Date().toISOString()
    };
  }

  if (error instanceof StrategyError) {
    return {
      code: error.code,
      message: error.message,
      details: error.details,
      timestamp: new Date().toISOString()
    };
  }

  // Default server error
  return {
    code: ErrorCode.SERVER_ERROR,
    message: 'An unexpected error occurred',
    details: error instanceof Error ? error.message : String(error),
    timestamp: new Date().toISOString()
  };
}

export function validateStrategyInput(input: any) {
  const requiredFields = ['region', 'category', 'timeframe', 'budget'];
  const missingFields = requiredFields.filter(field => !input[field]);

  if (missingFields.length > 0) {
    throw new StrategyError(
      ErrorCode.INVALID_INPUT,
      'Missing required fields',
      { missingFields }
    );
  }
} 