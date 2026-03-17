import { Shield, Github, Twitter, Linkedin, Mail, ArrowUpRight, Terminal, Activity, Globe } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate add kiya

const Footer = () => {
  const navigate = useNavigate(); // Navigation function

  return (
    <footer className="relative bg-[#02040a] pt-24 pb-12 px-8 border-t border-white/5 overflow-hidden">
      
      {/* 1. BACKGROUND DECOR */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 relative z-10">
        
        {/* BRAND SECTION */}
        <div className="md:col-span-5 space-y-8">
          <Link to="/" className="flex items-center gap-4 group/footer-logo">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/20 blur-lg rounded-full opacity-50 group-hover/footer-logo:opacity-100 transition-opacity"></div>
              <div className="relative w-14 h-14 rounded-full bg-[#11121d] p-[1px] border-2 border-cyan-500 overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover/footer-logo:border-white transition-all">
                <img 
                  src="/logo.png" 
                  alt="Crimex Intelligence"
                  className="w-full h-full object-contain rounded-full"
                  style={{ imageRendering: 'high-quality' }}
                />
              </div>
            </div>

            <div className="leading-none">
              <span className="font-black text-2xl tracking-tighter uppercase italic text-white block group-hover/footer-logo:text-cyan-400 transition-colors">
                CRIMEX <span className="text-cyan-500">INTELLIGENCE</span>
              </span>
              <div className="flex items-center gap-1.5 mt-2">
                 <Activity size={10} className="text-cyan-500 animate-pulse" />
                 <span className="text-[9px] font-mono text-cyan-500/60 tracking-[0.3em] font-bold uppercase">Secure_Node_v3.0</span>
              </div>
            </div>
          </Link>
          
          <p className="text-slate-400 text-lg leading-relaxed font-medium max-w-sm">
            Advancing the frontier of <span className="text-white">Forensic Science</span>. Join the elite network of investigation professionals.
          </p>

          <div className="flex gap-4">
            {[<Twitter size={18}/>, <Linkedin size={18}/>, <Github size={18}/>, <Mail size={18}/>].map((icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-slate-400 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-300">
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="md:col-span-2 space-y-6">
          <h4 className="text-cyan-500 font-mono text-[10px] uppercase tracking-[0.3em] font-bold">// Quick_Access</h4>
          <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest text-slate-500">
            {[
              { name: 'About Us', path: '/about' },
              { name: 'Our Services', path: '/services' },
              { name: 'Events', path: '/events' },
              { name: 'Members', path: '/members' }
            ].map((item) => (
              <li key={item.name}>
                <Link to={item.path} className="hover:text-cyan-400 flex items-center gap-2 transition-all duration-300 group">
                  <ArrowUpRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-500"/> 
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* INTELLIGENCE LINKS */}
        <div className="md:col-span-2 space-y-6">
          <h4 className="text-cyan-500 font-mono text-[10px] uppercase tracking-[0.3em] font-bold">// Intelligence</h4>
          <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest text-slate-500">
            {['Exam_Portal', 'Job_Alerts', 'Legal_Docs', 'Privacy_v2'].map((item) => (
              <li key={item} className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
                <div className="w-1 h-1 bg-cyan-900 rounded-full"></div> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* FIXED CONTACT CARD */}
        <div className="md:col-span-3">
          <div className="p-6 rounded-3xl bg-[#0d0d12] border border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `radial-gradient(#22d3ee 0.5px, transparent 0.5px)`, backgroundSize: '15px 15px' }}></div>
            
            <div className="relative z-10">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-500 mb-4">
                <Terminal size={16} />
              </div>
              <h4 className="font-bold text-white mb-2 uppercase tracking-tighter">Emergency Node</h4>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-6 leading-relaxed">
                Our command center is active 24/7 for forensic inquiries.
              </p>
              
              {/* Button logic updated to use navigate */}
              <button 
                onClick={() => navigate('/contact')}
                className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-black uppercase text-[10px] tracking-widest rounded-xl hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all active:scale-95 border border-white/10 cursor-pointer"
              >
                Contact Command
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT & SYSTEM METRICS */}
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
           <Globe size={12} className="text-cyan-900 animate-spin-slow" />
           <div className="text-[9px] font-mono text-slate-600 uppercase tracking-[0.5em]">
             © 2026 CRIMEX_INTELLIGENCE • [AES_256_ACTIVE]
           </div>
        </div>
        
        <div className="flex gap-8 text-[9px] font-mono text-cyan-900 uppercase tracking-[0.2em] font-bold">
          <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></div> SERVER_LUCKNOW</span>
          <span>LAT: 26.8467° N</span>
          <span>LONG: 80.9462° E</span>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}} />
    </footer>
  );
};

export default Footer;