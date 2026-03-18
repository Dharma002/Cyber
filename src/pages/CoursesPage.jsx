import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Cpu, Gavel, ArrowUpRight, Zap, Clock, Users, X, CheckCircle2 } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Digital Forensics",
    desc: "Master the art of investigating cyber crimes and recovering digital evidence.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000",
    duration: "12 Weeks",
    students: "1.2k+",
    icon: <Shield size={20} className="text-orange-500" />,
    modules: ["Data Acquisition", "File System Analysis", "Network Forensics", "Memory Forensics"]
  },
  {
    id: 2,
    title: "Cyber Law & Ethics",
    desc: "Understand global legal frameworks and ethical hacking boundaries.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000",
    duration: "8 Weeks",
    students: "850+",
    icon: <Gavel size={20} className="text-orange-500" />,
    modules: ["IT Act 2000", "Data Privacy Laws", "Intellectual Property", "Ethics in Hacking"]
  },
  {
    id: 3,
    title: "AI Security Ops",
    desc: "Defend against next-gen AI-driven threats and secure LLM models.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000",
    duration: "10 Weeks",
    students: "2.1k+",
    icon: <Cpu size={20} className="text-orange-500" />,
    modules: ["Adversarial AI", "Model Robustness", "Secure LLM Deployment", "AI Anomaly Detection"]
  }
];

const CoursesPage = () => {
  // Track which card is "explored"
  const [exploredCard, setExploredCard] = useState(null);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="min-h-screen bg-[#02040a] text-white pt-40 pb-20 px-6 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>

      <div className="max-w-6xl mx-auto text-center mb-20">
        <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-6">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-700">Courses</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {courses.map((course) => (
          <motion.div 
            key={course.id} 
            layout
            className="group relative bg-[#0d1117] border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl h-[550px]"
          >
            {/* --- DEFAULT VIEW --- */}
            <div className="h-full flex flex-col">
              <div className="h-56 relative overflow-hidden">
                <img src={course.img} alt={course.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] to-transparent"></div>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-4 mb-4 text-[10px] font-black uppercase text-slate-500">
                  <span className="flex items-center gap-1"><Clock size={12} /> {course.duration}</span>
                  <span className="flex items-center gap-1"><Users size={12} /> {course.students}</span>
                </div>

                <h3 className="text-2xl font-black mb-4 uppercase italic text-white">{course.title}</h3>
                <p className="text-slate-400 text-sm mb-8">{course.desc}</p>

                <div className="mt-auto">
                  <button 
                    onClick={() => setExploredCard(course.id)}
                    className="w-full flex items-center justify-between bg-white/5 border border-white/10 px-6 py-4 rounded-2xl transition-all hover:bg-orange-500 hover:text-black group/btn"
                  >
                    <span className="text-[11px] font-black uppercase tracking-widest">Explore Module</span>
                    <ArrowUpRight size={18} className="text-orange-500 group-hover/btn:text-black" />
                  </button>
                </div>
              </div>
            </div>

            {/* --- EXPLORE OVERLAY (Conditional) --- */}
            <AnimatePresence>
              {exploredCard === course.id && (
                <motion.div 
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="absolute inset-0 bg-[#0d1117] z-20 p-8 flex flex-col"
                >
                  <div className="flex justify-between items-center mb-8">
                    <h4 className="text-orange-500 font-black uppercase tracking-tighter text-xl">Module Breakdown</h4>
                    <button 
                      onClick={() => setExploredCard(null)}
                      className="p-2 bg-white/5 rounded-full hover:bg-orange-500 transition-colors group/close"
                    >
                      <X size={20} className="text-white group-hover/close:text-black" />
                    </button>
                  </div>

                  <div className="space-y-4">
                    {course.modules.map((mod, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        key={idx} 
                        className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5"
                      >
                        <CheckCircle2 size={16} className="text-orange-500" />
                        <span className="text-sm font-bold text-slate-200">{mod}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <p className="text-[10px] text-slate-500 uppercase text-center mb-4 tracking-widest">Ready to start your journey?</p>
                    <button className="w-full bg-orange-500 text-black font-black py-4 rounded-xl uppercase text-xs tracking-widest hover:shadow-[0_0_20px_#f97316]">
                      Enroll Now
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CoursesPage;