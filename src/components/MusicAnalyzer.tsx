'use client';
import React, { useState } from 'react';
import { uploadData } from 'aws-amplify/storage';
import { Button } from "@/components/ui/button";

interface AudioAnalysis {
  tempo: number;
  key: string;
  mood: string;
  marketingInsights: string[];
}

const MusicAnalyzer = () => {
  const [file, setFile] = useState<File | null>(null);
  const [analysis, setAnalysis] = useState<AudioAnalysis | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type and duration
    if (!file.type.includes('audio/')) {
      alert('Please upload an audio file');
      return;
    }

    setFile(file);
    try {
      // Upload to S3
      const result = await uploadData({
        key: `analysis/${file.name}`,
        data: file,
        options: {
          contentType: file.type,
          accessLevel: 'private'
        }
      });

      // Here we would call our analysis API
      setLoading(true);
      // TODO: Add actual audio analysis API call
      const mockAnalysis: AudioAnalysis = {
        tempo: 120,
        key: 'C Major',
        mood: 'Energetic',
        marketingInsights: [
          'Target workout playlists',
          'Ideal for morning radio slots',
          'Appeal to dance music audiences'
        ]
      };
      setAnalysis(mockAnalysis);

    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold mb-4">Music Analysis</h2>
        <input
          type="file"
          accept="audio/*"
          onChange={handleFileUpload}
          className="mb-4"
        />
      </div>

      {loading && <div>Analyzing music...</div>}

      {analysis && (
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Analysis Results</h3>
          <p>Tempo: {analysis.tempo} BPM</p>
          <p>Key: {analysis.key}</p>
          <p>Mood: {analysis.mood}</p>
          <div>
            <h4 className="font-semibold">Marketing Insights:</h4>
            <ul className="list-disc pl-5">
              {analysis.marketingInsights.map((insight, i) => (
                <li key={i}>{insight}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicAnalyzer; 