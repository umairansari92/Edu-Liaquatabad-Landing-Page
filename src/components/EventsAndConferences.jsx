import React from 'react';
import { Calendar, Clock, MapPin, UserCheck, ShieldCheck, ChevronRight } from 'lucide-react';
import { dynamicEventsData } from '../data/dynamicEvents.js';

export default function EventsAndConferences() {
  return (
    <section id="events" className="py-20 bg-slate-900/40 border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              Academic Calendar & Official Assemblies
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-2">
              Conferences, Summits & Faculty Workshops
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-2xl">
              Official timeline of Head Masters leadership summits, continuous professional development (CPD) teacher workshops, and town examinations briefings.
            </p>
          </div>
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {dynamicEventsData.map((evt) => (
            <div
              key={evt.id}
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 transition-all hover:bg-slate-800/60 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-xl shadow-black/30 group"
            >
              {/* Date Box + Title */}
              <div className="flex items-start sm:items-center gap-5">
                {/* Calendar Date Block */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-950 to-slate-950 border border-emerald-500/40 flex flex-col items-center justify-center text-center shrink-0 shadow-lg">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">{evt.date.month}</span>
                  <span className="text-2xl font-black text-white font-display leading-none">{evt.date.day}</span>
                  <span className="text-[10px] text-slate-400">{evt.date.year}</span>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-slate-300 border border-slate-700 uppercase tracking-wider">
                      {evt.type}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-400 border border-emerald-800">
                      {evt.status.replace('_', ' ')}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                    {evt.title}
                  </h3>

                  <p className="text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
                    {evt.agenda}
                  </p>
                </div>
              </div>

              {/* Venue & Details */}
              <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-3 text-xs text-slate-400 lg:text-right shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-800">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{evt.time}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-teal-400" />
                  <span className="line-clamp-1">{evt.venue}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                  <UserCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Chair: {evt.chairperson}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
