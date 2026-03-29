import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Cpu, Gavel, ArrowRight, Clock, Users, X, CheckCircle2, Award, BookOpen } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Digital Forensics",
    desc: "Comprehensive study of investigating cyber crimes and recovering critical digital evidence for legal proceedings.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000",
    duration: "12 Weeks",
    students: "1.2k+ Enrolled",
    icon: <Shield size={20} />,
    modules: ["Data Acquisition", "File System Analysis", "Network Forensics", "Memory Forensics", "Court Testimony"]
  },
  {
    id: 2,
    title: "Cyber Law & Ethics",
    desc: "Master global legal frameworks, IT acts, and the ethical boundaries of digital investigation and defense.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000",
    duration: "8 Weeks",
    students: "850+ Enrolled",
    icon: <Gavel size={20} />,
    modules: ["IT Act 2000", "Data Privacy Laws", "Intellectual Property", "Digital Ethics", "Case Documentation"]
  },
  {
    id: 3,
    title: "AI Security Ops",
    desc: "Next-gen defense strategies against AI-driven threats and securing large-scale language models (LLMs).",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000",
    duration: "10 Weeks",
    students: "2.1k+ Enrolled",
    icon: <Cpu size={20} />,
    modules: ["Adversarial AI", "Model Robustness", "Secure LLM Deployment", "Anomaly Detection"]
  }
];

const CoursesPage = () => {
  const [exploredCard, setExploredCard] = useState(null);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="min-h-screen bg-[#f8fafc] text-gray-900 pt-32 pb-20 px-6 relative overflow-hidden"
    >
      {/* Subtle Professional Background */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-blue-100/30 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-blue-50/50 blur-[100px] rounded-full -z-10"></div>

      <div className="max-w-5xl mx-auto text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-4 py-1.5 rounded-full shadow-sm text-[10px] font-bold text-[#004a8e] uppercase tracking-[0.3em]">
           <BookOpen size={14} /> Academic Catalog 2026
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter leading-tight text-[#004a8e]">
          Professional <br /> <span className="text-gray-900">Certifications</span>
        </h1>
        <p className="text-gray-700 font-medium max-w-2xl mx-auto text-lg italic">
            "Empowering students and professionals with industry-recognized forensic skills."
        </p>
        <div className="w-24 h-1 bg-[#ffc107] mx-auto rounded-full mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {courses.map((course) => (
          <motion.div 
            key={course.id} 
            layout
            className="group relative bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/5 h-[580px] hover:border-[#004a8e]/20 transition-all duration-500"
          >
            {/* --- DEFAULT VIEW --- */}
            <div className="h-full flex flex-col">
              <div className="h-52 relative overflow-hidden">
                <img src={course.img} alt={course.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                {/* Duration Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold text-[#004a8e] shadow-sm flex items-center gap-2">
                   <Clock size={12} /> {course.duration}
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-4 mb-4 text-[10px] font-bold uppercase text-gray-600 tracking-widest">
                  <span className="flex items-center gap-1"><Users size={12} className="text-[#004a8e]" /> {course.students}</span>
                  <span className="flex items-center gap-1"><Award size={12} className="text-[#004a8e]" /> Verified</span>
                </div>

                <h3 className="text-2xl font-bold mb-4 uppercase text-gray-900 group-hover:text-[#004a8e] transition-colors">{course.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-8">{course.desc}</p>

                <div className="mt-auto">
                  <button 
                    onClick={() => setExploredCard(course.id)}
                    className="w-full flex items-center justify-center gap-3 bg-blue-50 text-[#004a8e] px-6 py-4 rounded-2xl font-bold uppercase text-[11px] tracking-widest hover:bg-[#004a8e] hover:text-white transition-all duration-300"
                  >
                    Explore Module Breakdown <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* --- MODULE OVERLAY (SIFS Style Clean Blue) --- */}
            <AnimatePresence>
              {exploredCard === course.id && (
                <motion.div 
                  initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="absolute inset-0 bg-white z-20 p-8 flex flex-col border-t-8 border-[#004a8e]"
                >
                  <div className="flex justify-between items-center mb-8 border-b border-gray-50 pb-4">
                    <div className="text-left">
                        <h4 className="text-[#004a8e] font-bold uppercase tracking-tight text-xl">Curriculum</h4>
                        <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Core Learning Path</p>
                    </div>
                    <button 
                      onClick={() => setExploredCard(null)}
                      className="p-3 bg-gray-50 rounded-full hover:bg-red-50 hover:text-red-500 transition-all"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                    {course.modules.map((mod, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }}
                        key={idx} 
                        className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100 group/item hover:bg-blue-50 transition-colors"
                      >
                        <CheckCircle2 size={18} className="text-[#004a8e]" />
                        <span className="text-sm font-bold text-gray-700">{mod}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-auto pt-6">
                    <button className="w-full bg-[#ffc107] text-[#002d58] font-bold py-4 rounded-xl uppercase text-xs tracking-[0.2em] shadow-lg shadow-yellow-500/20 hover:scale-[1.02] transition-all">
                       Enroll & Secure Seat
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