'use client';

import React from 'react';
import { ArrowRight, Building2, Phone, Mail, MapPin } from 'lucide-react';

export default function CivicFooter() {
  const portalUrl = process.env.NEXT_PUBLIC_APP_PORTAL_URL || 'http://localhost:5173';

  const quickLinks = [
    { label: 'School Directory', href: '#schools' },
    { label: 'Latest Notices', href: '#notices' },
    { label: 'Official Circulars', href: '#circulars' },
    { label: 'Free Textbooks', href: '#resources' },
    { label: 'Academic Calendar', href: '#calendar' },
    { label: 'Governance Structure', href: '#governance' },
  ];

  const portalLinks = [
    { label: 'Staff & Teacher Login', href: `${portalUrl}/login` },
    { label: 'Student Self-Registration', href: `${portalUrl}/register/student` },
    { label: 'Teacher Registration', href: `${portalUrl}/register/teacher` },
    { label: 'Report Card Access', href: `${portalUrl}/results` },
  ];

  return (
    <footer style={{ backgroundColor: '#00213D', color: '#FFFFFF' }}>
      {/* CTA Strip */}
      <div
        className="px-4 sm:px-6 lg:px-8 py-12 border-b"
        style={{ borderColor: 'rgba(255,255,255,0.08)' }}
      >
        <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2
              className="text-xl sm:text-2xl font-bold"
              style={{ color: '#FFFFFF', fontFamily: 'var(--font-inter)' }}
            >
              Ready to Access the Official Portal?
            </h2>
            <p className="mt-1.5 text-sm" style={{ color: 'rgba(255,255,255,0.60)' }}>
              Students, teachers, and school leadership can sign in with verified credentials.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href={`${portalUrl}/login`}
              className="btn-primary px-6 py-3 text-sm"
            >
              Access Secure Portal
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`${portalUrl}/register/student`}
              className="btn-secondary px-5 py-3 text-sm"
              style={{
                background: 'rgba(255,255,255,0.06)',
                borderColor: 'rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.80)',
              }}
            >
              Student Admission
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="px-4 sm:px-6 lg:px-8 py-14">
        <div className="section-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: '#006AC7' }}
              >
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <div
                  className="font-bold text-sm leading-snug"
                  style={{ color: '#FFFFFF', fontFamily: 'var(--font-inter)' }}
                >
                  Education Department
                </div>
                <div
                  className="text-xs"
                  style={{ color: 'rgba(255,255,255,0.50)' }}
                >
                  Liaquatabad Town Centre (DMC)
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Official public education portal of District Municipal Corporation Liaquatabad,
              providing centralized governance, verified academic records, and digital
              transparency across 45+ government schools.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-2.5">
              <div className="flex items-start gap-2.5 text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>
                <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#3FA4E8' }} />
                <span>Town Office, Liaquatabad, Karachi, Sindh, Pakistan</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>
                <Phone className="w-3.5 h-3.5" style={{ color: '#3FA4E8' }} />
                <span>+92-21-XXXX-XXXX</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>
                <Mail className="w-3.5 h-3.5" style={{ color: '#3FA4E8' }} />
                <span>education@liaquatabad-dmc.gov.pk</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-semibold text-sm mb-4"
              style={{ color: '#FFFFFF', fontFamily: 'var(--font-inter)' }}
            >
              Quick Access
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-150"
                    style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#3FA4E8'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Portal Links */}
          <div>
            <h4
              className="font-semibold text-sm mb-4"
              style={{ color: '#FFFFFF', fontFamily: 'var(--font-inter)' }}
            >
              Staff & Student Portal
            </h4>
            <ul className="space-y-2.5">
              {portalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-150"
                    style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#3FA4E8'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4
              className="font-semibold text-sm mb-4"
              style={{ color: '#FFFFFF', fontFamily: 'var(--font-inter)' }}
            >
              Legal & Governance
            </h4>
            <ul className="space-y-2.5">
              {[
                'Privacy Policy',
                'Accessibility Statement',
                'Terms of Use',
                'RTI / Public Records',
                'Sitemap',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm transition-colors duration-150"
                    style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#3FA4E8'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="px-4 sm:px-6 lg:px-8 py-5 border-t"
        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
          <span>
            © {new Date().getFullYear()} Education Department Liaquatabad Town Centre (DMC). All rights reserved.
          </span>
          <span className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1 text-center">
            Powered by{' '}
            <a
              href="https://dataversetechnologies.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#3FA4E8', textDecoration: 'none', fontWeight: 600 }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#6DC0FF'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#3FA4E8'; }}
            >
              DataVerse Technologies
            </a>
            {' '}|{' '}
            Designed &amp; Developed by{' '}
            <a
              href="https://app-cvifypro.vercel.app/p/umairansari92"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#F59E0B', textDecoration: 'none', fontWeight: 600 }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#FCD34D'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#F59E0B'; }}
            >
              Umair Ahmed
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
