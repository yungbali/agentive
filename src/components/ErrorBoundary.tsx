import React, { Component, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

const errorVariants = {
  initial: {
    opacity: 0,
    y: -20,
    scale: 0.95
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.95,
    transition: {
      duration: 0.2
    }
  }
};

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <AnimatePresence>
          <motion.div
            className="fixed top-4 right-4 max-w-md z-50"
            variants={errorVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.div 
              className="p-4 bg-red-50 border border-red-200 rounded-lg shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.h2 
                className="text-red-800 font-bold mb-2 flex items-center"
                initial={{ x: -20 }}
                animate={{ x: 0 }}
              >
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-2" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1.1, 1]
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </motion.svg>
                Something went wrong
              </motion.h2>
              <motion.p 
                className="text-red-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {this.state.error?.message}
              </motion.p>
              <motion.button
                className="mt-3 text-sm text-red-800 hover:text-red-900"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.reload()}
              >
                Reload page
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      );
    }

    return this.props.children;
  }
} 