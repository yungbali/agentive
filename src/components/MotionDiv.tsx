'use client';

import { motion, HTMLMotionProps } from 'framer-motion';

type MotionDivProps = HTMLMotionProps<"div"> & {
  className?: string;
};

const MotionDiv = motion.div as React.FC<MotionDivProps>;
export default MotionDiv; 