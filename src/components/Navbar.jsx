import { useState } from 'react';
import { Menu, X, ChevronDown, Mail, BookOpen, Activity, Home, Briefcase, Calendar, Users, Shield, Phone } from 'lucide-react';
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
    { name: 'Members', path: '/members', icon: <Users size={18} /> },
    { name: 'About', path: '/about', hasDrop: true, icon: <Activity size={18} /> }
  ];

  return (
    <header className="fixed top-0 w-full z-[100]">
<<<<<<< HEAD
      {/* 1. SIFS STYLE INTELLIGENCE TICKER (Top Bar) - Restored with Professional Blue */}
      <div className="w-full bg-[#002d58] h-[30px] flex items-center overflow-hidden relative border-b border-white/10">
         <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-16 whitespace-nowrap px-10"
         >
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 text-[9px] font-black text-white uppercase tracking-[0.2em] italic">
                 <span className="flex items-center gap-2">
                    <Activity size={12} className="text-yellow-400" /> 
                    STATUS: <span className="text-yellow-400">OPERATIONAL</span>
                 </span>
                 <span className="opacity-40">//</span>
                 <span>ACTIVE_NODES: 1,429</span>
                 <span className="opacity-40">//</span>
                 <span>THREAT_LEVEL: <span className="text-blue-200">MINIMAL</span></span>
                 <span className="opacity-40">//</span>
                 <span>SUPPORT: +91 7303913002</span>
                 <span className="opacity-40">|</span>
              </div>
            ))}
         </motion.div>
         {/* Gradient Overlays */}
         <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#002d58] to-transparent pointer-events-none z-10"></div>
         <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#002d58] to-transparent pointer-events-none z-10"></div>
      </div>

      {/* 2. MAIN NAVIGATION (Restored with White/Blue Theme) */}
      <div className="bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg px-4 md:px-8">
        <div className="max-w-[1600px] mx-auto h-[75px] md:h-[85px] flex justify-between items-center relative">
