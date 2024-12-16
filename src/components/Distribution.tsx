'use client';

import { useState } from 'react';
import { Music, Upload, Globe, Calendar, DollarSign } from 'lucide-react';
import { Button } from './ui/button';
import dynamic from 'next/dynamic';

const MotionDiv = dynamic(() => import('./MotionDiv').then(mod => mod.default), { ssr: false });

interface DistributionPlatform {
  id: string;
  name: string;
  logo: string;
  regions: string[];
  type: 'streaming' | 'download' | 'both';
}

const platforms: DistributionPlatform[] = [
  {
    id: 'spotify',
    name: 'Spotify',
    logo: '/platforms/spotify.svg',
    regions: ['Global', 'Africa'],
    type: 'streaming'
  },
  {
    id: 'boomplay',
    name: 'Boomplay',
    logo: '/platforms/boomplay.svg',
    regions: ['Africa'],
    type: 'both'
  },
  {
    id: 'audiomack',
    name: 'Audiomack',
    logo: '/platforms/audiomack.svg',
    regions: ['Africa', 'Global'],
    type: 'both'
  }
];

export default function Distribution() {
  const [step, setStep] = useState(1);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  return (
    <div className="space-y-6">
      {/* Step 1: Upload */}
      {step === 1 && (
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center">
            <input
              type="file"
              onChange={handleFileUpload}
              accept="audio/*"
              className="hidden"
              id="music-upload"
              multiple
            />
            <label
              htmlFor="music-upload"
              className="cursor-pointer flex flex-col items-center gap-4"
            >
              <Upload className="w-12 h-12 text-gray-400" />
              <div className="text-gray-400">
                <span className="text-blue-500">Click to upload</span> or drag and drop
              </div>
              <div className="text-sm text-gray-500">MP3, WAV, FLAC (max 50MB)</div>
            </label>
          </div>
          {files.length > 0 && (
            <div className="space-y-2">
              {files.map((file, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <Music className="w-4 h-4" />
                  {file.name}
                </div>
              ))}
            </div>
          )}
          <Button
            onClick={() => setStep(2)}
            disabled={files.length === 0}
            className="w-full"
          >
            Continue to Platforms
          </Button>
        </MotionDiv>
      )}

      {/* Step 2: Platform Selection */}
      {step === 2 && (
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {platforms.map((platform) => (
              <div
                key={platform.id}
                onClick={() => {
                  setSelectedPlatforms(prev =>
                    prev.includes(platform.id)
                      ? prev.filter(id => id !== platform.id)
                      : [...prev, platform.id]
                  );
                }}
                className={`cursor-pointer p-4 rounded-lg border-2 transition-colors ${
                  selectedPlatforms.includes(platform.id)
                    ? 'border-blue-500 bg-blue-500/10'
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="w-12 h-12 mx-auto mb-2"
                />
                <div className="text-center">
                  <div className="font-medium">{platform.name}</div>
                  <div className="text-xs text-gray-400">
                    {platform.regions.join(', ')}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button
            onClick={() => setStep(3)}
            disabled={selectedPlatforms.length === 0}
            className="w-full"
          >
            Continue to Release Details
          </Button>
        </MotionDiv>
      )}

      {/* Step 3: Release Details */}
      {step === 3 && (
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Release Date</label>
              <input
                type="date"
                className="w-full bg-gray-800 rounded-lg px-4 py-2"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Genre</label>
              <select className="w-full bg-gray-800 rounded-lg px-4 py-2">
                <option value="">Select Genre</option>
                <option value="afrobeats">Afrobeats</option>
                <option value="hiphop">Hip Hop</option>
                <option value="gospel">Gospel</option>
              </select>
            </div>
          </div>
          <Button className="w-full">Start Distribution</Button>
        </MotionDiv>
      )}
    </div>
  );
} 