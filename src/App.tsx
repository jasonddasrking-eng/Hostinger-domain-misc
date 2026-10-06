import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { PricingPlans } from './components/PricingPlans';
import { Projects } from './components/Projects';
import { SkillsStack } from './components/SkillsStack';
import { Estimator } from './components/Estimator';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MessageSquare, Sun, Moon } from 'lucide-react';

function PortfolioApp() {
  const { isDark, setTheme, toastMessage } = useTheme();
  const [prefilledScope, setPrefilledScope] = useState<{
    type: string;
    timeline: string;
    estimatedPrice: string;
    features: string[];
  } | null>(null);

  const handleOpenContact = (customMessage?: string) => {
    if (customMessage) {
      setPrefilledScope({
        type: customMessage,
        timeline: 'Standard (3–7 days)',
        estimatedPrice: 'Transparent Pricing',
        features: ['Full responsive design', 'Clean TypeScript code', 'Paystack/Stripe ready', 'Lighthouse 95+ guarantee'],
      });
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreWork = () => {
    const workElem = document.getElementById('work');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyScope = (scope: {
    type: string;
    timeline: string;
    estimatedPrice: string;
    features: string[];
  }) => {
    setPrefilledScope(scope);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-250 relative ${
        isDark
          ? 'bg-[#120C0B] text-[#EDE3DF] selection:bg-[#943F31] selection:text-white'
          : 'bg-[#ECE7DF] text-[#1A1715] selection:bg-[#943F31] selection:text-white'
      }`}
    >
      <Navbar onOpenContact={() => handleOpenContact()} />
      <main>
        <Hero
          onOpenContact={() => handleOpenContact()}
          onExploreWork={handleExploreWork}
        />
        <About onOpenContact={() => handleOpenContact()} />
        <Services onSelectService={(title) => handleOpenContact(`Service Inquiry: ${title}`)} />
        <PricingPlans
          onSelectPlan={(planName, price) =>
            handleOpenContact(`Selected Plan: ${planName} (${price})`)
          }
        />
        <Projects onInquire={(projectName) => handleOpenContact(`Project Inquiry: Inspired by ${projectName}`)} />
        <SkillsStack />
        <Estimator onApplyScope={handleApplyScope} />
        <Process onOpenContact={() => handleOpenContact()} />
        <Testimonials />
        <Contact prefilledScope={prefilledScope} />
      </main>
      <Footer />

      {/* Floating Theme Mode Switcher Capsule (Bottom Left) */}
      <aside
        aria-label="Theme appearance switcher"
        className="fixed bottom-6 left-6 z-40"
      >
        <div
          className={`flex items-center p-1 rounded-full border shadow-xl backdrop-blur-md transition-all duration-200 ${
            isDark
              ? 'bg-[#181110]/95 border-white/15 text-slate-200 shadow-black/50'
              : 'bg-[#FAF7F2]/95 border-[#231C18]/15 text-[#1A1715] shadow-[#231C18]/10'
          }`}
          role="radiogroup"
          aria-label="Floating theme options"
        >
          <button
            type="button"
            onClick={() => setTheme('light')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
              !isDark
                ? 'bg-white text-[#943F31] font-semibold shadow-xs border border-[#231C18]/10'
                : 'text-slate-400 hover:text-white'
            }`}
            aria-label="Change to Light mode"
            title="Change to Light mode (Press 'L' or 'D')"
            aria-checked={!isDark}
            role="radio"
          >
            <Sun className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-[11px]">Light</span>
          </button>
          <button
            type="button"
            onClick={() => setTheme('dark')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
              isDark
                ? 'bg-[#943F31] text-white font-semibold shadow-xs border border-white/10'
                : 'text-[#6E665E] hover:text-[#1A1715]'
            }`}
            aria-label="Change to Dark mode"
            title="Change to Dark mode (Press 'L' or 'D')"
            aria-checked={isDark}
            role="radio"
          >
            <Moon className="w-3.5 h-3.5 text-amber-200" />
            <span className="text-[11px]">Dark</span>
          </button>
        </div>
      </aside>

      {/* TaylorHare Signature Floating Circular Chestnut Action Button (Bottom Right) */}
      <button
        onClick={() => handleOpenContact()}
        aria-label="Commission a project or quick inquiry"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#943F31] hover:bg-[#A84B3B] active:bg-[#7D3428] text-white shadow-xl shadow-[#943F31]/30 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer group"
      >
        <MessageSquare className="w-5 h-5 transition-transform group-hover:scale-110" />
      </button>

      {/* Floating Feedback Toast for Theme Transitions */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-22 left-1/2 -translate-x-1/2 z-50 pointer-events-none transition-all duration-200"
        >
          <div
            className={`px-4 py-2 rounded-full text-xs font-mono font-medium shadow-2xl flex items-center gap-2 border backdrop-blur-md ${
              isDark
                ? 'bg-[#221715]/95 text-[#EDE3DF] border-white/20 shadow-black/80'
                : 'bg-white/95 text-[#1A1715] border-[#231C18]/15 shadow-[#231C18]/20'
            }`}
          >
            {isDark ? (
              <Moon className="w-3.5 h-3.5 text-amber-300" />
            ) : (
              <Sun className="w-3.5 h-3.5 text-[#943F31]" />
            )}
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
