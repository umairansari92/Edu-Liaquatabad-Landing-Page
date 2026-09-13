import React from 'react';
import HeroSection from '../components/HeroSection.jsx';
import ExecutiveAnnouncementCard from '../components/ExecutiveAnnouncementCard.jsx';
import QuickAccessTiles from '../components/QuickAccessTiles.jsx';
import SchoolFinder from '../components/SchoolFinder.jsx';
import EducationalPrograms from '../components/EducationalPrograms.jsx';
import EventsAndConferences from '../components/EventsAndConferences.jsx';
import LeadershipTeam from '../components/LeadershipTeam.jsx';
import PublicNotices from '../components/PublicNotices.jsx';
import ResourceLibrary from '../components/ResourceLibrary.jsx';
import CampusLifeGallery from '../components/CampusLifeGallery.jsx';
import { fetchTownStats } from '../lib/fetchTownStats.js';
import {
  ShieldCheck,
  School,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export default async function HomePage() {
  const portalUrl = process.env.NEXT_PUBLIC_APP_PORTAL_URL || 'http://localhost:5173';
  const townStats = await fetchTownStats();

  const enrolledStudentsFormatted =
    typeof townStats.metrics.enrolledStudents === 'number'
      ? townStats.metrics.enrolledStudents.toLocaleString()
      : townStats.metrics.enrolledStudents;

  const currentDdoName =
    townStats.activeAnnouncement?.announcerDesignation?.includes('DDO')
      ? townStats.activeAnnouncement.announcerName
      : 'Muhammad Asif Khan';

  return (
    <div>
      {/* 1. Hero Section with Live Initial Metrics — #F0F8FF */}
      <HeroSection initialMetrics={townStats.metrics} />

      {/* 2. DDO Executive Announcement Bulletin (Conditionally Rendered) — #F8FBFD */}
      <ExecutiveAnnouncementCard initialAnnouncement={townStats.activeAnnouncement} />

      {/* 3. Quick Access Tiles — #F8FBFD */}
      <QuickAccessTiles />

      {/* 4. About the Department — #FFFFFF */}
      <section
        id="about"
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: Text */}
            <div>
              <span className="section-label">
                <span
                  className="w-1.5 h-1.5 rounded-full inline-block"
                  style={{ backgroundColor: '#006AC7' }}
                />
                Institutional Mandate & Mission
              </span>
              <h2
                className="text-2xl sm:text-3xl font-bold leading-snug"
                style={{ color: '#102033', fontFamily: 'var(--font-inter)' }}
              >
                Education Department Liaquatabad Town Centre
              </h2>
              <p className="text-sm sm:text-base mt-4 leading-relaxed" style={{ color: '#526477' }}>
                Operating under the District Municipal Corporation (DMC), the Education
                Directorate oversees {townStats.metrics.totalSchools}+ public schools, providing universal free education,
                standardized science curriculum, continuous teacher professional development,
                and rigorous examination integrity for over {enrolledStudentsFormatted} students.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Sindh Education Act 2013 Compliance',
                  '100% Free Textbooks & Stationery',
                  'Solar-Powered Classrooms & Labs',
                  'Digital Attendance Monitoring',
                ].map((complianceItem) => (
                  <div key={complianceItem} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#4B7F3A' }} />
                    <span className="text-sm" style={{ color: '#526477' }}>{complianceItem}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Info Card */}
            <div className="glass-card p-7">
              <h3
                className="font-bold text-base flex items-center gap-2 mb-4"
                style={{ color: '#102033', fontFamily: 'var(--font-inter)' }}
              >
                <School className="w-5 h-5" style={{ color: '#006AC7' }} />
                One Connected Education Network
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#526477' }}>
                Every public school in Liaquatabad is digitally linked to the central Town
                Directorate. School Head Masters, class teachers, students, and parents
                collaborate in real time through our unified platform.
              </p>

              <div className="mt-6 space-y-2">
                {[
                  {
                    label: 'Town Education Officer (DDO):',
                    value: currentDdoName,
                    valueColor: '#102033',
                  },
                  {
                    label: 'Supervisory Wings:',
                    value: 'Male & Female Sectors Active',
                    valueColor: '#4B7F3A',
                  },
                ].map((infoRow) => (
                  <div
                    key={infoRow.label}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-xs"
                    style={{
                      backgroundColor: 'rgba(0,106,199,0.04)',
                      border: '1px solid rgba(0,106,199,0.08)',
                    }}
                  >
                    <span style={{ color: '#526477' }}>{infoRow.label}</span>
                    <strong style={{ color: infoRow.valueColor }}>{infoRow.value}</strong>
                  </div>
                ))}
              </div>

              <a
                href="#schools"
                className="btn-primary w-full justify-center mt-6 text-sm py-3"
              >
                Browse All {townStats.metrics.totalSchools}+ Schools
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. School Finder — #F0F8FF (rendered inside component) */}
      <SchoolFinder />

      {/* 6. Educational Programs — #F8FBFD */}
      <EducationalPrograms />

      {/* 7. Conferences & Events — #FFFFFF */}
      <EventsAndConferences />

      {/* 8. Leadership Team — #F8FBFD */}
      <LeadershipTeam />

      {/* 9. Public Notices — #F0F8FF */}
      <PublicNotices />

      {/* 10. Resource Library — #FFFFFF */}
      <ResourceLibrary />

      {/* 11. Campus Life Gallery — #F8FBFD */}
      <CampusLifeGallery />

      {/* 12. Final CTA Banner */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#F0F8FF' }}
      >
        <div className="section-container">
          <div
            className="rounded-3xl px-8 sm:px-14 py-12 text-center relative overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.60)',
              backdropFilter: 'blur(18px)',
              WebkitBackdropFilter: 'blur(18px)',
              border: '1px solid rgba(0,106,199,0.12)',
              boxShadow: '0 12px 40px rgba(0,33,61,0.08)',
            }}
          >
            {/* Ambient glow */}
            <div
              className="absolute pointer-events-none"
              style={{
                top: '-60px',
                right: '-60px',
                width: '280px',
                height: '280px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0,106,199,0.06) 0%, transparent 70%)',
              }}
            />

            <div className="relative z-10">
              <span className="section-label justify-center">
                <ShieldCheck className="w-3.5 h-3.5" />
                Secure Government Access
              </span>
              <h2
                className="text-2xl sm:text-3xl font-bold mt-1"
                style={{ color: '#102033', fontFamily: 'var(--font-inter)' }}
              >
                Ready to Access the Official Portal?
              </h2>
              <p
                className="mt-3 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
                style={{ color: '#526477' }}
              >
                Students, parents, teachers, and school leadership can sign in with their
                verified government credentials for attendance, report cards, and
                administrative tasks.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <a
                  href={`${portalUrl}/login`}
                  className="btn-primary px-8 py-3.5 text-sm group w-full sm:w-auto justify-center"
                >
                  <span>Access Secure Portal</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={`${portalUrl}/register/student`}
                  className="btn-secondary px-7 py-3.5 text-sm w-full sm:w-auto justify-center"
                >
                  <span>Student Admission Verification</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
