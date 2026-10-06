import React, { useState } from 'react';
import { PRICING_PLANS, PricingPlan } from '../data/portfolioData';
import { Check, Clock, Sparkles, ArrowRight, ShieldCheck, HeartHandshake, Zap, HelpCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface PricingPlansProps {
  onSelectPlan: (planName: string, price: string) => void;
}

export const PricingPlans: React.FC<PricingPlansProps> = ({ onSelectPlan }) => {
  const { isDark } = useTheme();
  const [currency, setCurrency] = useState<'NGN' | 'USD'>('NGN');
  const [filter, setFilter] = useState<'small' | 'standard' | 'all'>('small');

  const filteredPlans = PRICING_PLANS.filter((plan) => {
    if (filter === 'small') return plan.tier === 'small-business';
    if (filter === 'standard') return plan.tier === 'standard';
    return true;
  });

  return (
    <section
      id="pricing"
      className={`py-24 border-t relative transition-colors duration-250 ${
        isDark ? 'border-white/10' : 'border-[#231C18]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-[#943F31] uppercase tracking-widest font-mono">
              03. Transparent Investment Plans
            </span>
            <h2
              className={`text-3xl sm:text-4xl font-light tracking-tight mt-2 [text-wrap:balance] ${
                isDark ? 'text-white' : 'text-[#1A1715]'
              }`}
            >
              Built for Small Businesses &amp; Standard Companies
            </h2>
            <p
              className={`text-base sm:text-lg mt-3 font-light [text-wrap:balance] ${
                isDark ? 'text-slate-400' : 'text-[#5C554F]'
              }`}
            >
              Affordable launchpads for smaller businesses starting from ₦150,000, alongside comprehensive platforms for standard commercial companies.
            </p>
          </div>

          {/* Controls: Scale filter + Currency Switcher */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Business Scale filter */}
            <div
              className={`flex items-center gap-1 p-1 border rounded-xl text-xs font-medium shadow-xs ${
                isDark
                  ? 'bg-white/[0.05] border-white/10'
                  : 'bg-white/80 border-[#231C18]/10'
              }`}
            >
              <button
                type="button"
                onClick={() => setFilter('small')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                  filter === 'small'
                    ? 'bg-[#943F31] text-white font-semibold shadow-xs'
                    : isDark
                    ? 'text-slate-400 hover:text-white'
                    : 'text-[#6E665E] hover:text-[#1A1715]'
                }`}
              >
                <span>Smaller Businesses</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${filter === 'small' ? 'bg-white/20 text-white' : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'}`}>
                  From ₦150k
                </span>
              </button>
              <button
                type="button"
                onClick={() => setFilter('standard')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                  filter === 'standard'
                    ? 'bg-[#943F31] text-white font-semibold shadow-xs'
                    : isDark
                    ? 'text-slate-400 hover:text-white'
                    : 'text-[#6E665E] hover:text-[#1A1715]'
                }`}
              >
                <span>Standard Size</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${filter === 'standard' ? 'bg-white/20 text-white' : isDark ? 'text-slate-400' : 'text-[#7D756E]'}`}>
                  From ₦372k
                </span>
              </button>
              <button
                type="button"
                onClick={() => setFilter('all')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  filter === 'all'
                    ? 'bg-[#943F31] text-white font-semibold shadow-xs'
                    : isDark
                    ? 'text-slate-400 hover:text-white'
                    : 'text-[#6E665E] hover:text-[#1A1715]'
                }`}
              >
                All (6 Plans)
              </button>
            </div>

            {/* Currency Switcher */}
            <div
              className={`flex items-center gap-1 p-1 border rounded-xl text-xs font-medium shadow-xs ${
                isDark
                  ? 'bg-white/[0.05] border-white/10'
                  : 'bg-white/80 border-[#231C18]/10'
              }`}
            >
              <button
                type="button"
                onClick={() => setCurrency('NGN')}
                className={`px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  currency === 'NGN'
                    ? 'bg-[#943F31] text-white font-semibold shadow-xs'
                    : isDark
                    ? 'text-slate-400 hover:text-white'
                    : 'text-[#6E665E] hover:text-[#1A1715]'
                }`}
              >
                ₦ NGN
              </button>
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  currency === 'USD'
                    ? 'bg-[#943F31] text-white font-semibold shadow-xs'
                    : isDark
                    ? 'text-slate-400 hover:text-white'
                    : 'text-[#6E665E] hover:text-[#1A1715]'
                }`}
              >
                $ USD
              </button>
            </div>
          </div>
        </div>

        {/* Informative Tier Banner */}
        <div
          className={`mb-8 px-5 py-3 rounded-2xl border flex items-center justify-between flex-wrap gap-3 text-xs font-mono ${
            isDark ? 'bg-white/[0.03] border-white/10' : 'bg-white/70 border-[#231C18]/10'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className={isDark ? 'text-slate-300' : 'text-[#3E3834]'}>
              {filter === 'small'
                ? 'Showing Small Business Packages (₦150k – ₦290k) · Tailored for local businesses, shops & solopreneurs'
                : filter === 'standard'
                ? 'Showing Standard Size Business Plans (₦372k – ₦1.9M+) · Built for established commercial companies & scaling startups'
                : 'Showing all 6 investment plans across Small Business and Standard tiers'}
            </span>
          </div>
          <span className="text-[#943F31] font-semibold">
            {filter === 'small' ? 'Starting at ₦150,000 / $135' : 'Starting at ₦372,400 / $343'}
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredPlans.map((plan) => {
            const price = currency === 'NGN' ? plan.priceNGN : plan.priceUSD;
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden ${
                  isPopular
                    ? isDark
                      ? 'bg-[#241412] border-2 border-[#943F31] ring-4 ring-[#943F31]/20'
                      : 'bg-[#FAF7F2] border-2 border-[#943F31] ring-4 ring-[#943F31]/10'
                    : isDark
                    ? 'bg-[#181110] border border-white/10 hover:border-[#943F31]/50'
                    : 'bg-[#F7F4EE] border border-[#231C18]/10 hover:border-[#943F31]/30'
                }`}
              >
                {/* Popular Card: TaylorHare Signature Corner Triangle */}
                {isPopular && (
                  <div className="corner-triangle pointer-events-none" aria-hidden="true" />
                )}

                <div>
                  {/* Top Target audience */}
                  <div
                    className={`flex items-center justify-between pb-3 mb-4 border-b ${
                      isDark ? 'border-white/10' : 'border-[#231C18]/10'
                    }`}
                  >
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#943F31] font-bold">
                      {plan.targetBusiness}
                    </span>
                    <span
                      className={`text-xs font-mono flex items-center gap-1 ${
                        isDark ? 'text-slate-400' : 'text-[#5C554F]'
                      }`}
                    >
                      <Clock className="w-3 h-3 text-[#943F31]" />
                      {plan.turnaround}
                    </span>
                  </div>

                  <h3
                    className={`text-2xl font-bold mb-1 ${
                      isDark ? 'text-white' : 'text-[#1A1715]'
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-xs mb-6 font-light ${
                      isDark ? 'text-slate-400' : 'text-[#6E665E]'
                    }`}
                  >
                    {plan.tagline}
                  </p>

                  {/* Price Block */}
                  <div
                    className={`p-4 rounded-2xl border mb-6 shadow-xs ${
                      isDark
                        ? 'bg-black/40 border-white/10'
                        : 'bg-white/70 border-[#231C18]/10'
                    }`}
                  >
                    <div
                      className={`text-[11px] uppercase font-mono tracking-wider mb-1 ${
                        isDark ? 'text-slate-400' : 'text-[#7D756E]'
                      }`}
                    >
                      Fixed Investment
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span
                        className={`text-3xl font-extrabold tracking-tight font-mono ${
                          isDark ? 'text-white' : 'text-[#1A1715]'
                        }`}
                      >
                        {price}
                      </span>
                      <span
                        className={`text-xs font-mono ${
                          isDark ? 'text-slate-400' : 'text-[#7D756E]'
                        }`}
                      >
                        / one-time
                      </span>
                    </div>
                    <div
                      className={`text-[11px] font-mono mt-1 font-medium ${
                        isDark ? 'text-emerald-400' : 'text-emerald-800'
                      }`}
                    >
                      50% deposit · 50% on live launch
                    </div>
                  </div>

                  {/* Features list */}
                  <div className="space-y-3 mb-8">
                    <div
                      className={`text-[11px] font-mono uppercase tracking-wider ${
                        isDark ? 'text-slate-400' : 'text-[#7D756E]'
                      }`}
                    >
                      What's Included:
                    </div>
                    {plan.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className={`flex items-start gap-2.5 text-xs ${
                          isDark ? 'text-slate-300' : 'text-[#3E3834]'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5 text-[#943F31] shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan CTA button */}
                <div
                  className={`pt-4 border-t ${
                    isDark ? 'border-white/10' : 'border-[#231C18]/10'
                  }`}
                >
                  <button
                    onClick={() => onSelectPlan(plan.name, price)}
                    className={`w-full py-3.5 px-4 text-xs font-mono uppercase tracking-wider font-semibold rounded-xl transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
                      isPopular
                        ? 'bg-[#943F31] hover:bg-[#A84B3B] text-white shadow-md shadow-[#943F31]/20'
                        : isDark
                        ? 'bg-white/10 hover:bg-[#943F31] text-white'
                        : 'bg-[#1A1715] hover:bg-[#943F31] text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p
                    className={`text-[10px] text-center mt-2 font-mono ${
                      isDark ? 'text-slate-400' : 'text-[#7D756E]'
                    }`}
                  >
                    Zero monthly platform lock-in. You own 100% of the code.
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Win-Win Growth Philosophy Banner */}
        <div
          className={`mt-14 p-6 sm:p-8 rounded-3xl border grid grid-cols-1 md:grid-cols-3 gap-6 shadow-xs ${
            isDark ? 'bg-[#181110] border-white/10' : 'bg-[#F7F4EE] border-[#231C18]/10'
          }`}
        >
          <div className="flex items-start gap-3.5">
            <div
              className={`w-9 h-9 rounded-xl border flex items-center justify-center text-[#943F31] shrink-0 shadow-xs ${
                isDark ? 'bg-white/[0.05] border-white/10' : 'bg-white border-[#231C18]/10'
              }`}
            >
              <HeartHandshake className="w-4 h-4" />
            </div>
            <div>
              <h4
                className={`text-xs font-bold uppercase tracking-wider ${
                  isDark ? 'text-white' : 'text-[#1A1715]'
                }`}
              >
                Milestone Payments
              </h4>
              <p
                className={`text-xs mt-1 font-light leading-relaxed ${
                  isDark ? 'text-slate-400' : 'text-[#5C554F]'
                }`}
              >
                Fair 50/50 stage billing. You only pay final balance after complete testing and final satisfaction.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div
              className={`w-9 h-9 rounded-xl border flex items-center justify-center text-[#943F31] shrink-0 shadow-xs ${
                isDark ? 'bg-white/[0.05] border-white/10' : 'bg-white border-[#231C18]/10'
              }`}
            >
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h4
                className={`text-xs font-bold uppercase tracking-wider ${
                  isDark ? 'text-white' : 'text-[#1A1715]'
                }`}
              >
                No Recurring Taxes
              </h4>
              <p
                className={`text-xs mt-1 font-light leading-relaxed ${
                  isDark ? 'text-slate-400' : 'text-[#5C554F]'
                }`}
              >
                No expensive proprietary CMS subscriptions ($100s/mo). Deployed on zero-cost or dirt-cheap modern hosting.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div
              className={`w-9 h-9 rounded-xl border flex items-center justify-center text-[#943F31] shrink-0 shadow-xs ${
                isDark ? 'bg-white/[0.05] border-white/10' : 'bg-white border-[#231C18]/10'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4
                className={`text-xs font-bold uppercase tracking-wider ${
                  isDark ? 'text-white' : 'text-[#1A1715]'
                }`}
              >
                Lighthouse 95+ Guarantee
              </h4>
              <p
                className={`text-xs mt-1 font-light leading-relaxed ${
                  isDark ? 'text-slate-400' : 'text-[#5C554F]'
                }`}
              >
                If the site does not pass sub-1.5s Core Web Vitals, I keep optimizing on my own time until it does.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
