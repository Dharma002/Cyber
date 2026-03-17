import { useState } from 'react';
import { Menu, X, ChevronDown, Mail, Book, Briefcase, Activity, BookOpen } from 'lucide-react';
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
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services', hasDrop: true },
    { name: 'Events', path: '/events' },
    { name: 'Members', path: '/members' },
    { name: 'About', path: '/about', hasDrop: true }
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] px-4 md:px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-[#0a0b14]/90 backdrop-blur-3xl border border-white/10 rounded-full px-5 py-2.5 md:py-1 shadow-[0_15px_60px_rgba(0,0,0,0.9)] relative">
        
        {/* LEFT: LOGO */}
        <Link to="/" className="flex items-center gap-3.5 z-10 group/logo">
          <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#11121d] border-2 border-cyan-500 overflow-hidden">
            <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col leading-none ml-0.5">
            <h1 className="text-[15px] md:text-[18px] font-[1000] tracking-tighter uppercase">
              <span className="text-white">Crimex</span>
              <span className="ml-1 text-[#00f2ea] italic">Intelligence</span>
            </h1>
            <div className="flex items-center gap-1.5 mt-1.5 opacity-90">
              <Activity size={12} className="text-cyan-500 animate-pulse" />
              <p className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-[0.25em]">Secure_Node_v3.0</p>
            </div>
          </div>
        </Link>

        {/* CENTER: NAV LINKS */}
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
                      {/* Services Specific Links */}
                      {item.name === 'Services' && (
                        <Link to="/courses" onClick={closeMenu} className="flex items-center gap-3.5 p-3.5 text-[11px] font-bold text-gray-400 hover:text-[#00f2ea] hover:bg-cyan-500/10 rounded-xl transition-all">
                          <BookOpen size={16} /> Courses_Portal
                        </Link>
                      )}
                      
                      {/* Common or About Links */}
                      <Link to="/contact" onClick={closeMenu} className="flex items-center gap-3.5 p-3.5 text-[11px] font-bold text-gray-400 hover:text-[#00f2ea] hover:bg-cyan-500/10 rounded-xl transition-all">
                        <Mail size={16} /> Contact_Hub
                      </Link>
                      <Link to="/chapters" onClick={closeMenu} className="flex items-center gap-3.5 p-3.5 text-[11px] font-bold text-gray-400 hover:text-[#00f2ea] hover:bg-cyan-500/10 rounded-xl transition-all">
                        <Book size={16} /> System_Chapters
                      </Link>
                      <Link to="/career" onClick={closeMenu} className="flex items-center gap-3.5 p-3.5 text-[11px] font-bold text-gray-400 hover:text-[#00f2ea] hover:bg-cyan-500/10 rounded-xl transition-all">
                        <Briefcase size={16} /> Career_Port
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* RIGHT: BUTTONS */}
        <div className="flex items-center gap-3">
          <Link to="/register"><button className="hidden sm:flex bg-gradient-to-r from-[#ff4d00] to-[#ff006e] px-7 py-3 rounded-full text-[11px] font-black uppercase tracking-widest text-white shadow-lg hover:scale-105 transition-all">Registration</button></Link>
          <Link to="/login"><button className="bg-[#00f2ea] px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest text-black shadow-lg hover:brightness-110 flex items-center gap-2 transition-all">Login <Activity size={16} /></button></Link>
          <button className="lg:hidden text-white p-2.5 bg-white/5 rounded-full" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;