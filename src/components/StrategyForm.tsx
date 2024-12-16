'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { StrategyInput } from '@/types';

export default function StrategyForm({ onSubmit, isLoading }: { 
  onSubmit: (input: StrategyInput) => void;
  isLoading: boolean;
}) {
  const [input, setInput] = useState<StrategyInput>({
    region: '',
    category: '',
    timeframe: '',
    budget: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(input);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Region</label>
          <select
            value={input.region}
            onChange={(e) => setInput({ ...input, region: e.target.value })}
            className="w-full bg-gray-800 rounded-lg px-4 py-2"
            required
          >
            <option value="">Select Region</option>
            <option value="West Africa">West Africa</option>
            <option value="East Africa">East Africa</option>
            <option value="South Africa">South Africa</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Category</label>
          <select
            value={input.category}
            onChange={(e) => setInput({ ...input, category: e.target.value })}
            className="w-full bg-gray-800 rounded-lg px-4 py-2"
            required
          >
            <option value="">Select Category</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Radio Promotion">Radio Promotion</option>
            <option value="Live Events">Live Events</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Timeframe</label>
          <select
            value={input.timeframe}
            onChange={(e) => setInput({ ...input, timeframe: e.target.value })}
            className="w-full bg-gray-800 rounded-lg px-4 py-2"
            required
          >
            <option value="">Select Timeframe</option>
            <option value="3 Months">3 Months</option>
            <option value="6 Months">6 Months</option>
            <option value="12 Months">12 Months</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Budget Range</label>
          <select
            value={input.budget}
            onChange={(e) => setInput({ ...input, budget: e.target.value })}
            className="w-full bg-gray-800 rounded-lg px-4 py-2"
            required
          >
            <option value="">Select Budget</option>
            <option value="$1,000 - $5,000">$1,000 - $5,000</option>
            <option value="$5,000 - $10,000">$5,000 - $10,000</option>
            <option value="$10,000+">$10,000+</option>
          </select>
        </div>
      </div>

      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? 'Generating...' : 'Generate Strategy'}
      </Button>
    </form>
  );
} 