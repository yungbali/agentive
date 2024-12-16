'use client';

import { useEffect, useRef, useState } from 'react';

export default function AudioAnalyzer() {
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const context = new (window.AudioContext || (window as any).webkitAudioContext)();
      setAudioContext(context);

      return () => {
        context.close();
      };
    } else {
      console.warn('AudioContext is not available in the server environment.');
    }
  }, []);

  if (!audioContext) {
    return <div>Initializing audio context...</div>;
  }

  return (
    <div>
      <h2>Audio Analysis Component</h2>
      {/* Add your audio analysis UI here */}
    </div>
  );
} 