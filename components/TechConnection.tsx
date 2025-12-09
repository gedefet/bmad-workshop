import React from 'react';
import { Terminal } from 'lucide-react';

const TechConnection: React.FC = () => {
  return (
    <section className="py-24 bg-black border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left: Code Visual */}
        <div className="w-full lg:w-1/2">
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#0d1117] shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800">
                    <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                    <div className="ml-4 text-xs font-mono text-slate-500">agent_orchestrator.ts</div>
                </div>
                <div className="p-6 font-mono text-sm overflow-hidden">
                    <div className="text-purple-400">const</div> <div className="inline text-blue-400">ProjectManagerAI</div> = <div className="inline text-purple-400">new</div> <div className="inline text-yellow-300">Agent</div>({'{'}
                    <div className="pl-4 text-slate-400">role: <span className="text-green-400">'Supervisor'</span>,</div>
                    <div className="pl-4 text-slate-400">subordinates: [<span className="text-green-400">'Dev'</span>, <span className="text-green-400">'QA'</span>],</div>
                    <div className="pl-4 text-slate-400">goal: <span className="text-green-400">'Ship Product'</span></div>
                    {'}'});
                    <br/><br/>
                    <div className="text-slate-500">// La misma lógica aplica para Marketing</div>
                    <div className="text-purple-400">const</div> <div className="inline text-blue-400">MarketingManagerAI</div> = <div className="inline text-purple-400">new</div> <div className="inline text-yellow-300">Agent</div>({'{'}
                    <div className="pl-4 text-slate-400">role: <span className="text-green-400">'Head of Growth'</span>,</div>
                    <div className="pl-4 text-slate-400">subordinates: [<span className="text-green-400">'Copywriter'</span>, <span className="text-green-400">'AdsManager'</span>],</div>
                    <div className="pl-4 text-slate-400">goal: <span className="text-green-400">'Maximize ROI'</span></div>
                    {'}'});
                </div>
            </div>
        </div>

        {/* Right: Business Context */}
        <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-4">
                <Terminal className="w-4 h-4" />
                La Demo Técnica
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                De la Teoría a la Práctica.
            </h2>
            
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                <strong className="text-white">"¿Por qué vamos a hacer una demo de coding en un workshop de negocios?"</strong>
            </p>

            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                Porque el código es el terreno más complejo para la IA. Si ves cómo el método BMAD orquesta a un equipo de agentes para escribir software robusto, entenderás cómo aplicarlo para orquestar un cierre contable o una campaña de ads.
            </p>

            <div className="p-4 bg-cyan-900/10 border-l-2 border-cyan-500">
                <p className="text-cyan-100 italic">
                    "Vibecoding es el campo de pruebas para la arquitectura de tu empresa."
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default TechConnection;