import { motion } from 'framer-motion';
import { Calendar, CheckCircle } from 'lucide-react';

const InternshipPage = () => {
  const speakers = [
    "Dr. Rakshit Tandon", "Amit Dubey", "Arya Tyagi", "Jhanvi Sharma", 
    "Deepansh Parashar", "Ojaswani Sharma", "Dr. Gupta", "Adv. Adarsh",
    "Nand Kumar (AI)", "Archana (AI)", "Rupesh Mittal", "Piyush Kaushik"
  ];

  const schedule = [
    { day: "Monday", task: "Exam Preparation (MCQ/Concept)" },
    { day: "Wednesday", task: "Government Job Vacancy Updates" },
    { day: "Friday", task: "Step-by-Step Form Filling Guidance" },
    { day: "Sunday", task: "Career Guidance & Cyber Forensics" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen bg-slate-50 pb-20"
    >
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-black uppercase mb-4">Summer Internship 2026</h1>
        <p className="text-blue-200 max-w-2xl mx-auto font-medium">
          In Collaboration with the Security Council of India. Practical training in Cyber Security, Digital Forensics, and AI.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 -mt-10 grid md:grid-cols-3 gap-8">
        {/* Weekly Plan Card */}
        <div className="md:col-span-2 bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
          <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
            <Calendar className="text-red-600" /> WEEKLY UPLOAD PLAN
          </h2>
          <div className="space-y-4">
            {schedule.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="font-black text-blue-900 w-24">{item.day}</span>
                <span className="text-slate-600 font-medium">{item.task}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Info Card */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
          <h2 className="text-2xl font-black mb-6">Program Info</h2>
          <ul className="space-y-4 text-sm font-bold text-slate-700">
            <li className="flex items-center gap-3"><CheckCircle size={18} className="text-green-500"/> Duration: 4 Weeks</li>
            <li className="flex items-center gap-3"><CheckCircle size={18} className="text-green-500"/> Mode: Online (Weekend)</li>
            <li className="flex items-center gap-3"><CheckCircle size={18} className="text-green-500"/> 2 Hours Sessions</li>
            <li className="flex items-center gap-3"><CheckCircle size={18} className="text-green-500"/> Certificate Provided</li>
          </ul>
          <button className="w-full mt-8 bg-red-600 text-white py-4 rounded-xl font-black uppercase tracking-widest shadow-lg shadow-red-200">
            Apply Now
          </button>
        </div>
      </div>

      {/* Speakers Grid */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <h2 className="text-3xl font-black mb-10 text-center uppercase">Our Guest Speakers & Experts</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {speakers.map((name, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 text-center hover:border-blue-500 transition shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 text-blue-900 font-bold">
                {name[0]}
              </div>
              <p className="text-[10px] font-black leading-tight uppercase">{name}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default InternshipPage;