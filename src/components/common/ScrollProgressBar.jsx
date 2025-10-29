import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgressBar = () => {
  // useScroll hook para trackear el progreso del scroll
  const { scrollYProgress } = useScroll();
  
  // useSpring para hacer la animación más suave
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-[var(--color-primary)] origin-left z-[100]"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgressBar;
