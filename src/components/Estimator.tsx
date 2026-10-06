import React, { useState, useMemo } from 'react';
import { Calculator, Clock, DollarSign, Sparkles, ArrowRight, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface EstimatorProps {
  onApplyScope: (scopeSummary: {
    type: string;
    timeline: string;
    estimatedPrice: string;
    features: string[];
  }) => void;
}

export const Estimator: React.FC<EstimatorProps> = ({ onApplyScope }) => {
  const { isDark } = useTheme();
  const [projectType, setProjectType] = useState<'micro' | 'smallstore' | 'starter' | 'landing' | 'full' | 'redesign' | 'mvp'>('micro');
  const [urgency, setUrgency] = useState<'standard' | 'express'>('standard');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['seo', 'responsive']);
  const [currency, setCurrency] = useState<'NGN' | 'USD'>('NGN');

  const typeConfig = {
    micro: {
      name: 'Small Biz Micro Launch & Bio-Store',
      basePriceNGN: 150000,
      basePriceUSD: 135,
      baseDays: 2,
    },
    smallstore: {
      name: 'Small Biz Storefront & Order Funnel',
      basePriceNGN: 220000,
      basePriceUSD: 195,
      baseDays: 3,
    },
    starter: {
      name: 'Standard Business Starter Launch',
      basePriceNGN: 372400,
      basePriceUSD: 343,
      baseDays: 3,
    },
    landing: {
      name: 'Landing Page & Conversion Funnel',
      basePriceNGN: 833000,
      basePriceUSD: 735,
      baseDays: 4,
    },
    full: {
      name: 'Multi-Page Custom Business Website',
      basePriceNGN: 1813000,
      basePriceUSD: 1568,
      baseDays: 8,
    },
    redesign: {
      name: 'Speed Redesign & Modernization',
      basePriceNGN: 1078000,
      basePriceUSD: 931,
      baseDays: 6,
    },
    mvp: {
      name: 'Full SaaS / App Frontend MVP',
      basePriceNGN: 2548000,
      basePriceUSD: 2156,
      baseDays: 10,
    },
  };

  const addonsList = [
    { id: 'seo', name: 'Technical Schema & SEO Setup', priceNGN: 147000, priceUSD: 118, days: 1 },
    { id: 'responsive', name: 'Ultra-Responsive Mobile Polish (Nigerian 4G/5G)', priceNGN: 0, priceUSD: 0, days: 0 },
    { id: 'cms', name: 'Headless CMS (Sanity / Markdown)', priceNGN: 294000, priceUSD: 245, days: 2 },
    { id: 'paystack', name: 'Paystack / Flutterwave / Stripe Integration', priceNGN: 245000, priceUSD: 196, days: 1 },
    { id: 'motion', name: 'Custom Fluid Micro-Animations', priceNGN: 196000, priceUSD: 176, days: 1 },
  ];

  const toggleAddon = (id: string) => {
    if (id === 'responsive') return; // Always included
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculatedEstimate = useMemo(() => {
    const base = typeConfig[projectType];
    const isNgn = currency === 'NGN';
    let totalPrice = isNgn ? base.basePriceNGN : base.basePriceUSD;
    let totalDays = base.baseDays;

    selectedAddons.forEach((addonId) => {
      const addon = addonsList.find((a) => a.id === addonId);
      if (addon) {
        totalPrice += isNgn ? addon.priceNGN : addon.priceUSD;
        totalDays += addon.days;
      }
    });

    if (urgency === 'express') {
      totalPrice = Math.round(totalPrice * 1.25);
      totalDays = Math.max(3, Math.round(totalDays * 0.65));
    }

    const spread = isNgn ? 245000 : 294;
    const priceText = isNgn
      ? `₦${totalPrice.toLocaleString()} – ₦${(totalPrice + spread).toLocaleString()}`
      : `$${totalPrice.toLocaleString()} – $${(totalPrice + spread).toLocaleString()}`;

    return {
      priceRange: priceText,
      daysText: `${totalDays} business days`,
      rawDays: totalDays,
    };
  }, [projectType, urgency, selectedAddons, currency]);

  const handleApply = () => {
    const activeFeatureNames = selectedAddons.map(
      (id) => addonsList.find((a) => a.id === id)?.name || id
    );
    onApplyScope({
      type: typeConfig[projectType].name,
      timeline: `${calculatedEstimate.daysText} (${urgency === 'express' ? 'Express Sprint' : 'Standard Delivery'})`,
      estimatedPrice: `${calculatedEstimate.priceRange} (${currency})`,
      features: activeFeatureNames,
    });
  };

  return (
    <section
      className={`py-20 border-t relative transition-colors duration-250 ${
        isDark ? 'border-white/10' : 'border-[#231C18]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title with Currency Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-[#943F31] uppercase tracking-widest font-mono">
              06. Interactive Scope Calculator
            </span>
            <h2
              className={`text-3xl font-light tracking-tight mt-2 [text-wrap:balance] ${
                isDark ? 'text-white' : 'text-[#1A1715]'
              }`}
            >
              Estimate Your Project Timeline &amp; Investment
            </h2>
            <p
              className={`text-sm sm:text-base mt-2 font-light ${
                isDark ? 'text-slate-400' : 'text-[#5C554F]'
              }`}
            >
              Configure deliverables to get a realistic delivery estimate with transparent pricing in Nigerian Naira (₦) or US Dollars ($).
            </p>
          </div>

          {/* Currency Switcher */}
          <div
            className={`flex items-center gap-1 p-1 border rounded-xl text-xs font-medium self-start md:self-auto shadow-xs ${
              isDark
                ? 'bg-white/[0.05] border-white/10'
                : 'bg-white/80 border-[#231C18]/10'
            }`}
          >
            <span className={`text-[11px] px-2 font-mono ${isDark ? 'text-slate-400' : 'text-[#7D756E]'}`}>
              Currency:
            </span>
            <button
              type="button"
              onClick={() => setCurrency('NGN')}
              className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
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
              className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Project Type */}
            <div
              className={`p-6 rounded-3xl border space-y-3 shadow-xs ${
                isDark ? 'bg-[#181110] border-white/10' : 'bg-[#F7F4EE] border-[#231C18]/10'
              }`}
            >
              <label
                className={`text-xs font-semibold uppercase tracking-wider block font-mono ${
                  isDark ? 'text-white' : 'text-[#1A1715]'
                }`}
              >
                1. Select Project Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(Object.keys(typeConfig) as Array<keyof typeof typeConfig>).map((key) => {
                  const item = typeConfig[key];
                  const isSelected = projectType === key;
                  const priceLabel =
                    currency === 'NGN'
                      ? `₦${item.basePriceNGN.toLocaleString()}`
                      : `$${item.basePriceUSD.toLocaleString()}`;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setProjectType(key)}
                      className={`p-4 rounded-2xl border text-left transition-all duration-150 cursor-pointer shadow-xs ${
                        isSelected
                          ? isDark
                            ? 'bg-[#241412] border-[#943F31] ring-2 ring-[#943F31]/30 text-white'
                            : 'bg-white border-[#943F31] ring-2 ring-[#943F31]/15 text-[#1A1715]'
                          : isDark
                          ? 'bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.08]'
                          : 'bg-white/60 border-[#231C18]/10 text-[#5C554F] hover:bg-white hover:text-[#1A1715]'
                      }`}
                    >
                      <div className={`text-xs font-bold mb-1 ${isDark ? 'text-white' : 'text-[#1A1715]'}`}>
                        {item.name}
                      </div>
                      <div className={`text-[11px] font-mono ${isDark ? 'text-slate-400' : 'text-[#7D756E]'}`}>
                        Base: ~{item.baseDays} days · from {priceLabel}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Add-on Capabilities */}
            <div
              className={`p-6 rounded-3xl border space-y-3 shadow-xs ${
                isDark ? 'bg-[#181110] border-white/10' : 'bg-[#F7F4EE] border-[#231C18]/10'
              }`}
            >
              <label
                className={`text-xs font-semibold uppercase tracking-wider block font-mono ${
                  isDark ? 'text-white' : 'text-[#1A1715]'
                }`}
              >
                2. Key Capabilities &amp; Add-ons
              </label>
              <div className="space-y-2">
                {addonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  const isAlways = addon.id === 'responsive';
                  const addonPrice =
                    currency === 'NGN'
                      ? `+₦${addon.priceNGN.toLocaleString()}`
                      : `+$${addon.priceUSD.toLocaleString()}`;
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl border flex items-center justify-between text-xs transition-colors shadow-xs ${
                        isAlways
                          ? isDark
                            ? 'bg-white/[0.04] border-white/10 text-slate-200'
                            : 'bg-white border-[#231C18]/15 text-[#1A1715]'
                          : isChecked
                          ? isDark
                            ? 'bg-white/[0.08] border-[#943F31] text-white cursor-pointer'
                            : 'bg-white border-[#943F31] text-[#1A1715] cursor-pointer'
                          : isDark
                          ? 'bg-white/[0.02] border-white/10 text-slate-400 hover:bg-white/[0.05] cursor-pointer'
                          : 'bg-white/60 border-[#231C18]/10 text-[#5C554F] hover:bg-white cursor-pointer'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border ${
                            isChecked || isAlways
                              ? 'bg-[#943F31] border-[#943F31] text-white'
                              : isDark
                              ? 'border-white/20 bg-black/40'
                              : 'border-[#231C18]/20 bg-white'
                          }`}
                        >
                          {(isChecked || isAlways) && <Check className="w-3 h-3" />}
                        </div>
                        <span className={`font-medium ${isDark ? 'text-slate-200' : 'text-[#1A1715]'}`}>
                          {addon.name}
                        </span>
                      </div>
                      <span className={`font-mono text-[11px] ${isDark ? 'text-slate-400' : 'text-[#7D756E]'}`}>
                        {isAlways ? 'Included' : addonPrice}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Turnaround Urgency */}
            <div
              className={`p-6 rounded-3xl border space-y-3 shadow-xs ${
                isDark ? 'bg-[#181110] border-white/10' : 'bg-[#F7F4EE] border-[#231C18]/10'
              }`}
            >
              <label
                className={`text-xs font-semibold uppercase tracking-wider block font-mono ${
                  isDark ? 'text-white' : 'text-[#1A1715]'
                }`}
              >
                3. Delivery Timeline Preference
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setUrgency('standard')}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer shadow-xs ${
                    urgency === 'standard'
                      ? isDark
                        ? 'bg-[#241412] border-[#943F31] ring-2 ring-[#943F31]/30 text-white'
                        : 'bg-white border-[#943F31] ring-2 ring-[#943F31]/15 text-[#1A1715]'
                      : isDark
                      ? 'bg-white/[0.03] border-white/10 text-slate-400 hover:bg-white/[0.06]'
                      : 'bg-white/60 border-[#231C18]/10 text-[#5C554F] hover:bg-white'
                  }`}
                >
                  <div className={`text-xs font-bold ${isDark ? 'text-white' : 'text-[#1A1715]'}`}>
                    Standard Delivery
                  </div>
                  <div className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-[#7D756E]'}`}>
                    Paced review &amp; quality testing
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setUrgency('express')}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer shadow-xs ${
                    urgency === 'express'
                      ? isDark
                        ? 'bg-[#241412] border-[#943F31] ring-2 ring-[#943F31]/30 text-white'
                        : 'bg-white border-[#943F31] ring-2 ring-[#943F31]/15 text-[#1A1715]'
                      : isDark
                      ? 'bg-white/[0.03] border-white/10 text-slate-400 hover:bg-white/[0.06]'
                      : 'bg-white/60 border-[#231C18]/10 text-[#5C554F] hover:bg-white'
                  }`}
                >
                  <div className="text-xs font-bold text-[#943F31] flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Express Sprint
                  </div>
                  <div className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-[#7D756E]'}`}>
                    Dedicated priority push
                  </div>
                </button>
              </div>
            </div>

          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 sticky top-28 space-y-4">
            <div
              className={`relative rounded-3xl border-2 border-[#943F31] p-7 sm:p-8 space-y-6 overflow-hidden shadow-xl ${
                isDark
                  ? 'bg-[#201311] shadow-black/40'
                  : 'bg-[#FAF7F2] shadow-[#231C18]/5'
              }`}
            >
              
              {/* Corner triangle ribbon on estimate box */}
              <div className="corner-triangle-sm pointer-events-none" aria-hidden="true" />

              <div className={`border-b pb-4 ${isDark ? 'border-white/10' : 'border-[#231C18]/10'}`}>
                <span className="text-xs font-mono text-[#943F31] uppercase tracking-wider font-semibold">
                  Calculated Estimate
                </span>
                <h3 className={`text-xl font-bold mt-1 ${isDark ? 'text-white' : 'text-[#1A1715]'}`}>
                  {typeConfig[projectType].name}
                </h3>
              </div>

              {/* Numbers */}
              <div className="grid grid-cols-2 gap-4">
                <div
                  className={`p-4 rounded-2xl border shadow-xs ${
                    isDark ? 'bg-black/40 border-white/10' : 'bg-white border-[#231C18]/10'
                  }`}
                >
                  <span className={`text-xs flex items-center gap-1.5 mb-1 font-mono ${isDark ? 'text-slate-400' : 'text-[#7D756E]'}`}>
                    <Clock className="w-3.5 h-3.5 text-[#943F31]" />
                    Launch Timeline
                  </span>
                  <span className={`text-lg font-bold font-mono ${isDark ? 'text-white' : 'text-[#1A1715]'}`}>
                    {calculatedEstimate.daysText}
                  </span>
                </div>

                <div
                  className={`p-4 rounded-2xl border shadow-xs ${
                    isDark ? 'bg-black/40 border-white/10' : 'bg-white border-[#231C18]/10'
                  }`}
                >
                  <span className={`text-xs flex items-center gap-1.5 mb-1 font-mono ${isDark ? 'text-slate-400' : 'text-[#7D756E]'}`}>
                    <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                    Investment
                  </span>
                  <span className={`text-lg font-bold font-mono ${isDark ? 'text-emerald-400' : 'text-emerald-800'}`}>
                    {calculatedEstimate.priceRange}
                  </span>
                </div>
              </div>

              {/* Inclusions summary */}
              <div className="text-xs space-y-2">
                <div
                  className={`font-semibold uppercase tracking-wider text-[11px] font-mono ${
                    isDark ? 'text-slate-400' : 'text-[#7D756E]'
                  }`}
                >
                  Guaranteed Standards:
                </div>
                <div className={`space-y-1.5 ${isDark ? 'text-slate-300' : 'text-[#3E3834]'}`}>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#943F31] shrink-0" />
                    <span>Hand-crafted React / Next.js &amp; Tailwind CSS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#943F31] shrink-0" />
                    <span>Lighthouse 95+ Core Web Vitals guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#943F31] shrink-0" />
                    <span>100% Code ownership &amp; GitHub repository</span>
                  </div>
                </div>
              </div>

              {/* Transfer to form button */}
              <button
                type="button"
                onClick={handleApply}
                className="w-full py-3.5 px-4 text-xs font-mono uppercase tracking-wider font-semibold text-white bg-[#943F31] hover:bg-[#A84B3B] active:bg-[#7D3428] rounded-xl shadow-md shadow-[#943F31]/20 transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request This Scope &amp; Lock Dates</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className={`text-[11px] text-center font-mono ${isDark ? 'text-slate-400' : 'text-[#7D756E]'}`}>
                Estimates are non-binding. We confirm exact specifications on our 15-min discovery call.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
