import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileSearch, Fingerprint, Cpu, Microscope, Car, UserCircle, LifeBuoy, 
  ChevronRight, Terminal, Activity, Shield 
} from 'lucide-react';

const ServiceCard = ({ category, items, icon: Icon, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative bg-[#0a0c12]/60 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] hover:bg-cyan-500/[0.02] hover:border-cyan-500/30 transition-all duration-500 flex flex-col h-full shadow-2xl overflow-hidden"
  >
    {/* Decorative Background Elements */}
    <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full group-hover:bg-cyan-500/10 transition-colors"></div>
    
    <div className="relative z-10 flex flex-col h-full">
      {/* Category Header */}
      <div className="flex items-center gap-5 mb-8">
        <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center border border-cyan-500/20 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-500 shadow-[0_0_20px_rgba(34,211,238,0.1)]">
          <Icon size={28} />
        </div>
        <h3 className="text-xl font-black uppercase italic tracking-tighter text-white leading-tight">
          {category}
        </h3>
      </div>

      {/* Services List */}
      <ul className="space-y-4 flex-grow">
        {items.map((item, idx) => (
          <motion.li 
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: (index * 0.1) + (idx * 0.05) }}
            className="flex items-start gap-3 group/item cursor-default"
          >
            <ChevronRight size={14} className="mt-1 text-cyan-600 group-hover/item:text-cyan-400 transition-colors shrink-0" />
            <span className="text-slate-400 text-[13px] leading-tight font-medium group-hover/item:text-slate-200 transition-colors">
              {item}
            </span>
          </motion.li>
        ))}
      </ul>

      {/* Bottom Interface Detail */}
      <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity">
        <div className="flex gap-1">
          <div className="w-1 h-1 rounded-full bg-cyan-500"></div>
          <div className="w-1 h-1 rounded-full bg-cyan-500/50"></div>
          <div className="w-1 h-1 rounded-full bg-cyan-500/20"></div>
        </div>
        <span className="text-[8px] font-mono text-cyan-600 uppercase tracking-widest">Active_Module</span>
      </div>
    </div>
    
    {/* Scanning Line overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-1/2 w-full -translate-y-full group-hover:animate-scan-slow pointer-events-none" />
  </motion.div>
);

const ServicesPage = () => {
  const forensicServices = [
    {
      category: "DOCUMENT EXAMINATION",
      icon: FileSearch,
      items: ["Handwriting Examination", "Signature Verification", "Document Authenticity Analysis", "Certificate Verification", "Photograph Verification"]
    },
    {
      category: "FINGERPRINT ANALYSIS",
      icon: Fingerprint,
      items: ["Fingerprint Development", "Fingerprint Matching", "Fingerprint Software Analysis", "Fingerprint in DVI", "Fingerprint for PCC"]
    },
    {
      category: "CYBER FORENSICS INVESTIGATION",
      icon: Cpu,
      items: ["Audio & Video Verification", "Speaker Identification & Transcript", "CCTV Forensics", "Mobile Forensics", "Deleted Data Recovery"]
    },
    {
      category: "FORENSIC BIOLOGY",
      icon: Microscope,
      items: ["Blood Group Examination", "Semen Examination", "Hair Examination", "Species Origin Examination", "Forensic DNA Test"]
    },
    {
      category: "KEY & ACCIDENT RECONSTRUCTION",
      icon: Car,
      items: ["Toolmark Analysis", "Vehicle Key Forensics", "Vehicle Identification Number", "Accident Reconstruction", "Crime Scene Investigation"]
    },
    {
      category: "FORENSIC FACIAL IMAGING",
      icon: UserCircle,
      items: ["Digital Facial Composites", "Post Mortem Facial Imaging", "Age-Progression-Regression", "1 to 1 Face Comparison & Analysis", "Facial Image Editing"]
    },
    {
      category: "FORENSIC SUPPORT",
      icon: LifeBuoy,
      items: ["Data Theft Analysis", "Property Investigation", "Employee Verification", "Counselling, Recruitment Services", "Cross Examination"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#00020a] text-white pt-40 pb-24 px-8 relative overflow-hidden font-sans">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full"></div>
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ backgroundImage: `linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)`, backgroundSize: '80px 80px' }}>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header section */}
        <div className="flex flex-col items-center text-center mb-24 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 bg-white/[0.03] border border-white/10 px-5 py-2 rounded-full backdrop-blur-md"
          >
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] font-mono">Operations_Catalog // 2026</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-[0.8]">
            <span className="text-white">TACTICAL</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_30px_rgba(34,211,238,0.4)]"> SERVICES</span>
          </h1>
          
          <p className="max-w-xl text-slate-400 font-medium leading-relaxed">
            Our comprehensive investigative capabilities bridge the gap between <span className="text-white">physical evidence</span> and <span className="text-cyan-400">digital intelligence</span>.
          </p>

          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent pt-4"></div>
        </div>

        {/* Services mapping */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {forensicServices.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
          
          {/* Support CTA Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-1 bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center relative group overflow-hidden"
          >
             <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <Shield className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform" size={48} />
             <h3 className="text-2xl font-black text-white uppercase italic mb-4">NEED CUSTOM<br />ANALYSIS?</h3>
             <p className="text-slate-400 text-sm mb-8">Establish a secure connection with our lead investigators for private case consultations.</p>
             <button className="px-8 py-3 bg-cyan-500 text-black font-black uppercase text-[10px] tracking-widest rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]">
               Transmit Request
             </button>
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan-slow {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateY(200%); opacity: 0; }
        }
        .animate-scan-slow { animation: scan-slow 3s linear infinite; }
      `}} />
    </div>
  );
};

export default ServicesPage;