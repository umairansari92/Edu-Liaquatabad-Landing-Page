import React from 'react';
import {
  School,
  ShieldCheck,
  Search,
  LogIn,
  ExternalLink,
  BookOpen,
  Users,
  Award,
  FileText,
  Menu,
} from 'lucide-react';

export default function CivicNavbar() {
  const portalUrl = process.env.NEXT_PUBLIC_APP_PORTAL_URL || 'http://localhost:5173';

  return (
    <header className="sticky top-0 z-40 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Municipal Emblem & Brand */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-lg shadow-emerald-950/50 group-hover:scale-105 transition-transform">
              <School className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-white font-extrabold text-base sm:text-lg tracking-tight group-hover:text-emerald-400 transition-colors">
                  Education Department
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  DMC
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">
                Town Centre Liaquatabad • Government of Sindh
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-slate-300">
            <a href="#schools" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
              <span>Our Schools</span>
            </a>
            <a href="#programs" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
              <span>Programs & Galas</span>
            </a>
            <a href="#events" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
              <span>Conferences</span>
            </a>
            <a href="#team" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
              <span>Supervisory Team</span>
            </a>
            <a href="#notices" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
              <span>Circulars</span>
            </a>
            <a href="#resources" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
              <span>Textbooks</span>
            </a>
          </nav>

          {/* Action Area */}
          <div className="flex items-center gap-3">
            {/* Quick Search */}
            <a
              href="#schools"
              className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700 text-xs font-medium transition-all"
            >
              <Search className="w-3.5 h-3.5 text-emerald-400" />
              <span>Search Portal...</span>
              <kbd className="px-1.5 py-0.5 rounded text-[10px] bg-slate-800 text-slate-400 font-mono">
                ⌘K
              </kbd>
            </a>

            {/* Access Portal (Login) */}
            <a
              href={`${portalUrl}/login`}
              className="px-5 py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-950/50 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Access Portal</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
