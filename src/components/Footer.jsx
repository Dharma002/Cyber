import { Shield, Linkedin, Mail, ArrowRight, Activity, Phone, Globe, MessageCircle, Instagram, MapPin, Facebook, Youtube, Home, Calendar, Briefcase, Users } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

const Footer = () => {
  const navigate = useNavigate();

  // Navbar se synced links
  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={14} /> },
    { name: 'Departments', path: '/departments', icon: <Calendar size={14} /> },
    { name: 'Services', path: '/services',  icon: <Briefcase size={14} /> },
    { name: 'Members', path: '/members', icon: <Users size={14} /> },
    { name: 'About', path: '/about', icon: <Activity size={14} /> }
  ];

  return (
    <footer className="relative bg-white pt-20 pb-10 px-6 md:px-12 border-t border-gray-100 overflow-hidden">
      
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#004a8e]/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
        
        {/* BRAND SECTION */}
        <div className="md:col-span-4 space-y-6">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-14 h-14 rounded-xl bg-white border border-gray-100 shadow-sm p-1">
              <img 
                src="/logo.png" 
                alt="Crimex Logo"
                className="w-full h-full object-contain"
                onError={(e) => { e.target.src = "https://cdn-icons-png.flaticon.com/512/2092/2092663.png" }}
              />
            </div>
            <div className="leading-none">
              <span className="font-black text-xl tracking-tighter uppercase italic text-[#004a8e] block">
                CRIMEX <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">INTELLIGENCE</span>
              </span>
              <span className="text-[9px] font-bold text-gray-400 tracking-[0.3em] uppercase">Institutional Hub // V.3.7</span>
            </div>
          </Link>
          
          <p className="text-gray-500 text-sm leading-relaxed font-medium">
            Advancing the frontier of Forensic Science through innovation, education, and tactical research. Dedicated to creating a secure society through clinical excellence.
          </p>

          {/* SOCIAL LINKS */}
          <div className="flex gap-3">
            {[
              { icon: <Facebook size={18} />, color: "hover:bg-blue-600", url: "#" },
              { icon: <Instagram size={18} />, color: "hover:bg-pink-600", url: "#" },
              { icon: <Linkedin size={18} />, color: "hover:bg-blue-700", url: "#" },
              { icon: <Youtube size={18} />, color: "hover:bg-red-600", url: "#" },
            ].map((social, i) => (
              <a 
                key={i}
                href={social.url}
                className={`w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 hover:text-white ${social.color} transition-all duration-300 shadow-sm`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* NAVIGATION LINKS (Synced with Navbar) */}
        <div className="md:col-span-3 space-y-6 md:ml-10">
          <h4 className="text-[#004a8e] font-black text-xs uppercase tracking-widest border-l-4 border-yellow-400 pl-3">Navigation</h4>
          <ul className="space-y-4 text-[12px] font-bold text-gray-500 uppercase tracking-wider">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link to={item.path} className="hover:text-[#004a8e] flex items-center gap-3 transition-all group">
                  <span className="text-gray-300 group-hover:text-yellow-400 transition-colors">{item.icon}</span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ACADEMY PORTAL (Sub-links from Navbar Dropdown) */}
        <div className="md:col-span-2 space-y-6">
          <h4 className="text-[#004a8e] font-black text-xs uppercase tracking-widest border-l-4 border-blue-500 pl-3">Academy</h4>
          <ul className="space-y-4 text-[12px] font-bold text-gray-500 uppercase tracking-wider">
            <li><Link to="/courses" className="hover:text-[#004a8e] flex items-center gap-2 transition-all group"><ArrowRight size={14} className="text-blue-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"/> Academy Portal</Link></li>
            <li><Link to="/contact" className="hover:text-[#004a8e] flex items-center gap-2 transition-all group"><ArrowRight size={14} className="text-blue-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"/> Contact Support</Link></li>
            <li><Link to="/apply" className="hover:text-[#004a8e] flex items-center gap-2 transition-all group"><ArrowRight size={14} className="text-blue-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"/> Online Application</Link></li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div className="md:col-span-3 space-y-6">
          <h4 className="text-[#004a8e] font-black text-xs uppercase tracking-widest border-l-4 border-blue-900 pl-3">Direct Reach</h4>
          <div className="space-y-4">
            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#004a8e] shrink-0">
                <Phone size={14} />
              </div>
              <p className="text-[11px] font-black text-gray-800 tracking-tight">+91 7303913002</p>
            </div>
            
            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#004a8e] shrink-0">
                <Mail size={14} />
              </div>
              <p className="text-[11px] font-black text-gray-800 tracking-tight">education@crimex.in</p>
            </div>

            <Link to="/apply" className="block w-full">
              <button className="w-full py-3.5 bg-[#004a8e] text-white font-black uppercase text-[10px] tracking-[0.2em] rounded-xl hover:bg-[#003366] transition-all shadow-lg shadow-blue-900/10 italic">
                Get Consultation
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* COPYRIGHT AREA */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">
          © 2026 CRIMEX INTELLIGENCE. INSTITUTIONAL DATA PROTECTED.
        </div>
        <div className="flex gap-6 text-[9px] font-black text-gray-500 uppercase tracking-widest italic">
          <Link to="/privacy" className="hover:text-[#004a8e]">Privacy_Node</Link>
          <Link to="/terms" className="hover:text-[#004a8e]">Terms_Node</Link>
          <Link to="/login" className="hover:text-[#004a8e]">Access_Portal</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;