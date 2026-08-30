'use client';

import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  ArrowRight,
  School,
  Users,
  GraduationCap,
  Award,
  BookOpen,
} from 'lucide-react';

export default function HeroSection() {
  const portalUrl = process.env.NEXT_PUBLIC_APP_PORTAL_URL || 'http://localhost:5173';
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

  const [stats, setStats] = useState({
    totalSchools: '45+',
    enrolledStudents: '18,500+',
    totalTeachers: '650+',
    passedOutGraduates: '50,000+',
    digitalAttendanceRate: '100%',
  });

  useEffect(() => {
    let isMounted = true;
    async function fetchStats() {
      try {
        const res = await fetch(`${apiUrl}/api/v1/public/stats`);
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.data && isMounted) setStats(json.data);
        }
      } catch {
        // Graceful fallback to baseline numbers
      }
    }
    fetchStats();
    return () => { isMounted = false; };
  }, [apiUrl]);

  const statCards = [
    {
      value: stats.totalSchools,
      label: 'Government Schools',
      sub: 'Primary & Secondary',
      icon: School,
      color: '#006AC7',
      bgColor: 'rgba(0,106,199,0.06)',
    },
    {
      value: stats.enrolledStudents,
      label: 'Enrolled Students',
      sub: 'Dual GR & Global IDs',
      icon: GraduationCap,
      color: '#4B7F3A',
      bgColor: 'rgba(75,127,58,0.06)',
    },
    {
      value: stats.totalTeachers,
      label: 'Dedicated Teachers',
      sub: 'Qualified Faculty',
      icon: Users,
      color: '#006AC7',
      bgColor: 'rgba(0,106,199,0.06)',
    },
    {
      value: stats.passedOutGraduates || '50,000+',
      label: 'Passed Out Alumni',
      sub: 'Matric & Higher Sec',
      icon: Award,
      color: '#4B7F3A',
      bgColor: 'rgba(75,127,58,0.06)',
    },
    {
      value: stats.digitalAttendanceRate || '100%',
      label: 'Digital Attendance',
      sub: 'Zero Ghost Policy',
      icon: ShieldCheck,
      color: '#006AC7',
      bgColor: 'rgba(0,106,199,0.06)',
    },
  ];

  return (
    <section
      className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#F0F8FF', overflow: 'hidden' }}
    >
      {/* Ambient Background Glows — subtle, not neon */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-80px',
          left: '-80px',
          width: '480px',
          height: '480px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,106,199,0.07) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-60px',
          right: '-60px',
          width: '360px',
          height: '360px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(75,127,58,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="section-container relative z-10 text-center">
        {/* Official Government Badge — NO animate-pulse */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
          style={{
            background: 'rgba(0,106,199,0.08)',
            border: '1px solid rgba(0,106,199,0.20)',
            color: '#006AC7',
            fontSize: '0.6875rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          Official Government Education Platform • Session 2026–27
        </div>

        {/* Hero Headline */}
        <h1
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto"
          style={{
            color: '#102033',
            lineHeight: 1.1,
            fontFamily: 'var(--font-inter)',
          }}
        >
          Education for Every Child.{' '}
          <span style={{ color: '#006AC7' }}>
            A Stronger Future for Liaquatabad.
          </span>
        </h1>

        {/* Sub-headline */}
        <p
          className="mt-6 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ color: '#526477', fontFamily: 'var(--font-inter)' }}
        >
          The official digital gateway connecting 45+ public schools, dedicated faculty,
          students, parents, and supervisory leadership under District Municipal
          Corporation (DMC) Liaquatabad Town.
        </p>

        {/* Call to Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href={`${portalUrl}/login`}
            className="btn-primary w-full sm:w-auto px-8 py-3.5 text-sm group"
          >
            <span>Access Education Portal</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#schools"
            className="btn-secondary w-full sm:w-auto px-7 py-3.5 text-sm"
          >
            <School className="w-4 h-4" />
            <span>Explore Town Schools</span>
          </a>

          <a
            href="#resources"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-medium inline-flex items-center justify-center gap-2 transition-all"
            style={{ color: '#526477' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#006AC7'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#526477'; }}
          >
            <BookOpen className="w-4 h-4" />
            <span>Free Sindh Textbooks</span>
          </a>
        </div>

        {/* Stats Grid */}
        <div
          className="mt-16 pt-10 grid grid-cols-2 md:grid-cols-5 gap-3"
          style={{ borderTop: '1px solid rgba(0,106,199,0.12)' }}
        >
          {statCards.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="glass-card p-4 text-left transition-all duration-250"
                style={{ borderRadius: '14px' }}
              >
                <div className="flex items-start justify-between mb-2">
                  <span
                    className="text-2xl sm:text-3xl font-extrabold"
                    style={{ color: stat.color, fontFamily: 'var(--font-inter)', lineHeight: 1 }}
                  >
                    {stat.value}
                  </span>
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: stat.bgColor }}
                  >
                    <Icon className="w-4 h-4" style={{ color: stat.color }} />
                  </div>
                </div>
                <p className="text-xs font-semibold" style={{ color: '#102033' }}>
                  {stat.label}
                </p>
                <p className="text-[10px] mt-0.5" style={{ color: '#8094A8' }}>
                  {stat.sub}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
