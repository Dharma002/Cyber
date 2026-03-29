import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Activity, ShieldCheck, Zap, Target, GraduationCap, Trophy, Award, 
  ChevronDown, Terminal, Cpu, Database, Fingerprint, Globe, Search, Shield, MessageCircle, ArrowRight
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

const InfoModule = ({ label, value, icon: Icon }) => (
  <div className="flex items-center gap-4 bg-white border border-gray-100 px-6 py-4 rounded-2xl shadow-sm group hover:border-[#004a8e]/30 transition-all overflow-hidden relative">
     <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
     <div className={`w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#004a8e] group-hover:scale-110 transition-transform`}>
        <Icon size={18} />
     </div>
     <div className="relative z-10">
        <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-1">{label}</p>
        <p className="text-sm font-black text-gray-800 tracking-tighter uppercase">{value}</p>
     </div>
  </div>
);

const TacticalCard = ({ title, desc, icon: Icon, index }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative bg-white border border-gray-100 p-8 rounded-[2.5rem] hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity text-[#004a8e]">
       <Fingerprint size={60} />
    </div>
    
    <div className="relative z-10">
       <div className="w-14 h-14 bg-blue-50 text-[#004a8e] rounded-2xl flex items-center justify-center mb-6 border border-blue-100 group-hover:bg-[#004a8e] group-hover:text-white transition-all duration-700">
          <Icon size={28} />
       </div>
       <h3 className="text-2xl font-black uppercase mb-4 text-gray-800 tracking-tighter group-hover:text-[#004a8e] transition-colors">{title}</h3>
       <p className="text-gray-500 text-sm leading-relaxed font-medium">{desc}</p>
       
       <div className="mt-8 flex items-center gap-2 text-[#004a8e] opacity-40 group-hover:opacity-100 transition-opacity">
          <div className="h-[1px] w-8 bg-current"></div>
          <span className="text-[8px] font-bold uppercase tracking-widest leading-none">Status: OPERATIONAL_0{index+1}</span>
       </div>
    </div>
  </motion.div>
);

const HomePage = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="relative min-h-screen w-full bg-[#f8fafc] overflow-x-hidden pt-24 md:pt-32">
      <AnimatedBackground />
      
      {/* Background Decor (Soft SIFS Tones) */}
      <div className="absolute inset-x-0 top-0 h-[100vh] pointer-events-none opacity-40 z-0">
         <div className="absolute top-[10%] left-[10%] w-[60%] h-[60%] bg-blue-100 blur-[200px] rounded-full"></div>
         <div className="absolute bottom-[10%] right-[10%] w-[60%] h-[60%] bg-blue-50 blur-[200px] rounded-full"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-20 relative z-10 space-y-20 md:space-y-40 pb-20 md:pb-40">
        
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
                 <div className="inline-flex items-center gap-4 bg-white border border-gray-100 px-6 py-2 rounded-full shadow-sm">
                    <ShieldCheck className="text-[#004a8e]" size={16} />
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.5em] italic">Auth_Node: Secure_Sync</span>
                 </div>

                 <div className="space-y-4">
                    <h1 className="text-5xl md:text-7xl font-[1000] uppercase italic tracking-tighter leading-[0.9] text-[#004a8e]">
                       <DecryptText text="CRIMEX" /><br />
                       <span className="text-gray-800">
                          <DecryptText text="INTELLIGENCE" />
                       </span>
                    </h1>
                    <p className="text-gray-500 text-lg md:text-xl font-medium tracking-tight leading-relaxed max-w-xl italic">
                       "Architecting <span className="text-[#004a8e] font-bold">absolute forensic immunity</span> through clinical cognitive intelligence and tactical synthesis."
                    </p>
                 </div>

                 {/* Information Pipeline Modules */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InfoModule label="Network_Load" value="99.9% Secure" icon={Cpu} />
                    <InfoModule label="Terminal_Auth" value="ISO_CERTIFIED" icon={ShieldCheck} />
                 </div>

                 <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                    <Link to="/apply" className="w-full sm:w-auto">
                        <motion.button 
                          whileHover={{ scale: 1.05 }} 
                          whileTap={{ scale: 0.95 }}
                          className="px-10 py-5 bg-[#004a8e] text-white font-black uppercase text-xs tracking-[0.3em] rounded-xl shadow-xl shadow-blue-900/20 hover:bg-[#003366] transition-all italic w-full"
                        >
                           Launch Connection
                        </motion.button>
                    </Link>
                    <Link to="/about" className="w-full sm:w-auto">
                        <motion.button 
                          whileHover={{ scale: 1.05 }} 
                          whileTap={{ scale: 0.95 }}
                          className="px-10 py-5 border-2 border-gray-200 text-gray-700 font-black uppercase text-xs tracking-[0.3em] rounded-xl hover:bg-gray-50 transition-all italic w-full"
                        >
                           Personnel Briefing
                        </motion.button>
                    </Link>
                 </div>
             </motion.div>

             {/* RIGHT: INTERACTIVE DNA HELIX (The Original Layout) */}
             <motion.div 
               onMouseMove={(e) => {
                   const rect = e.currentTarget.getBoundingClientRect();
                   setMousePos({ x: (e.clientX - rect.left) / rect.width - 0.5, y: (e.clientY - rect.top) / rect.height - 0.5 });
               }}
               onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1.5, ease: "easeOut" }}
               className="relative flex justify-center items-center min-h-[400px] lg:min-h-[600px] cursor-crosshair"
             >
                 <div className="relative w-full max-w-[500px] h-[400px] lg:h-[600px] bg-white border border-gray-100 rounded-[4rem] overflow-hidden shadow-2xl group">
                    
                    {/* DNA HELIX LAYERS (SIFS Theme) */}
                    <motion.div 
                       animate={{ rotateY: mousePos.x * 40, rotateX: -mousePos.y * 40 }}
                       className="relative z-10 w-full h-full flex items-center justify-center"
                    >
                       <div className="relative w-40 h-[80%] flex items-center justify-center">
                          {[...Array(24)].map((_, i) => (
                             <motion.div key={i} className="absolute w-full h-2" style={{ top: `${(i / 24) * 100}%` }}>
                                <motion.div 
                                  animate={{ 
                                    x: [Math.sin(i * 0.5) * 60, Math.sin(i * 0.5 + Math.PI) * 60, Math.sin(i * 0.5) * 60],
                                    backgroundColor: ["#004a8e", "#bfdbfe", "#004a8e"]
                                  }}
                                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                  className="w-3 h-3 rounded-full absolute left-1/2 -ml-1.5 shadow-sm"
                                />
                                <div className="absolute left-[30%] right-[30%] top-1/2 h-[1px] bg-gray-100 origin-center" />
                                <motion.div 
                                  animate={{ 
                                    x: [Math.sin(i * 0.5 + Math.PI) * 60, Math.sin(i * 0.5) * 60, Math.sin(i * 0.5 + Math.PI) * 60],
                                    backgroundColor: ["#3b82f6", "#004a8e", "#3b82f6"]
                                  }}
                                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                  className="w-3 h-3 rounded-full absolute left-1/2 -ml-1.5 shadow-sm"
                                />
                             </motion.div>
                          ))}
                       </div>
                    </motion.div>
                    
                    {/* VERTICAL SCAN LINE */}
                    <motion.div 
                       animate={{ top: ["0%", "100%", "0%"] }}
                       transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                       className="absolute left-0 w-full h-[1px] bg-[#004a8e] shadow-[0_0_15px_#004a8e] z-20 pointer-events-none opacity-20"
                    />
                    
                    <div className="absolute bottom-10 right-10 text-right opacity-30">
                       <p className="text-[8px] font-bold text-[#004a8e] tracking-widest uppercase">System_Active // Visual_Core</p>
                    </div>
                 </div>
             </motion.div>
           </div>
        </section>

        {/* --- LIVE SYSTEM LOGS TICKER --- */}
        <div className="relative py-8 border-y border-gray-100 bg-white -mx-8 lg:-mx-20">
           <motion.div 
             animate={{ x: [0, -1000] }}
             transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
             className="flex gap-20 items-center whitespace-nowrap px-10"
           >
              {[...Array(10)].map((_, i) => (
                <div key={i} className="flex gap-4 items-center">
                   <Activity size={14} className="text-[#004a8e]" />
                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest italic">
                      [VERIFYING_NODE_{i+10}]: INTEGRITY_CHECK... [OK]... LAB_SERVICE_ACTIVE... 
                   </span>
                </div>
              ))}
           </motion.div>
        </div>

        {/* --- TACTICAL CORE MISSIONS --- */}
        <section className="space-y-16">
           <div className="flex flex-col items-center text-center">
              <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter text-gray-800 leading-tight mb-4">
                 TACTICAL <span className="text-[#004a8e]">OPERATIONS</span>
              </h2>
              <div className="w-40 h-[3px] bg-[#ffc107] rounded-full"></div>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <TacticalCard index={0} title="Intelligence" desc="AI-driven node analysis to detect anomalies across forensic data streams." icon={Search} />
              <TacticalCard index={1} title="Forensics" desc="Delivering military-grade digital evidence reports with verified certainty." icon={Database} />
              <TacticalCard index={2} title="Defense" desc="Architecting global standards in clinical digital defense and research." icon={Shield} />
              <TacticalCard index={3} title="Training" desc="Elite recruitment and personnel training modules for modern investigators." icon={GraduationCap} />
           </div>
        </section>

        {/* --- WHY CRIMEX (SIFS Banner Style) --- */}
        <section className="relative">
           <div className="bg-[#004a8e] rounded-[4rem] p-12 lg:p-24 overflow-hidden shadow-2xl relative">
              <div className="absolute top-0 right-0 w-[40%] h-full bg-white/5 skew-x-[-15deg]"></div>
              <div className="relative z-10 flex flex-col lg:flex-row gap-20 items-center">
                 <div className="lg:w-1/2 space-y-8">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-[2px] bg-yellow-400"></div>
                       <span className="text-yellow-400 font-bold text-[9px] uppercase tracking-[0.5em] italic">Directive: 0x22F</span>
                    </div>
                    <h2 className="text-5xl lg:text-8xl font-black uppercase italic tracking-tighter leading-[0.85] text-white">
                       WHY <br />
                       <span className="text-blue-200">CRIMEX?</span>
                    </h2>
                    <p className="text-blue-100 text-lg lg:text-xl font-medium leading-relaxed italic border-l-4 border-yellow-400 pl-8">
                       "We bridge the gap between academic theory and clinical tactical defense, ensuring that raw data is translated into pure strategic intelligence."
                    </p>
                 </div>
                 <div className="lg:w-1/2 relative">
                    <div className="relative aspect-video rounded-[3rem] overflow-hidden border-4 border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center">
                       <ForensicScanner />
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* --- GLOBAL NETWORK --- */}
        <section className="flex flex-col items-center text-center space-y-16">
           <div className="space-y-4">
              <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter text-gray-800">
                 JOIN THE <br />
                 <span className="text-[#004a8e]">INSTITUTION</span>
              </h2>
              <div className="w-24 h-1 bg-[#ffc107] mx-auto rounded-full"></div>
           </div>

           <div className="flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-12">
              <Link to="/apply">
                 <motion.button 
                   whileHover={{ scale: 1.05 }} 
                   whileTap={{ scale: 0.95 }}
                   className="px-16 py-6 bg-[#004a8e] text-white font-black uppercase text-base tracking-[0.4em] rounded-xl shadow-2xl shadow-blue-900/30 hover:bg-[#003366]"
                 >
                    Apply for Access
                 </motion.button>
              </Link>
              <a href="https://wa.me/yournumber" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                 <div className="p-4 bg-green-50 text-green-600 rounded-2xl group-hover:bg-green-600 group-hover:text-white transition-all shadow-sm">
                    <MessageCircle size={24} />
                 </div>
                 <div className="text-left">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Support Node</p>
                    <p className="text-sm font-black text-gray-800 uppercase italic">WhatsApp Center</p>
                 </div>
              </a>
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