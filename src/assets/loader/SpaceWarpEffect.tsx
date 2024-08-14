import React from 'react';
import { motion } from 'framer-motion';

interface SpaceWarpEffectProps {
  isActive: boolean;
}

const SpaceWarpEffect: React.FC<SpaceWarpEffectProps> = ({ isActive }) => {
  return (
    <motion.div
      className={`fixed inset-0 pointer-events-none ${isActive ? 'z-50' : 'z-0'}`}
      initial={{ opacity: 0, scale: 1 }}
      animate={isActive ? { opacity: 1, scale: 1.5 } : { opacity: 0, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <div className="absolute inset-0 bg-black overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: '2px',
              height: '2px',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: `0 0 ${Math.random() * 2 + 1}px rgba(255, 255, 255, 0.8)`,
            }}
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [0.5, 1, 0.5],
              transition: {
                duration: 2 + Math.random() * 2,
                ease: "easeInOut",
                repeat: Infinity,
              }
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SpaceWarpEffect;
