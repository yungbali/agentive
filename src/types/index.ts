export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  status?: 'thinking' | 'complete' | 'error';
  error?: any;
}

export interface StrategyInput {
  region: string;
  category: string;
  timeframe: string;
  budget: string;
} 