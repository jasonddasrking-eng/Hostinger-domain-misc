import React, { useState, useEffect, useRef } from 'react';
import { Zap, Code, ShieldCheck, Search, Users, Cpu, MapPin, Globe, Camera, Trash2, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface AboutProps {
  onOpenContact: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenContact }) => {
  const { isDark } = useTheme();
  const [customAvatar, setCustomAvatar] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('jasey_profile_avatar');
    if (saved) {
      setCustomAvatar(saved);
    }
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setCustomAvatar(result);
        localStorage.setItem('jasey_profile_avatar', result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveCustomAvatar = () => {
    setCustomAvatar(null);
    localStorage.removeItem('jasey_profile_avatar');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const strengths = [
    {
      icon: Code,
      title: 'Clean Code & Architecture',
      description: 'Zero bloated page-builders or brittle plugins. Handcrafted with semantic TypeScript, Next.js, and modern Tailwind CSS.',
    },
    {
      icon: Zap,
      title: 'Nigerian Network Optimization',
      description: 'Engineered for instant sub-1.2s loading speeds on 3G/4G mobile networks so you never lose local African customers.',
    },
    {
      icon: Search,
      title: 'Paystack & Global Checkout',
      description: 'Seamless payment gateways with Paystack, Flutterwave, and Stripe ready for both local Naira and foreign currency buyers.',
    },
    {
      icon: Users,
      title: 'Direct Senior Engineering',
      description: 'No junior handoffs or bureaucratic agency ticketing. You collaborate directly with Ja-Sey from first brief to live production.',
    },
    {
      icon: Cpu,
      title: 'Built for Small & Big Businesses',
      description: 'Accessible ₦150k small business launchpads up to enterprise multi-page portals for corporations.',
    },
    {
      icon: ShieldCheck,
      title: '100% Code Ownership',
      description: 'You own your entire code repository and deployment. No monthly platform hostage fees, proprietary locks, or vendor trap.',
    },
  ];

  return (
    <section
      id="about"
      className={`py-20 md:py-28 border-t relative transition-colors duration-250 ${
        isDark ? 'border-white/10' : 'border-[#231C18]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TaylorHare Architectural Card Container */}
        <div
          className={`relative rounded-3xl border transition-all duration-250 overflow-hidden mb-16 ${
            isDark
              ? 'bg-[#181110] border-white/10 shadow-2xl shadow-black/40'
              : 'bg-[#F7F4EE] border-[#231C18]/10 shadow-xl shadow-[#231C18]/5'
          }`}
        >
          
          {/* Signature Top-Left Chestnut Triangle Ribbon */}
          <div className="corner-triangle-lg pointer-events-none" aria-hidden="true" />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left: Studio Editorial Portrait Frame */}
            <div
              className={`lg:col-span-6 relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[380px] sm:min-h-[460px] overflow-hidden ${
                isDark ? 'bg-[#241412]' : 'bg-[#E2DDD3]'
              }`}
            >
              <img
                src={customAvatar || '/src/assets/images/neo_founder_ai_1791128750074.jpg'}
                alt="Ja-Sey - Senior Web Developer collaborating with AI"
                className="w-full h-full object-cover object-center filter saturate-[0.98] contrast-[1.02] transition-transform duration-700 hover:scale-102"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:hidden" />

              {/* Photo customization controls */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5">
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="about-photo-upload"
                />
                <label
                  htmlFor="about-photo-upload"
                  className="px-3 py-1.5 text-xs font-mono rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md text-white border border-white/20 transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm"
                  title="Upload your own photo"
                >
                  <Camera className="w-3.5 h-3.5 text-[#E8A598]" />
                  <span>{customAvatar ? 'Change Photo' : 'Upload Photo'}</span>
                </label>

                {customAvatar && (
                  <button
                    onClick={handleRemoveCustomAvatar}
                    className="p-1.5 rounded-full bg-black/60 hover:bg-red-950/80 text-white border border-white/20 transition-colors cursor-pointer"
                    title="Reset to editorial image"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Location Badge */}
              <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs font-mono text-white shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-[#E8A598]" />
                <span>Based in Nigeria · Global Reach</span>
              </div>
            </div>

            {/* Right: Narrative & Editorial Content */}
            <div
              className={`lg:col-span-6 p-8 sm:p-12 lg:p-14 space-y-6 ${
                isDark ? 'text-[#EDE3DF]' : 'text-[#1A1715]'
              }`}
            >
              
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#943F31] block font-semibold">
                  01 / The Practice
                </span>
                <h2
                  className={`text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-tight ${
                    isDark ? 'text-white' : 'text-[#1A1715]'
                  }`}
                >
                  <span className="font-semibold">Ja-Sey</span>{' '}
                  <span className={`font-light ${isDark ? 'text-slate-400' : 'text-[#5C554F]'}`}>
                    Philosophy
                  </span>
                </h2>
              </div>

              <div
                className={`space-y-4 text-sm sm:text-base font-light leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-[#5C554F]'
                }`}
              >
                <p>
                  I’m Ja-Sey, a senior web developer based in{' '}
                  <strong className={`font-semibold ${isDark ? 'text-white' : 'text-[#1A1715]'}`}>
                    Nigeria
                  </strong>
                  . For over eight years, I built full-stack applications the traditional way—spending weeks writing boilerplate, battling slow revision cycles, and watching agencies overcharge clients.
                </p>
                <p>
                  By integrating state-of-the-art AI systems like{' '}
                  <strong className={`font-semibold ${isDark ? 'text-white' : 'text-[#1A1715]'}`}>
                    Cursor, Claude 3.7, and v0
                  </strong>{' '}
                  into my daily architecture, I transformed that process. What once took an agency six weeks can now be designed, engineered, and launched with pixel perfection in{' '}
                  <strong className="text-[#943F31] font-semibold">3 to 7 business days</strong>.
                </p>
                <p className={`text-xs sm:text-sm ${isDark ? 'text-slate-400' : 'text-[#6E665E]'}`}>
                  <strong className={`font-semibold ${isDark ? 'text-white' : 'text-[#1A1715]'}`}>
                    My commitment:
                  </strong>{' '}
                  To help both small local businesses and large global enterprises grow. Whether you need an affordable ₦150k small business storefront or a multi-page enterprise web platform, I deliver world-class engineering with fair, milestone-based pricing.
                </p>
              </div>

              {/* Key Credentials Strip */}
              <div
                className={`grid grid-cols-3 gap-3 pt-5 border-t text-xs font-mono ${
                  isDark ? 'border-white/10' : 'border-[#231C18]/10'
                }`}
              >
                <div>
                  <span className={`block text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-[#1A1715]'}`}>
                    8+
                  </span>
                  <span className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-[#7D756E]'}`}>
                    Years Web Dev
                  </span>
                </div>
                <div>
                  <span className="block text-xl sm:text-2xl font-bold text-[#943F31]">
                    50+
                  </span>
                  <span className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-[#7D756E]'}`}>
                    Sites Deployed
                  </span>
                </div>
                <div>
                  <span className={`block text-xl sm:text-2xl font-bold ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>
                    3–7d
                  </span>
                  <span className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-[#7D756E]'}`}>
                    Avg Delivery
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenContact}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs font-mono uppercase tracking-wider transition-all cursor-pointer shadow-sm ${
                    isDark
                      ? 'bg-white text-slate-900 hover:bg-[#F2D7D2]'
                      : 'bg-[#1A1715] text-white hover:bg-[#943F31]'
                  }`}
                >
                  <span>Work with Ja-Sey</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* 6 Engineering Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((s, idx) => (
            <div
              key={idx}
              className={`p-7 rounded-2xl border transition-all space-y-3 shadow-xs hover:shadow-md ${
                isDark
                  ? 'bg-[#181110] border-white/10 hover:border-[#943F31]/50'
                  : 'bg-[#F7F4EE] border-[#231C18]/10 hover:border-[#943F31]/40'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center text-[#943F31] shadow-xs ${
                  isDark ? 'bg-white/[0.05] border border-white/10' : 'bg-white border border-[#231C18]/10'
                }`}
              >
                <s.icon className="w-5 h-5" />
              </div>
              <h3
                className={`text-base font-bold tracking-tight ${
                  isDark ? 'text-white' : 'text-[#1A1715]'
                }`}
              >
                {s.title}
              </h3>
              <p
                className={`text-xs sm:text-sm leading-relaxed font-light ${
                  isDark ? 'text-slate-400' : 'text-[#5C554F]'
                }`}
              >
                {s.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
