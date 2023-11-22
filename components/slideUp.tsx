// components/ScrollSlideUp.tsx
"use client"
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';


export default function ScrollSlideUp ({ children }: { children: React.ReactNode }) {
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    controls.start({ y: -scrollY / 2 }); // Adjust the division factor for the desired speed
  };

  useEffect(() => {
    // Initialize animation state
    controls.start({ y: 0 });

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]); // Include controls in the dependency array to avoid potential stale closures

  return <motion.div initial={{ y: 0 }} animate={controls}>{children}</motion.div>;
};

