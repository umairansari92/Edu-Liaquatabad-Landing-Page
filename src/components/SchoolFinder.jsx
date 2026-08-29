'use client';

import React, { useState } from 'react';
import {
  School,
  Search,
  MapPin,
  Users,
  GraduationCap,
  Phone,
  Filter,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { dynamicSchoolsData } from '../data/dynamicSchools.js';

export default function SchoolFinder() {
  const [query, setQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState('ALL');
  const [selectedGender, setSelectedGender] = useState('ALL');
  const [selectedLevel, setSelectedLevel] = useState('ALL');

  const areas = ['ALL', 'Liaquatabad No. 4', 'Liaquatabad No. 2', 'Liaquatabad No. 10', 'Sharifabad', 'Bandhani Colony', 'Ishaqabad'];
  const genders = [
    { id: 'ALL', label: 'All Schools' },
    { id: 'BOYS', label: 'Boys Only' },
    { id: 'GIRLS', label: 'Girls Only' },
    { id: 'CO_EDUCATION', label: 'Co-Education' },
  ];
  const levels = [
    { id: 'ALL', label: 'All Levels' },
    { id: 'PRIMARY', label: 'Primary (1–5)' },
    { id: 'ELEMENTARY', label: 'Elementary (1–8)' },
    { id: 'SECONDARY', label: 'Secondary (6–10)' },
    { id: 'HIGHER_SECONDARY', label: 'Higher Sec (6–12)' },
  ];

  const filtered = dynamicSchoolsData.filter((sch) => {
    const matchesQuery =
      sch.name.toLowerCase().includes(query.toLowerCase()) ||
      sch.schoolCode.toLowerCase().includes(query.toLowerCase()) ||
      sch.emisCode.includes(query) ||
      sch.area.toLowerCase().includes(query.toLowerCase());

    const matchesArea = selectedArea === 'ALL' || sch.area === selectedArea;
    const matchesGender = selectedGender === 'ALL' || sch.genderType === selectedGender;
    const matchesLevel = selectedLevel === 'ALL' || sch.level === selectedLevel;

    return matchesQuery && matchesArea && matchesGender && matchesLevel;
  });

  return (
    <section id="schools" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-1.5">
          <School className="w-4 h-4" />
          Town Municipal School Directory
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-2">
          Find Your Local Government School
        </h2>
        <p className="text-slate-400 text-sm mt-2">
          Explore all verified primary, elementary, and secondary public schools across Liaquatabad Town Centre with official codes, headmaster details, and student strength.
        </p>
      </div>

      {/* Interactive Search & Multi-Filter Control */}
      <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl mb-10 space-y-5">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by School Name, School Code (e.g. MMHA), EMIS Code, or Area..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
          />
        </div>

        {/* Filter Chips */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {/* Area Filter */}
          <div>
            <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
              Sector / Area
            </label>
            <select
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-emerald-500"
            >
              {areas.map((ar) => (
                <option key={ar} value={ar}>{ar === 'ALL' ? 'All Liaquatabad Areas' : ar}</option>
              ))}
            </select>
          </div>

          {/* Gender Filter */}
          <div>
            <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
              Gender Category
            </label>
            <select
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-emerald-500"
            >
              {genders.map((g) => (
                <option key={g.id} value={g.id}>{g.label}</option>
              ))}
            </select>
          </div>

          {/* Level Filter */}
          <div>
            <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
              Education Level
            </label>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-emerald-500"
            >
              {levels.map((l) => (
                <option key={l.id} value={l.id}>{l.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/80">
          <span>Showing <strong>{filtered.length}</strong> matching government school(s)</span>
          {(query || selectedArea !== 'ALL' || selectedGender !== 'ALL' || selectedLevel !== 'ALL') && (
            <button
              onClick={() => { setQuery(''); setSelectedArea('ALL'); setSelectedGender('ALL'); setSelectedLevel('ALL'); }}
              className="text-emerald-400 hover:text-emerald-300 font-bold underline"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Schools Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((sch) => (
          <div
            key={sch.id}
            className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all hover:bg-slate-800/60 flex flex-col justify-between group shadow-xl shadow-black/30"
          >
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between gap-2 mb-3.5">
                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black bg-emerald-600 text-white tracking-widest font-mono">
                  {sch.schoolCode}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-slate-300 border border-slate-700">
                  {sch.levelLabel}
                </span>
              </div>

              {/* School Name */}
              <h3 className="text-base font-extrabold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                {sch.name}
              </h3>

              {/* Location & Details */}
              <div className="mt-4 space-y-2 text-xs text-slate-400">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{sch.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span><strong>HM:</strong> {sch.headMaster}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{sch.phone}</span>
                </div>
              </div>

              {/* Strength Indicators */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-center">
                <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800/60">
                  <span className="text-sm font-extrabold text-white">{sch.totalStudents}</span>
                  <p className="text-[10px] text-slate-500 font-medium">Students</p>
                </div>
                <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800/60">
                  <span className="text-sm font-extrabold text-emerald-400">{sch.totalTeachers}</span>
                  <p className="text-[10px] text-slate-500 font-medium">Teachers</p>
                </div>
              </div>

              {/* Facilities Chips */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {sch.facilities.slice(0, 3).map((f, i) => (
                  <span key={i} className="px-2 py-0.5 rounded text-[10px] bg-slate-950 text-slate-400 border border-slate-800">
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-semibold text-emerald-400">
              <span>EMIS: {sch.emisCode}</span>
              <span className="text-slate-400 group-hover:text-emerald-300 flex items-center gap-1">
                Verified School <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
