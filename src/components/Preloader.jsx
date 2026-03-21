import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Shield, Cpu, Activity } from 'lucide-react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [logs, setLogs] = useState([]);
  const [percent, setPercent] = useState(0);

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
  ];

  useEffect(() => {
    let currentLog = 0;
    const logInterval = setInterval(() => {
      if (currentLog < bootLogs.length) {
        setLogs(prev => [...prev, bootLogs[currentLog]]);
        currentLog++;
      }
    }, 150);

    const progressInterval = setInterval(() => {
      setPercent(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + 1;
      });
    }, 12);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div 
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
