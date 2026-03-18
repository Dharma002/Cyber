import { useState } from 'react';
import { Menu, X, ChevronDown, Mail, BookOpen, Activity, Home, Briefcase, Calendar, Users } from 'lucide-react';
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
    { name: 'About', path: '/about', hasDrop: true, icon: <Activity size={18} /> }
  ];

  return (
    <header className="fixed top-0 w-full z-[100] bg-[#05060b]/95 backdrop-blur-md border-b border-cyan-500/10 font-sans">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 h-[80px] md:h-[105px] flex justify-between items-center relative">
        
        {/* LEFT: LOGO SECTION */}
        <Link to="/" className="flex items-center gap-2 md:gap-5 group shrink-0">
          <div className="relative flex items-center justify-center scale-75 md:scale-100">
            <div className="absolute w-[85px] h-[85px] border border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute w-[75px] h-[75px] border-t-2 border-cyan-500 rounded-full animate-spin" />
            <div className="relative w-[65px] h-[65px] bg-black rounded-full p-1 z-10 border border-white/10 shadow-[0_0_30px_rgba(0,242,234,0.3)] overflow-hidden">
               <img src="/logo.png" alt="Logo" className="w-full h-full object-contain rounded-full transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent h-1/4 w-full animate-scan" />
            </div>
          </div>
          <h1 className="text-[14px] md:text-[18px] font-[1000] tracking-tighter uppercase">
              <span className="text-white">Crimex</span>
              <span className="ml-1 text-[#00f2ea] ">Intelligence</span>
            </h1>
        </Link>

        {/* CENTER: DESKTOP NAV */}
        <nav className="hidden lg:flex items-center bg-white/[0.03] border border-white/10 rounded-full px-3 py-1.5 gap-1">
          {navLinks.map((item) => (
            <div key={item.name} className="relative py-2" onMouseEnter={() => item.hasDrop && setActiveDropdown(item.name)} onMouseLeave={() => setActiveDropdown(null)}>
              <Link to={item.path} className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full text-[10px] xl:text-[11px] font-black uppercase tracking-[0.1em] transition-all duration-300
                  ${location.pathname === item.path ? 'text-white' : 'text-gray-400 hover:text-cyan-400'}`}>
                {item.icon}
                <span>{item.name}</span>
                {item.hasDrop && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />}
                {location.pathname === item.path && (
                  <motion.div layoutId="nav-pill" className="absolute inset-0 bg-cyan-500/10 border border-cyan-500/30 rounded-full -z-10" />
                )}
              </Link>

              {/* DESKTOP DROPDOWN */}
              <AnimatePresence>
                {item.hasDrop && activeDropdown === item.name && (
                  <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-[#0a0b14] border border-cyan-500/30 rounded-2xl overflow-hidden shadow-2xl z-[110]">
                    <div className="flex flex-col p-2">
                      {item.name === 'Services' ? (
                        <Link to="/courses" className="flex items-center gap-3 p-3 text-[10px] font-bold text-gray-400 hover:text-white hover:bg-cyan-500/10 rounded-xl transition-all uppercase tracking-wider group">
                          <BookOpen size={16} className="group-hover:text-cyan-400" /> Academy Portal
                        </Link>
                      ) : (
                        <Link to="/contact" className="flex items-center gap-3 p-3 text-[10px] font-bold text-gray-400 hover:text-white hover:bg-cyan-500/10 rounded-xl transition-all uppercase tracking-wider group">
                          <Mail size={16} className="group-hover:text-cyan-400" /> Security Hub
                        </Link>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

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
    </header>
  );
};

export default Navbar;