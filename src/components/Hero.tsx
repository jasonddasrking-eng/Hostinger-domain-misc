import React from 'react';
import { ArrowRight, ArrowUpRight, Sparkles, Check, Globe, Clock, Layers } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onOpenContact: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onExploreWork }) => {
  const { isDark } = useTheme();

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      
      {/* Main TaylorHare Architectural Canvas Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Architectural Card Container with Signature Top-Left Chestnut Triangle Ribbon */}
        <div
          className={`relative rounded-3xl border transition-all duration-250 overflow-hidden p-6 sm:p-10 lg:p-14 ${
            isDark
              ? 'bg-[#181110] border-white/10 shadow-2xl shadow-black/40'
              : 'bg-[#F7F4EE] border-[#231C18]/10 shadow-xl shadow-[#231C18]/5'
          }`}
        >
          
          {/* Signature TaylorHare Chestnut Folded Triangle Bookmark in Top-Left Corner */}
          <div
            className="corner-triangle-lg pointer-events-none"
            aria-hidden="true"
          />

          {/* Top-Right Architecture Office Mark */}
          <div className="flex justify-end mb-8 sm:mb-12">
            <div className="text-right">
              <span
                className={`text-xs sm:text-sm font-semibold tracking-tight block ${
                  isDark ? 'text-white' : 'text-[#1A1715]'
                }`}
              >
                Ja-Sey Web Engineering
              </span>
              <span
                className={`text-[11px] font-mono uppercase tracking-widest block mt-0.5 ${
                  isDark ? 'text-slate-400' : 'text-[#7D756E]'
                }`}
              >
                Nigeria · Worldwide Partner
              </span>
            </div>
          </div>

          {/* TaylorHare Two-Column Split Architecture Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Editorial Headline, Narrative, and Secondary Architectural Thumbnail */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-8 sm:space-y-10">
              
              {/* Main Headline */}
              <div className="space-y-6">
                <h1
                  className={`text-3xl sm:text-5xl lg:text-[3.25rem] font-light tracking-tight leading-[1.15] [text-wrap:balance] ${
                    isDark ? 'text-white' : 'text-[#1A1715]'
                  }`}
                >
                  Websites are about much more than code.{' '}
                  <span className={`font-semibold ${isDark ? 'text-white' : 'text-[#1A1715]'}`}>
                    We engineer web apps that convert.
                  </span>
                </h1>

                {/* Editorial Narrative with Signature Italicized Terms */}
                <p
                  className={`text-sm sm:text-base leading-relaxed max-w-lg font-light [text-wrap:balance] ${
                    isDark ? 'text-slate-300' : 'text-[#5C554F]'
                  }`}
                >
                  Working{' '}
                  <em
                    className={`font-serif not-italic italic font-medium ${
                      isDark ? 'text-white' : 'text-[#1A1715]'
                    }`}
                  >
                    internationally
                  </em>
                  , throughout the UK, the USA, Europe, and Nigeria, our engineering language responds to{' '}
                  <em
                    className={`font-serif not-italic italic font-medium ${
                      isDark ? 'text-white' : 'text-[#1A1715]'
                    }`}
                  >
                    local
                  </em>{' '}
                  performance realities, sub-second mobile speeds, and fair milestone investment plans built for both small businesses and scaling enterprises.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono uppercase tracking-wider font-semibold text-white bg-[#943F31] hover:bg-[#A84B3B] active:bg-[#7D3428] rounded-full shadow-md shadow-[#943F31]/20 transition-all cursor-pointer"
                >
                  <span>Commission a Website</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={onExploreWork}
                  className={`inline-flex items-center gap-2 px-6 py-3 text-xs font-mono uppercase tracking-wider font-semibold rounded-full transition-all cursor-pointer shadow-xs ${
                    isDark
                      ? 'text-slate-200 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/10'
                      : 'text-[#2B2521] hover:text-black bg-white/70 hover:bg-white border border-[#231C18]/15'
                  }`}
                >
                  <span>Selected Work</span>
                  <ArrowUpRight
                    className={`w-3.5 h-3.5 ${isDark ? 'text-slate-400' : 'text-[#7D756E]'}`}
                  />
                </button>
              </div>

              {/* Secondary Thumbnail */}
              <div
                className={`pt-4 border-t ${
                  isDark ? 'border-white/10' : 'border-[#231C18]/10'
                }`}
              >
                <div
                  className={`group relative rounded-2xl overflow-hidden border shadow-sm max-w-sm ${
                    isDark ? 'bg-[#241412] border-white/10' : 'bg-[#E8E2D8] border-[#231C18]/10'
                  }`}
                >
                  {/* Miniature corner triangle */}
                  <div className="corner-triangle-sm pointer-events-none" aria-hidden="true" />
                  
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src="/src/assets/images/mobile_code_desk_1791281923007.jpg"
                      alt="Developer workspace with mobile app preview and code editor"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center filter saturate-[0.98] contrast-[1.02] transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-85" />
                    
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[11px] font-mono">
                      <span>Full-Stack Web Engineering</span>
                      <span className="text-white/80">3–7 Days Turnaround</span>
                    </div>
                  </div>
                </div>

                <div
                  className={`flex items-center gap-4 text-xs font-mono pt-3 ${
                    isDark ? 'text-slate-400' : 'text-[#6E665E]'
                  }`}
                >
                  <span>Based in Nigeria</span>
                  <span aria-hidden="true">·</span>
                  <span>WAT / GMT+1</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#943F31] font-semibold">Small Biz from ₦150k · Standard from ₦372k</span>
                </div>
              </div>

            </div>

            {/* Right Column: Web Developer Modern Workspace Showcase */}
            <div className="lg:col-span-6 relative">
              <div
                className={`relative rounded-3xl overflow-hidden border shadow-lg group aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full ${
                  isDark
                    ? 'bg-[#1C1210] border-white/10 shadow-black/40'
                    : 'bg-[#E8E3DA] border-[#231C18]/10 shadow-[#231C18]/10'
                }`}
              >
                
                <img
                  src="/src/assets/images/multimonitor_desk_1791281909352.jpg"
                  alt="Multi-monitor developer workstation with code, terminal, and UI architecture"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter saturate-[0.98] contrast-[1.02] transition-transform duration-700 group-hover:scale-[1.02]"
                />

                {/* Subtle soft studio lighting gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1A17]/40 via-transparent to-transparent pointer-events-none" />

                {/* Top-Right Stamp inside Image */}
                <div className="absolute top-5 right-6 text-right z-10">
                  <span className="text-xs sm:text-sm font-semibold tracking-tight text-white drop-shadow-md">
                    Ja-Sey Web Studio
                  </span>
                </div>

                {/* Bottom Overlay Info Tag */}
                <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between text-white z-10">
                  <div className="text-xs font-mono drop-shadow-md">
                    <span className="block font-bold">Production Web Applications</span>
                    <span className="text-white/80 text-[11px]">Sub-second speed on mobile &amp; 4G networks</span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[10px] font-mono text-emerald-300">
                    99+ Core Web Vitals
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
