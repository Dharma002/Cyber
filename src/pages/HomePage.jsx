import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, ShieldCheck, Zap, Target, GraduationCap, Trophy, Award, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

import CyberGlobe from '../components/CyberGlobe'; 
import AnimatedBackground from '../components/AnimatedBackground'; 

const HomePage = () => {
  // State to track which card is expanded
  const [expandedIndex, setExpandedIndex] = useState(null);

  const partners = [
    { name: "Partner 1", logo: "/p1.png" },
    { name: "Partner 2", logo: "/p2.png" },
    { name: "Partner 3", logo: "/p3.png" },
    { name: "Partner 4", logo: "/p4.png" },
    { name: "Partner 5", logo: "/p5.png" },
    { name: "Partner 6", logo: "/p6.png" },
  ];

  const features = [
    { 
      t: "Expert-Led Workshops", 
      i: <GraduationCap size={32}/>, 
      badge: "MOST POPULAR",
      d: "Learn from industry professionals and academic experts.",
      details: "Our workshops cover hands-on penetration testing, network security, and incident response. Get direct mentorship from veterans in the field."
    },
    { 
      t: "Competitive Events", 
      i: <Trophy size={32}/>, 
      badge: "TRENDING",
      d: "Participate in CTF challenges and hackathons.",
      details: "Join weekly CTFs and seasonal hackathons to test your skills. Compete for prizes and earn a spot on our global leaderboard."
    },
    { 
      t: "Certification Programs", 
      i: <Award size={32}/>, 
      badge: "HIGH VALUE",
      d: "Earn recognized certifications that boost your profile.",
      details: "Validate your expertise with CRIMEX verified certificates. Highly recognized by our network of 50+ corporate partners."
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
    })
  };

  return (
    <div className="relative min-h-screen w-full bg-[#00020a] overflow-x-hidden">
      <AnimatedBackground />
      
      <div className="max-w-8xl mx-auto w-full relative z-20 px-8 lg:px-20 pt-8 pb-20 lg:pt-12 lg:pb-24">
        
        {/* --- HERO SECTION --- */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 mb-20 relative">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left w-full lg:w-[60%] z-30"
          >
            <div className="inline-flex items-center gap-3 bg-white/[0.03] border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-md">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_10px_#06b6d4]"></div>
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.4em]">Next-Gen Security Protocol</span>
            </div>
            
            <div className="relative mb-8">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none italic">
                <span className="relative inline-block text-white">
                  CRIMEX
                  <span className="absolute bottom-2 left-0 w-full h-[6px] bg-cyan-500/20 -z-10"></span>
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 drop-shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                  INTELLIGENCE
                </span>
              </h1>
              
              <div className="mt-4 flex flex-col sm:flex-row items-center gap-4 lg:justify-start justify-center">
                <span className="h-[1px] w-12 bg-cyan-500/50 hidden sm:block"></span>
                <p className="text-cyan-400 font-mono text-xs md:text-sm uppercase tracking-[0.5em] font-light">
                  Securing the Neural Grid <span className="text-white/20">|</span> Est. 2024
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium mb-12">
              Elevating digital defense through <span className="text-white">advanced cognitive intelligence</span>. We don't just protect data; we architect the future of cyber immunity.
            </p>

            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start">
              <Link to="/register">
                <button className="group relative px-8 py-4 bg-white text-black font-black uppercase text-xs tracking-[0.2em] overflow-hidden transition-all hover:bg-cyan-400">
                  <span className="relative z-10">Initialize Access</span>
                  <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-cyan-400 transition-transform duration-300"></div>
                </button>
              </Link>
              
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#00020a] bg-slate-800 flex items-center justify-center text-[10px] font-bold text-white">
                    U{i}
                  </div>
                ))}
                <div className="pl-6 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                  +2.4k Members Active
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative w-full lg:w-[40%] flex justify-center items-center h-[500px]"
          >
            <div className="absolute w-[350px] h-[350px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>
            <CyberGlobe />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-cyan-400/30 animate-scan z-30"></div>
          </motion.div>
        </div>

        {/* --- MISSION SECTION --- */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative pt-20 pb-10"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 italic">
              <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">OUR</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]">MISSION</span>
            </h2>
            <p className="text-slate-400 font-mono text-sm md:text-base tracking-wide max-w-2xl mx-auto leading-relaxed">
              Driving <span className="text-white font-bold">cybersecurity awareness</span> and <span className="text-white font-bold">innovation</span> in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Security First", i: "🛡️", d: "Building a community focused on cybersecurity best practices.", c: "hover:border-blue-500/50" },
              { t: "Innovation", i: "💡", d: "Fostering creativity through hackathons and workshops.", c: "hover:border-cyan-500/50" },
              { t: "Community", i: "👥", d: "Creating an inclusive environment for professional growth.", c: "hover:border-purple-500/50" },
              { t: "Career Dev", i: "🚀", d: "Empowering members with skills for successful careers.", c: "hover:border-blue-400/50" }
            ].map((card, index) => (
              <motion.div 
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`bg-[#05070a]/90 border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center backdrop-blur-md transition-all group ${card.c} hover:bg-[#0a0c12] shadow-2xl`}
              >
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10 group-hover:border-cyan-500/30 transition-all shadow-inner">
                  <span className="text-3xl">{card.i}</span>
                </div>
                <h4 className="text-xl font-black mb-4 text-white uppercase italic tracking-tight">{card.t}</h4>
                <p className="text-slate-400 text-sm font-medium leading-relaxed">{card.d}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* --- WHY CHOOSE US SECTION (EXPANDABLE) --- */}
        <section className="relative z-20 py-24 px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic text-white leading-tight">
              WHY CHOOSE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]">CRIMEX?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {features.map((item, index) => {
              const isOpen = expandedIndex === index;
              return (
                <motion.div 
                  key={index}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`relative overflow-hidden rounded-[40px] bg-[#05070a]/90 border border-white/5 p-10 backdrop-blur-md shadow-2xl transition-all duration-500 flex flex-col h-full ${isOpen ? 'ring-2 ring-cyan-500/50' : ''}`}
                >
                  <div className="flex justify-between items-start mb-10">
                    <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center border border-cyan-500/20 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.1)]">
                      {item.i}
                    </div>
                    <span className="text-[10px] font-black tracking-[0.2em] px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400">
                      {item.badge}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-black uppercase mb-4 italic text-white tracking-tight leading-tight">
                    {item.t}
                  </h3>
                  
                  <p className="text-slate-400 text-base leading-[1.8] font-medium">
                    {item.d}
                  </p>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <p className="text-cyan-200/70 text-sm leading-relaxed pt-6 border-t border-white/5 mt-6 font-mono">
                          {item.details}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button 
                    onClick={() => setExpandedIndex(isOpen ? null : index)}
                    className="flex items-center justify-between w-full mt-8 group/link cursor-pointer"
                  >
                    <span className="text-cyan-400 font-black text-sm uppercase tracking-widest transition-all">
                      {isOpen ? "Show Less" : "View More"}
                    </span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${isOpen ? 'bg-cyan-500 border-cyan-500 text-black rotate-180' : 'bg-white/5 border-white/10 text-cyan-400'}`}>
                      <ChevronDown size={18} />
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* --- OUR PARTNERS SECTION --- */}
        <section className="relative z-20 py-24 bg-black/40 border-y border-white/5 overflow-hidden">
          <div className="text-center mb-16">
            <span className="text-cyan-500 font-black text-[9px] tracking-[0.4em] uppercase mb-4 block">TRUSTED COLLABORATIONS</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-tight">
              <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">OUR</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]">PARTNERS</span>
            </h2>
          </div>

          <div className="flex overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#00020a] to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#00020a] to-transparent z-10"></div>

            <motion.div 
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex flex-nowrap shrink-0 gap-10 items-center px-10"
            >
              {[...partners, ...partners, ...partners].map((partner, i) => (
                <div key={i} className="shrink-0 group">
                  <div className="w-48 h-28 bg-white rounded-2xl flex items-center justify-center p-6 shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-cyan-500/10">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="w-full h-full object-contain"
                      onError={(e) => { e.target.src = "https://cdn-icons-png.flaticon.com/512/2111/2111646.png" }} 
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- JOIN COMMUNITY CTA --- */}
        <section className="relative z-20 py-24 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 italic">
              Ready to Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">CRIMEX?</span>
            </h2>
            <div className="mt-16">
              <Link to="/register">
                <button className="px-12 py-5 bg-white text-black font-black uppercase text-base tracking-[0.2em] rounded-full shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:scale-105 transition-all active:scale-95">
                  Get Started Now
                </button>
              </Link>
            </div>
          </motion.div>
        </section>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0% { top: -10%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }
        .animate-scan { animation: scan 3s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
      `}} />
    </div>
  );
};

export default HomePage;