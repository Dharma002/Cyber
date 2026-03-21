import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Activity, ShieldCheck, Zap, Target, GraduationCap, Trophy, Award, 
  ChevronDown, Terminal, Cpu, Database, Fingerprint, Globe, Search, Shield, MessageCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

import ForensicScanner from '../components/ForensicScanner'; 
import AnimatedBackground from '../components/AnimatedBackground'; 

const DecryptText = ({ text }) => {
  const [display, setDisplay] = useState('');
  const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?0123456789';
  
  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(text.split('').map((char, index) => {
        if (index < iteration) return char;
        return chars[Math.floor(Math.random() * chars.length)];
      }).join(''));
      
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1/3;
    }, 30);
    return () => clearInterval(interval);
  }, [text]);

  return <span>{display}</span>;
}

const InfoModule = ({ label, value, icon: Icon, colorClass }) => (
  <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-4 rounded-2xl backdrop-blur-xl group cursor-default hover:border-cyan-500/30 transition-all overflow-hidden relative">
     <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
     <div className={`w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center ${colorClass} group-hover:scale-110 transition-transform`}>
        <Icon size={18} />
     </div>
     <div className="relative z-10">
        <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] mb-1">{label}</p>
        <p className="text-sm font-black text-white italic tracking-tighter uppercase">{value}</p>
     </div>
  </div>
);

