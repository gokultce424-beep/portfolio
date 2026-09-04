import React from 'react';
import { ArrowRight, FileText, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Hero: React.FC = () => {
  return (
    <section className="relative mx-auto mt-14 max-w-5xl px-6 md:mt-24 lg:px-0">
      {/* Availability Status Badge */}
      <ScrollReveal direction="down" delay={100}>
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium text-cyan-300 shadow-[0_0_20px_rgba(0,210,255,0.18)] backdrop-blur-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
          </span>
          <span>Available for Developer &amp; Design Roles</span>
          <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
        </div>
      </ScrollReveal>

      <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:gap-14">
        {/* Left Headline */}
        <ScrollReveal direction="left" delay={200} className="max-w-2xl">
          <h1 className="mb-6 font-serif text-5xl font-normal italic tracking-tight text-white md:text-6xl lg:text-7xl drop-shadow-sm">
            Hey, I&apos;m Gokul
          </h1>
          <h2 className="text-3xl font-semibold leading-[1.3] tracking-tight text-white md:text-4xl lg:text-5xl md:leading-[1.22]">
            <span>
              I design <span className="font-serif font-normal italic">&amp;</span> craft beautiful websites for users, that solves your{' '}
              <span className="font-serif font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400">
                business tasks
              </span>
            </span>
          </h2>
        </ScrollReveal>

        {/* Right Intro Description */}
        <ScrollReveal direction="right" delay={300} className="max-w-md text-base leading-relaxed text-zinc-300 md:text-lg">
          <p>
            Hello, I&apos;m <span className="font-medium text-white">Hari Gokul Prasad</span>, a Full Stack Developer &amp; Designer with{' '}
            <span className="font-semibold text-white">a year</span> of experience{' '}
            <span className="text-white">developing and designing</span> — web and mobile applications.
          </p>
        </ScrollReveal>
      </div>

      {/* Action Buttons */}
      <ScrollReveal direction="up" delay={400}>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          {/* See Projects Button */}
          <a
            href="#experience"
            className="group cursor-pointer rounded-lg bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 p-[1.5px] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(0,210,255,0.35)]"
          >
            <div className="flex items-center gap-2 rounded-[6px] bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all group-hover:from-cyan-400 group-hover:to-blue-500">
              <span>Explore Work</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </div>
          </a>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1cCUUwODRRmXrkoM1GPI1OaCnBVUbSOIz/view"
            target="_blank"
            rel="noopener noreferrer"
            className="group cursor-pointer rounded-lg bg-gradient-to-r from-zinc-800 to-zinc-800 p-[1.5px] transition-all duration-300 hover:from-cyan-500 hover:to-blue-600 hover:scale-[1.03]"
          >
            <div className="flex items-center gap-2 rounded-[6px] bg-[#030712] px-6 py-3 text-sm font-medium text-white transition-colors group-hover:bg-[#070e1f]">
              <FileText className="h-4 w-4 text-cyan-400 transition-colors group-hover:text-cyan-300" />
              <span>Resume</span>
            </div>
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
};
