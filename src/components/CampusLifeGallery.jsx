'use client';

import React from 'react';
import { Camera } from 'lucide-react';

export default function CampusLifeGallery() {
  const galleryItems = [
    {
      title: 'Modern Science & Chemistry Labs',
      category: 'Science & Discovery',
      school: 'Molana Muhammad Hussain Azad School',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Digital Computer & IT Workshops',
      category: 'IT Education',
      school: 'Govt. Comprehensive Higher Secondary School',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Interactive Classroom Learning',
      category: 'Primary Pedagogy',
      school: 'Baba-e-Urdu Primary School',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Town Sports Gala & Cricket Matches',
      category: 'Athletics',
      school: 'Liaquatabad Sports Complex',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Urdu & English Reading Corners',
      category: 'Literacy Drive',
      school: 'Govt. Girls Secondary School Sharifabad',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Art, Drawing & Culture Exhibitions',
      category: 'Arts & Creativity',
      school: 'Bandhani Colony Primary Wing',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F8FBFD' }}>
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="section-label justify-center">
            <Camera className="w-3.5 h-3.5" style={{ color: '#006AC7' }} />
            Campus Life & Learning Across Liaquatabad
          </span>
          <h2
            className="text-2xl sm:text-3xl font-bold mt-2"
            style={{ color: '#102033', fontFamily: 'var(--font-inter)' }}
          >
            Inside Our Public Schools & Laboratories
          </h2>
          <p className="text-sm mt-2" style={{ color: '#526477' }}>
            A glimpse into classroom activities, STEM experiments, sports tournaments, and co-curricular creativity across our government schools.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="glass-card group relative h-64 overflow-hidden shadow-sm"
              style={{
                borderRadius: '24px',
                border: '1px solid rgba(0,106,199,0.12)',
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white shadow-sm"
                  style={{ backgroundColor: '#006AC7' }}
                >
                  {item.category}
                </span>
                <h3
                  className="text-sm font-bold text-white mt-1 leading-snug"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-200 mt-0.5 font-medium">
                  {item.school}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
