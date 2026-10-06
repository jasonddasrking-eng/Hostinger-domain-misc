import React, { useState } from 'react';
import { COMPARISON_ROWS } from '../data/portfolioData';
import { Code2, Sparkles, Check, X, Shield, Cpu, Gauge, Terminal, GitBranch, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const SkillsStack: React.FC = () => {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState<'stack' | 'comparison'>('stack');

  const techSkills = [
    { name: 'React 19 & Next.js', level: 'Expert', note: 'App Router, Server Actions, SSR & SSG' },
    { name: 'TypeScript', level: 'Strict Mode', note: 'Zero any policy, type-safe API contracts' },
    { name: 'Tailwind CSS', level: 'Mastery', note: 'Custom design tokens, zero runtime CSS bloat' },
    { name: 'HTML5 & Modern CSS', level: 'Semantic', note: 'Accessible ARIA patterns, fluid typography' },
    { name: 'Paystack & Flutterwave', level: 'Production', note: 'Local & foreign currency checkout gates' },
    { name: 'WordPress / Headless CMS', level: 'Advanced', note: 'Clean custom themes & migration to Next.js' },
    { name: 'Node.js & Edge APIs', level: 'Proficient', note: 'Serverless functions, webhooks & Stripe' },
    { name: 'Git & CI/CD Pipelines', level: 'Standard', note: 'Automated Vercel/Netlify staging preview environments' },
  ];

  const aiTools = [
    { name: 'Cursor IDE', role: 'Daily Driver', desc: 'Agentic multi-file refactoring, real-time code indexing & rapid architectural scaffolding' },
    { name: 'Claude 3.7 & Sonnet', role: 'Complex Logic', desc: 'Complex algorithmic design, math models, and TypeScript architecture guidance' },
    { name: 'v0 by Vercel', role: 'UI Acceleration', desc: 'Rapid initial layout prototyping & UI experimentation in minutes' },
    { name: 'OpenAI GPT-4o', role: 'Content & Strategy', desc: 'Semantic copy testing, user journey variation & regex generation' },
    { name: 'Lovable & Framer AI', role: 'Exploration', desc: 'Rapid customer flow testing & interactive micro-prototype generation' },
    { name: 'Figma AI & Modern Plugins', role: 'Design Tokens', desc: 'Extracting exact color tokens, spacing scales & vector asset pipelines' },
  ];

  const engineeringStrengths = [
    { title: 'Sub-Second Lighthouse Speed', detail: 'Consistently 95–100 scores across Performance, Accessibility, Best Practices, and SEO.' },
    { title: 'Responsive Viewport Polish', detail: 'Zero layout shift across 320px mobile up to 4K ultra-wide displays.' },
    { title: 'Technical SEO & JSON-LD', detail: 'Engineered with Schema.org markup, dynamic OpenGraph cards, and semantic HTML5 hierarchy.' },
    { title: 'Zero Vendor Lock-in', detail: 'Standard open-source packages you or any engineer can maintain forever without proprietary fees.' },
  ];

  return (
    <section
      id="stack"
      className={`py-20 md:py-28 border-t relative transition-colors duration-250 ${
        isDark ? 'border-white/10' : 'border-[#231C18]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TaylorHare Architectural Card Container */}
        <div
          className={`relative rounded-3xl border transition-all duration-250 overflow-hidden mb-14 ${
            isDark
              ? 'bg-[#181110] border-white/10 shadow-2xl shadow-black/40'
              : 'bg-[#F7F4EE] border-[#231C18]/10 shadow-xl shadow-[#231C18]/5'
          }`}
        >
          
          {/* Signature Top-Left Corner Triangle */}
          <div className="corner-triangle-lg pointer-events-none" aria-hidden="true" />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left: Atmospheric Visual */}
            <div
              className={`lg:col-span-5 relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[300px] overflow-hidden ${
                isDark ? 'bg-[#241412]' : 'bg-[#E2DDD3]'
              }`}
            >
              <img
                src="/src/assets/images/arch_villa_timber_1791131456457.jpg"
                alt="Modern Architectural Web Engineering"
                className="w-full h-full object-cover object-center filter contrast-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:hidden" />
              
              <div className="absolute bottom-4 left-4 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs font-mono text-white">
                <span>Ja-Sey Technical Systems</span>
              </div>
            </div>

            {/* Right: Section Header & Switcher */}
            <div
              className={`lg:col-span-7 p-8 sm:p-12 space-y-5 ${
                isDark ? 'text-[#EDE3DF]' : 'text-[#1A1715]'
              }`}
            >
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#943F31] block font-semibold">
                05 / Technical &amp; AI Systems
              </span>
              
              <h2
                className={`text-3xl sm:text-4xl font-light tracking-tight leading-tight ${
                  isDark ? 'text-white' : 'text-[#1A1715]'
                }`}
              >
                Senior Engineering Craft, <span className="font-semibold">Accelerated 5×</span>
              </h2>

              <p
                className={`text-sm leading-relaxed font-light ${
                  isDark ? 'text-slate-300' : 'text-[#5C554F]'
                }`}
              >
                Modern AI tools don't replace software engineering—they supercharge a disciplined developer. Here is how I build sub-second web platforms without bloated agency teams.
              </p>

              {/* Segmented Control Buttons */}
              <div className="pt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('stack')}
                  className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                    activeTab === 'stack'
                      ? 'bg-[#943F31] text-white font-semibold shadow-xs'
                      : isDark
                      ? 'bg-white/[0.06] border border-white/10 text-slate-300 hover:text-white'
                      : 'bg-white border border-[#231C18]/10 text-[#6E665E] hover:text-[#1A1715]'
                  }`}
                >
                  Tech &amp; AI Stack
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('comparison')}
                  className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                    activeTab === 'comparison'
                      ? 'bg-[#943F31] text-white font-semibold shadow-xs'
                      : isDark
                      ? 'bg-white/[0.06] border border-white/10 text-slate-300 hover:text-white'
                      : 'bg-white border border-[#231C18]/10 text-[#6E665E] hover:text-[#1A1715]'
                  }`}
                >
                  Agency vs Ja-Sey
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Dynamic Tab Body */}
        {activeTab === 'stack' && (
          <div className="space-y-12 animate-in fade-in duration-200">
            
            {/* Tech Stack Grid */}
            <div>
              <div
                className={`flex items-center gap-2 text-xs font-mono uppercase tracking-wider mb-4 ${
                  isDark ? 'text-slate-400' : 'text-[#7D756E]'
                }`}
              >
                <Code2 className="w-4 h-4 text-[#943F31]" />
                <span>Core Engineering Stack</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {techSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className={`p-5 rounded-2xl border transition-all space-y-1 shadow-xs ${
                      isDark
                        ? 'bg-[#181110] border-white/10 hover:border-[#943F31]/50'
                        : 'bg-[#F7F4EE] border-[#231C18]/10 hover:border-[#943F31]/30'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-[#1A1715]'}`}>
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-[#943F31] font-semibold">{skill.level}</span>
                    </div>
                    <p className={`text-xs font-light ${isDark ? 'text-slate-400' : 'text-[#6E665E]'}`}>
                      {skill.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Engineering Toolchain */}
            <div>
              <div
                className={`flex items-center gap-2 text-xs font-mono uppercase tracking-wider mb-4 ${
                  isDark ? 'text-slate-400' : 'text-[#7D756E]'
                }`}
              >
                <Sparkles className="w-4 h-4 text-[#943F31]" />
                <span>AI Engineering Toolchain</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {aiTools.map((tool, idx) => (
                  <div
                    key={idx}
                    className={`p-6 rounded-2xl border transition-all space-y-2 shadow-xs ${
                      isDark
                        ? 'bg-[#181110] border-white/10 hover:border-[#943F31]/50'
                        : 'bg-[#F7F4EE] border-[#231C18]/10 hover:border-[#943F31]/30'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-[#1A1715]'}`}>
                        {tool.name}
                      </h4>
                      <span
                        className={`text-[10px] font-mono text-[#943F31] px-2 py-0.5 rounded-full border ${
                          isDark
                            ? 'bg-white/[0.05] border-white/10'
                            : 'bg-white border-[#231C18]/10'
                        }`}
                      >
                        {tool.role}
                      </span>
                    </div>
                    <p
                      className={`text-xs leading-relaxed font-light ${
                        isDark ? 'text-slate-400' : 'text-[#5C554F]'
                      }`}
                    >
                      {tool.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4 Pillars Summary */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t ${
                isDark ? 'border-white/10' : 'border-[#231C18]/10'
              }`}
            >
              {engineeringStrengths.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <h4
                    className={`text-xs font-bold uppercase tracking-wider font-mono ${
                      isDark ? 'text-white' : 'text-[#1A1715]'
                    }`}
                  >
                    {item.title}
                  </h4>
                  <p
                    className={`text-xs font-light leading-relaxed ${
                      isDark ? 'text-slate-400' : 'text-[#6E665E]'
                    }`}
                  >
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* Tab 2: Comparison Table */}
        {activeTab === 'comparison' && (
          <div
            className={`rounded-3xl border shadow-sm overflow-hidden animate-in fade-in duration-200 ${
              isDark ? 'bg-[#181110] border-white/10' : 'bg-[#F7F4EE] border-[#231C18]/10'
            }`}
          >
            <div
              className={`p-6 sm:p-8 border-b flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                isDark ? 'border-white/10' : 'border-[#231C18]/10'
              }`}
            >
              <div>
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-[#1A1715]'}`}>
                  The Modern Web Architecture Advantage
                </h3>
                <p className={`text-xs sm:text-sm mt-1 font-light ${isDark ? 'text-slate-400' : 'text-[#5C554F]'}`}>
                  How pairing AI velocity with senior TypeScript craft delivers 5× the speed at half the traditional cost.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#943F31]">
                <Check className="w-4 h-4" />
                <span>Zero agency overhead</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr
                    className={`border-b text-[11px] font-mono uppercase tracking-wider ${
                      isDark
                        ? 'border-white/10 bg-white/[0.02] text-slate-400'
                        : 'border-[#231C18]/10 bg-white/50 text-[#7D756E]'
                    }`}
                  >
                    <th className="py-4 px-6">Evaluation Metric</th>
                    <th className="py-4 px-6">Traditional Agency</th>
                    <th className="py-4 px-6 text-[#943F31] font-bold">Ja-Sey Web Architecture</th>
                  </tr>
                </thead>
                <tbody className={`divide-y ${isDark ? 'divide-white/10' : 'divide-[#231C18]/10'}`}>
                  {COMPARISON_ROWS.map((row, idx) => (
                    <tr
                      key={idx}
                      className={
                        row.highlight
                          ? isDark
                            ? 'bg-[#943F31]/15'
                            : 'bg-[#943F31]/5'
                          : isDark
                          ? 'hover:bg-white/[0.02] transition-colors'
                          : 'hover:bg-white/40 transition-colors'
                      }
                    >
                      <td className={`py-4 px-6 font-semibold ${isDark ? 'text-white' : 'text-[#1A1715]'}`}>
                        {row.metric}
                      </td>
                      <td className={`py-4 px-6 ${isDark ? 'text-slate-400' : 'text-[#7D756E]'}`}>
                        {row.traditional}
                      </td>
                      <td className={`py-4 px-6 font-semibold ${isDark ? 'text-white' : 'text-[#1A1715]'}`}>
                        <span className="flex items-center gap-1.5 text-[#943F31]">
                          <Check className="w-4 h-4 shrink-0" />
                          <span>{row.alexAI}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div
              className={`p-4 sm:p-5 border-t text-center text-xs font-mono ${
                isDark ? 'bg-black/30 border-white/10 text-slate-400' : 'bg-white/70 border-[#231C18]/10 text-[#6E665E]'
              }`}
            >
              Milestone delivery schedules backed by written project contract and NDA protection.
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
