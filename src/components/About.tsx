import React from 'react';
import { FileText } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative mx-auto mt-16 w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1600px] px-3 min-[360px]:px-4 sm:px-6 md:mt-24 md:px-10 lg:px-16 xl:px-20">
      {/* Section Header */}
      <ScrollReveal direction="up" delay={100}>
        <div className="relative inline-flex items-center justify-center">
          <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500/20 via-blue-500/20 to-sky-400/20 p-[1px] border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M7 7h10" />
              <path d="M7 12h10" />
              <path d="M7 17h6" />
            </svg>
          </div>
        </div>

        <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
          Hari Gokul Prasad
        </h2>
      </ScrollReveal>

      {/* Grid Content */}
      <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-6 sm:gap-8 md:mt-10 md:grid-cols-[1fr_2fr] md:gap-12 xl:gap-16">
        {/* Left Column: Philosophy / Approach */}
        <ScrollReveal direction="left" delay={200} className="text-base sm:text-lg md:text-xl text-white">
          <div className="font-semibold text-zinc-100">My approach to the work is</div>
          <div className="mt-1.5 sm:mt-2 font-serif text-xl font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 sm:text-2xl md:text-3xl">
            logic, consistency, and rationality
          </div>
        </ScrollReveal>

        {/* Right Column: Bio & Socials */}
        <ScrollReveal direction="right" delay={300} className="flex flex-col gap-5 sm:gap-6">
          <p className="text-sm leading-relaxed text-zinc-300 sm:text-base md:text-lg font-light">
            I&apos;m <span className="text-white font-medium">Hari Gokul Prasad</span>, a developer and designer with over{' '}
            <span className="font-semibold text-white">a year</span> of experience in web application development.
            I&apos;m passionate about building fast, intuitive digital solutions that combine thoughtful aesthetics with clean, scalable architecture.
            Currently, I&apos;m focused on Development &amp; Design where I can continue creating user-friendly, high-impact products.
            Research and understanding audience needs is at the core of everything I build before writing a single line of code.
          </p>

          {/* Social Links Row */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/hari-gokul-prasad-k-p-552491394/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="group cursor-pointer rounded-xl bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 p-[2px] transition-all duration-300 hover:scale-[1.08] hover:shadow-[0_0_22px_rgba(0,210,255,0.5)]"
            >
              <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-[10px] bg-[#030712] text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:via-sky-500 group-hover:to-blue-600">
                <svg className="h-4 w-4 sm:h-5 sm:w-5 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
            </a>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer rounded-xl bg-gradient-to-r from-zinc-800 to-zinc-800 p-[1.5px] transition-all duration-300 hover:from-cyan-500 hover:to-blue-600 hover:scale-[1.03]"
            >
              <div className="flex items-center gap-2 rounded-[10px] bg-[#030712] px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium text-white transition-colors group-hover:bg-[#070e1f]">
                <FileText className="h-4 w-4 text-cyan-400 transition-colors group-hover:text-cyan-300" />
                <span>View Resume</span>
              </div>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
