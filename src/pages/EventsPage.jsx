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

  const filteredEvents = useMemo(() => {
    if (activeTab === 'All Events') return eventData;
    return eventData.filter(event => event.status === activeTab);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#010208] text-white pt-40 pb-20 relative overflow-hidden">
      
      {/* Background Matrix Rain */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex justify-between px-4">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -500, opacity: 0 }}
            animate={{ y: 1200, opacity: [0, 0.4, 0] }}
            transition={{ duration: Math.random() * 8 + 4, repeat: Infinity, ease: "linear", delay: Math.random() * 5 }}
            className="w-[1px] h-32 bg-gradient-to-b from-cyan-400 to-transparent"
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
             <Zap size={14} className="text-[#00f2ea]" />
             <p className="text-[#00f2ea] font-mono text-[10px] font-black tracking-[0.5em] uppercase">Tactical_Operations // EVENTS</p>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase text-white">
            <span className="text-white block drop-shadow-lg">our</span>  
            <span className="text-[#00f2ea]">Events</span>
          </h1>
        </div>

        {/* FILTER TABS */}
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-2 px-8 py-4 rounded-full text-[11px] font-black uppercase tracking-widest transition-all border-2 ${
                activeTab === tab.name 
                ? 'bg-[#00f2ea] border-[#00f2ea] text-black shadow-[0_0_20px_#00f2ea]' 
                : 'bg-white/5 border-white/10 text-gray-500 hover:text-white'
              }`}
            >
              {tab.icon} {tab.name}
            </button>
          ))}
        </div>

        {/* EVENTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event, index) => (
              <motion.div 
                layout
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-2xl relative transition-all duration-500"
              >
                {/* Image Section */}
                <div className="h-56 relative overflow-hidden">
                  <img src={event.img} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-black text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase border border-white/20 backdrop-blur-md">
                      {event.status}
                    </span>
                  </div>
                </div>

                {/* --- CONTENT AREA: AB EK DAM SAAF DIKHEGA --- */}
                <div className="p-8 bg-white border-t border-gray-100">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-col">
                      <span className="text-4xl font-[1000] text-black leading-none tracking-tighter">{event.date}</span>
                      <span className="text-[12px] font-bold text-cyan-600 uppercase tracking-widest mt-1">{event.month}</span>
                    </div>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest bg-gray-50 px-3 py-1 rounded-lg">
                      {event.tag}
                    </span>
                  </div>

                  {/* TITLE: Pure Black and Bold */}
                  <h3 className="text-2xl font-[1000] text-black uppercase italic leading-tight group-hover:text-cyan-600 transition-colors">
                    {event.title}
                  </h3>

                  {/* Location */}
                  <div className="mt-6 flex items-center gap-2 text-gray-500 text-[11px] font-bold uppercase tracking-wider">
                    <MapPin size={14} className="text-cyan-500" /> {event.location}
                  </div>
                </div>

                {/* Bottom Border Glow */}
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-cyan-500"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* GET IN TOUCH */}
        <motion.div 
          onClick={() => navigate('/contact')}
          whileHover={{ scale: 1.02 }}
          className="bg-cyan-500 p-12 md:p-16 rounded-[3rem] text-center cursor-pointer shadow-[0_20px_50px_rgba(6,182,212,0.4)] transition-all group"
        >
          <MessageSquare className="mx-auto text-black mb-6" size={48} />
          <h2 className="text-4xl md:text-6xl font-[1000] text-black uppercase italic tracking-tighter mb-4">
            Connect with <span className="text-white">Coordinators</span>
          </h2>
          <p className="text-black/70 font-bold uppercase tracking-widest text-sm mb-8">Registration & Partnership Signals Open</p>
          <div className="inline-flex items-center gap-3 bg-black text-white px-10 py-4 rounded-2xl font-black uppercase text-xs tracking-[0.2em] group-hover:gap-6 transition-all">
            Contact Now <ArrowRight size={18} />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default EventsPage;