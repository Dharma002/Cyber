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
              Service_Module_v4.2
            </p>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
            <span style={{ color: '#FFFFFF' }}>Deep</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ea] to-blue-600">
              Solutions
            </span>
          </h1>
        </div>

        {/* Services Grid: 2 columns for better focus on content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {serviceData.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index * 0.1} />
          ))}
        </div>
      </div>

      {/* Floating Action Button Style WhatsApp */}
      <motion.a 
        whileHover={{ rotate: 15, scale: 1.1 }}
        href="#" 
        className="fixed bottom-10 right-10 w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center shadow-[0_20px_40px_rgba(37,211,102,0.3)] z-50"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.672 1.433 5.662 1.434h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </motion.a>

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