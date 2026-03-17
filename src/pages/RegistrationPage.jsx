import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ShieldCheck, Cpu, Fingerprint, Lock, Zap, ChevronRight, Activity } from 'lucide-react';

const RegistrationPage = () => {
  const [isFocused, setIsFocused] = useState(false);

  // Unique Animation Variants: Glitch & Slide
  const containerVariants = {
    hidden: { opacity: 0, x: 100, skewX: 10 },
    visible: { 
      opacity: 1, 
      x: 0, 
      skewX: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center relative overflow-hidden bg-[#00020a]">
      
      {/* --- UNIQUE BACKGROUND: BINARY STREAM & STATIC --- */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none select-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="flex justify-around w-full h-full text-[#00f2ea] font-mono text-[10px] leading-none opacity-10">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: ["0%", "-100%"] }}
              transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "linear" }}
              className="whitespace-nowrap"
              style={{ writingMode: 'vertical-rl' }}
            >
              01010110 11010010 CRIMEX_CORE_SHAKTI_IDENT_0x99 {i} 101010110
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl relative z-10 grid md:grid-cols-5 gap-0 shadow-[0_0_100px_rgba(0,242,234,0.1)] rounded-[2rem] overflow-hidden border border-white/5"
      >
        
        {/* LEFT PANEL: Status & Info (Unique to this page) */}
        <div className="md:col-span-2 bg-[#0a0b14] p-8 border-r border-white/5 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30">
                <Fingerprint className="text-cyan-400 animate-pulse" size={24} />
              </div>
              <span className="text-[10px] font-mono text-cyan-500 font-black tracking-[0.3em] uppercase">User_Enrollment</span>
            </div>

            <h2 className="text-4xl font-black text-white leading-tight uppercase italic mb-4">
              Agent <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Registration</span>
            </h2>
            <p className="text-gray-500 text-xs font-mono leading-relaxed uppercase tracking-tighter">
              Authorized access only. By deploying your identity, you join the elite cyber-shakti grid.
            </p>
          </div>

          <div className="space-y-4 mt-8">
            {['Bio-Link Active', 'Encryption Level: AES-256', 'Node: Lucknow_Server'].map((stat, i) => (
              <div key={i} className="flex items-center gap-2 text-[9px] font-mono text-cyan-400/60 uppercase">
                <Zap size={10} /> {stat}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL: The Form */}
        <div className="md:col-span-3 bg-black/40 backdrop-blur-3xl p-8 md:p-12 relative">
          <form className="space-y-5">
            <motion.div variants={itemVariants} className="space-y-2 group">
              <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest ml-1">Codename_ID</label>
              <div className="relative">
                <Terminal className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-900 group-focus-within:text-cyan-400 transition-colors" size={16} />
                <input 
                  type="text" 
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="EX: GHOST_NODE_01" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-cyan-500/50 transition-all text-white font-mono placeholder:text-slate-800" 
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2 group">
              <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest ml-1">Comms_Frequency</label>
              <div className="relative">
                <Cpu className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-900 group-focus-within:text-cyan-400 transition-colors" size={16} />
                <input type="email" placeholder="IDENTITY@SECURE.COM" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-cyan-500/50 transition-all text-white font-mono placeholder:text-slate-800" />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2 group">
              <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest ml-1">Selection_Module</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-sm focus:outline-none focus:border-cyan-500/50 transition-all text-slate-400 font-mono appearance-none">
                <option>DIGITAL_FORENSICS</option>
                <option>OFFENSIVE_CYBER_OPS</option>
                <option>OSINT_INTELLIGENCE</option>
              </select>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4 flex flex-col gap-4">
               <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5 group hover:border-cyan-500/30 transition-all cursor-pointer">
                  <div className="relative flex items-center justify-center">
                    <input type="checkbox" className="peer w-5 h-5 opacity-0 absolute cursor-pointer z-10" />
                    <div className="w-5 h-5 border-2 border-cyan-500/30 rounded peer-checked:bg-cyan-500 peer-checked:border-cyan-500 transition-all"></div>
                    <ShieldCheck className="absolute text-black scale-0 peer-checked:scale-100 transition-transform" size={14} />
                  </div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase leading-tight">
                    Accept <span className="text-cyan-400">Ethical_Usage_Agreement</span>
                  </p>
               </div>

               <motion.button 
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0,242,234,0.3)" }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full relative py-5 bg-[#00f2ea] text-black font-black uppercase tracking-[0.4em] text-xs overflow-hidden rounded-xl transition-all"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Lock size={16} /> Deploy_Identity
                </span>
                <motion.div 
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
              </motion.button>
            </motion.div>
          </form>

          {/* Bottom Decor Text */}
          <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
            <span className="text-[8px] font-mono text-gray-600 uppercase tracking-widest italic flex items-center gap-2">
               <Activity size={10} className="animate-bounce" /> Waiting_for_input...
            </span>
            <div className="flex gap-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-cyan-500/20 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Elements (Unique Decorations) */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 blur-[80px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-cyan-500/10 blur-[80px] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default RegistrationPage;