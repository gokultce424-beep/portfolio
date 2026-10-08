import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const Footer: React.FC = () => {
  return (
    <footer className="mx-auto mt-16 sm:mt-24 w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1600px] border-t border-zinc-800/80 px-3 min-[360px]:px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-12 md:mt-32 md:px-10 lg:px-16 xl:px-20">
      <ScrollReveal direction="up" delay={100} className="flex flex-col items-start justify-between gap-6 sm:gap-8 md:flex-row md:items-center">
        {/* Left Section: Creator and Stack Info */}
        <div className="flex flex-col items-start justify-start gap-6 sm:flex-row sm:gap-10 md:gap-14">
          {/* Creator Attribution */}
          <div className="flex flex-col items-start gap-1">
            <span className="text-[10px] sm:text-xs uppercase tracking-wider text-zinc-500 font-semibold">
              Designed &amp; Engineered By
            </span>
            <a
              href="https://harigokulprasad.dev"
              className="border-b-2 border-zinc-800 font-serif text-base sm:text-lg md:text-xl font-normal italic text-white transition-colors hover:border-cyan-400 hover:text-cyan-300"
            >
              Hari Gokul Prasad
            </a>
          </div>

          {/* Tech Stack Breakdown */}
          <div className="flex flex-col items-start gap-1">
            <span className="text-[10px] sm:text-xs uppercase tracking-wider text-zinc-500 font-semibold">
              Forged &amp; Powered With
            </span>
            <div className="font-serif text-sm sm:text-base md:text-lg font-normal italic text-zinc-300">
              <a
                href="https://react.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-zinc-800 text-white transition-colors hover:border-cyan-400 hover:text-cyan-300"
              >
                React 19
              </a>
              {', '}
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-zinc-800 text-white transition-colors hover:border-cyan-400 hover:text-cyan-300"
              >
                TypeScript
              </a>
              {', '}
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-zinc-800 text-white transition-colors hover:border-cyan-400 hover:text-cyan-300"
              >
                Tailwind CSS
              </a>
              {' & '}
              <a
                href="https://vite.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-zinc-800 text-white transition-colors hover:border-cyan-400 hover:text-cyan-300"
              >
                Vite
              </a>
            </div>
          </div>
        </div>

        {/* Right Section: Brand Monogram Mark */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="flex h-8 w-8 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-cyan-500/30 bg-[#0b111e] shadow-[0_0_15px_rgba(0,210,255,0.15)]">
            <span className="font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-[11px] sm:text-sm">
              HG
            </span>
          </div>
          <span className="text-xs sm:text-base font-medium text-zinc-400">
            harigokulprasad<span className="text-cyan-400 font-bold">.dev</span>
          </span>
        </div>
      </ScrollReveal>

      {/* Bottom Copyright & Rights */}
      <div className="mt-6 sm:mt-12 flex flex-col items-start justify-between gap-3 sm:gap-4 border-t border-zinc-900 pt-4 sm:pt-6 text-xs text-zinc-400 sm:flex-row sm:items-center">
        <p>© 2026 Hari Gokul Prasad. Built with precision and modern web standards.</p>
        <p className="text-zinc-400">All rights reserved.</p>
      </div>
    </footer>
  );
};
