import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Activity, Target, Zap, Fingerprint, Search, Database, ShieldCheck } from 'lucide-react';

const ForensicScanner = () => {
  const [activeNodes, setActiveNodes] = useState([]);
  const [scanStatus, setScanStatus] = useState("ANALYZING BIOMETRICS...");

  // Forensic Minutiae Logic
  useEffect(() => {
    const interval = setInterval(() => {
      const newNode = {
        id: Math.random(),
        x: Math.random() * 70 + 15,
        y: Math.random() * 70 + 15,
        label: ["FINGERPRINT_MATCH", "DNA_SEQUENCE", "VERIFIED_ID", "LAB_STAMP", "DATA_SECURE"][Math.floor(Math.random() * 5)]
      };
      setActiveNodes(prev => [...prev.slice(-2), newNode]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center group">
      
      {/* 1. OUTER SCIENTIFIC RINGS */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute w-[420px] h-[420px] border border-blue-500/10 rounded-full"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute w-[360px] h-[360px] border border-blue-200/20 rounded-full border-dashed"
      />

      {/* 2. CORE BIOMETRIC CONTAINER */}
      <div className="relative w-[300px] h-[300px] flex items-center justify-center">
        {/* Soft Center Glow */}
        <div className="absolute inset-0 bg-blue-400/5 blur-[100px] rounded-full" />
        
        {/* Fingerprint Visual */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           className="relative z-10 text-[#004a8e]/40"
        >
          <Fingerprint size={260} strokeWidth={0.8} className="group-hover:text-[#004a8e]/60 transition-colors duration-700" />
        </motion.div>

        {/* 3. PROFESSIONAL SCANNING LASER */}
        <motion.div 
          animate={{ 
            top: ["0%", "100%", "0%"],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute left-[-40px] right-[-40px] h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent z-20 shadow-[0_0_15px_rgba(0,74,142,0.6)]"
        />

        {/* 4. DYNAMIC EVIDENCE NODES */}
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
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-ping absolute" />
                <div className="w-2 h-2 bg-blue-500 rounded-full border border-white shadow-sm" />
                
                {/* Connecting Line */}
                <div className="absolute left-2 top-2 w-12 h-[1px] bg-blue-200 origin-left rotate-[-30deg]" />
                <div className="absolute left-10 -top-6 whitespace-nowrap bg-white border border-blue-100 px-2 py-1 rounded-md shadow-lg">
                  <span className="text-[7px] font-bold text-[#004a8e] uppercase tracking-widest">
                    {node.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* 5. SIDE HUD STATS (Clean Corporate Style) */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 space-y-6 opacity-60 group-hover:opacity-100 transition-opacity duration-700">
        {[
          { icon: Search, label: "PRECISION", val: "99.2%" },
          { icon: Database, label: "RECORDS", val: "SYNCED" },
          { icon: ShieldCheck, label: "INTEGRITY", val: "PASSED" }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#004a8e]">
              <item.icon size={16} />
            </div>
            <div className="hidden sm:block">
              <p className="text-[7px] font-bold text-gray-600 uppercase tracking-widest">{item.label}</p>
              <p className="text-[11px] font-extrabold text-gray-700 tracking-tight">{item.val}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 6. BOTTOM STATUS PANEL */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[280px] p-4 bg-white/80 backdrop-blur-md border border-blue-50 rounded-2xl flex items-center justify-between shadow-xl shadow-blue-900/5">
        <div className="flex flex-col gap-1.5 flex-1">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[8px] font-bold text-[#004a8e] tracking-widest uppercase">{scanStatus}</span>
          </div>
          <div className="h-1 w-full bg-blue-50 rounded-full overflow-hidden">
            <motion.div 
              animate={{ width: ["0%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="h-full bg-[#004a8e]"
            />
          </div>
        </div>
        <div className="ml-4 flex gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
               <Shield size={14} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ForensicScanner;