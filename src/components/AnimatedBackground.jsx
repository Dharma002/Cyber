import React, { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedBackground = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  
  // Deterministic particle generation for a professional look
  const particles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      size: Math.abs(Math.sin(i)) * 10 + 5,
      top: `${(Math.abs(Math.cos(i * 7)) * 100)}%`,
      left: `${(Math.abs(Math.sin(i * 13)) * 100)}%`,
      duration: Math.abs(Math.sin(i * 3)) * 20 + 20, // Slower movement
      delay: Math.abs(Math.cos(i * 5)) * 5,
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-0 bg-[#f8fafc] overflow-hidden pointer-events-none">
      
      {/* 1. PROFESSIONAL SUBTLE GRID */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 opacity-[0.4]"
      >
        <div className="w-full h-[200%] bg-[linear-gradient(#e2e8f0_1px,transparent_1px),linear-gradient(90deg,#e2e8f0_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </motion.div>

      {/* 2. SOFT INSTITUTIONAL GLOWS (Blue Tones) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-15%] right-[-10%] w-[60%] h-[70%] bg-blue-100 blur-[120px] rounded-full"
      />
      
      <motion.div 
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -30, 0],
          y: [0, 20, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[60%] bg-blue-50 blur-[100px] rounded-full"
      />

      {/* 3. RADIAL LIGHT EFFECT (Focus on Content) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.8)_100%)]" />

      {/* 4. FLOATING SOFT ORBS (Instead of Cyber Particles) */}
      <motion.div style={{ y: y2 }} className="absolute inset-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.4, 0],
              y: [-20, -120]
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
              backgroundColor: p.id % 2 === 0 ? '#bfdbfe' : '#dbeafe', // Very light blues
              borderRadius: '50%',
              filter: 'blur(4px)',
            }}
          />
        ))}
      </motion.div>

      {/* 5. GRAIN OVERLAY (Premium Paper Texture Feel) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] contrast-150 pointer-events-none"></div>
    </div>
  );
};

export default AnimatedBackground;