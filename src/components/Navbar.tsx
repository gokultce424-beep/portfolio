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
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 pt-6 md:pt-8 lg:px-0">
        {/* Brand / Logo */}
        <a href="#" className="group flex items-center gap-3 transition-transform hover:scale-[1.02]">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 p-[1.5px] shadow-[0_0_16px_rgba(0,210,255,0.35)]">
            <div className="flex h-full w-full items-center justify-center rounded-[9px] bg-[#030712] transition-colors group-hover:bg-[#070d1d]">
              <span className="font-bold text-sm tracking-tighter text-white">
                HG
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-xl font-bold tracking-tight text-white leading-none">
              harigokulprasad<span className="text-cyan-400">.dev</span>
            </span>
            <span className="glow-gradient-portfolio text-[10px] font-bold tracking-[0.22em] uppercase mt-0.5">
              Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Nav & CTA */}
        <div className="flex items-center">
          <nav className="mr-6 hidden items-center space-x-1 text-zinc-300 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="cursor-pointer rounded-lg px-4 py-1.5 text-sm font-medium text-zinc-300 transition-all hover:bg-zinc-800/80 hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Contact Button */}
            <a
              href="#contact"
              className="group cursor-pointer rounded-lg bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 p-[1.5px] transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <div className="flex items-center gap-2 rounded-[6px] bg-[#030712] px-3.5 py-1.5 text-sm font-medium text-white transition-all group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-600">
                <MessageSquare className="h-4 w-4 text-cyan-400 group-hover:text-white transition-colors" />
                <span className="hidden md:inline">Contact</span>
              </div>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-300 transition-colors hover:text-white md:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mx-6 mt-3 rounded-xl border border-zinc-800 bg-[#0b111e]/95 p-4 shadow-2xl backdrop-blur-lg md:hidden">
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
