import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/70 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3 font-black text-xl tracking-tighter text-white select-none">
          <span className="tracking-widest">BIXEN</span>
          <span className="text-cyan-500 text-2xl font-light">/</span>
          <span>BMAD<span className="text-cyan-400">.</span>WORKSHOP</span>
        </div>

        {/* Button */}
        <button className="px-4 py-2 text-sm font-bold border border-cyan-500/30 text-cyan-400 rounded hover:bg-cyan-500/10 transition-colors">
          Reservar Lugar
        </button>

      </div>
    </nav>
  );
};

export default Navbar;