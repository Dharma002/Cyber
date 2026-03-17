import { useState } from 'react';
import { Menu, X, ChevronDown, Mail, Book, Briefcase, Activity } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services', hasDrop: true },
    { name: 'Events', path: '/events' },
    { name: 'Members', path: '/members' },
    { name: 'About', path: '/about', hasDrop: true }
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] px-4 md:px-6 py-4">
      {/* Capsule Layout for Navbar container - Optimized Spacing */}
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-[#0a0b14]/90 backdrop-blur-3xl border border-white/10 rounded-full px-5 py-2.5 md:py-1 shadow-[0_15px_60px_rgba(0,0,0,0.9)] relative">
        
        {/* --- LEFT: ORIGINAL EMBEM LOGO + TEXT (SETTING THE BEST LOOK) --- */}
        <Link to="/" className="flex items-center gap-3.5 z-10 group/logo">
          <div className="relative">
            {/* Soft Glowing Effect behind Emblem for premium feel */}
            <div className="absolute inset-0 bg-cyan-500/10 blur-xl opacity-30 group-hover/logo:opacity-50 transition-opacity rounded-full"></div>
            
            {/* Logo Image Container - Precision Fitting for Emblem */}
            <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#11121d] flex items-center justify-center p-[2px] border-2 border-cyan-500 group-hover/logo:border-white transition-all duration-300">
              <img 
                src="/logo.png" // <-- Aap apni is photo wali image ko public folder me 'logo.png' naam se rakhein
                alt="Crimex Intelligence Emblem"
                // 'object-contain' emblem ko crop nahi karega, pure logo ko box me dikhayega
                className="w-full h-full object-contain rounded-full transition-all group-hover/logo:scale-105" 
                // Enhanced image rendering for clarity
                style={{ imageRendering: 'high-quality' }}
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/150x150/FFFFFF/22D3EE?text=EMBLEM";
                }}
              />
            </div>
          </div>

          {/* Optimized Text Section to align perfectly with Emblem */}
          <div className="flex flex-col leading-none ml-0.5">
            <h1 className="text-[15px] md:text-[18px] font-[1000] tracking-tighter uppercase group-hover/logo:scale-105 transition-transform duration-300">
              <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Crimex
              </span>
              <span className="ml-1 text-[#00f2ea] italic drop-shadow-[0_0_12px_rgba(0,242,234,0.9)] brightness-125">
                Intelligence
              </span>
            </h1>
            
            <div className="flex items-center gap-1.5 mt-1.5 opacity-90">
              <Activity size={12} className="text-cyan-500 animate-pulse" />
              <p className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-[0.25em]">
                Secure_Node_v3.0 // ACTIVE
              </p>
            </div>
          </div>
        </Link>

        {/* --- CENTER: NAV LINKS --- */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((item) => {
            const isActivePage = location.pathname === item.path;
            
            return (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => item.hasDrop && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  to={item.path}
                  className={`flex items-center gap-1.5 px-6 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-widest transition-all duration-300
                    ${isActivePage
                      ? 'bg-[#4f46e5] text-white shadow-[0_0_25px_rgba(79,70,229,0.7)]' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                >
                  {item.name}
                  {item.hasDrop && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180 text-cyan-400' : ''}`} />}
                </Link>

                {/* --- MODERN VERTICAL DROPDOWN --- */}
                {item.hasDrop && activeDropdown === item.name && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 bg-[#0f101a]/95 backdrop-blur-3xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.9)] animate-in fade-in slide-in-from-top-2 duration-300 z-20">
                    <div className="flex flex-col p-2.5">
                        <Link to="/contact" className="flex items-center gap-3.5 p-3.5 text-[11px] font-bold text-gray-400 hover:text-[#00f2ea] hover:bg-cyan-500/10 rounded-xl transition-all">
                          <Mail size={16} /> Contact_Hub
                        </Link>
                        <Link to="/chapters" className="flex items-center gap-3.5 p-3.5 text-[11px] font-bold text-gray-400 hover:text-[#00f2ea] hover:bg-cyan-500/10 rounded-xl transition-all">
                          <Book size={16} /> System_Chapters
                        </Link>
                        <Link to="/career" className="flex items-center gap-3.5 p-3.5 text-[11px] font-bold text-gray-400 hover:text-[#00f2ea] hover:bg-cyan-500/10 rounded-xl transition-all">
                          <Briefcase size={16} /> Career_Port
                        </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* --- RIGHT: AUTH BUTTONS --- */}
        <div className="flex items-center gap-3">
          <Link to="/register">
            <button className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#ff4d00] to-[#ff006e] px-7 py-3 rounded-full text-[11px] font-black uppercase tracking-widest text-white shadow-[0_5px_20px_rgba(255,0,110,0.5)] hover:scale-105 active:scale-95 transition-all">
               Registration
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-[#00f2ea] px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest text-black shadow-[0_5px_20px_rgba(0,242,234,0.5)] hover:brightness-110 flex items-center gap-2 transition-all active:scale-95">
              Login <Activity size={16} />
            </button>
          </Link>
          
          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white p-2.5 bg-white/5 rounded-full hover:bg-white/10" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE OVERLAY MENU --- */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-[#0a0b14]/98 backdrop-blur-2xl z-[100] p-10 flex flex-col gap-8 animate-in fade-in slide-in-from-top-5 duration-500 overflow-y-auto">
            <div className="flex justify-between items-center mb-12 border-b border-white/10 pb-6">
                <div className="flex items-center gap-3">
                  <img src="/logo.png" alt="Crimex Emblem" className="w-10 h-10 rounded-full"/>
                  <span className="text-white font-black tracking-tighter uppercase text-lg">Crimex Intel</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-3 bg-white/5 rounded-full text-white"><X size={26} /></button>
            </div>
            
            {navLinks.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  onClick={closeMenu} 
                  className="text-4xl md:text-5xl font-black italic uppercase text-gray-500 hover:text-[#00f2ea] transition-colors flex items-center justify-between group"
                >
                    {item.name} <span className="text-[12px] opacity-0 group-hover:opacity-100 font-mono tracking-tighter text-cyan-500 transition-opacity">Access_granted {">>>"}</span>
                </Link>
            ))}

            <div className="mt-auto pt-10 border-t border-white/10 flex flex-col sm:flex-row gap-4">
              <Link to="/register" onClick={closeMenu} className="w-full">
                <button className="w-full bg-gradient-to-r from-[#ff4d00] to-[#ff006e] py-5 rounded-xl font-black uppercase tracking-widest text-white text-sm">Register</button>
              </Link>
              <Link to="/login" onClick={closeMenu} className="w-full">
                <button className="w-full bg-[#00f2ea] py-5 rounded-xl font-black uppercase tracking-widest text-black text-sm">Login</button>
              </Link>
            </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;