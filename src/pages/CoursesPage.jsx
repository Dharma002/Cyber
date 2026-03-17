import React from 'react';
import { motion } from 'framer-motion';

// 1. Page ke liye unique animation variant
const pageVariant = {
  initial: { 
    opacity: 0, 
    scale: 0.9, 
    filter: "blur(10px)" // Entry par halka blur futuristic lagta hai
  },
  animate: { 
    opacity: 1, 
    scale: 1, 
    filter: "blur(0px)",
    transition: { 
      duration: 0.8, 
      ease: "easeOut",
      staggerChildren: 0.2 // Isse andar ke cards ek-ek karke aayenge
    }
  },
  exit: { 
    opacity: 0, 
    y: 50, 
    transition: { duration: 0.4 } 
  }
};

// 2. Cards ke liye chota animation
const itemVariant = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

const CoursesPage = () => {
  return (
    <motion.div 
      variants={pageVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-[#02040a] text-white p-20 pt-32 text-center relative overflow-hidden"
    >
      {/* Background Glow for Courses Page */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[150px] rounded-full -z-10"></div>

      <motion.h1 
        variants={itemVariant}
        className="text-5xl md:text-7xl font-black uppercase mb-6 italic tracking-tighter"
      >
        Our <span className="text-orange-500">Courses</span>
      </motion.h1>

      <motion.p 
        variants={itemVariant}
        className="text-slate-400 max-w-2xl mx-auto mb-16 font-medium"
      >
        Master Cyber Security, Digital Forensics, and AI with our industry-leading training programs.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {["Digital Forensics", "Cyber Law", "AI Security"].map((course, i) => (
          <motion.div 
            key={i} 
            variants={itemVariant}
            whileHover={{ y: -10, borderColor: "rgba(249, 115, 22, 0.4)" }}
            className="p-10 rounded-[2.5rem] border border-white/5 bg-[#0d1117]/80 backdrop-blur-md shadow-2xl transition-all"
          >
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight text-orange-400">
              {course}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed font-medium mb-6">
              Learn advanced {course} techniques from industry experts.
            </p>
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="text-[10px] uppercase font-bold tracking-[0.2em] text-white border-b-2 border-orange-500 pb-1 hover:text-orange-400 transition-colors"
            >
              Explore Module
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CoursesPage;