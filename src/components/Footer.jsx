import { Shield, Github, Twitter, Linkedin, Mail, ArrowUpRight, Terminal } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-[#05080a] pt-24 pb-12 px-8 border-t border-red-500/10 overflow-hidden">
      {/* Background Decor Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 relative z-10">
        
        {/* BRAND INFO - CRIMEX Theme */}
        <div className="md:col-span-5 space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
              <Shield className="text-red-600" size={28} />
            </div>
            <span className="font-black text-2xl tracking-tighter uppercase italic text-white">
              CRIMEX <span className="text-red-600">INTELLIGENCE</span>
            </span>
          </div>
          <p className="text-slate-400 text-lg leading-relaxed font-medium max-w-sm">
            Decoding the future of <span className="text-white">Forensic Excellence</span>. Join the elite network of investigation professionals.
          </p>
          <div className="flex gap-4">
            {[<Twitter size={20}/>, <Linkedin size={20}/>, <Github size={20}/>, <Mail size={20}/>].map((icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 hover:border-red-600/50 hover:text-red-500 transition-all">
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* NAVIGATION LINKS - Aapke Page Sections */}
        <div className="md:col-span-2 space-y-6">
          <h4 className="text-red-600 font-mono text-[10px] uppercase tracking-[0.3em] font-bold">// Quick_Access</h4>
          <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest text-slate-500">
            <li className="hover:text-white flex items-center gap-2 cursor-pointer transition-colors group">
                <ArrowUpRight size={12} className="group-hover:text-red-500"/> About Company
            </li>
            <li className="hover:text-white flex items-center gap-2 cursor-pointer transition-colors group">
                <ArrowUpRight size={12} className="group-hover:text-red-500"/> Our Team
            </li>
            <li className="hover:text-white flex items-center gap-2 cursor-pointer transition-colors group">
                <ArrowUpRight size={12} className="group-hover:text-red-500"/> Gallery
            </li>
            <li className="hover:text-white flex items-center gap-2 cursor-pointer transition-colors group">
                <ArrowUpRight size={12} className="group-hover:text-red-500"/> Collaborations
            </li>
          </ul>
        </div>

        {/* RESOURCES / SYSTEM LINKS */}
        <div className="md:col-span-2 space-y-6">
          <h4 className="text-red-600 font-mono text-[10px] uppercase tracking-[0.3em] font-bold">// Intelligence</h4>
          <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest text-slate-500">
            <li className="hover:text-white cursor-pointer transition-colors">Exam_Portal</li>
            <li className="hover:text-white cursor-pointer transition-colors">Job_Alerts</li>
            <li className="hover:text-white cursor-pointer transition-colors">Forensic_Law</li>
            <li className="hover:text-white cursor-pointer transition-colors">Privacy_Protocol</li>
          </ul>
        </div>

        {/* CONTACT CARD */}
        <div className="md:col-span-3">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-2 bg-red-600/10 text-red-600">
              <Terminal size={14} />
            </div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-tighter">Need Investigation?</h4>
            <p className="text-[11px] text-slate-500 uppercase tracking-widest mb-6 leading-loose">
                Our support node is active 24/7 for student queries.
            </p>
            <button className="w-full py-3 bg-red-600 text-white font-black uppercase text-[10px] tracking-widest rounded-lg hover:bg-red-500 transition-transform active:scale-95">
              Contact Command
            </button>
          </div>
        </div>
      </div>

      {/* COPYRIGHT AREA */}
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[9px] font-mono text-slate-600 uppercase tracking-[0.5em]">
          © 2026 CRIMEX_INTELLIGENCE • [SECURE_ENCRYPTION_ACTIVE]
        </div>
        <div className="flex gap-8 text-[9px] font-mono text-slate-600 uppercase tracking-[0.2em]">
          <span>Lat: 27.2882° N</span>
          <span>Long: 82.8808° E</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;