import React from 'react';
import { ArrowRight, FileText, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Hero: React.FC = () => {
  return (
    <section className="relative mx-auto mt-6 w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1600px] px-3 min-[360px]:px-4 sm:px-6 md:mt-10 lg:mt-14 md:px-10 lg:px-16 xl:px-20">
      {/* Availability Status Badge */}
      <ScrollReveal direction="down" delay={100}>
        <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 sm:px-3.5 sm:py-1.5 text-xs font-medium text-cyan-300 shadow-[0_0_16px_rgba(0,210,255,0.15)] backdrop-blur-md">
          <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-cyan-400" />
          </span>
          <span className="text-[11px] min-[360px]:text-xs sm:text-xs">Available for Developer &amp; Design Roles</span>
          <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-cyan-300" />
        </div>
      </ScrollReveal>

      {/* Hero 2-Column Grid: top-aligned, robust in both Chrome & Edge */}
      <div className="grid grid-cols-1 items-start justify-between gap-6 sm:gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-12 xl:grid-cols-[1.4fr_1fr] xl:gap-16">
        {/* Left Headline */}
        <ScrollReveal direction="left" delay={200} className="w-full">
          <h1 className="mb-2 sm:mb-3 font-serif text-3xl min-[360px]:text-4xl font-normal italic tracking-tight text-white sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl sm:whitespace-nowrap drop-shadow-sm">
            Hey, I&apos;m Gokul
          </h1>
          <h2 className="text-lg min-[360px]:text-xl font-semibold leading-[1.3] tracking-tight text-white sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl">
            <span>
              I design <span className="font-serif font-normal italic">&amp;</span> craft beautiful websites for users, that solves your{' '}
              <span className="font-serif font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400">
                business tasks
              </span>
            </span>
          </h2>
        </ScrollReveal>

        {/* Right Intro Description: aligned cleanly with top */}
        <ScrollReveal direction="right" delay={300} className="w-full text-sm leading-relaxed text-zinc-300 sm:text-base md:text-lg lg:pt-2 font-light">
          <p>
            Hello, I&apos;m <span className="font-medium text-white">Hari Gokul Prasad</span>, a Full Stack Developer &amp; Designer with{' '}
            <span className="font-semibold text-white">a year</span> of experience{' '}
            <span className="text-white">developing and designing</span> — web applications.
          </p>
        </ScrollReveal>
      </div>

      {/* Action Buttons */}
      <ScrollReveal direction="up" delay={400}>
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
          {/* See Projects Button */}
          <a
            href="#experience"
            className="group cursor-pointer rounded-lg bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 p-[1.5px] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(0,210,255,0.35)]"
          >
            <div className="flex items-center gap-2 rounded-[6px] bg-gradient-to-r from-cyan-500 to-blue-600 px-3.5 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white transition-all group-hover:from-cyan-400 group-hover:to-blue-500">
              <span>Explore Work</span>
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </div>
          </a>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group cursor-pointer rounded-lg bg-gradient-to-r from-zinc-800 to-zinc-800 p-[1.5px] transition-all duration-300 hover:from-cyan-500 hover:to-blue-600 hover:scale-[1.03]"
          >
            <div className="flex items-center gap-2 rounded-[6px] bg-[#030712] px-3.5 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium text-white transition-colors group-hover:bg-[#070e1f]">
              <FileText className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-cyan-400 transition-colors group-hover:text-cyan-300" />
              <span>Resume</span>
            </div>
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
};
