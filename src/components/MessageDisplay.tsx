'use client';
import { Message } from '@/types';
import MotionDiv from './MotionDiv';
import ReactMarkdown from 'react-markdown';

export default function MessageDisplay({ message }: { message: Message }) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      <div className={`max-w-[80%] rounded-lg p-4 ${
        message.role === 'user' 
          ? 'bg-blue-600 text-white' 
          : 'bg-gray-800'
      }`}>
        {message.status === 'thinking' ? (
          <div className="flex items-center gap-2">
            <div className="animate-pulse">Generating strategy...</div>
            <div className="animate-spin h-4 w-4 border-2 border-blue-500 rounded-full border-t-transparent"></div>
          </div>
        ) : (
          <ReactMarkdown className="prose prose-invert max-w-none">
            {message.content}
          </ReactMarkdown>
        )}
      </div>
    </MotionDiv>
  );
} 