const TacticalCard = ({ title, desc, icon: Icon, index }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative bg-[#0a0c12]/60 backdrop-blur-3xl border border-white/5 p-8 rounded-[2.5rem] hover:bg-cyan-500/[0.02] hover:border-cyan-500/30 transition-all duration-500 overflow-hidden shadow-2xl"
  >
    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
       <Fingerprint size={60} />
    </div>
    
    <div className="relative z-10">
       <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 text-cyan-400 border border-white/10 group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-700">
          <Icon size={28} />
       </div>
       <h3 className="text-2xl font-black uppercase mb-4 italic text-white tracking-tighter group-hover:text-cyan-400 transition-colors">{title}</h3>
       <p className="text-slate-400 text-sm leading-relaxed font-medium group-hover:text-slate-200 transition-colors">{desc}</p>
       
       <div className="mt-8 flex items-center gap-2 text-cyan-700 opacity-40 group-hover:opacity-100 transition-opacity">
          <div className="h-[1px] w-8 bg-current"></div>
          <span className="text-[8px] font-mono font-black uppercase tracking-widest leading-none">Status: OPERATIONAL_0{index+1}</span>
       </div>
    </div>
  </motion.div>
);

const HomePage = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="relative min-h-[50vh] md:min-h-screen w-full bg-[#00020a] overflow-x-hidden pt-10 md:pt-20">
      <AnimatedBackground />
      
      {/* Background Decor */}
      <div className="absolute inset-x-0 top-0 h-[100vh] pointer-events-none opacity-20 z-0">
         <div className="absolute top-[10%] left-[10%] w-[60%] h-[60%] bg-cyan-500/10 blur-[200px] rounded-full"></div>
         <div className="absolute bottom-[10%] right-[10%] w-[60%] h-[60%] bg-blue-600/10 blur-[200px] rounded-full"></div>
      </div>

      <div className="max-w-8xl mx-auto px-6 md:px-20 relative z-10 space-y-20 md:space-y-40 pb-20 md:pb-40">
        
        {/* --- TACTICAL SPLIT HERO --- */}
        <section className="relative min-h-[50vh] md:min-h-[45rem] flex flex-col items-center justify-center pt-6">
           <div className="grid lg:grid-cols-2 gap-20 items-center w-full">
              
              {/* LEFT: STRATEGIC INTEL */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="text-left space-y-10"
              >
                 <div className="inline-flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-2 rounded-full backdrop-blur-3xl">
                    <ShieldCheck className="text-cyan-500" size={16} />
                    <span className="text-[9px] font-black text-slate-300 uppercase tracking-[0.5em] font-mono italic">Auth_Node: Secure_Sync</span>
                 </div>

                 <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-[1000] uppercase italic tracking-tighter leading-[0.8] text-white">
                       <DecryptText text="CRIMEX" /><br />
                       <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-800 drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                          <DecryptText text="INTELLIGENCE" />
                       </span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl font-medium tracking-tight leading-relaxed max-w-xl italic">
                       "Architecting <span className="text-white">absolute digital immunity</span> through clinical cognitive intelligence and tactical forensic synthesis."
                    </p>
                 </div>

                 {/* Information Pipeline Modules */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InfoModule label="Network_Load" value="99.9% Secure" icon={Cpu} colorClass="text-cyan-400" />
                    <InfoModule label="Terminal_Auth" value="DECENTRALIZED" icon={Terminal} colorClass="text-blue-500" />
                 </div>

                 <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                    <Link to="/apply">
                       <motion.button 
                         whileHover={{ scale: 1.05 }} 
                         whileTap={{ scale: 0.95 }}
                         className="px-10 py-5 bg-white text-black font-[1000] uppercase text-xs tracking-[0.3em] rounded-full shadow-[0_30px_60px_rgba(255,255,255,0.2)] hover:bg-cyan-400 transition-colors italic w-full sm:w-auto"
                       >
                          Launch Connection
                       </motion.button>
                    </Link>
                    <Link to="/about">
                       <motion.button 
                         whileHover={{ scale: 1.05 }} 
                         whileTap={{ scale: 0.95 }}
                         className="px-10 py-5 border-2 border-white/10 text-white font-[1000] uppercase text-xs tracking-[0.3em] rounded-full hover:bg-white/5 transition-all italic backdrop-blur-xl w-full sm:w-auto"
                       >
                          Personnel Briefing
                       </motion.button>
                    </Link>
                 </div>
              </motion.div>

              {/* RIGHT: INTERACTIVE DNA HELIX (Biometric Forensic Visual) */}
              <motion.div 
                onMouseMove={(e) => {
                   const rect = e.currentTarget.getBoundingClientRect();
                   const x = (e.clientX - rect.left) / rect.width - 0.5;
                   const y = (e.clientY - rect.top) / rect.height - 0.5;
                   setMousePos({ x, y });
                }}
                onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative flex justify-center items-center min-h-[400px] lg:min-h-[600px] cursor-crosshair"
              >
                 <div className="relative w-full max-w-[500px] h-[400px] lg:h-[600px] bg-white/[0.01] border border-white/5 rounded-[4rem] overflow-hidden backdrop-blur-3xl shadow-3xl group">
                    
                    {/* INTERACTIVE PARTICLE SWARM */}
                    <div className="absolute inset-0 pointer-events-none z-0">
                       {[...Array(20)].map((_, i) => (
                          <motion.div 
                             key={i}
                             animate={{ 
                                x: mousePos.x * 300 + (Math.random() - 0.5) * 100 + 250, 
                                y: mousePos.y * 300 + (Math.random() - 0.5) * 100 + 300,
                                opacity: [0, 0.5, 0]
                             }}
                             transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                             className="absolute w-1 h-1 bg-cyan-400 rounded-full blur-[1px]"
                          />
                       ))}
                    </div>

                    {/* DNA HELIX LAYERS (Mouse-Reactive) */}
                    <motion.div 
                       animate={{ 
                          rotateY: mousePos.x * 40,
                          rotateX: -mousePos.y * 40
                       }}
                       className="relative z-10 w-full h-full flex items-center justify-center"
                    >
                       <div className="relative w-40 h-[80%] flex items-center justify-center">
                          {[...Array(24)].map((_, i) => (
                             <motion.div 
                                key={i}
                                className="absolute w-full h-2"
                                style={{ top: `${(i / 24) * 100}%` }}
                             >
                                {/* Left Strand Node */}
                                <motion.div 
                                  animate={{ 
                                    x: [Math.sin(i * 0.5) * 60, Math.sin(i * 0.5 + Math.PI) * 60, Math.sin(i * 0.5) * 60],
                                    scale: [1, 0.5, 1],
                                    backgroundColor: ["#22d3ee", "#1e40af", "#22d3ee"],
                                    boxShadow: mousePos.x > 0.1 ? "0 0 20px #22d3ee" : "0 0 5px #22d3ee"
                                  }}
                                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                  className="w-3 h-3 rounded-full absolute left-1/2 -ml-1.5"
                                />
                                
                                {/* Connection Link */}
                                <motion.div 
                                  animate={{ 
                                    scaleX: [1, -1, 1],
                                    opacity: [0.2, 0.05, 0.2]
                                  }}
                                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                  className="absolute left-[30%] right-[30%] top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-cyan-500/50 via-white/20 to-blue-500/50 origin-center"
                                />

                                {/* Right Strand Node */}
                                <motion.div 
                                  animate={{ 
                                    x: [Math.sin(i * 0.5 + Math.PI) * 60, Math.sin(i * 0.5) * 60, Math.sin(i * 0.5 + Math.PI) * 60],
                                    scale: [0.5, 1, 0.5],
                                    backgroundColor: ["#1e40af", "#22d3ee", "#1e40af"]
                                  }}
                                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                  className="w-3 h-3 rounded-full absolute left-1/2 -ml-1.5"
                                />

                                {/* Floating Data Tag (Restored) */}
                                {i % 6 === 0 && (
                                   <motion.div 
                                     animate={{ x: [60, -60, 60], opacity: [0, 0.4, 0] }}
                                     transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                     className="absolute left-full ml-10 whitespace-nowrap"
                                   >
                                      <span className="text-[8px] font-mono text-cyan-500/60 uppercase tracking-widest font-black italic">SEQ_0{i}_MATCH_FOUND</span>
                                   </motion.div>
                                )}
                             </motion.div>
                          ))}
                       </div>

                       {/* VERTICAL LASER SCAN LINE */}
                       <motion.div 
                         animate={{ top: ["0%", "100%", "0%"] }}
                         transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                         className="absolute left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_15px_#22d3ee] z-20 pointer-events-none opacity-50"
                       />
                    </motion.div>

                    {/* HUD Status Text */}
                    <div className="absolute bottom-10 right-10 text-right space-y-2 z-20">
                       <p className="text-[10px] font-mono text-cyan-500 italic font-black uppercase tracking-widest">Interactive_Mode: ACTIVE</p>
                       <p className="text-[7px] text-white/30 font-mono">X: {mousePos.x.toFixed(2)} // Y: {mousePos.y.toFixed(2)}</p>
                    </div>
                 </div>

                 {/* Orbiting rings */}
                 <div className="absolute inset-0 pointer-events-none opacity-20 invisible lg:visible scale-125">
                    <motion.div 
                       animate={{ 
                          rotate: 360,
                          rotateX: mousePos.y * 20,
                          rotateY: mousePos.x * 20
                       }} 
                       transition={{ duration: 50, repeat: Infinity, ease: "linear" }} 
                       className="w-full h-full border border-cyan-500/10 rounded-full"
                    ></motion.div>
                 </div>
              </motion.div>

           </div>
        </section>

        {/* --- LIVE SYSTEM LOGS TICKER --- */}
        <div className="relative py-10 border-y border-white/5 bg-white/[0.01] overflow-hidden -mx-8 lg:-mx-20 group">
           <motion.div 
             animate={{ x: [0, -1000] }}
             transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
             className="flex gap-20 items-center whitespace-nowrap px-10"
           >
              {[...Array(10)].map((_, i) => (
                <div key={i} className="flex gap-4 items-center">
                   <Activity size={14} className="text-green-500" />
                   <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-black italic">
                      [SCANNING_NODE_{i+10}]: INTEGRITY_CHECK_{i+100}... [STATUS_OK]... [AUTH_ENCRYPTED]: AES_256
                   </span>
                </div>
              ))}
           </motion.div>
        </div>

        {/* --- TACTICAL CORE MISSIONS --- */}
        <section className="space-y-16">
           <div className="flex flex-col items-center text-center">
              <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter text-white leading-tight mb-4">
                 TACTICAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">OPERATIONS</span>
              </h2>
              <div className="w-40 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <TacticalCard index={0} title="Intelligence" desc="AI-driven node analysis to detect anomalies across encrypted data streams." icon={Search} />
              <TacticalCard index={1} title="Forensics" desc="Delivering military-grade digital evidence reports with timestamped certainty." icon={Database} />
              <TacticalCard index={2} title="Defense" desc="Architecting global standards in clinical digital defense and cognitive research." icon={Shield} />
              <TacticalCard index={3} title="Training" desc="Elite recruitment and personnel training modules for the modern investigator." icon={GraduationCap} />
           </div>
        </section>

        {/* --- WHY CRIMEX (The Logic Card) --- */}
        <section className="grid lg:grid-cols-12 gap-16 items-center">
           <div className="lg:col-span-12 relative">
              <div className="absolute -inset-10 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>
              <div className="relative bg-[#05070a] border border-white/5 rounded-[4rem] p-12 lg:p-24 overflow-hidden shadow-3xl">
                 <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <div className="lg:w-1/2 space-y-10">
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-[2px] bg-cyan-500"></div>
                          <span className="text-cyan-500 font-mono text-[9px] uppercase tracking-[0.5em] font-black italic">Project_Directive: 0x22F</span>
                       </div>
                       <h2 className="text-5xl lg:text-8xl font-black uppercase italic tracking-tighter leading-[0.85] text-white">
                          WHY <br />
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-600">CRIMEX?</span>
                       </h2>
                       <p className="text-slate-400 text-lg lg:text-xl font-medium leading-relaxed italic border-l-4 border-cyan-500 pl-8">
                          "We bridge the gap between academic theory and clinical tactical defense, ensuring that raw data is translated into pure strategic intelligence."
                       </p>
                    </div>
                    <div className="lg:w-1/2 relative group">
                       <div className="absolute -inset-10 bg-cyan-500/10 blur-[100px] rounded-full group-hover:bg-cyan-500/20 transition-all duration-1000"></div>
                       <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/5 bg-black/40">
                          <ForensicScanner />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-transparent"></div>
                          <div className="absolute bottom-8 left-8">
                             <p className="text-cyan-500 font-mono text-[8px] uppercase tracking-[0.4em] font-black italic animate-pulse">Scanning_Active...</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* --- GLOBAL INTELLIGENCE GRID --- */}
        <section className="relative overflow-visible pb-10">
           <div className="absolute inset-0 bg-blue-500/5 blur-[200px] pointer-events-none"></div>
           
           <div className="flex flex-col items-center text-center space-y-16">
              <div className="space-y-4">
                 <div className="flex items-center justify-center gap-4">
                    <div className="h-[1px] w-12 bg-cyan-700"></div>
                    <span className="text-cyan-500 font-mono text-[10px] uppercase tracking-[0.6em] font-black italic">Global_Node_Deployment</span>
                    <div className="h-[1px] w-12 bg-cyan-700"></div>
                 </div>
                 <h2 className="text-5xl md:text-8xl font-[1000] uppercase italic tracking-tighter leading-none text-white">
                    JOIN THE <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">PRIVATE NETWORK</span>
                 </h2>
              </div>

              {/* Holographic Map Visual */}
              <div className="relative w-full max-w-4xl py-10">
                 <div className="absolute inset-0 flex items-center justify-center opacity-30">
                    <Globe size={400} className="text-cyan-500/20 animate-[spin_60s_linear_infinite]" strokeWidth={0.5} />
                 </div>
                 
                 <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                      { l: "New York", s: "Operational" },
                      { l: "London", s: "Operational" },
                      { l: "Tokyo", s: "Active" },
                      { l: "Dubai", s: "Secure" }
                    ].map((node, i) => (
                      <div key={i} className="bg-[#05070a]/60 backdrop-blur-xl border border-white/5 p-6 rounded-3xl group hover:border-cyan-500/30 transition-all">
                         <div className="flex items-center gap-3 mb-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></div>
                            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">{node.l}</span>
                         </div>
                         <p className="text-xs font-black text-white italic uppercase tracking-tighter">NODE_0{i+1}_SYNC</p>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-12">
                 <Link to="/apply">
                    <motion.button 
                      whileHover={{ scale: 1.05 }} 
                      whileTap={{ scale: 0.95 }}
                      className="px-16 py-6 bg-white text-black font-[1000] uppercase text-base tracking-[0.4em] rounded-full shadow-[0_40px_80px_rgba(255,255,255,0.2)] hover:bg-cyan-400 transition-colors"
                    >
                       Apply for Access
                    </motion.button>
                 </Link>
                 <a 
                    href="https://chat.whatsapp.com/Cdr2DnpXfZAKFSr9bGunkw" 
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 text-cyan-400 hover:text-white transition-colors group cursor-pointer"
                 >
                    <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl group-hover:scale-110 transition-transform">
                       <MessageCircle size={24} />
                    </div>
                    <div className="text-left">
                       <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1">Secure_Support</p>
                       <p className="text-sm font-black uppercase italic tracking-tighter">WhatsApp Link</p>
                    </div>
                 </a>
              </div>
           </div>
        </section>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan { 0% { top: -100%; } 100% { top: 100%; } }
        .animate-scan { animation: scan 3s linear infinite; }
      `}} />
    </div>
  );
};

export default HomePage;