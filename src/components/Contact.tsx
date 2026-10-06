import React, { useState } from 'react';
import { Mail, Calendar, Check, Copy, ArrowRight, Clock, MessageSquare, Send, ShieldCheck, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ContactProps {
  prefilledScope?: {
    type: string;
    timeline: string;
    estimatedPrice: string;
    features: string[];
  } | null;
}

export const Contact: React.FC<ContactProps> = ({ prefilledScope }) => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: prefilledScope?.type || 'Landing Page & Conversion Funnel',
    budget: '₦833k – ₦1.8M',
    details: prefilledScope
      ? `Estimated Scope: ${prefilledScope.type} (${prefilledScope.timeline}, ${prefilledScope.estimatedPrice})\nIncluded Features: ${prefilledScope.features.join(', ')}`
      : '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [calendlyModalOpen, setCalendlyModalOpen] = useState(false);
  const [bookingSlot, setBookingSlot] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  React.useEffect(() => {
    if (prefilledScope) {
      setFormData((prev) => ({
        ...prev,
        projectType: prefilledScope.type,
        details: `Estimated Scope: ${prefilledScope.type} (${prefilledScope.timeline}, ${prefilledScope.estimatedPrice})\nIncluded Features: ${prefilledScope.features.join(', ')}\n\nProject Notes: `,
      }));
    }
  }, [prefilledScope]);

  const copyEmail = () => {
    navigator.clipboard.writeText('hello@jasey.dev');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid business email address.');
      return;
    }

    if (!formData.details.trim()) {
      setErrorMessage('Please briefly share your project goals.');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section
      id="contact"
      className={`py-24 border-t relative transition-colors duration-250 ${
        isDark ? 'border-white/10' : 'border-[#231C18]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold text-[#943F31] uppercase tracking-widest font-mono">
            09. Inquiries &amp; Commissions
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mt-2 [text-wrap:balance] ${
              isDark ? 'text-white' : 'text-[#1A1715]'
            }`}
          >
            Ready to build your next web project?
          </h2>
          <p
            className={`text-base sm:text-lg mt-3 font-light [text-wrap:balance] ${
              isDark ? 'text-slate-400' : 'text-[#5C554F]'
            }`}
          >
            Based in Nigeria. Partnering with companies nationwide and internationally across the UK, USA, Canada, Europe, and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Methods & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick response badge */}
            <div
              className={`p-7 rounded-3xl border space-y-4 shadow-xs ${
                isDark ? 'bg-[#181110] border-white/10' : 'bg-[#F7F4EE] border-[#231C18]/10'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isDark
                      ? 'bg-emerald-950/60 border border-emerald-500/20 text-emerald-400'
                      : 'bg-emerald-100 border border-emerald-300 text-emerald-800'
                  }`}
                >
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-[#1A1715]'}`}>
                    4-Hour Response Guarantee
                  </h4>
                  <p className={`text-xs font-light ${isDark ? 'text-slate-400' : 'text-[#6E665E]'}`}>
                    Direct reply from Ja-Sey with scope &amp; schedule
                  </p>
                </div>
              </div>

              <div
                className={`pt-3 border-t space-y-2.5 text-xs ${
                  isDark ? 'border-white/10 text-slate-300' : 'border-[#231C18]/10 text-[#3E3834]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#943F31] shrink-0" />
                  <span>Transparent fixed-price proposal</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#943F31] shrink-0" />
                  <span>Guaranteed launch timeline commitment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#943F31] shrink-0" />
                  <span>Zero commitment discovery conversation</span>
                </div>
              </div>
            </div>

            {/* Email Direct Card */}
            <div
              className={`p-6 rounded-3xl border flex items-center justify-between gap-4 shadow-xs ${
                isDark ? 'bg-[#181110] border-white/10' : 'bg-[#F7F4EE] border-[#231C18]/10'
              }`}
            >
              <div className="space-y-1">
                <span
                  className={`text-[11px] font-semibold uppercase tracking-wider block font-mono ${
                    isDark ? 'text-slate-400' : 'text-[#7D756E]'
                  }`}
                >
                  Direct Inbox
                </span>
                <span className={`text-sm font-bold font-mono ${isDark ? 'text-white' : 'text-[#1A1715]'}`}>
                  hello@jasey.dev
                </span>
              </div>

              <button
                type="button"
                onClick={copyEmail}
                className={`px-3.5 py-2 text-xs font-mono rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                  isDark
                    ? 'bg-white/[0.06] border border-white/10 text-slate-200 hover:bg-white/10'
                    : 'bg-white border border-[#231C18]/10 text-[#1A1715] hover:bg-[#F0EAE1]'
                }`}
              >
                {copiedEmail ? (
                  <>
                    <Check className={`w-3.5 h-3.5 ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`} />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Calendly Booking Card */}
            <div
              className={`p-7 rounded-3xl border space-y-3 shadow-xs ${
                isDark ? 'bg-[#181110] border-white/10' : 'bg-[#F7F4EE] border-[#231C18]/10'
              }`}
            >
              <div className="flex items-center gap-2 text-[#943F31] text-xs font-semibold font-mono">
                <Calendar className="w-4 h-4" />
                <span>Prefer a quick live call?</span>
              </div>
              <p className={`text-xs leading-relaxed font-light ${isDark ? 'text-slate-400' : 'text-[#5C554F]'}`}>
                Book an intro 15-minute Google Meet to walk through requirements, review prototypes, and clarify timeline.
              </p>
              <button
                type="button"
                onClick={() => setCalendlyModalOpen(true)}
                className="px-4 py-2.5 text-xs font-mono uppercase tracking-wider font-semibold text-white bg-[#943F31] hover:bg-[#A84B3B] active:bg-[#7D3428] rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>Select a 15-Min Slot</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Right Column: High-Converting Project Intake Form */}
          <div className="lg:col-span-7">
            <div
              className={`p-7 sm:p-9 rounded-3xl border shadow-sm relative ${
                isDark ? 'bg-[#181110] border-white/10' : 'bg-[#F7F4EE] border-[#231C18]/10'
              }`}
            >
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto ${
                      isDark
                        ? 'bg-emerald-950/70 border border-emerald-500/30 text-emerald-400'
                        : 'bg-emerald-100 border border-emerald-300 text-emerald-800'
                    }`}
                  >
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-[#1A1715]'}`}>
                    Inquiry Received!
                  </h3>
                  <p className={`text-sm max-w-md mx-auto leading-relaxed font-light ${isDark ? 'text-slate-300' : 'text-[#5C554F]'}`}>
                    Thank you, <strong className={`font-semibold ${isDark ? 'text-white' : 'text-[#1A1715]'}`}>{formData.name}</strong>. I have received your project details for <strong className="text-[#943F31] font-semibold">{formData.projectType}</strong>. I will review and reply to <strong className={`font-semibold ${isDark ? 'text-white' : 'text-[#1A1715]'}`}>{formData.email}</strong> within 4 business hours.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className={`text-xs underline cursor-pointer font-mono ${
                        isDark ? 'text-slate-400 hover:text-white' : 'text-[#7D756E] hover:text-[#1A1715]'
                      }`}
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className={`border-b pb-4 mb-2 ${isDark ? 'border-white/10' : 'border-[#231C18]/10'}`}>
                    <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-[#1A1715]'}`}>
                      Commission Specifications
                    </h3>
                    <p className={`text-xs mt-0.5 font-light ${isDark ? 'text-slate-400' : 'text-[#6E665E]'}`}>
                      Complete this brief form to receive an exact architectural proposal and delivery schedule.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-950/40 border border-red-500/30 text-xs text-red-300">
                      {errorMessage}
                    </div>
                  )}

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className={`text-xs font-semibold block font-mono ${isDark ? 'text-slate-300' : 'text-[#1A1715]'}`}>
                        Your Name <span className="text-[#943F31]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Sarah Miller"
                        className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#943F31] focus:ring-1 focus:ring-[#943F31] transition-colors shadow-xs ${
                          isDark
                            ? 'bg-[#110B0A] border border-white/10 text-white placeholder-slate-500'
                            : 'bg-white border border-[#231C18]/15 text-[#1A1715] placeholder-[#9C948A]'
                        }`}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className={`text-xs font-semibold block font-mono ${isDark ? 'text-slate-300' : 'text-[#1A1715]'}`}>
                        Work Email <span className="text-[#943F31]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#943F31] focus:ring-1 focus:ring-[#943F31] transition-colors shadow-xs ${
                          isDark
                            ? 'bg-[#110B0A] border border-white/10 text-white placeholder-slate-500'
                            : 'bg-white border border-[#231C18]/15 text-[#1A1715] placeholder-[#9C948A]'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="space-y-1.5">
                    <label className={`text-xs font-semibold block font-mono ${isDark ? 'text-slate-300' : 'text-[#1A1715]'}`}>
                      Project Category &amp; Plan
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#943F31] focus:ring-1 focus:ring-[#943F31] transition-colors shadow-xs ${
                        isDark
                          ? 'bg-[#110B0A] border border-white/10 text-white'
                          : 'bg-white border border-[#231C18]/15 text-[#1A1715]'
                      }`}
                    >
                      <option value="Micro Launch & Bio-Store (₦150k / $135)">Micro Launch &amp; Bio-Store (Small Business / ₦150k / $135)</option>
                      <option value="Small Biz Storefront (₦220k / $195)">Small Biz Storefront (Small Business / ₦220k / $195)</option>
                      <option value="Small Business Pro (₦290k / $260)">Small Business Pro (Multi-Page / ₦290k / $260)</option>
                      <option value="Standard Growth Plan (₦372.4k / $343)">Standard Growth Plan (Standard Size / ₦372.4k / $343)</option>
                      <option value="Business Accelerator Plan (₦833k / $735)">Business Accelerator Plan (Growing Companies / ₦833k / $735)</option>
                      <option value="Enterprise & Scale Plan (₦1.91M / $1,764)">Enterprise &amp; Scale Plan (Big Business / ₦1.91M / $1,764)</option>
                      <option value="Landing Page & Conversion Funnel">Custom Landing Page &amp; Conversion Funnel</option>
                      <option value="Full Multi-Page Website">Full Multi-Page Corporate Website</option>
                      <option value="SaaS MVP & Dashboard Interface">SaaS MVP &amp; Web App Dashboard</option>
                      <option value="Speed Redesign & Modernization">Website Redesign &amp; Speed Modernization</option>
                      <option value="Monthly Sprints / Maintenance">Monthly Dedicated Sprints &amp; Maintenance</option>
                    </select>
                  </div>

                  {/* Budget Selector */}
                  <div className="space-y-1.5">
                    <label className={`text-xs font-semibold block font-mono ${isDark ? 'text-slate-300' : 'text-[#1A1715]'}`}>
                      Estimated Budget Range
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['₦150k – ₦370k', '₦372k – ₦735k', '₦735k – ₦1.8M', '₦1.8M+ ($1.6k+)'].map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: range })}
                          className={`py-2 px-2 text-xs rounded-xl border text-center transition-colors cursor-pointer shadow-xs ${
                            formData.budget === range
                              ? 'bg-[#943F31] border-[#943F31] text-white font-semibold'
                              : isDark
                              ? 'bg-white/[0.04] border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.08]'
                              : 'bg-white border-[#231C18]/10 text-[#5C554F] hover:text-[#1A1715]'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-1.5">
                    <label className={`text-xs font-semibold block font-mono ${isDark ? 'text-slate-300' : 'text-[#1A1715]'}`}>
                      Project Overview &amp; Goals <span className="text-[#943F31]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Share your current website URL, target timeline, or reference inspiration..."
                      className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#943F31] focus:ring-1 focus:ring-[#943F31] transition-colors shadow-xs ${
                        isDark
                          ? 'bg-[#110B0A] border border-white/10 text-white placeholder-slate-500'
                          : 'bg-white border border-[#231C18]/15 text-[#1A1715] placeholder-[#9C948A]'
                      }`}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-6 text-sm font-mono uppercase tracking-wider font-semibold text-white bg-[#943F31] hover:bg-[#A84B3B] active:bg-[#7D3428] disabled:opacity-50 rounded-xl shadow-md shadow-[#943F31]/20 transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {submitting ? (
                      <span>Submitting Project Brief...</span>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className={`text-[11px] text-center font-mono ${isDark ? 'text-slate-400' : 'text-[#7D756E]'}`}>
                    Protected by NDA. Your email and business details will never be shared.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>

      {/* Calendly Booking Modal */}
      {calendlyModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in"
        >
          <div
            className={`relative max-w-lg w-full border rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl ${
              isDark ? 'bg-[#181110] border-white/15 text-white' : 'bg-[#FAF7F2] border-[#231C18]/15 text-[#1A1715]'
            }`}
          >
            <div className={`flex items-center justify-between border-b pb-4 ${isDark ? 'border-white/10' : 'border-[#231C18]/10'}`}>
              <div className="flex items-center gap-2 text-[#943F31]">
                <Calendar className="w-5 h-5" />
                <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-[#1A1715]'}`}>
                  Book 15-Min Discovery Call
                </h3>
              </div>
              <button
                onClick={() => {
                  setCalendlyModalOpen(false);
                  setBookingSlot(null);
                }}
                className={`text-xs font-semibold p-1 cursor-pointer ${
                  isDark ? 'text-slate-400 hover:text-white' : 'text-[#7D756E] hover:text-[#1A1715]'
                }`}
              >
                ✕
              </button>
            </div>

            {bookingSlot ? (
              <div
                className={`p-6 rounded-2xl border text-center space-y-3 shadow-xs ${
                  isDark ? 'bg-black/40 border-white/10' : 'bg-white border-[#231C18]/10'
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className={`text-base font-bold ${isDark ? 'text-white' : 'text-[#1A1715]'}`}>
                  Call Requested!
                </h4>
                <p className={`text-xs leading-relaxed font-light ${isDark ? 'text-slate-300' : 'text-[#5C554F]'}`}>
                  Your reservation request for <strong className={isDark ? 'text-white' : 'text-[#1A1715]'}>{bookingSlot}</strong> has been noted. Ja-Sey will email you the calendar invite and Google Meet link.
                </p>
                <button
                  onClick={() => {
                    setCalendlyModalOpen(false);
                    setBookingSlot(null);
                  }}
                  className="px-4 py-2 text-xs font-mono uppercase tracking-wider font-semibold text-white bg-[#943F31] hover:bg-[#A84B3B] rounded-lg transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <p className={`text-xs sm:text-sm leading-relaxed font-light ${isDark ? 'text-slate-300' : 'text-[#5C554F]'}`}>
                  Select an upcoming slot to walk through your website requirements directly with Ja-Sey. Times shown in <strong className="text-[#943F31]">West Africa Time (WAT / GMT+1)</strong> — aligns conveniently with UK (+0 hr), Europe, US East, and Nigeria.
                </p>

                <div
                  className={`p-4 rounded-2xl border space-y-2 shadow-xs ${
                    isDark ? 'bg-black/30 border-white/10' : 'bg-white border-[#231C18]/10'
                  }`}
                >
                  <div className={`text-xs font-semibold uppercase tracking-wider font-mono ${isDark ? 'text-slate-400' : 'text-[#7D756E]'}`}>
                    Next Open Slots (WAT):
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    {[
                      'Tomorrow, 11:00 AM WAT',
                      'Tomorrow, 3:30 PM WAT',
                      'Thursday, 1:00 PM WAT',
                      'Friday, 4:00 PM WAT',
                    ].map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setBookingSlot(slot)}
                        className={`p-2.5 rounded-xl border text-left transition-colors cursor-pointer ${
                          isDark
                            ? 'bg-white/[0.04] hover:bg-[#943F31] text-white hover:text-white border-white/10'
                            : 'bg-[#F7F4EE] hover:bg-[#943F31] hover:text-white border-[#231C18]/10 text-[#1A1715]'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setCalendlyModalOpen(false)}
                    className={`px-4 py-2 text-xs font-mono cursor-pointer ${
                      isDark ? 'text-slate-400 hover:text-white' : 'text-[#7D756E] hover:text-[#1A1715]'
                    }`}
                  >
                    Close
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
