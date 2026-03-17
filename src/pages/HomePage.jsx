import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#00020a] overflow-x-hidden">
      
      {/* 1. BACKGROUND INFRASTRUCTURE */}
      <div className="fixed inset-0 z-0 opacity-[0.15]" 
            style={{ backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`, backgroundSize: '50px 50px' }}>
      </div>
      
      {/* NEON RADIAL GRADIENTS */}
      <div className="fixed top-[-20%] right-[-10%] w-[70%] h-[70%] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* 2. MAIN CONTENT WRAPPER */}
      <div className="max-w-8xl mx-auto w-full min-h-screen flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 relative z-20 px-8 lg:px-20 py-32 lg:py-0">
        
        {/* LEFT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left w-full lg:w-[55%] z-30"
        >
          <div className="inline-flex items-center gap-2 bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 px-4 py-1.5 rounded-full mb-8 shadow-[0_0_15px_rgba(14,165,233,0.1)]">
            <Activity size={14} className="text-cyan-400 animate-pulse" />
            <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-[0.3em]">
              Node_Status: Encrypted_Link_Active
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[110px] font-black leading-[0.85] tracking-tighter uppercase mb-8 italic">
            <span className="text-white block drop-shadow-lg">CRIMEX</span> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)] block mt-2">
              INTELLIGENCE
            </span>
          </h1>

          <div className="flex items-center gap-4 mb-10 justify-center lg:justify-start">
            <div className="h-[1px] w-20 bg-gradient-to-r from-cyan-500 to-transparent"></div>
            <span className="font-mono text-cyan-500/80 text-[10px] tracking-[0.4em] uppercase">Security Level: Class-A</span>
          </div>

          <p className="text-slate-400 text-sm md:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-mono mb-12">
            <span className="text-cyan-500 font-bold">{">"}</span> Deployment of advanced <span className="text-white">cyber-defense</span> protocols. Master the art of digital warfare and secure the future.
          </p>

          <Link to="/register">
            <button className="px-10 py-4 bg-gradient-to-r from-blue-700 to-blue-500 text-white font-black uppercase text-sm tracking-widest rounded-lg shadow-[0_10px_30px_rgba(29,78,216,0.4)] hover:scale-105 transition-all active:scale-95">
              Register Now
            </button>
          </Link>
        </motion.div>

        {/* RIGHT CONTENT: LARGE GLOBE WITH CIRCULAR LOGO CORE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative w-full lg:w-[45%] flex justify-center items-center h-[400px] lg:h-[600px]"
        >
          {/* Outer Orbital Rings */}
          <div className="absolute w-full h-full border border-cyan-500/10 rounded-full animate-[spin_30s_linear_infinite] opacity-30"></div>
          <div className="absolute w-[85%] h-[85%] border-t-2 border-b-2 border-blue-500/20 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>

          <div className="relative w-72 h-72 md:w-[480px] md:h-[480px] flex items-center justify-center">
            {/* Super Glow behind Logo */}
            <div className="absolute inset-4 bg-cyan-500/20 blur-[100px] rounded-full animate-pulse-cyan"></div>
            
            {/* Globe Grid SVG */}
            <svg viewBox="0 0 100 100" className="w-full h-full absolute z-10 opacity-40">
              <circle cx="50" cy="50" r="48" fill="none" stroke="#22d3ee" strokeWidth="0.1" />
              <motion.g animate={{ rotateY: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "50% 50%" }}>
                {[0, 45, 90, 135].map((rot, i) => (
                  <ellipse key={i} cx="50" cy="50" rx={48 * Math.abs(Math.cos(rot * Math.PI / 180))} ry="48" fill="none" stroke="#22d3ee" strokeWidth="0.15" opacity="0.3" />
                ))}
              </motion.g>
            </svg>

            {/* --- CENTRAL LOGO CORE: NOW 100% CIRCULAR --- */}
            <div className="relative w-[75%] h-[75%] z-20 flex items-center justify-center">
              
              {/* Rotating Circular Dotted Frame */}
              <div className="absolute inset-0 animate-spin-slow opacity-80">
                <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
                  <circle 
                    cx="50" cy="50" r="48" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeDasharray="15 10" // This creates the tech-circle look
                  />
                </svg>
              </div>

              {/* Static Inner Thin Circle for extra detail */}
              <div className="absolute inset-4 border border-cyan-500/30 rounded-full"></div>
              
              {/* Logo Container: Perfect Round Circle */}
              <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center border-2 border-cyan-500/50 bg-[#00020a]/40 backdrop-blur-sm">
                {/* Subtle Inner Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-[#00020a]/80 z-10"></div>
                <img 
                  src="/logo.png" 
                  alt="Crimex Core Logo"
                  className="w-[85%] h-[85%] object-contain relative z-20 animate-inner-pulse brightness-110 contrast-125 rounded-full"
                />
              </div>
            </div>

            {/* Orbiting Satellite (Moved to outer edge) */}
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-[-20px] z-40 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-cyan-500/10 backdrop-blur-md border border-cyan-500/50 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.6)]">
                <ShieldCheck size={18} className="text-cyan-400" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* FOOTER DECORATION */}
      <div className="absolute bottom-10 left-10 z-30 hidden lg:block">
        <div className="flex flex-col gap-1">
          <div className="h-[1px] w-32 bg-cyan-900"></div>
          <p className="font-mono text-[9px] text-cyan-700 tracking-[0.6em] uppercase">Neural_Core_Active // CRIMEX_OS</p>
        </div>
      </div>

      {/* Optimized Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes inner-pulse { 
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 10px rgba(34,211,238,0.2)); } 
          50% { transform: scale(1.08); filter: drop-shadow(0 0 30px rgba(34,211,238,0.5)); } 
        }
        @keyframes pulse-cyan { 0%, 100% { opacity: 0.1; transform: scale(1); } 50% { opacity: 0.3; transform: scale(1.2); } }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-inner-pulse { animation: inner-pulse 4s ease-in-out infinite; }
        .animate-pulse-cyan { animation: pulse-cyan 5s ease-in-out infinite; }
      `}} />
    </div>
  );
};

export default HomePage;