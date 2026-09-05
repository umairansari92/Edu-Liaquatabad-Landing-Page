'use client';

import React, { useState } from 'react';
import { Users, ShieldCheck, Award, MapPin, Briefcase } from 'lucide-react';
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
    : dynamicTeamData.filter((teamMember) => teamMember.category === activeTab);

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F8FBFD' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="section-label">
              <Users className="w-3.5 h-3.5" style={{ color: '#006AC7' }} />
              Administrative Governance & Field Leadership
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold mt-2"
              style={{ color: '#102033', fontFamily: 'var(--font-inter)' }}
            >
              Supervisory Squad & Academic Council
            </h2>
            <p className="text-sm mt-2 max-w-2xl" style={{ color: '#526477' }}>
              Meet the educational officers, supervisors, school headmasters, and exam invigilators ensuring quality instruction and daily accountability across Liaquatabad Town.
            </p>
          </div>

          {/* DDO Badge */}
          <div
            className="p-4 rounded-2xl flex items-center gap-3.5 shadow-sm shrink-0"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              border: '1.5px solid rgba(0, 106, 199, 0.15)',
              boxShadow: '0 4px 20px rgba(0, 33, 61, 0.06)',
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-sm"
              style={{ backgroundColor: '#006AC7' }}
            >
              DDO
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider" style={{ color: '#006AC7' }}>
                Town Education Officer
              </p>
              <p className="text-xs font-bold" style={{ color: '#102033' }}>
                Muhammad Asif Khan (DDO)
              </p>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {tabs.map((tabOption) => (
            <button
              key={tabOption.id}
              onClick={() => setActiveTab(tabOption.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === tabOption.id
                  ? 'text-white shadow-md'
                  : 'hover:bg-slate-100'
              }`}
              style={{
                backgroundColor: activeTab === tabOption.id ? '#006AC7' : 'rgba(255,255,255,0.70)',
                color: activeTab === tabOption.id ? '#FFFFFF' : '#526477',
                border: activeTab === tabOption.id ? '1px solid #006AC7' : '1px solid rgba(0,106,199,0.10)',
              }}
            >
              {tabOption.label}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((teamMember) => (
            <div
              key={teamMember.id}
              className="glass-card p-6 flex flex-col justify-between group"
              style={{
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.75)',
                border: '1px solid rgba(0,106,199,0.10)',
              }}
            >
              <div>
                {/* Avatar & Badge */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <img
                      src={teamMember.avatar}
                      alt={teamMember.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 transition-colors shadow-sm"
                      style={{ borderColor: 'rgba(0,106,199,0.15)' }}
                    />
                    <div
                      className="absolute -bottom-1 -right-1 p-1 rounded-md text-white shadow-sm"
                      style={{ backgroundColor: '#4B7F3A' }}
                    >
                      <ShieldCheck className="w-3 h-3" />
                    </div>
                  </div>
                  <div>
                    <span
                      className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: 'rgba(0,106,199,0.08)',
                        color: '#006AC7',
                        border: '1px solid rgba(0,106,199,0.18)',
                      }}
                    >
                      {teamMember.wing || teamMember.category}
                    </span>
                    <h3
                      className="text-base font-bold mt-1 transition-colors group-hover:text-blue-600"
                      style={{ color: '#102033', fontFamily: 'var(--font-inter)' }}
                    >
                      {teamMember.name}
                    </h3>
                    <p className="text-xs font-medium" style={{ color: '#526477' }}>
                      {teamMember.designation}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div
                  className="space-y-1.5 pt-3 text-xs"
                  style={{ borderTop: '1px solid rgba(0,106,199,0.08)', color: '#526477' }}
                >
                  {teamMember.area && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: '#4B7F3A' }} />
                      <span>{teamMember.area}</span>
                    </div>
                  )}
                  {teamMember.schoolName && (
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5 shrink-0" style={{ color: '#006AC7' }} />
                      <span className="line-clamp-1">{teamMember.schoolName}</span>
                    </div>
                  )}
                  {teamMember.experience && (
                    <div className="flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 shrink-0" style={{ color: '#006AC7' }} />
                      <span>{teamMember.experience}</span>
                    </div>
                  )}
                </div>

                {teamMember.quote && (
                  <p
                    className="mt-4 p-3 rounded-xl text-xs italic leading-relaxed"
                    style={{
                      backgroundColor: 'rgba(0,106,199,0.04)',
                      border: '1px solid rgba(0,106,199,0.08)',
                      color: '#526477',
                    }}
                  >
                    "{teamMember.quote}"
                  </p>
                )}
              </div>

              <div
                className="mt-5 pt-3 flex items-center justify-between text-[11px] font-semibold"
                style={{
                  borderTop: '1px solid rgba(0,106,199,0.08)',
                  color: '#4B7F3A',
                }}
              >
                <span>Verified Public Officer</span>
                <span style={{ color: '#8094A8' }}>DMC Liaquatabad</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
