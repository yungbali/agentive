'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import dynamic from 'next/dynamic';
import { Message, StrategyInput } from '@/types';
import { AnimatePresence } from 'framer-motion';

const Distribution = dynamic(
  () => import('@/components/Distribution').then(mod => mod.default),
  { loading: () => <div>Loading...</div>, ssr: false }
);

const StrategyForm = dynamic(
  () => import('@/components/StrategyForm').then(mod => mod.default),
  { loading: () => <div>Loading...</div>, ssr: false }
);

const MessageDisplay = dynamic(
  () => import('@/components/MessageDisplay').then(mod => mod.default),
  { loading: () => <div>Loading...</div>, ssr: false }
);

const MotionDiv = dynamic(
  () => import('@/components/MotionDiv').then(mod => mod.default),
  { ssr: false }
);

export default function TabsContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const handleStrategySubmit = async (input: StrategyInput) => {
    try {
      setIsLoading(true);
      
      // Add user message
      const userMessage: Message = {
        id: Date.now().toString(),
        role: 'user',
        content: `Strategy request for ${input.category} in ${input.region}`,
        timestamp: new Date()
      };
      
      // Add thinking message
      const thinkingMessageId = (Date.now() + 1).toString();
      const thinkingMessage: Message = {
        id: thinkingMessageId,
        role: 'assistant',
        content: '',
        timestamp: new Date(),
        status: 'thinking'
      };
      
      setMessages(prev => [...prev, userMessage, thinkingMessage]);

      // Make API call
      const response = await fetch('/api/strategy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input)
      });

      if (!response.ok) throw new Error('Strategy generation failed');

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let accumulatedResponse = '';

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          accumulatedResponse += chunk;

          // Update the thinking message with accumulated response
          setMessages(prev => prev.map(msg => 
            msg.id === thinkingMessageId 
              ? { ...msg, content: accumulatedResponse, status: 'complete' }
              : msg
          ));
        }
      }

    } catch (error) {
      console.error('Strategy generation error:', error);
      setMessages(prev => prev.map(msg => 
        msg.status === 'thinking'
          ? { ...msg, content: 'Strategy generation failed. Please try again.', status: 'error' }
          : msg
      ));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Tabs defaultValue="strategy" className="w-full">
      <TabsList className="grid grid-cols-2 w-full max-w-2xl mx-auto mb-8">
        <TabsTrigger value="strategy">Strategy</TabsTrigger>
        <TabsTrigger value="distribution">Distribution</TabsTrigger>
      </TabsList>

      <AnimatePresence mode="wait">
        <TabsContent value="strategy">
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
          >
            <StrategyForm onSubmit={handleStrategySubmit} isLoading={isLoading} />
            
            <div className="mt-6 space-y-4">
              {messages.map((message) => (
                <MessageDisplay key={message.id} message={message} />
              ))}
            </div>
          </MotionDiv>
        </TabsContent>

        <TabsContent value="distribution">
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
          >
            <Distribution />
          </MotionDiv>
        </TabsContent>
      </AnimatePresence>
    </Tabs>
  );
}