import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

interface ScrollFadeInProps {
  children: React.ReactNode;
}

const ScrollFadeIn: React.FC<ScrollFadeInProps> = ({ children }) => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeInThreshold = 100;

      if (scrollY > fadeInThreshold) {
        controls.start({ opacity: 1 });
      } else {
        controls.start({ opacity: 0 });
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);

    // Add controls as a dependency to the useEffect hook
  }, [controls]);

  return <motion.div initial={{ opacity: 0 }} animate={controls}>{children}</motion.div>;
};

export default ScrollFadeIn;
