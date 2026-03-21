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
    { name: 'Services', path: '/services',  icon: <Briefcase size={18} /> },
    //{ name: 'Events', path: '/events', icon: <Calendar size={18} /> },
    { name: 'Members', path: '/members', icon: <Users size={18} /> },
    { name: 'About', path: '/about', hasDrop: true, icon: <Activity size={18} /> }
  ];

  return (
   <header className="fixed top-0 w-full z-[100] bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
  <div className="max-w-[1600px] mx-auto px-4 md:px-8 h-[75px] md:h-[90px] flex justify-between items-center relative">
        
        
        {/* LEFT: LOGO SECTION */}
        <Link to="/" className="flex items-center gap-3 md:gap-5 group shrink-0">
      <div className="relative flex items-center justify-center scale-75 md:scale-100">
        {/* Deep Glow behind logo */}
        <div className="absolute w-[80px] h-[80px] bg-yellow-500/10 rounded-full blur-2xl group-hover:bg-yellow-500/20 transition-all duration-500" />
        
        {/* Outer Animated Ring (Yellow) */}
        <div className="absolute w-[85px] h-[85px] border border-yellow-500/20 rounded-full animate-[spin_12s_linear_infinite]" />
        
        {/* Middle Spinning Ring (Yellow Glow) */}
        <div className="absolute w-[75px] h-[75px] border-t-2 border-yellow-400 rounded-full animate-spin shadow-[0_0_15px_rgba(234,179,8,0.4)]" />
        
        {/* Logo Container - Clean Transparent with Inversion for Visibility */}
        <div className="relative w-[65px] h-[65px] bg-transparent rounded-full p-1 z-10 overflow-hidden">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 invert brightness-200" 
            />
            {/* Subtle Scanning Line (Yellow) */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent h-1/4 w-full animate-scan opacity-40" />
        </div>
      </div>
      
      {/* Branding Text */}
      <div className="flex flex-col">
        <h1 className="text-[18px] md:text-[24px] font-black tracking-tighter uppercase italic">
          <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">Crimex</span>
          <span className="ml-1 text-blue-400 drop-shadow-[0_0_12px_rgba(234,179,8,0.4)]">Intelligence</span>
        </h1>
        <div className="h-[1px] w-0 group-hover:w-full bg-yellow-400 transition-all duration-500 shadow-[0_0_10px_#eab308]" />
      </div>
    </Link>

        {/* CENTER: DESKTOP NAV */}
        <nav className="hidden lg:flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-2 gap-2 backdrop-blur-md">
          {navLinks.map((item) => (
            <div key={item.name} className="relative py-1" onMouseEnter={() => item.hasDrop && setActiveDropdown(item.name)} onMouseLeave={() => setActiveDropdown(null)}>
              <Link to={item.path} className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300
                  ${location.pathname === item.path ? 'text-white' : 'text-gray-400 hover:text-yellow-400'}`}>
                {item.icon}
                <span>{item.name}</span>
                {item.hasDrop && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />}
                {location.pathname === item.path && (
                  <motion.div layoutId="nav-pill" className="absolute inset-0 bg-yellow-500/10 border border-yellow-500/30 rounded-full -z-10" />
                )}
              </Link>

              {/* DESKTOP DROPDOWN */}
              <AnimatePresence>
                {item.hasDrop && activeDropdown === item.name && (
                  <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-[#0a0b14] border border-yellow-500/30 rounded-2xl overflow-hidden shadow-2xl z-[110]">
                    <div className="flex flex-col p-2">
                      {item.name === 'Services' ? (
                        <Link to="/courses" className="flex items-center gap-3 p-3 text-[10px] font-bold text-gray-400 hover:text-white hover:bg-yellow-500/10 rounded-xl transition-all uppercase tracking-wider group">
                          <BookOpen size={16} className="group-hover:text-yellow-400" /> Academy Portal
                        </Link>
                      ) : (
                        <Link to="/contact" className="flex items-center gap-3 p-3 text-[10px] font-bold text-gray-400 hover:text-white hover:bg-yellow-500/10 rounded-xl transition-all uppercase tracking-wider group">
                          <Mail size={16} className="group-hover:text-yellow-400" /> contact
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
          {/* <Link to="/register" className="hidden md:block">
            <button className="bg-gradient-to-r from-[#ff4d00] to-[#ff006e] px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white hover:scale-105 transition-all">Registration</button>
          </Link> */}
          
          {/* Login Button: Fixed (Removed 'xs' and made visible on desktop) */}
          <Link to="/login">
            <button className="bg-[#00f2ea] px-6 py-2.5 rounded-full text-[10px] font-black uppercase text-black hover:brightness-110 flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(0,242,234,0.3)]">
               Login <Activity size={14} className="hidden sm:block" />
            </button>
          </Link>
          
          {/* MOBILE TOGGLE BUTTON */}
          <button 
            className="lg:hidden text-white p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-yellow-500/10 transition-all z-[120]" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} className="text-yellow-400" /> : <Menu size={22} />}
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
                  <p className="text-yellow-400 font-mono text-[9px] tracking-[0.5em] uppercase border-b border-white/5 pb-4 font-black">Control_Panel</p>
                  
                  <div className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <Link 
                        key={link.name} 
                        to={link.path} 
                        onClick={closeMenu}
                        className={`flex items-center gap-4 p-4 rounded-2xl text-sm font-bold uppercase tracking-widest transition-all
                          ${location.pathname === link.path ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                      >
                        {link.icon}
                        {link.name}
                      </Link>
                    ))}
                  </div>

                  <div className="pt-6 flex flex-col gap-3 border-t border-black/5">
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