import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import LoadingSpinner from '@/components/LoadingSpinner';

const MusicLabelDashboard: React.FC = () => {
  const [project, setProject] = useState({
    artistName: '',
    trackTitle: '',
    genre: '',
    marketingBudget: '',
    distributionPlatforms: [] as string[],
  });
  const [loading, setLoading] = useState(false);
  const [platforms, setPlatforms] = useState(['Spotify', 'Apple Music', 'Tidal', 'Amazon Music']);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Here you would normally send the form data to the server
    // For now, we'll just simulate a delay
    setTimeout(() => {
      setLoading(false);
      // Optionally, you can reset the form or show a success message
    }, 2000);
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-2xl font-bold mb-6">New Release Project</h2>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="artist">Artist Name</Label>
            <Input 
              id="artist"
              value={project.artistName}
              onChange={(e) => setProject({...project, artistName: e.target.value})}
              placeholder="Enter artist name"
              className="bg-gray-50/50 w-full p-3 rounded-[15px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="trackTitle">Track Title</Label>
            <Input 
              id="trackTitle"
              value={project.trackTitle}
              onChange={(e) => setProject({...project, trackTitle: e.target.value})}
              placeholder="Enter track title"
              className="bg-gray-50/50 w-full p-3 rounded-[15px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="genre">Genre</Label>
            <Input 
              id="genre"
              value={project.genre}
              onChange={(e) => setProject({...project, genre: e.target.value})}
              placeholder="Enter genre"
              className="bg-gray-50/50 w-full p-3 rounded-[15px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="marketingBudget">Marketing Budget</Label>
            <Input 
              id="marketingBudget"
              value={project.marketingBudget}
              onChange={(e) => setProject({...project, marketingBudget: e.target.value})}
              placeholder="Enter marketing budget"
              className="bg-gray-50/50 w-full p-3 rounded-[15px]"
            />
          </div>

          <div className="space-y-2">
            <Label>Distribution Platforms</Label>
            <div className="grid grid-cols-2 gap-4">
              {platforms.map(platform => (
                <div key={platform} className="flex items-center space-x-2">
                  <Checkbox
                    id={platform.toLowerCase()}
                    checked={project.distributionPlatforms.includes(platform)}
                    onCheckedChange={(checked) => {
                      const updatedPlatforms = checked
                        ? [...project.distributionPlatforms, platform]
                        : project.distributionPlatforms.filter(p => p !== platform);
                      setProject({...project, distributionPlatforms: updatedPlatforms});
                    }}
                  />
                  <Label htmlFor={platform.toLowerCase()}>{platform}</Label>
                </div>
              ))}
            </div>
          </div>

          <Button 
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-[20px]"
          >
            {loading ? <LoadingSpinner /> : 'Generate Strategy'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default MusicLabelDashboard; 