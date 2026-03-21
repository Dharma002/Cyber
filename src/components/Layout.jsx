import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  
  // WhatsApp Redirect Function
  const openWhatsApp = () => {
    window.open("https://wa.me/919958214909", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-[#00020a] text-white selection:bg-cyan-500/30 relative overflow-x-hidden font-sans">
      
      {/* 1. HIGH-TECH BACKGROUND INFRASTRUCTURE */}
      {/* Subtle Grid */}
      <div className="fixed inset-0 z-0 opacity-[0.08] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`, backgroundSize: '60px 60px' }}>
      </div>

      {/* Noise Texture Overlay (Premium Feel) */}
      <div className="fixed inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Floating Ambient Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full z-0 pointer-events-none animate-pulse"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full z-0 pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* 2. SIDE DECORATIVE NEON BARS (New Elegant Design) */}
      <div className="fixed left-0 top-1/4 w-[2px] h-1/2 bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent z-50"></div>
      <div className="fixed right-0 top-1/4 w-[2px] h-1/2 bg-gradient-to-b from-transparent via-blue-500/40 to-transparent z-50"></div>

      {/* 3. CONTENT STRUCTURE */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow pt-0 md:pt-10">
          {children}
        </main>

        <div className="relative z-20 bg-transparent">
           <Footer />
        </div>
      </div>

      {/* 4. PREMIUM CYBER WHATSAPP DOCK */}
      <div className="fixed bottom-8 right-8 z-[110]">
        <button 
          onClick={openWhatsApp}
          className="group relative flex items-center justify-center w-16 h-16 transition-all duration-500"
        >
          {/* Rotating Outer Ring */}
          <div className="absolute inset-0 border-2 border-dashed border-cyan-500/30 rounded-full animate-[spin_10s_linear_infinite] group-hover:border-cyan-500 transition-colors"></div>
          
          {/* Inner Glow */}
          <div className="absolute inset-2 bg-[#25D366] rounded-full blur-xl opacity-20 group-hover:opacity-60 transition-all duration-500"></div>
          
          {/* Icon Box */}
          <div className="relative bg-black/80 border border-white/10 w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-xl shadow-2xl group-hover:scale-110 group-hover:border-[#25D366]/50 transition-all duration-300">
             <img 
               src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
               className="w-7 h-7 filter group-hover:brightness-110 transition-all" 
               alt="whatsapp" 
             />
          </div>

          {/* Floating Label */}
          <div className="absolute right-full mr-6 top-1/2 -translate-y-1/2 pointer-events-none">
            <div className="bg-black/80 border border-cyan-500/30 backdrop-blur-md px-4 py-2 rounded-xl opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <p className="text-[#25D366] text-[10px] font-black uppercase tracking-[0.3em] whitespace-nowrap">
                Secure_Line: <span className="text-white">Active</span>
              </p>
            </div>
          </div>
        </button>
      </div>

      {/* Global CSS for Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scanline {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
        ::selection {
          background: #22d3ee;
          color: #000;
        }
        /* Custom Scrollbar for Premium Feel */
        ::-webkit-scrollbar {
          width: 5px;
        }
        ::-webkit-scrollbar-track {
          background: #00020a;
        }
        ::-webkit-scrollbar-thumb {
          background: #1e293b;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #22d3ee;
        }
      `}} />
    </div>
  );
};

export default Layout;