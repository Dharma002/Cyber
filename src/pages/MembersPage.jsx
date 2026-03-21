import React from 'react';
import { motion } from 'framer-motion';
// 1. Icons import fix (WhatsApp ke liye MessageSquare ya Phone use hota hai Lucide mein)
import { Linkedin, Instagram, Mail, ShieldCheck, MessageSquare } from 'lucide-react';

const TeamCard = ({ name, role, image, tags, company, socials }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -15, scale: 1.02 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="group relative bg-[#05070a] border border-white/5 p-1 rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-500 hover:border-cyan-500/30 h-full flex flex-col"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

    <div className="relative bg-[#0a0c12]/80 backdrop-blur-3xl p-10 rounded-[2.9rem] h-full flex flex-col items-center flex-1">
      
      {/* PHOTO SECTION */}
      <div className="relative mb-12">
        <div className="absolute inset-[-25px] rounded-full bg-cyan-500/10 blur-3xl group-hover:bg-cyan-500/20 transition-all duration-700 animate-pulse" />
        <div className="relative w-56 h-56 rounded-full border-4 border-white/5 group-hover:border-cyan-500/50 p-2 overflow-hidden bg-black/40 transition-all duration-500 shadow-2xl">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent h-full w-full animate-scan opacity-0 group-hover:opacity-100" />
        </div>
        <div className="absolute bottom-4 right-6 h-12 w-12 bg-cyan-500 rounded-full border-4 border-[#0a0c12] flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-1000">
          <ShieldCheck className="w-6 h-6 text-black" />
        </div>
      </div>

      {/* IDENTITY */}
      <div className="space-y-3 mb-8 text-center w-full">
        <h3 className="text-3xl font-black tracking-tighter text-white uppercase italic group-hover:text-cyan-400 transition-colors duration-300">
          {name}
        </h3>
        <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full">
          <p className="text-white font-black text-xs uppercase tracking-[0.25em]">{role}</p>
        </div>
        <p className="text-slate-300 text-[11px] font-mono uppercase tracking-[0.4em] pt-2">{company}</p>
      </div>

      {/* SKILLS */}
      <div className="flex flex-wrap justify-center gap-2 mt-auto pb-6">
        {tags.map((tag, i) => (
          <span key={i} className="text-[9px] font-black text-white border border-white/10 bg-white/5 px-4 py-1.5 rounded-full hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all uppercase tracking-widest">
            {tag}
          </span>
        ))}
      </div>

      {/* 2. WORKING SOCIAL LINKS */}
      <div className="flex gap-6 mt-4 border-t border-white/5 pt-8 w-full justify-center">
        {/* LinkedIn */}
        <motion.a 
          href={socials.linkedin} target="_blank" rel="noopener noreferrer"
          whileHover={{ y: -3, scale: 1.2 }} className="cursor-pointer group/icon"
        >
          <Linkedin className="w-5 h-5 text-slate-500 group-hover/icon:text-cyan-400 transition-colors" />
        </motion.a>

        {/* WhatsApp - Mobile number link format: https://wa.me/number */}
        {/*<motion.a 
          href={socials.whatsapp} target="_blank" rel="noopener noreferrer"
          whileHover={{ y: -3, scale: 1.2 }} className="cursor-pointer group/icon"
        >
          <MessageSquare className="w-5 h-5 text-slate-500 group-hover/icon:text-green-500 transition-colors" />
        </motion.a>*/}

        {/* Instagram */}
        <motion.a 
          href={socials.instagram} target="_blank" rel="noopener noreferrer"
          whileHover={{ y: -3, scale: 1.2 }} className="cursor-pointer group/icon"
        >
          <Instagram className="w-5 h-5 text-slate-500 group-hover/icon:text-pink-500 transition-colors" />
        </motion.a>

        {/* Mail */}
        { /*<motion.a 
          href={`mailto:${socials.email}`}
          whileHover={{ y: -3, scale: 1.2 }} className="cursor-pointer group/icon"
        >
          <Mail className="w-5 h-5 text-slate-500 group-hover/icon:text-white transition-colors" />
        </motion.a> */}
      </div>
    </div>
  </motion.div>
);

const MembersPage = () => {
  // 3. Updated data with actual links
  const team = [

    {
      name: "Ms. Ayushi Singh",
      role: "Founder",
      company: "Crimex intelligence",
      image: "/ayushi.jpeg",
      tags: ["Security Ops", "Intelligence", "Vision"],
      socials: {
        linkedin: "https://linkedin.com/in/CrimeX Intelligence",
        //whatsapp: "https://wa.me/919958214909",
        instagram: "https://instagram.com/ayushi._.techlab",
        email: "ayushi@crimex.com"
      }
    
    },
    {
      name: "Mr. Anmol Kumar",
      role: "Certified Cyber Criminology",
      company: "Crimex intelligence",
      image: "/anmol.jpeg",
      tags: ["Leadership", "Innovation", "Research"],
      socials: {
        linkedin: "https://www.linkedin.com/in/anmol-kumar-778a66214/",
        whatsapp: "https://wa.me/918265826528", // Format: 91 + phone number
        instagram: "https://instagram.com/anmolkumar_techlab",
        email: "info@cybershaktifoundation.org"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-[#02040a] text-white pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>

      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-6 py-2 border border-cyan-500/20 bg-cyan-500/5 rounded-full mb-8 shadow-[0_0_20px_rgba(34,211,238,0.1)]"
          >
            <span className="text-cyan-400 font-mono text-[11px] font-black tracking-[0.4em] uppercase">Core Directory // 2026</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black italic tracking-tighter uppercase leading-none mb-10 text-center whitespace-nowrap">
            <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">MEET OUR </span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 drop-shadow-[0_0_30px_rgba(34,211,238,0.4)]">TEAM</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-12 items-stretch">
          {team.map((member, index) => (
            <div key={index} className="w-full md:w-[calc(50%-24px)] lg:w-[calc(33.33%-32px)] max-w-md flex flex-col">
              <TeamCard {...member} />
            </div>
          ))}
        </div>
      </div>

      <footer className="relative z-30 py-10 mt-20 text-center border-t border-white/5 opacity-40">
          <p className="font-mono text-[9px] text-cyan-700 tracking-[0.6em] uppercase italic">Personnel_Database // CRIMEX_OS</p>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan { 0% { top: -100%; } 100% { top: 100%; } }
        .animate-scan { animation: scan 3s linear infinite; }
      `}} />
    </div>
  );
};

export default MembersPage;