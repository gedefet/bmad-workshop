import React from 'react';
import { AGENDA_ITEMS } from '../constants';

const Agenda: React.FC = () => {
  return (
    <section className="py-24 relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Agenda</h2>
        <p className="text-slate-400">High Level Business ➔ Deep Dive Tech</p>
      </div>

      <div className="space-y-4">
        {AGENDA_ITEMS.map((item, idx) => (
          <div key={idx} className="group relative p-6 glass-panel rounded-xl hover:bg-slate-900/80 transition-all border-l-4 border-transparent hover:border-cyan-500">
            <div className="flex flex-col md:flex-row gap-6">
                
                {/* Time & Icon */}
                <div className="flex md:flex-col items-center md:items-start min-w-[100px] gap-3 md:gap-1">
                    <span className="font-mono text-cyan-400 font-bold text-lg">{item.time}</span>
                    <item.icon className="w-5 h-5 text-slate-500 group-hover:text-cyan-500 transition-colors" />
                </div>

                {/* Content */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                        {item.title} 
                        {item.type && <span className="text-sm font-normal text-slate-500 ml-2">{item.type}</span>}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        {item.description}
                    </p>
                </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Agenda;