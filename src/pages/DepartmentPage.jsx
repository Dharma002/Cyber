import React from 'react';
import { motion } from 'framer-motion';
// Fixed: Added 'Globe' to imports
import { GraduationCap, Zap, Search, Activity, ShieldCheck, Shield, ArrowRight, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const DepartmentCard = ({ title, desc, icon: Icon, color, details, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative h-full"
  >
    {/* White shadow card - SIFS Standard */}
    <div className="relative h-full bg-white border border-gray-100 p-10 rounded-[2.5rem] flex flex-col items-center text-center overflow-hidden shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500">
      
      {/* Decorative Gradient Blob */}
      <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${color} opacity-[0.05] rounded-full group-hover:scale-150 transition-transform duration-700`}></div>
      
      {/* Icon Wrapper */}
      <div className="relative mb-8">
        <div className="w-20 h-20 bg-blue-50 rounded-[2rem] flex items-center justify-center border border-blue-100 group-hover:bg-[#004a8e] group-hover:text-white transition-all duration-500">
           <Icon className="text-[#004a8e] group-hover:text-white transition-colors" size={36} />
        </div>
        {/* Yellow badge number */}
        <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#ffc107] text-[#002d58] rounded-full flex items-center justify-center font-bold text-xs shadow-md border-2 border-white">
          {index + 1}
        </div>
      </div>

      <h3 className="text-2xl font-bold uppercase tracking-tight text-gray-900 mb-4 group-hover:text-[#004a8e] transition-colors leading-tight">
        {title}
      </h3>
      
      <p className="text-gray-700 text-sm leading-relaxed mb-8 font-medium italic">
        "{desc}"
      </p>

      {/* List Section */}
      <ul className="text-left w-full space-y-4 mb-10 pt-6 border-t border-gray-50">
        {details.map((detail, i) => (
          <li key={i} className="flex items-start gap-3 group/item">
            <div className="w-1.5 h-1.5 rounded-full bg-[#004a8e] mt-1.5 group-hover/item:scale-125 transition-transform"></div>
            <span className="text-[12px] text-gray-600 group-hover/item:text-gray-900 transition-colors leading-snug font-semibold">
              {detail}
            </span>
          </li>
        ))}
      </ul>

      {/* Action Button */}
      <div className="mt-auto w-full">
         <Link to="/services" className="w-full py-4 border-2 border-[#004a8e] text-[#004a8e] rounded-2xl flex items-center justify-center gap-2 font-bold text-[11px] uppercase tracking-widest hover:bg-[#004a8e] hover:text-white transition-all duration-300">
            Explore Details <ArrowRight size={16} />
         </Link>
      </div>
    </div>
  </motion.div>
);

const DepartmentPage = () => {
  const departments = [
    {
      title: "Forensic Education",
      desc: "Comprehensive academic resources and job-ready curriculum for aspiring experts.",
      icon: GraduationCap,
      color: "from-blue-100 to-blue-200",
      details: [
        "Advanced degree & certificate programs",
        "Expert-curated curriculum & research",
        "Global mentorship with field specialists"
      ]
    },
    {
      title: "Forensic Training",
      desc: "Tactical hands-on training for law enforcement and security professionals.",
      icon: Zap,
      color: "from-blue-100 to-blue-200",
      details: [
        "Crime scene simulation & lab modules",
        "Biometric & DNA tool certifications",
        "On-site and corporate training sessions"
      ]
    },
    {
      title: "Forensic Investigation",
      desc: "Specialized intelligence support for corporate and private legal matters.",
      icon: Search,
      color: "from-blue-100 to-blue-200",
      details: [
        "Evidence recovery & fingerprint analysis",
        "Expert witness & forensic reporting",
        "Cyber and digital investigation labs"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-900 pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-50 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-100/30 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-24 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 bg-white border border-gray-100 px-5 py-2 rounded-full shadow-sm"
          >
            <ShieldCheck className="text-[#004a8e]" size={16} />
            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.3em]">Operational Divisions</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter leading-none mb-4 text-[#004a8e]">
            Our <span className="text-gray-900 font-light">Core</span> <br /> 
            Departments
          </h1>
          
          <p className="max-w-2xl text-gray-700 font-medium leading-relaxed text-lg italic">
            "Delivering forensic excellence through a multi-disciplinary approach to investigation and training."
          </p>
          <div className="w-24 h-1 bg-[#ffc107] rounded-full"></div>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {departments.map((dept, index) => (
            <DepartmentCard key={index} {...dept} index={index} />
          ))}
        </div>

        {/* Lower Metrics Section */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-32 p-10 bg-white border border-gray-100 rounded-[3rem] shadow-2xl shadow-blue-900/5 relative overflow-hidden"
        >
            <div className="flex flex-col md:flex-row items-center justify-around gap-12 relative z-10">
              {[
                { label: "Accreditation", val: "ISO 9001:2015", icon: ShieldCheck },
                { label: "Learning Mode", val: "Hybrid Access", icon: Globe },
                { label: "Expert Support", val: "24/7 Consultation", icon: Shield }
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-4">
                   <div className="p-4 bg-blue-50 rounded-2xl text-[#004a8e]">
                      <stat.icon size={24} />
                   </div>
                   <div className="text-left">
                      <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">{stat.label}</p>
                      <p className="text-sm font-extrabold text-[#004a8e] uppercase">{stat.val}</p>
                   </div>
                </div>
              ))}
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DepartmentPage;