import React, { useState } from 'react';
import { SERVICES, Service } from '../data/portfolioData';
import { Sparkles, ArrowRight, Check, X, Clock, Layers, ShieldCheck, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const { isDark } = useTheme();
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [currency, setCurrency] = useState<'NGN' | 'USD'>('NGN');

  return (
    <section
      id="services"
      className={`py-24 border-t relative transition-colors duration-250 ${
        isDark ? 'border-white/10' : 'border-[#231C18]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-[#943F31] uppercase tracking-widest font-mono">
              02. Disciplines &amp; Capabilities
            </span>
            <h2
              className={`text-3xl sm:text-4xl font-light tracking-tight mt-2 [text-wrap:balance] ${
                isDark ? 'text-white' : 'text-[#1A1715]'
              }`}
            >
              High-Velocity Web Architecture Packages
            </h2>
            <p
              className={`text-base sm:text-lg mt-3 font-light ${
                isDark ? 'text-slate-400' : 'text-[#5C554F]'
              }`}
            >
              Transparent scope, rapid turnaround, and production-grade code. Designed for Nigerian businesses and international partners.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {/* Currency Selector (NGN / USD) */}
            <div
              className={`flex items-center gap-1 p-1 rounded-xl text-xs font-medium shadow-xs border ${
                isDark
                  ? 'bg-white/[0.05] border-white/10'
                  : 'bg-white/80 border-[#231C18]/10'
              }`}
            >
              <span
                className={`text-[11px] px-2 font-mono ${
                  isDark ? 'text-slate-400' : 'text-[#7D756E]'
                }`}
              >
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

            <div
              className={`flex items-center gap-2 text-xs font-mono ${
                isDark ? 'text-slate-400' : 'text-[#5C554F]'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-emerald-400' : 'bg-emerald-600'}`} />
              <span>Turnaround: 3–7 business days</span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const isFeatured = index === 0 || index === 1;
            const price = currency === 'NGN' ? service.startingPriceNGN : service.startingPriceUSD;
            return (
              <div
                key={service.id}
                className={`relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 shadow-xs hover:shadow-md ${
                  isDark
                    ? isFeatured
                      ? 'bg-[#181110] border border-[#943F31]/60 ring-1 ring-[#943F31]/20'
                      : 'bg-[#181110] border border-white/10 hover:border-[#943F31]/50'
                    : isFeatured
                    ? 'bg-[#F7F4EE] border border-[#943F31]/30 ring-1 ring-[#943F31]/10'
                    : 'bg-[#F7F4EE] border border-[#231C18]/10 hover:border-[#943F31]/30'
                }`}
              >
                <div>
                  {/* Top line with turnaround and starting price */}
                  <div
                    className={`flex items-center justify-between text-xs pb-4 mb-4 border-b ${
                      isDark ? 'border-white/10' : 'border-[#231C18]/10'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 text-[#943F31] font-mono font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{service.turnaround}</span>
                    </div>
                    <span
                      className={`font-semibold font-mono ${
                        isDark ? 'text-slate-200' : 'text-[#1A1715]'
                      }`}
                    >
                      From {price}
                    </span>
                  </div>

                  <h3
                    className={`text-xl font-bold mb-2.5 ${
                      isDark ? 'text-white' : 'text-[#1A1715]'
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-6 font-light ${
                      isDark ? 'text-slate-400' : 'text-[#5C554F]'
                    }`}
                  >
                    {service.shortDesc}
                  </p>

                  {/* Deliverables summary */}
                  <div className="space-y-2 mb-6">
                    {service.deliverables.slice(0, 3).map((d, dIdx) => (
                      <div
                        key={dIdx}
                        className={`flex items-start gap-2 text-xs ${
                          isDark ? 'text-slate-300' : 'text-[#3E3834]'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5 text-[#943F31] shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card footer CTA */}
                <div
                  className={`pt-4 border-t flex items-center justify-between gap-3 ${
                    isDark ? 'border-white/10' : 'border-[#231C18]/10'
                  }`}
                >
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-semibold text-[#943F31] hover:text-[#B84A35] transition-colors inline-flex items-center gap-1 cursor-pointer font-mono"
                  >
                    <span>View Full Scope</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                      isDark
                        ? 'text-white bg-white/10 hover:bg-[#943F31]'
                        : 'text-white bg-[#1A1715] hover:bg-[#943F31]'
                    }`}
                  >
                    Inquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Scope Modal */}
      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150"
        >
          <div
            className={`relative max-w-xl w-full border rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto ${
              isDark
                ? 'bg-[#181110] border-white/15 text-white'
                : 'bg-[#FAF7F2] border-[#231C18]/15 text-[#1A1715]'
            }`}
          >
            {/* Modal close button */}
            <button
              onClick={() => setSelectedService(null)}
              className={`absolute top-5 right-5 p-2 rounded-lg transition-colors cursor-pointer ${
                isDark ? 'text-slate-400 hover:text-white hover:bg-white/10' : 'text-[#6E665E] hover:text-[#1A1715] hover:bg-black/5'
              }`}
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#943F31] mb-1 font-mono">
                <Clock className="w-3.5 h-3.5" />
                <span>Typical Delivery: {selectedService.turnaround}</span>
                <span className="text-slate-500">·</span>
                <span>Starting at {currency === 'NGN' ? selectedService.startingPriceNGN : selectedService.startingPriceUSD}</span>
              </div>
              <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-[#1A1715]'}`}>
                {selectedService.title}
              </h3>
            </div>

            <p className={`text-sm leading-relaxed font-light ${isDark ? 'text-slate-300' : 'text-[#5C554F]'}`}>
              {selectedService.fullDesc}
            </p>

            <div
              className={`p-3.5 rounded-xl border text-xs ${
                isDark
                  ? 'bg-white/[0.04] border-white/10 text-slate-300'
                  : 'bg-[#F0EAE1] border-[#231C18]/10 text-[#3E3834]'
              }`}
            >
              <strong className={`font-semibold block mb-0.5 ${isDark ? 'text-white' : 'text-[#1A1715]'}`}>
                Ideal Client Profile:
              </strong>
              {selectedService.idealFor}
            </div>

            <div>
              <h4
                className={`text-xs font-semibold uppercase tracking-wider mb-3 font-mono ${
                  isDark ? 'text-slate-400' : 'text-[#7D756E]'
                }`}
              >
                Included Deliverables:
              </h4>
              <ul className="space-y-2.5">
                {selectedService.deliverables.map((d, idx) => (
                  <li
                    key={idx}
                    className={`flex items-start gap-2.5 text-xs sm:text-sm ${
                      isDark ? 'text-slate-300' : 'text-[#3E3834]'
                    }`}
                  >
                    <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`} />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`pt-4 border-t flex items-center justify-end gap-3 ${
                isDark ? 'border-white/10' : 'border-[#231C18]/10'
              }`}
            >
              <button
                onClick={() => setSelectedService(null)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  isDark ? 'text-slate-400 hover:text-white' : 'text-[#6E665E] hover:text-[#1A1715]'
                }`}
              >
                Close
              </button>
              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onSelectService(title);
                }}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#943F31] hover:bg-[#A84B3B] active:bg-[#7D3428] rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                Request This Package
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
