import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NetworkBackground from './components/NetworkBackground';
import ValueProps from './components/ValueProps';
import Agenda from './components/Agenda';
import Speakers from './components/Speakers';
import Pricing from './components/Pricing';
import StickyCTA from './components/StickyCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="min-h-screen relative overflow-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <NetworkBackground />
      <Hero />
      <ValueProps />
      <Agenda />
      <Speakers />
      <Pricing />
      <Footer />
      <StickyCTA />
    </main>
  );
};

export default App;