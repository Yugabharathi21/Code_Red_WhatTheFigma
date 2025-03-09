import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

interface SectionTransitionProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const directionVariants = {
  up: { y: 50, x: 0 },
  down: { y: -50, x: 0 },
  left: { x: 50, y: 0 },
  right: { x: -50, y: 0 },
};

const SectionTransition: React.FC<SectionTransitionProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = ''
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0,
        ...directionVariants[direction]
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : directionVariants[direction].x,
        y: isInView ? 0 : directionVariants[direction].y,
      }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SectionTransition; 