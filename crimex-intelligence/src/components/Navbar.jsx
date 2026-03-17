import { useState } from 'react';
import { Shield, Menu, X, ChevronDown, Cpu, Lock, Terminal, Activity } from 'lucide-react';
import { Link } from 'react-router-dom'; // Link import kiya

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close mobile menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 w-full z-[100] px-6 py-4">
      {/* Glassmorphic Container */}
      <div className="max-w-7xl mx-auto bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3 flex justify-between items-center shadow-[0_0_30px_rgba(0,0,0,0.5)] relative group">
        
        {/* NEON BORDER GLOW (Subtle) */}
        <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

        {/* LOGO SECTION - Now clickable to Home */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group/logo cursor-pointer relative z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500 blur-md opacity-20 group-hover/logo:opacity-60 transition-opacity"></div>
            <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center border border-white/20 overflow-hidden">
              <Shield className="text-white" size={22} />
              {/* Scanline animation inside logo */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent h-full w-full animate-[scanline_2s_linear_infinite]"></div>
            </div>
          </div>
          <div className="leading-none">
            <h1 className="text-sm font-black tracking-tighter text-white uppercase italic">
              Cyber <span className="text-cyan-400">Shakti</span>
            </h1>
            <div className="flex items-center gap-1">
              <Activity size={8} className="text-cyan-500 animate-pulse" />
              <p className="text-[9px] font-mono text-cyan-500/60 uppercase tracking-widest">v3.0_Secure</p>
            </div>
          </div>
        </Link>

        {/* DESKTOP MENU - Using Link instead of <a> */}
        <div className="hidden lg:flex items-center gap-8">
          {[
            { name: 'Home', path: '/', icon: <Cpu size={14}/> },
            { name: 'Services', path: '/services', icon: <Terminal size={14}/>, hasDrop: true },
            { name: 'Events', path: '/events', icon: <Lock size={14}/> },
            { name: 'About', path: '/about', icon: <Shield size={14}/> }
          ].map((item) => (
            <Link 
              key={item.name}
              to={item.path} 
              className="group flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-cyan-400 transition-all relative py-2"
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-500">{item.icon}</span>
              {item.name}
              {item.hasDrop && <ChevronDown size={12} className="group-hover:rotate-180 transition-transform" />}
              {/* Hover Underline Effect */}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-500 group-hover:w-full transition-all shadow-[0_0_8px_#22d3ee]"></span>
            </Link>
          ))}
        </div>

        {/* AUTH BUTTONS */}
        <div className="flex items-center gap-4 relative z-10">
          <button className="hidden sm:block bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-2 rounded-xl text-[10px] font-bold uppercase tracking-tighter transition-all hover:text-cyan-400">
            Login
          </button>
          <Link to="/register">
            <button className="bg-gradient-to-r from-orange-600 to-pink-600 px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-tighter shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:scale-105 active:scale-95 transition-all">
              Register Now
            </button>
          </Link>
          
          {/* MOBILE TOGGLE */}
          <button className="lg:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY - Matrix Style */}
      {isOpen && (
        <div className="fixed inset-0 top-0 bg-[#00020a]/98 backdrop-blur-3xl z-[-1] p-8 pt-32 flex flex-col gap-8 lg:hidden animate-in fade-in slide-in-from-top-10 duration-500">
           <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `radial-gradient(#22d3ee 1px, transparent 1px)`, backgroundSize: '20px 20px' }}></div>
           
           {[
             { id: '01', name: 'HOME', path: '/' },
             { id: '02', name: 'SERVICES', path: '/services' },
             { id: '03', name: 'EVENTS', path: '/events' },
             { id: '04', name: 'ABOUT', path: '/about' }
           ].map((item) => (
             <Link 
               key={item.id}
               to={item.path} 
               onClick={closeMenu}
               className="group flex flex-col border-b border-white/5 pb-4"
             >
               <span className="text-[10px] font-mono text-cyan-500 mb-1">{item.id}</span>
               <span className="text-4xl font-black italic tracking-tighter group-hover:text-cyan-400 transition-colors uppercase">{item.name}</span>
             </Link>
           ))}

           <Link to="/register" onClick={closeMenu} className="mt-4">
             <button className="w-full bg-cyan-600 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm italic">
                Initialize_Registration
             </button>
           </Link>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}} />
    </nav>
  );
};

export default Navbar;