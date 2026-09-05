'use client';

import React from 'react';
import { Award, Calendar, MapPin, Users, Sparkles, ArrowRight } from 'lucide-react';
import { dynamicProgramsData } from '../data/dynamicPrograms.js';

export default function EducationalPrograms() {
  return (
    <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F8FBFD' }}>
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="section-label justify-center">
            <Sparkles className="w-3.5 h-3.5" style={{ color: '#006AC7' }} />
            Town-Wide Co-Curricular & Academic Galas
          </span>
          <h2
            className="text-2xl sm:text-3xl font-bold mt-2"
            style={{ color: '#102033', fontFamily: 'var(--font-inter)' }}
          >
            Educational Programs & Competitions
          </h2>
          <p className="text-sm mt-2" style={{ color: '#526477' }}>
            Fostering scientific innovation, public speaking, athletic excellence, and reading culture across all government schools in Liaquatabad Town.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dynamicProgramsData.map((programItem) => (
            <div
              key={programItem.id}
              className="glass-card overflow-hidden flex flex-col justify-between group"
              style={{
                borderRadius: '24px',
                border: '1px solid rgba(0,106,199,0.10)',
                background: 'rgba(255, 255, 255, 0.75)',
              }}
            >
              <div>
                {/* Cover Image */}
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={programItem.image}
                    alt={programItem.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span
                      className="px-3 py-1 rounded-full text-[11px] font-bold text-white shadow-sm"
                      style={{ backgroundColor: '#006AC7' }}
                    >
                      {programItem.badge}
                    </span>
                    <span
                      className="px-3 py-1 rounded-full text-[11px] font-bold text-slate-800 bg-white/90 backdrop-blur-sm border border-slate-200"
                    >
                      {programItem.category}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3
                    className="text-lg sm:text-xl font-bold transition-colors group-hover:text-blue-600"
                    style={{ color: '#102033', fontFamily: 'var(--font-inter)' }}
                  >
                    {programItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm mt-2 leading-relaxed" style={{ color: '#526477' }}>
                    {programItem.description}
                  </p>

                  {/* Metadata */}
                  <div
                    className="mt-5 pt-4 space-y-2 text-xs"
                    style={{ borderTop: '1px solid rgba(0,106,199,0.08)', color: '#526477' }}
                  >
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 shrink-0" style={{ color: '#006AC7' }} />
                      <span><strong>Date:</strong> {programItem.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 shrink-0" style={{ color: '#4B7F3A' }} />
                      <span className="line-clamp-1"><strong>Host:</strong> {programItem.hostSchool}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 shrink-0" style={{ color: '#006AC7' }} />
                      <span><strong>Eligibility:</strong> {programItem.targetGrades}</span>
                    </div>
                  </div>

                  {/* Awards */}
                  <div
                    className="mt-4 p-3 rounded-xl text-xs flex items-center gap-2"
                    style={{
                      backgroundColor: 'rgba(75,127,58,0.08)',
                      border: '1px solid rgba(75,127,58,0.18)',
                      color: '#294D22',
                    }}
                  >
                    <Award className="w-4 h-4 shrink-0" style={{ color: '#4B7F3A' }} />
                    <span><strong>Recognition:</strong> {programItem.awards}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="#schools"
                  className="btn-secondary w-full justify-center text-xs py-2.5"
                >
                  <span>View Participating Schools</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
