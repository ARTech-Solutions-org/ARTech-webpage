import React from 'react';
import { motion } from 'framer-motion';

interface DoodleArrowProps {
  className?: string;
  direction?: 'right' | 'down-right' | 'up-right';
}

export function DoodleArrow({ className = "", direction = 'right' }: DoodleArrowProps) {
  // Simple handcrafted SVG paths for a squiggly arrow
  const paths = {
    'right': "M 5 20 Q 20 5, 40 20 T 70 20 L 60 10 M 70 20 L 60 30",
    'down-right': "M 5 5 Q 15 25, 30 20 T 50 40 L 40 30 M 50 40 L 55 25",
    'up-right': "M 5 40 Q 20 20, 30 35 T 50 10 L 40 15 M 50 10 L 55 25"
  };

  return (
    <svg 
      viewBox="0 0 80 50" 
      className={`stroke-primary fill-none stroke-[3] stroke-linecap-round stroke-linejoin-round ${className}`}
    >
      <motion.path 
        d={paths[direction]}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
      />
    </svg>
  );
}
