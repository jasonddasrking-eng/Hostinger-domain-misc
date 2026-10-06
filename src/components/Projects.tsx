import React, { useState, useMemo } from 'react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ArrowUpRight, Clock, TrendingUp, Sparkles, Code2, Layers } from 'lucide-react';
import { CaseStudyModal } from './CaseStudyModal';
import { useTheme } from '../context/ThemeContext';

interface ProjectsProps {
  onInquire: (projectName: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onInquire }) => {
  const { isDark } = useTheme();
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = ['All', 'Landing Pages', 'SaaS', 'E-commerce', 'Business', 'Portfolios'];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section
      id="work"
      className={`py-24 border-t relative transition-colors duration-250 ${
        isDark ? 'border-white/10' : 'border-[#231C18]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-[#943F31] uppercase tracking-widest font-mono">
              04. Selected Works &amp; Case Studies
            </span>
            <h2
              className={`text-3xl sm:text-4xl font-light tracking-tight mt-2 [text-wrap:balance] ${
                isDark ? 'text-white' : 'text-[#1A1715]'
              }`}
            >
              Websites Engineered for Speed &amp; Conversion
            </h2>
            <p
              className={`text-base sm:text-lg mt-3 font-light ${
                isDark ? 'text-slate-400' : 'text-[#5C554F]'
              }`}
            >
              Explore recent client commissions delivered in record time using modern AI tools paired with senior TypeScript craft.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div
            className={`flex items-center gap-1.5 p-1.5 border rounded-xl overflow-x-auto max-w-full shadow-xs ${
              isDark
                ? 'bg-white/[0.05] border-white/10'
                : 'bg-white/80 border-[#231C18]/10'
            }`}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-150 cursor-pointer whitespace-nowrap ${
                  activeFilter === cat
                    ? 'bg-[#943F31] text-white font-semibold shadow-xs'
                    : isDark
                    ? 'text-slate-400 hover:text-white hover:bg-white/5'
                    : 'text-[#6E665E] hover:text-[#1A1715] hover:bg-black/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative rounded-3xl border overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 ${
                isDark
                  ? 'bg-[#181110] border-white/10 hover:border-[#943F31]/50'
                  : 'bg-[#F7F4EE] border-[#231C18]/10 hover:border-[#943F31]/40'
              }`}
            >
              {/* TaylorHare Signature Miniature Corner Triangle on Each Project Card */}
              <div className="corner-triangle-sm pointer-events-none" aria-hidden="true" />

              <div>
                {/* Media Container */}
                <div
                  className={`relative aspect-[16/10] overflow-hidden border-b ${
                    isDark ? 'bg-[#241412] border-white/10' : 'bg-[#E2DDD3] border-[#231C18]/10'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60 ${
                      isDark ? 'from-[#181110]' : 'from-black/50'
                    }`}
                  />
                  
                  {/* Subtle top metadata */}
                  <div className="absolute top-3 left-8 right-3 flex items-center justify-between text-xs">
                    <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-white font-mono border border-white/10 text-[11px]">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-950/80 backdrop-blur-md text-emerald-300 font-mono border border-emerald-500/20 text-[11px] flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {project.deliveryDays}d launch
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 space-y-3.5">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3
                      className={`text-xl font-bold transition-colors ${
                        isDark ? 'text-white group-hover:text-[#E8A598]' : 'text-[#1A1715] group-hover:text-[#943F31]'
                      }`}
                    >
                      {project.title}
                    </h3>
                  </div>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed line-clamp-2 font-light ${
                      isDark ? 'text-slate-400' : 'text-[#5C554F]'
                    }`}
                  >
                    {project.summary}
                  </p>

                  {/* Clean unboxed proof metric */}
                  <div
                    className={`pt-2 flex items-center gap-2 text-xs font-semibold font-mono ${
                      isDark ? 'text-emerald-400' : 'text-emerald-800'
                    }`}
                  >
                    <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                    <span>{project.highlightMetric}</span>
                  </div>

                  {/* Tech stack & AI tools unboxed row */}
                  <div
                    className={`pt-3 border-t text-xs space-y-1 ${
                      isDark ? 'border-white/10' : 'border-[#231C18]/10'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 truncate">
                      <Code2 className="w-3 h-3 text-[#943F31] shrink-0" />
                      <span
                        className={`font-mono text-[11px] truncate ${
                          isDark ? 'text-slate-300' : 'text-[#3E3834]'
                        }`}
                      >
                        {project.techStack.slice(0, 3).join(' · ')}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 truncate">
                      <Sparkles className="w-3 h-3 text-[#7D756E] shrink-0" />
                      <span className="text-[#7D756E] font-mono text-[11px] truncate">
                        {project.aiTools.join(' · ')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setActiveProjectModal(project)}
                  className={`w-full py-2.5 px-4 text-xs font-mono uppercase tracking-wider font-semibold rounded-xl transition-all duration-150 flex items-center justify-center gap-1.5 cursor-pointer shadow-xs ${
                    isDark
                      ? 'text-white hover:text-white bg-white/[0.06] hover:bg-[#943F31] border border-white/10 hover:border-[#943F31]'
                      : 'text-[#1A1715] hover:text-white bg-white hover:bg-[#943F31] border border-[#231C18]/15 hover:border-[#943F31]'
                  }`}
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div
          className={`mt-14 p-6 sm:p-8 rounded-3xl border flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm ${
            isDark ? 'bg-[#181110] border-white/10' : 'bg-[#F7F4EE] border-[#231C18]/10'
          }`}
        >
          <div className="space-y-1 text-center sm:text-left">
            <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-[#1A1715]'}`}>
              Have a specific design or Figma mockup ready?
            </h4>
            <p className={`text-xs sm:text-sm font-light ${isDark ? 'text-slate-400' : 'text-[#5C554F]'}`}>
              I can convert your design to production-ready React code in under 5 business days.
            </p>
          </div>
          <button
            onClick={() => onInquire('Figma to React Rapid Turnaround')}
            className="px-5 py-2.5 text-xs font-mono uppercase tracking-wider font-semibold text-white bg-[#943F31] hover:bg-[#A84B3B] active:bg-[#7D3428] rounded-xl shadow-md transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            Submit Your Figma File
          </button>
        </div>

      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
        onInquire={onInquire}
      />
    </section>
  );
};
