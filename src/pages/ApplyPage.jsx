import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Mail, Phone, Globe, Shield, Send, CheckCircle2, 
  Briefcase, GraduationCap, ChevronRight, Activity, ShieldCheck, ArrowRight 
} from 'lucide-react';

const ApplyPage = () => {
  const [status, setStatus] = useState('idle'); // idle, loading, success
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '',
    country: '', learningType: '', 
    learningSubType: '', course: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-900 pt-32 pb-24 px-6 md:px-12 relative overflow-hidden font-sans">
      
      {/* Background Ambience (Subtle Professional Gradients) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-50 to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-100/20 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Page Header (SIFS Style) */}
        <div className="text-center mb-16 space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 bg-white border border-gray-100 px-5 py-2 rounded-full shadow-sm"
          >
            <ShieldCheck className="text-[#004a8e]" size={16} />
            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.3em]">Institutional Enrollment 2026</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter leading-none text-[#004a8e]">
            Academic <span className="text-gray-900 font-light">Application</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-gray-700 font-medium leading-relaxed italic text-lg">
            "Your journey towards becoming a forensic expert begins here. Please fill in the details accurately."
          </p>
          <div className="w-24 h-1 bg-[#ffc107] mx-auto rounded-full"></div>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Requirements & Steps */}
          <div className="lg:col-span-4 space-y-8">
             <div className="bg-white border border-gray-100 p-8 rounded-[2.5rem] shadow-xl shadow-blue-900/5 relative overflow-hidden">
                <h3 className="text-[#004a8e] text-xs font-bold uppercase tracking-widest mb-8 border-b border-gray-50 pb-4 flex items-center gap-2">
                  <GraduationCap size={16} /> Admission Protocols
                </h3>
                <div className="space-y-8">
                    {[
                      { t: "Enrollment", d: "Choose your specialized forensic learning path." },
                      { t: "Verification", d: "Academic & identity credential verification." },
                      { t: "Activation", d: "Instant access to course modules & portal." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 group">
                         <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-sm font-bold text-[#004a8e] group-hover:bg-[#004a8e] group-hover:text-white transition-all">
                           0{i+1}
                         </div>
                         <div>
                            <p className="text-gray-900 font-bold uppercase text-[12px] tracking-wider">{item.t}</p>
                            <p className="text-gray-600 text-xs mt-1 font-medium">{item.d}</p>
                         </div>
                      </div>
                    ))}
                </div>
             </div>

             <div className="bg-[#004a8e] p-8 rounded-[2.5rem] shadow-lg shadow-blue-900/20 group text-white">
                <Activity className="text-yellow-400 mb-4 animate-pulse" />
                <h4 className="font-bold text-xs uppercase tracking-widest mb-2">Live Status</h4>
                <p className="text-blue-100 text-[11px] leading-relaxed italic opacity-80 font-medium">
                    Admissions are currently open for Spring Session 2026. Secure your seat today.
                </p>
             </div>
          </div>

          {/* Right Side: Application Form */}
          <div className="lg:col-span-8">
            <motion.div 
               className="bg-white border border-gray-100 p-8 md:p-12 rounded-[3.5rem] shadow-2xl shadow-blue-900/10 relative overflow-hidden flex flex-col justify-center"
            >
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 space-y-8"
                  >
                    <div className="flex justify-center">
                        <div className="w-24 h-24 bg-green-50 border border-green-100 rounded-full flex items-center justify-center shadow-lg">
                            <CheckCircle2 size={48} className="text-green-500" />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#004a8e] uppercase tracking-tighter">Application Received</h2>
                        <p className="text-gray-700 text-sm font-semibold leading-relaxed max-w-sm mx-auto">
                          Our counselors will verify your details and contact you within 24-48 hours. Welcome to the academy!
                        </p>
                    </div>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="px-10 py-4 border-2 border-[#004a8e] rounded-xl text-[11px] font-bold uppercase tracking-widest text-[#004a8e] hover:bg-[#004a8e] hover:text-white transition-all"
                    >
                      New Application
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-600 uppercase tracking-widest ml-1">Full Name *</label>
                        <div className="relative">
                          <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600" size={16} />
                          <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Enter Full Name" className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 pl-14 pr-6 text-sm focus:border-[#004a8e] text-gray-900 transition-all outline-none font-semibold" />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-600 uppercase tracking-widest ml-1">Email Address *</label>
                        <div className="relative">
                          <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600" size={16} />
                          <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="example@mail.com" className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 pl-14 pr-6 text-sm focus:border-[#004a8e] text-gray-900 transition-all outline-none font-semibold" />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-600 uppercase tracking-widest ml-1">Phone Number *</label>
                        <div className="relative">
                          <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600" size={16} />
                          <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="+91 XXXXX XXXXX" className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 pl-14 pr-6 text-sm focus:border-[#004a8e] text-gray-900 transition-all outline-none font-semibold" />
                        </div>
                      </div>

                      {/* Country */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-600 uppercase tracking-widest ml-1">Country *</label>
                        <div className="relative">
                          <Globe className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600" size={16} />
                          <input required name="country" value={formData.country} onChange={handleChange} type="text" placeholder="Your Country" className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 pl-14 pr-6 text-sm focus:border-[#004a8e] text-gray-900 transition-all outline-none font-semibold" />
                        </div>
                      </div>

                      {/* Learning Type */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-600 uppercase tracking-widest ml-1">Learning Category *</label>
                        <div className="relative">
                          <Briefcase className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600" size={16} />
                          <select required name="learningType" onChange={handleChange} className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 pl-14 pr-10 text-sm focus:border-[#004a8e] text-gray-900 appearance-none cursor-pointer outline-none font-semibold transition-all">
                            <option value="">Select Category</option>
                            <option value="Forensic Science">Forensic Science</option>
                            <option value="Cyber Security">Cyber Security</option>
                            <option value="Criminal Investigation">Criminal Investigation</option>
                          </select>
                          <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-600 rotate-90" size={14} />
                        </div>
                      </div>

                      {/* Course Selection */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-600 uppercase tracking-widest ml-1">Select Course *</label>
                        <div className="relative">
                          <GraduationCap className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600" size={16} />
                          <select required name="course" onChange={handleChange} className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 pl-14 pr-10 text-sm focus:border-[#004a8e] text-gray-900 appearance-none cursor-pointer outline-none font-semibold transition-all">
                            <option value="">Select Preferred Course</option>
                            <option value="Advanced DNA">Advanced DNA Profiling</option>
                            <option value="Ethical Hacking">Mastering Ethical Hacking</option>
                            <option value="Crime Scene">Scientific Crime Scene Management</option>
                          </select>
                          <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-600 rotate-90" size={14} />
                        </div>
                      </div>
                    </div>

                    {/* CAPTCHA Sim (SIFS Style) */}
                    <div className="py-2 flex justify-center md:justify-start">
                       <div className="bg-white p-3 rounded-lg border border-gray-100 flex items-center justify-between min-w-[300px] shadow-md">
                          <div className="flex items-center gap-3">
                             <input type="checkbox" required className="w-5 h-5 cursor-pointer accent-blue-600" />
                             <span className="text-gray-700 text-sm font-medium">I'm not a robot</span>
                          </div>
                          <div className="flex flex-col items-center">
                             <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="captcha" className="w-6 h-6" />
                             <span className="text-[8px] text-gray-600">reCAPTCHA</span>
                          </div>
                       </div>
                    </div>

                    <div className="pt-4">
                      <motion.button 
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        disabled={status === 'loading'}
                        className="w-full py-5 bg-[#004a8e] text-white font-bold uppercase tracking-[0.2em] text-xs rounded-xl shadow-xl shadow-blue-900/20 disabled:opacity-50 transition-all flex items-center justify-center gap-3"
                      >
                        {status === 'loading' ? 'Processing Application...' : <><Send size={18} /> Submit Application <ArrowRight size={18} /></>}
                      </motion.button>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;