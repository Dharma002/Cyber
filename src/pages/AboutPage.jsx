import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Shield, Target, Users, Zap, Award, UserCheck, 
<<<<<<< HEAD
  Briefcase, Globe, Activity, Terminal, Eye, Cpu, Search, Database, Fingerprint, MessageCircle, ShieldCheck
} from 'lucide-react';

const Card = ({ icon: Icon, title, description, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative bg-white border border-gray-100 p-10 rounded-[2.5rem] hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 flex flex-col h-full overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 opacity-50 rounded-bl-full -z-0 transition-all group-hover:bg-blue-100" />
    
    <div className="relative z-10">
      <div className={`w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 border border-blue-100 text-[#004a8e] group-hover:bg-[#004a8e] group-hover:text-white transition-all duration-700 shadow-sm`}>
        <Icon size={32} />
      </div>
      
      <h3 className="text-2xl font-bold uppercase mb-4 text-gray-900 tracking-tight group-hover:text-[#004a8e] transition-colors">{title}</h3>
      <p className="text-gray-700 text-[13px] leading-relaxed font-semibold group-hover:text-gray-700 transition-colors uppercase tracking-wide italic">"{description}"</p>
    </div>
    
    <div className="absolute bottom-4 right-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity text-[#004a8e]">
       <ShieldCheck size={60} />
=======
  Briefcase, Globe, Activity, Terminal, Eye, Cpu, Search, Database, Fingerprint, MessageCircle
} from 'lucide-react';

const Card = ({ icon: Icon, title, description, color, index }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative bg-[#0a0c12]/40 backdrop-blur-3xl border border-white/5 p-10 rounded-[2.5rem] hover:bg-cyan-500/[0.02] hover:border-cyan-500/30 transition-all duration-500 flex flex-col h-full overflow-hidden shadow-2xl"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
    
    <div className="relative z-10">
      <div className={`w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-8 border border-white/10 text-cyan-400 group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-700 shadow-[0_0_30px_rgba(6,182,212,0.1)]`}>
        <Icon size={32} />
      </div>
      
      <h3 className="text-2xl font-black uppercase mb-4 italic text-white tracking-tighter leading-none group-hover:text-cyan-400 transition-colors">{title}</h3>
      <p className="text-slate-400 text-[13px] leading-relaxed font-medium group-hover:text-slate-200 transition-colors uppercase tracking-wide opacity-80">{description}</p>
    </div>
    
    {/* Decorative corner bit */}
    <div className="absolute bottom-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
       <Terminal size={40} />
>>>>>>> fa8b9831cbc75daa64b98b0f1a0be2a4cf394940
    </div>
  </motion.div>
);

const MethodologyStep = ({ title, desc, icon: Icon, index }) => (
<<<<<<< HEAD
  <div className="flex gap-6 group">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-[#004a8e] group-hover:bg-[#004a8e] group-hover:text-white transition-all shadow-md shrink-0">
        <Icon size={20} />
      </div>
      {index !== 2 && <div className="w-[2px] h-20 bg-gradient-to-b from-blue-200 to-transparent mt-4"></div>}
    </div>
    <div className="pt-1">
      <h4 className="text-xl font-bold text-gray-900 uppercase tracking-tight mb-2 group-hover:text-[#004a8e] transition-colors">{title}</h4>
      <p className="text-gray-700 text-[13px] leading-relaxed max-w-sm font-medium italic">{desc}</p>
=======
  <div className="flex gap-3 sm:gap-8 group">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all shadow-xl shrink-0">
        <Icon size={20} />
      </div>
      {index !== 3 && <div className="w-[1px] h-16 sm:h-20 bg-gradient-to-b from-cyan-500/30 to-transparent mt-4"></div>}
    </div>
    <div className="pt-1">
      <h4 className="text-lg sm:text-xl font-black text-white uppercase italic tracking-tighter mb-2 group-hover:text-cyan-400 transition-colors">{title}</h4>
      <p className="text-slate-400 text-[12px] leading-relaxed max-w-sm font-medium">{desc}</p>
>>>>>>> fa8b9831cbc75daa64b98b0f1a0be2a4cf394940
    </div>
  </div>
);

const AboutPage = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
<<<<<<< HEAD
=======
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
>>>>>>> fa8b9831cbc75daa64b98b0f1a0be2a4cf394940

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-gray-900 overflow-hidden font-sans pt-32 pb-24">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
<<<<<<< HEAD
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-50 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/20 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-24">
        
        {/* --- CINEMATIC HERO: THE ARCHIVE (SIFS STYLE) --- */}
        <section className="relative flex items-center justify-center pt-10">
          <motion.div style={{ opacity }} className="relative z-10 w-full max-w-5xl text-center">
            <div className="inline-flex items-center gap-3 bg-white border border-gray-100 px-4 py-1.5 rounded-full shadow-sm mb-12">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></div>
                <span className="text-gray-600 font-bold text-[10px] uppercase tracking-[0.4em]">Academic Archive // Institutional History</span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-extrabold uppercase tracking-tighter leading-[0.8] text-gray-900 mb-12">
              THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#004a8e] to-blue-400">ARCHIVE</span>
            </h1>

            <p className="text-gray-700 text-xl md:text-2xl font-medium tracking-tight leading-relaxed max-w-3xl mx-auto italic">
              "Our mission is to translate <span className="text-[#004a8e] font-bold">complex forensic data</span> into actionable tactical intelligence for the next generation of digital defenders."
            </p>

            <div className="flex items-center justify-center gap-6 mt-16">
                <div className="h-[1px] w-20 bg-gray-200"></div>
                <div className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-100 rounded-2xl shadow-sm">
                   <Cpu className="text-[#004a8e]" size={20} />
                   <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">ISO 9001:2015 CERTIFIED</span>
                </div>
                <div className="h-[1px] w-20 bg-gray-200"></div>
            </div>
          </motion.div>
        </section>

        {/* --- METHODOLOGY SECTION --- */}
        <section className="relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center bg-white border border-gray-100 p-8 md:p-16 rounded-[4rem] shadow-2xl shadow-blue-900/5 relative">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 blur-[100px] rounded-full"></div>
             
             <div>
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#004a8e] border border-blue-100"><Activity size={24} /></div>
                  <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tighter text-[#004a8e]">SYSTEM<br />METHODOLOGY</h2>
               </div>
               <p className="text-gray-700 text-lg font-medium leading-relaxed mb-12 max-w-sm">
                 How we bridge the gap between academic theory and clinical tactical defense through scientifically proven protocols.
               </p>
               
               <div className="space-y-3">
                 {["IDENTIFICATION", "ACQUISITION", "SYNTHESIS"].map(item => (
                   <div key={item} className="flex justify-between items-center bg-gray-50 px-6 py-4 rounded-xl border border-gray-100">
                      <span className="text-[10px] font-bold text-[#004a8e] uppercase tracking-widest">{item}</span>
                      <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">SIFS_LEVEL_A</span>
                   </div>
                 ))}
               </div>
             </div>

             <div className="space-y-12">
                <MethodologyStep index={0} title="Evidence Preservation" desc="Utilizing hashed imaging and strict chain of custody protocols to maintain judicial integrity." icon={Shield} />
                <MethodologyStep index={1} title="Pattern Synthesis" desc="Expert node analysis to detect anomalies across digital streams and physical behavioral signatures." icon={Fingerprint} />
                <MethodologyStep index={2} title="Tactical Reporting" desc="Generating legally admissible digital dossiers with timestamped forensic certainty." icon={Database} />
=======
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ backgroundImage: `linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)`, backgroundSize: '80px 80px' }}>
        </div>
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-cyan-500/5 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/5 blur-[180px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-12 relative z-10 space-y-16">
        
        {/* --- CINEMATIC HERO: THE ARCHIVE --- */}
        <section className="min-h-[50vh] md:min-h-screen relative flex items-center justify-center pt-10 md:pt-20 overflow-hidden px-6 md:px-20">
          <motion.div 
            style={{ opacity, scale }}
            className="relative z-10 w-full max-w-5xl"
          >
            {/* HUD Status Header */}
            <div className="flex items-center justify-center gap-8 mb-12 opacity-50">
               <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping"></div>
                  <span className="text-cyan-500 font-mono text-[8px] uppercase tracking-[0.6em]">System_Online</span>
               </div>
               <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
               <div className="flex items-center gap-2">
                  <span className="text-white font-mono text-[8px] uppercase tracking-[0.6em]">Node_Active: CR-01</span>
               </div>
            </div>

            {/* Main Cinematic Title */}
            <div className="relative mb-8 md:mb-16">
               <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="relative z-10"
               >
                 <h1 className="text-3xl sm:text-7xl lg:text-8xl font-[1000] uppercase italic tracking-tighter leading-tight md:leading-[0.7] text-white text-center">
                   THE
                   <span className="text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-800 drop-shadow-[0_0_50px_rgba(6,182,212,0.4)]"> ARCHIVE</span>
                 </h1>
               </motion.div>
               
               {/* Background Glows for Title */}
               <div className="absolute inset-0 z-0 flex items-center justify-center origin-center">
                  <div className="w-full h-1/2 bg-cyan-500/10 blur-[150px] rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent blur-[2px]"></div>
               </div>
            </div>

            {/* Subtext with HUD Indicators */}
            <div className="relative max-w-2xl mx-auto space-y-10">
               <p className="text-slate-400 text-xl md:text-2xl font-medium tracking-tight leading-relaxed italic">
                 "Our mission is to translate <span className="text-white">complex cyber entropy</span> into actionable tactical dossiers for the next generation of digital defenders."
               </p>
               
               {/* Centered CTA/Metric */}
               <div className="flex items-center justify-center gap-8 pt-8">
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-white/10"></div>
                  <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-4 rounded-2xl backdrop-blur-xl group cursor-default">
                     <Cpu className="text-cyan-500 animate-pulse" size={24} />
                     <div className="text-left">
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1">Grid_Capability</p>
                        <p className="text-lg font-black text-white italic tracking-tighter leading-none">99.9% SECURE</p>
                     </div>
                  </div>
                  <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-white/10"></div>
               </div>
            </div>
          </motion.div>

          {/* Floating Data Nodes (Decorative) */}
          <div className="absolute inset-0 z-0 pointer-events-none">
             {[...Array(6)].map((_, i) => (
                <motion.div 
                  key={i}
                  animate={{ 
                    y: [0, -40, 0],
                    x: [0, 20, 0],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{ 
                    duration: 5 + i, 
                    repeat: Infinity, 
                    delay: i * 0.5 
                  }}
                  className="absolute p-4 border border-cyan-500/20 rounded-xl bg-cyan-500/[0.02]"
                  style={{ 
                    top: `${Math.random() * 80 + 10}%`, 
                    left: `${Math.random() * 90}%`,
                    transform: `scale(${0.5 + Math.random() * 0.5})`
                  }}
                >
                   <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mb-2"></div>
                   <div className="w-8 h-[1px] bg-cyan-500/30"></div>
                </motion.div>
             ))}
          </div>
        </section>

        <section className="relative py-12 md:py-0">
          <div className="grid lg:grid-cols-2 gap-16 items-center bg-[#0a0c12]/40 backdrop-blur-3xl px-4 sm:px-12 py-10 lg:py-16 rounded-[2.5rem] md:rounded-[5rem] border border-white/10 relative shadow-2xl">
             <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px]"></div>
             
             <div>
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400"><Cpu size={20} /></div>
                  <h2 className="text-[1.35rem] sm:text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-white leading-tight">SYSTEM<br className="hidden md:block" /> METHODOLOGY</h2>
               </div>
               <p className="text-slate-400 text-lg font-medium leading-relaxed mb-12 max-w-sm">
                 How we translate raw data into <span className="text-white">actionable tactical intelligence</span> within our secure ecosystem.
               </p>
               
                <div className="space-y-2">
                  {/* Lifecycle Status Indicators */}
                  {[
                    { t: "IDENTIFICATION", v: "CRITICAL" },
                    { t: "ACQUISITION", v: "ENCRYPTED" },
                    { t: "SYNTHESIS", v: "COGNITIVE" }
                  ].map(item => (
                    <div key={item.t} className="flex justify-between items-center bg-white/[0.02] px-3 sm:px-6 py-4 rounded-xl border border-white/5 gap-4">
                       <span className="text-[9px] sm:text-[10px] font-mono text-cyan-600 font-bold uppercase tracking-wider">{item.t}</span>
                       <span className="text-[9px] sm:text-[10px] font-mono text-slate-300 font-bold uppercase tracking-widest leading-none">{item.v}</span>
                    </div>
                  ))}
                </div>
             </div>

             <div className="space-y-12 relative">
                <div className="absolute -left-10 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-transparent hidden lg:block"></div>
                <MethodologyStep 
                  index={0}
                  title="Evidence Preservation"
                  desc="Utilizing advanced write-blockers and hashed imaging to maintain chain of custody from T-Zero."
                  icon={Shield}
                />
                <MethodologyStep 
                  index={1}
                  title="Pattern Synthesis"
                  desc="AI-driven node analysis to detect anomalies across encrypted data streams and behavioral signatures."
                  icon={Fingerprint}
                />
                <MethodologyStep 
                  index={2}
                  title="Tactical Reporting"
                  desc="Generating court-ready digital dossiers with timestamped forensic certainty and absolute integrity."
                  icon={Database}
                />
>>>>>>> fa8b9831cbc75daa64b98b0f1a0be2a4cf394940
             </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* --- VISION & MISSION --- */}
        <section className="grid lg:grid-cols-2 gap-8">
          <div className="bg-[#004a8e] p-12 rounded-[3rem] text-white shadow-xl shadow-blue-900/20 relative overflow-hidden group">
             <Target className="text-yellow-400 mb-8 group-hover:scale-110 transition-transform" size={48} />
             <h3 className="text-4xl font-extrabold uppercase tracking-tighter mb-4">OUR VISION</h3>
             <p className="text-blue-100 text-lg font-medium leading-relaxed italic opacity-90">"To architect a global standard in clinical digital defense and research, creating a future where digital sovereignty is absolute."</p>
             <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-tl-full"></div>
          </div>
          <div className="bg-white border border-gray-200 p-12 rounded-[3rem] shadow-xl shadow-blue-900/5 relative overflow-hidden group">
             <Eye className="text-[#004a8e] mb-8 group-hover:scale-110 transition-transform" size={48} />
             <h3 className="text-4xl font-extrabold uppercase tracking-tighter text-gray-900 mb-4">OUR MISSION</h3>
             <p className="text-gray-700 text-lg font-medium leading-relaxed italic">"To deliver elite investigation modules, tactical personnel training, and military-grade intelligence roadmaps for modern investigators."</p>
             <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#004a8e]/5 rounded-tl-full"></div>
=======
        {/* --- MISSION & VISION (Redesigned) --- */}
        <section className="grid lg:grid-cols-2 gap-10">
          <div className="group relative bg-gradient-to-br from-cyan-500/10 to-transparent p-12 rounded-[3.5rem] border border-cyan-500/20 overflow-hidden shadow-2xl">
             <Target className="text-cyan-400 mb-8 group-hover:scale-110 transition-transform" size={48} />
             <h3 className="text-4xl font-black uppercase italic tracking-tighter text-white mb-4">OUR VISION</h3>
             <p className="text-slate-400 text-lg leading-relaxed font-medium">To architect a global standard in clinical digital defense and cognitive forensic research, creating a future where digital sovereignty is absolute.</p>
             <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-500 to-transparent"></div>
          </div>
          <div className="group relative bg-gradient-to-br from-blue-600/10 to-transparent p-12 rounded-[3.5rem] border border-blue-600/20 overflow-hidden shadow-2xl">
             <Eye className="text-blue-400 mb-8 group-hover:scale-110 transition-transform" size={48} />
             <h3 className="text-4xl font-black uppercase italic tracking-tighter text-white mb-4">OUR MISSION</h3>
             <p className="text-slate-400 text-lg leading-relaxed font-medium">To deliver elite investigation modules, tactical personnel training, and military-grade intelligence Roadmaps for the modern investigator.</p>
             <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-blue-600 to-transparent"></div>
>>>>>>> fa8b9831cbc75daa64b98b0f1a0be2a4cf394940
          </div>
        </section>

        {/* --- CORE VALUES --- */}
        <section className="space-y-16">
<<<<<<< HEAD
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tighter mb-4 text-[#004a8e]">
              CORE <span className="text-gray-900 font-light italic">VALUES</span>
            </h2>
            <div className="w-20 h-1 bg-[#ffc107] mx-auto rounded-full"></div>
=======
          <div className="flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 italic leading-none">
              <span className="text-white underline decoration-cyan-500 underline-offset-[12px] decoration-4">CORE</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">VALUES</span>
            </h2>
>>>>>>> fa8b9831cbc75daa64b98b0f1a0be2a4cf394940
          </div>
          <div className="grid md:grid-cols-3 gap-8">
<<<<<<< HEAD
            <Card index={0} icon={Zap} title="Innovation" description="Pushing boundaries in cognitive intelligence research and offensive fusion." />
            <Card index={1} icon={Users} title="Integrity" description="Upholding surgical precision and absolute transparency in every dossier." />
            <Card index={2} icon={Award} title="Excellence" description="Setting the high-water mark for forensic capability and professional training." />
          </div>
        </section>

        {/* --- FOUNDER PROFILE --- */}
        <section className="relative pt-12">
           <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5 relative group">
                 <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden border-8 border-white bg-gray-200 shadow-2xl transition-all duration-500">
                    <img src="/ayushi.jpeg" alt="Ayushi Singh" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#004a8e] to-transparent opacity-60"></div>
                 </div>
                 {/* Floating verification badge */}
                 <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-3xl shadow-2xl flex items-center justify-center p-4 border border-gray-100">
                    <ShieldCheck size={40} className="text-[#004a8e]" />
=======
            <Card 
              index={0}
              icon={Zap}
              title="Innovation"
              description="Pushing boundaries in cognitive intelligence research and offensive-defensive fusion."
            />
            <Card 
              index={1}
              icon={Users}
              title="Integrity"
              description="Upholding surgical precision and absolute transparency in every dossier we finalize."
            />
            <Card 
              index={2}
              icon={Award}
              title="Excellence"
              description="Setting the high-water mark for forensic capability and professional agent training."
            />
          </div>
        </section>

        {/* --- FOUNDER section (Redesigned as Executive Profile) --- */}
        <section className="relative pt-20">
           <div className="absolute top-0 right-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
           
           <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 relative group">
                 <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden border-2 border-white/5 bg-[#05080a] transition-all duration-500">
                    <img 
                       src="/ayushi.jpeg" 
                       alt="Ayushi Singh" 
                       className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" 
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#00020a] to-transparent opacity-60"></div>
                    <div className="absolute bottom-8 left-8">
                       <p className="text-cyan-500 font-mono text-[8px] uppercase tracking-[0.4em] mb-2">Subject_ID: Founder_Core</p>
                       <div className="flex gap-2">
                          <div className="w-10 h-1 bg-cyan-500 rounded-full"></div>
                          <div className="w-4 h-1 bg-cyan-500/30 rounded-full"></div>
                       </div>
                    </div>
>>>>>>> fa8b9831cbc75daa64b98b0f1a0be2a4cf394940
                 </div>
              </div>

              <div className="lg:col-span-7 space-y-10">
                 <div className="space-y-4">
<<<<<<< HEAD
                    <div className="flex flex-wrap gap-3">
                       <span className="text-[10px] font-bold text-[#004a8e] uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100 shadow-sm">Founder & Director</span>
                       <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest bg-white px-4 py-1.5 rounded-full border border-gray-100 shadow-sm">NCRB Expert</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-extrabold uppercase tracking-tighter leading-none text-gray-900 leading-tight">
                       AYUSHI <span className="text-[#004a8e]">SINGH</span>
                    </h2>
                 </div>

                 <div className="relative p-10 bg-white border border-gray-100 rounded-[3rem] shadow-xl shadow-blue-900/5 italic text-[#004a8e]">
                    <p className="text-gray-600 text-2xl font-medium leading-relaxed">
                       "Crimex Intelligence is not just a hub; it's a testament to digital resilience. Our goal is to forge a legacy where defense isn't just a strategy, but pure instinct."
                    </p>
                    <Terminal className="absolute top-6 right-8 text-gray-50" size={48} />
                 </div>

                 <div className="flex flex-col sm:flex-row gap-6 pt-4">
                    <a href="https://chat.whatsapp.com/Cdr2DnpXfZAKFSr9bGunkw" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                       <div className="p-4 bg-green-50 text-green-600 rounded-2xl group-hover:bg-green-600 group-hover:text-white transition-all shadow-sm">
                          <MessageCircle size={24} />
                       </div>
                       <div className="text-left">
                          <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Connect Directly</p>
                          <p className="text-sm font-bold text-gray-900 uppercase italic">Founder's Portal</p>
                       </div>
                    </a>
=======
                    <div className="flex items-center flex-wrap gap-3">
                       <span className="text-[10px] font-black text-cyan-500 uppercase tracking-widest bg-cyan-500/5 border border-cyan-500/10 px-3 py-1 rounded-full">Elite Investigator</span>
                       <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest bg-white/5 border border-white/10 px-3 py-1 rounded-full">NCRB Expert</span>
                       <a 
                        href="https://chat.whatsapp.com/Cdr2DnpXfZAKFSr9bGunkw" 
                        target="_blank" rel="noopener noreferrer"
                        className="text-[10px] font-black text-[#25d366] uppercase tracking-widest bg-[#25d366]/5 border border-[#25d366]/20 px-3 py-1 rounded-full flex items-center gap-2 hover:bg-[#25d366] hover:text-black transition-all"
                       >
                         <MessageCircle size={12} /> Join Community
                       </a>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none text-white leading-tight">
                       AYUSHI
                       <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-600"> SINGH</span>
                    </h2>
                 </div>

                 <div className="relative p-8 bg-white/[0.02] border-l-4 border-cyan-500 rounded-r-3xl italic">
                    <p className="text-slate-300 text-2xl font-medium leading-relaxed">
                       "CRIMEX is not just a hub; it's a testament to digital resilience. Our goal is to forge a legacy where defense isn't just a strategy, but pure cognitive instinct."
                    </p>
                    <Terminal className="absolute top-4 right-4 text-white/5" size={40} />
                 </div>

                 <div className="grid sm:grid-cols-2 gap-6">
                    <div className="p-6 bg-[#0a0c12] border border-white/5 rounded-3xl group cursor-default">
                       <h4 className="text-white font-black uppercase text-xs tracking-widest mb-2 flex items-center gap-2">
                          <Search size={14} className="text-cyan-500" /> Research_Lead
                       </h4>
                       <p className="text-slate-500 text-[11px] leading-relaxed uppercase font-mono group-hover:text-slate-300 transition-colors">Specialized in NCRB intelligence patterns and tactical forensic architecture.</p>
                    </div>
                    <div className="p-6 bg-[#0a0c12] border border-white/5 rounded-3xl group cursor-default">
                       <h4 className="text-white font-black uppercase text-xs tracking-widest mb-2 flex items-center gap-2">
                          <Activity size={14} className="text-cyan-500" /> Operations_Director
                       </h4>
                       <p className="text-slate-500 text-[11px] leading-relaxed uppercase font-mono group-hover:text-slate-300 transition-colors">Director of mission-critical investigations and strategic enrollment protocols.</p>
                    </div>
>>>>>>> fa8b9831cbc75daa64b98b0f1a0be2a4cf394940
                 </div>
              </div>
           </div>
        </section>

      </div>

<<<<<<< HEAD
      <footer className="mt-32 py-10 text-center border-t border-gray-100 opacity-40">
          <p className="font-bold text-[10px] text-gray-600 tracking-[0.4em] uppercase">Crimex Institutional Archive // v.3.9</p>
      </footer>
=======
      <footer className="relative z-30 py-10 mt-32 text-center border-t border-white/5 opacity-40">
          <p className="font-mono text-[9px] text-cyan-700 tracking-[0.6em] uppercase italic">Personnel_Briefing // CRIMEX_OS // v.3.9</p>
      </footer>

      {/* Shared Animation CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan-line { 0% { top: -20%; opacity: 0; } 50% { opacity: 0.3; } 100% { top: 120%; opacity: 0; } }
        .animate-scan-line { animation: scan-line 5s linear infinite; }
      `}} />
>>>>>>> fa8b9831cbc75daa64b98b0f1a0be2a4cf394940
    </div>
  );
};

export default AboutPage;