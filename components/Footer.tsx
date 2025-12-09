import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo Section */}
        <div className="text-left">
            <div className="flex items-center gap-3 font-black text-lg tracking-tighter text-white select-none mb-2">
                <span className="tracking-widest">BIXEN</span>
                <span className="text-cyan-500 text-xl font-light">/</span>
                <span>BMAD.WORKSHOP</span>
            </div>
            <p className="text-slate-500 text-xs font-mono tracking-widest uppercase">
                Build More, Architect Dreams
            </p>
        </div>

        {/* Copyright */}
        <div className="text-slate-600 text-sm font-mono">
         &copy; 2025 Bixen.
        </div>
      </div>
    </footer>
  );
};

export default Footer;