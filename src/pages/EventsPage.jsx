import React, { useState } from 'react';
import { Calendar, PlayCircle, Clock, CheckCircle, MapPin, LayoutGrid, X } from 'lucide-react';

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState('All Events');

  const tabs = [
    { name: 'All Events', icon: <LayoutGrid size={14} /> },
    { name: 'Upcoming', icon: <Calendar size={14} /> },
    { name: 'Live', icon: <PlayCircle size={14} /> },
    { name: 'Past Events', icon: <CheckCircle size={14} /> },
  ];

  const eventData = [
    {
      id: 1,
      title: "CyberSec Hackathon 2025",
      date: "15-17",
      month: "MAR",
      location: "New Delhi Chapter",
      type: "Hybrid",
      status: "Expired",
      tag: "CyberZero",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000",
    },
    {
      id: 2,
      title: "Bug Bounty Workshop",
      date: "05",
      month: "APR",
      location: "Uttar Pradesh Chapter",
      type: "Online",
      status: "Expired",
      tag: "CyberZero UP",
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000",
    },
    {
      id: 3,
      title: "Cryptography Masterclass",
      date: "20",
      month: "APR",
      location: "Maharashtra Chapter",
      type: "Offline",
      status: "Expired",
      tag: "MH",
      img: "https://images.unsplash.com/photo-1510511459019-5dee595ec004?q=80&w=1000",
    }
  ];

  return (
    <div className="min-h-screen bg-[#02040a] text-white pt-32 pb-20 relative overflow-hidden">
      
      {/* 1. BACKGROUND GRID & GLOW EFFECTS */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 2. HEADER SECTION */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none">
            Upcoming <span className="text-cyan-400">Events</span>
          </h1>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm md:text-base font-medium leading-relaxed">
            Join our workshops, hackathons, and conferences to level up your skills, network with experts, and compete with the best.
          </p>
        </div>

        {/* 3. FILTER TABS */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all border ${
                activeTab === tab.name 
                ? 'bg-cyan-500 border-cyan-400 text-black shadow-[0_0_20px_rgba(6,182,212,0.5)]' 
                : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              {tab.icon} {tab.name}
            </button>
          ))}
        </div>

        {/* 4. EVENTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventData.map((event) => (
            <div key={event.id} className="group bg-[#0d0d12]/60 backdrop-blur-md border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-cyan-500/50 transition-all duration-500">
              
              {/* Image & Badges */}
              <div className="h-60 relative overflow-hidden">
                <img src={event.img} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-transparent to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="bg-pink-500/20 border border-pink-500/40 text-pink-400 text-[9px] font-black px-3 py-1 rounded-full uppercase flex items-center gap-1 backdrop-blur-md">
                    <div className="w-1 h-1 bg-pink-400 rounded-full"></div> {event.type}
                  </span>
                  <span className="bg-red-500/20 border border-red-500/40 text-red-400 text-[9px] font-black px-3 py-1 rounded-full uppercase flex items-center gap-1 backdrop-blur-md">
                    <X size={8} /> {event.status}
                  </span>
                </div>

                {/* Location Badge */}
                <div className="absolute bottom-4 left-6 flex items-center gap-1.5 text-cyan-400 text-[10px] font-bold">
                  <MapPin size={12} /> {event.location}
                </div>
              </div>

              {/* Card Footer Content */}
              <div className="p-8 pt-6">
                <div className="flex justify-between items-start mb-6">
                  {/* Date Box */}
                  <div className="flex flex-col">
                    <span className="text-3xl font-black text-white leading-none tracking-tighter">{event.date}</span>
                    <span className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest">{event.month}</span>
                  </div>
                  {/* Category Tag */}
                  <div className="text-right">
                    <span className="text-[9px] font-mono text-gray-500 uppercase tracking-tighter">Cyber Shakti</span>
                    <p className="text-[11px] font-black text-cyan-400 uppercase">{event.tag}</p>
                  </div>
                </div>

                <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter group-hover:text-cyan-400 transition-colors">
                  {event.title}
                </h3>
              </div>

              {/* Bottom Decorative Line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left shadow-[0_0_10px_#06b6d4]"></div>
            </div>
          ))}
        </div>
      </div>

      {/* WhatsApp Float - Just for the look */}
      <div className="fixed bottom-8 right-8 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform z-[100]">
        <svg viewBox="0 0 24 24" width="30" height="30" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.672 1.433 5.662 1.434h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </div>

    </div>
  );
};

export default EventsPage;