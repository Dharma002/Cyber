import { motion } from 'framer-motion';
import { Terminal, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    /* 1. min-h-screen ko rehne denge but flex-center ko desktop tak limited rakhenge */
    <div className="relative min-h-screen w-full bg-[#00020a] overflow-x-hidden">
      
      {/* BACKGROUND ELEMENTS (Fixed taaki scroll pe na hilein) */}
      <div className="fixed inset-0 z-0 opacity-20" 
           style={{ backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>
      <div className="fixed inset-0 z-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(34,211,238,0.05),rgba(0,255,0,0.02),rgba(0,0,255,0.05))] bg-[length:100%_2px,3px_100%]"></div>

      {/* NEON GLOWS */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto w-full min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 relative z-20 px-6 lg:px-24 py-32 lg:py-0">
        
        {/* LEFT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left w-full lg:w-1/2 order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-md mb-6">
            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-ping"></span>
            <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-[0.3em]">
              System Status: Active
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[100px] font-black leading-[0.9] tracking-tighter uppercase mb-6 italic">
            <span className="text-white block">CYBER</span> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
              SHAKTI
            </span>
          </h1>

          <div className="flex items-center gap-4 mb-8 justify-center lg:justify-start">
            <div className="h-[2px] w-16 md:w-24 bg-cyan-500 shadow-[0_0_10px_#22d3ee]"></div>
            <span className="font-mono text-cyan-500 text-[10px] md:text-xs tracking-widest uppercase">Encryption: AES-256</span>
          </div>

          <p className="text-slate-400 text-sm md:text-lg lg:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed font-mono mb-10">
            <span className="text-cyan-500">{">"}</span> Empowering professionals to master <span className="text-white font-bold">real-world attacks</span> and secure the digital frontier.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <Link to="/register" className="group relative px-8 py-4 bg-cyan-600 text-black font-black uppercase tracking-tighter overflow-hidden skew-x-[-15deg] hover:bg-cyan-500 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] inline-flex items-center justify-center">
              <span className="relative z-10 block skew-x-[15deg] flex items-center gap-2 text-sm">
                <Terminal size={18} /> Register Now
              </span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT SIDE: GLOBE (Responsive Size) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center w-full lg:w-1/2 order-1 lg:order-2"
        >
          {/* External Orbital Rings */}
          <div className="absolute w-[85%] h-[85%] sm:w-[115%] sm:h-[115%] border border-cyan-500/10 rounded-full animate-[spin_50s_linear_infinite]"></div>
          
          <div className="relative w-64 h-64 sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] flex items-center justify-center">
            <div className="absolute inset-10 bg-cyan-500/10 blur-[80px] rounded-full animate-pulse"></div>

            {/* THE SVG GLOBE */}
            <svg className="relative w-full h-full z-20 drop-shadow-[0_0_30px_rgba(34,211,238,0.2)]" viewBox="0 0 100 100">
              <defs>
                <radialGradient id="globeGrad">
                  <stop offset="0%" stopColor="#083344" />
                  <stop offset="100%" stopColor="#00020a" />
                </radialGradient>
              </defs>
              <circle cx="50" cy="50" r="45" fill="url(#globeGrad)" stroke="#22d3ee" strokeWidth="0.2" opacity="0.8" />
              <motion.g animate={{ rotateY: 360 }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }} style={{ transformOrigin: '50px 50px' }}>
                {[0, 30, 60, 90, 120, 150].map((rotation, i) => (
                  <ellipse key={`long-${i}`} cx="50" cy="50" rx={45 * Math.abs(Math.cos(rotation * Math.PI / 180))} ry="45" fill="none" stroke="#22d3ee" strokeWidth="0.15" opacity="0.4" />
                ))}
              </motion.g>
              {[20, 35, 50, 65, 80].map((y, i) => (
                <ellipse key={`lat-${i}`} cx="50" cy="50" rx={Math.sqrt(Math.pow(45, 2) - Math.pow(50 - y, 2))} ry={Math.abs(50 - y) * 0.3} fill="none" stroke="#22d3ee" strokeWidth="0.1" strokeDasharray="1,2" opacity="0.3" />
              ))}
              <circle cx="35" cy="40" r="0.6" fill="#22d3ee" className="animate-ping" />
              <circle cx="65" cy="30" r="0.8" fill="#22d3ee" className="animate-pulse" />
              <motion.rect x="5" width="90" height="0.5" fill="#22d3ee" animate={{ y: [10, 90, 10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="opacity-40 blur-[0.5px]" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* FOOTER-STYLE HUD (Hidden on small mobile) */}
      <div className="absolute bottom-10 left-10 hidden md:flex items-center gap-4 relative z-20">
        <Activity className="text-cyan-800" size={16} />
        <p className="font-mono text-[8px] md:text-[10px] text-cyan-800 tracking-[0.5em] uppercase">Auth_Token: Verified_Elite</p>
      </div>
    </div>
  );
};

export default HomePage;