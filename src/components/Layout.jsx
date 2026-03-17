import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  
  // WhatsApp Redirect Function
  const openWhatsApp = () => {
    window.open("https://wa.me/919958214909", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-[#00020a] text-white selection:bg-cyan-500/30 relative overflow-x-hidden">
      
      {/* 1. BACKGROUND GRID & SCANLINE */}
      <div className="fixed inset-0 z-0 opacity-[0.15] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`, backgroundSize: '50px 50px' }}>
      </div>

      <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="w-full h-[2px] bg-cyan-500/20 shadow-[0_0_15px_#22d3ee] animate-[scanline_8s_linear_infinite] opacity-50"></div>
      </div>

      {/* 2. CORNER BRACKETS */}
      <div className="fixed top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-500/40 z-[100] pointer-events-none"></div>
      <div className="fixed top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-500/40 z-[100] pointer-events-none"></div>
      <div className="fixed bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-500/40 z-[100] pointer-events-none"></div>
      <div className="fixed bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-cyan-500/40 z-[100] pointer-events-none"></div>

      {/* 3. CONTENT STRUCTURE */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow pt-20">
          {children}
        </main>

        <div className="relative z-20 bg-[#00020a]">
           <Footer />
        </div>
      </div>

      {/* 4. CYBER WHATSAPP BUTTON (AB KAAM KAREGA) */}
      <div className="fixed bottom-10 right-10 z-[110]">
        <button 
          onClick={openWhatsApp} // Click logic added
          className="relative group cursor-pointer border-none bg-transparent outline-none"
        >
          {/* Outer Glow Effect */}
          <div className="absolute inset-0 bg-[#25D366] rounded-full blur-md opacity-40 group-hover:opacity-100 transition-opacity animate-pulse"></div>
          
          {/* Icon Container */}
          <div className="relative bg-[#25D366] p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.6)] transform group-hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center">
             <img 
               src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
               className="w-7 h-7" 
               alt="whatsapp" 
             />
          </div>

          {/* Tooltip (Optional but looks cool) */}
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-[#25D366] text-black text-[10px] font-black px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap uppercase tracking-widest">
            Chat with Intel
          </span>
        </button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scanline {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
      `}} />
    </div>
  );
};

export default Layout;