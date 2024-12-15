import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MusicLabelChat: React.FC = () => {
  const [topic, setTopic] = useState<string>('');
  const [isHovered, setIsHovered] = useState<string | null>(null);

  return (
    <div className="p-4">
      <motion.h2
        className="text-2xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        AI Music Assistant
      </motion.h2>
      {/* Rest of your component */}
    </div>
  );
};

export default MusicLabelChat;
