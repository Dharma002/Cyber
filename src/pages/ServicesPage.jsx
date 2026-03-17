import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Database, 
  Code, 
  Search, 
  Cpu, 
  Smartphone, 
  Scale, 
  UserCheck 
} from 'lucide-react';

const ServiceCard = ({ title, desc, icon: Icon, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: delay }}
    viewport={{ once: true }}
    className="group relative bg-[#0d0f1a] border border-white/5 p-8 rounded-[2rem] hover:bg-[#121421] hover:border-cyan-500/30 transition-all duration-500 shadow-xl overflow-hidden"
  >
    {/* Subtle Background Glow on Hover */}
    <div className="absolute -right-10 -top-10 w-32 h-32 bg-cyan-500/5 blur-[50px] group-hover:bg-cyan-500/10 transition-all"></div>

    {/* Icon Section */}
    <div className="relative w-16 h-16 rounded-2xl bg-[#161b2e] flex items-center justify-center mb-6 border border-white/5 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all">
      <Icon className="text-cyan-400" size={30} />
    </div>

    {/* Text Content */}
    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
      {title}
    </h3>
    <p className="text-gray-400 text-sm leading-relaxed mb-8">
      {desc}
    </p>

    {/* Link Style Button (Screenshot jaisa) */}
    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-500 group-hover:gap-4 transition-all">
      Learn_More <div className="h-[1px] w-8 bg-cyan-500/50 group-hover:w-12 transition-all"></div>
    </div>
  </motion.div>
);

const ServicesPage = () => {
  const serviceData = [
    {
      title: "Cybersecurity Training",
      desc: "Hands-on training programs for individuals and teams to build practical skills through real-world scenarios.",
      icon: ShieldCheck
    },
    {
      title: "Data Recovery Services",
      desc: "Recovering lost, deleted, or corrupted data from various storage devices like HDDs, SSDs, and Pen Drives.",
      icon: Database
    },
    {
      title: "Web Development",
      desc: "Designing and developing secure, scalable, and responsive web applications using latest technologies.",
      icon: Code
    },
    {
      title: "Vulnerability Assessment",
      desc: "Identifying and fixing security loopholes in your digital infrastructure before hackers find them.",
      icon: Search
    },
    {
      title: "Digital Forensics",
      desc: "Professional investigation and analysis of digital evidence for legal and security purposes.",
      icon: Cpu
    },
    {
      title: "Mobile Forensics",
      desc: "Specialized data extraction and analysis from mobile devices, smartphones, and tablets.",
      icon: Smartphone
    },
    {
      title: "Cyber Law Consulting",
      desc: "Legal guidance on digital regulations, compliance, and cybercrime litigation support.",
      icon: Scale
    },
    {
      title: "Identity Protection",
      desc: "Securing personal and corporate identities against phishing, theft, and unauthorized access.",
      icon: UserCheck
    }
  ];

  return (
    <div className="min-h-screen bg-[#02040a] text-white pt-40 pb-20 px-6 relative">
      
      {/* BACKGROUND DECORATION */}
      <div className="fixed inset-0 z-0 opacity-[0.05]" 
           style={{ backgroundImage: `linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)`, backgroundSize: '60px 60px' }}>
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-cyan-500/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION (Link jaisa clean style) */}
        <div className="text-center mb-24">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-cyan-500 font-mono text-xs font-bold tracking-[0.5em] uppercase mb-4"
          >
            Our Solutions
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter"
          >
            What We <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">Offer</span>
          </motion.h1>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceData.map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service} 
              delay={index * 0.1} 
            />
          ))}
        </div>

      </div>

      {/* WHATSAPP FLOAT */}
      <div className="fixed bottom-8 right-8 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] cursor-pointer hover:scale-110 transition-transform z-50">
        <svg viewBox="0 0 24 24" width="30" height="30" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.672 1.433 5.662 1.434h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </div>
      
    </div>
  );
};

export default ServicesPage;