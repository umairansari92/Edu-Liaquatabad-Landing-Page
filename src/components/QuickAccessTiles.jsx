import React from 'react';
import {
  School,
  FileText,
  BookOpen,
  Calendar,
  Award,
  Users,
  ShieldCheck,
  Bell,
  Clock,
  ArrowUpRight,
} from 'lucide-react';

export default function QuickAccessTiles() {
  const portalUrl = process.env.NEXT_PUBLIC_APP_PORTAL_URL || 'http://localhost:5173';

  const tiles = [
    {
      icon: <School className="w-6 h-6 text-emerald-400" />,
      title: 'Find Your School',
      desc: 'Directory of 45+ schools, areas, and HM contacts.',
      link: '#schools',
      badge: 'Public Directory',
      border: 'border-emerald-500/20 hover:border-emerald-500/50',
    },
    {
      icon: <FileText className="w-6 h-6 text-teal-400" />,
      title: 'Official Circulars',
      desc: 'Verified gazette notifications & orders.',
      link: '#notices',
      badge: 'Government Gazette',
      border: 'border-teal-500/20 hover:border-teal-500/50',
    },
    {
      icon: <BookOpen className="w-6 h-6 text-cyan-400" />,
      title: 'Sindh Textbooks',
      desc: 'Free PDF books & syllabus for Class 1–10.',
      link: '#resources',
      badge: 'Free Downloads',
      border: 'border-cyan-500/20 hover:border-cyan-500/50',
    },
    {
      icon: <Calendar className="w-6 h-6 text-indigo-400" />,
      title: 'Events & Galas',
      desc: 'Town science fairs, sports & declamation.',
      link: '#programs',
      badge: 'Competitions',
      border: 'border-indigo-500/20 hover:border-indigo-500/50',
    },
    {
      icon: <Users className="w-6 h-6 text-amber-400" />,
      title: 'Leadership & Team',
      desc: 'DDO, Supervisors, HMs & Invigilators.',
      link: '#team',
      badge: 'Supervisory Squad',
      border: 'border-amber-500/20 hover:border-amber-500/50',
    },
    {
      icon: <Clock className="w-6 h-6 text-rose-400" />,
      title: 'Timetable Monitor',
      desc: 'Class schedules & live periods across town.',
      link: `${portalUrl}/login`,
      badge: 'Portal Access',
      border: 'border-rose-500/20 hover:border-rose-500/50',
    },
    {
      icon: <Award className="w-6 h-6 text-purple-400" />,
      title: 'Exam Results',
      desc: 'Student digital report cards & marksheet verify.',
      link: `${portalUrl}/login`,
      badge: 'Portal Access',
      border: 'border-purple-500/20 hover:border-purple-500/50',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: 'Teacher & HM Portal',
      desc: 'Attendance, marks entry & faculty login.',
      link: `${portalUrl}/login`,
      badge: 'Staff Sign-In',
      border: 'border-emerald-500/20 hover:border-emerald-500/50',
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest">
          Rapid Civic Access
        </span>
        <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-1">
          Quick Services & Information Gateway
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-2">
          Direct 1-click access to public municipal education services, learning materials, and authenticated portals.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {tiles.map((tile, idx) => (
          <a
            key={idx}
            href={tile.link}
            className={`group p-5 rounded-2xl bg-slate-900/80 border ${tile.border} hover:bg-slate-800/80 transition-all transform hover:-translate-y-1 shadow-lg shadow-black/40 flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                  {tile.icon}
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  {tile.badge}
                </span>
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                {tile.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                {tile.desc}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-semibold text-emerald-400 group-hover:text-emerald-300">
              <span>Access Service</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
