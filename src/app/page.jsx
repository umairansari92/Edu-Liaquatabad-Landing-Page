import React from 'react';
import HeroSection from '../components/HeroSection.jsx';
import QuickAccessTiles from '../components/QuickAccessTiles.jsx';
import SchoolFinder from '../components/SchoolFinder.jsx';
import EducationalPrograms from '../components/EducationalPrograms.jsx';
import EventsAndConferences from '../components/EventsAndConferences.jsx';
import LeadershipTeam from '../components/LeadershipTeam.jsx';
import PublicNotices from '../components/PublicNotices.jsx';
import ResourceLibrary from '../components/ResourceLibrary.jsx';
import CampusLifeGallery from '../components/CampusLifeGallery.jsx';
import { ShieldCheck, School, Users, Award, BookOpen, FileText, ArrowRight } from 'lucide-react';

export default function HomePage() {
  const portalUrl = process.env.NEXT_PUBLIC_APP_PORTAL_URL || 'http://localhost:5173';

  return (
    <div className="relative overflow-hidden space-y-4">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Rapid Quick Access Tiles */}
      <QuickAccessTiles />

      {/* 3. About the Department Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5 mb-2">
                <ShieldCheck className="w-4 h-4" />
                Institutional Mandate & Mission
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white leading-tight">
                Education Department Liaquatabad Town Centre
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
                Operating under the District Municipal Corporation (DMC), the Education Directorate oversees 45+ public schools, providing universal free education, standardized science curriculum, continuous teacher professional development, and rigorous examination integrity for over 18,500 students.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4 text-xs font-semibold text-slate-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Sindh Education Act 2013 Compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-teal-400" />
                  <span>100% Free Textbooks & Stationery</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>Solar-Powered Classrooms & Labs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-400" />
                  <span>Digital Attendance Biometric Audit</span>
                </div>
              </div>
            </div>

            {/* Governance Callout Box */}
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                  <School className="w-5 h-5 text-emerald-400" />
                  <span>One Connected Education Network</span>
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Every public school in Liaquatabad is digitally linked to the central Town Directorate. School Head Masters, class teachers, students, and parents collaborate in real time through our unified platform.
                </p>

                <div className="mt-6 space-y-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-300">Town Education Officer (DDO):</span>
                    <strong className="text-white">Muhammad Asif Khan</strong>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-300">Supervisory Inspection Wings:</span>
                    <strong className="text-emerald-400">Male & Female Sectors Active</strong>
                  </div>
                </div>
              </div>

              <a
                href="#schools"
                className="mt-6 w-full py-3 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50"
              >
                <span>Browse All 45+ Schools in Liaquatabad</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Find Your School Interactive Directory */}
      <SchoolFinder />

      {/* 5. Town Educational Programs & Science Fairs */}
      <EducationalPrograms />

      {/* 6. Conferences, Summits & Faculty Workshops */}
      <EventsAndConferences />

      {/* 7. Supervisory Squad & Leadership Team */}
      <LeadershipTeam />

      {/* 8. Official Public Notices & Gazettes */}
      <PublicNotices />

      {/* 9. Free Sindh Textbooks Download Library */}
      <ResourceLibrary />

      {/* 10. Campus Life & Science Labs Gallery */}
      <CampusLifeGallery />

      {/* 11. Final Call to Action Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-950 border border-emerald-500/40 text-center relative overflow-hidden shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
            Ready to Access the Official Portal?
          </h2>
          <p className="mt-3 text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Students, parents, teachers, and school leadership can sign in with their verified government credentials for attendance, report cards, and administrative tasks.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`${portalUrl}/login`}
              className="px-8 py-3.5 rounded-xl font-extrabold text-sm bg-white text-slate-950 hover:bg-slate-100 transition-all shadow-xl flex items-center gap-2"
            >
              <span>Access Secure Portal </span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`${portalUrl}/register/student`}
              className="px-8 py-3.5 rounded-xl font-bold text-sm bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 hover:text-white hover:bg-emerald-900 transition-all"
            >
              <span>Student Admission Verification</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
