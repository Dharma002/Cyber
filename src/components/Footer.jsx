import { Shield, Linkedin, Mail, ArrowRight, Terminal, Phone, Globe, MessageCircle, Instagram, MapPin, Facebook, Youtube } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="relative bg-[#fcfdfe] pt-20 pb-10 px-6 md:px-12 border-t border-gray-100 overflow-hidden">
      
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#004a8e]/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
        
        {/* BRAND & IDENTITY */}
        <div className="md:col-span-4 space-y-6">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-14 h-14 rounded-xl bg-white border border-gray-100 shadow-sm p-1">
              <img 
                src="/logo.png" 
                alt="Crimex Intelligence"
                className="w-full h-full object-contain"
                onError={(e) => { e.target.src = "https://cdn-icons-png.flaticon.com/512/2092/2092663.png" }}
              />
            </div>
            <div className="leading-none">
              <span className="font-bold text-xl tracking-tighter uppercase text-[#004a8e] block group-hover:text-[#003366] transition-colors">
                CRIMEX <span className="text-gray-700 font-light italic">INTELLIGENCE</span>
              </span>
              <span className="text-[9px] font-bold text-gray-600 tracking-widest uppercase">Forensic Science Laboratory</span>
            </div>
          </Link>
          
          <p className="text-gray-700 text-sm leading-relaxed font-medium">
            India's leading forensic intelligence and training platform. We bridge the gap between academic theory and clinical tactical defense.
          </p>

          {/* SOCIAL MEDIA - SIFS STYLE */}
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
                className={`w-10 h-10 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-gray-600 hover:text-white ${social.color} transition-all duration-300 shadow-sm`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* QUICK NAVIGATION */}
        <div className="md:col-span-2 space-y-6">
          <h4 className="text-[#004a8e] font-bold text-sm uppercase tracking-wider border-b-2 border-blue-500 w-fit pb-1">Institute</h4>
          <ul className="space-y-3 text-[13px] font-semibold text-gray-600">
            {[{ name: 'About Us', path: '/about' }, { name: 'Faculty', path: '/members' }, { name: 'Achievements', path: '/achievements' }, { name: 'Contact', path: '/contact' }].map((item) => (
              <li key={item.name}>
                <Link to={item.path} className="hover:text-[#004a8e] flex items-center gap-2 transition-all group">
                  <ArrowRight size={14} className="text-blue-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"/> 
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ACADEMIC PORTALS */}
        <div className="md:col-span-2 space-y-6">
          <h4 className="text-[#004a8e] font-bold text-sm uppercase tracking-wider border-b-2 border-blue-500 w-fit pb-1">Portals</h4>
          <ul className="space-y-3 text-[13px] font-semibold text-gray-600">
            {[{ name: 'Courses', path: '/services' }, { name: 'Internship', path: '/training' }, { name: 'Privacy Policy', path: '/privacy' }, { name: 'Terms', path: '/terms' }].map((item) => (
              <li key={item.name}>
                <Link to={item.path} className="hover:text-[#004a8e] flex items-center gap-2 transition-all group">
                   <div className="w-1.5 h-1.5 bg-blue-200 rounded-full group-hover:bg-blue-500 transition-colors"></div>
                   {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT DETAILS (The "SIFS" Block) */}
        <div className="md:col-span-4 space-y-6">
          <h4 className="text-[#004a8e] font-bold text-sm uppercase tracking-wider border-b-2 border-blue-500 w-fit pb-1">Reach Us</h4>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#004a8e] shrink-0">
                <MapPin size={20} />
              </div>
              <p className="text-xs font-semibold text-gray-600 leading-relaxed">
                2446, 2nd Floor, Hudson Lane, Kingsway Camp, Near GTB Nagar Metro Station, Delhi-110009
              </p>
            </div>
            
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#004a8e] shrink-0">
                <Phone size={18} />
              </div>
              <p className="text-xs font-bold text-gray-800">+91 7303913002, 011-47074263</p>
            </div>

            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#004a8e] shrink-0">
                <Mail size={18} />
              </div>
              <p className="text-xs font-bold text-gray-800 underline">info@crimex.in</p>
            </div>
          </div>

          <button 
            onClick={() => navigate('/apply')}
            className="w-full py-3 bg-[#004a8e] text-white font-bold uppercase text-[11px] tracking-widest rounded-lg hover:bg-[#003366] transition-all shadow-lg shadow-blue-900/10 active:scale-95"
          >
            Launch Connection
          </button>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
           <Globe size={14} className="text-blue-200 animate-[spin_10s_linear_infinite]" />
           <div className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
             © 2026 CRIMEX INTELLIGENCE. ALL RIGHTS RESERVED.
           </div>
        </div>
        <div className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">
            ISO 9001:2015 CERTIFIED
        </div>
      </div>
    </footer>
  );
};

export default Footer;