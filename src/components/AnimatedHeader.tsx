import React from 'react';
import { motion } from 'framer-motion';

const AnimatedHeader: React.FC = () => {
  const letterVariants = {
    initial: { y: 100, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100
      }
    })
  };

  const text = "AI Music Label Dashboard";
  
  const blurStyles = {
    purpleBlur: "absolute w-[231px] h-[231px] left-0 top-0 bg-[#EBECFF] filter blur-[97px]",
    pinkBlur: "absolute w-[153px] h-[153px] right-6 top-7 bg-[#FFE4EF] filter blur-[82px]",
    orangeBlur: "absolute w-[145px] h-[145px] right-0 top-0 bg-[#FFEBE4] filter blur-[52px]"
  };

  return (
    <div className="relative">
      {/* Blur effects */}
      <div className={blurStyles.purpleBlur} />
      <div className={blurStyles.pinkBlur} />
      <div className={blurStyles.orangeBlur} />
      
      <motion.div 
        className="relative py-8 mb-12 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="flex justify-center items-center">
          {text.split('').map((letter, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              initial="initial"
              animate="animate"
              custom={i}
              className="text-4xl font-bold text-blue-600"
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </div>
        
        <motion.div
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
      </motion.div>
    </div>
  );
};

export default AnimatedHeader; 