import React from 'react';
import { Check, Zap, MessageCircle } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
            
            {/* Card */}
            <div className="w-full max-w-lg bg-slate-900/80 backdrop-blur-xl border border-cyan-500 rounded-2xl p-8 sm:p-12 shadow-[0_0_50px_rgba(34,211,238,0.15)] relative transform transition-transform hover:scale-[1.01]">
                
                {/* Label */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-black font-bold px-4 py-1 rounded-full text-sm uppercase tracking-wider flex items-center gap-2">
                    <Zap className="w-4 h-4 fill-black" />
                    Workshop Live
                </div>

                <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center gap-3">
                        <span className="text-slate-500 text-xl line-through decoration-red-500 decoration-2">$30 USD</span>
                        <span className="text-6xl font-black text-white tracking-tighter">$15</span>
                        <span className="text-white text-xl font-bold">USD</span>
                    </div>
                    <p className="text-cyan-400 font-mono text-sm mt-2 uppercase tracking-widest">Early Bird Offer</p>
                    <p className="text-slate-400 text-sm mt-1">Pago Único</p>
                </div>

                <div className="space-y-4 mb-10">
                    <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-green-500" />
                        </div>
                        <span className="text-slate-300">Acceso al Workshop en Vivo</span>
                    </div>
                    
                    <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-green-500" />
                        </div>
                        <span className="text-slate-300 font-bold text-white">Acceso a Repo Privado del Workshop</span>
                    </div>
                </div>

                <button className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xl rounded transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                    Comprar Ticket
                </button>

                <div className="mt-6 text-center">
                    <a 
                        href="https://wa.me/5491121776619" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-slate-500 text-xs hover:text-cyan-400 transition-colors"
                    >
                        <MessageCircle className="w-3 h-3 group-hover:text-green-500 transition-colors" />
                        <span>¿Sos empresa? Consultá por training corporativo in-house.</span>
                    </a>
                </div>
            </div>

        </div>
    </section>
  );
};

export default Pricing;