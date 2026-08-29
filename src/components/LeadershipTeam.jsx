'use client';

import React, { useState } from 'react';
import { Users, ShieldCheck, Award, MapPin, Briefcase, ChevronRight } from 'lucide-react';
import { dynamicTeamData } from '../data/dynamicTeam.js';

export default function LeadershipTeam() {
  const [activeTab, setActiveTab] = useState('ALL');

  const tabs = [
    { id: 'ALL', label: 'All Leadership' },
    { id: 'SUPERVISORS', label: 'Supervisory Inspection Squad' },
    { id: 'HEAD_MASTERS', label: 'Head Masters Council' },
    { id: 'INVIGILATORS', label: 'Examination & Invigilation Board' },
  ];

  const filtered = activeTab === 'ALL'
    ? dynamicTeamData
    : dynamicTeamData.filter((item) => item.category === activeTab);

  return (
    <section id="team" className="py-20 bg-slate-900/40 border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
              <Users className="w-4 h-4" />
              Administrative Governance & Field Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-2">
              Supervisory Squad & Academic Council
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-2xl">
              Meet the educational officers, supervisors, school headmasters, and exam invigilators ensuring quality instruction and daily accountability across Liaquatabad Town.
            </p>
          </div>

          {/* DDO Badge */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-950/80 to-slate-900 border border-emerald-500/30 flex items-center gap-3.5 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
              DDO
            </div>
            <div>
              <p className="text-[11px] text-emerald-400 font-bold uppercase tracking-wider">Town Education Officer</p>
              <p className="text-xs font-bold text-white">Muhammad Asif Khan (DDO)</p>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950/60'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((member) => (
            <div
              key={member.id}
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 transition-all hover:bg-slate-800/60 flex flex-col justify-between group shadow-xl shadow-black/30"
            >
              <div>
                {/* Avatar & Badge */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-slate-700 group-hover:border-emerald-400 transition-colors shadow-md"
                    />
                    <div className="absolute -bottom-1 -right-1 p-1 rounded-md bg-emerald-600 text-white shadow">
                      <ShieldCheck className="w-3 h-3" />
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                      {member.wing || member.category}
                    </span>
                    <h3 className="text-base font-extrabold text-white mt-1 group-hover:text-emerald-300 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium">
                      {member.designation}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-1.5 pt-3 border-t border-slate-800/80 text-xs text-slate-400">
                  {member.area && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span>{member.area}</span>
                    </div>
                  )}
                  {member.schoolName && (
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span className="line-clamp-1">{member.schoolName}</span>
                    </div>
                  )}
                  {member.experience && (
                    <div className="flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span>{member.experience}</span>
                    </div>
                  )}
                </div>

                {member.quote && (
                  <p className="mt-4 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-[11px] text-slate-300 italic">
                    "{member.quote}"
                  </p>
                )}
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-semibold text-emerald-400">
                <span>Verified Public Officer</span>
                <span className="text-slate-500">DMC Liaquatabad</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
