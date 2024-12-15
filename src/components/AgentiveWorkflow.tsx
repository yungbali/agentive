'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { Button } from "./ui/button";
import { agentPrompts } from '../services/agentPrompts';
import { v4 as uuidv4 } from 'uuid';

interface WorkflowMessage {
  id: string;
  role: 'system' | 'user' | 'assistant' | 'workflow';
  content: string;
  agentId?: string;
  timestamp: Date;
  status?: 'thinking' | 'complete' | 'error';
}

interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  agent: string;
  completed: boolean;
  systemPrompt: string;
}

export const AgentiveWorkflow: React.FC = () => {
  const [messages, setMessages] = useState<WorkflowMessage[]>([]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStep, setCurrentStep] = useState<WorkflowStep | null>(null);
  const [project, setProject] = useState({
    artistName: '',
    trackTitle: '',
    genre: '',
    marketingBudget: '',
    distributionPlatforms: [] as string[],
  });
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const workflowSteps: WorkflowStep[] = [
    {
      id: 'distribution',
      title: 'Distribution Strategy',
      description: 'Plan your music release across platforms',
      agent: 'Distribution Strategist',
      completed: false,
      systemPrompt: agentPrompts.distribution.initial
    },
    {
      id: 'marketing',
      title: 'Marketing Campaign',
      description: 'Create targeted marketing campaigns',
      agent: 'Marketing Director',
      completed: false,
      systemPrompt: agentPrompts.marketing.initial
    },
    {
      id: 'playlist',
      title: 'Playlist Strategy',
      description: 'Optimize playlist submission strategy',
      agent: 'Playlist Curator',
      completed: false,
      systemPrompt: agentPrompts.playlist.initial
    }
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleStepSelect = async (step: WorkflowStep) => {
    setCurrentStep(step);
    const systemMessage: WorkflowMessage = {
      id: uuidv4(),
      role: 'system',
      content: step.systemPrompt,
      timestamp: new Date(),
      agentId: step.id
    };
    setMessages(prev => [...prev, systemMessage]);
  };

  const handleSubmit = async () => {
    if (!input.trim() || !currentStep) return;

    setIsProcessing(true);
    const userMessage: WorkflowMessage = {
      id: uuidv4(),
      role: 'user',
      content: input,
      timestamp: new Date(),
      agentId: currentStep.id
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    try {
      const response = await fetch('/api/copilot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            {
              role: 'system',
              content: `You are a ${currentStep.agent} helping with music project strategy. 
                       Current step: ${currentStep.title}`
            },
            ...messages.map(m => ({
              role: m.role,
              content: m.content
            })),
            {
              role: 'user',
              content: input
            }
          ]
        })
      });

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let accumulatedResponse = '';

      if (reader) {
        const assistantMessage: WorkflowMessage = {
          id: uuidv4(),
          role: 'assistant',
          content: '',
          timestamp: new Date(),
          agentId: currentStep.id,
          status: 'thinking'
        };

        setMessages(prev => [...prev, assistantMessage]);

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          const lines = chunk.split('\n');

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const jsonStr = line.slice(6);
              if (jsonStr === '[DONE]') continue;

              try {
                const { content } = JSON.parse(jsonStr);
                accumulatedResponse += content;
                
                setMessages(prev => prev.map(msg => 
                  msg.id === assistantMessage.id 
                    ? { ...msg, content: accumulatedResponse, status: 'complete' }
                    : msg
                ));
              } catch (e) {
                console.error('Error parsing JSON:', e);
              }
            }
          }
        }

        // Mark step as completed
        setCurrentStep(prev => prev ? { ...prev, completed: true } : null);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        id: uuidv4(),
        role: 'system',
        content: 'An error occurred while processing your request. Please try again.',
        timestamp: new Date(),
        status: 'error'
      }]);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-80 border-r bg-white p-4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Music Project Workflow</h2>
        <div className="space-y-2">
          {workflowSteps.map((step) => (
            <motion.div
              key={step.id}
              onClick={() => handleStepSelect(step)}
              className={`p-4 rounded-lg cursor-pointer ${
                currentStep?.id === step.id 
                  ? 'bg-blue-50 border-blue-200 border-2' 
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="font-semibold flex items-center gap-2">
                {step.title}
                {step.completed && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-green-500"
                  >
                    ✓
                  </motion.span>
                )}
              </h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-4 ${
                    message.role === 'user'
                      ? 'bg-blue-500 text-white'
                      : message.role === 'system'
                      ? 'bg-gray-100'
                      : 'bg-white border'
                  }`}
                >
                  {message.status === 'thinking' ? (
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full"
                      />
                      Thinking...
                    </div>
                  ) : (
                    <ReactMarkdown className="prose max-w-none dark:prose-invert">
                      {message.content}
                    </ReactMarkdown>
                  )}
                  <div className="text-xs opacity-50 mt-2">
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </motion.div>
            ))}
            <div ref={messagesEndRef} />
          </AnimatePresence>
        </div>

        {/* Input area */}
        <div className="border-t bg-white p-4">
          <div className="max-w-4xl mx-auto">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={currentStep 
                ? `Discuss ${currentStep.title.toLowerCase()} with ${currentStep.agent}...` 
                : "Select a workflow step to begin..."
              }
              className="w-full p-4 rounded-lg border min-h-[100px] focus:ring-2 focus:ring-blue-500"
              disabled={isProcessing || !currentStep}
            />
            <div className="flex justify-between mt-2">
              <Button
                variant="outline"
                onClick={() => setInput('')}
                disabled={isProcessing || !input}
              >
                Clear
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={isProcessing || !input || !currentStep}
                className="bg-blue-500 text-white"
              >
                {isProcessing ? 'Processing...' : 'Send Message'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};