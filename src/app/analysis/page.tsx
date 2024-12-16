'use client';
import React, { useState, useRef, type ChangeEvent, type ReactNode } from 'react';
import { AudioAnalysisService, AudioFeatures } from '@/services/AudioAnalysisService';
import { motion } from 'framer-motion';
import { Upload, Music2 } from 'lucide-react';
import { uploadData } from '@aws-amplify/storage';
import { getCurrentUser } from '@aws-amplify/auth';
import StrategyGenerator from '@/components/StrategyGenerator';

interface AnalysisState {
  isAnalyzing: boolean;
  progress: number;
  features?: AudioFeatures;
  error?: string;
}

export default function MusicAnalysisPage() {
  const [file, setFile] = useState<File | null>(null);
  const [analysis, setAnalysis] = useState<AnalysisState>({
    isAnalyzing: false,
    progress: 0
  });
  const audioService = useRef(new AudioAnalysisService());
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    if (!selectedFile.type.startsWith('audio/')) {
      setAnalysis(prev => ({ ...prev, error: 'Please upload an audio file' }));
      return;
    }

    try {
      const userId = (await getCurrentUser()).userId;
      await uploadData({
        key: `protected/${selectedFile.name}`,
        data: selectedFile,
        options: {
          accessLevel: 'protected',
          contentType: selectedFile.type
        }
      }).result;

      setFile(selectedFile);
      if (audioRef.current) {
        audioRef.current.src = URL.createObjectURL(selectedFile);
      }
    } catch (error) {
      console.error('Upload error:', error);
      setAnalysis(prev => ({ ...prev, error: 'Upload failed. Please try again.' }));
    }
  };

  const analyzeMusic = async () => {
    if (!file) return;

    setAnalysis({ isAnalyzing: true, progress: 0 });

    try {
      const features = await audioService.current.analyzeMusicFile(file);
      setAnalysis({
        isAnalyzing: false,
        progress: 100,
        features
      });
    } catch (error) {
      setAnalysis(prev => ({
        ...prev,
        isAnalyzing: false,
        error: 'Analysis failed. Please try again.'
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 flex items-center gap-2">
          <Music2 className="w-8 h-8" />
          Music Analysis Studio
        </h1>

        {/* Upload Section */}
        <div className="bg-gray-800 rounded-lg p-8 mb-8">
          <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
            <input
              type="file"
              accept="audio/*"
              onChange={handleFileSelect}
              className="hidden"
              id="audio-upload"
            />
            <label
              htmlFor="audio-upload"
              className="cursor-pointer flex flex-col items-center gap-4"
            >
              <Upload className="w-12 h-12 text-gray-400" />
              <span className="text-gray-400">
                Drop your audio file here or click to upload
              </span>
            </label>
          </div>

          {file && (
            <div className="mt-4">
              <audio ref={audioRef} controls className="w-full mt-4" />
              <button
                onClick={analyzeMusic}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full"
                disabled={analysis.isAnalyzing}
              >
                {analysis.isAnalyzing ? 'Analyzing...' : 'Analyze Music'}
              </button>
            </div>
          )}
        </div>

        {/* Analysis Results */}
        {analysis.features && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ backgroundColor: '#1f2937', borderRadius: '0.5rem', padding: '2rem' }}
          >
            <h2 className="text-2xl font-bold mb-6">Analysis Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard
                title="Tempo"
                value={`${analysis.features.tempo} BPM`}
                icon={<Music2 className="w-6 h-6" />}
              />
              <FeatureCard
                title="Key & Scale"
                value={`${analysis.features.key} ${analysis.features.scale}`}
                icon={<Music2 className="w-6 h-6" />}
              />
              <FeatureCard
                title="Mood"
                value={analysis.features.mood}
                icon={<Music2 className="w-6 h-6" />}
              />
              <FeatureCard
                title="Energy"
                value={`${Math.round(analysis.features.energy * 100)}%`}
                icon={<Music2 className="w-6 h-6" />}
              />
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Marketing Recommendations</h3>
              <div className="bg-gray-700 rounded-lg p-6">
                <ul className="list-disc list-inside space-y-2">
                  {generateMarketingRecommendations(analysis.features).map((rec, i) => (
                    <li key={i}>{rec}</li>
                  ))}
                </ul>
              </div>
            </div>

            <StrategyGenerator audioFeatures={analysis.features} />
          </motion.div>
        )}
      </div>
    </div>
  );
}

const FeatureCard = ({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) => (
  <div className="bg-gray-700 rounded-lg p-6">
    <div className="flex items-center gap-3 mb-2">
      {icon}
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="text-2xl font-bold text-blue-400">{value}</p>
  </div>
);
function generateMarketingRecommendations(features: AudioFeatures): string[] {
  const recommendations: string[] = [];
  if (features.tempo > 120) {
    recommendations.push("Perfect for workout and high-energy playlists");
  }

  if (features.energy > 0.7) {
    recommendations.push("Target peak-time radio slots and dance venues" as never);
  }
  if (features.danceability > 0.8) {
    recommendations.push("Strong potential for viral dance challenges" as never);
  }

  if (features.mood === 'Calm') {
    recommendations.push("Ideal for study/focus and wellness playlists" as never);
  }

  return recommendations;
} 