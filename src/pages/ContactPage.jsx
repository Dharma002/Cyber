import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Terminal, MapPin, Instagram, Linkedin, Youtube, MessageCircle, Share2, Github } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  // 1. Logic for WhatsApp and Buttons
  const openWhatsApp = () => window.open("https://wa.me/919958214909", "_blank");
  const openMaps = () => window.open("https://maps.google.com/?q=8-12-97/2+TNGOs+Colony+Hyderabad", "_blank");
  const openEmail = () => window.location.href = "mailto:info@crimexintelligence@gmail.com";

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`SIGNAL TRANSMITTED!\nIdentity: ${formData.name}\nStatus: Sent to Core.`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const topInfoCards = [
    { icon: MapPin, title: "Visit Us", details: ["8-12-97/2 TNGO's Colony, opp.", "Shama Tent House, Lane,", "Hyderabad, Telangana 500077"], iconColor: "text-blue-500", action: openMaps },
    { icon: Mail, title: "Email Us", details: ["info@crimexintelligence.org", "crimexintelligence@gmail.com"], iconColor: "text-cyan-400", action: openEmail },
    { icon: Share2, title: "Follow Us", isSocial: true, iconColor: "text-purple-500", action: null }
  ];

  const socialGrid = [
    { icon: Linkedin, name: "LinkedIn", desc: "Professional updates", color: "text-[#0077b5]", link: "https://www.linkedin.com/company/crimex-intelligence/" },
    { icon: Instagram, name: "Instagram", desc: "Event highlights", color: "text-[#e4405f]", link: "https://www.instagram.com/crimexintelligence?igsh=b2x3OTlpbWV3YTR5" },
    { icon: MessageCircle, name: "WhatsApp", desc: "Instant community", color: "text-[#25d366]", link: "https://wa.me/919958214909" },
<<<<<<< HEAD
    //{ icon: Github, name: "Discord", desc: "Tech discussions", color: "text-[#5865f2]", link: "https://discord.com" }
=======
    // { icon: Github, name: "Discord", desc: "Tech discussions", color: "text-[#5865f2]", link: "https://discord.com" }
>>>>>>> 26430b8544f3441766ae21b86d8dbcd916bead77
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="min-h-screen bg-[#02040a] text-white pt-40 pb-20 px-6 relative overflow-hidden"
    >
      
      {/* --- FIXED: FULL SCREEN MATRIX RAIN (Bich mein bhi chalega) --- */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -1000 }}
            animate={{ y: 1000 }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
            className="absolute font-mono text-[10px] text-cyan-500/40 whitespace-nowrap"
            style={{ 
                left: `${(i * 3.33)}%`, // Poori screen pe spread karne ke liye
                writingMode: 'vertical-rl' 
            }}
          >
            0 1 0 1 1 0 0 1 0 1 0 CRIMEX_INTEL_NODE_V3 SECURE_ACCESS_0x77
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 1. TOP THREE BOXES */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {topInfoCards.map((card, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -8 }}
              onClick={card.action}
              className="bg-[#0d1117]/90 backdrop-blur-xl border border-white/5 p-10 rounded-[2.5rem] text-center flex flex-col items-center shadow-2xl transition-all cursor-pointer group"
            >
              <div className={`w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 ${card.iconColor} group-hover:scale-110 transition-all`}>
                <card.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tighter uppercase italic">{card.title}</h3>
              {card.isSocial ? (
                <div className="flex gap-4 mt-2">
                  {[Linkedin, Instagram, Youtube].map((Icon, idx) => (
                    <div key={idx} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-cyan-400 transition-all"><Icon size={18} /></div>
                  ))}
                </div>
              ) : (
                card.details.map((line, idx) => <p key={idx} className="text-gray-400 text-sm mb-1 font-mono">{line}</p>)
              )}
            </motion.div>
          ))}
        </div>

        {/* 2. CONNECT WITH US */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">
            CONNECT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">WITH US</span>
          </h2>
        </div>

        {/* 3. SOCIAL MEDIA BOXES (Functional Links) */}
        <div className="flex flex-wrap justify-center gap-6 mb-24">
          {socialGrid.map((social, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              onClick={() => window.open(social.link, "_blank")}
              className="bg-[#0d1117]/60 border border-white/5 p-8 rounded-[2rem] text-center group cursor-pointer transition-all hover:bg-white/5 w-full sm:w-72"
            >
              <div className={`w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl bg-white/5 ${social.color} group-hover:scale-110 transition-all`}>
                <social.icon size={28} />
              </div>
              <h4 className="font-bold text-lg mb-1 uppercase tracking-tighter">{social.name}</h4>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">{social.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 4. FORM SECTION */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mt-20">
            <div className="lg:col-span-5">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-[2px] bg-cyan-500"></div>
                    <span className="text-cyan-500 font-mono text-xs font-black tracking-[0.4em] uppercase">Signal_Terminal</span>
                </div>
                <h3 className="text-6xl font-black italic uppercase leading-[0.9] mb-6">GET IN <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">TOUCH</span></h3>
                <p className="text-gray-400 leading-relaxed mb-8 max-w-sm font-mono text-sm">Establish a secure connection with our intelligence core. 24/7 technical surveillance active.</p>
            </div>

            <div className="lg:col-span-7">
                <div className="bg-[#0d1117]/90 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[3.5rem] shadow-2xl relative">
                  <div className="absolute -top-4 left-10 bg-cyan-500 text-black px-6 py-1.5 text-[10px] font-black uppercase rounded-full flex items-center gap-2">
                    <Terminal size={14} /> Transmit_Encrypted_Data
                  </div>

                  <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                    <input required type="text" value={formData.name} onChange={(e)=>setFormData({...formData, name:e.target.value})} placeholder="Identity_Name" className="w-full bg-black/50 border border-white/10 p-4 rounded-2xl focus:border-cyan-500 outline-none text-white font-mono text-sm" />
                    <input required type="email" value={formData.email} onChange={(e)=>setFormData({...formData, email:e.target.value})} placeholder="Signal_Email" className="w-full bg-black/50 border border-white/10 p-4 rounded-2xl focus:border-cyan-500 outline-none text-white font-mono text-sm" />
                    <input required type="text" value={formData.subject} onChange={(e)=>setFormData({...formData, subject:e.target.value})} placeholder="Subject_Protocol" className="w-full md:col-span-2 bg-black/50 border border-white/10 p-4 rounded-2xl focus:border-cyan-500 outline-none text-white font-mono text-sm" />
                    <textarea required rows="4" value={formData.message} onChange={(e)=>setFormData({...formData, message:e.target.value})} placeholder="Message_Payload" className="w-full md:col-span-2 bg-black/50 border border-white/10 p-4 rounded-2xl focus:border-cyan-500 outline-none text-white font-mono text-sm resize-none"></textarea>

                    <div className="md:col-span-2 pt-4">
                      <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full bg-[#00f2ea] text-black font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(0,242,234,0.5)] transition-all uppercase tracking-widest text-xs">
                        SEND SIGNAL <Send size={18} />
                      </motion.button>
                    </div>
                  </form>
                </div>
            </div>
        </div>
      </div>

      {/* --- Floating WhatsApp Functional Button --- */}
      <div 
        onClick={openWhatsApp}
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25d366] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] cursor-pointer hover:scale-110 transition-all z-[100]"
      >
        <MessageCircle size={32} color="white" />
      </div>

    </motion.div>
  );
};

export default ContactPage;