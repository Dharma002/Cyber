import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Instagram, Linkedin, Youtube, MessageCircle, Share2, Phone, Globe, ArrowRight } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  // Functional Handlers
  const openWhatsApp = () => window.open("https://wa.me/919958214909", "_blank");
  const openMaps = () => window.open("https://maps.google.com/?q=Raj+Nagar+Extension+Ghaziabad", "_blank");
  const openEmail = () => window.location.href = "mailto:info@crimexintelligence.org";

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your inquiry has been received. Our team will contact you shortly.`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const topInfoCards = [
    { icon: MapPin, title: "Our Location", details: ["Flat no 506, 5th Floor", "Grand Plaza, Raj Nagar Ext.", "Ghaziabad, UP"], color: "text-blue-600", action: openMaps },
    { icon: Phone, title: "Call Support", details: ["+91 9958214909", "011-47074263"], color: "text-green-600", action: null },
    { icon: Mail, title: "Official Email", details: ["info@crimexintelligence.org", "crimexintelligence@gmail.com"], color: "text-red-600", action: openEmail }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="min-h-screen bg-[#f8fafc] text-gray-900 pt-32 pb-20 px-6 relative overflow-hidden"
    >
      {/* Subtle Professional Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-blue-50 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/20 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16 space-y-4">
            <motion.div initial={{y:-20}} animate={{y:0}} className="inline-flex items-center gap-2 bg-white border border-gray-100 px-4 py-1.5 rounded-full shadow-sm text-[10px] font-bold text-[#004a8e] uppercase tracking-widest">
                <Globe size={14} /> Get in Touch with Experts
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter text-[#004a8e]">
                Contact <span className="text-gray-900">Us</span>
            </h1>
            <p className="text-gray-700 font-medium max-w-2xl mx-auto uppercase text-[10px] tracking-[0.3em]">Institutional Support & Inquiry Center</p>
            <div className="w-20 h-1 bg-[#ffc107] mx-auto rounded-full"></div>
        </div>

        {/* 1. TOP INFO CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {topInfoCards.map((card, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5 }}
              onClick={card.action}
              className="bg-white border border-gray-100 p-8 rounded-[2rem] text-center flex flex-col items-center shadow-xl shadow-blue-900/5 transition-all cursor-pointer group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 ${card.color} group-hover:bg-[#004a8e] group-hover:text-white transition-all duration-300`}>
                <card.icon size={30} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 uppercase tracking-tight">{card.title}</h3>
              {card.details.map((line, idx) => (
                <p key={idx} className="text-gray-700 text-sm font-semibold leading-relaxed">{line}</p>
              ))}
            </motion.div>
          ))}
        </div>

        {/* 2. FORM & SOCIAL SECTION */}
        <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* LEFT SIDE: Text & Social */}
            <div className="lg:col-span-5 space-y-10">
                <div className="space-y-6">
                    <h3 className="text-4xl font-extrabold text-[#004a8e] uppercase leading-tight">
                        Send us a <br /><span className="text-gray-600">Message</span>
                    </h3>
                    <p className="text-gray-700 leading-relaxed font-medium text-lg italic">
                        "Whether you are a student seeking guidance or an organization requiring forensic consultation, our experts are here to help."
                    </p>
                </div>

                {/* Social Connect (Clean SIFS Style) */}
                <div className="space-y-4">
                    <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Connect with us online</p>
                    <div className="flex gap-4">
                        {[
                            { Icon: Linkedin, link: "https://linkedin.com", color: "hover:bg-blue-700" },
                            { Icon: Instagram, link: "https://instagram.com", color: "hover:bg-pink-600" },
                            { Icon: Youtube, link: "https://youtube.com", color: "hover:bg-red-600" }
                        ].map(({ Icon, link, color }, idx) => (
                            <a 
                                key={idx} 
                                href={link} target="_blank" rel="noreferrer"
                                className={`w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-gray-600 hover:text-white ${color} transition-all duration-300 shadow-sm`}
                            >
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE: PROFESSIONAL FORM */}
            <div className="lg:col-span-7">
                <div className="bg-white border border-gray-100 p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-blue-900/10 relative">
                  <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-600 uppercase ml-2 tracking-widest">Full Name</label>
                        <input required type="text" value={formData.name} onChange={(e)=>setFormData({...formData, name:e.target.value})} placeholder="John Doe" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:border-[#004a8e] outline-none text-gray-900 font-semibold text-sm transition-all" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-600 uppercase ml-2 tracking-widest">Email Address</label>
                        <input required type="email" value={formData.email} onChange={(e)=>setFormData({...formData, email:e.target.value})} placeholder="example@mail.com" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:border-[#004a8e] outline-none text-gray-900 font-semibold text-sm transition-all" />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                        <label className="text-[10px] font-bold text-gray-600 uppercase ml-2 tracking-widest">Subject</label>
                        <input required type="text" value={formData.subject} onChange={(e)=>setFormData({...formData, subject:e.target.value})} placeholder="Inquiry about Forensic Course" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:border-[#004a8e] outline-none text-gray-900 font-semibold text-sm transition-all" />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                        <label className="text-[10px] font-bold text-gray-600 uppercase ml-2 tracking-widest">Message</label>
                        <textarea required rows="4" value={formData.message} onChange={(e)=>setFormData({...formData, message:e.target.value})} placeholder="How can we assist you today?" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:border-[#004a8e] outline-none text-gray-900 font-semibold text-sm resize-none transition-all"></textarea>
                    </div>

                    <div className="md:col-span-2 pt-4">
                      <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full bg-[#004a8e] text-white font-bold py-5 rounded-xl flex items-center justify-center gap-3 hover:bg-[#003366] transition-all uppercase tracking-widest text-xs shadow-lg shadow-blue-900/20">
                        Submit Inquiry <ArrowRight size={18} />
                      </motion.button>
                    </div>
                  </form>
                </div>
            </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div 
        onClick={openWhatsApp}
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25d366] rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 cursor-pointer hover:scale-110 transition-all z-[100]"
      >
        <MessageCircle size={32} color="white" />
      </div>

    </motion.div>
  );
};

export default ContactPage;