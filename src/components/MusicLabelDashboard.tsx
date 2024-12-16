'use client';
import React from 'react';
import { MusicLabelAgent } from '../agents/MusicLabelAgent';
import StrategyDisplay from './StrategyDisplay';
import { uploadData } from 'aws-amplify/storage';
import MusicAnalyzer from './MusicAnalyzer';

interface Project {
  artistName: string;
  trackTitle: string;
  genre: string;
  releaseDate: string;
  marketingBudget: number;
  distributionPlatforms: string[];
}

const MusicLabelDashboard = () => {
  const [loading, setLoading] = React.useState(false);
  const [project, setProject] = React.useState<Project>({
    artistName: '',
    trackTitle: '',
    genre: '',
    releaseDate: '',
    marketingBudget: 0,
    distributionPlatforms: []
  });
  const [strategy, setStrategy] = React.useState('');
  const [partialStrategy, setPartialStrategy] = React.useState('');
  const [isStreaming, setIsStreaming] = React.useState(false);
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

  const handlePlatformChange = (platform: string) => {
    setProject(prev => ({
      ...prev,
      distributionPlatforms: prev.distributionPlatforms.includes(platform)
        ? prev.distributionPlatforms.filter((p: string) => p !== platform)
        : [...prev.distributionPlatforms, platform]
    }));
  };

  const handleFileUpload = async (file: File) => {
    try {
      const result = await uploadData({
        key: `music/${file.name}`,
        data: file,
        options: {
          contentType: file.type
        }
      });
      console.log('Upload success:', result);
    } catch (error) {
      console.error('Upload error:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div
        className="grid md:grid-cols-[1fr,1.5fr] gap-8"
      >
        {/* Input Form Section */}
        <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-[25px] p-6 md:p-8 h-fit">
          <h2 className="text-2xl font-bold mb-6">New Release Project</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium">Artist Name</label>
              <input
                type="text"
                name="artistName"
                value={project.artistName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Track Title</label>
              <input
                type="text"
                name="trackTitle"
                value={project.trackTitle}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Genre</label>
              <select
                name="genre"
                value={project.genre}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select Genre</option>
                <option value="Pop">Pop</option>
                <option value="Hip Hop">Hip Hop</option>
                <option value="R&B">R&B</option>
                <option value="Rock">Rock</option>
                <option value="Electronic">Electronic</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Marketing Budget ($)</label>
              <input
                type="number"
                name="marketingBudget"
                value={project.marketingBudget}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                min="0"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Distribution Platforms</label>
              <div className="grid grid-cols-2 gap-2">
                {['Spotify', 'Apple Music', 'YouTube Music', 'Amazon Music', 'TikTok'].map((platform) => (
                  <label key={platform} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={project.distributionPlatforms.includes(platform)}
                      onChange={() => handlePlatformChange(platform)}
                      className="mr-2"
                    />
                    <span className="text-sm">{platform}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg font-medium 
                hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                disabled:opacity-50 disabled:cursor-not-allowed transition-colors
                flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent" />
                  Generating Strategy...
                </>
              ) : (
                'Generate Strategy'
              )}
            </button>
          </form>
        </div>

        {(strategy || partialStrategy) && (
          <StrategyDisplay 
            strategy={strategy || partialStrategy} 
            isStreaming={isStreaming} 
          />
        )}

        <MusicAnalyzer />
      </div>
    </div>
  );
};

export default MusicLabelDashboard;
