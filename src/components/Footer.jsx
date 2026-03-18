import { Shield, Linkedin, Mail, ArrowUpRight, Terminal, Activity, Globe, MessageCircle, Instagram, Check } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const Footer = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const emailAddress = "info@cybershaktifoundation.org";

  // WhatsApp Redirect
  const openWhatsApp = (e) => {
    e.preventDefault();
    window.open("https://wa.me/919958214909", "_blank", "noopener,noreferrer");
  };

  // Improved Mail Function (Copy + Open)
  const handleEmailClick = (e) => {
    e.preventDefault();
    // 1. Try to open email client
    window.location.href = `mailto:${emailAddress}`;
    
    // 2. Fallback: Copy to clipboard
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="relative bg-[#02040a] pt-24 pb-12 px-8 border-t border-white/5 overflow-hidden">
      
      {/* BACKGROUND DECOR */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 relative z-10">
        
        {/* BRAND SECTION */}
        <div className="md:col-span-5 space-y-8">
          <Link to="/" className="inline-flex items-center gap-4 group/footer-logo">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/20 blur-lg rounded-full opacity-50 group-hover/footer-logo:opacity-100 transition-opacity"></div>
              <div className="relative w-16 h-16 rounded-full bg-[#05070a] p-[2px] border border-cyan-500/50 group-hover/footer-logo:border-cyan-400 transition-all duration-500 shadow-2xl">
                <img 
                  src="/logo.png" 
                  alt="Crimex Intelligence"
                  className="w-full h-full object-contain rounded-full p-1"
                  onError={(e) => { e.target.src = "https://cdn-icons-png.flaticon.com/512/2092/2092663.png" }}
                />
              </div>
            </div>

            <div className="leading-tight">
              <span className="font-black text-2xl tracking-tighter uppercase italic text-white block group-hover/footer-logo:text-cyan-400 transition-colors">
                CRIMEX <span className="text-cyan-500">INTEL</span>
              </span>
            </div>
          </Link>
          
          <p className="text-slate-400 text-lg leading-relaxed font-medium max-w-sm">
            Advancing the frontier of <span className="text-white">Forensic Science</span>. Join the elite network of investigation professionals and digital defenders.
          </p>

          {/* SOCIAL LINKS */}
          <div className="flex gap-4">
            <button 
              onClick={openWhatsApp} 
              className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-slate-400 hover:border-[#25D366] hover:text-[#25D366] hover:bg-[#25D366]/5 hover:-translate-y-1 transition-all duration-300"
              title="WhatsApp Support"
            >
              <MessageCircle size={20}/>
            </button>

            <a 
              href="https://linkedin.com/company/Anmol Kumar" 
              target="_blank" rel="noopener noreferrer" 
              className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-slate-400 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-500/5 hover:-translate-y-1 transition-all duration-300"
            >
              <Linkedin size={20}/>
            </a>

            <a 
              href="https://instagram.com/anmolkumar_techlab" 
              target="_blank" rel="noopener noreferrer" 
              className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-slate-400 hover:border-pink-500/50 hover:text-pink-500 hover:bg-pink-500/5 hover:-translate-y-1 transition-all duration-300"
            >
              <Instagram size={20}/>
            </a>

            {/* FIXED MAIL BUTTON */}
            <button 
              onClick={handleEmailClick}
              className="relative w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-slate-400 hover:border-red-500/50 hover:text-red-500 hover:bg-red-500/5 hover:-translate-y-1 transition-all duration-300"
            >
              {copied ? <Check size={20} className="text-green-500" /> : <Mail size={20}/>}
              {copied && (
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[10px] py-1 px-2 rounded font-bold uppercase tracking-widest">Copied!</span>
              )}
            </button>
          </div>
        </div>

        {/* QUICK ACCESS */}
        <div className="md:col-span-2 space-y-6">
          <h4 className="text-cyan-500 font-mono text-[10px] uppercase tracking-[0.4em] font-bold">// Navigation</h4>
          <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest text-slate-500">
            {[{ name: 'About Us', path: '/about' }, { name: 'Services', path: '/services' }, { name: 'Events', path: '/events' }, { name: 'Members', path: '/members' }].map((item) => (
              <li key={item.name}>
                <Link to={item.path} className="hover:text-cyan-400 flex items-center gap-2 transition-all duration-300 group">
                  <ArrowUpRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-500"/> 
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* PORTALS */}
        <div className="md:col-span-2 space-y-6">
          <h4 className="text-cyan-500 font-mono text-[10px] uppercase tracking-[0.4em] font-bold">// Portals</h4>
          <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest text-slate-500">
            {[{ name: 'Training Portal', path: '/training' }, { name: 'Case Studies', path: '/cases' }, { name: 'Legal Docs', path: '/legal' }, { name: 'Privacy Policy', path: '/privacy' }].map((item) => (
              <li key={item.name}>
                <Link to={item.path} className="hover:text-white flex items-center gap-2 transition-all duration-300 group">
                   <div className="w-1 h-1 bg-cyan-900 rounded-full group-hover:bg-cyan-400 transition-colors"></div>
                   {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COMMAND CARD */}
        <div className="md:col-span-3">
          <div className="p-8 rounded-[2rem] bg-[#0d0d12] border border-white/5 relative overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 mb-6 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-500">
                <Terminal size={18} />
              </div>
              <h4 className="font-bold text-lg text-white mb-3 uppercase tracking-tighter italic">Command Center</h4>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-8 leading-relaxed font-medium">
                Our support node is active 24/7 for forensic inquiries and urgent consultations.
              </p>
              <button 
                onClick={() => navigate('/contact')}
                className="w-full py-4 bg-white text-black font-black uppercase text-[10px] tracking-[0.2em] rounded-xl hover:bg-cyan-400 transition-all duration-300 active:scale-95 shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
              >
                Launch Connection
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SYSTEM METRICS FOOTER */}
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
           <Globe size={14} className="text-cyan-900 animate-spin-slow" />
           <div className="text-[9px] font-mono text-slate-600 uppercase tracking-[0.5em] font-bold">
             © 2026 CRIMEX_INTELLIGENCE // AUTH_REQUIRED
           </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}} />
    </footer>
  );
};

export default Footer;