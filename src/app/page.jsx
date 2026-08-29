import React from 'react';
import {
  School,
  GraduationCap,
  Users,
  Award,
  FileText,
  ShieldCheck,
  Building2,
  ArrowRight,
  CheckCircle2,
  Bell,
  Search,
  ExternalLink,
  BookOpen,
} from 'lucide-react';

export default function HomePage() {
  const portalUrl = process.env.NEXT_PUBLIC_APP_PORTAL_URL || 'http://localhost:5173';

  return (
    <div className="relative overflow-hidden">
      {/* Background Decorative Radial Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-500/10 via-teal-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          Official Municipal Education Portal • 2026 Academic Session
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.1] max-w-4xl mx-auto">
          Centralized Digital Governance for{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
            Liaquatabad Town Schools
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Connecting public schools, verified student admissions, faculty transfer governance, and official municipal circulars under District Municipal Corporation (DMC) Liaquatabad.
        </p>

        {/* Primary Call To Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`${portalUrl}/register/student`}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-xl shadow-emerald-950/50 flex items-center justify-center gap-2 group"
          >
            <span>Apply for Student Admission</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={`${portalUrl}/login`}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white transition-all flex items-center justify-center gap-2"
          >
            <span>Staff & Faculty Portal</span>
            <ExternalLink className="w-4 h-4 text-slate-400" />
          </a>
        </div>

        {/* Live Town Key Metrics / Counters */}
        <div id="stats" className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">45+</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Government Schools</div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center mx-auto mb-3">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">18,500+</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Enrolled Students</div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-3">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">850+</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Qualified Faculty</div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">100%</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Digital Audit Trail</div>
          </div>
        </div>
      </section>

      {/* Core Platform Pillars */}
      <section className="py-16 bg-slate-900/40 border-y border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Institutional Governance Capabilities
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Standardizing administrative workflows across all primary, secondary, and comprehensive schools in Liaquatabad Town.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Verified Online Admissions</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Students and parents register online with mandatory 6-digit OTP verification. Head Masters verify and approve student dossiers digitally.
              </p>
              <a href={`${portalUrl}/register/student`} className="text-xs text-emerald-400 font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                Register Student <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-teal-500/40 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Faculty Transfer System</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Automated multi-hop teacher reassignment tracking between originating schools and destination Head Masters with DDO & Supervisor oversight.
              </p>
              <a href={`${portalUrl}/login`} className="text-xs text-teal-400 font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                Access Transfer Portal <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Examination & Results Engine</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Single-source-of-truth gradebooks submitted by teachers, verified by Head Masters, and published into downloadable PDF report cards.
              </p>
              <a href={`${portalUrl}/login`} className="text-xs text-cyan-400 font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                View Results Portal <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Public Notices & Circulars Preview */}
      <section id="circulars" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <Bell className="w-4 h-4" /> Official Notice Board
            </div>
            <h2 className="text-2xl font-display font-bold text-white">Public Circulars & Directives</h2>
          </div>
          <a
            href={`${portalUrl}/login`}
            className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5"
          >
            Archive Directory <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-slate-700 transition-colors">
            <div className="flex items-start gap-3">
              <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[11px] font-bold mt-0.5">
                CIR-2026-042
              </span>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Schedule for Annual Term Examinations 2026 Across All Liaquatabad Town Schools
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">Issued by: Directorate of Education (DMC) • Target: All Head Masters</p>
              </div>
            </div>
            <span className="text-[11px] text-slate-400 whitespace-nowrap">Aug 28, 2026</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-slate-700 transition-colors">
            <div className="flex items-start gap-3">
              <span className="px-2.5 py-1 rounded bg-teal-500/10 text-teal-400 font-mono text-[11px] font-bold mt-0.5">
                CIR-2026-039
              </span>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Mandatory Submission of Digital Staff Attendance and Biometric Compliance Reports
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">Issued by: Town Education Officer • Target: Secondary & Primary Schools</p>
              </div>
            </div>
            <span className="text-[11px] text-slate-400 whitespace-nowrap">Aug 24, 2026</span>
          </div>
        </div>
      </section>

      {/* Leadership Messages */}
      <section id="leadership" className="py-16 bg-slate-900/30 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Town Leadership & Administration
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              District Municipal Corporation (DMC) Liaquatabad Town Education Directorate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-emerald-700 flex items-center justify-center font-bold text-lg text-white">
                  C
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Office of the Chairman</h4>
                  <p className="text-xs text-emerald-400">Liaquatabad Town Centre (DMC)</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed italic">
                "Our mission is to ensure every government school in Liaquatabad Town provides modern, high-quality, and transparent education. This centralized digital portal guarantees accountability and seamless administrative support for our students and teachers."
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-teal-700 flex items-center justify-center font-bold text-lg text-white">
                  VC
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Office of the Vice Chairman</h4>
                  <p className="text-xs text-teal-400">Liaquatabad Town Centre (DMC)</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed italic">
                "With automated transfers, verified result publications, and digital admissions, we are modernizing the municipal education infrastructure to serve our community with pride and operational excellence."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-tr from-emerald-950 via-slate-900 to-teal-950 border border-emerald-800/40 relative overflow-hidden">
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white max-w-2xl mx-auto">
            Ready to Enroll or Access School Portals?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-3 max-w-lg mx-auto">
            Join the centralized education network of Liaquatabad Town Centre today.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`${portalUrl}/register/student`}
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-emerald-950/50"
            >
              Start Student Admission
            </a>
            <a
              href={`${portalUrl}/register/teacher`}
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-xs sm:text-sm"
            >
              Faculty Registration
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
