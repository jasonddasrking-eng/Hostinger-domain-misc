import React from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { Sparkles, Clock, Check, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ProcessProps {
  onOpenContact: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenContact }) => {
  const { isDark } = useTheme();

  return (
    <section
      id="process"
      className={`py-24 border-t relative transition-colors duration-250 ${
        isDark ? 'border-white/10' : 'border-[#231C18]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold text-[#943F31] uppercase tracking-widest font-mono">
            07. Methodology &amp; Execution
          </span>
          <h2
            className={`text-3xl sm:text-4xl font-light tracking-tight mt-2 [text-wrap:balance] ${
              isDark ? 'text-white' : 'text-[#1A1715]'
            }`}
          >
            From First Brief to Live Production in 4 Steps
          </h2>
          <p
            className={`text-base sm:text-lg mt-3 font-light ${
              isDark ? 'text-slate-400' : 'text-[#5C554F]'
            }`}
          >
            How human engineering and modern AI tools collaborate seamlessly to deliver websites in days, not months.
          </p>
        </div>

        {/* 4 Step Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className={`relative p-7 rounded-3xl border flex flex-col justify-between transition-all duration-200 group shadow-xs hover:shadow-md ${
                isDark
                  ? 'bg-[#181110] border-white/10 hover:border-[#943F31]/50'
                  : 'bg-[#F7F4EE] border-[#231C18]/10 hover:border-[#943F31]/40'
              }`}
            >
              <div>
                {/* Step number and duration indicator */}
                <div
                  className={`flex items-center justify-between pb-4 mb-4 border-b ${
                    isDark ? 'border-white/10' : 'border-[#231C18]/10'
                  }`}
                >
                  <span
                    className={`text-2xl font-black font-mono transition-colors ${
                      isDark ? 'text-slate-400 group-hover:text-[#E8A598]' : 'text-[#7D756E] group-hover:text-[#943F31]'
                    }`}
                  >
                    {step.step}
                  </span>
                  <span
                    className={`text-xs font-mono flex items-center gap-1 px-2 py-0.5 rounded-md border ${
                      isDark
                        ? 'bg-black/40 border-white/10 text-emerald-400'
                        : 'bg-white border-[#231C18]/10 text-emerald-800'
                    }`}
                  >
                    <Clock className="w-3 h-3" />
                    {step.duration}
                  </span>
                </div>

                <h3
                  className={`text-lg font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-[#1A1715]'
                  }`}
                >
                  {step.title}
                </h3>

                <p
                  className={`text-xs sm:text-sm leading-relaxed mb-4 font-light ${
                    isDark ? 'text-slate-400' : 'text-[#5C554F]'
                  }`}
                >
                  {step.description}
                </p>

                {/* AI role callout */}
                <div
                  className={`p-3.5 rounded-2xl border mb-4 shadow-xs ${
                    isDark
                      ? 'bg-black/30 border-white/10'
                      : 'bg-white border-[#231C18]/10'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#943F31] mb-1 font-mono">
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span>How AI Accelerates:</span>
                  </div>
                  <p
                    className={`text-xs leading-relaxed font-light ${
                      isDark ? 'text-slate-300' : 'text-[#5C554F]'
                    }`}
                  >
                    {step.aiRole}
                  </p>
                </div>
              </div>

              {/* Key Deliverables list */}
              <div
                className={`pt-3 border-t ${
                  isDark ? 'border-white/10' : 'border-[#231C18]/10'
                }`}
              >
                <span
                  className={`text-[11px] font-semibold uppercase tracking-wider block mb-2 font-mono ${
                    isDark ? 'text-slate-400' : 'text-[#7D756E]'
                  }`}
                >
                  Key Deliverables
                </span>
                <div className="space-y-1.5">
                  {step.deliverables.map((del, dIdx) => (
                    <div
                      key={dIdx}
                      className={`flex items-center gap-2 text-xs ${
                        isDark ? 'text-slate-300' : 'text-[#3E3834]'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5 text-[#943F31] shrink-0" />
                      <span className="truncate">{del}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CTA prompt */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#943F31] hover:text-[#B84A35] transition-colors cursor-pointer font-mono uppercase tracking-wider"
          >
            <span>Have a tight deadline? Inquire about an express 3-day sprint</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
