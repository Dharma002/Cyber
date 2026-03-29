import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Mail, ShieldCheck, ArrowRight, Globe, Shield, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="min-h-screen w-full bg-white flex overflow-hidden">
      
      {/* --- LEFT SIDE: BRANDING & VISUAL (SIFS STYLE) --- */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#004a8e] relative items-center justify-center p-12 overflow-hidden">
        {/* Abstract Background Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-white blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-full h-full border-[1px] border-white/20 shadow-[inset_0_0_100px_rgba(255,255,255,0.1)]" 
               style={{ backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-white space-y-8 max-w-lg"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">
             <ShieldCheck size={16} className="text-yellow-400" /> Secure Institutional Access
          </div>
          
          <h1 className="text-5xl font-extrabold tracking-tighter leading-tight uppercase">
            Advancing <br />
            <span className="text-blue-200 italic">Forensic</span> <br />
            Excellence.
          </h1>
          
          <p className="text-blue-100 text-lg font-medium leading-relaxed opacity-80">
            Login to your professional dashboard to access specialized forensic tools, case reports, and academic resources.
          </p>

          <div className="space-y-4 pt-4">
            {[
              "Verified Professional Access",
              "ISO 9001:2015 Standards",
              "Encrypted Data Protection"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-yellow-400" />
                <span className="text-sm font-bold uppercase tracking-wider">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Floating Logo/Badge */}
        <div className="absolute bottom-10 left-12 opacity-20">
           <p className="text-[120px] font-black tracking-tighter uppercase leading-none select-none">CRIMEX</p>
        </div>
      </div>

      {/* --- RIGHT SIDE: LOGIN FORM (CLEAN & CENTERED) --- */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 bg-[#f8fafc]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-[450px] bg-white border border-gray-100 p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-blue-900/10"
        >
          {/* Form Header */}
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
               <img src="/logo.png" alt="Crimex" className="w-10 h-10 object-contain" />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight uppercase">Sign <span className="text-[#004a8e]">In</span></h2>
            <p className="text-gray-600 text-[10px] font-bold mt-2 tracking-[0.2em] uppercase">User Authentication Protocol</p>
            <div className="w-12 h-1 bg-[#ffc107] mx-auto mt-4 rounded-full"></div>
          </div>

          <form className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-600 uppercase ml-1 tracking-widest">Official Email</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#004a8e] transition-colors" size={18} />
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 pl-12 pr-4 text-sm text-gray-900 focus:outline-none focus:border-[#004a8e] focus:bg-white transition-all font-semibold shadow-sm"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Password</label>
                <Link to="/forgot" className="text-[10px] text-[#004a8e] hover:underline font-bold uppercase tracking-tighter">Forgot Password?</Link>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#004a8e] transition-colors" size={18} />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 pl-12 pr-4 text-sm text-gray-900 focus:outline-none focus:border-[#004a8e] focus:bg-white transition-all font-semibold shadow-sm"
                />
              </div>
            </div>

            {/* Action Button */}
            <button className="w-full py-4 bg-[#004a8e] text-white rounded-xl text-[12px] font-bold uppercase tracking-[0.2em] shadow-lg shadow-blue-900/20 hover:bg-[#003366] hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
              Secure Sign In <ArrowRight size={16} />
            </button>
          </form>

          {/* Create Account Link */}
          <div className="mt-8 pt-8 border-t border-gray-50 text-center">
            <p className="text-gray-600 text-[11px] font-bold uppercase tracking-tight">
              Don't have an account? <Link to="/register" className="text-[#004a8e] hover:underline ml-1">Register as Student</Link>
            </p>
          </div>

          {/* Footer Icons */}
          <div className="mt-8 flex items-center justify-center gap-6 opacity-30">
            <div className="flex items-center gap-1.5 grayscale">
               <Shield size={12} className="text-[#004a8e]" />
               <span className="text-[8px] font-bold text-gray-700 uppercase tracking-widest">SSL Encrypted</span>
            </div>
            <div className="flex items-center gap-1.5 grayscale">
               <Globe size={12} className="text-[#004a8e]" />
               <span className="text-[8px] font-bold text-gray-700 uppercase tracking-widest">Global Standards</span>
            </div>
          </div>
        </motion.div>
      </div>

<<<<<<< HEAD
=======
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-[10px] uppercase font-bold">
            Don't have an account? <Link to="/register" className="text-cyan-500 hover:underline ml-1">Create one Today</Link>
          </p>
        </div>

        {/* System HUD element */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-20 pointer-events-none">
          <Terminal size={12} className="text-cyan-500" />
          <span className="text-[8px] font-mono text-cyan-500 uppercase tracking-widest">Secure_Layer_Active: v3.0</span>
        </div>
      </motion.div>
>>>>>>> fa8b9831cbc75daa64b98b0f1a0be2a4cf394940
    </div>
  );
};

export default LoginPage;