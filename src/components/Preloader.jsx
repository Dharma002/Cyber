import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD
import { ShieldCheck, Database, Globe, GraduationCap } from 'lucide-react';
=======
import { Terminal, Shield, Cpu, Activity } from 'lucide-react';
>>>>>>> fa8b9831cbc75daa64b98b0f1a0be2a4cf394940

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [logs, setLogs] = useState([]);
  const [percent, setPercent] = useState(0);

<<<<<<< HEAD
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
=======
  // Skip preloader on mobile devices for better UX
  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  const bootLogs = [
    "INITIALIZING_CORE_SYSTEM...",
    "ESTABLISHING_SECURE_NODE...",
    "DECRYPTING_BIO_METRIC_LAYERS...",
    "CONNECTING_PROXIED_GATEWAY...",
    "FIREWALL_STATUS: OPTIMAL",
    "BYPASSING_EXTERNAL_INTEL...",
    "SYSTEM_READY_FOR_HANDSHAKE"
>>>>>>> fa8b9831cbc75daa64b98b0f1a0be2a4cf394940
  ];

  useEffect(() => {
    let currentLog = 0;
    const logInterval = setInterval(() => {
      if (currentLog < bootLogs.length) {
        setLogs(prev => [...prev, bootLogs[currentLog]]);
        currentLog++;
      }
<<<<<<< HEAD
    }, 250);
=======
    }, 150);
>>>>>>> fa8b9831cbc75daa64b98b0f1a0be2a4cf394940

    const progressInterval = setInterval(() => {
      setPercent(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
<<<<<<< HEAD
          setTimeout(() => setLoading(false), 600);
=======
          setTimeout(() => setLoading(false), 400);
>>>>>>> fa8b9831cbc75daa64b98b0f1a0be2a4cf394940
          return 100;
        }
        return prev + 1;
      });
<<<<<<< HEAD
    }, 15);
=======
    }, 12);
>>>>>>> fa8b9831cbc75daa64b98b0f1a0be2a4cf394940

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div 
<<<<<<< HEAD
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
                        <span className="text-[8px] text-gray-600 font-bold uppercase tracking-widest mt-1">Status: Initializing</span>
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
              <div className="h-28 overflow-hidden text-[10px] font-bold text-gray-600 space-y-2 text-center uppercase tracking-widest">
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
=======
          exit={{ opacity: 0, y: -20, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[1000] bg-[#00020a] flex flex-col items-center justify-center p-10 font-mono"
        >
          {/* Main Visual */}
          <div className="relative mb-20">
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
               className="w-40 h-40 border-t-2 border-cyan-500 rounded-full opacity-30"
             />
             <div className="absolute inset-0 flex items-center justify-center">
                <Shield size={48} className="text-cyan-500 animate-pulse" />
             </div>
          </div>

          <div className="w-full max-w-md space-y-10">
             {/* Progress Bar */}
             <div className="space-y-4">
                <div className="flex justify-between text-[10px] font-black text-cyan-500 tracking-[0.4em]">
                   <span>LOAD_SEQUENCE</span>
                   <span>{percent}%</span>
                </div>
                <div className="h-[2px] w-full bg-cyan-900/30 overflow-hidden relative">
                   <motion.div 
                     initial={{ width: 0 }}
                     animate={{ width: `${percent}%` }}
                     className="absolute h-full bg-cyan-500 shadow-[0_0_15px_#22d3ee]"
                   />
                </div>
             </div>

             {/* Terminal Logs */}
             <div className="h-40 overflow-hidden text-[9px] text-slate-500 space-y-1">
                {logs.map((log, i) => (
                   <motion.div 
                     key={i} 
                     initial={{ opacity: 0, x: -10 }} 
                     animate={{ opacity: 1, x: 0 }}
                     className="flex items-center gap-3"
                   >
                      <span className="text-cyan-800">[{new Date().toLocaleTimeString()}]</span>
                      <span className={i === logs.length - 1 ? "text-cyan-400 font-bold" : ""}>{log}</span>
                   </motion.div>
                ))}
             </div>
          </div>

          {/* Corner Decors */}
          <div className="absolute top-10 left-10 flex items-center gap-4 text-[8px] text-cyan-700 font-bold tracking-[0.5em] uppercase italic">
             <Activity size={14} className="animate-bounce" /> SYSTEM_BOOTv4.0_CRIMEX
          </div>
          <div className="absolute bottom-10 right-10 flex items-center gap-4 text-[8px] text-cyan-700 font-bold tracking-[0.5em] uppercase italic">
             <Cpu size={14} className="animate-spin-slow" /> ENCRYPTED_HANDSHAKE_AWAITED
          </div>

          {/* Scanline Overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>
>>>>>>> fa8b9831cbc75daa64b98b0f1a0be2a4cf394940
        </motion.div>
      )}
    </AnimatePresence>
  );
};

<<<<<<< HEAD
export default Preloader;
=======
export default Preloader;
>>>>>>> fa8b9831cbc75daa64b98b0f1a0be2a4cf394940
