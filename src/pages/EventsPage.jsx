import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, PlayCircle, CheckCircle, MapPin, LayoutGrid, ArrowRight, MessageSquare, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState('All Events');
  const navigate = useNavigate();

  const tabs = [
    { name: 'All Events', icon: <LayoutGrid size={14} /> },
    { name: 'Upcoming', icon: <Calendar size={14} /> },
    { name: 'Live', icon: <PlayCircle size={14} /> },
    { name: 'Past Events', icon: <CheckCircle size={14} /> },
  ];

  const eventData = [
    { id: 1, title: "CyberSec Hackathon 2026", date: "15-17", month: "MAR", location: "New Delhi Chapter", type: "Hybrid", status: "Live", tag: "CyberZero", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000" },
    { id: 2, title: "Bug Bounty Workshop", date: "05", month: "APR", location: "Uttar Pradesh Chapter", type: "Online", status: "Upcoming", tag: "CyberZero UP", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000" },
    { id: 3, title: "Cryptography Masterclass", date: "20", month: "APR", location: "Maharashtra Chapter", type: "Offline", status: "Past Events", tag: "MH Core", img: "https://images.unsplash.com/photo-1510511459019-5dee595ec004?q=80&w=1000" },
    { id: 4, title: "AI Security Summit", date: "12", month: "MAY", location: "Bangalore Hub", type: "Hybrid", status: "Upcoming", tag: "AI Intel", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=1000" },
    { id: 5, title: "Digital Forensics Camp", date: "02-04", month: "JUN", location: "Lucknow Base", type: "Offline", status: "Live", tag: "Forensic Core", img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000" },
    { id: 6, title: "Cyber Law Webinar", date: "18", month: "JUN", location: "Online Portal", type: "Online", status: "Upcoming", tag: "Legal Desk", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000" }
  ];

  // Filtering Logic
  const filteredEvents = useMemo(() => {
    if (activeTab === 'All Events') return eventData;
    return eventData.filter(event => event.status === activeTab);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#010208] text-white pt-40 pb-20 relative overflow-hidden">
      
      {/* --- FULL SCREEN MATRIX RAIN --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex justify-between px-4">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -500, opacity: 0 }}
            animate={{ y: 1200, opacity: [0, 0.5, 0] }}
            transition={{ 
                duration: Math.random() * 8 + 4, 
                repeat: Infinity, 
                ease: "linear",
                delay: Math.random() * 5 
            }}
            className="w-[1px] h-32 bg-gradient-to-b from-[#00f2ea] via-[#a855f7] to-transparent shadow-[0_0_15px_#00f2ea]"
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center gap-2 mb-4">
             <Zap size={14} className="text-[#00f2ea] animate-pulse" />
             <p className="text-[#00f2ea] font-mono text-[10px] font-black tracking-[0.5em] uppercase">Tactical_Operations // EVENTS</p>
          </motion.div>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-none">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ea] via-[#a855f7] to-[#00f2ea] drop-shadow-[0_0_15px_rgba(0,242,234,0.4)] text-white">Events</span>
          </motion.h1>
        </div>

        {/* FILTER TABS (Now Functional) */}
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {tabs.map((tab) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-2 px-8 py-4 rounded-full text-[11px] font-black uppercase tracking-widest transition-all border-2 ${
                activeTab === tab.name 
                ? 'bg-[#00f2ea] border-[#00f2ea] text-black shadow-[0_0_30px_rgba(0,242,234,0.6)]' 
                : 'bg-white/5 border-white/10 text-gray-500 hover:text-white hover:border-[#00f2ea]/50'
              }`}
            >
              {tab.icon} {tab.name}
            </motion.button>
          ))}
        </div>

        {/* EVENTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event, index) => (
              <motion.div 
                layout
                key={event.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="group bg-[#0d0d12]/90 backdrop-blur-xl border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-[#00f2ea]/40 transition-all duration-500 relative shadow-2xl"
              >
                <div className="h-64 relative overflow-hidden">
                  <img src={event.img} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#010208] via-transparent to-transparent"></div>
                  
                  <div className="absolute top-6 right-6 flex gap-2">
                    <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase border-2 backdrop-blur-md ${event.status === 'Live' ? 'bg-green-500/20 border-green-500/50 text-green-400' : 'bg-[#00f2ea]/20 border-[#00f2ea]/50 text-[#00f2ea]'}`}>
                      {event.status}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-8 flex items-center gap-2 text-[#00f2ea] text-[10px] font-black tracking-widest uppercase">
                    <MapPin size={14} className="animate-bounce" /> {event.location}
                  </div>
                </div>

                <div className="p-10 pt-6">
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex flex-col leading-none">
                      <span className="text-4xl font-black text-white tracking-tighter">{event.date}</span>
                      <span className="text-[11px] font-bold text-[#00f2ea] tracking-[0.3em] mt-1">{event.month}</span>
                    </div>
                    <p className="text-[12px] font-black text-white/40 uppercase group-hover:text-[#a855f7] transition-colors">{event.tag}</p>
                  </div>

                  <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter leading-none group-hover:text-[#00f2ea] transition-colors mb-4">
                    {event.title}
                  </h3>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00f2ea] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left shadow-[0_0_20px_#00f2ea]"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* --- GET IN TOUCH SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-[#0a0b14] to-[#010208] border-2 border-[#00f2ea]/20 rounded-[3rem] p-12 md:p-20 text-center overflow-hidden group shadow-[0_0_50px_rgba(0,242,234,0.1)]"
        >
          <div className="relative z-10">
            <div className="w-20 h-20 bg-[#00f2ea]/10 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-[#00f2ea]/30 group-hover:rotate-[360deg] transition-transform duration-1000">
               <MessageSquare className="text-[#00f2ea]" size={40} />
            </div>
            <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-6 text-white">
              Establish <span className="text-[#00f2ea]">Connection</span>
            </h2>
            <button 
              onClick={() => navigate('/contact')}
              className="group/btn relative flex items-center gap-4 bg-[#00f2ea] text-black px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:shadow-[0_0_50px_rgba(0,242,234,0.6)] transition-all mx-auto active:scale-95"
            >
              Contact Command Center <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default EventsPage;