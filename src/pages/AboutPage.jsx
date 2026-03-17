import React from 'react';
import { motion } from 'framer-motion';
import { Users, ShieldCheck, Zap, UserCheck, Award, Target, Briefcase } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="relative min-h-screen bg-[#010208] text-white overflow-hidden font-sans">
      
      {/* --- CYBER SCANNER BACKGROUND LAYER (Unchanged Animation) --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(14, 165, 233, 0.1) 1px, transparent 0)`, backgroundSize: '40px 40px' }}></div>
        <motion.div initial={{ top: "-10%" }} animate={{ top: "110%" }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute left-0 right-0 h-[20vh] bg-gradient-to-b from-transparent via-cyan-600/10 to-transparent z-10" />
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-900/10 blur-[120px] rounded-full" />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-20 p-6 md:p-10 pt-40 max-w-7xl mx-auto space-y-32">
        
        {/* --- 1. HERO SECTION (Layout like link) --- */}
        <section className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-cyan-500/20 blur-2xl rounded-[2.5rem] opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070" 
                alt="Cyber Forensic Intelligence" 
                className="relative rounded-[2.5rem] border border-white/10 shadow-2xl object-cover h-[500px] w-full"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10">
                <p className="text-cyan-400 font-mono text-[10px] tracking-widest uppercase mb-1">Live_Status</p>
                <p className="font-bold text-lg uppercase italic">Operational Security Intelligence Active</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-black uppercase  tracking-tighter leading-[0.9]">
              
               <span className="text-white block drop-shadow-lg">CRIMEX</span>  
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-blue-500">Intelligence</span>
            </h1>
            <p className="text-slate-400 leading-relaxed text-lg">
              CRIMEX is a premier cyber intelligence hub dedicated to bridging the gap between digital investigation and professional excellence. We empower investigators and students through advanced forensic protocols and high-tier career roadmaps.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
               <div className="flex gap-4 items-start">
                  <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400"><Target size={20} /></div>
                  <div><h4 className="font-bold uppercase text-xs">Mission</h4><p className="text-[11px] text-slate-500 mt-1 uppercase tracking-tighter">Securing the digital frontier through education.</p></div>
               </div>
               <div className="flex gap-4 items-start">
                  <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400"><Award size={20} /></div>
                  <div><h4 className="font-bold uppercase text-xs">Vision</h4><p className="text-[11px] text-slate-500 mt-1 uppercase tracking-tighter">Setting the gold standard in Indian Forensics.</p></div>
               </div>
            </div>
          </motion.div>
        </section>

        {/* --- 2. FOUNDER SECTION (With AYUSHI SINGH Name) --- */}
        <section className="bg-[#0d1117]/80 backdrop-blur-2xl border border-white/5 p-12 rounded-[3rem] relative overflow-hidden shadow-3xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] rounded-full"></div>
          <div className="flex flex-col md:flex-row items-center gap-16">
             {/* Circular Photo Core */}
             <div className="relative w-64 h-64 shrink-0">
               <div className="absolute inset-0 bg-cyan-500/20 blur-[60px] rounded-full animate-pulse-cyan"></div>
               <div className="absolute inset-0 p-1 animate-spin-slow">
                 <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-500 opacity-40"><circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="10 5"/></svg>
               </div>
               <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyan-500/30 p-2 bg-[#05080a]">
                 <img src="/ayushi.jpeg" alt="Founder Ayushi Singh" className="w-full h-full object-cover rounded-full animate-inner-pulse" />
               </div>
             </div>

             <div className="space-y-6 text-center md:text-left relative z-10">
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-cyan-400 font-mono text-[10px] font-black uppercase tracking-[0.4em]">Chief_Investigator // Founder</span>
                </div>
                {/* --- YAHAN NAAM LIKHA HAI --- */}
                <h2 className="text-5xl md:text-7xl font-black uppercase  tracking-tighter">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-blue-500">ayushi singh</span> 
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-mono">
                  <span className="text-cyan-500 font-bold">{">"}</span> Leading forensic initiatives with expertise in NCRB, BPRD, and SCI training modules. Specializing in strategic MOU frameworks for national security bodies.
                </p>
                <div className="flex gap-4 justify-center md:justify-start pt-4">
                  <button className="px-8 py-3 bg-cyan-500 text-black font-black uppercase text-[10px] tracking-widest rounded-full hover:shadow-[0_0_20px_#06b6d4] transition-all">Connect Identity</button>
                </div>
             </div>
          </div>
        </section>

        {/* --- 3. ADVISORY BOARD --- */}
        <section className="space-y-16">
          <div className="text-center">
             <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-4"><span className="text-white block drop-shadow-lg">advisory</span>   <span className="text-cyan-300">Board</span></h2>
             <div className="w-24 h-1.5 bg-cyan-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] text-center group hover:border-cyan-500/50 transition-all backdrop-blur-md cursor-pointer">
                <div className="w-20 h-20 bg-slate-800 rounded-full mx-auto mb-6 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl overflow-hidden">
                   <Users className="text-cyan-900 group-hover:text-cyan-400 transition-colors" size={32} />
                </div>
                <h4 className="font-bold uppercase tracking-tight text-white">Specialist Agent</h4>
                <p className="text-cyan-500 text-[10px] font-black mt-1 uppercase tracking-widest">Advisor</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- 4. PARTNERSHIPS --- */}
        <section className="border-t border-white/5 pt-32 pb-20">
           <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="space-y-6">
               <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">
                <span className="text-white block drop-shadow-lg">strategic</span>  
               <span className="text-cyan-400">MOU Partners</span></h2>
               <p className="text-slate-500 max-w-md leading-relaxed uppercase text-sm font-mono tracking-tighter">
                 We have established formal collaborations with India's apex security and investigation councils.
               </p>
             </div>
             <div className="flex flex-wrap gap-8 justify-center lg:justify-end opacity-60">
                {[1, 2, 3].map(p => (
                  <div key={p} className="h-16 w-16 md:h-24 md:w-24 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center hover:opacity-100 transition-opacity cursor-pointer">
                     <ShieldCheck size={30} className="text-slate-600" />
                  </div>
                ))}
             </div>
           </div>
        </section>

      </div>

      {/* FOOTER DECOR */}
      <div className="absolute bottom-10 left-10 z-30 hidden lg:block">
        <p className="font-mono text-[9px] text-cyan-700 tracking-[0.6em] uppercase">Intelligence_Briefing // CRIMEX_OS</p>
      </div>
      
      {/* Styles (purnae wale logic jaise) */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse-cyan { 0%, 100% { opacity: 0.2; transform: scale(1); blur: 60px; } 50% { opacity: 0.4; transform: scale(1.1); blur: 80px; } }
        .animate-pulse-cyan { animation: pulse-cyan 4s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 15s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-inner-pulse { animation: inner-pulse 4s ease-in-out infinite; }
        @keyframes inner-pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
      `}} />
    </div>
  );
};

export default AboutPage;