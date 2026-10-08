import React, { useState } from 'react';
import { Send, ArrowUpRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: '',
  });
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const quickTags = [
    { label: 'Interested In Hiring!', color: 'bg-emerald-400' },
    { label: 'Some Chit-Chat! ☕', color: 'bg-cyan-400' },
    { label: 'Project Collaboration', color: 'bg-blue-400' },
  ];

  const handleTagClick = (tagLabel: string) => {
    setSelectedTag(tagLabel);
    setFormData((prev) => ({
      ...prev,
      message: prev.message ? `${prev.message} [Topic: ${tagLabel}]` : `Hi Hari, I am reaching out regarding: ${tagLabel}. `,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullname || !formData.email || !formData.message) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.fullname}`);
    const body = encodeURIComponent(
      `Hello Hari,\n\nName: ${formData.fullname}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );

    // Launch default email client addressed to gokultce424@gmail.com
    window.location.href = `mailto:gokultce424@gmail.com?subject=${subject}&body=${body}`;

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ fullname: '', email: '', message: '' });
      setSelectedTag('');
    }, 4000);
  };

  return (
    <section id="contact" className="relative mx-auto mt-16 w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1600px] px-3 min-[360px]:px-4 sm:px-6 md:mt-24 md:px-10 lg:px-16 xl:px-20">
      {/* Decorative Arrow Icon Header */}
      <ScrollReveal direction="up" delay={100}>
        <div className="relative inline-flex items-center justify-center">
          <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500/20 via-blue-500/20 to-sky-400/20 p-[1px] border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
            <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />
          </div>
        </div>
      </ScrollReveal>

      <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-8 sm:gap-10 md:mt-10 md:grid-cols-[1fr_2fr] md:gap-12 xl:gap-16">
        {/* Left Column: Heading, Direct Contact & Social Links */}
        <ScrollReveal direction="left" delay={200}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            It&apos;s time <br />
            to talk! <br />
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400">
              Contact me
            </span>
          </h2>

          <div className="mt-4 sm:mt-5 text-white md:mt-6">
            <a
              href="mailto:gokultce424@gmail.com"
              className="font-serif text-base sm:text-xl md:text-2xl font-normal italic text-zinc-300 transition-colors hover:text-cyan-400 hover:underline decoration-cyan-400 decoration-2 underline-offset-4"
            >
              contact@harigokulprasad.dev
            </a>

            <div className="mt-6 sm:mt-8 flex flex-wrap gap-2.5 sm:gap-3">
              <a
                href="https://www.linkedin.com/in/hari-gokul-prasad-k-p-552491394/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex max-w-fit cursor-pointer items-center gap-2 sm:gap-2.5 rounded-xl border border-zinc-800 bg-[#0b111e]/90 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-zinc-300 transition-all duration-300 hover:border-cyan-500/50 hover:bg-[#0e172a] hover:text-white hover:shadow-[0_0_15px_rgba(0,210,255,0.2)]"
              >
                <div className="flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-md bg-gradient-to-br from-cyan-400 to-blue-600 text-white">
                  <svg className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.65 1.65 0 0 0-1.66 1.65 1.66 1.66 0 0 0 1.66-1.66c0-.92-.74-1.65-1.66-1.65Z" />
                  </svg>
                </div>
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:gokultce424@gmail.com"
                className="group flex max-w-fit cursor-pointer items-center gap-2 sm:gap-2.5 rounded-xl border border-zinc-800 bg-[#0b111e]/90 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-zinc-300 transition-all duration-300 hover:border-cyan-500/50 hover:bg-[#0e172a] hover:text-white hover:shadow-[0_0_15px_rgba(0,210,255,0.2)]"
              >
                <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-cyan-400" />
                <span>Direct Mail</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Column: Narrative & Interactive Form */}
        <ScrollReveal direction="right" delay={300} className="flex flex-col gap-6 sm:gap-8">
          <p className="text-sm leading-relaxed text-zinc-300 sm:text-lg md:text-xl xl:text-2xl font-light">
            Best way to reach out is{' '}
            <a
              href="mailto:gokultce424@gmail.com"
              className="border-b-2 border-cyan-400 font-medium text-white transition-colors hover:border-cyan-300"
            >
              contact@harigokulprasad.dev
            </a>{' '}
            or simply fill out the form below. Don&apos;t hesitate to reach out—I love discussing new technical opportunities and creative ideas.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              <div className="flex w-full flex-col gap-1.5 sm:gap-2">
                <label htmlFor="fullname" className="text-xs sm:text-sm font-medium text-zinc-300">
                  Your Name
                </label>
                <input
                  id="fullname"
                  name="fullname"
                  required
                  value={formData.fullname}
                  onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                  placeholder="John Doe"
                  className="rounded-xl border border-zinc-800 bg-[#0b111e]/90 px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-base text-white placeholder-zinc-500 outline-none transition-all focus:border-cyan-400 focus:bg-[#0d1629] focus:shadow-[0_0_15px_rgba(0,210,255,0.15)]"
                />
              </div>

              <div className="flex w-full flex-col gap-1.5 sm:gap-2">
                <label htmlFor="email" className="text-xs sm:text-sm font-medium text-zinc-300">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="rounded-xl border border-zinc-800 bg-[#0b111e]/90 px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-base text-white placeholder-zinc-500 outline-none transition-all focus:border-cyan-400 focus:bg-[#0d1629] focus:shadow-[0_0_15px_rgba(0,210,255,0.15)]"
                />
              </div>
            </div>

            <div className="flex w-full flex-col gap-1.5 sm:gap-2">
              <label htmlFor="message" className="text-xs sm:text-sm font-medium text-zinc-300">
                Your Message
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hey Hari, let's talk about..."
                  className="w-full resize-none rounded-xl border border-zinc-800 bg-[#0b111e]/90 px-3.5 py-2.5 sm:px-4 sm:py-3 pb-16 text-xs sm:text-base text-white placeholder-zinc-500 outline-none transition-all focus:border-cyan-400 focus:bg-[#0d1629] focus:shadow-[0_0_15px_rgba(0,210,255,0.15)]"
                />

                {/* Interactive Quick Intent Pill Chips */}
                <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 flex flex-wrap gap-1.5 sm:gap-2">
                  {quickTags.map((tag) => (
                    <button
                      key={tag.label}
                      type="button"
                      onClick={() => handleTagClick(tag.label)}
                      className={`flex cursor-pointer select-none items-center gap-1 sm:gap-1.5 rounded-lg border px-2 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-sm font-medium transition-all duration-200 ${
                        selectedTag === tag.label
                          ? 'border-cyan-400 bg-cyan-500/20 text-white shadow-sm shadow-cyan-500/30'
                          : 'border-zinc-800 bg-zinc-900/90 text-zinc-300 hover:border-zinc-700 hover:text-white'
                      }`}
                    >
                      <span className={`h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full ${tag.color}`} />
                      <span>{tag.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit Button & Feedback Notification */}
            <div className="flex items-center justify-between gap-4 pt-1 sm:pt-2">
              <button
                type="submit"
                className="group cursor-pointer rounded-lg bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 p-[1.5px] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,210,255,0.35)]"
              >
                <div className="flex items-center gap-2 rounded-[6px] bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-base font-semibold text-white transition-all group-hover:from-cyan-400 group-hover:to-blue-500">
                  <span>Send Message</span>
                  <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </button>

              {isSubmitted && (
                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-cyan-300 animate-in fade-in duration-300">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                  <span>Message sent successfully!</span>
                </div>
              )}
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};
