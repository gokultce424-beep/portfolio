import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { CursorSpotlight } from './components/CursorSpotlight';

export const App: React.FC = () => {
  return (
    <main className="relative min-h-screen bg-[#030712] text-zinc-300 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Top Scroll Reading Progress Indicator */}
      <ScrollProgressBar />

      {/* Interactive Cursor Spotlight Glow */}
      <CursorSpotlight />

      {/* Background ambient lighting and subtle grid mesh */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Subtle dot matrix grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />

        {/* Floating gradient nebula orbs */}
        <div className="animate-float absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-cyan-600/15 via-blue-600/10 to-transparent blur-[100px]" />
        <div className="animate-float-reverse absolute top-[400px] -left-48 w-[450px] h-[450px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="animate-float absolute top-[800px] -right-48 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="animate-float-reverse absolute top-[1300px] left-1/3 w-[500px] h-[300px] rounded-full bg-sky-500/08 blur-[130px]" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default App;
