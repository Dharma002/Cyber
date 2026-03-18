import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, Lock, Zap, Activity, Globe, ShieldAlert, Database, ChevronRight, Loader2, CheckCircle2, RefreshCcw, Cpu } from 'lucide-react';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [status, setStatus] = useState('idle'); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.name || !formData.email || !formData.phone) return alert("All fields required!");
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  // RESET FUNCTION: Wapas normal karne ke liye
  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '' });
    setStatus('idle');
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center relative overflow-hidden bg-[#00020a]">
      
      {/* BACKGROUND DECOR */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1400px] w-full mx-auto grid lg:grid-cols-12 gap-10 relative z-10">
        
        {/* LEFT: MAIN INFO (3 Columns) */}
        <div className="lg:col-span-3 space-y-8">
            <div>
                <div className="flex items-center gap-2 mb-4 text-[#00f2ea]">
                    <Zap size={16} className="animate-bounce" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">Gate_Access_v4</span>
                </div>
                <h1 className="text-7xl font-[1000] text-white uppercase italic tracking-tighter leading-[0.9]">
                  Agent <br /> <span className="text-[#00f2ea]">Portal</span>
                </h1>
                <p className="mt-6 text-gray-500 text-xs font-bold uppercase leading-relaxed tracking-wider">
                  Deploy your digital identity into the secure grid. Authorized agents only. 
                </p>
            </div>

            <div className="space-y-4 pt-10 border-t border-white/5">
                <h3 className="text-[#00f2ea] text-[10px] font-black uppercase tracking-widest">Active_Protocols</h3>
                {['AES-256 Encryption', 'Biometric Sync', 'Node redundancy'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/40 text-[9px] font-bold uppercase">
                        <div className="w-1 h-1 bg-[#00f2ea] rounded-full" /> {item}
                    </div>
                ))}
            </div>
        </div>

        {/* MIDDLE: THE FORM BOX (6 Columns) */}
        <div className="lg:col-span-6">
          <motion.div className="relative p-[1px] rounded-[3rem] bg-gradient-to-br from-[#00f2ea]/30 via-white/5 to-transparent">
            <div className="bg-[#0a0b14] rounded-[3rem] p-8 md:p-12 relative overflow-hidden min-h-[550px] flex flex-col justify-center border border-white/5">
              
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  /* SUCCESS STATE */
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-8"
                  >
                    <div className="flex justify-center">
                        <div className="w-24 h-24 bg-[#00f2ea]/10 border border-[#00f2ea]/40 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(0,242,234,0.2)]">
                            <CheckCircle2 size={48} className="text-[#00f2ea]" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-4xl font-black text-white uppercase italic">Access Granted</h2>
                        <p className="text-gray-400 text-[10px] font-mono tracking-[0.2em] uppercase">Welcome to the network, Agent {formData.name}</p>
                    </div>

                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={resetForm}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white text-[10px] font-black uppercase tracking-widest hover:bg-[#00f2ea] hover:text-black transition-all"
                    >
                        <RefreshCcw size={14} /> Back to Terminal
                    </motion.button>
                  </motion.div>
                ) : (
                  /* FORM STATE */
                  <motion.form 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-1 gap-6">
                      <div className="space-y-2 group">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Full_Name</label>
                        <div className="relative">
                          <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#00f2ea]" size={18} />
                          <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="GHOST_OPERATOR" className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-sm focus:outline-none focus:border-[#00f2ea]/50 text-white font-mono" />
                        </div>
                      </div>

                      <div className="space-y-2 group">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Secure_Email</label>
                        <div className="relative">
                          <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#00f2ea]" size={18} />
                          <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="AGENT@GRID.SECURE" className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-sm focus:outline-none focus:border-[#00f2ea]/50 text-white font-mono" />
                        </div>
                      </div>

                      <div className="space-y-2 group">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Comms_Line</label>
                        <div className="relative">
                          <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#00f2ea]" size={18} />
                          <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="+91 XXXX-XXXX" className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-sm focus:outline-none focus:border-[#00f2ea]/50 text-white font-mono" />
                        </div>
                      </div>
                    </div>

                    <div className="pt-6">
                      <motion.button 
                        disabled={status === 'loading'}
                        className="w-full relative py-6 bg-[#00f2ea] text-black font-[1000] uppercase tracking-[0.4em] text-xs overflow-hidden rounded-[2rem] shadow-[0_0_30px_rgba(0,242,234,0.3)] disabled:opacity-50"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-3">
                          {status === 'loading' ? <><Loader2 className="animate-spin" /> Syncing...</> : <><Lock size={16} /> Deploy_Identity</>}
                        </span>
                      </motion.button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: LIVE STATUS (3 Columns) */}
        <div className="lg:col-span-3 space-y-6">
            <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10 space-y-4">
                <div className="flex items-center gap-2">
                    <Activity size={14} className="text-[#00f2ea]" />
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">Live_Activity</span>
                </div>
                <div className="space-y-4">
                    {[1, 2, 3].map((_, i) => (
                        <div key={i} className="flex gap-3 items-start opacity-40 hover:opacity-100 transition-opacity">
                            <div className="w-1 h-8 bg-gray-700 rounded-full" />
                            <div>
                                <p className="text-[9px] text-white font-bold uppercase">New Agent Joined</p>
                                <p className="text-[8px] text-gray-500 font-mono">ID: 0x992{i}... Lucknow_Node</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-6 rounded-[2rem] bg-[#00f2ea]/5 border border-[#00f2ea]/20">
                <Cpu size={20} className="text-[#00f2ea] mb-3" />
                <h4 className="text-white font-black text-xs uppercase italic tracking-tighter">System Ready</h4>
                <p className="text-gray-500 text-[9px] uppercase mt-1 leading-relaxed">All encrypted channels are open for enrollment. Server load: 12%.</p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default RegistrationPage;