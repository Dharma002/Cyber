import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      const target = e.target;
      setIsHovering(
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a')
      );
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* 1. CORE PIXEL: TARGET LOCK */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-cyan-400 rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_#22d3ee]"
        animate={{ x: mousePos.x - 3, y: mousePos.y - 3, scale: isHovering ? 1.5 : 1 }}
        transition={{ type: 'spring', damping: 30, stiffness: 400 }}
      />
      
      {/* 2. FORENSIC RETICLE: TARGETING CIRCLE */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none z-[9998]"
        animate={{ x: mousePos.x - 24, y: mousePos.y - 24, rotate: isHovering ? 90 : 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 150 }}
      >
        <div className={`w-12 h-12 border border-cyan-500/30 rounded-full relative transition-all duration-300 ${isHovering ? 'scale-125 border-cyan-400 opacity-100' : 'opacity-40'}`}>
           {/* Crosshair Markers */}
           <div className="absolute top-0 left-1/2 -ml-[0.5px] w-[1px] h-2 bg-cyan-400/60"></div>
           <div className="absolute bottom-0 left-1/2 -ml-[0.5px] w-[1px] h-2 bg-cyan-400/60"></div>
           <div className="absolute left-0 top-1/2 -mt-[0.5px] h-[1px] w-2 bg-cyan-400/60"></div>
           <div className="absolute right-0 top-1/2 -mt-[0.5px] h-[1px] w-2 bg-cyan-400/60"></div>
        </div>
      </motion.div>

      {/* 3. AMBIENT SCANNING SENSOR (Lag-Trail) */}
      <motion.div
        className="fixed top-0 left-0 w-24 h-24 border-[0.5px] border-cyan-500/5 rounded-full pointer-events-none z-[9997]"
        animate={{ x: mousePos.x - 48, y: mousePos.y - 48 }}
        transition={{ type: 'spring', damping: 40, stiffness: 80, mass: 2 }}
      />
    </>
  );
};

export default CustomCursor;