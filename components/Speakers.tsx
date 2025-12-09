import React from 'react';
import { SPEAKERS } from '../constants';
import { UserCircle2 } from 'lucide-react';

const Speakers: React.FC = () => {
  return (
    <section className="py-20 border-t border-slate-900 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-12">Speakers</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {SPEAKERS.map((speaker, idx) => (
                    <div key={idx} className="group p-6 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900 hover:border-cyan-500/30 transition-all duration-300">
                        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-slate-800 border-2 border-slate-700 group-hover:border-cyan-500 transition-colors overflow-hidden relative shadow-lg shadow-black/50">
                            {/* NOTE: Ensure speaker images are in the public folder or imports are correct */}
                            {speaker.image ? (
                                <img 
                                    src={speaker.image} 
                                    alt={speaker.name} 
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        const nextSibling = e.currentTarget.nextElementSibling;
                                        if (nextSibling) (nextSibling as HTMLElement).style.display = 'flex';
                                    }}
                                />
                            ) : null}
                            <div className="absolute inset-0 flex items-center justify-center bg-slate-800" style={{ display: speaker.image ? 'none' : 'flex' }}>
                                <UserCircle2 className="w-16 h-16 text-slate-600" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">{speaker.name}</h3>
                        <p className="text-cyan-500 text-sm font-mono">{speaker.role}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Speakers;