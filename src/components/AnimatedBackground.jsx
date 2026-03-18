import React, { useMemo, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedBackground = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  
  // Deterministic particle generation
  const particles = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      size: Math.abs(Math.sin(i)) * 4 + 2,
      top: `${(Math.abs(Math.cos(i * 7)) * 100)}%`,
      left: `${(Math.abs(Math.sin(i * 13)) * 100)}%`,
      duration: Math.abs(Math.sin(i * 3)) * 10 + 10,
      delay: Math.abs(Math.cos(i * 5)) * 5,
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-0 bg-[#00020a] overflow-hidden pointer-events-none">
      {/* 1. MOVING GRID SYSTEM */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 opacity-[0.15]"
        initial={{ backgroundPosition: '0 0' }}
        animate={{ backgroundPosition: '0 50px' }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-[200%] bg-[linear-gradient(#1e293b_1px,transparent_1px),linear-gradient(90deg,#1e293b_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </motion.div>

      {/* 2. DYNAMIC NEON GLOWS */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/20 blur-[150px] rounded-full"
      />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
          x: [0, -40, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-600/20 blur-[120px] rounded-full"
      />

      {/* 3. RADIAL SCAN EFFECT */}
      <motion.div 
        animate={{ 
          opacity: [0, 0.3, 0],
          scale: [0.8, 1.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.1)_0%,transparent_70%)]"
      />

      {/* 4. FLOATING DATA PARTICLES */}
      <motion.div style={{ y: y2 }} className="absolute inset-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: [0, 0.8, 0],
              y: -100
            }}
            transition={{ 
              duration: p.duration, 
              repeat: Infinity, 
              delay: p.delay,
              ease: "linear"
            }}
            style={{
              position: 'absolute',
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              backgroundColor: p.id % 2 === 0 ? '#22d3ee' : '#3b82f6',
              borderRadius: '50%',
              filter: 'blur(1px)',
              boxShadow: `0 0 10px ${p.id % 2 === 0 ? '#22d3ee' : '#3b82f6'}`,
            }}
          />
        ))}
      </motion.div>

      {/* 5. VIGNETTE OVERLAY */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#00020a_100%)] opacity-60"></div>
    </div>
  );
};

export default AnimatedBackground;