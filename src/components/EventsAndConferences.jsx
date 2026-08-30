'use client';

import React from 'react';
import { Calendar, Clock, MapPin, UserCheck, ShieldCheck } from 'lucide-react';
import { dynamicEventsData } from '../data/dynamicEvents.js';

export default function EventsAndConferences() {
  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="section-label">
              <Calendar className="w-3.5 h-3.5" style={{ color: '#006AC7' }} />
              Academic Calendar & Official Assemblies
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold mt-2"
              style={{ color: '#102033', fontFamily: 'var(--font-inter)' }}
            >
              Conferences, Summits & Faculty Workshops
            </h2>
            <p className="text-sm mt-2 max-w-2xl" style={{ color: '#526477' }}>
              Official timeline of Head Masters leadership summits, continuous professional development (CPD) teacher workshops, and town examinations briefings.
            </p>
          </div>
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {dynamicEventsData.map((evt) => (
            <div
              key={evt.id}
              className="glass-card p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6 group"
              style={{
                borderRadius: '20px',
                background: 'rgba(248, 251, 253, 0.70)',
                border: '1px solid rgba(0,106,199,0.10)',
              }}
            >
              {/* Date Box + Title */}
              <div className="flex items-start sm:items-center gap-5">
                {/* Calendar Date Block */}
                <div
                  className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center text-center shrink-0 shadow-sm"
                  style={{
                    backgroundColor: '#F0F8FF',
                    border: '1px solid rgba(0,106,199,0.20)',
                  }}
                >
                  <span
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: '#006AC7' }}
                  >
                    {evt.date.month}
                  </span>
                  <span
                    className="text-2xl font-black leading-none"
                    style={{ color: '#102033', fontFamily: 'var(--font-inter)' }}
                  >
                    {evt.date.day}
                  </span>
                  <span className="text-[10px]" style={{ color: '#8094A8' }}>
                    {evt.date.year}
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                      style={{
                        backgroundColor: 'rgba(0,106,199,0.08)',
                        color: '#006AC7',
                        border: '1px solid rgba(0,106,199,0.18)',
                      }}
                    >
                      {evt.type}
                    </span>
                    <span
                      className="px-2 py-0.5 rounded text-[10px] font-bold"
                      style={{
                        backgroundColor: 'rgba(75,127,58,0.08)',
                        color: '#4B7F3A',
                        border: '1px solid rgba(75,127,58,0.18)',
                      }}
                    >
                      {evt.status.replace('_', ' ')}
                    </span>
                  </div>

                  <h3
                    className="text-base sm:text-lg font-bold transition-colors group-hover:text-blue-600"
                    style={{ color: '#102033', fontFamily: 'var(--font-inter)' }}
                  >
                    {evt.title}
                  </h3>

                  <p className="text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed" style={{ color: '#526477' }}>
                    {evt.agenda}
                  </p>
                </div>
              </div>

              {/* Venue & Details */}
              <div
                className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-2.5 text-xs lg:text-right shrink-0 pt-4 lg:pt-0"
                style={{
                  borderTop: '1px solid rgba(0,106,199,0.08)',
                  color: '#526477',
                }}
              >
                <div className="flex items-center gap-1.5 font-medium" style={{ color: '#102033' }}>
                  <Clock className="w-3.5 h-3.5" style={{ color: '#006AC7' }} />
                  <span>{evt.time}</span>
                </div>
                <div className="flex items-center gap-1.5" style={{ color: '#526477' }}>
                  <MapPin className="w-3.5 h-3.5" style={{ color: '#4B7F3A' }} />
                  <span className="line-clamp-1">{evt.venue}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px]" style={{ color: '#8094A8' }}>
                  <UserCheck className="w-3.5 h-3.5" style={{ color: '#006AC7' }} />
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
