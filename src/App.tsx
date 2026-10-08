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

        {/* Floating gradient nebula orbs scaled for 1080p, 2K, and 4K */}
        <div className="animate-float absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] 2xl:w-[1200px] h-[350px] 2xl:h-[500px] bg-gradient-to-b from-cyan-600/15 via-blue-600/10 to-transparent blur-[100px] 2xl:blur-[140px]" />
        <div className="animate-float-reverse absolute top-[400px] -left-48 2xl:-left-32 w-[450px] 2xl:w-[750px] h-[450px] 2xl:h-[750px] rounded-full bg-blue-600/10 blur-[120px] 2xl:blur-[160px]" />
        <div className="animate-float absolute top-[800px] -right-48 2xl:-right-32 w-[450px] 2xl:w-[750px] h-[450px] 2xl:h-[750px] rounded-full bg-cyan-500/10 blur-[120px] 2xl:blur-[160px]" />
        <div className="animate-float-reverse absolute top-[1300px] left-1/3 w-[500px] 2xl:w-[900px] h-[300px] 2xl:h-[500px] rounded-full bg-sky-500/08 blur-[130px] 2xl:blur-[170px]" />
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
