import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Activity, Target, Zap, Fingerprint, Search, Database } from 'lucide-react';

const ForensicScanner = () => {
  const [activeNodes, setActiveNodes] = useState([]);
  const [scanStatus, setScanStatus] = useState("SCANNING...");

  // Randomly activate "minutiae" nodes on the fingerprint
  useEffect(() => {
    const interval = setInterval(() => {
      const newNode = {
        id: Math.random(),
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
        label: ["ID_VERIFIED", "NODE_0x77", "TRACE_FOUND", "ENCR_AES256", "HASH_MATCH"][Math.floor(Math.random() * 5)]
      };
      setActiveNodes(prev => [...prev.slice(-3), newNode]);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center group cursor-crosshair">
      {/* 1. OUTER HUD RINGS (Radar System) */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-[450px] h-[450px] border border-cyan-500/10 rounded-full border-dashed p-10"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute w-[380px] h-[380px] border border-blue-500/20 rounded-full border-dotted"
      />

      {/* 2. CORE FINGERPRINT CONTAINER */}
      <div className="relative w-[300px] h-[300px] flex items-center justify-center">
        {/* Glow behind fingerprint */}
        <div className="absolute inset-0 bg-cyan-500/5 blur-[80px] rounded-full group-hover:bg-cyan-500/10 transition-colors duration-700" />
        
        {/* Stylized Fingerprint SVG */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="relative z-10 text-cyan-500/60 drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]"
        >
          <Fingerprint size={280} strokeWidth={0.5} className="group-hover:text-cyan-400 transition-colors duration-500" />
        </motion.div>

        {/* 3. ACTIVE SCANNING BAR */}
        <motion.div 
          animate={{ 
            top: ["10%", "90%", "10%"],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute left-[-20px] right-[-20px] h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent z-20 shadow-[0_0_15px_rgba(34,211,238,0.8)]"
        />

        {/* 4. DYNAMIC DATA NODES (Evidence points) */}
        <AnimatePresence>
          {activeNodes.map((node) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute z-30 pointer-events-none"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <div className="relative">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-ping absolute -inset-0"></div>
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                
                {/* Connecting Line and Label */}
                <div className="absolute left-2 top-2 w-10 h-[1px] bg-cyan-500/40 origin-left rotate-[-45deg]"></div>
                <div className="absolute left-8 -top-4 whitespace-nowrap">
                  <span className="text-[8px] font-mono text-cyan-400 bg-black/80 px-1.5 py-0.5 border border-cyan-500/30 rounded backdrop-blur-sm uppercase">
                    {node.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* 5. HUD SIDEBAR STATS (Left & Right) */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 space-y-4 opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        {[
          { icon: Search, label: "ANALYZING_CORE", val: "94%" },
          { icon: Database, label: "DB_STREAM", val: "ACTIVE" },
          { icon: Activity, label: "THREAT_LVL", val: "MINIMAL" }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-cyan-500">
              <item.icon size={14} />
            </div>
            <div>
              <p className="text-[6px] font-mono text-slate-500 uppercase tracking-widest">{item.label}</p>
              <p className="text-[10px] font-black text-white italic tracking-tighter">{item.val}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 6. BOTTOM HUD STATUS BAR */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[240px] p-3 bg-black/60 backdrop-blur-md border border-white/5 rounded-xl flex items-center justify-between group-hover:border-cyan-500/30 transition-all duration-500">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-cyan-500 animate-pulse"></div>
            <span className="text-[7px] font-mono text-cyan-400 tracking-[0.2em] uppercase">{scanStatus}</span>
          </div>
          <div className="h-[2px] w-24 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              animate={{ width: ["0%", "100%", "0%"] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="h-full bg-cyan-500"
            />
          </div>
        </div>
        <div className="flex gap-1.5">
          {[Target, Shield].map((Icon, idx) => (
            <div key={idx} className="w-6 h-6 rounded flex items-center justify-center bg-white/5 border border-white/10 text-cyan-500/40 hover:text-cyan-400 transition-colors">
              <Icon size={12} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForensicScanner;
