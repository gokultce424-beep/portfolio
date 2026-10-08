import React from 'react';
import { Briefcase, Calendar, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface SubTimeline {
  role: string;
  period: string;
  isCurrent: boolean;
  description: string;
  skills: string[];
}

export const Experience: React.FC = () => {
  const subTimelines: SubTimeline[] = [
    {
      role: 'Working in PowerBI Report Builder Project',
      period: 'June 2026 — Present',
      isCurrent: true,
      description:
        'Developing and designing interactive paginated reports and analytical dashboards using PowerBI Report Builder. Translating complex business data into clear, actionable visual reports and optimizing dataset queries for seamless decision-making.',
      skills: ['PowerBI', 'Report Builder', 'Data Visualization', 'SQL', 'Analytics'],
    },
    {
      role: 'Trained in Angular & Frontend Engineering',
      period: 'Dec 2025 — May 2026',
      isCurrent: false,
      description:
        'Completed comprehensive hands-on training in Angular, TypeScript, RxJS, component-driven UI architecture, and REST API integration. Built reusable interface components and mastered modern frontend engineering workflows.',
      skills: ['Angular', 'TypeScript', 'RxJS', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
  ];

  return (
    <section id="experience" className="relative mx-auto mt-16 w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1600px] px-3 min-[360px]:px-4 sm:px-6 md:mt-24 md:px-10 lg:px-16 xl:px-20">
      {/* Section Header */}
      <ScrollReveal direction="up" delay={100}>
        <div className="relative inline-flex items-center justify-center">
          <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500/20 via-blue-500/20 to-sky-400/20 p-[1px] border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
            <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />
          </div>
        </div>

        <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
          Work Experience
        </h2>
      </ScrollReveal>

      {/* Main Experience Grid */}
      <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-6 sm:gap-8 md:mt-10 md:grid-cols-[1fr_2fr] md:gap-12 xl:gap-16">
        {/* Left Column: Role, Company & Overall Timeline */}
        <ScrollReveal direction="left" delay={200} className="flex flex-col text-base sm:text-lg md:text-xl text-white">
          <div className="font-semibold text-zinc-100">Designer &amp; Developer</div>
          <div className="mt-1.5 sm:mt-2 font-serif text-xl font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 sm:text-2xl md:text-3xl">
            Cloud IQ Solutions Pvt Ltd.
          </div>

          <div className="mt-4 sm:mt-6 flex flex-grow items-start justify-start gap-3 sm:gap-4 md:mt-8">
            {/* Vertical timeline line with glowing bullet for desktop */}
            <div className="mt-1.5 hidden h-full flex-col items-center md:flex">
              <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(0,210,255,0.85)]" />
              <div className="h-full min-h-[120px] w-0.5 bg-gradient-to-b from-cyan-500/60 via-blue-600/30 to-transparent" />
            </div>
            <div className="flex items-center gap-2 text-sm sm:text-lg font-medium text-zinc-400">
              <Calendar className="h-4 w-4 text-cyan-400 md:hidden" />
              <span>Dec 2025 — Present</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Column: Sub-timelines */}
        <div className="flex gap-3 sm:gap-4">
          {/* Mobile vertical line */}
          <div className="flex h-full flex-col items-center md:hidden">
            <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(0,210,255,0.85)]" />
            <div className="h-full w-0.5 bg-gradient-to-b from-cyan-500/60 via-blue-600/30 to-transparent" />
          </div>

          {/* Sub-timeline cards */}
          <div className="flex w-full flex-col gap-4 sm:gap-6">
            {subTimelines.map((item, idx) => (
              <ScrollReveal
                key={item.role}
                direction="right"
                delay={250 + idx * 150}
                className="group relative rounded-2xl border border-zinc-800/90 bg-[#0b111e]/80 p-4 sm:p-7 md:p-8 xl:p-9 transition-all duration-300 hover:border-cyan-500/40 hover:bg-[#0e1626]/90 hover:shadow-[0_0_25px_rgba(0,210,255,0.12)] hover:-translate-y-0.5"
              >
                {/* Header of Sub-timeline card */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    {item.isCurrent && (
                      <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-cyan-500" />
                      </span>
                    )}
                    <h3 className="text-sm sm:text-xl xl:text-2xl font-semibold tracking-tight text-white transition-colors duration-200 group-hover:text-cyan-300">
                      {item.role}
                    </h3>
                  </div>

                  {/* Period Badge */}
                  <span
                    className={`rounded-full px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-sm font-semibold tracking-wide ${
                      item.isCurrent
                        ? 'border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 shadow-[0_0_12px_rgba(0,210,255,0.15)]'
                        : 'border border-zinc-700 bg-zinc-800/80 text-zinc-300'
                    }`}
                  >
                    {item.period}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-lg xl:text-xl leading-relaxed text-zinc-300 font-light">
                  {item.description}
                </p>

                {/* Skills tags */}
                <div className="mt-3.5 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-md bg-zinc-900/90 px-2 sm:px-3 py-0.5 sm:py-1 text-[11px] sm:text-sm font-medium text-zinc-300 border border-zinc-800 transition-colors group-hover:border-zinc-700 group-hover:text-zinc-200"
                    >
                      <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-cyan-400/80" />
                      {skill}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
