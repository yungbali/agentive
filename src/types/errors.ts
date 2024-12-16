export enum ErrorCode {
  OPENAI_ERROR = 'OPENAI_ERROR',
  INVALID_INPUT = 'INVALID_INPUT',
  RATE_LIMIT = 'RATE_LIMIT',
  SERVER_ERROR = 'SERVER_ERROR',
  STREAM_ERROR = 'STREAM_ERROR',
  AUTH_ERROR = 'AUTH_ERROR'
}

export interface ApiError {
  code: ErrorCode;
  message: string;
  details?: any;
  timestamp: string;
}

export class StrategyError extends Error {
  constructor(
    public code: ErrorCode,
    message: string,
    public details?: any
  ) {
    super(message);
    this.name = 'StrategyError';
  }
} 