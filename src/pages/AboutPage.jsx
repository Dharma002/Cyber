import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users, Zap, Award, UserCheck, Briefcase, Globe, Activity } from 'lucide-react';

const Card = ({ icon: Icon, title, description, color }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -10, scale: 1.02 }}
    className={`relative group bg-[#0a0c12]/80 backdrop-blur-3xl border border-white/5 p-8 rounded-[2rem] transition-all duration-500 hover:border-${color}-500/30 overflow-hidden h-full shadow-2xl`}
  >
    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-${color}-500/5 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity`} />
    
    <div className={`w-14 h-14 bg-${color}-500/10 rounded-2xl flex items-center justify-center mb-6 border border-${color}-500/20 text-${color}-400 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(34,211,238,0.1)]`}>
      <Icon size={28} />
    </div>
    
    <h3 className="text-2xl font-black uppercase mb-4 italic text-white tracking-tight">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed font-medium">{description}</p>
  </motion.div>
);

const AboutPage = () => {
  return (
    <div className="relative min-h-screen bg-[#00020a] text-white overflow-hidden font-sans pt-32 pb-24">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: `linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)`, backgroundSize: '60px 60px' }}>
        </div>
        
        {/* Glow Spheres */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full"></div>
        
        {/* Scanning Line */}
        <motion.div 
          initial={{ top: "-10%" }} 
          animate={{ top: "110%" }} 
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }} 
          className="absolute left-0 right-0 h-[30vh] bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent z-10" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10 space-y-32">
        
        {/* --- 1. HERO SECTION --- */}
        <section className="flex flex-col items-center text-center gap-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 bg-white/[0.03] border border-white/10 px-6 py-2 rounded-full backdrop-blur-md mb-4"
          >
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_10px_#06b6d4]"></div>
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">Official Intelligence Archive // 2026</span>
          </motion.div>
          
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.8] italic">
              <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">CRIMEX</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 drop-shadow-[0_0_30px_rgba(34,211,238,0.4)]">INTELLIGENCE</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
              Empowering the next generation of <span className="text-white">cyber warriors</span> through elite research, tactical training, and strategic intelligence partnerships.
            </p>
          </div>
          
          <div className="w-40 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        </section>

        {/* --- 2. THE FOUNDATION (Redesigned) --- */}
        <section className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[4rem] blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative grid lg:grid-cols-12 gap-12 lg:gap-0 bg-[#05070a]/80 backdrop-blur-2xl rounded-[4rem] border border-white/10 overflow-hidden shadow-2xl">
            {/* Left Content Column */}
            <div className="lg:col-span-7 p-10 lg:p-20 space-y-10 relative">
              <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/5 blur-3xl opacity-50"></div>
              
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                   <div className="w-10 h-[2px] bg-gradient-to-r from-cyan-500 to-transparent"></div>
                   <span className="text-cyan-500 font-bold text-xs uppercase tracking-[0.5em] font-mono">Archive_Ref: 01_FOUNDATION</span>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white leading-[0.9]">
                  LEADING THE <br /> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">CYBER REVOLUTION</span>
                </h2>
                
                <p className="text-slate-400 text-lg leading-relaxed font-medium max-w-xl">
                  CRIMEX Intelligence is more than just a hub; it's a mission to secure the future. We bridge the gap between academic research and <span className="text-cyan-400">real-world tactical defense</span>. Our foundation is built on the pillars of innovation, integrity, and absolute security.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { label: "Trained Personnel", value: "500+", icon: Users, color: "cyan" },
                  { label: "Strategic MOUs", value: "15+", icon: Briefcase, color: "blue" }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 relative group/stat cursor-default group"
                  >
                    <div className={`absolute top-4 right-4 text-${stat.color}-500/20 group-hover/stat:text-${stat.color}-500/40 transition-colors`}>
                      <stat.icon size={40} />
                    </div>
                    <p className={`text-4xl font-black text-${stat.color}-400 mb-1 italic tracking-tighter group-hover:text-white transition-colors`}>{stat.value}</p>
                    <p className="text-slate-500 text-[10px] uppercase tracking-widest font-black font-mono">{stat.label}</p>
                    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-${stat.color}-500 transition-all group-hover/stat:w-1/2`}></div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="lg:col-span-5 relative min-h-[400px] bg-gradient-to-br from-[#0a0c12] to-black lg:border-l border-white/10 overflow-hidden group/img">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070" 
                  alt="Cyber Defense Command" 
                  className="w-full h-full object-cover opacity-40 group-hover/img:scale-110 transition-transform duration-1000 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#05070a] via-transparent to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#05070a] to-transparent"></div>
              </div>

              {/* Data Overlays */}
              <div className="absolute inset-0 p-10 flex flex-col justify-between z-10 pointer-events-none">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-1">
                    <span className="text-[8px] font-mono text-cyan-500/60 uppercase">System_State: ACTIVE</span>
                    <span className="text-[8px] font-mono text-cyan-500/60 uppercase">Encryption: AES_256</span>
                  </div>
                  <Activity className="text-cyan-500/50 animate-pulse" size={24} />
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl max-w-[200px]">
                    <p className="text-[10px] text-cyan-400 font-mono mb-1 flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping"></span>
                       LIVE_FEED_SECURE
                    </p>
                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                       <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "70%" }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                        className="h-full bg-cyan-500"
                       />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
                      <Shield className="text-cyan-400" size={18} />
                    </div>
                    <div>
                      <p className="text-white font-black uppercase text-xs tracking-widest italic leading-none">Operation Core</p>
                      <p className="text-cyan-600 font-mono text-[8px] uppercase">Crimex_Node_Active</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scanning Effect Overlay */}
              <div className="absolute inset-x-0 h-[2px] bg-cyan-500/30 blur-[2px] animate-scan z-20"></div>
            </div>
          </div>
        </section>

        {/* --- 3. VISION & MISSION --- */}
        <section className="grid md:grid-cols-2 gap-10">
          <Card 
            icon={Target}
            title="Our Vision"
            color="cyan"
            description="To become the global gold standard in tactical cyber intelligence and digital forensic research, creating a world where data is impenetrable and defense is absolute."
          />
          <Card 
            icon={Shield}
            title="Our Mission"
            color="blue"
            description="To empower investigators, students, and organizations through advanced training modules, tactical research, and high-tier career roadmaps in cybersecurity."
          />
        </section>

        {/* --- 4. CORE VALUES --- */}
        <section className="space-y-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 italic">
              <span className="text-white">CORE</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">VALUES</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card 
              icon={Zap}
              title="Innovation"
              color="cyan"
              description="Constantly pushing the boundaries of what's possible in digital defense and cognitive intelligence research."
            />
            <Card 
              icon={Users}
              title="Integrity"
              color="indigo"
              description="Upholding the highest ethical standards in every investigation and strategic collaboration we undertake."
            />
            <Card 
              icon={Award}
              title="Excellence"
              color="blue"
              description="Delivering world-class expertise and precision in everything from training to forensic data analysis."
            />
          </div>
        </section>

        {/* --- 5. FOUNDER SECTION (Refined) --- */}
        <section className="bg-gradient-to-br from-[#0a0c12]/80 to-[#05070a]/80 p-12 lg:p-20 rounded-[4rem] border border-white/5 backdrop-blur-3xl relative overflow-hidden shadow-3xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full"></div>
          <div className="flex flex-col md:flex-row items-center gap-16 relative z-10">
            <div className="relative w-72 h-72 shrink-0">
               <div className="absolute inset-0 bg-cyan-500/20 blur-[80px] rounded-full animate-pulse"></div>
               <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/5 p-2 bg-[#05080a] shadow-inner group cursor-pointer">
                 <img src="/ayushi.jpeg" alt="Ayushi Singh" className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-1000" />
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-scan opacity-0 group-hover:opacity-100" />
               </div>
               <div className="absolute bottom-4 right-4 h-14 w-14 bg-cyan-500 rounded-full border-4 border-[#0a0c12] flex items-center justify-center shadow-2xl transform group-hover:rotate-[360deg] transition-transform duration-1000">
                 <Shield className="w-7 h-7 text-black" />
               </div>
            </div>

            <div className="space-y-8 text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_10px_#06b6d4]"></div>
                <span className="text-cyan-500 font-black text-[10px] uppercase tracking-[0.4em]">Chief_Investigator // Founder</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none text-white">
                AYUSHI SINGH
              </h2>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
                "Our mission is to build an impenetrable digital future. Through CRIMEX, we are creating a legacy of absolute security and cognitive defense intelligence."
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                <div className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-cyan-400">NCRB Expert</div>
                <div className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-400">Tactical Specialist</div>
              </div>
            </div>
          </div>
        </section>

      </div>

      <footer className="relative z-30 py-10 mt-32 text-center border-t border-white/5 opacity-40">
          <p className="font-mono text-[9px] text-cyan-700 tracking-[0.6em] uppercase italic">Personnel_Briefing // CRIMEX_OS</p>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan { 0% { top: -100%; } 100% { top: 100%; } }
        .animate-scan { animation: scan 4s linear infinite; }
      `}} />
    </div>
  );
};

export default AboutPage;
