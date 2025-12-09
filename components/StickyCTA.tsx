import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-t border-cyan-500/20 p-4 transition-transform duration-300 translate-y-0">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="hidden sm:block">
            <div className="text-white font-bold">Workshop Arquitectura AI</div>
            <div className="text-xs text-slate-400">Escalá tu operación, no tu nómina.</div>
        </div>
        <button className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-6 py-3 rounded flex items-center justify-center gap-2 transition-colors">
            Unirse al Workshop - USD 15
            <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default StickyCTA;