import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Quote, TrendingUp, Star, ShieldCheck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Testimonials: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="testimonials"
      className={`py-24 border-t relative transition-colors duration-250 ${
        isDark ? 'border-white/10' : 'border-[#231C18]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-[#943F31] uppercase tracking-widest font-mono">
              08. Perspectives &amp; Client Proof
            </span>
            <h2
              className={`text-3xl sm:text-4xl font-light tracking-tight mt-2 [text-wrap:balance] ${
                isDark ? 'text-white' : 'text-[#1A1715]'
              }`}
            >
              What Founders &amp; Partners Say
            </h2>
            <p
              className={`text-base sm:text-lg mt-3 font-light ${
                isDark ? 'text-slate-400' : 'text-[#5C554F]'
              }`}
            >
              Real results from business owners who swapped bloated agency timelines for high-speed AI engineering.
            </p>
          </div>

          <div
            className={`flex items-center gap-2 text-xs font-medium ${
              isDark ? 'text-slate-200' : 'text-[#1A1715]'
            }`}
          >
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500" />
              ))}
            </div>
            <span className={`font-bold ${isDark ? 'text-white' : 'text-[#1A1715]'}`}>5.0 / 5.0</span>
            <span className={isDark ? 'text-slate-500' : 'text-[#7D756E]'}>·</span>
            <span className={isDark ? 'text-slate-400' : 'text-[#5C554F]'}>50+ Projects Completed</span>
          </div>
        </div>

        {/* Testimonials 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className={`p-7 sm:p-8 rounded-3xl border flex flex-col justify-between space-y-6 transition-colors shadow-xs hover:shadow-md ${
                isDark
                  ? 'bg-[#181110] border-white/10 hover:border-[#943F31]/50'
                  : 'bg-[#F7F4EE] border-[#231C18]/10 hover:border-[#943F31]/30'
              }`}
            >
              <div className="space-y-4">
                {/* Metric pill header */}
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-mono flex items-center gap-1.5 px-2.5 py-1 rounded-lg border ${
                      isDark
                        ? 'bg-black/40 border-white/10 text-emerald-400'
                        : 'bg-white border-[#231C18]/10 text-emerald-800'
                    }`}
                  >
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                    {t.outcome}
                  </span>
                  <span className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-[#7D756E]'}`}>
                    {t.projectType}
                  </span>
                </div>

                {/* Quote */}
                <p
                  className={`text-sm sm:text-base leading-relaxed italic font-light ${
                    isDark ? 'text-slate-200' : 'text-[#1A1715]'
                  }`}
                >
                  "{t.quote}"
                </p>
              </div>

              {/* Attribution */}
              <div
                className={`pt-4 border-t flex items-center gap-3.5 ${
                  isDark ? 'border-white/10' : 'border-[#231C18]/10'
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-[#943F31] text-white font-bold text-xs flex items-center justify-center shadow-xs font-mono">
                  {t.avatarInitials}
                </div>
                <div>
                  <h4 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-[#1A1715]'}`}>
                    {t.name}
                  </h4>
                  <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-[#5C554F]'}`}>
                    {t.role}, <span className={`font-medium ${isDark ? 'text-slate-200' : 'text-[#1A1715]'}`}>{t.company}</span>
                    <span className={`block text-[11px] mt-0.5 font-mono ${isDark ? 'text-slate-500' : 'text-[#7D756E]'}`}>
                      {t.location}
                    </span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
