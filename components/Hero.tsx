import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center z-10">
        
        {/* Eyebrow */}
        <div className="mb-6 flex flex-col items-center">
            <div className="inline-flex items-center gap-2">
                <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase font-semibold">
                    &lt; BUSINESS ARCHITECTURE & AI /&gt;
                </span>
            </div>
            <div className="text-slate-500 text-xs font-mono mt-2 tracking-widest uppercase">
                Build More, Architect Dreams
            </div>
        </div>

        {/* H1 */}
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-[1.1]">
        ESCALÁ TU OPERACIÓN.<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 neon-text">
            NO TU NÓMINA.
        </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-lg md:text-xl text-slate-400 mb-10 leading-relaxed mx-auto">
        Dejá de pensar en "herramientas" de AI. Empezá a diseñar con un <span className="text-white font-bold">Equipo de Agentes especializados</span>. 
        Aprendé el método BMAD para idear nuevos productos y llevarlos a producción.
        </p>

        {/* CTA */}
        <button className="group relative w-full sm:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg transition-all duration-200 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]">
            <span className="flex items-center justify-center gap-2">
            ASEGURAR LUGAR - EARLY BIRD: USD 15
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
        </button>

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[100px] -z-10 rounded-full pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Hero;