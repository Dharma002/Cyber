import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Mail, ShieldCheck, MessageSquare, Globe, ArrowRight } from 'lucide-react';

const TeamCard = ({ name, role, image, tags, company, socials }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="group relative bg-white border border-gray-100 p-8 rounded-[3rem] overflow-hidden shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 flex flex-col h-full"
  >
    {/* Professional Accent */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 opacity-50 rounded-bl-[5rem] -z-0 transition-all group-hover:bg-blue-100" />

    <div className="relative z-10 flex flex-col items-center flex-1 text-center">
      
      {/* FACULTY PHOTO SECTION */}
      <div className="relative mb-8">
        <div className="relative w-48 h-48 rounded-full border-4 border-white p-1 overflow-hidden bg-gray-50 shadow-lg group-hover:border-[#004a8e] transition-all duration-500">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-700"
          />
        </div>
        {/* Verification Badge */}
        <div className="absolute bottom-2 right-4 h-10 w-10 bg-[#004a8e] text-white rounded-full border-4 border-white flex items-center justify-center shadow-lg">
          <ShieldCheck className="w-5 h-5" />
        </div>
      </div>

      {/* IDENTITY & ROLE */}
      <div className="space-y-2 mb-6">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900 uppercase group-hover:text-[#004a8e] transition-colors duration-300">
          {name}
        </h3>
        <p className="text-[#004a8e] font-extrabold text-[10px] uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full inline-block">
          {role}
        </p>
        <p className="text-gray-600 text-[9px] font-bold uppercase tracking-[0.2em] block pt-1">{company}</p>
      </div>

      {/* SPECIALIZATIONS (SIFS Badges) */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {tags.map((tag, i) => (
          <span key={i} className="text-[9px] font-bold text-gray-700 border border-gray-100 bg-gray-50 px-3 py-1 rounded-md uppercase tracking-tighter">
            • {tag}
          </span>
        ))}
      </div>

      {/* SOCIAL CONNECTS */}
      <div className="flex gap-4 mt-auto pt-6 border-t border-gray-50 w-full justify-center">
        {[
          { icon: <Linkedin size={18} />, link: socials.linkedin, color: "hover:text-blue-700" },
          { icon: <Instagram size={18} />, link: socials.instagram, color: "hover:text-pink-600" },
          { icon: <Mail size={18} />, link: `mailto:${socials.email}`, color: "hover:text-red-500" }
        ].map((item, idx) => (
          <a 
            key={idx} href={item.link} target="_blank" rel="noopener noreferrer"
            className={`w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-600 ${item.color} hover:bg-white hover:shadow-md transition-all duration-300`}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  </motion.div>
);

const MembersPage = () => {
  const team = [
    {
      name: "Ms. Ayushi Singh",
      role: "Founder & Director",
      company: "Crimex Intelligence",
      image: "/ayushi.jpeg",
      tags: ["Security Ops", "Forensic Intelligence", "Strategic Vision"],
      socials: {
        linkedin: "#",
        instagram: "https://instagram.com/ayushi._.techlab",
        email: "ayushi@crimex.com"
      }
    },
    {
      name: "Mr. Anmol Kumar",
      role: "Cyber Criminology Expert",
      company: "Crimex Intelligence",
      image: "/anmol.jpeg",
      tags: ["Leadership", "Cyber Research", "Criminology"],
      socials: {
        linkedin: "https://www.linkedin.com/in/anmol-kumar-778a66214/",
        instagram: "https://instagram.com/anmolkumar_techlab",
        email: "info@cybershaktifoundation.org"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-900 pt-32 pb-20 px-6 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-50 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/20 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 flex flex-col items-center space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white border border-gray-100 px-5 py-2 rounded-full shadow-sm"
          >
            <Globe className="text-[#004a8e]" size={14} />
            <span className="text-gray-600 font-bold text-[10px] tracking-[0.3em] uppercase">Faculty Directory // 2026</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-7xl font-extrabold uppercase tracking-tighter text-[#004a8e] leading-tight text-center">
            MEET OUR <span className="text-gray-900 font-light italic">EXPERTS</span>
          </h2>
          <p className="text-gray-700 font-medium max-w-xl mx-auto italic text-lg">
             "Guided by a team of industry veterans and forensic researchers dedicated to excellence."
          </p>
          <div className="w-32 h-1 bg-[#ffc107] rounded-full"></div>
        </div>

        {/* TEAM GRID */}
        <div className="flex flex-wrap justify-center gap-10 items-stretch">
          {team.map((member, index) => (
            <div key={index} className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-27px)] max-w-sm flex flex-col">
              <TeamCard {...member} />
            </div>
          ))}
        </div>
      </div>

      <footer className="mt-24 pt-10 text-center border-t border-gray-100">
          <p className="font-bold text-[10px] text-gray-600 tracking-[0.4em] uppercase">Crimex Intelligence // Professional Faculty Council</p>
      </footer>
    </div>
  );
};

export default MembersPage;