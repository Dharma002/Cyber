import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileSearch, Fingerprint, Cpu, Microscope, Car, UserCircle, LifeBuoy, 
  ChevronRight, ShieldCheck, Shield, ArrowRight, Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ category, items, icon: Icon, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative bg-white border border-gray-100 p-8 rounded-[2rem] hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 flex flex-col h-full overflow-hidden"
  >
    {/* Subtle Decorative Background */}
    <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-50/50 blur-3xl rounded-full group-hover:bg-blue-100/50 transition-colors"></div>
    
    <div className="relative z-10 flex flex-col h-full">
      {/* Category Header */}
      <div className="flex items-center gap-5 mb-8 border-b border-gray-50 pb-6">
        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-100 text-[#004a8e] group-hover:bg-[#004a8e] group-hover:text-white transition-all duration-500 shadow-sm">
          <Icon size={28} />
        </div>
        <h3 className="text-lg font-bold uppercase tracking-tight text-gray-900 leading-tight group-hover:text-[#004a8e] transition-colors">
          {category}
        </h3>
      </div>

      {/* Services List (Clean & Official) */}
      <ul className="space-y-4 flex-grow">
        {items.map((item, idx) => (
          <motion.li 
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: (index * 0.1) + (idx * 0.05) }}
            className="flex items-start gap-3 group/item cursor-default"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0 group-hover/item:scale-125 transition-transform" />
            <span className="text-gray-700 text-[13px] leading-tight font-semibold group-hover/item:text-[#004a8e] transition-colors">
              {item}
            </span>
          </motion.li>
        ))}
      </ul>

      {/* Bottom Status Detail */}
      <div className="mt-8 pt-6 border-t border-gray-50 flex justify-between items-center opacity-60">
        <span className="text-[9px] font-bold text-gray-600 uppercase tracking-[0.2em]">Verified Lab Service</span>
        <div className="flex gap-1">
          <div className="w-1 h-1 rounded-full bg-blue-300"></div>
          <div className="w-1 h-1 rounded-full bg-blue-300/50"></div>
        </div>
      </div>
    </div>
  </motion.div>
);

const ServicesPage = () => {
  const forensicServices = [
    {
      category: "DOCUMENT EXAMINATION",
      icon: FileSearch,
      items: ["Handwriting Examination", "Signature Verification", "Document Authenticity Analysis", "Certificate Verification", "Photograph Verification"]
    },
    {
      category: "FINGERPRINT ANALYSIS",
      icon: Fingerprint,
      items: ["Fingerprint Development", "Fingerprint Matching", "Fingerprint Software Analysis", "Fingerprint in DVI", "Fingerprint for PCC"]
    },
    {
      category: "CYBER FORENSICS INVESTIGATION",
      icon: Cpu,
      items: ["Audio & Video Verification", "Speaker Identification & Transcript", "CCTV Forensics", "Mobile Forensics", "Deleted Data Recovery"]
    },
    {
      category: "FORENSIC BIOLOGY",
      icon: Microscope,
      items: ["Blood Group Examination", "Semen Examination", "Hair Examination", "Species Origin Examination", "Forensic DNA Test"]
    },
    {
      category: "KEY & ACCIDENT RECONSTRUCTION",
      icon: Car,
      items: ["Toolmark Analysis", "Vehicle Key Forensics", "Vehicle Identification Number", "Accident Reconstruction", "Crime Scene Investigation"]
    },
    {
      category: "FORENSIC FACIAL IMAGING",
      icon: UserCircle,
      items: ["Digital Facial Composites", "Post Mortem Facial Imaging", "Age-Progression-Regression", "1 to 1 Face Comparison & Analysis", "Facial Image Editing"]
    },
    {
      category: "FORENSIC SUPPORT",
      icon: LifeBuoy,
      items: ["Data Theft Analysis", "Property Investigation", "Employee Verification", "Counselling, Recruitment Services", "Cross Examination"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-900 pt-32 pb-24 px-6 md:px-12 relative overflow-hidden font-sans">
      
      {/* Background Decor (Subtle SIFS Style) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-50 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-100/20 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 bg-white border border-gray-100 px-5 py-2 rounded-full shadow-sm"
          >
            <ShieldCheck className="text-[#004a8e]" size={16} />
            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.3em]">Institutional Lab Services</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter leading-none text-[#004a8e]">
            Forensic <span className="text-gray-900 font-light">Investigation</span> <br /> 
            <span className="text-gray-600">Services</span>
          </h1>
          
          <p className="max-w-2xl text-gray-700 font-medium leading-relaxed text-lg italic">
            "Providing legally admissible evidence through scientifically proven methodologies across physical and digital domains."
          </p>

          <div className="w-24 h-1 bg-[#ffc107] rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {forensicServices.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
          
          {/* Custom Analysis CTA Card (Premium SIFS Style) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-1 bg-[#004a8e] border border-[#003366] rounded-[2rem] p-10 flex flex-col items-center justify-center text-center relative group overflow-hidden shadow-2xl shadow-blue-900/20"
          >
             <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <ShieldCheck className="text-white mb-6 group-hover:scale-110 transition-transform" size={48} />
             <h3 className="text-2xl font-bold text-white uppercase italic mb-4 leading-tight">NEED CUSTOM<br />CONSULTATION?</h3>
             <p className="text-blue-100 text-sm mb-8 font-medium italic">"Connect with our lead forensic experts for private case analysis and reporting."</p>
             <Link to="/contact" className="w-full">
                <button className="w-full py-4 bg-white text-[#004a8e] font-bold uppercase text-[11px] tracking-widest rounded-xl hover:bg-[#ffc107] hover:text-[#002d58] transition-all shadow-lg">
                  Submit Case Request <ArrowRight className="inline ml-2" size={16} />
                </button>
             </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;