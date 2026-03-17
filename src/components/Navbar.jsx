import { useState } from 'react';
import { Menu, X, ChevronDown, Mail, Book, Briefcase, Activity, BookOpen, ShieldCheck, Home, Users, Calendar } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'Services', path: '/services', hasDrop: true, icon: <Briefcase size={18} /> },
    { name: 'Events', path: '/events', icon: <Calendar size={18} /> },
    { name: 'Members', path: '/members', icon: <Users size={18} /> },
    { name: 'About', path: '/about',   }
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] px-4 md:px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-[#0a0b14]/90 backdrop-blur-3xl border border-white/10 rounded-full px-5 py-2.5 md:py-1 shadow-[0_15px_60px_rgba(0,0,0,0.9)] relative">
        
        {/* LEFT: LOGO */}
        <Link to="/" className="flex items-center gap-3.5 z-[110] group/logo">
          <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#11121d] border-2 border-cyan-500 overflow-hidden shrink-0">
            <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col leading-none">
            <h1 className="text-[14px] md:text-[18px] font-[1000] tracking-tighter uppercase">
              <span className="text-white">Crimex</span>
              <span className="ml-1 text-[#00f2ea] ">Intelligence</span>
            </h1>
            {/* Desktop and Small Devices Indicator */}
            <div className="hidden sm:flex items-center gap-1 mt-1 opacity-80">
              <Activity size={10} className="text-cyan-500 animate-pulse" />
              <p className="text-[8px] font-mono text-cyan-400 font-bold uppercase tracking-widest">v3.0_Secure</p>
            </div>
          </div>
        </Link>

        {/* CENTER: DESKTOP NAV LINKS */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((item) => (
            <div 
              key={item.name} 
              className="relative py-4"
              onMouseEnter={() => item.hasDrop && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to={item.path}
                className={`flex items-center gap-1.5 px-6 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-widest transition-all duration-300
                  ${location.pathname === item.path ? 'bg-[#4f46e5] text-white shadow-[0_0_25px_rgba(79,70,229,0.7)]' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}
              >
                {item.name}
                {item.hasDrop && <ChevronDown size={14} className={`transition-transform ${activeDropdown === item.name ? 'rotate-180 text-cyan-400' : ''}`} />}
              </Link>

              <AnimatePresence>
                {item.hasDrop && activeDropdown === item.name && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                    className="absolute top-[80%] left-1/2 -translate-x-1/2 mt-2 w-56 bg-[#0f101a]/98 backdrop-blur-3xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-[110]"
                  >
                    <div className="flex flex-col p-2">
                      <Link to="/contact" onClick={closeMenu} className="flex items-center gap-3.5 p-3.5 text-[11px] font-bold text-gray-400 hover:text-[#00f2ea] hover:bg-cyan-500/10 rounded-xl transition-all">
                        <Mail size={16} /> Contact_Hub
                      </Link>
                      <Link to="/courses" onClick={closeMenu} className="flex items-center gap-3.5 p-3.5 text-[11px] font-bold text-gray-400 hover:text-[#00f2ea] hover:bg-cyan-500/10 rounded-xl transition-all">
                        <BookOpen size={16} /> Courses_Portal
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* RIGHT: BUTTONS & MOBILE TOGGLE */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Registration: Hidden on Mobile, Visible on Desktop */}
          <Link to="/register" className="hidden md:block">
            <button className="bg-gradient-to-r from-[#ff4d00] to-[#ff006e] px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white hover:scale-105 transition-all">Registration</button>
          </Link>
          
          {/* Login Button: Fixed (Removed 'xs' and made visible on desktop) */}
          <Link to="/login">
            <button className="bg-[#00f2ea] px-6 py-2.5 rounded-full text-[10px] font-black uppercase text-black hover:brightness-110 flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(0,242,234,0.3)]">
               Login <Activity size={14} className="hidden sm:block" />
            </button>
          </Link>
          
          {/* MOBILE TOGGLE BUTTON */}
          <button 
            className="lg:hidden text-white p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-cyan-500/20 transition-all z-[120]" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} className="text-cyan-400" /> : <Menu size={22} />}
          </button>
        </div>

        {/* --- MOBILE SIDEBAR DASHBOARD --- */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={closeMenu}
                className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] lg:hidden"
              />
              
              <motion.div 
                initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-screen w-[280px] bg-[#0a0b14] border-l border-white/10 z-[105] p-8 flex flex-col shadow-[-20px_0_50px_rgba(0,0,0,0.8)] lg:hidden"
              >
                <div className="mt-16 space-y-6">
                  <p className="text-cyan-500 font-mono text-[9px] tracking-[0.5em] uppercase border-b border-white/5 pb-4 font-black">Control_Panel</p>
                  
                  <div className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <Link 
                        key={link.name} 
                        to={link.path} 
                        onClick={closeMenu}
                        className={`flex items-center gap-4 p-4 rounded-2xl text-sm font-bold uppercase tracking-widest transition-all
                          ${location.pathname === link.path ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                      >
                        {link.icon}
                        {link.name}
                      </Link>
                    ))}
                  </div>

                  <div className="pt-6 flex flex-col gap-3 border-t border-white/5">
                    <Link to="/register" onClick={closeMenu} className="w-full py-4 bg-gradient-to-r from-[#ff4d00] to-[#ff006e] rounded-2xl text-center text-[11px] font-black uppercase tracking-widest text-white">Registration</Link>
                    <Link to="/login" onClick={closeMenu} className="w-full py-4 bg-[#00f2ea] rounded-2xl text-center text-[11px] font-black uppercase text-black">Login Access</Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;