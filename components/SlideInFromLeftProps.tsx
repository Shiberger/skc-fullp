"use client"

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

interface SlideInFromLeftProps {
  children: React.ReactNode;
}

const SlideInFromLeft: React.FC<SlideInFromLeftProps> = ({ children }) => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const slideInThreshold = 10; // Adjust this threshold based on your needs

      if (scrollY > slideInThreshold) {
        controls.start({ x: 0, opacity: 1, transition: { duration: 0.5 } });
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <motion.div
      initial={{ x: '-100%', opacity: 0 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default SlideInFromLeft;
