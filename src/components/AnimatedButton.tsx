import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  onClick,
  children,
  disabled = false,
  className = '',
  type = 'button',
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`relative overflow-hidden ${className}`}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 30,
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0"
        whileHover={{ opacity: 0.2 }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="relative z-10 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {children}
      </motion.div>

      <motion.div
        className="absolute inset-0 border-2 border-transparent"
        whileHover={{
          borderColor: 'rgba(59, 130, 246, 0.5)',
          transition: { duration: 0.2 },
        }}
      />
    </motion.button>
  );
};

export default AnimatedButton;