=======
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
>>>>>>> fa8b9831cbc75daa64b98b0f1a0be2a4cf394940
        
        {/* LEFT: LOGO SECTION (Restored Logic with Blue Theme) */}
        <Link to="/" className="flex items-center gap-4 group shrink-0 relative">
          <div className="relative flex items-center justify-center scale-75 md:scale-90 lg:scale-100">
            {/* Ambient Background Glows - Changed to Blue */}
            <div className="absolute w-[100px] h-[100px] bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-700" />
            
            {/* Hexagonal / Faceted Glass Frame - Now Light Mode */}
            <div className="relative w-[70px] h-[70px] p-[2px] bg-gradient-to-br from-blue-200 via-white to-transparent rounded-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-xl">
              <div className="w-full h-full bg-white backdrop-blur-xl rounded-2xl flex items-center justify-center p-1 overflow-hidden relative border border-gray-100 group-hover:border-[#004a8e] transition-colors">
                <img 
                  src="/logo.png" 
                  alt="Crimex Logo" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 brightness-100" 
                />
                {/* Scanning line */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent h-1/2 w-full animate-scan pointer-events-none" />
              </div>
            </div>

            {/* Orbiting Bits */}
            <div className="absolute -inset-2 border border-blue-500/10 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none" />
          </div>
          
<<<<<<< HEAD
          {/* Branding Text */}
          <div className="hidden md:flex flex-col -space-y-1">
            <h1 className="text-[20px] md:text-[24px] font-black tracking-tighter uppercase italic leading-none">
              <span className="text-[#004a8e]">Crimex</span>
              <span className="ml-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Intelligence</span>
            </h1>
            <div className="flex items-center gap-2 opacity-60">
               <div className="h-[1px] w-6 bg-[#004a8e]"></div>
               <span className="text-[8px] font-mono font-bold tracking-[0.3em] text-[#004a8e] uppercase">Institutional_Hub // V.3.7</span>
=======
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
>>>>>>> fa8b9831cbc75daa64b98b0f1a0be2a4cf394940
            </div>
          </div>
        </Link>

        {/* CENTER: DESKTOP NAV (Pill Layout Restored) */}
        <nav className="hidden lg:flex items-center bg-gray-50 border border-gray-100 rounded-full px-4 py-2 gap-2">
          {navLinks.map((item) => (
            <div key={item.name} className="relative py-1" onMouseEnter={() => item.hasDrop && setActiveDropdown(item.name)} onMouseLeave={() => setActiveDropdown(null)}>
              <Link to={item.path} className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300
                  ${location.pathname === item.path ? 'text-[#004a8e]' : 'text-gray-700 hover:text-[#004a8e]'}`}>
                {item.icon}
                <span>{item.name}</span>
                {item.hasDrop && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />}
                {location.pathname === item.path && (
                  <motion.div layoutId="nav-pill" className="absolute inset-0 bg-blue-500/5 border border-blue-500/20 rounded-full -z-10" />
                )}
              </Link>

              {/* DROPDOWN (Restored Logic) */}
              <AnimatePresence>
                {item.hasDrop && activeDropdown === item.name && (
                  <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-2xl z-[110]">
                    <div className="flex flex-col p-2">
                      <Link to="/courses" className="flex items-center gap-3 p-3 text-[10px] font-bold text-gray-700 hover:text-[#004a8e] hover:bg-blue-50 rounded-xl transition-all uppercase tracking-wider group">
                        <BookOpen size={16} className="group-hover:text-[#004a8e]" /> Academy Portal
                      </Link>
                      <Link to="/contact" className="flex items-center gap-3 p-3 text-[10px] font-bold text-gray-700 hover:text-[#004a8e] hover:bg-blue-50 rounded-xl transition-all uppercase tracking-wider group">
                        <Mail size={16} className="group-hover:text-[#004a8e]" /> Contact Support
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* RIGHT: BUTTONS (Restored Logic) */}
        <div className="flex items-center gap-2 md:gap-3">
          <Link to="/login">
            <button className="bg-white border-2 border-[#004a8e] px-6 py-2.5 rounded-full text-[10px] font-black uppercase text-[#004a8e] hover:bg-[#004a8e] hover:text-white transition-all shadow-sm">
               Login Access
            </button>
          </Link>
          <Link to="/apply">
            <button className="bg-[#004a8e] px-6 py-2.5 rounded-full text-[10px] font-black uppercase text-white hover:bg-[#003366] transition-all shadow-lg shadow-blue-900/10">
               Apply Now
            </button>
          </Link>
          
          {/* MOBILE TOGGLE */}
          <button 
            className="lg:hidden text-gray-900 p-2.5 bg-gray-50 border border-gray-100 rounded-full hover:bg-blue-50 transition-all z-[120]" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} className="text-[#004a8e]" /> : <Menu size={22} />}
          </button>
        </div>

        {/* --- MOBILE SIDEBAR (Restored Logic) --- */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={closeMenu}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] lg:hidden"
              />
              
              <motion.div 
                initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-screen w-[280px] bg-white border-l border-gray-100 z-[105] p-8 flex flex-col shadow-2xl lg:hidden"
              >
                <div className="mt-16 space-y-6">
                  <p className="text-[#004a8e] font-mono text-[9px] tracking-[0.5em] uppercase border-b border-gray-50 pb-4 font-black">Institutional_Menu</p>
                  
                  <div className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <div key={link.name} className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <Link 
                            to={link.path} 
                            onClick={closeMenu}
                            className={`flex-grow flex items-center gap-4 p-4 rounded-l-2xl text-sm font-bold uppercase tracking-widest transition-all
<<<<<<< HEAD
                              ${location.pathname === link.path ? 'bg-blue-50 text-[#004a8e]' : 'text-gray-600 hover:bg-gray-50'}`}
=======
                              ${location.pathname === link.path ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
>>>>>>> fa8b9831cbc75daa64b98b0f1a0be2a4cf394940
                          >
                            {link.icon}
                            {link.name}
                          </Link>
<<<<<<< HEAD
                          {link.hasDrop && (
                            <button onClick={() => setMobileSubMenu(mobileSubMenu === link.name ? null : link.name)} className="p-4 bg-gray-50 rounded-r-2xl border-l border-white/5 transition-all">
                               <ChevronDown size={18} className={`${mobileSubMenu === link.name ? 'rotate-180' : ''} text-[#004a8e] transition-transform`} />
                            </button>
                          )}
                        </div>
                        {link.hasDrop && mobileSubMenu === link.name && (
                          <div className="pl-12 py-2 flex flex-col gap-3">
                             <Link to="/courses" onClick={closeMenu} className="text-xs font-bold text-gray-700 uppercase tracking-wider">Academy Portal</Link>
                             <Link to="/contact" onClick={closeMenu} className="text-xs font-bold text-gray-700 uppercase tracking-wider">Contact</Link>
                          </div>
                        )}
=======
                          
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
>>>>>>> fa8b9831cbc75daa64b98b0f1a0be2a4cf394940
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 flex flex-col gap-3 border-t border-gray-50">
                    <Link to="/login" onClick={closeMenu} className="w-full py-4 border-2 border-[#004a8e] rounded-2xl text-center text-[11px] font-black uppercase text-[#004a8e]">Login Access</Link>
                    <Link to="/apply" onClick={closeMenu} className="w-full py-4 bg-[#004a8e] rounded-2xl text-center text-[11px] font-black uppercase text-white">Apply Online</Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
     </div>
<<<<<<< HEAD
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan { 0% { top: -100%; } 100% { top: 100%; } }
        .animate-scan { animation: scan 3s linear infinite; }
      `}} />
=======
>>>>>>> fa8b9831cbc75daa64b98b0f1a0be2a4cf394940
    </header>
  );
};

export default Navbar;