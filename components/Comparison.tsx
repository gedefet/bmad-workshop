import React from 'react';
import { Settings, Network, ArrowRight } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950/50 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              "Chatear con una AI" <br/>
              <span className="text-slate-500 line-through decoration-cyan-500/50">ya no alcanza.</span>
            </h2>
            
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Debemos trabajar con diferentes agentes especializados y con una metodología clara y precisa.
            </p>

            <div className="space-y-6">
              <div className="glass-panel p-6 rounded-lg border-l-4 border-slate-700">
                <h3 className="text-slate-400 text-sm uppercase tracking-wider font-bold mb-2">No es:</h3>
                <p className="text-slate-300">Un chatbot que intenta implementar tu idea y termina con código inutilizable y lleno de errores.</p>
              </div>

              <div className="glass-panel p-6 rounded-lg border-l-4 border-cyan-500 relative overflow-hidden group">
                <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-colors duration-500"></div>
                <h3 className="text-cyan-400 text-sm uppercase tracking-wider font-bold mb-2">Es una metodología:</h3>
                <p className="text-white">
                  Un <span className="font-bold text-cyan-200">Equipo de Agentes Especializados</span> que interactúan entre sí para llevar tu idea a producción
                </p>
              </div>
            </div>
          </div>

          {/* Graphic Visual */}
          <div className="order-1 lg:order-2 flex flex-col gap-4">
            {/* Old Way */}
            <div className="glass-panel p-8 rounded-xl flex items-center justify-between opacity-50 grayscale transition-all duration-500 hover:opacity-80">
                <div className="flex items-center gap-4">
                    <Settings className="w-12 h-12 text-slate-400 animate-[spin_10s_linear_infinite]" />
                    <div>
                        <div className="font-bold text-slate-300">Automation Script</div>
                        <div className="text-xs text-slate-500">Linear • Rigid • Dumb</div>
                    </div>
                </div>
            </div>

            {/* Transition Arrow */}
            <div className="flex justify-center text-cyan-500/20">
                <ArrowRight className="w-8 h-8 rotate-90" />
            </div>

            {/* New Way */}
            <div className="glass-panel p-8 rounded-xl border-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.1)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/20 blur-2xl rounded-full -mr-10 -mt-10"></div>
                
                <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Network className="w-12 h-12 text-cyan-400" />
                            <span className="absolute top-0 right-0 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></span>
                        </div>
                        <div>
                            <div className="font-bold text-white text-xl">AI Squad</div>
                            <div className="text-xs text-cyan-300">Autonomous • Adaptive • Strategic</div>
                        </div>
                    </div>
                </div>

                {/* Simulated Nodes/Connections inside the card */}
                <div className="mt-6 grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-1.5 bg-cyan-900/50 rounded-full overflow-hidden">
                            <div className="h-full bg-cyan-500/50 w-full animate-[shimmer_2s_infinite]" style={{animationDelay: `${i * 0.2}s`}}></div>
                        </div>
                    ))}
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Comparison;