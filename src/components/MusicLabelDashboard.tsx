import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedHeader from './AnimatedHeader';
import LoadingSpinner from './LoadingSpinner';
import MusicLabelChat from './MusicLabelChat';
import StrategyDisplay from './StrategyDisplay';
import { MusicLabelAgent } from '../agents/MusicLabelAgent';

interface Project {
  artistName: string;
  trackTitle: string;
  genre: string;
  releaseDate: string;
  marketingBudget: number;
  distributionPlatforms: string[];
}

const platforms = ['Spotify', 'Apple Music', 'YouTube Music', 'Amazon Music', 'TikTok'];

const _formVariants = {
  hover: {
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10,
    },
  },
};

const _error = null;

const MusicLabelDashboard: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState<Project>({
    artistName: '',
    trackTitle: '',
    genre: '',
    releaseDate: '',
    marketingBudget: 0,
    distributionPlatforms: []
  });
  const [strategy, setStrategy] = useState<string>('');
  const [partialStrategy, setPartialStrategy] = useState<string>('');
  const [isStreaming, setIsStreaming] = useState(false);
  const agent = new MusicLabelAgent();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProject(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setIsStreaming(true);
    setStrategy('');
    
    try {
      const response = await agent.planDistributionStrategy(project);
      
      if (!response.body) {
        throw new Error('No response body');
      }

      const reader = response.body.getReader();
      let accumulatedStrategy = '';
      
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        const chunk = new TextDecoder().decode(value);
        accumulatedStrategy += chunk;
        setStrategy(accumulatedStrategy);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
      setIsStreaming(false);
    }
  };

  const handlePlatformChange = async (platform: string) => {
    try {
      setProject(prev => ({
        ...prev,
        distributionPlatforms: prev.distributionPlatforms.includes(platform)
          ? prev.distributionPlatforms.filter(p => p !== platform)
          : [...prev.distributionPlatforms, platform]
      }));
    } catch (error) {
      console.error('Error updating platforms:', error);
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

              <motion.div className="space-y-4" variants={_formVariants} whileFocus="focus">
                <div>
                  <label className="block text-sm font-medium mb-1">Artist Name</label>
                  <motion.input
                    type="text"
                    name="artistName"
                    value={project.artistName}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-[15px] bg-[#EBEFF1] focus:ring-2 focus:ring-blue-500"
                    whileFocus="focus"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Track Title</label>
                  <motion.input
                    type="text"
                    name="trackTitle"
                    value={project.trackTitle}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-[15px] bg-[#EBEFF1] focus:ring-2 focus:ring-blue-500"
                    whileFocus="focus"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Genre</label>
                  <motion.select
                    name="genre"
                    value={project.genre}
                    onChange={handleInputChange}
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
                    name="marketingBudget"
                    value={project.marketingBudget}
                    onChange={handleInputChange}
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
                          onChange={() => handlePlatformChange(platform)}
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
          <StrategyDisplay 
            strategy={strategy || partialStrategy} 
            isStreaming={isStreaming} 
          />
        )}
      </div>
    </div>
  );
};

export default MusicLabelDashboard;
