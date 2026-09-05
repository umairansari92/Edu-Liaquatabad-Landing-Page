'use client';

import React, { useState } from 'react';
import {
  School,
  Search,
  MapPin,
  Users,
  GraduationCap,
  Phone,
  Smartphone,
  Mail,
  Calendar,
  Building2,
  CheckCircle2,
  XCircle,
  X,
  ExternalLink,
  Sparkles,
  Layers,
  Sun,
  Droplets,
  HeartPulse,
  BookOpen,
  Monitor,
  Activity,
  Award,
  UtensilsCrossed,
} from 'lucide-react';
import { dynamicSchoolsData } from '../data/dynamicSchools.js';

export default function SchoolFinder() {
  const portalUrl = process.env.NEXT_PUBLIC_APP_PORTAL_URL || 'http://localhost:5173';

  const [query, setQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState('ALL');
  const [selectedGender, setSelectedGender] = useState('ALL');
  const [selectedLevel, setSelectedLevel] = useState('ALL');

  // Active modal state
  const [selectedSchool, setSelectedSchool] = useState(null);

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

  const filteredSchools = dynamicSchoolsData.filter((schoolItem) => {
    const matchesQuery =
      schoolItem.name.toLowerCase().includes(query.toLowerCase()) ||
      schoolItem.schoolCode.toLowerCase().includes(query.toLowerCase()) ||
      schoolItem.emisCode.toLowerCase().includes(query.toLowerCase()) ||
      schoolItem.address.toLowerCase().includes(query.toLowerCase());

    const matchesArea = selectedArea === 'ALL' || schoolItem.area === selectedArea;
    const matchesGender = selectedGender === 'ALL' || schoolItem.gender === selectedGender;
    const matchesLevel = selectedLevel === 'ALL' || schoolItem.level === selectedLevel;

    return matchesQuery && matchesArea && matchesGender && matchesLevel;
  });

  const facilityLabels = [
    { key: 'computerLab', label: 'Computer / IT Lab', icon: <Monitor className="w-4 h-4" style={{ color: '#006AC7' }} /> },
    { key: 'scienceLab', label: 'General Science Lab', icon: <Sparkles className="w-4 h-4" style={{ color: '#006AC7' }} /> },
    { key: 'physicsLab', label: 'Physics & Chem Lab', icon: <Activity className="w-4 h-4" style={{ color: '#006AC7' }} /> },
    { key: 'library', label: 'Library & Reading Room', icon: <BookOpen className="w-4 h-4" style={{ color: '#4B7F3A' }} /> },
    { key: 'playground', label: 'Sports Playground', icon: <Award className="w-4 h-4" style={{ color: '#4B7F3A' }} /> },
    { key: 'solarPower', label: 'Solar Backup Power', icon: <Sun className="w-4 h-4" style={{ color: '#D97706' }} /> },
    { key: 'drinkingWater', label: 'Filtered Drinking Water', icon: <Droplets className="w-4 h-4" style={{ color: '#006AC7' }} /> },
    { key: 'firstAid', label: 'First Aid & Health Corner', icon: <HeartPulse className="w-4 h-4" style={{ color: '#DC2626' }} /> },
    { key: 'canteen', label: 'School Canteen / Tuck Shop', icon: <UtensilsCrossed className="w-4 h-4" style={{ color: '#D97706' }} /> },
    { key: 'auditorium', label: 'School Auditorium', icon: <Building2 className="w-4 h-4" style={{ color: '#006AC7' }} /> },
    { key: 'smartClassrooms', label: 'Digital Smart Classrooms', icon: <Layers className="w-4 h-4" style={{ color: '#4B7F3A' }} /> },
  ];

  return (
    <section id="schools" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F0F8FF' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="section-label justify-center">
            <School className="w-3.5 h-3.5" style={{ color: '#006AC7' }} />
            Town Municipal School Directory
          </span>
          <h2
            className="text-2xl sm:text-3xl font-bold mt-2"
            style={{ color: '#102033', fontFamily: 'var(--font-inter)' }}
          >
            Find Your Local Government School
          </h2>
          <p className="text-sm mt-2" style={{ color: '#526477' }}>
            Explore all verified primary, elementary, and secondary public schools across Liaquatabad Town Centre. Click any school card to view its full profile, facilities, HM contact, and campus details.
          </p>
        </div>

        {/* Interactive Search & Multi-Filter Control */}
        <div
          className="p-6 rounded-2xl mb-10 space-y-5"
          style={{
            background: 'rgba(255,255,255,0.75)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            border: '1px solid rgba(0,106,199,0.10)',
            boxShadow: '0 8px 30px rgba(0,33,61,0.06)',
          }}
        >
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#006AC7' }} />
            <input
              type="text"
              value={query}
              onChange={(inputChangeEvent) => setQuery(inputChangeEvent.target.value)}
              placeholder="Search by School Name, School Code (e.g. MMHA), EMIS Code, or Area..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl text-sm focus:outline-none transition-all"
              style={{
                background: '#FFFFFF',
                border: '1.5px solid rgba(0,106,199,0.15)',
                color: '#102033',
              }}
              onFocus={(focusEvent) => {
                focusEvent.target.style.borderColor = '#006AC7';
                focusEvent.target.style.boxShadow = '0 0 0 4px rgba(0,106,199,0.08)';
              }}
              onBlur={(blurEvent) => {
                blurEvent.target.style.borderColor = 'rgba(0,106,199,0.15)';
                blurEvent.target.style.boxShadow = 'none';
              }}
            />
          </div>

          {/* Filter Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5" style={{ color: '#8094A8' }}>
                Sector / Area
              </label>
              <select
                value={selectedArea}
                onChange={(selectionChangeEvent) => setSelectedArea(selectionChangeEvent.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl text-xs focus:outline-none"
                style={{
                  background: '#FFFFFF',
                  border: '1.5px solid rgba(0,106,199,0.12)',
                  color: '#102033',
                }}
              >
                {areas.map((areaItem) => (
                  <option key={areaItem} value={areaItem}>{areaItem === 'ALL' ? 'All Liaquatabad Areas' : areaItem}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5" style={{ color: '#8094A8' }}>
                Gender Type
              </label>
              <select
                value={selectedGender}
                onChange={(selectionChangeEvent) => setSelectedGender(selectionChangeEvent.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl text-xs focus:outline-none"
                style={{
                  background: '#FFFFFF',
                  border: '1.5px solid rgba(0,106,199,0.12)',
                  color: '#102033',
                }}
              >
                {genders.map((genderOption) => (
                  <option key={genderOption.id} value={genderOption.id}>{genderOption.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5" style={{ color: '#8094A8' }}>
                Education Level
              </label>
              <select
                value={selectedLevel}
                onChange={(selectionChangeEvent) => setSelectedLevel(selectionChangeEvent.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl text-xs focus:outline-none"
                style={{
                  background: '#FFFFFF',
                  border: '1.5px solid rgba(0,106,199,0.12)',
                  color: '#102033',
                }}
              >
                {levels.map((levelOption) => (
                  <option key={levelOption.id} value={levelOption.id}>{levelOption.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Counter */}
          <div
            className="flex items-center justify-between text-xs pt-2"
            style={{ borderTop: '1px solid rgba(0,106,199,0.08)', color: '#526477' }}
          >
            <span>Showing <strong style={{ color: '#102033' }}>{filteredSchools.length}</strong> verified government school(s)</span>
            {(query || selectedArea !== 'ALL' || selectedGender !== 'ALL' || selectedLevel !== 'ALL') && (
              <button
                onClick={() => { setQuery(''); setSelectedArea('ALL'); setSelectedGender('ALL'); setSelectedLevel('ALL'); }}
                className="font-bold underline cursor-pointer"
                style={{ color: '#006AC7' }}
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Schools Cards Grid */}
        {/* Schools Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchools.map((schoolItem) => (
            <div
              key={schoolItem.id}
              onClick={() => setSelectedSchool(schoolItem)}
              className="glass-card cursor-pointer p-6 flex flex-col justify-between group"
              style={{
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.75)',
                border: '1px solid rgba(0,106,199,0.10)',
              }}
            >
              <div>
                {/* Image Preview Banner */}
                <div className="relative h-44 -mx-6 -mt-6 mb-5 rounded-t-2xl overflow-hidden">
                  <img
                    src={schoolItem.image}
                    alt={schoolItem.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span
                      className="px-2.5 py-0.5 rounded-md text-[10px] font-black text-white tracking-widest font-mono shadow-sm"
                      style={{ backgroundColor: '#006AC7' }}
                    >
                      {schoolItem.schoolCode}
                    </span>
                    <span
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/90 text-slate-800 backdrop-blur-sm border border-slate-200"
                    >
                      {schoolItem.levelLabel}
                    </span>
                  </div>
                </div>

                {/* School Name */}
                <h3
                  className="text-base font-bold transition-colors group-hover:text-blue-600 leading-snug"
                  style={{ color: '#102033', fontFamily: 'var(--font-inter)' }}
                >
                  {schoolItem.name}
                </h3>

                {/* Location & Details */}
                <div className="mt-4 space-y-2 text-xs" style={{ color: '#526477' }}>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: '#4B7F3A' }} />
                    <span className="line-clamp-2">{schoolItem.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-3.5 h-3.5 shrink-0" style={{ color: '#006AC7' }} />
                    <span><strong>HM:</strong> {schoolItem.headMaster}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 shrink-0" style={{ color: '#006AC7' }} />
                    <span>{schoolItem.phone}</span>
                  </div>
                </div>

                {/* Strength Indicators */}
                <div
                  className="mt-4 pt-3 grid grid-cols-2 gap-2 text-center"
                  style={{ borderTop: '1px solid rgba(0,106,199,0.08)' }}
                >
                  <div
                    className="p-2 rounded-xl"
                    style={{
                      backgroundColor: 'rgba(0,106,199,0.04)',
                      border: '1px solid rgba(0,106,199,0.08)',
                    }}
                  >
                    <span className="text-sm font-bold" style={{ color: '#102033' }}>{schoolItem.totalStudents}</span>
                    <p className="text-[10px]" style={{ color: '#8094A8' }}>Students</p>
                  </div>
                  <div
                    className="p-2 rounded-xl"
                    style={{
                      backgroundColor: 'rgba(75,127,58,0.04)',
                      border: '1px solid rgba(75,127,58,0.12)',
                    }}
                  >
                    <span className="text-sm font-bold" style={{ color: '#4B7F3A' }}>{schoolItem.totalTeachers}</span>
                    <p className="text-[10px]" style={{ color: '#8094A8' }}>Teachers</p>
                  </div>
                </div>

                {/* Facilities Active Tags */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {schoolItem.facilities?.physicsLab && (
                    <span
                      className="px-2 py-0.5 rounded text-[10px]"
                      style={{
                        backgroundColor: 'rgba(0,106,199,0.06)',
                        color: '#006AC7',
                        border: '1px solid rgba(0,106,199,0.12)',
                      }}
                    >
                      Physics Lab
                    </span>
                  )}
                  {schoolItem.facilities?.computerLab && (
                    <span
                      className="px-2 py-0.5 rounded text-[10px]"
                      style={{
                        backgroundColor: 'rgba(0,106,199,0.06)',
                        color: '#006AC7',
                        border: '1px solid rgba(0,106,199,0.12)',
                      }}
                    >
                      Computer Lab
                    </span>
                  )}
                  {schoolItem.facilities?.playground && (
                    <span
                      className="px-2 py-0.5 rounded text-[10px]"
                      style={{
                        backgroundColor: 'rgba(75,127,58,0.06)',
                        color: '#4B7F3A',
                        border: '1px solid rgba(75,127,58,0.14)',
                      }}
                    >
                      Playground
                    </span>
                  )}
                </div>
              </div>

              <div
                className="mt-5 pt-3 flex items-center justify-between text-xs font-semibold"
                style={{
                  borderTop: '1px solid rgba(0,106,199,0.08)',
                  color: '#006AC7',
                }}
              >
                <span>View Full School Details</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Modal */}
        {selectedSchool && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
            style={{ backgroundColor: 'rgba(16, 32, 51, 0.60)', backdropFilter: 'blur(6px)' }}
            onClick={() => setSelectedSchool(null)}
          >
            <div
              className="relative w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(0,106,199,0.15)',
              }}
              onClick={(modalClickEvent) => modalClickEvent.stopPropagation()}
            >
              {/* Modal Header */}
              <div
                className="p-6 flex items-center justify-between gap-4 shrink-0"
                style={{
                  backgroundColor: '#F0F8FF',
                  borderBottom: '1px solid rgba(0,106,199,0.10)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-mono font-bold shadow-sm"
                    style={{ backgroundColor: '#006AC7' }}
                  >
                    {selectedSchool.schoolCode}
                  </div>
                  <div>
                    <h3
                      className="text-lg sm:text-xl font-bold leading-tight"
                      style={{ color: '#102033', fontFamily: 'var(--font-inter)' }}
                    >
                      {selectedSchool.name}
                    </h3>
                    <p className="text-xs mt-0.5" style={{ color: '#526477' }}>
                      EMIS: <strong style={{ color: '#102033' }}>{selectedSchool.emisCode}</strong> • {selectedSchool.levelLabel} • {selectedSchool.area}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedSchool(null)}
                  className="p-2 rounded-xl transition-colors cursor-pointer"
                  style={{
                    backgroundColor: 'rgba(0,106,199,0.06)',
                    color: '#526477',
                  }}
                  title="Close Profile"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column: Campus Image & Contacts (5 cols) */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Photo */}
                  <div
                    className="relative h-64 rounded-2xl overflow-hidden shadow-sm"
                    style={{ border: '1px solid rgba(0,106,199,0.12)' }}
                  >
                    <img
                      src={selectedSchool.image}
                      alt={selectedSchool.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                    <div
                      className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-semibold px-3 py-1.5 rounded-lg text-white"
                      style={{ backgroundColor: 'rgba(16, 32, 51, 0.75)', backdropFilter: 'blur(4px)' }}
                    >
                      <span>Shift: {selectedSchool.shift}</span>
                      <span style={{ color: '#A7C895' }}>Verified Institution</span>
                    </div>
                  </div>

                  {/* HM & Direct Contact */}
                  <div
                    className="p-5 rounded-2xl space-y-3.5 text-xs"
                    style={{
                      backgroundColor: '#F8FBFD',
                      border: '1px solid rgba(0,106,199,0.10)',
                    }}
                  >
                    <h4
                      className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
                      style={{ color: '#006AC7' }}
                    >
                      <GraduationCap className="w-4 h-4" />
                      School Leadership & Direct Contact
                    </h4>

                    <div
                      className="p-3 rounded-xl"
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid rgba(0,106,199,0.10)',
                      }}
                    >
                      <p className="text-[11px]" style={{ color: '#8094A8' }}>Head Master / Principal</p>
                      <p className="text-sm font-bold mt-0.5" style={{ color: '#102033' }}>{selectedSchool.headMaster}</p>
                    </div>

                    <div className="space-y-2" style={{ color: '#526477' }}>
                      <div className="flex items-center gap-2.5">
                        <Smartphone className="w-4 h-4 shrink-0" style={{ color: '#4B7F3A' }} />
                        <span><strong>HM Mobile:</strong> {selectedSchool.hmMobile || 'Official Cell Connected'}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Phone className="w-4 h-4 shrink-0" style={{ color: '#006AC7' }} />
                        <span><strong>School Landline:</strong> {selectedSchool.phone}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Mail className="w-4 h-4 shrink-0" style={{ color: '#006AC7' }} />
                        <span className="text-[11px] font-mono">{selectedSchool.email}</span>
                      </div>
                      <div className="flex items-start gap-2.5 pt-1">
                        <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#4B7F3A' }} />
                        <span>{selectedSchool.address}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: About School & Facilities (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  {/* About */}
                  <div
                    className="p-6 rounded-2xl"
                    style={{
                      backgroundColor: '#F8FBFD',
                      border: '1px solid rgba(0,106,199,0.10)',
                    }}
                  >
                    <h4
                      className="text-sm font-bold flex items-center gap-2 mb-2.5"
                      style={{ color: '#102033', fontFamily: 'var(--font-inter)' }}
                    >
                      <School className="w-4 h-4" style={{ color: '#006AC7' }} />
                      <span>About {selectedSchool.name}</span>
                    </h4>
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#526477' }}>
                      {selectedSchool.about}
                    </p>
                  </div>

                  {/* Key Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                    <div
                      className="p-3.5 rounded-xl"
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid rgba(0,106,199,0.10)',
                      }}
                    >
                      <span className="text-lg font-bold" style={{ color: '#102033' }}>{selectedSchool.totalStudents}</span>
                      <p className="text-[10px] mt-0.5" style={{ color: '#8094A8' }}>Students</p>
                    </div>
                    <div
                      className="p-3.5 rounded-xl"
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid rgba(0,106,199,0.10)',
                      }}
                    >
                      <span className="text-lg font-bold" style={{ color: '#4B7F3A' }}>{selectedSchool.totalTeachers}</span>
                      <p className="text-[10px] mt-0.5" style={{ color: '#8094A8' }}>Faculty</p>
                    </div>
                    <div
                      className="p-3.5 rounded-xl"
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid rgba(0,106,199,0.10)',
                      }}
                    >
                      <span className="text-lg font-bold" style={{ color: '#006AC7' }}>{selectedSchool.classroomsCount || 18}</span>
                      <p className="text-[10px] mt-0.5" style={{ color: '#8094A8' }}>Classrooms</p>
                    </div>
                    <div
                      className="p-3.5 rounded-xl"
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid rgba(0,106,199,0.10)',
                      }}
                    >
                      <span className="text-lg font-bold" style={{ color: '#D97706' }}>{selectedSchool.establishedYear || 1974}</span>
                      <p className="text-[10px] mt-0.5" style={{ color: '#8094A8' }}>Est. Year</p>
                    </div>
                  </div>

                  {/* Multi-Facility Checklist */}
                  <div
                    className="p-6 rounded-2xl space-y-3"
                    style={{
                      backgroundColor: '#F8FBFD',
                      border: '1px solid rgba(0,106,199,0.10)',
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <h4
                        className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
                        style={{ color: '#006AC7' }}
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        Campus Facilities & Laboratory Checklist
                      </h4>
                      <span className="text-[10px]" style={{ color: '#8094A8' }}>Verified by Inspection Officers</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {facilityLabels.map((facilityItem) => {
                        const isAvailable = selectedSchool.facilities?.[facilityItem.key] === true;
                        return (
                          <div
                            key={facilityItem.key}
                            className="p-2.5 rounded-xl border flex items-center justify-between gap-2 text-xs transition-colors"
                            style={{
                              backgroundColor: isAvailable ? 'rgba(75,127,58,0.06)' : '#FFFFFF',
                              borderColor: isAvailable ? 'rgba(75,127,58,0.18)' : 'rgba(16,32,51,0.08)',
                            }}
                          >
                            <div className="flex items-center gap-2">
                              {facilityItem.icon}
                              <span
                                style={{
                                  fontWeight: isAvailable ? 600 : 400,
                                  color: isAvailable ? '#102033' : '#8094A8',
                                }}
                              >
                                {facilityItem.label}
                              </span>
                            </div>

                            {isAvailable ? (
                              <span
                                className="flex items-center gap-1 text-[11px] font-bold shrink-0"
                                style={{ color: '#4B7F3A' }}
                              >
                                <CheckCircle2 className="w-3.5 h-3.5" /> Available
                              </span>
                            ) : (
                              <span
                                className="flex items-center gap-1 text-[11px] shrink-0"
                                style={{ color: '#8094A8' }}
                              >
                                <XCircle className="w-3.5 h-3.5" /> Not Available
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Action CTA inside modal */}
                  <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
                    <button
                      onClick={() => setSelectedSchool(null)}
                      className="btn-secondary w-full sm:w-auto px-5 py-2.5 text-xs justify-center"
                    >
                      Close Profile
                    </button>
                    <a
                      href={`${portalUrl}/login`}
                      className="btn-primary w-full sm:w-auto px-6 py-2.5 text-xs justify-center"
                    >
                      <span>Access School Portal</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
