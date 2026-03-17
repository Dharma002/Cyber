import { motion } from 'framer-motion';
import { Terminal, Activity, Globe, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#00020a] overflow-x-hidden">
      
      {/* 1. BACKGROUND INFRASTRUCTURE */}
      <div className="fixed inset-0 z-0 opacity-[0.15]" 
           style={{ backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`, backgroundSize: '50px 50px' }}>
      </div>
      
      {/* NEON RADIAL GRADIENTS (For Depth) */}
      <div className="fixed top-[-20%] right-[-10%] w-[70%] h-[70%] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* 2. MAIN CONTENT WRAPPER */}
      <div className="max-w-8xl mx-auto w-full min-h-screen flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 relative z-20 px-8 lg:px-20 py-32 lg:py-0">
        
        {/* LEFT CONTENT: Text Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left w-full lg:w-[55%] z-30"
        >
          <div className="inline-flex items-center gap-2 bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 px-4 py-1.5 rounded-full mb-8 shadow-[0_0_15px_rgba(14,165,233,0.1)]">
            <Activity size={14} className="text-cyan-400 animate-pulse" />
            <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-[0.3em]">
              Node_Status: Encrypted_Link_Active
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[110px] font-black leading-[0.85] tracking-tighter uppercase mb-8 italic">
            <span className="text-white block drop-shadow-lg">CRIMEX</span> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)] block mt-2">
              INTELLIGENCE
            </span>
          </h1>

          <div className="flex items-center gap-4 mb-10 justify-center lg:justify-start">
            <div className="h-[1px] w-20 bg-gradient-to-r from-cyan-500 to-transparent"></div>
            <span className="font-mono text-cyan-500/80 text-[10px] tracking-[0.4em] uppercase">Security Level: Class-A</span>
          </div>

          <p className="text-slate-400 text-sm md:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-mono mb-12">
            <span className="text-cyan-500 font-bold">{">"}</span> Deployment of advanced <span className="text-white">cyber-defense</span> protocols. Master the art of digital warfare and secure the future.
          </p>

          <Link to="/register">
            <button className="px-10 py-4 bg-gradient-to-r from-blue-700 to-blue-500 text-white font-black uppercase text-sm tracking-widest rounded-lg shadow-[0_10px_30px_rgba(29,78,216,0.4)] hover:scale-105 transition-all active:scale-95">
              Register Now
            </button>
          </Link>
        </motion.div>

        {/* RIGHT CONTENT: Futuristic Cyber Globe */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative w-full lg:w-[45%] flex justify-center items-center h-[400px] lg:h-[600px]"
        >
          {/* Outer Orbital Ring 1 */}
          <div className="absolute w-full h-full border border-cyan-500/10 rounded-full animate-[spin_30s_linear_infinite] opacity-30"></div>
          {/* Outer Orbital Ring 2 */}
          <div className="absolute w-[80%] h-[80%] border-t-2 border-b-2 border-blue-500/20 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>

          {/* MAIN GLOBE CONTAINER */}
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
            {/* Inner Glow */}
            <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full animate-pulse"></div>
            
            <svg viewBox="0 0 100 100" className="w-full h-full relative z-10 drop-shadow-[0_0_40px_rgba(6,182,212,0.3)]">
              {/* Globe Sphere */}
              <circle cx="50" cy="50" r="46" fill="url(#globeGradient)" stroke="#22d3ee" strokeWidth="0.1" />
              
              <defs>
                <radialGradient id="globeGradient">
                  <stop offset="20%" stopColor="#083344" />
                  <stop offset="100%" stopColor="#00020a" />
                </radialGradient>
              </defs>

              {/* Longitude Lines (Rotating Group) */}
              <motion.g 
                animate={{ rotateY: 360 }} 
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "50% 50%" }}
              >
                {[0, 45, 90, 135].map((rot, i) => (
                  <ellipse key={i} cx="50" cy="50" rx={46 * Math.abs(Math.cos(rot * Math.PI / 180))} ry="46" fill="none" stroke="#22d3ee" strokeWidth="0.15" opacity="0.3" />
                ))}
              </motion.g>

              {/* Latitude Lines */}
              {[25, 40, 50, 60, 75].map((y, i) => (
                <ellipse key={i} cx="50" cy="50" rx={Math.sqrt(Math.pow(46, 2) - Math.pow(50 - y, 2))} ry={Math.abs(50 - y) * 0.3} fill="none" stroke="#22d3ee" strokeWidth="0.1" opacity="0.2" />
              ))}

              {/* Animated Data Points */}
              <circle cx="30" cy="40" r="0.7" fill="#22d3ee" className="animate-ping" />
              <circle cx="70" cy="60" r="0.7" fill="#22d3ee" className="animate-ping" style={{ animationDelay: '1s' }} />
              <circle cx="50" cy="20" r="0.5" fill="#fff" className="animate-pulse" />

              {/* Scanning Beam */}
              <motion.path
                d="M 5 50 Q 50 40 95 50"
                fill="none"
                stroke="#22d3ee"
                strokeWidth="0.5"
                opacity="0.5"
                animate={{ y: [-15, 15, -15], opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>

            {/* Floating Satellite Icon */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 z-20 pointer-events-none"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-cyan-500/20 backdrop-blur-md border border-cyan-500/50 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                <ShieldCheck size={14} className="text-cyan-400" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* FOOTER DECORATION */}
      <div className="absolute bottom-10 left-10 z-30 hidden lg:block">
        <div className="flex flex-col gap-1">
          <div className="h-[1px] w-32 bg-cyan-900"></div>
          <p className="font-mono text-[9px] text-cyan-700 tracking-[0.6em] uppercase">Global_Security_Network_v3.0</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;