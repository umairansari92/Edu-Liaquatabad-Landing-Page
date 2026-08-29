import React from 'react';
import { Award, Calendar, MapPin, Users, Sparkles, ArrowRight } from 'lucide-react';
import { dynamicProgramsData } from '../data/dynamicPrograms.js';

export default function EducationalPrograms() {
  return (
    <section id="programs" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-1.5">
          <Sparkles className="w-4 h-4" />
          Town-Wide Co-Curricular & Academic Galas
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-2">
          Educational Programs & Competitions
        </h2>
        <p className="text-slate-400 text-sm mt-2">
          Fostering scientific innovation, public speaking, athletic excellence, and reading culture across all government schools in Liaquatabad Town.
        </p>
      </div>

      {/* Programs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {dynamicProgramsData.map((prog) => (
          <div
            key={prog.id}
            className="rounded-3xl bg-slate-900/80 border border-slate-800/90 overflow-hidden hover:border-emerald-500/40 transition-all hover:bg-slate-800/70 group shadow-2xl shadow-black/40 flex flex-col justify-between"
          >
            <div>
              {/* Cover Image */}
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-600 text-white shadow-md">
                    {prog.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-slate-900/90 text-slate-200 border border-slate-700">
                    {prog.category}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="text-xl font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                  {prog.title}
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {prog.description}
                </p>

                {/* Metadata */}
                <div className="mt-5 pt-4 border-t border-slate-800/80 space-y-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Date:</strong> {prog.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                    <span className="line-clamp-1"><strong>Host:</strong> {prog.hostSchool}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span><strong>Eligibility:</strong> {prog.targetGrades}</span>
                  </div>
                </div>

                {/* Awards */}
                <div className="mt-4 p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/50 text-[11px] text-emerald-200 flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Recognition:</strong> {prog.awards}</span>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <a
                href="#schools"
                className="w-full py-3 rounded-xl font-bold text-xs bg-slate-800 hover:bg-emerald-600 text-white transition-all flex items-center justify-center gap-2"
              >
                <span>View Participating Schools</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
