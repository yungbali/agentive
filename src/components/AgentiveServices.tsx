import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatInterface } from './ChatInterface';
import { agentPrompts } from '../services/agentPrompts';

interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
  agentId?: string;
}

interface Project {
  artistName: string;
  trackTitle: string;
  genre: string;
  releaseDate: string;
  marketingBudget: number;
  distributionPlatforms: string[];
}

interface Agent {
  id: string;
  name: string;
  role: string;
  avatar: string;
  expertise: string[];
}

const agents: Agent[] = [
  {
    id: 'distribution',
    name: 'Distribution Strategist',
    role: 'Platform & Release Strategy',
    expertise: ['Platform Selection', 'Release Timing', 'Territory Planning'],
    avatar: '🎯',
  },
  {
    id: 'marketing',
    name: 'Marketing Director',
    role: 'Campaign & Budget Planning',
    expertise: ['Social Media', 'Influencer Outreach', 'Ad Campaigns'],
    avatar: '📈',
  },
  {
    id: 'playlist',
    name: 'Playlist Curator',
    role: 'Playlist Strategy & Promotion',
    expertise: ['Playlist Pitching', 'Genre Analysis', 'Audience Targeting'],
    avatar: '🎵',
  },
];

export const AgentiveServices: React.FC = () => {
  const [activeAgent, setActiveAgent] = useState<Agent | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [_project, _setProject] = useState<Project | null>(null);

  const handleAgentSelect = (agent: Agent) => {
    setActiveAgent(agent);
    setMessages([
      {
        role: 'system',
        content: agentPrompts[agent.id].initial,
        agentId: agent.id,
      },
    ]);
  };

  const handleSendMessage = async (content: string) => {
    setLoading(true);

    // Add user message
    const newMessages = [...messages, { role: 'user' as const, content, agentId: activeAgent?.id }];
    setMessages(newMessages as Message[]);

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
              content: `You are a ${activeAgent?.name} specializing in ${activeAgent?.expertise.join(', ')}. 
                       Respond in a professional but conversational tone.`,
            },
            ...newMessages.map((m) => ({
              role: m.role,
              content: m.content,
            })),
          ],
        }),
      });

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulatedResponse = '';

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
              setMessages((prev) => [
                ...prev.slice(0, -1),
                {
                  role: 'assistant',
                  content: accumulatedResponse,
                  agentId: activeAgent?.id,
                },
              ]);
            } catch (e) {
              console.error('Error parsing JSON:', e);
            }
          }
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'I apologize, but I encountered an error. Please try again.',
          agentId: activeAgent?.id,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-[300px,1fr] gap-4 p-4 h-[calc(100vh-4rem)]">
      <motion.div
        className="bg-white/80 backdrop-blur-sm rounded-lg p-4 overflow-y-auto"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <h2 className="text-xl font-bold mb-4">AI Music Agents</h2>
        <div className="space-y-2">
          {agents.map((agent) => (
            <motion.button
              key={agent.id}
              onClick={() => handleAgentSelect(agent)}
              className={`w-full p-4 text-left rounded-lg transition-colors ${
                activeAgent?.id === agent.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{agent.avatar}</span>
                <div>
                  <h3 className="font-semibold">{agent.name}</h3>
                  <p className="text-sm opacity-80">{agent.role}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {activeAgent ? (
          <motion.div
            key={activeAgent.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden"
          >
            <div className="border-b p-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{activeAgent.avatar}</span>
                <div>
                  <h2 className="font-bold">{activeAgent.name}</h2>
                  <p className="text-sm text-gray-500">{activeAgent.expertise.join(' • ')}</p>
                </div>
              </div>
            </div>

            <ChatInterface
              messages={messages}
              onSendMessage={handleSendMessage}
              isLoading={loading}
            />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center h-full text-gray-500"
          >
            Select an agent to begin collaboration
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
