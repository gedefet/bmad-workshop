import React from 'react';
import { VALUE_PROPS } from '../constants';

const ValueProps: React.FC = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">¿Por qué BMAD?</h2>
            <div className="w-20 h-1 bg-cyan-500"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUE_PROPS.map((prop, idx) => (
            <div 
              key={idx} 
              className="group glass-panel p-8 rounded-xl hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-cyan-950/50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                <prop.icon className="w-7 h-7 text-cyan-400" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                {prop.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed text-sm">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;