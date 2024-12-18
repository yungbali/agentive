'use client';
import { useState } from 'react';
import { AudioFeatures } from '@/services/AudioAnalysisService';

interface StrategyGeneratorProps {
  audioFeatures: AudioFeatures;
}

export default function StrategyGenerator({ audioFeatures }: StrategyGeneratorProps) {
  const [strategy, setStrategy] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const generateStrategy = async () => {
    setLoading(true);
    try {
      const prompt = `Generate a marketing strategy for a song with the following characteristics:
        Tempo: ${audioFeatures.tempo} BPM
        Key: ${audioFeatures.key}
        Scale: ${audioFeatures.scale}
        Mood: ${audioFeatures.mood}
        Energy: ${audioFeatures.energy}`;

      const response = await fetch('/api/strategy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate strategy');
      }

      const data = await response.json();
      setStrategy(data.strategy);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8">
      <button
        onClick={generateStrategy}
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full"
      >
        {loading ? 'Generating...' : 'Generate Marketing Strategy'}
      </button>
      
      {strategy && (
        <div className="mt-4 p-6 bg-gray-700 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">AI-Generated Marketing Strategy</h3>
          <p className="whitespace-pre-wrap">{strategy}</p>
        </div>
      )}
    </div>
  );
} 