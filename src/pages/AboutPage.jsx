import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Shield, Target, Users, Zap, Award, UserCheck, 
  Briefcase, Globe, Activity, Terminal, Eye, Cpu, Search, Database, Fingerprint, MessageCircle, ShieldCheck
} from 'lucide-react';

const Card = ({ icon: Icon, title, description, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative bg-white border border-gray-100 p-10 rounded-[2.5rem] hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 flex flex-col h-full overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 opacity-50 rounded-bl-full -z-0 transition-all group-hover:bg-blue-100" />
    
    <div className="relative z-10">
      <div className={`w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 border border-blue-100 text-[#004a8e] group-hover:bg-[#004a8e] group-hover:text-white transition-all duration-700 shadow-sm`}>
        <Icon size={32} />
      </div>
      
      <h3 className="text-2xl font-bold uppercase mb-4 text-gray-900 tracking-tight group-hover:text-[#004a8e] transition-colors">{title}</h3>
      <p className="text-gray-700 text-[13px] leading-relaxed font-semibold group-hover:text-gray-700 transition-colors uppercase tracking-wide italic">"{description}"</p>
    </div>
    
    <div className="absolute bottom-4 right-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity text-[#004a8e]">
       <ShieldCheck size={60} />
    </div>
  </motion.div>
);

const MethodologyStep = ({ title, desc, icon: Icon, index }) => (
  <div className="flex gap-6 group">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-[#004a8e] group-hover:bg-[#004a8e] group-hover:text-white transition-all shadow-md shrink-0">
        <Icon size={20} />
      </div>
      {index !== 2 && <div className="w-[2px] h-20 bg-gradient-to-b from-blue-200 to-transparent mt-4"></div>}
    </div>
    <div className="pt-1">
      <h4 className="text-xl font-bold text-gray-900 uppercase tracking-tight mb-2 group-hover:text-[#004a8e] transition-colors">{title}</h4>
      <p className="text-gray-700 text-[13px] leading-relaxed max-w-sm font-medium italic">{desc}</p>
    </div>
  </div>
);

const AboutPage = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-gray-900 overflow-hidden font-sans pt-32 pb-24">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-50 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/20 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-24">
        
        {/* --- CINEMATIC HERO: THE ARCHIVE (SIFS STYLE) --- */}
        <section className="relative flex items-center justify-center pt-10">
          <motion.div style={{ opacity }} className="relative z-10 w-full max-w-5xl text-center">
            <div className="inline-flex items-center gap-3 bg-white border border-gray-100 px-4 py-1.5 rounded-full shadow-sm mb-12">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></div>
                <span className="text-gray-600 font-bold text-[10px] uppercase tracking-[0.4em]">Academic Archive // Institutional History</span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-extrabold uppercase tracking-tighter leading-[0.8] text-gray-900 mb-12">
              THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#004a8e] to-blue-400">ARCHIVE</span>
            </h1>

            <p className="text-gray-700 text-xl md:text-2xl font-medium tracking-tight leading-relaxed max-w-3xl mx-auto italic">
              "Our mission is to translate <span className="text-[#004a8e] font-bold">complex forensic data</span> into actionable tactical intelligence for the next generation of digital defenders."
            </p>

            <div className="flex items-center justify-center gap-6 mt-16">
                <div className="h-[1px] w-20 bg-gray-200"></div>
                <div className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-100 rounded-2xl shadow-sm">
                   <Cpu className="text-[#004a8e]" size={20} />
                   <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">ISO 9001:2015 CERTIFIED</span>
                </div>
                <div className="h-[1px] w-20 bg-gray-200"></div>
            </div>
          </motion.div>
        </section>

        {/* --- METHODOLOGY SECTION --- */}
        <section className="relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center bg-white border border-gray-100 p-8 md:p-16 rounded-[4rem] shadow-2xl shadow-blue-900/5 relative">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 blur-[100px] rounded-full"></div>
             
             <div>
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#004a8e] border border-blue-100"><Activity size={24} /></div>
                  <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tighter text-[#004a8e]">SYSTEM<br />METHODOLOGY</h2>
               </div>
               <p className="text-gray-700 text-lg font-medium leading-relaxed mb-12 max-w-sm">
                 How we bridge the gap between academic theory and clinical tactical defense through scientifically proven protocols.
               </p>
               
               <div className="space-y-3">
                 {["IDENTIFICATION", "ACQUISITION", "SYNTHESIS"].map(item => (
                   <div key={item} className="flex justify-between items-center bg-gray-50 px-6 py-4 rounded-xl border border-gray-100">
                      <span className="text-[10px] font-bold text-[#004a8e] uppercase tracking-widest">{item}</span>
                      <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">SIFS_LEVEL_A</span>
                   </div>
                 ))}
               </div>
             </div>

             <div className="space-y-12">
                <MethodologyStep index={0} title="Evidence Preservation" desc="Utilizing hashed imaging and strict chain of custody protocols to maintain judicial integrity." icon={Shield} />
                <MethodologyStep index={1} title="Pattern Synthesis" desc="Expert node analysis to detect anomalies across digital streams and physical behavioral signatures." icon={Fingerprint} />
                <MethodologyStep index={2} title="Tactical Reporting" desc="Generating legally admissible digital dossiers with timestamped forensic certainty." icon={Database} />
             </div>
          </div>
        </section>

        {/* --- VISION & MISSION --- */}
        <section className="grid lg:grid-cols-2 gap-8">
          <div className="bg-[#004a8e] p-12 rounded-[3rem] text-white shadow-xl shadow-blue-900/20 relative overflow-hidden group">
             <Target className="text-yellow-400 mb-8 group-hover:scale-110 transition-transform" size={48} />
             <h3 className="text-4xl font-extrabold uppercase tracking-tighter mb-4">OUR VISION</h3>
             <p className="text-blue-100 text-lg font-medium leading-relaxed italic opacity-90">"To architect a global standard in clinical digital defense and research, creating a future where digital sovereignty is absolute."</p>
             <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-tl-full"></div>
          </div>
          <div className="bg-white border border-gray-200 p-12 rounded-[3rem] shadow-xl shadow-blue-900/5 relative overflow-hidden group">
             <Eye className="text-[#004a8e] mb-8 group-hover:scale-110 transition-transform" size={48} />
             <h3 className="text-4xl font-extrabold uppercase tracking-tighter text-gray-900 mb-4">OUR MISSION</h3>
             <p className="text-gray-700 text-lg font-medium leading-relaxed italic">"To deliver elite investigation modules, tactical personnel training, and military-grade intelligence roadmaps for modern investigators."</p>
             <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#004a8e]/5 rounded-tl-full"></div>
          </div>
        </section>

        {/* --- CORE VALUES --- */}
        <section className="space-y-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tighter mb-4 text-[#004a8e]">
              CORE <span className="text-gray-900 font-light italic">VALUES</span>
            </h2>
            <div className="w-20 h-1 bg-[#ffc107] mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card index={0} icon={Zap} title="Innovation" description="Pushing boundaries in cognitive intelligence research and offensive fusion." />
            <Card index={1} icon={Users} title="Integrity" description="Upholding surgical precision and absolute transparency in every dossier." />
            <Card index={2} icon={Award} title="Excellence" description="Setting the high-water mark for forensic capability and professional training." />
          </div>
        </section>

        {/* --- FOUNDER PROFILE --- */}
        <section className="relative pt-12">
           <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5 relative group">
                 <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden border-8 border-white bg-gray-200 shadow-2xl transition-all duration-500">
                    <img src="/ayushi.jpeg" alt="Ayushi Singh" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#004a8e] to-transparent opacity-60"></div>
                 </div>
                 {/* Floating verification badge */}
                 <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-3xl shadow-2xl flex items-center justify-center p-4 border border-gray-100">
                    <ShieldCheck size={40} className="text-[#004a8e]" />
                 </div>
              </div>

              <div className="lg:col-span-7 space-y-10">
                 <div className="space-y-4">
                    <div className="flex flex-wrap gap-3">
                       <span className="text-[10px] font-bold text-[#004a8e] uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100 shadow-sm">Founder & Director</span>
                       <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest bg-white px-4 py-1.5 rounded-full border border-gray-100 shadow-sm">NCRB Expert</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-extrabold uppercase tracking-tighter leading-none text-gray-900 leading-tight">
                       AYUSHI <span className="text-[#004a8e]">SINGH</span>
                    </h2>
                 </div>

                 <div className="relative p-10 bg-white border border-gray-100 rounded-[3rem] shadow-xl shadow-blue-900/5 italic text-[#004a8e]">
                    <p className="text-gray-600 text-2xl font-medium leading-relaxed">
                       "Crimex Intelligence is not just a hub; it's a testament to digital resilience. Our goal is to forge a legacy where defense isn't just a strategy, but pure instinct."
                    </p>
                    <Terminal className="absolute top-6 right-8 text-gray-50" size={48} />
                 </div>

                 <div className="flex flex-col sm:flex-row gap-6 pt-4">
                    <a href="https://chat.whatsapp.com/Cdr2DnpXfZAKFSr9bGunkw" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                       <div className="p-4 bg-green-50 text-green-600 rounded-2xl group-hover:bg-green-600 group-hover:text-white transition-all shadow-sm">
                          <MessageCircle size={24} />
                       </div>
                       <div className="text-left">
                          <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Connect Directly</p>
                          <p className="text-sm font-bold text-gray-900 uppercase italic">Founder's Portal</p>
                       </div>
                    </a>
                 </div>
              </div>
           </div>
        </section>

      </div>

      <footer className="mt-32 py-10 text-center border-t border-gray-100 opacity-40">
          <p className="font-bold text-[10px] text-gray-600 tracking-[0.4em] uppercase">Crimex Institutional Archive // v.3.9</p>
      </footer>
    </div>
  );
};

export default AboutPage;