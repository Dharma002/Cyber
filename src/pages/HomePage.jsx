import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

// 1. Globe component ko yahan import kiya hai
import CyberGlobe from '../components/CyberGlobe'; 

const HomePage = () => {
  const partners = [
    { name: "Partner 1", logo: "/p1.png" },
    { name: "Partner 2", logo: "/p2.png" },
    { name: "Partner 3", logo: "/p3.png" },
    { name: "Partner 4", logo: "/p4.png" },
    { name: "Partner 5", logo: "/p5.png" },
    { name: "Partner 6", logo: "/p6.png" },
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
      
      {/* 1. BACKGROUND INFRASTRUCTURE */}
      <div className="fixed inset-0 z-0 opacity-[0.15]" 
            style={{ backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`, backgroundSize: '50px 50px' }}>
      </div>
      
      <div className="fixed top-[-20%] right-[-10%] w-[70%] h-[70%] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-8xl mx-auto w-full relative z-20 px-8 lg:px-20 py-20 lg:py-24">
        
        {/* --- HERO SECTION --- */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left w-full lg:w-[55%] z-30"
          >
            <div className="inline-flex items-center gap-2 bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 px-4 py-1.5 rounded-full mb-8 shadow-[0_0_15px_rgba(14,165,233,0.1)]">
              <Activity size={14} className="text-cyan-400 animate-pulse" />
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">Cyber_Defense_Active</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[100px] font-black leading-[0.85] tracking-tighter uppercase mb-8 italic">
              <span className="text-white block drop-shadow-lg">CRIMEX</span> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)] block mt-2">
                INTELLIGENCE
              </span>
            </h1>

            <p className="text-slate-400 text-sm md:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-mono mb-12">
              <span className="text-cyan-500 font-bold">{">"}</span> Deployment of advanced <span className="text-white">cyber-defense</span> protocols. Master the art of digital warfare.
            </p>

            <Link to="/register">
              <button className="px-10 py-4 bg-gradient-to-r from-blue-700 to-blue-500 text-white font-black uppercase text-sm tracking-widest rounded-lg shadow-[0_10px_30px_rgba(29,78,216,0.4)] hover:scale-105 transition-all active:scale-95">
                Register Now
              </button>
            </Link>
          </motion.div>

          {/* --- NEW CODE GLOBE SECTION --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative w-full lg:w-[45%] flex justify-center items-center h-[450px] lg:h-[600px]"
          >
             {/* Background Glow for Globe depth */}
             <div className="absolute w-[350px] h-[350px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>

             {/* Rendering the CyberGlobe component instead of image */}
             <CyberGlobe />

             {/* Scanning Laser Line (Optional decorative touch) */}
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
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-white italic">
              OUR <span className="text-cyan-400">MISSION</span>
            </h2>
            <p className="text-slate-400 font-mono text-sm tracking-wide uppercase">
              // Driving Digital Innovation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Security First", i: "🛡️", d: "Cybersecurity best practices.", c: "hover:border-blue-500/50" },
              { t: "Innovation", i: "💡", d: "Fostering creativity & tech.", c: "hover:border-yellow-500/50" },
              { t: "Community", i: "👥", d: "Inclusive growth for all.", c: "hover:border-purple-500/50" },
              { t: "Career Dev", i: "🚀", d: "Empowering next-gen pros.", c: "hover:border-red-500/50" }
            ].map((card, index) => (
              <motion.div 
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`bg-[#0a0c10]/80 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center backdrop-blur-sm transition-all group ${card.c}`}
              >
                <div className="text-3xl mb-6 group-hover:scale-110 transition-transform">{card.i}</div>
                <h4 className="text-xl font-bold mb-4 text-white uppercase italic">{card.t}</h4>
                <p className="text-slate-400 text-xs font-mono">{card.d}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* --- WHY CHOOSE US SECTION --- */}
        <section className="relative z-20 py-24 px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="text-left">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white italic">
                WHY <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">CHOOSE US</span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-yellow-500 to-transparent mt-4"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: "Expertise", i: <ShieldCheck size={28}/>, d: "Led by industry veterans in high-level defense.", l: "Level_01", color: "group-hover:text-yellow-400" },
              { t: "Innovation", i: <Activity size={28}/>, d: "Utilizing AI and advanced protocols.", l: "Level_02", color: "group-hover:text-orange-400" },
              { t: "Impact", i: <Target size={28}/>, d: "Securing thousands of digital assets.", l: "Level_03", color: "group-hover:text-cyan-400" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative group overflow-hidden rounded-3xl bg-gradient-to-b from-white/10 to-transparent p-[1px]"
              >
                <div className="bg-[#0a0c10] rounded-3xl p-10 h-full flex flex-col justify-between transition-all group-hover:bg-black/80 border border-white/5">
                  <div>
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:border-white/30 text-white transition-all">
                      {item.i}
                    </div>
                    <h3 className={`text-2xl font-black uppercase mb-4 italic transition-colors ${item.color}`}>{item.t}</h3>
                    <p className="text-slate-400 font-mono text-sm leading-relaxed">{item.d}</p>
                  </div>
                  <div className="mt-8 text-[10px] font-bold tracking-[0.3em] text-white/20 uppercase">{item.l}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- INFINITE PARTNER LOGO SLIDER --- */}
        <section className="relative z-20 py-16 bg-black/40 border-y border-white/5 overflow-hidden">
          <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.5em] text-center mb-12">
            Trusted by Leading Organizations & Partners
          </p>

          <div className="flex overflow-hidden">
            <motion.div 
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="flex flex-nowrap shrink-0 gap-20 items-center px-10"
            >
              {[...partners, ...partners].map((partner, i) => (
                <div key={i} className="flex items-center gap-4 shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 bg-white/5 p-2">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="w-full h-full object-contain"
                      onError={(e) => { e.target.src = "https://cdn-icons-png.flaticon.com/512/2111/2111646.png" }} 
                    />
                  </div>
                  <span className="text-white font-black uppercase text-xl md:text-2xl tracking-tighter">
                    {partner.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>

      <footer className="relative z-30 py-10 text-center border-t border-white/5 bg-black/80">
          <p className="font-mono text-[9px] text-cyan-700 tracking-[0.6em] uppercase">Neural_Core_Active // CRIMEX_OS</p>
      </footer>

      {/* Global CSS for Animations */}
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