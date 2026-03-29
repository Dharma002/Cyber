import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Globe, Database, GraduationCap } from 'lucide-react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [logs, setLogs] = useState([]);
  const [percent, setPercent] = useState(0);

  // Skip preloader on mobile for better UX
  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  const bootLogs = [
    "CONNECTING TO CRIMEX INTELLIGENCE CORE...",
    "VERIFYING INSTITUTIONAL CREDENTIALS...",
    "SYNCING FORENSIC LAB MODULES...",
    "ESTABLISHING SECURE ACADEMIC GATEWAY...",
    "ISO 9001:2015 PROTOCOLS: ACTIVE",
    "OPTIMIZING STUDENT DASHBOARD...",
    "SYSTEM READY FOR ACCESS"
  ];

  useEffect(() => {
    let currentLog = 0;
    const logInterval = setInterval(() => {
      if (currentLog < bootLogs.length) {
        setLogs(prev => [...prev, bootLogs[currentLog]]);
        currentLog++;
      }
    }, 250);

    const progressInterval = setInterval(() => {
      setPercent(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setLoading(false), 600);
          return 100;
        }
        return prev + 1;
      });
    }, 15);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div 
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[1000] bg-white flex flex-col items-center justify-center p-10 font-sans"
        >
          {/* Main Visual Spinner (Professional SIFS Style) */}
          <div className="relative mb-16">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-32 h-32 border-t-4 border-blue-100 rounded-full"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-32 h-32 border-b-4 border-[#004a8e] rounded-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <img src="/logo.png" alt="Logo" className="w-12 h-12 object-contain animate-pulse" />
              </div>
          </div>

          <div className="w-full max-w-sm space-y-10">
              {/* Progress Bar (Clean & Bold) */}
              <div className="space-y-4">
                 <div className="flex justify-between items-end">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-[#004a8e] uppercase tracking-[0.3em]">Institutional Access</span>
                        <span className="text-[8px] text-gray-400 font-bold uppercase tracking-widest mt-1">Status: Initializing</span>
                    </div>
                    <span className="text-xl font-black text-[#004a8e] italic leading-none">{percent}%</span>
                 </div>
                 <div className="h-1.5 w-full bg-blue-50 rounded-full overflow-hidden relative shadow-inner">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${percent}%` }}
                      className="absolute h-full bg-[#004a8e] shadow-[0_0_10px_rgba(0,74,142,0.3)]"
                    />
                 </div>
              </div>

              {/* Professional System Logs */}
              <div className="h-28 overflow-hidden text-[10px] font-bold text-gray-400 space-y-2 text-center uppercase tracking-widest">
                 {logs.slice(-1).map((log, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, y: 10 }} 
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-center gap-2"
                    >
                       <span className="text-[#ffc107] animate-pulse">•</span> {log}
                    </motion.div>
                 ))}
              </div>
          </div>

          {/* Bottom Trust Indicators */}
          <div className="absolute bottom-12 flex gap-10">
             <div className="flex items-center gap-2 grayscale opacity-50">
                <ShieldCheck size={16} className="text-[#004a8e]" />
                <span className="text-[8px] font-bold uppercase tracking-[0.2em]">ISO 9001 CERTIFIED</span>
             </div>
             <div className="flex items-center gap-2 grayscale opacity-50">
                <Globe size={16} className="text-[#004a8e]" />
                <span className="text-[8px] font-bold uppercase tracking-[0.2em]">SSL SECURED ACCESS</span>
             </div>
          </div>

          {/* Subtle Texture */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;