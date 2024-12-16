'use client';
import React from 'react';
import { AudioFeatures } from '@/services/AudioAnalysisService';

interface MarketingStrategy {
  targetAudience: string[];
  platforms: string[];
  promotionalIdeas: string[];
  playlistRecommendations: string[];
  timingRecommendations: string[];
}

interface StrategyGeneratorProps {
  audioFeatures: AudioFeatures;
}

export const StrategyGenerator: React.FC<StrategyGeneratorProps> = ({ audioFeatures }) => {
  const strategy = generateMarketingStrategy(audioFeatures);

  return (
    <div className="bg-gray-800 rounded-lg p-6 mt-8">
      <h3 className="text-2xl font-bold mb-6">Marketing Strategy</h3>
      
      <div className="space-y-6">
        <StrategySection 
          title="Target Audience" 
          items={strategy.targetAudience}
          icon="👥"
        />
        
        <StrategySection 
          title="Recommended Platforms" 
          items={strategy.platforms}
          icon="📱"
        />
        
        <StrategySection 
          title="Promotional Ideas" 
          items={strategy.promotionalIdeas}
          icon="💡"
        />
        
        <StrategySection 
          title="Playlist Recommendations" 
          items={strategy.playlistRecommendations}
          icon="🎵"
        />
        
        <StrategySection 
          title="Best Release Timing" 
          items={strategy.timingRecommendations}
          icon="⏰"
        />
      </div>
    </div>
  );
};

const StrategySection = ({ title, items, icon }: { title: string; items: string[]; icon: string }) => (
  <div className="bg-gray-700 rounded-lg p-4">
    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
      <span>{icon}</span>
      {title}
    </h4>
    <ul className="list-disc list-inside space-y-2">
      {items.map((item, index) => (
        <li key={index} className="text-gray-200">{item}</li>
      ))}
    </ul>
  </div>
);

function generateMarketingStrategy(features: AudioFeatures): MarketingStrategy {
  const strategy: MarketingStrategy = {
    targetAudience: [],
    platforms: [],
    promotionalIdeas: [],
    playlistRecommendations: [],
    timingRecommendations: []
  };

  // Target Audience based on features
  if (features.tempo > 120 && features.energy > 0.7) {
    strategy.targetAudience.push("Young, energetic audience (18-25)");
    strategy.targetAudience.push("Fitness enthusiasts");
  } else if (features.mood === 'Calm') {
    strategy.targetAudience.push("Study/work focus groups");
    strategy.targetAudience.push("Meditation and wellness community");
  }

  // Platform recommendations
  if (features.danceability > 0.7) {
    strategy.platforms.push("TikTok - High viral potential");
    strategy.platforms.push("Instagram Reels");
  }
  strategy.platforms.push("Spotify");
  strategy.platforms.push("Apple Music");

  // Promotional ideas based on features
  if (features.energy > 0.8) {
    strategy.promotionalIdeas.push("Create high-energy video content");
    strategy.promotionalIdeas.push("Partner with fitness influencers");
  } else if (features.mood === 'Calm') {
    strategy.promotionalIdeas.push("Create ambient visualizer videos");
    strategy.promotionalIdeas.push("Partner with wellness brands");
  }

  // Playlist recommendations
  if (features.tempo > 120) {
    strategy.playlistRecommendations.push("Workout/Exercise playlists");
    strategy.playlistRecommendations.push("High Energy Mix");
  } else if (features.mood === 'Calm') {
    strategy.playlistRecommendations.push("Focus/Study playlists");
    strategy.playlistRecommendations.push("Chill Vibes");
  }

  // Timing recommendations
  if (features.energy > 0.7) {
    strategy.timingRecommendations.push("Release during peak workout hours (6-8 AM, 5-7 PM)");
    strategy.timingRecommendations.push("Target weekend release for maximum impact");
  } else {
    strategy.timingRecommendations.push("Release during typical study/work hours");
    strategy.timingRecommendations.push("Mid-week release for steady growth");
  }

  return strategy;
}

export default StrategyGenerator; 