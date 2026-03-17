import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Mail, ShieldCheck, ArrowRight, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#02040a] flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* --- BEST BG ANIMATION: Cyber Grid & Floating Orbs --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: `radial-gradient(#22d3ee 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>
        {/* Animated Glows */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/20 blur-[120px] rounded-full" />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      {/* --- LOGIN CARD --- */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-[450px] bg-[#0d0d12]/80 backdrop-blur-2xl border border-white/10 p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        {/* Top Decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            <ShieldCheck className="text-cyan-400" size={32} />
          </div>
          <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">System <span className="text-cyan-400">Auth</span></h2>
          <p className="text-gray-500 text-[10px] font-mono mt-2 tracking-[0.3em] uppercase underline decoration-cyan-500/30">Enter Credentials_</p>
        </div>

        <form className="space-y-6">
          {/* Email Input */}
          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-400 uppercase ml-2 tracking-widest">User_Identifier</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-cyan-400 transition-colors" size={18} />
              <input 
                type="email" 
                placeholder="EMAIL_ADDRESS"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-gray-700 font-mono"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-[10px] font-black text-gray-400 uppercase ml-2 tracking-widest">Access_Key</label>
              <Link to="/forgot" className="text-[9px] text-cyan-500 hover:text-white transition-colors uppercase font-bold">Lost Key?</Link>
            </div>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-cyan-400 transition-colors" size={18} />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-gray-700 font-mono"
              />
            </div>
          </div>

          {/* Login Button */}
          <button className="group relative w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl text-[12px] font-black uppercase tracking-[0.2em] text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-all overflow-hidden active:scale-95">
            <span className="relative z-10 flex items-center justify-center gap-2 italic">
              Grant_Access <ArrowRight size={16} />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-[10px] uppercase font-bold">
            New Node? <Link to="/register" className="text-cyan-500 hover:underline ml-1">Create Account</Link>
          </p>
        </div>

        {/* System HUD element */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-20 pointer-events-none">
          <Terminal size={12} className="text-cyan-500" />
          <span className="text-[8px] font-mono text-cyan-500 uppercase tracking-widest">Secure_Layer_Active: v3.0</span>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;