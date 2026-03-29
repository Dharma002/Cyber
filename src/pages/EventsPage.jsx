import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, PlayCircle, CheckCircle, MapPin, LayoutGrid, ArrowRight, MessageSquare, ShieldCheck, Globe } from 'lucide-react';
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
    { id: 1, title: "International Conference on Forensics 2026", date: "15-17", month: "MAR", location: "New Delhi Chapter", type: "Hybrid", status: "Live", tag: "ACADEMIC ", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000" },
    { id: 2, title: "Advanced Fingerprint Workshop", date: "05", month: "APR", location: "Uttar Pradesh Chapter", type: "Online", status: "Upcoming", tag: " TRAINING ", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000" },
    { id: 3, title: "Cyber Law Masterclass", date: "20", month: "APR", location: "Maharashtra Chapter", type: "Offline", status: "Past Events", tag: "LEGAL", img: "https://images.unsplash.com/photo-1510511459019-5dee595ec004?q=80&w=1000" },
    { id: 4, title: "AI in Criminal Investigation", date: "12", month: "MAY", location: "Bangalore Hub", type: "Hybrid", status: "Upcoming", tag: "TECH", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=1000" },
    { id: 5, title: "Digital Evidence Camp", date: "02-04", month: "JUN", location: "Lucknow Base", type: "Offline", status: "Live", tag: "CORE", img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000" },
    { id: 6, title: "Signature Verification Webinar", date: "18", month: "JUN", location: "Online Portal", type: "Online", status: "Upcoming", tag: "LAB", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000" }
  ];

  const filteredEvents = useMemo(() => {
    if (activeTab === 'All Events') return eventData;
    return eventData.filter(event => event.status === activeTab);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-900 pt-32 pb-20 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-50 to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-100/20 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 bg-white border border-gray-100 px-5 py-2 rounded-full shadow-sm"
          >
            <ShieldCheck className="text-[#004a8e]" size={16} />
            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.3em]">Institutional Events Calendar</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter leading-none text-[#004a8e]">
            Our <span className="text-gray-900 font-light italic">Events</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-700 font-medium leading-relaxed italic text-lg">
            "Promoting innovation and knowledge sharing through world-class forensic conferences and workshops."
          </p>
          <div className="w-24 h-1 bg-[#ffc107] mx-auto rounded-full mt-4"></div>
        </div>

        {/* FILTER TABS */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-2 px-6 py-3 md:px-8 md:py-3.5 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-widest transition-all border-2 ${
                activeTab === tab.name 
                ? 'bg-[#004a8e] border-[#004a8e] text-white shadow-lg shadow-blue-900/20' 
                : 'bg-white border-gray-100 text-gray-600 hover:text-[#004a8e] hover:border-[#004a8e]/30'
              }`}
            >
              {tab.icon} {tab.name}
            </button>
          ))}
        </div>

        {/* EVENTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event) => (
              <motion.div 
                layout
                key={event.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-blue-900/5 relative border border-gray-50 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500"
              >
                {/* Image Section */}
                <div className="h-56 relative overflow-hidden">
                  <img src={event.img} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-md text-[#004a8e] text-[9px] font-bold px-4 py-1.5 rounded-full uppercase shadow-sm border border-blue-50">
                      {event.status}
                    </span>
                  </div>
                </div>

                {/* CONTENT AREA */}
                <div className="p-8 bg-white">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex flex-col">
                      <span className="text-4xl font-extrabold text-[#004a8e] leading-none tracking-tighter">{event.date}</span>
                      <span className="text-[12px] font-bold text-gray-600 uppercase tracking-widest mt-1">{event.month}</span>
                    </div>
                    <span className="text-[10px] font-bold text-[#004a8e] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-lg">
                      {event.tag}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-bold text-gray-900 uppercase leading-tight group-hover:text-[#004a8e] transition-colors mb-6">
                    {event.title}
                  </h3>

                  {/* Location & Details */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-gray-700 text-[11px] font-bold uppercase tracking-wider">
                        <MapPin size={14} className="text-[#004a8e]" /> {event.location}
                    </div>
                    <div className="flex items-center gap-2 text-gray-700 text-[11px] font-bold uppercase tracking-wider">
                        <Globe size={14} className="text-[#004a8e]" /> {event.type} Session
                    </div>
                  </div>
                </div>

                {/* Hover Indicator */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#004a8e] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* PROFESSIONAL CTA SECTION */}
        <motion.div 
          onClick={() => navigate('/contact')}
          whileHover={{ y: -5 }}
          className="bg-[#004a8e] p-10 md:p-16 rounded-[3.5rem] text-center cursor-pointer shadow-2xl shadow-blue-900/30 transition-all group overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <ShieldCheck size={200} className="text-white" />
          </div>

          <MessageSquare className="mx-auto text-yellow-400 mb-6" size={48} />
          <h2 className="text-4xl md:text-6xl font-extrabold text-white uppercase tracking-tighter mb-4 relative z-10">
            Event <span className="text-blue-200">Partnerships</span>
          </h2>
          <p className="text-blue-100 font-bold uppercase tracking-[0.3em] text-xs mb-8 relative z-10 opacity-80">Registration & Sponsorship Inquiries Open</p>
          <div className="inline-flex items-center gap-3 bg-white text-[#004a8e] px-12 py-4 rounded-xl font-bold uppercase text-xs tracking-[0.2em] group-hover:gap-6 transition-all relative z-10">
            Connect Now <ArrowRight size={18} />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default EventsPage;