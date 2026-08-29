import React from 'react';
import { School, ShieldCheck, MapPin, Phone, Mail, ExternalLink, Heart } from 'lucide-react';

export default function CivicFooter() {
  const portalUrl = process.env.NEXT_PUBLIC_APP_PORTAL_URL || 'http://localhost:5173';

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Mandate (Col 1 & 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-lg">
                <School className="w-5 h-5" />
              </div>
              <div>
                <span className="text-white font-extrabold text-base tracking-tight">
                  Education Department
                </span>
                <p className="text-[11px] text-emerald-400 font-bold">
                  District Municipal Corporation (DMC) Liaquatabad
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              The official centralized public municipal education portal connecting government schools, dedicated faculty, students, parents, and supervisory leadership across Liaquatabad Town Centre, Karachi.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Town Directorate of Education, Liaquatabad No. 4, Karachi</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Helpline: 021-34981100 (Mon–Fri, 08:00 AM – 02:00 PM)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Email: education@liaquatabad-schools.gov.pk</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation (Col 3) */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Public Portal
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#schools" className="hover:text-emerald-400 transition-colors">School Directory</a></li>
              <li><a href="#programs" className="hover:text-emerald-400 transition-colors">Educational Programs</a></li>
              <li><a href="#events" className="hover:text-emerald-400 transition-colors">Conferences & Summits</a></li>
              <li><a href="#team" className="hover:text-emerald-400 transition-colors">Supervisory Squad</a></li>
              <li><a href="#notices" className="hover:text-emerald-400 transition-colors">Gazette Circulars</a></li>
              <li><a href="#resources" className="hover:text-emerald-400 transition-colors">Sindh Textbooks (PDF)</a></li>
            </ul>
          </div>

          {/* Stakeholder Login (Col 4) */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Authenticated Access
            </h4>
            <ul className="space-y-2.5">
              <li><a href={`${portalUrl}/login`} className="hover:text-emerald-400 transition-colors">DDO & Town Directorate</a></li>
              <li><a href={`${portalUrl}/login`} className="hover:text-emerald-400 transition-colors">School Supervisors (Male/Female)</a></li>
              <li><a href={`${portalUrl}/login`} className="hover:text-emerald-400 transition-colors">Head Masters (HM) Portal</a></li>
              <li><a href={`${portalUrl}/login`} className="hover:text-emerald-400 transition-colors">Teacher Attendance & Marks</a></li>
              <li><a href={`${portalUrl}/login`} className="hover:text-emerald-400 transition-colors">Student & Parent Portal</a></li>
              <li><a href={`${portalUrl}/login`} className="hover:text-emerald-400 transition-colors">Examination Board</a></li>
            </ul>
          </div>

          {/* Civic Governance & Legal (Col 5) */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Governance & Policies
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Digital Attendance Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Zero Ghost Teachers Mandate</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Sindh Education Act 2013</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Child Protection & Safeguarding</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Public Grievance Redressal</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-slate-800/80 py-6 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[11px] text-slate-500">
            © 2026 Education Department Liaquatabad Town Centre (DMC), Government of Sindh. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-slate-500">
            <span>Powered by Municipal Digital Infrastructure</span>
            <span>•</span>
            <span className="text-emerald-400 font-semibold">Active Session 2026–27</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
