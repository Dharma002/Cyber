import { motion } from 'framer-motion';

const CoursesPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="min-h-screen bg-slate-900 text-white p-20 pt-32 text-center"
    >
      <h1 className="text-5xl font-black uppercase mb-6 italic">Our Courses</h1>
      <p className="text-slate-400 max-w-2xl mx-auto mb-10">
        Master Cyber Security, Digital Forensics, and AI with our industry-leading training programs.
      </p>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {["Digital Forensics", "Cyber Law", "AI Security"].map((course, i) => (
          <div key={i} className="p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-sm shadow-2xl transition-all hover:bg-white/[0.04]">
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight text-orange-400">{course}</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-medium mb-6">Learn advanced {course} techniques from industry experts.</p>
            <button className="text-xs uppercase font-bold tracking-widest text-white border-b-2 border-orange-500 pb-1">Explore Module</button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CoursesPage;