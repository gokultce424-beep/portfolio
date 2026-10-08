import React, { useState } from 'react';
import { MessageSquare, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <header className="relative z-50">
      <div className="mx-auto flex w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1600px] items-center justify-between px-3 min-[360px]:px-4 sm:px-6 md:px-10 md:pt-8 pt-5 lg:px-16 xl:px-20">
        {/* Brand / Logo */}
        <a href="#" className="group flex shrink-0 items-center gap-2 min-[360px]:gap-2.5 sm:gap-3 transition-transform hover:scale-[1.02]">
          <div className="relative flex h-8 w-8 min-[360px]:h-9 min-[360px]:w-9 sm:h-10 sm:w-10 xl:h-11 xl:w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 p-[1.5px] shadow-[0_0_16px_rgba(0,210,255,0.35)]">
            <div className="flex h-full w-full items-center justify-center rounded-[9px] bg-[#030712] transition-colors group-hover:bg-[#070d1d]">
              <span className="font-bold text-[11px] min-[360px]:text-xs sm:text-sm xl:text-base tracking-tighter text-white">
                HG
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <span className="whitespace-nowrap text-xs min-[360px]:text-sm sm:text-lg md:text-xl xl:text-2xl font-bold tracking-tight text-white leading-none">
              harigokulprasad<span className="text-cyan-400">.dev</span>
            </span>
            <span className="glow-gradient-portfolio text-[8px] min-[360px]:text-[9px] sm:text-[10px] xl:text-xs font-bold tracking-[0.2em] uppercase mt-0.5">
              Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Nav & Actions */}
        <div className="flex shrink-0 items-center">
          <nav className="mr-8 hidden items-center space-x-2 text-zinc-300 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="cursor-pointer rounded-lg px-4 py-2 text-sm font-medium text-zinc-300 transition-all hover:bg-zinc-800/80 hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 min-[360px]:gap-2 sm:gap-3">
            {/* Contact Button */}
            <a
              href="#contact"
              className="group cursor-pointer rounded-lg bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 p-[1.5px] transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <div className="flex items-center gap-1.5 sm:gap-2 rounded-[6px] bg-[#030712] px-2.5 py-1.5 sm:px-3.5 sm:py-2 text-xs sm:text-sm font-medium text-white transition-all group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-600">
                <MessageSquare className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-cyan-400 group-hover:text-white transition-colors" />
                <span className="hidden sm:inline">Contact</span>
              </div>
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-8 w-8 min-[360px]:h-9 min-[360px]:w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-300 transition-colors hover:text-white md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-4 w-4 min-[360px]:h-5 min-[360px]:w-5" /> : <Menu className="h-4 w-4 min-[360px]:h-5 min-[360px]:w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mx-3 min-[360px]:mx-4 mt-3 rounded-xl border border-zinc-800 bg-[#0b111e]/95 p-4 shadow-2xl backdrop-blur-lg sm:mx-6 md:hidden">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-zinc-200 hover:bg-zinc-800 hover:text-cyan-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
