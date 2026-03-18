import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Database, Code, Search, Cpu, Smartphone, Scale, UserCheck 
} from 'lucide-react';

// Naya Card Style: Corner-Border Model
const ServiceCard = ({ title, desc, icon: Icon, delay }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: delay }}
    viewport={{ once: true }}
    className="group relative bg-[#05060a] border-l-4 border-cyan-500/30 p-8 hover:bg-cyan-500/[0.03] hover:border-cyan-400 transition-all duration-500"
  >
    {/* Animated Corner Accents */}
    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/5 group-hover:border-cyan-500/50 transition-all"></div>
    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/5 group-hover:border-cyan-500/50 transition-all"></div>

    <div className="relative z-10">
      <div className="mb-6 inline-block p-4 bg-[#11121d] rounded-xl border border-white/5 group-hover:rotate-[360deg] transition-transform duration-700">
        <Icon className="text-[#00f2ea]" size={28} />
      </div>

      <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:translate-x-2 transition-transform" style={{ color: '#FFFFFF' }}>
        {title}
      </h3>
      
      <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
        {desc}
      </p>

      <div className="overflow-hidden h-1 w-0 group-hover:w-full bg-cyan-500/30 transition-all duration-500">
        <div className="h-full bg-cyan-400 w-1/3 animate-[shimmer_2s_infinite]"></div>
      </div>
    </div>
  </motion.div>
);

const ServicesPage = () => {
  const serviceData = [
    { title: "Cybersecurity Training", desc: "Hands-on training programs to build practical skills through real-world scenarios.", icon: ShieldCheck },
    { title: "Data Recovery", desc: "Recovering lost or corrupted data from various storage devices like HDDs and SSDs.", icon: Database },
    { title: "Web Development", desc: "Designing secure, scalable, and responsive web applications with latest tech.", icon: Code },
    { title: "Vulnerability Assessment", desc: "Identifying security loopholes in your digital infrastructure effectively.", icon: Search },
    { title: "Digital Forensics", desc: "Professional investigation of digital evidence for legal and security purposes.", icon: Cpu },
    { title: "Mobile Forensics", desc: "Specialized data extraction from mobile devices and smartphones.", icon: Smartphone },
    { title: "Cyber Law Consulting", desc: "Legal guidance on digital regulations and cybercrime litigation support.", icon: Scale },
    { title: "Identity Protection", desc: "Securing identities against phishing, theft, and unauthorized access.", icon: UserCheck }
  ];

  return (
    <div className="min-h-screen bg-[#02040a] text-white pt-40 pb-20 px-6 relative overflow-hidden">
      
      {/* --- UNIQUE ANIMATION: RADAR SCANNER EFFECT --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Horizontal Scanning Line */}
        <motion.div 
          animate={{ y: ['0vh', '100vh'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent z-0"
        />
        
        {/* Floating Binary Background (Unique to Services) */}
        <div className="absolute inset-0 opacity-[0.03] font-mono text-[12px] flex flex-wrap gap-4 p-4 overflow-hidden select-none">
          {Array(20).fill("101001 01101 11010 00110 CYBER_INTEL").map((t, i) => (
            <motion.span 
              key={i}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: Math.random() * 3 + 2, repeat: Infinity }}
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section: Minimalist & Clean */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-cyan-500"></div>
            <p className="text-[#00f2ea] font-mono text-[10px] font-black tracking-[0.4em] uppercase">
              Service_Module
            </p>
          </div>
          
          <div className="text-center mb-16">
  {/* Main Title */}
  <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none flex flex-wrap justify-center items-center gap-x-5">
    <span className="text-white">Deep</span>
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ea] to-blue-600">
      Solutions
    </span>
  </h1>

  {/* Simple Line Animation */}
  <div className="flex justify-center mt-4">
    <motion.div 
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "150px", opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="h-[3px] bg-gradient-to-r from-transparent via-[#00f2ea] to-transparent"
    />
  </div>
</div>
        </div>

        {/* Services Grid: 2 columns for better focus on content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {serviceData.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index * 0.1} />
          ))}
        </div>
      </div>

      

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}} />
    </div>
  );
};

export default ServicesPage;