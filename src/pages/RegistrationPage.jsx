import { motion } from 'framer-motion';
import { Terminal, ShieldCheck, Cpu, Fingerprint, Lock } from 'lucide-react';

const RegistrationPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center relative overflow-hidden bg-[#00020a]">
      {/* Background HUD Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle, #22d3ee 1px, transparent 1px)`, backgroundSize: '30px 30px' }}></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-2xl relative z-10"
      >
        {/* Terminal Header */}
        <div className="bg-cyan-950/40 border-t border-x border-cyan-500/30 rounded-t-xl px-6 py-3 flex justify-between items-center backdrop-blur-md">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50 shadow-[0_0_10px_red]"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          </div>
          <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-bold flex items-center gap-2">
            <Lock size={12} /> Secure_Entry_Protocol_v3.4
          </span>
        </div>

        {/* Main Form Body */}
        <div className="bg-black/80 border border-cyan-500/20 rounded-b-xl p-8 md:p-12 shadow-[0_0_50px_rgba(6,182,212,0.1)]">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-2">
              Join the <span className="text-cyan-400 underline decoration-cyan-500/30">Force</span>
            </h2>
            <p className="text-slate-500 font-mono text-xs uppercase tracking-widest leading-relaxed">
              Establishing a new digital identity in the Shakti Grid.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="space-y-2 group">
                <label className="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.2em] ml-1">Codename / Full Name</label>
                <div className="relative">
                  <Terminal className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-800 group-focus-within:text-cyan-400 transition-colors" size={16} />
                  <input type="text" placeholder="Ghost_Protocol" className="w-full bg-white/5 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-cyan-500/50 transition-all text-white font-mono placeholder:text-slate-700" />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2 group">
                <label className="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.2em] ml-1">Comms / Email Address</label>
                <div className="relative">
                  <Cpu className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-800 group-focus-within:text-cyan-400 transition-colors" size={16} />
                  <input type="email" placeholder="user@shakti.secure" className="w-full bg-white/5 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-cyan-500/50 transition-all text-white font-mono placeholder:text-slate-700" />
                </div>
              </div>
            </div>

            {/* Specialization Selection */}
            <div className="space-y-2 group">
              <label className="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.2em] ml-1">Department Selection</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-lg py-4 px-4 text-sm focus:outline-none focus:border-cyan-500/50 transition-all text-slate-400 font-mono appearance-none">
                <option>Digital Forensics</option>
                <option>Offensive Security</option>
                <option>Cyber Law & DPDP</option>
                <option>OSINT Intelligence</option>
              </select>
            </div>

            {/* Verification Check */}
            <div className="flex items-center gap-4 p-4 bg-cyan-500/5 border border-cyan-500/10 rounded-lg group hover:border-cyan-500/30 transition-all">
              <input type="checkbox" className="w-4 h-4 rounded border-cyan-500/50 bg-black text-cyan-500 focus:ring-cyan-500" />
              <p className="text-[10px] font-mono text-slate-400 uppercase leading-relaxed">
                I verify that I will use my acquired skills for <span className="text-cyan-400 font-bold tracking-widest">Ethical Purposes</span> only.
              </p>
            </div>

            {/* Final Submit Button */}
            <button type="submit" className="w-full group relative py-5 bg-cyan-600 text-black font-black uppercase tracking-[0.3em] text-xs overflow-hidden rounded-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all active:scale-95">
              <span className="relative z-10 flex items-center justify-center gap-2">
                <ShieldCheck size={18} /> Deploy Identity
              </span>
              <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 mix-blend-overlay"></div>
            </button>
          </form>

          {/* Bottom Terminal Footer */}
          <div className="mt-10 flex justify-between items-center opacity-30">
            <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-cyan-500"></div>
            <span className="mx-4 font-mono text-[8px] text-cyan-500 uppercase">Shakti_Foundation_Nodes_Status: OK</span>
            <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-cyan-500"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RegistrationPage;