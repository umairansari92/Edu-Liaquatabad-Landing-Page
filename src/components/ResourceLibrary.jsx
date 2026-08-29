import React from 'react';
import { BookOpen, Download, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { dynamicBooksData } from '../data/dynamicBooks.js';

export default function ResourceLibrary() {
  return (
    <section id="resources" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-1.5">
          <BookOpen className="w-4 h-4" />
          Sindh Universal Education Resource Hub
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-2">
          Free Digital Textbooks & Curriculum Syllabi
        </h2>
        <p className="text-slate-400 text-sm mt-2">
          Download complete official Sindh Textbook Board (Jamshoro) e-books, model papers, and curriculum guides for Primary, Middle, and Secondary classes free of cost.
        </p>
      </div>

      {/* Grade Accordion / Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {dynamicBooksData.map((gradeGroup, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl flex flex-col justify-between"
          >
            <div>
              {/* Grade Title */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-950 border border-emerald-800 text-emerald-400">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-white">{gradeGroup.grade}</h3>
                    <p className="text-[11px] text-slate-400">Official Sindh Curriculum</p>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {gradeGroup.subjects.length} Textbooks
                </span>
              </div>

              {/* Subjects List */}
              <div className="space-y-2.5">
                {gradeGroup.subjects.map((sub, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-emerald-500/30 transition-all flex items-center justify-between gap-3 group"
                  >
                    <div>
                      <h4 className="text-xs font-bold text-slate-200 group-hover:text-emerald-300 transition-colors">
                        {sub.name}
                      </h4>
                      <p className="text-[10px] text-slate-500 font-medium">
                        {sub.board} • {sub.fileSize}
                      </p>
                    </div>

                    <a
                      href={sub.downloadUrl}
                      className="p-2 rounded-lg bg-slate-900 hover:bg-emerald-600 text-slate-400 hover:text-white transition-colors shrink-0"
                      title="Download PDF"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-medium text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" /> 100% Free Government Resource
              </span>
              <span>PDF Format</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
