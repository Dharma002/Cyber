import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Zap, Search, ChevronRight, Activity, Terminal, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const DepartmentCard = ({ title, desc, icon: Icon, color, details, index }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative h-full"
  >
    <div className={`absolute -inset-1 bg-gradient-to-r ${color} rounded-[3rem] blur opacity-10 group-hover:opacity-30 transition duration-1000 group-hover:duration-200`}></div>
    
    <div className="relative h-full bg-[#0a0c12]/80 backdrop-blur-3xl border border-white/10 p-10 rounded-[3rem] flex flex-col items-center text-center overflow-hidden">
      {/* Dynamic Background Pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rotate-45 translate-x-10 -translate-y-10 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-700"></div>
      
      {/* Icon Section */}
      <div className="relative mb-8">
        <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center border border-white/10 group-hover:rotate-[360deg] transition-transform duration-1000">
           <Icon className="text-white group-hover:text-cyan-400 transition-colors" size={40} />
        </div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#00f2ea] text-black rounded-full flex items-center justify-center font-black text-xs shadow-xl">
          0{index + 1}
        </div>
      </div>

      <h3 className="text-3xl font-black uppercase italic tracking-tighter text-white mb-6 group-hover:text-cyan-400 transition-colors">
        {title}
      </h3>
      
      <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium">
        {desc}
      </p>

      {/* Detail List */}
      <ul className="text-left w-full space-y-4 mb-10 pt-6 border-t border-white/5">
        {details.map((detail, i) => (
          <li key={i} className="flex items-start gap-3 group/item">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 group-hover/item:scale-150 transition-transform"></div>
            <span className="text-[12px] text-slate-500 group-hover/item:text-slate-200 transition-colors leading-tight italic">
              {detail}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-auto w-full">
         <Link to="/services" className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center gap-2 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-500 overflow-hidden relative">
            <span className="text-[10px] font-black uppercase tracking-widest relative z-10">Access_Department</span>
            <ChevronRight size={14} className="relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
         </Link>
      </div>

      {/* Terminal Footer Detail */}
      <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center opacity-20 pointer-events-none font-mono text-[6px] tracking-widest uppercase">
         <span>Status: ACTIVE</span>
         <span>Node_ID: CRIMEX_0x{index}</span>
      </div>
    </div>
  </motion.div>
);

const DepartmentPage = () => {
  const departments = [
    {
      title: "Forensic Education",
      desc: "Academic excellence bridging the gap between theory and practical investigation.",
      icon: GraduationCap,
      color: "from-blue-600 to-cyan-500",
      details: [
        "Specialized academic resources & research papers",
        "Expert-curated forensic curriculum for students",
        "Global mentorship with leading field specialists"
      ]
    },
    {
      title: "Forensic Training",
      desc: "High-intensity tactical training for active practitioners and security professionals.",
      icon: Zap,
      color: "from-cyan-500 to-purple-600",
      details: [
        "Tactical hands-on case simulations",
        "Tool-specific certifications (CCTV, Mobile, DNA)",
        "Law enforcement-standard training modules"
      ]
    },
    {
      title: "Forensic Investigation",
      desc: "Elite intelligence support for private and corporate litigation matters.",
      icon: Search,
      color: "from-purple-600 to-blue-600",
      details: [
        "Strategic investigation & evidence recovery",
        "Expert witness testimony & legal reporting",
        "End-to-end digital & physical forensic labs"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#00020a] text-white pt-40 pb-24 px-8 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/5 blur-[180px] rounded-full"></div>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-cyan-500/20 animate-scan"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-24 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 bg-white/[0.03] border border-white/10 px-5 py-2 rounded-full backdrop-blur-md"
          >
            <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_10px_#06b6d4]"></div>
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] font-mono">Structural_Core // Departments</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-[0.8] mb-2">
            <span className="text-white">COGNITIVE</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 drop-shadow-[0_0_30px_rgba(34,211,238,0.4)]">DEPARTMENTS</span>
          </h1>
          
          <p className="max-w-xl text-slate-400 font-medium leading-relaxed">
            CRIMEX operates through three core pillars of intelligence, ensuring a <span className="text-white">360-degree coverage</span> of forensic science and digital defense.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {departments.map((dept, index) => (
            <DepartmentCard key={index} {...dept} index={index} />
          ))}
        </div>

        {/* Global Stats or Detail Banner */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="mt-32 p-12 bg-white/[0.02] border border-white/5 rounded-[4rem] text-center relative overflow-hidden"
        >
           <div className="absolute -left-20 -top-20 w-64 h-64 bg-cyan-500/5 blur-[100px]"></div>
           <div className="flex flex-col md:flex-row items-center justify-around gap-12 relative z-10">
              {[
                { label: "Operation Status", val: "STRATEGIC_ACTIVE", icon: Activity },
                { label: "Response Link", val: "ENCRYPTED_SSL", icon: Terminal },
                { label: "Verification", val: "ISO_9001_COMPLIANT", icon: Shield }
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-4">
                   <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400"><stat.icon size={20} /></div>
                   <div className="text-left">
                      <p className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">{stat.label}</p>
                      <p className="text-xs font-black text-white italic tracking-tighter">{stat.val}</p>
                   </div>
                </div>
              ))}
           </div>
        </motion.div>
      </div>

      {/* Shared Animation CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan { 0% { top: -10%; opacity: 0; } 50% { opacity: 1; } 100% { top: 110%; opacity: 0; } }
        .animate-scan { animation: scan 6s linear infinite; }
      `}} />
    </div>
  );
};

export default DepartmentPage;
