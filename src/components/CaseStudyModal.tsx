import React from 'react';
import { Project } from '../data/portfolioData';
import { X, ExternalLink, Clock, TrendingUp, CheckCircle, Cpu, Code2, Sparkles } from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onInquire }) => {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
    >
      <div className="relative max-w-3xl w-full bg-[#FAF7F2] border border-[#231C18]/15 rounded-3xl shadow-2xl overflow-hidden my-8">
        
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-black/60 text-white hover:bg-black/90 backdrop-blur-md border border-white/20 transition-colors cursor-pointer"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Header Image */}
        <div className="relative aspect-[16/9] w-full bg-[#E2DDD3] overflow-hidden border-b border-[#231C18]/10">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <div className="absolute bottom-5 left-6 right-6 flex flex-wrap items-end justify-between gap-3 text-white">
            <div>
              <div className="text-xs font-semibold text-[#E8A598] mb-1 flex items-center gap-2 font-mono">
                <span>{project.category}</span>
                <span className="text-white/60">·</span>
                <span>{project.client}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{project.title}</h3>
            </div>
            
            <div className="text-xs font-mono text-emerald-300 bg-emerald-950/70 border border-emerald-500/30 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{project.highlightMetric}</span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-7 max-h-[60vh] overflow-y-auto text-[#1A1715]">
          
          {/* Summary */}
          <div>
            <h4 className="text-xs font-semibold text-[#7D756E] uppercase tracking-wider mb-2 font-mono">Project Overview</h4>
            <p className="text-sm sm:text-base text-[#5C554F] leading-relaxed font-light">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-white border border-[#231C18]/10 shadow-xs">
            <div>
              <span className="text-xs text-[#7D756E] block font-mono">Delivery Speed</span>
              <span className="text-base font-bold text-[#1A1715] flex items-center gap-1 mt-0.5">
                <Clock className="w-4 h-4 text-[#943F31]" />
                {project.deliveryDays} Days
              </span>
            </div>
            <div>
              <span className="text-xs text-[#7D756E] block font-mono">Key Result</span>
              <span className="text-base font-bold text-emerald-700 mt-0.5 block truncate">
                {project.highlightMetric}
              </span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-xs text-[#7D756E] block font-mono">Architecture</span>
              <span className="text-base font-bold text-[#1A1715] mt-0.5 block">
                React + Tailwind
              </span>
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-white border border-[#231C18]/10 space-y-1.5 shadow-xs">
              <h4 className="text-xs font-semibold text-[#943F31] uppercase tracking-wider font-mono">The Challenge</h4>
              <p className="text-xs text-[#5C554F] leading-relaxed font-light">{project.challenge}</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#231C18]/10 space-y-1.5 shadow-xs">
              <h4 className="text-xs font-semibold text-emerald-800 uppercase tracking-wider font-mono">The Architectural Solution</h4>
              <p className="text-xs text-[#5C554F] leading-relaxed font-light">{project.solution}</p>
            </div>
          </div>

          {/* AI Advantage Callout */}
          <div className="p-4 rounded-2xl bg-[#F0EAE1] border border-[#231C18]/10 space-y-1 shadow-xs">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1A1715] font-mono">
              <Sparkles className="w-3.5 h-3.5 text-[#943F31]" />
              <span>AI Velocity Advantage</span>
            </div>
            <p className="text-xs text-[#5C554F] leading-relaxed font-light">
              {project.aiAdvantage}
            </p>
          </div>

          {/* Tech and AI Tools */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white border border-[#231C18]/10 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1A1715] font-mono">
                <Code2 className="w-4 h-4 text-[#943F31]" />
                <span>Production Stack</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-[11px] font-mono rounded bg-[#F0EAE1] text-[#3E3834]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#231C18]/10 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1A1715] font-mono">
                <Sparkles className="w-4 h-4 text-[#943F31]" />
                <span>AI Engineering Pair</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.aiTools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-[11px] font-mono rounded bg-[#F0EAE1] text-[#3E3834]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-[#F0EAE1] border-t border-[#231C18]/10 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="text-xs font-mono uppercase tracking-wider font-semibold text-[#6E665E] hover:text-[#1A1715] transition-colors cursor-pointer"
          >
            Back to Projects
          </button>

          <button
            onClick={() => {
              onClose();
              onInquire(project.title);
            }}
            className="px-5 py-2.5 text-xs font-mono uppercase tracking-wider font-semibold text-white bg-[#943F31] hover:bg-[#A84B3B] active:bg-[#7D3428] rounded-xl shadow-sm transition-colors cursor-pointer flex items-center gap-2"
          >
            <span>Request Similar Scope</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
