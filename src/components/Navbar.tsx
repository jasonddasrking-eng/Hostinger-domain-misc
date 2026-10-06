import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { Logo } from './Logo';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenContact: (prefillScope?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-[#120C0B]/90 backdrop-blur-md border-b border-white/[0.08] shadow-md shadow-black/30 py-3.5'
            : 'bg-[#ECE7DF]/90 backdrop-blur-md border-b border-[#231C18]/10 shadow-xs py-3.5'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Mark: TaylorHare style quiet wordmark */}
          <a
            href="#"
            className="flex items-center transition-opacity hover:opacity-85"
            aria-label="Ja-Sey Web Architecture"
          >
            <Logo size="md" theme={isDark ? 'dark' : 'light'} />
          </a>

          {/* Minimalist Spaced-Out Editorial Nav */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-mono uppercase tracking-[0.2em]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors duration-150 py-1 font-medium ${
                  isDark
                    ? 'text-slate-400 hover:text-[#E8A598]'
                    : 'text-[#5C554F] hover:text-[#943F31]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Clean architectural CTA + Theme Switcher */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Dark / Light Mode Switcher with explicit options */}
            <div
              className={`flex items-center p-0.5 rounded-full border shadow-xs transition-colors ${
                isDark
                  ? 'bg-black/30 border-white/10'
                  : 'bg-white/80 border-[#231C18]/15'
              }`}
              role="radiogroup"
              aria-label="Color scheme options"
            >
              <button
                type="button"
                onClick={() => setTheme('light')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono transition-all duration-150 cursor-pointer ${
                  !isDark
                    ? 'bg-white text-[#943F31] font-semibold shadow-xs border border-[#231C18]/10'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                aria-label="Light mode"
                aria-checked={!isDark}
                role="radio"
                title="Change to Light mode (Press 'L' or 'D')"
              >
                <Sun className={`w-3.5 h-3.5 ${!isDark ? 'text-[#943F31]' : 'text-slate-400'}`} />
                <span>Light</span>
              </button>
              <button
                type="button"
                onClick={() => setTheme('dark')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono transition-all duration-150 cursor-pointer ${
                  isDark
                    ? 'bg-[#943F31] text-white font-semibold shadow-xs border border-white/10'
                    : 'text-[#6E665E] hover:text-[#1A1715]'
                }`}
                aria-label="Dark mode"
                aria-checked={isDark}
                role="radio"
                title="Change to Dark mode (Press 'L' or 'D')"
              >
                <Moon className={`w-3.5 h-3.5 ${isDark ? 'text-amber-200' : 'text-[#6E665E]'}`} />
                <span>Dark</span>
              </button>
            </div>

            {/* Starting rate and Start Project CTA */}
            <div
              className={`flex items-center gap-3 pl-3.5 py-1 pr-1 rounded-full border shadow-xs backdrop-blur-sm ${
                isDark
                  ? 'bg-white/[0.05] border-white/10'
                  : 'bg-white/70 border-[#231C18]/10'
              }`}
            >
              <span
                className={`text-[11px] font-mono ${
                  isDark ? 'text-slate-400' : 'text-[#6E665E]'
                }`}
              >
                From ₦150k / $135
              </span>
              <button
                onClick={() => onOpenContact()}
                className="px-4 py-1.5 text-xs font-semibold text-white bg-[#943F31] hover:bg-[#A84B3B] active:bg-[#7D3428] rounded-full transition-all duration-150 shadow-sm cursor-pointer"
              >
                Start Project
              </button>
            </div>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-2">
            <div
              className={`flex items-center p-0.5 rounded-full border shadow-xs transition-colors ${
                isDark ? 'bg-black/30 border-white/10' : 'bg-white/80 border-[#231C18]/15'
              }`}
            >
              <button
                type="button"
                onClick={() => setTheme('light')}
                className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                  !isDark ? 'bg-white text-[#943F31] shadow-xs' : 'text-slate-400'
                }`}
                aria-label="Light mode"
                title="Light mode"
              >
                <Sun className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setTheme('dark')}
                className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                  isDark ? 'bg-[#943F31] text-white shadow-xs' : 'text-[#6E665E]'
                }`}
                aria-label="Dark mode"
                title="Dark mode"
              >
                <Moon className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={() => onOpenContact()}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#943F31] rounded-full shadow-sm cursor-pointer"
            >
              Start
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                isDark ? 'text-slate-200 hover:bg-white/5' : 'text-[#2A2420] hover:bg-black/5'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-b px-4 pt-3 pb-5 space-y-2 shadow-xl backdrop-blur-xl ${
            isDark
              ? 'bg-[#181110]/98 border-white/[0.08] text-white'
              : 'bg-[#FAF7F2]/98 border-[#231C18]/10 text-[#1A1715]'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 text-xs font-mono uppercase tracking-wider rounded-lg transition-colors ${
                isDark
                  ? 'text-slate-300 hover:text-[#E8A598] hover:bg-white/5'
                  : 'text-[#2A2420] hover:text-[#943F31] hover:bg-black/5'
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* Theme switcher row in mobile menu */}
          <div
            className={`pt-3 pb-2 px-3 border-t space-y-2 text-xs font-mono ${
              isDark ? 'border-white/10 text-slate-300' : 'border-[#231C18]/10 text-[#5C554F]'
            }`}
          >
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-semibold uppercase tracking-wider">Appearance Option:</span>
              <span className={isDark ? 'text-amber-300/90' : 'text-[#943F31]'}>
                {isDark ? 'Dark Mode active' : 'Light Mode active'}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setTheme('light')}
                className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl border text-xs font-mono transition-all cursor-pointer ${
                  !isDark
                    ? 'bg-white text-[#943F31] font-semibold border-[#943F31]/30 shadow-xs'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:text-white'
                }`}
              >
                <Sun className="w-3.5 h-3.5 text-amber-500" />
                <span>Light Mode</span>
              </button>
              <button
                type="button"
                onClick={() => setTheme('dark')}
                className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl border text-xs font-mono transition-all cursor-pointer ${
                  isDark
                    ? 'bg-[#943F31] text-white font-semibold border-[#943F31] shadow-xs'
                    : 'bg-white/60 border-[#231C18]/15 text-[#5C554F] hover:text-[#1A1715]'
                }`}
              >
                <Moon className="w-3.5 h-3.5 text-amber-200" />
                <span>Dark Mode</span>
              </button>
            </div>
          </div>

          <div
            className={`pt-2 border-t ${
              isDark ? 'border-white/[0.08]' : 'border-[#231C18]/10'
            }`}
          >
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono uppercase tracking-wider font-semibold text-white bg-[#943F31] hover:bg-[#A84B3B] rounded-lg transition-colors cursor-pointer"
            >
              <span>Start Project (From ₦150k / $135)</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
