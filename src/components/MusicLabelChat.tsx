import React, { useState } from 'react';
import '@copilotkit/react-ui/styles.css';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';

const ChatBubble = dynamic(() => import('@copilotkit/react-ui').then((mod) => mod.ChatBubble), {
  ssr: false,
});

const MusicLabelChat: React.FC = () => {
  const [topic, setTopic] = useState<string>('');
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const musicTopics = [
    'Distribution Strategy',
    'Marketing Plan',
    'Playlist Submission',
    'Budget Planning',
    'Release Timeline',
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const chatVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
      },
    },
  };

  return (
    <motion.div className="p-4" initial="hidden" animate="visible" variants={containerVariants}>
      <motion.h2
        className="text-xl mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        AI Music Assistant
      </motion.h2>

      <motion.div className="mb-4 flex flex-wrap gap-2">
        <AnimatePresence>
          {musicTopics.map((t, index) => (
            <motion.button
              key={t}
              onClick={() => setTopic(t)}
              onHoverStart={() => setIsHovered(t)}
              onHoverEnd={() => setIsHovered(null)}
              className={`px-3 py-1 rounded-full text-sm relative ${
                topic === t ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'
              }`}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.1 },
              }}
              exit={{ opacity: 0, y: -20 }}
            >
              {t}
              {isHovered === t && (
                <motion.div
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  Click to discuss {t.toLowerCase()}
                </motion.div>
              )}
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {typeof window !== 'undefined' && (
        <motion.div variants={chatVariants} initial="hidden" animate="visible" className="relative">
          <ChatBubble
            messages={[
              {
                role: 'system',
                content: `I am an AI music label agent specializing in ${topic || 'music industry guidance'}. 
                         I can help with distribution, marketing, and strategic planning.`,
              },
            ]}
          />
          <motion.div
            className="absolute -top-2 -left-2 w-full h-full border-2 border-blue-200 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ zIndex: -1 }}
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default MusicLabelChat;
