import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  isActive: boolean;
}

const PageTransition: React.FC<PageTransitionProps> = ({ isActive }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1.1 : 1,
      }}
      transition={{ 
        duration: 0.5,
        ease: "easeInOut"
      }}
      style={{
        zIndex: isActive ? 25 : -1,
      }}
    />
  );
};

export default PageTransition;