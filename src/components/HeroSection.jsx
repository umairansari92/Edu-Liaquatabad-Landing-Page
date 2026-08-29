'use client';

import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  ArrowRight,
  School,
  Users,
  GraduationCap,
  Sparkles,
  BookOpen,
  Award,
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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchStats() {
      try {
        const res = await fetch(`${apiUrl}/api/v1/public/stats`);
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.data && isMounted) {
            setStats(json.data);
          }
        }
      } catch (err) {
        // Graceful fallback to default baseline numbers
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    fetchStats();

    return () => {
      isMounted = false;
    };
  }, [apiUrl]);

  return (
    <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      {/* Background Decorative Radial Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-500/15 via-teal-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Official Government Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-8 shadow-inner animate-pulse">
        <ShieldCheck className="w-4 h-4 text-emerald-400" />
        Official Government Municipal Education Platform • Session 2026–27
      </div>

      {/* Hero Headline */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.1] max-w-5xl mx-auto">
        Education for Every Child. <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
          A Stronger Future for Liaquatabad.
        </span>
      </h1>

      {/* Sub-headline */}
      <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
        The official digital gateway connecting 45+ public schools, dedicated faculty, students, parents, and supervisory leadership under District Municipal Corporation (DMC) Liaquatabad Town.
      </p>

      {/* Primary Call to Actions */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href={`${portalUrl}/login`}
          className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white transition-all shadow-xl shadow-emerald-950/60 flex items-center justify-center gap-2 group"
        >
          <span>Access Education Portal (Login)</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>

        <a
          href="#schools"
          className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-white transition-all flex items-center justify-center gap-2"
        >
          <School className="w-4 h-4 text-emerald-400" />
          <span>Explore Town Schools Directory</span>
        </a>

        <a
          href="#resources"
          className="w-full sm:w-auto px-6 py-4 rounded-xl font-semibold text-sm bg-slate-900/50 hover:bg-slate-800/80 border border-slate-800 text-slate-300 hover:text-white transition-all flex items-center justify-center gap-2"
        >
          <BookOpen className="w-4 h-4 text-teal-400" />
          <span>Free Sindh Textbooks</span>
        </a>
      </div>

      {/* Live Verified Network Facts Grid (Dynamic + Hardcoded Passed Out) */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-3.5 max-w-6xl mx-auto pt-10 border-t border-slate-800/80">
        {/* Total Schools */}
        <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/90 text-left">
          <div className="flex items-center justify-between">
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              {stats.totalSchools}
            </span>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <School className="w-4 h-4" />
            </div>
          </div>
          <p className="text-xs font-semibold text-slate-300 mt-2">Government Schools</p>
          <p className="text-[10px] text-slate-500 mt-0.5">Primary & Secondary</p>
        </div>

        {/* Enrolled Students */}
        <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/90 text-left">
          <div className="flex items-center justify-between">
            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-display">
              {stats.enrolledStudents}
            </span>
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400">
              <GraduationCap className="w-4 h-4" />
            </div>
          </div>
          <p className="text-xs font-semibold text-slate-300 mt-2">Enrolled Students</p>
          <p className="text-[10px] text-slate-500 mt-0.5">Dual GR & Global IDs</p>
        </div>

        {/* Dedicated Teachers */}
        <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/90 text-left">
          <div className="flex items-center justify-between">
            <span className="text-2xl sm:text-3xl font-extrabold text-teal-300 font-display">
              {stats.totalTeachers}
            </span>
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <p className="text-xs font-semibold text-slate-300 mt-2">Dedicated Teachers</p>
          <p className="text-[10px] text-slate-500 mt-0.5">Qualified Faculty</p>
        </div>

        {/* Passed Out Alumni (Hardcoded 50,000+) */}
        <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/90 text-left">
          <div className="flex items-center justify-between">
            <span className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-display">
              {stats.passedOutGraduates || '50,000+'}
            </span>
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <p className="text-xs font-semibold text-slate-300 mt-2">Passed Out Alumni</p>
          <p className="text-[10px] text-slate-500 mt-0.5">Metric & Higher Sec</p>
        </div>

        {/* Digital Attendance Compliance */}
        <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/90 text-left col-span-2 md:col-span-1">
          <div className="flex items-center justify-between">
            <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-display">
              {stats.digitalAttendanceRate || '100%'}
            </span>
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>
          <p className="text-xs font-semibold text-slate-300 mt-2">Digital Attendance</p>
          <p className="text-[10px] text-slate-500 mt-0.5">Zero Ghost Policy</p>
        </div>
      </div>
    </section>
  );
}
