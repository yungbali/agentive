// pages/index.tsx
'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion, Variants } from 'framer-motion';
import { AgentiveWorkflow } from '../components/AgentiveWorkflow';

const MusicLabelDashboard = dynamic(() => import('../components/MusicLabelDashboard'), {
  ssr: false,
});

const pageVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    transition: {
      duration: 0.5,
    },
  },
};

const backgroundVariants: Variants = {
  initial: {
    backgroundPosition: '0% 0%',
  },
  animate: {
    backgroundPosition: '100% 100%',
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: 'reverse' as const,
    },
  },
};

export default function Home() {
  return (
    <motion.div
      className="min-h-screen relative overflow-hidden"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-gray-50 to-purple-50"
        variants={backgroundVariants}
        style={{
          backgroundSize: '400% 400%',
          filter: 'blur(40px)',
          opacity: 0.7,
          zIndex: -1,
        }}
      />

      <motion.div
        className="relative z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <MusicLabelDashboard />
        <AgentiveWorkflow />
      </motion.div>
    </motion.div>
  );
}
