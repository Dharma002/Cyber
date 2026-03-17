import React from 'react';
import { motion } from 'framer-motion';
import { Users, Image as ImageIcon, Handshake, ShieldCheck } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="relative min-h-screen bg-[#05080a] text-white overflow-hidden">
      
      {/* --- CYBER SCANNER BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Digital Grid */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(220, 38, 38, 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        ></div>

        {/* Moving Scanline Animation */}
        <motion.div 
          initial={{ top: "-10%" }}
          animate={{ top: "110%" }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-[20vh] bg-gradient-to-b from-transparent via-red-600/10 to-transparent z-10"
        />

        {/* Glowing Orbs (Static subtle positions) */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-red-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[100px] rounded-full" />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-20 p-6 md:p-10 pt-24 max-w-6xl mx-auto space-y-24">
        
        {/* Header Section */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="inline-block px-4 py-1 border border-red-500/30 rounded-full bg-red-500/5 text-red-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Intelligence Report: 001
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-700 uppercase tracking-tighter">
            About <span className="text-red-600">CRIMEX</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light tracking-wide">
            Empowering the next generation of <span className="text-white font-medium">Forensic Experts</span> with 
            data-driven insights and authentic career paths.
          </p>
        </motion.section>

        {/* 2. Team Section (Glassmorphism Cards) */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-red-600">The Operatives</h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-red-600/50 to-transparent"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((member) => (
              <motion.div 
                key={member}
                whileHover={{ y: -5, backgroundColor: "rgba(15, 23, 42, 0.6)" }}
                className="relative p-1 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl transition-all group overflow-hidden"
              >
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-600 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="p-8">
                  <div className="w-14 h-14 bg-slate-800 rounded-xl mb-6 flex items-center justify-center border border-white/10">
                    <Users className="text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">Lead Investigator</h3>
                  <p className="text-red-500 text-xs font-bold mb-4 tracking-widest">Specialist</p>
                  <p className="text-slate-400 text-sm leading-relaxed">Focusing on advanced forensic techniques and career mentorship for students.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. Gallery (Scanner Style) */}
        <section>
           <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-red-600">Visual Evidence</h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-red-600/50 to-transparent"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((img) => (
              <motion.div 
                key={img} 
                whileHover={{ scale: 0.98 }}
                className="aspect-[4/5] bg-slate-900 border border-white/5 rounded-2xl flex flex-col items-center justify-center group relative cursor-crosshair"
              >
                <ImageIcon className="text-slate-700 group-hover:text-red-600 transition-colors" size={40} />
                <div className="absolute bottom-4 text-[10px] text-slate-500 font-mono">FILE_00{img}.JPG</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4. Collaboration (Mission Partnership) */}
        <motion.section 
          className="border-t border-b border-red-900/30 py-16 text-center md:text-left"
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-bold uppercase italic">Collaborations & <span className="text-red-600">MOU</span></h2>
              <p className="text-slate-400 leading-relaxed max-w-xl">
                We officially collaborate with national bodies to ensure the highest standards of 
                forensic education and security training in India.
              </p>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                 <div className="flex -space-x-3">
                    {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800" />)}
                 </div>
                 <span className="text-sm text-slate-500">+ National Security Partners</span>
              </div>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-red-600/20 to-transparent border border-red-600/30 rounded-[2.5rem] flex items-center gap-6 backdrop-blur-md">
                <ShieldCheck size={60} className="text-red-600" />
                <div>
                  <h4 className="font-black text-2xl">SCI</h4>
                  <p className="text-xs text-red-500 uppercase font-bold tracking-tighter">Security Council of India</p>
                </div>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default AboutPage;