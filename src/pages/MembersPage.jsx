import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';

const TeamCard = ({ name, role, image, tags, company }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative bg-[#0d0f17]/80 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] flex flex-col items-center text-center hover:border-cyan-500/40 transition-all duration-500 shadow-2xl"
  >
    {/* Profile Image with Dual Ring Glow */}
    <div className="relative mb-6">
      <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full group-hover:bg-cyan-500/40 transition-all"></div>
      <div className="relative w-40 h-40 rounded-full border-4 border-[#161b22] overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)]">
        <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-full z-10"></div>
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
    </div>

    {/* Content */}
    <h3 className="text-2xl font-black text-white mb-1 tracking-tight">{name}</h3>
    <p className="text-cyan-400 font-bold text-sm uppercase tracking-wider mb-1">{role}</p>
    <p className="text-gray-500 text-[10px] font-mono uppercase tracking-[0.2em] mb-6">{company}</p>

    {/* Badges/Tags (Screenshot Style) */}
    <div className="flex flex-wrap justify-center gap-2 mb-2">
      {tags.map((tag, i) => (
        <span key={i} className="text-[9px] font-bold text-cyan-500/80 border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 rounded-full uppercase tracking-tighter hover:bg-cyan-500/20 transition-colors cursor-default">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const MembersPage = () => {
  const team = [
    {
      name: "Mr. Anmol Kumar",
      role: "President & Director",
      company: "Cyber Shakti",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000",
      tags: ["Leadership", "Innovation", "Strategic Vision"]
    },
    {
      name: "Ms. Ayushi Singh",
      role: "Co-Founder",
      company: "Cyber Shakti",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000",
      tags: ["Co-Founder", "Innovation", "Strategic Vision"]
    },
    {
      name: "Kuldeep Singh",
      role: "Management Lead",
      company: "Cyber Shakti",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000",
      tags: ["Strategic Planning", "Team Management", "Operations"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#02040a] text-white pt-32 pb-20 px-6 relative overflow-hidden">
      
      {/* 1. BEST ANIMATED BACKGROUND (Cyber Matrix Effect) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none overflow-hidden select-none">
        <div className="absolute inset-0 animate-matrix-scroll font-mono text-[10px] leading-none whitespace-pre">
          {Array(50).fill("0110101011010010101011010101010110\n").join("")}
          {Array(50).fill("CYBER_SHAKTI_SECURITY_v3.0_LOCKED\n").join("")}
        </div>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <p className="text-cyan-500 font-mono text-xs font-bold tracking-[0.4em] uppercase mb-4 animate-pulse">Our Team</p>
          <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">Expert Team</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm md:text-base font-medium leading-relaxed">
            A dedicated group of professionals working together to bridge the digital skills gap and secure the future.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>

      {/* Custom Keyframe for Background */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes matrix-scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-matrix-scroll {
          animation: matrix-scroll 20s linear infinite;
        }
      `}} />
    </div>
  );
};

export default MembersPage;