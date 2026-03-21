import { useState } from 'react';
import { Menu, X, ChevronDown, Mail, BookOpen, Activity, Home, Briefcase, Calendar, Users } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);
  const location = useLocation();

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileSubMenu(null);
  };

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'Departments', path: '/departments', icon: <Calendar size={18} /> },
    { name: 'Services', path: '/services',  icon: <Briefcase size={18} /> },
    //{ name: 'Events', path: '/events', icon: <Calendar size={18} /> },
    { name: 'Members', path: '/members', icon: <Users size={18} /> },
    { name: 'About', path: '/about', hasDrop: true, icon: <Activity size={18} /> }
  ];

  return (
    <header className="fixed top-0 w-full z-[100]">
      {/* 1. MISSION INTELLIGENCE TICKER (Top Bar) */}
      <div className="w-full bg-cyan-500 h-[28px] flex items-center overflow-hidden relative border-b border-black/20">
         <motion.div 
           animate={{ x: [0, -1000] }}
           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
           className="flex items-center gap-16 whitespace-nowrap px-10"
         >
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 text-[9px] font-black text-black uppercase tracking-[0.2em] italic">
                 <span className="flex items-center gap-2"><Activity size={12} /> STATUS: <span className="text-white bg-black px-1.5 rounded">OPERATIONAL</span></span>
                 <span className="opacity-40">//</span>
                 <span>ACTIVE_NODES: 1,429</span>
                 <span className="opacity-40">//</span>
                 <span>THREAT_LEVEL: <span className="text-blue-900">MINIMAL</span></span>
                 <span className="opacity-40">//</span>
                 <span>SECURE_LATENCY: 24MS</span>
                 <span className="opacity-40 cursor-default">|</span>
              </div>
            ))}
         </motion.div>
         {/* Gradient Overlays for smooth edges */}
         <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-cyan-500 to-transparent pointer-events-none z-10"></div>
         <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-cyan-500 to-transparent pointer-events-none z-10"></div>
      </div>

      {/* 2. MAIN NAVIGATION (Redesigned with Ticker Support) */}
      <div className="bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.8)] px-4 md:px-8">
        <div className="max-w-[1600px] mx-auto h-[75px] md:h-[80px] flex justify-between items-center relative">
        
        
        {/* LEFT: LOGO SECTION (Redesigned) */}
        <Link to="/" className="flex items-center gap-4 group shrink-0 relative">
          <div className="relative flex items-center justify-center scale-75 md:scale-90 lg:scale-100">
            {/* Ambient Background Glows */}
            <div className="absolute w-[100px] h-[100px] bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-700" />
            <div className="absolute w-[80px] h-[80px] bg-blue-600/5 rounded-full blur-2xl group-hover:bg-blue-600/15 transition-all duration-700 delay-100" />
            
            {/* Hexagonal / Faceted Glass Frame */}
            <div className="relative w-[70px] h-[70px] p-[2px] bg-gradient-to-br from-white/20 via-white/5 to-transparent rounded-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-2xl">
              <div className="w-full h-full bg-[#0a0c12]/90 backdrop-blur-xl rounded-2xl flex items-center justify-center p-1 overflow-hidden relative border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                {/* Logo Image with enhanced blending */}
                <img 
                  src="/logo.png" 
                  alt="Crimex Logo" 
                  className="w-full h-full object-contain mix-blend-lighten brightness-110 group-hover:scale-110 transition-transform duration-700 contrast-125" 
                />
                
                {/* Scanning line for the logo box */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent h-1/2 w-full animate-scan pointer-events-none" />
              </div>
            </div>

            {/* Orbiting Tech Bits */}
            <div className="absolute -inset-2 border border-cyan-500/10 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none" />
            <div className="absolute -inset-4 border border-blue-500/5 rounded-full animate-[spin_30s_linear_infinite_reverse] pointer-events-none" />
          </div>
          
          <div className="hidden md:flex flex-col -space-y-1">
            <div className="flex items-center gap-2">
              <div className="text-[20px] md:text-[24px] font-black tracking-tighter uppercase italic leading-none whitespace-nowrap">
                <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">Crimex</span>
                <span className="ml-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">Intelligence</span>
              </div>
            </div>
            <div className="flex items-center gap-2 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
               <div className="h-[1px] w-6 bg-cyan-500/50"></div>
               <span className="text-[8px] font-mono font-bold tracking-[0.3em] text-cyan-600 uppercase">Archive_Node // V.3.7</span>
            </div>
          </div>
        </Link>

        {/* CENTER: DESKTOP NAV */}
        <nav className="hidden lg:flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-2 gap-2 backdrop-blur-md">
          {navLinks.map((item) => (
            <div key={item.name} className="relative py-1" onMouseEnter={() => item.hasDrop && setActiveDropdown(item.name)} onMouseLeave={() => setActiveDropdown(null)}>
              <Link to={item.path} className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300
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
                          <Mail size={16} className="group-hover:text-cyan-400" /> contact
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
            className="lg:hidden text-white p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-cyan-500/10 transition-all z-[120]" 
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
                  <p className="text-cyan-400 font-mono text-[9px] tracking-[0.5em] uppercase border-b border-white/5 pb-4 font-black">Control_Panel</p>
                  
                  <div className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <div key={link.name} className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <Link 
                            to={link.path} 
                            onClick={closeMenu}
                            className={`flex-grow flex items-center gap-4 p-4 rounded-l-2xl text-sm font-bold uppercase tracking-widest transition-all
                              ${location.pathname === link.path ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                          >
                            {link.icon}
                            {link.name}
                          </Link>
                          
                          {link.hasDrop && (
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                setMobileSubMenu(mobileSubMenu === link.name ? null : link.name);
                              }}
                              className={`p-4 rounded-r-2xl border-l border-white/5 transition-all
                                ${mobileSubMenu === link.name ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-500 bg-white/5'}`}
                            >
                               <ChevronDown size={18} className={`transition-transform duration-300 ${mobileSubMenu === link.name ? 'rotate-180' : ''}`} />
                            </button>
                          )}
                        </div>
                        
                        {/* MOBILE SUB-MENU (Accordion) */}
                        <AnimatePresence>
                          {link.hasDrop && mobileSubMenu === link.name && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden flex flex-col pl-12 gap-1 mt-2 mb-4"
                            >
                              {link.name === 'Services' ? (
                                <Link to="/courses" onClick={closeMenu} className="flex items-center gap-3 p-3 text-[10px] font-bold text-gray-500 hover:text-cyan-400 transition-all uppercase tracking-wider">
                                  <BookOpen size={14} /> Academy Portal
                                </Link>
                              ) : (
                                <Link to="/contact" onClick={closeMenu} className="flex items-center gap-3 p-3 text-[10px] font-bold text-gray-500 hover:text-cyan-400 transition-all uppercase tracking-wider">
                                  <Mail size={14} /> Contact
                                </Link>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
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
     </div>
    </header>
  );
};

export default Navbar;