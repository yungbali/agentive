import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedHeader from './AnimatedHeader';
import AnimatedCard from './AnimatedCard';
import AnimatedButton from './AnimatedButton';
import LoadingSpinner from './LoadingSpinner';
import MusicLabelChat from './MusicLabelChat';
import StrategyDisplay from './StrategyDisplay';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface Project {
  artistName: string;
  trackTitle: string;
  genre: string;
  releaseDate: string;
  marketingBudget: number;
  distributionPlatforms: string[];
}

const platforms = ['Spotify', 'Apple Music', 'YouTube Music', 'Amazon Music', 'TikTok'];

const formVariants = {
  hover: {
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10,
    },
  },
};

const inputVariants = {
  focus: {
    scale: 1.02,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
};

const MusicLabelDashboard: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [strategy, setStrategy] = useState<string>('');
  const [partialStrategy, setPartialStrategy] = useState<string>('');
  const [project, setProject] = useState<Project>({
    artistName: '',
    trackTitle: '',
    genre: '',
    releaseDate: new Date().toISOString().split('T')[0],
    marketingBudget: 0,
    distributionPlatforms: [],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (!project.artistName || !project.trackTitle || !project.genre) {
        throw new Error('Please fill in all required fields');
      }

      const prompt = `Create a detailed distribution strategy for:
        Artist: ${project.artistName}
        Track: ${project.trackTitle}
        Genre: ${project.genre}
        Release Date: ${project.releaseDate}
        Marketing Budget: $${project.marketingBudget}
        Platforms: ${project.distributionPlatforms.join(', ')}

        Please include:
        1. Timeline for release
        2. Budget allocation
        3. Platform-specific strategy
        4. Marketing recommendations
        5. Key performance indicators
      `;

      const response = await fetch('/api/copilot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            {
              role: 'system',
              content: 'You are a music industry expert helping to create distribution strategies.',
            },
            { role: 'user', content: prompt },
          ],
        }),
      });

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulatedStrategy = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const jsonStr = line.slice(6);
            try {
              const { content } = JSON.parse(jsonStr);
              accumulatedStrategy += content;
              setPartialStrategy(accumulatedStrategy);
            } catch (e) {
              // Skip malformed JSON
              continue;
            }
          }
        }
      }

      setStrategy(accumulatedStrategy);
    } catch (err) {
      console.error('Error:', err);
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <AnimatedHeader />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] gap-8">
        <div className="space-y-6">
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-[25px] p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-xl font-semibold mb-4">New Release Project</h2>

              <motion.div className="space-y-4" variants={inputVariants} whileFocus="focus">
                <div>
                  <label className="block text-sm font-medium mb-1">Artist Name</label>
                  <motion.input
                    type="text"
                    value={project.artistName}
                    onChange={(e) => setProject({ ...project, artistName: e.target.value })}
                    className="w-full p-3 border rounded-[15px] bg-[#EBEFF1] focus:ring-2 focus:ring-blue-500"
                    whileFocus="focus"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Track Title</label>
                  <motion.input
                    type="text"
                    value={project.trackTitle}
                    onChange={(e) => setProject({ ...project, trackTitle: e.target.value })}
                    className="w-full p-3 border rounded-[15px] bg-[#EBEFF1] focus:ring-2 focus:ring-blue-500"
                    whileFocus="focus"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Genre</label>
                  <motion.select
                    value={project.genre}
                    onChange={(e) => setProject({ ...project, genre: e.target.value })}
                    className="w-full p-3 border rounded-[15px] bg-[#EBEFF1] focus:ring-2 focus:ring-blue-500"
                    whileFocus="focus"
                  >
                    <option value="">Select genre</option>
                    <option value="pop">Pop</option>
                    <option value="hiphop">Hip Hop</option>
                    <option value="rnb">R&B</option>
                    <option value="electronic">Electronic</option>
                  </motion.select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Marketing Budget</label>
                  <motion.input
                    type="number"
                    value={project.marketingBudget}
                    onChange={(e) =>
                      setProject({ ...project, marketingBudget: Number(e.target.value) })
                    }
                    className="w-full p-3 border rounded-[15px] bg-[#EBEFF1] focus:ring-2 focus:ring-blue-500"
                    whileFocus="focus"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Distribution Platforms</label>
                  <div className="flex flex-wrap gap-2">
                    {platforms.map((platform) => (
                      <motion.label
                        key={platform}
                        className="inline-flex items-center p-2 bg-[#EBEFF1] rounded-[15px]"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <input
                          type="checkbox"
                          checked={project.distributionPlatforms.includes(platform)}
                          onChange={(e) => {
                            const updatedPlatforms = e.target.checked
                              ? [...project.distributionPlatforms, platform]
                              : project.distributionPlatforms.filter((p) => p !== platform);
                            setProject({ ...project, distributionPlatforms: updatedPlatforms });
                          }}
                          className="mr-2"
                        />
                        <span className="text-sm">{platform}</span>
                      </motion.label>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.button
                type="submit"
                disabled={loading}
                className="w-full bg-[#767DFF] text-white py-3 px-6 rounded-[20px] hover:bg-[#5d64ff] disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? <LoadingSpinner /> : 'Generate Strategy'}
              </motion.button>
            </form>
          </div>

          <MusicLabelChat />
        </div>

        {(strategy || partialStrategy) && (
          <StrategyDisplay strategy={strategy || partialStrategy} />
        )}
      </div>
    </div>
  );
};

export default MusicLabelDashboard;
