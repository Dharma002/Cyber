import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Mail, Phone, Globe, Shield, Send, CheckCircle2, 
  Briefcase, GraduationCap, Link as LinkIcon, FileText, ChevronRight,
  Activity 
} from 'lucide-react';

const ApplyPage = () => {
  const [step, setStep] = useState(1);
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
    <div className="min-h-screen bg-[#00020a] text-white pt-40 pb-24 px-8 relative overflow-hidden font-sans">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-cyan-500/5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full"></div>
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: `linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)`, backgroundSize: '60px 60px' }}>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Page Header */}
        <div className="text-center mb-20 space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 bg-white/[0.03] border border-white/10 px-6 py-2 rounded-full backdrop-blur-md"
          >
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_10px_#06b6d4]"></div>
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] font-mono">Academic_Portal // 2026</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-[1000] uppercase italic tracking-tighter leading-none">
            APPLY FOR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 drop-shadow-[0_0_30px_rgba(34,211,238,0.4)]">FORENSIC LEARNING</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-slate-400 font-medium leading-relaxed uppercase tracking-widest text-[10px] opacity-60">
            Learn More About Forensic Courses, Training & Internship
          </p>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Requirements & Steps */}
          <div className="lg:col-span-4 space-y-10">
             <div className="bg-[#0a0c12]/50 border border-white/5 p-8 rounded-[3rem] backdrop-blur-xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
                <h3 className="text-[#00f2ea] text-xs font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Shield size={16} /> Course_Protocols
                </h3>
                <div className="space-y-6">
                   {[
                     { t: "Enrollment", d: "Secure your spot in the next session." },
                     { t: "Verification", d: "Academic & identity credential check." },
                     { t: "Deployment", d: "Begin your forensic learning journey." }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-4 group cursor-default">
                        <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-black text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">0{i+1}</div>
                        <div>
                           <p className="text-white font-black uppercase text-[11px] italic tracking-widest">{item.t}</p>
                           <p className="text-slate-500 text-xs mt-1">{item.d}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>

             <div className="bg-gradient-to-br from-cyan-400/10 to-transparent border border-cyan-400/20 p-8 rounded-[3rem] group">
                <Activity className="text-cyan-400 mb-4 animate-pulse" />
                <h4 className="text-white font-black text-xs uppercase tracking-widest mb-2">System Active</h4>
                <p className="text-slate-400 text-[10px] uppercase leading-relaxed font-mono opacity-60">
                   Recruitment and course admissions are LIVE. Processing speed: 100mbps.
                </p>
             </div>
          </div>

          {/* Right Side: Application Form */}
          <div className="lg:col-span-8">
            <motion.div 
               className="bg-[#0a0c12]/80 backdrop-blur-3xl border border-white/10 p-8 md:p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden min-h-[600px] flex flex-col justify-center"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
              
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-8"
                  >
                    <div className="flex justify-center">
                        <div className="w-24 h-24 bg-cyan-500/10 border border-cyan-500/30 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.2)]">
                            <CheckCircle2 size={48} className="text-cyan-400" />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter">Application Logged</h2>
                        <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-sm mx-auto">
                          Success! Your forensic learning request has been received. Our counselors will reach out to you shortly.
                        </p>
                    </div>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="px-10 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all"
                    >
                      New Application
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-1.5 group">
                        <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-1">Full Name *</label>
                        <div className="relative">
                          <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-cyan-400" size={16} />
                          <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Your Full Name" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-sm focus:border-cyan-500/50 text-white transition-all" />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5 group">
                        <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-1">Email Address *</label>
                        <div className="relative">
                          <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-cyan-400" size={16} />
                          <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="email@example.com" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-sm focus:border-cyan-500/50 text-white transition-all" />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5 group">
                        <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-1">Phone Number *</label>
                        <div className="relative">
                          <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-cyan-400" size={16} />
                          <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="+91 XXXXX XXXXX" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-sm focus:border-cyan-500/50 text-white transition-all" />
                        </div>
                      </div>

                      {/* Country */}
                      <div className="space-y-1.5 group">
                        <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-1">Country *</label>
                        <div className="relative">
                          <Globe className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-cyan-400" size={16} />
                          <input required name="country" value={formData.country} onChange={handleChange} type="text" placeholder="Enter Your Country" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-sm focus:border-cyan-500/50 text-white transition-all" />
                        </div>
                      </div>

                      {/* Learning Type */}
                      <div className="space-y-1.5 group">
                        <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-1">Select Learning Type *</label>
                        <div className="relative">
                          <Briefcase className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-600" size={16} />
                          <select required name="learningType" onChange={handleChange} className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-sm focus:border-cyan-500/50 text-white appearance-none cursor-pointer">
                            <option value="" className="bg-[#0a0c12]">Select Learning Type</option>
                            <option value="Forensic Science" className="bg-[#0a0c12]">Forensic Science</option>
                            <option value="Cyber Security" className="bg-[#0a0c12]">Cyber Security</option>
                            <option value="Criminal Investigation" className="bg-[#0a0c12]">Criminal Investigation</option>
                          </select>
                          <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-600 rotate-90" size={14} />
                        </div>
                      </div>

                      {/* Learning Sub Type */}
                      <div className="space-y-1.5 group">
                        <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-1">Select Learning Sub Type *</label>
                        <div className="relative">
                          <Shield className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-600" size={16} />
                          <select required name="learningSubType" onChange={handleChange} className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-sm focus:border-cyan-500/50 text-white appearance-none cursor-pointer">
                            <option value="" className="bg-[#0a0c12]">Select Sub Type</option>
                            <option value="Biology" className="bg-[#0a0c12]">Biology & Serology</option>
                            <option value="Digital" className="bg-[#0a0c12]">Digital & Mobile</option>
                            <option value="Lab" className="bg-[#0a0c12]">Lab Analysis</option>
                          </select>
                          <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-600 rotate-90" size={14} />
                        </div>
                      </div>
                    </div>

                    {/* Course */}
                    <div className="space-y-1.5 group">
                      <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-1">Select Course *</label>
                      <div className="relative">
                        <GraduationCap className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-600" size={16} />
                        <select required name="course" onChange={handleChange} className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-sm focus:border-cyan-500/50 text-white appearance-none cursor-pointer">
                          <option value="" className="bg-[#0a0c12]">Select Preferred Course</option>
                          <option value="Advanced DNA" className="bg-[#0a0c12]">Advanced DNA Profiling</option>
                          <option value="Ethical Hacking" className="bg-[#0a0c12]">Mastering Ethical Hacking</option>
                          <option value="Crime Scene" className="bg-[#0a0c12]">Scientific Crime Scene Management</option>
                        </select>
                        <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-600 rotate-90" size={14} />
                      </div>
                    </div>

                    {/* Simulating reCAPTCHA */}
                    <div className="py-2">
                       <div className="bg-white p-3 rounded-lg border border-gray-200 flex items-center justify-between max-w-[300px] shadow-lg">
                          <div className="flex items-center gap-3">
                             <input type="checkbox" required className="w-5 h-5 cursor-pointer accent-blue-600" />
                             <span className="text-gray-700 text-sm font-medium">I'm not a robot</span>
                          </div>
                          <div className="flex flex-col items-center">
                             <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="captcha" className="w-6 h-6" />
                             <span className="text-[8px] text-gray-500">reCAPTCHA</span>
                             <div className="flex gap-1 mt-0.5">
                                <span className="text-[6px] text-blue-600">Privacy</span>
                                <span className="text-[6px] text-blue-600">-</span>
                                <span className="text-[6px] text-blue-600">Terms</span>
                             </div>
                          </div>
                       </div>
                    </div>

                    <div className="pt-4">
                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={status === 'loading'}
                        className="w-full relative py-6 bg-cyan-500 text-black font-black uppercase tracking-[0.4em] text-xs overflow-hidden rounded-[2.5rem] shadow-[0_20px_40px_rgba(6,182,212,0.2)] disabled:opacity-50"
                      >
                         <span className="relative z-10 flex items-center justify-center gap-3">
                           {status === 'loading' ? 'Processing Enrollment...' : <><Send size={18} /> Submit Application</>}
                         </span>
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
