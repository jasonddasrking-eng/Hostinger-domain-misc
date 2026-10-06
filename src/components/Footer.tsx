import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Sun, Moon } from 'lucide-react';
import { Logo } from './Logo';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const { isDark, setTheme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`border-t pt-16 pb-12 transition-colors duration-250 ${
        isDark
          ? 'bg-[#0E0908] border-white/10 text-slate-300'
          : 'bg-[#E8E2D8] border-[#231C18]/10 text-[#1A1715]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TaylorHare Minimalist Multi-Column Layout */}
        <div
          className={`grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b ${
            isDark ? 'border-white/10' : 'border-[#231C18]/10'
          }`}
        >
          
          {/* Brand & Identity Column */}
          <div className="md:col-span-4 space-y-4">
            <Logo size="md" theme={isDark ? 'dark' : 'light'} />
            <p
              className={`text-xs max-w-sm leading-relaxed font-light ${
                isDark ? 'text-slate-400' : 'text-[#5C554F]'
              }`}
            >
              Web engineering studio based in Nigeria. Partnering with small and big businesses worldwide to create high-performing digital places that convert.
            </p>
            <div
              className={`text-[11px] font-mono pt-2 ${
                isDark ? 'text-slate-400' : 'text-[#7D756E]'
              }`}
            >
              © {new Date().getFullYear()} Ja-Sey. All rights reserved.
            </div>
          </div>

          {/* 4 Clean Editorial Link Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 text-[11px] font-mono">
            
            <div className="space-y-3">
              <span className={`font-bold uppercase tracking-wider block ${isDark ? 'text-white' : 'text-[#1A1715]'}`}>
                Practice
              </span>
              <ul className={`space-y-2 ${isDark ? 'text-slate-400' : 'text-[#5C554F]'}`}>
                <li><a href="#about" className="hover:text-[#943F31] transition-colors">Philosophy</a></li>
                <li><a href="#about" className="hover:text-[#943F31] transition-colors">Capabilities</a></li>
                <li><a href="#services" className="hover:text-[#943F31] transition-colors">Services</a></li>
                <li><a href="#stack" className="hover:text-[#943F31] transition-colors">AI &amp; Tech Stack</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className={`font-bold uppercase tracking-wider block ${isDark ? 'text-white' : 'text-[#1A1715]'}`}>
                Investment
              </span>
              <ul className={`space-y-2 ${isDark ? 'text-slate-400' : 'text-[#5C554F]'}`}>
                <li><a href="#pricing" className="hover:text-[#943F31] transition-colors">Small Business (From ₦150k)</a></li>
                <li><a href="#pricing" className="hover:text-[#943F31] transition-colors">Standard Growth (₦372k)</a></li>
                <li><a href="#pricing" className="hover:text-[#943F31] transition-colors">Business Accelerator (₦833k)</a></li>
                <li><a href="#pricing" className="hover:text-[#943F31] transition-colors">Enterprise &amp; Scale (₦1.91M)</a></li>
                <li><a href="#pricing" className="hover:text-[#943F31] transition-colors">Scope Estimator</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className={`font-bold uppercase tracking-wider block ${isDark ? 'text-white' : 'text-[#1A1715]'}`}>
                Proof
              </span>
              <ul className={`space-y-2 ${isDark ? 'text-slate-400' : 'text-[#5C554F]'}`}>
                <li><a href="#work" className="hover:text-[#943F31] transition-colors">Selected Work</a></li>
                <li><a href="#process" className="hover:text-[#943F31] transition-colors">4-Day Sprint</a></li>
                <li><a href="#testimonials" className="hover:text-[#943F31] transition-colors">Client Reviews</a></li>
                <li><a href="#contact" className="hover:text-[#943F31] transition-colors">Inquire</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className={`font-bold uppercase tracking-wider block ${isDark ? 'text-white' : 'text-[#1A1715]'}`}>
                Location
              </span>
              <div className={`space-y-1 leading-relaxed text-[11px] ${isDark ? 'text-slate-400' : 'text-[#5C554F]'}`}>
                <p className={`font-semibold ${isDark ? 'text-white' : 'text-[#1A1715]'}`}>Nigeria</p>
                <p>West Africa (WAT · GMT+1)</p>
                <p className="pt-2 text-[#943F31] font-semibold hover:text-[#B84A35] transition-colors">hello@jasey.dev</p>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div
          className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono ${
            isDark ? 'text-slate-400' : 'text-[#7D756E]'
          }`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <span>Architectural design aesthetic</span>
            <span aria-hidden="true">·</span>
            <span>TypeScript &amp; React</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            {/* Footer appearance options */}
            <div
              className={`inline-flex items-center p-0.5 rounded-full border ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-[#231C18]/15'
              }`}
            >
              <button
                type="button"
                onClick={() => setTheme('light')}
                className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono transition-colors cursor-pointer ${
                  !isDark
                    ? 'bg-white text-[#943F31] font-semibold shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Change to light mode"
              >
                <Sun className="w-3 h-3 text-amber-500" />
                <span>Light</span>
              </button>
              <button
                type="button"
                onClick={() => setTheme('dark')}
                className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono transition-colors cursor-pointer ${
                  isDark
                    ? 'bg-[#943F31] text-white font-semibold shadow-xs'
                    : 'text-[#6E665E] hover:text-[#1A1715]'
                }`}
                title="Change to dark mode"
              >
                <Moon className="w-3 h-3 text-amber-200" />
                <span>Dark</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-3 ${isDark ? 'text-slate-400' : 'text-[#5C554F]'}`}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className={`p-1.5 rounded-lg transition-colors ${isDark ? 'hover:text-white' : 'hover:text-[#1A1715]'}`}
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className={`p-1.5 rounded-lg transition-colors ${isDark ? 'hover:text-white' : 'hover:text-[#1A1715]'}`}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className={`p-1.5 rounded-lg transition-colors ${isDark ? 'hover:text-white' : 'hover:text-[#1A1715]'}`}
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className={`p-2 rounded-full border transition-colors cursor-pointer shadow-xs ${
                isDark
                  ? 'bg-white/[0.06] border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                  : 'bg-white border-[#231C18]/10 text-[#5C554F] hover:text-[#1A1715] hover:border-[#231C18]/25'
              }`}
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
