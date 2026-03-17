import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, ShieldCheck, UserCircle2 } from 'lucide-react';

const TeamCard = ({ name, role, image, tags, company }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className="group relative bg-gradient-to-b from-[#0d1117] to-[#02040a] border border-white/5 p-1 rounded-[2.5rem] overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-cyan-500/10 transition-shadow duration-500"
  >
    {/* Animated Border Glow on Hover */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none"></div>

    <div className="relative bg-[#0d1117]/90 backdrop-blur-3xl p-8 rounded-[2.4rem] h-full flex flex-col items-center">
      
      {/* 1. UPDATED PHOTO STYLE: Smooth Rounded Square with Glowing Frame */}
      <div className="relative mb-8">
        {/* Glowing Background Ring */}
        <div className="absolute inset-[-15px] rounded-3xl bg-cyan-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Image Container with Stylish Border */}
        <div className="relative w-40 h-40 rounded-3xl border-2 border-cyan-500/20 group-hover:border-cyan-500/60 p-2 overflow-hidden bg-black/30 transition-colors duration-500">
          <div className="absolute inset-2 bg-black/50 rounded-2xl flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <UserCircle2 className="w-16 h-16 text-cyan-500/70" />
          </div>
          <img 
            src={image} 
            alt={name} 
            className="relative w-full h-full object-cover rounded-2xl grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 z-20"
          />
        </div>
        
        {/* Status indicator */}
        <div className="absolute top-0 right-0 h-4 w-4 bg-green-500 rounded-full border-2 border-[#0d1117] animate-pulse"></div>
      </div>

      {/* 2. TEXT STYLE: Pure White with Neon Glow */}
      <div className="space-y-2 mb-6 text-center w-full">
        <h3 
          className="text-2xl font-black tracking-tight uppercase"
          style={{ 
            color: '#FFFFFF', 
            textShadow: '0 0 15px rgba(0, 242, 234, 0.4)' 
          }}
        >
          {name}
        </h3>
        <div className="flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <p className="text-cyan-400 font-bold text-xs uppercase tracking-[0.2em]">{role}</p>
        </div>
        <p className="text-gray-500 text-[10px] font-mono uppercase tracking-widest">{company}</p>
      </div>

      {/* 3. TAGS: Micro-Chips Style */}
      <div className="flex flex-wrap justify-center gap-2 mt-auto">
        {tags.map((tag, i) => (
          <span key={i} className="text-[10px] font-medium text-gray-400 border border-white/5 bg-white/5 px-3 py-1 rounded-md hover:border-cyan-500/40 hover:text-cyan-400 transition-all cursor-crosshair">
            {tag}
          </span>
        ))}
      </div>

      {/* Social Icons Overlay - Ab neeche display honge visually better lagne ke liye */}
      <div className="flex gap-4 mt-6 border-t border-white/5 pt-4 w-full justify-center">
        <Linkedin className="w-4 h-4 text-gray-500 hover:text-cyan-400 cursor-pointer" />
        <Twitter className="w-4 h-4 text-gray-500 hover:text-cyan-400 cursor-pointer" />
        <Mail className="w-4 h-4 text-gray-500 hover:text-cyan-400 cursor-pointer" />
      </div>
    </div>
  </motion.div>
);

const MembersPage = () => {
  const team = [
    {
      name: "Mr. Anmol Kumar",
      role: "President & Director",
      company: "Cyber Shakti",
      image: "/anmol.jpeg",
      tags: ["Leadership", "Innovation", "Vulnerability Research"]
    },
    {
      name: "Ms. Ayushi Singh",
      role: "Co-Founder",
      company: "Cyber Shakti",
      image: "/ayushi.jpeg",
      tags: ["Security Ops", "Intelligence", "Strategic Vision"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#02040a] text-white pt-32 pb-20 px-6 relative overflow-hidden">
      
      {/* Dynamic Background Noise */}
      <div className="absolute inset-0 z-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Glowing Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 flex flex-col items-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block px-4 py-1 border border-cyan-500/20 bg-cyan-500/5 rounded-full mb-6">
            <span className="text-cyan-500 font-mono text-[10px] font-bold tracking-[0.3em] uppercase">Core Directory 2026</span>
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-none mb-8 text-center">
  {/* Yahan 'Expert' ko dark aur premium gradient diya hai */}
  <span className="text-transparent bg-clip-text bg-gradient-to-b from-cyan-600 via-blue-800 to-indigo-950 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
    Expert
  </span>{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-blue-600">
    Squad
  </span>
</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
};

export default MembersPage;