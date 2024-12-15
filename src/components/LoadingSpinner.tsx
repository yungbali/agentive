import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner: React.FC = () => {
  const containerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  const dotVariants = {
    animate: (i: number) => ({
      scale: [1, 1.5, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        delay: i * 0.2,
      },
    }),
  };

  return (
    <motion.div
      className="flex items-center justify-center space-x-2"
      variants={containerVariants}
      animate="animate"
    >
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 bg-blue-500 rounded-full"
          variants={dotVariants}
          animate="animate"
          custom={i}
        />
      ))}
    </motion.div>
  );
};

export default LoadingSpinner;
