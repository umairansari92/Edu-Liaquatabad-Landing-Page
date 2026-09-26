'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Shield,
  Layers,
  Cpu,
  Lock,
  Users,
  BookOpen,
  Calendar,
  Award,
  ArrowRightLeft,
  FileText,
  Search,
  CheckCircle2,
  AlertTriangle,
  Building2,
  GraduationCap,
  Sparkles,
  Database,
  Terminal,
  Activity,
  ChevronRight,
  Menu,
  X,
  ArrowLeft,
  KeyRound,
  ExternalLink,
  ClipboardCheck,
  Send,
  Eye,
  Clock,
  Briefcase,
  AlertCircle,
  HelpCircle,
  Hash,
} from 'lucide-react';

export default function DocumentationPage() {
  const [activeSection, setActiveSection] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const portalUrl = process.env.NEXT_PUBLIC_APP_PORTAL_URL || 'http://localhost:5173';

  // Smooth scroll handler with URL hash sync
  const handleSelect = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (typeof window !== 'undefined') {
        window.history.replaceState(null, '', `#${id}`);
      }
    }
    setMobileMenuOpen(false);
  };

  // IntersectionObserver to sync active section on scroll
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const initialId = window.location.hash.replace('#', '');
      if (initialId) {
        setTimeout(() => {
          const el = document.getElementById(initialId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(initialId);
          }
        }, 150);
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-15% 0px -70% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Navigation Group Structure (Modeled on CVify Pro Information Architecture)
  const navGroups = [
    {
      category: '1. System Foundations',
      items: [
        { id: 'overview', label: 'Platform Overview', icon: Building2 },
        { id: 'problem-statement', label: 'Municipal Problem Statement', icon: AlertCircle },
        { id: 'is-vs-not', label: 'What System IS vs NOT', icon: CheckCircle2 },
        { id: 'quick-access', label: 'System at a Glance (HUD)', icon: Sparkles },
      ],
    },
    {
      category: '2. Architecture & Hierarchy',
      items: [
        { id: 'hierarchy', label: '7-Tier Municipal Hierarchy', icon: Layers },
        { id: 'decoupled-identity', label: 'Decoupled Identity Model', icon: KeyRound },
        { id: 'tech-topology', label: 'Dual-App System Topology', icon: Cpu },
        { id: 'tech-stack', label: 'Technology Stack Inventory', icon: Database },
        { id: 'bff-architecture', label: 'BFF & Request Lifecycle', icon: ArrowRightLeft },
        { id: 'directory-structure', label: 'Repository Directory Layout', icon: Terminal },
      ],
    },
    {
      category: '3. Identity & Governance',
      items: [
        { id: 'roles-catalogue', label: 'The 8 Authoritative Roles', icon: Users },
        { id: 'capability-matrix', label: 'Role Capability Matrix', icon: Award },
        { id: 'subordination', label: 'Subordination & Hierarchy Rules', icon: Shield },
        { id: 'data-scopes', label: 'The 7 Geographic Scopes', icon: Layers },
        { id: 'account-lifecycle', label: 'Account Lifecycle Machine', icon: Clock },
      ],
    },
    {
      category: '4. Defense-in-Depth Security',
      items: [
        { id: 'security-scorecard', label: '55-Control ASVS Scorecard', icon: Shield },
        { id: 'triple-lock', label: 'Triple-Lock Rate Limiting', icon: Lock },
        { id: 'argon2id-security', label: 'Argon2id + Pepper Hashing', icon: KeyRound },
        { id: 'captcha-engine', label: 'Custom Math CAPTCHA Nonce', icon: Hash },
        { id: 'mfa-totp', label: 'Root Admin TOTP MFA Engine', icon: Lock },
        { id: 'security-invariants', label: 'Non-Negotiable Invariants', icon: AlertTriangle },
        { id: 'threat-mitigation', label: 'Adversarial Threat Matrix', icon: Shield },
      ],
    },
    {
      category: '5. Operational Modules',
      items: [
        { id: 'school-inspections', label: 'Municipal Schools & Inspection', icon: Building2 },
        { id: 'teacher-rosters', label: 'Faculty Rosters & PDF Service', icon: Briefcase },
        { id: 'atomic-transfers', label: 'Atomic Teacher Transfers', icon: ArrowRightLeft },
        { id: 'student-management', label: 'Students, GR & Digital ID', icon: GraduationCap },
        { id: 'parent-portal', label: 'Parent Portal (Waves 1, 2, 3)', icon: Users },
        { id: 'attendance-engine', label: 'Smart Attendance & Timing', icon: ClipboardCheck },
        { id: 'examination-engine', label: 'Elementary Board Exam Engine', icon: Award },
        { id: 'marksheets-tabulation', label: 'Marksheet PDF & Tabulation', icon: FileText },
        { id: 'documents-library', label: 'Circulars & Digital Library', icon: BookOpen },
        { id: 'notifications-outbox', label: 'Notifications & Alert Outbox', icon: Send },
      ],
    },
    {
      category: '6. Immutable Audit & Data',
      items: [
        { id: 'audit-contract', label: '10-Point Immutable Audit', icon: Shield },
        { id: 'audit-triggers', label: 'Mandatory Audit Triggers', icon: Activity },
        { id: 'database-models', label: '30 Mongoose Models Catalogue', icon: Database },
        { id: 'compound-indexes', label: 'Compound Partial Indexes', icon: Layers },
        { id: 'api-catalogue', label: 'RESTful API Endpoint Index', icon: Terminal },
      ],
    },
    {
      category: '7. UI & Client Architecture',
      items: [
        { id: 'design-constitution', label: 'Frozen Design Constitution v2', icon: Sparkles },
        { id: 'client-architecture', label: 'Redux Toolkit & Token Mutex', icon: Cpu },
        { id: 'pwa-caching', label: 'PWA Offline App-Shell', icon: Layers },
      ],
    },
    {
      category: '8. Verification & Deployment',
      items: [
        { id: 'test-verification', label: '40 Test Suites (1,116 PASS)', icon: CheckCircle2 },
        { id: 'deployment-topology', label: 'Multi-Zone Vercel Deployment', icon: Building2 },
        { id: 'environment-config', label: 'Environment Config & Secrets', icon: Lock },
        { id: 'status-roadmap', label: 'Honest Status & Roadmap', icon: Activity },
        { id: 'glossary', label: 'Institutional Glossary', icon: HelpCircle },
      ],
    },
  ];

  // Search filter across navigation items
  const filteredNavGroups = navGroups
    .map((group) => ({
      ...group,
      items: group.items.filter(
        (item) =>
          item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
          group.category.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <div className="min-h-screen bg-[#F8FBFD] text-[#102033] flex flex-col font-sans">
      {/* ── Fixed Top Header (CVify Pro Visual Standard) ── */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Left Brand Identity & Back Button */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#526477] hover:text-[#006AC7] hover:bg-[#F0F8FF] transition-colors border border-slate-200/60"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Portal</span>
            </Link>

            <div className="h-5 w-px bg-slate-200 hidden sm:block" />

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#006AC7] flex items-center justify-center text-white shadow-xs">
                <Shield className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <div className="font-bold text-sm text-[#102033] flex items-center gap-2">
                  <span>DMC Liaquatabad</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-blue-50 text-[#006AC7] border border-blue-200">
                    System Docs
                  </span>
                </div>
                <div className="text-[11px] text-[#526477] hidden md:block">
                  Education Department Municipal Knowledge Base
                </div>
              </div>
            </div>
          </div>

          {/* Center Search Input */}
          <div className="hidden md:flex items-center flex-1 max-w-md relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics (e.g., transfers, Argon2id, attendance, exams)..."
              className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006AC7] focus:bg-white transition-all text-[#102033]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 text-xs text-slate-400 hover:text-slate-600 font-bold"
              >
                ✕
              </button>
            )}
          </div>

          {/* Right Status & Action Controls */}
          <div className="flex items-center gap-2.5">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#4B7F3A] text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#4B7F3A] animate-pulse" />
              <span>Staging Verified (1,116 Tests PASS)</span>
            </div>

            <a
              href={`${portalUrl}/login`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#006AC7] hover:bg-[#005299] text-white shadow-xs transition-colors"
            >
              <span>Access App</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 lg:hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Main Dual-Pane Body Layout ── */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex gap-8 py-8">
        {/* ── Left Sticky Sidebar (w-72 / w-80) ── */}
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-80 bg-white border-r border-slate-200 p-5 overflow-y-auto transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:h-[calc(100vh-6rem)] lg:sticky lg:top-20 lg:rounded-2xl lg:shadow-xs ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Mobile search bar */}
          <div className="md:hidden mb-4 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006AC7]"
            />
          </div>

          <div className="space-y-6 select-none">
            {filteredNavGroups.map((group) => (
              <div key={group.category} className="space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
                  {group.category}
                </div>
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(item.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-left transition-all ${
                        isActive
                          ? 'bg-[#F0F8FF] text-[#006AC7] border border-[#B9DEFF] font-bold shadow-xs'
                          : 'text-[#526477] hover:bg-slate-50 hover:text-[#102033]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-[#006AC7]' : 'text-slate-400'}`} />
                        <span className="truncate">{item.label}</span>
                      </div>
                      {isActive && <ChevronRight className="w-3.5 h-3.5 text-[#006AC7] flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </aside>

        {/* ── Main Reading Pane ── */}
        <main className="flex-1 min-w-0 max-w-4xl space-y-16 pb-24">
          {/* Hero Section */}
          <div className="space-y-4 border-b border-slate-200 pb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#006AC7] border border-blue-200">
              <Shield className="w-3.5 h-3.5" />
              <span>Official System Knowledge Base &amp; Engineering Constitution</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#102033] font-display">
              Education Department Liaquatabad Town Centre (DMC)
            </h1>

            <p className="text-base text-[#526477] leading-relaxed max-w-3xl">
              Authoritative, single-source-of-truth technical and operational specification for the centralized public
              school management platform of Liaquatabad Town, Karachi Central. Designed for software engineers, security
              auditors, municipal education officers, and future platform maintainers.
            </p>

            {/* 4-Metric System HUD (CVify Pro Standard) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Architecture</div>
                <div className="text-lg font-extrabold text-[#006AC7] mt-1">Dual-App + BFF</div>
                <div className="text-[11px] text-[#526477] mt-0.5">Next.js 15 + React 18</div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Test Baseline</div>
                <div className="text-lg font-extrabold text-[#4B7F3A] mt-1">1,116 PASS</div>
                <div className="text-[11px] text-[#526477] mt-0.5">40 Test Suites (100%)</div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Security Score</div>
                <div className="text-lg font-extrabold text-[#102033] mt-1">96.4% ASVS</div>
                <div className="text-[11px] text-[#526477] mt-0.5">55 Verified Controls</div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Data Models</div>
                <div className="text-lg font-extrabold text-purple-700 mt-1">30 Schemas</div>
                <div className="text-[11px] text-[#526477] mt-0.5">Zero Hard Deletions</div>
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              SECTION 1: SYSTEM FOUNDATIONS
          ───────────────────────────────────────────────────────────── */}
          <section id="overview" className="space-y-6 scroll-mt-24">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#006AC7]">System Foundations</span>
              <h2 className="text-2xl font-bold text-[#102033] flex items-center gap-2">
                <Building2 className="w-6 h-6 text-[#006AC7]" />
                1.1 Institutional Identity &amp; Platform Mission
              </h2>
            </div>

            <p className="text-sm text-[#526477] leading-relaxed">
              The platform serves as the municipal governance backbone for public primary, elementary, and secondary
              schools operating within the jurisdiction of the <strong>District Municipal Corporation (DMC) Liaquatabad Town Centre, Karachi Central</strong>. It transitions paper-based government schooling records into an authenticated, cryptographic, and verifiable digital workflow.
            </p>

            <div className="p-4 rounded-xl bg-blue-50/60 border-l-4 border-[#006AC7] text-xs text-[#102033] space-y-1">
              <div className="font-bold">Constitutional Municipal Context</div>
              <div>Operating under the Sindh Civil Servants Act, DMC Local Government Ordinance, and the Sindh Elementary Board Examination Regulations. All software actions represent official civic records.</div>
            </div>
          </section>

          <section id="problem-statement" className="space-y-6 scroll-mt-24">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#006AC7]">System Foundations</span>
              <h2 className="text-2xl font-bold text-[#102033] flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-amber-600" />
                1.2 The Real-World Municipal Problem
              </h2>
            </div>

            <p className="text-sm text-[#526477] leading-relaxed">
              Before this platform, public education administration across Liaquatabad Town was crippled by five systemic failure points:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                <div className="font-bold text-xs text-[#102033] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  Ghost Faculty &amp; Proxy Teachers
                </div>
                <p className="text-xs text-[#526477]">
                  Unmonitored paper registers allowed unauthorized proxy teachers and unchecked staff absenteeism without supervisor audit visibility.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                <div className="font-bold text-xs text-[#102033] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  Orphan Classrooms via Lost Transfers
                </div>
                <p className="text-xs text-[#526477]">
                  Informal teacher transfers left classrooms with no designated instructor for months while physical relieving chits were lost in transit.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                <div className="font-bold text-xs text-[#102033] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  Elementary Tabulation Inaccuracies
                </div>
                <p className="text-xs text-[#526477]">
                  Manual calculation of 700-mark aggregates, Drawing letter grades, and Islamiat Nazra 20/80 splits led to frequent mathematical discrepancies.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                <div className="font-bold text-xs text-[#102033] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  Zero Parent Transparency
                </div>
                <p className="text-xs text-[#526477]">
                  Working-class parents had no secure mechanism to monitor attendance, homework, or verified academic results without visiting schools in person.
                </p>
              </div>
            </div>
          </section>

          <section id="is-vs-not" className="space-y-6 scroll-mt-24">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#006AC7]">System Foundations</span>
              <h2 className="text-2xl font-bold text-[#102033] flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-[#4B7F3A]" />
                1.3 What This System IS vs What This System IS NOT
              </h2>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-xs bg-white">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 font-bold text-[#102033]">
                  <tr>
                    <th className="p-3.5">WHAT THIS SYSTEM IS</th>
                    <th className="p-3.5">WHAT THIS SYSTEM IS NOT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-[#526477]">
                  <tr>
                    <td className="p-3.5 font-medium text-[#102033] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#4B7F3A]" />
                      A centralized municipal education governance portal
                    </td>
                    <td className="p-3.5 text-slate-500">NOT a commercial private-school billing SaaS</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-medium text-[#102033] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#4B7F3A]" />
                      An authoritative staff deployment &amp; transfer engine
                    </td>
                    <td className="p-3.5 text-slate-500">NOT an unmonitored open-registration message board</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-medium text-[#102033] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#4B7F3A]" />
                      A Sindh Elementary Board examination tabulator
                    </td>
                    <td className="p-3.5 text-slate-500">NOT a generic, unconstrained spreadsheet tool</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-medium text-[#102033] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#4B7F3A]" />
                      A verified parent-student oversight conduit
                    </td>
                    <td className="p-3.5 text-slate-500">NOT an ad-supported or social networking app</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ─────────────────────────────────────────────────────────────
              SECTION 2: ARCHITECTURE & HIERARCHY
          ───────────────────────────────────────────────────────────── */}
          <section id="hierarchy" className="space-y-6 scroll-mt-24">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#006AC7]">Architecture &amp; Hierarchy</span>
              <h2 className="text-2xl font-bold text-[#102033] flex items-center gap-2">
                <Layers className="w-6 h-6 text-[#006AC7]" />
                2.1 The 7-Tier Municipal Governance Hierarchy
              </h2>
            </div>

            <p className="text-sm text-[#526477] leading-relaxed">
              Institutional authority operates in a downward cascade across 7 strictly quarantined tiers. Every actor’s visibility is determined by their assigned geographic boundary:
            </p>

            {/* ASCII Terminal Box Diagram (CVify Pro Signature Style) */}
            <div className="bg-slate-950 font-mono text-emerald-400 p-5 rounded-2xl border border-slate-800 shadow-xl overflow-x-auto text-xs leading-relaxed">
              <div className="text-slate-400 mb-2">// 7-TIER AUTHORITATIVE MUNICIPAL GOVERNANCE HIERARCHY</div>
              <div>┌─────────────────────────────────────────────────────────────────────────┐</div>
              <div>│ TIER 1: SUPREME PLATFORM GOVERNANCE (Role: ROOT_ADMIN • Level: 100)      │</div>
              <div>│ Scope: GLOBAL • Technical Architecture, Stealth Outage, Master Audit    │</div>
              <div>└────────────────────────────────────┬────────────────────────────────────┘</div>
              <div>                                     ▼</div>
              <div>┌─────────────────────────────────────────────────────────────────────────┐</div>
              <div>│ TIER 2: MUNICIPAL EXECUTIVE DIRECTORATE (Role: SUPER_ADMIN • Level: 80) │</div>
              <div>│ Scope: TOWN • Town Education Officer, DDO, Chairman Education DMC       │</div>
              <div>└────────────────────────────────────┬────────────────────────────────────┘</div>
              <div>                                     ▼</div>
              <div>┌─────────────────────────────────────────────────────────────────────────┐</div>
              <div>│ TIER 3: TOWN ADMINISTRATIVE MANAGEMENT (Role: ADMIN • Level: 60)         │</div>
              <div>│ Scope: TOWN • Municipal Education Officers, Faculty Onboarding Queues    │</div>
              <div>└────────────────────────────────────┬────────────────────────────────────┘</div>
              <div>                                     ▼</div>
              <div>┌─────────────────────────────────────────────────────────────────────────┐</div>
              <div>│ TIER 4: CLUSTER FIELD SUPERVISION (Role: SUPERVISOR • Level: 50)         │</div>
              <div>│ Scope: ASSIGNED_SCHOOLS • Unannounced Biometric Audits, Transfer Orders │</div>
              <div>└────────────────────────────────────┬────────────────────────────────────┘</div>
              <div>                                     ▼</div>
              <div>┌─────────────────────────────────────────────────────────────────────────┐</div>
              <div>│ TIER 5: INSTITUTIONAL SCHOOL AUTHORITY (Role: HM • Level: 40)             │</div>
              <div>│ Scope: SCHOOL • Head Master, Teacher Attendance, Result Verification     │</div>
              <div>└────────────────────────────────────┬────────────────────────────────────┘</div>
              <div>                                     ▼</div>
              <div>┌─────────────────────────────────────────────────────────────────────────┐</div>
              <div>│ TIER 6: CLASSROOM INSTRUCTIONAL FACULTY (Role: TEACHER • Level: 20)      │</div>
              <div>│ Scope: CLASS_SECTION • Student Attendance, Subject Marks Entry, Homework │</div>
              <div>└────────────────────────────────────┬────────────────────────────────────┘</div>
              <div>                                     ▼</div>
              <div>┌─────────────────────────────────────────────────────────────────────────┐</div>
              <div>│ TIER 7: PRIMARY CONSTITUENTS (Roles: STUDENT, PARENT • Level: 10)       │</div>
              <div>│ Scope: SELF / CHILD • Verified Wards, Published Results, Circulars      │</div>
              <div>└─────────────────────────────────────────────────────────────────────────┘</div>
            </div>
          </section>

          <section id="decoupled-identity" className="space-y-6 scroll-mt-24">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#006AC7]">Architecture &amp; Hierarchy</span>
              <h2 className="text-2xl font-bold text-[#102033] flex items-center gap-2">
                <KeyRound className="w-6 h-6 text-[#006AC7]" />
                2.2 Decoupled Identity Model: Designation ≠ Role ≠ Scope ≠ Authority
              </h2>
            </div>

            <p className="text-sm text-[#526477] leading-relaxed">
              In government administration, officials frequently possess prestigious job titles (designations) that do not map directly to technical software capabilities. The system enforces a strict 4-way decoupling:
            </p>

            <div className="p-4 rounded-xl bg-slate-900 text-white font-mono text-xs space-y-2 border border-slate-800">
              <div className="text-amber-400 font-bold">// THE CONSTITUTIONAL IDENTITY AXIOM</div>
              <div className="text-slate-300">
                CIVIL DESIGNATION (&quot;DDO Education&quot;) ≠ RBAC ROLE (SUPER_ADMIN) ≠ SCOPE (TOWN) ≠ RUNTIME AUTHORITY (TRANSFER_APPROVE)
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                <div className="font-bold text-[#102033]">Civil Designation (Descriptive Metadata)</div>
                <p className="text-[#526477]">
                  Represents the official government post (e.g. <em>Senior Head Master, Drawing &amp; Disbursing Officer</em>). Possesses <strong>zero cryptographic authority</strong> in backend middleware.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                <div className="font-bold text-[#102033]">RBAC Role &amp; Level (Functional Power)</div>
                <p className="text-[#526477]">
                  Determines technical capabilities and subordination level. Prevents actors from promoting anyone to an equal or higher level.
                </p>
              </div>
            </div>
          </section>

          <section id="tech-topology" className="space-y-6 scroll-mt-24">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#006AC7]">Architecture &amp; Hierarchy</span>
              <h2 className="text-2xl font-bold text-[#102033] flex items-center gap-2">
                <Cpu className="w-6 h-6 text-[#006AC7]" />
                2.3 Dual-App System Topology &amp; End-to-End Pipeline
              </h2>
            </div>

            {/* ASCII Architecture Flow Box */}
            <div className="bg-slate-950 font-mono text-cyan-400 p-5 rounded-2xl border border-slate-800 shadow-xl overflow-x-auto text-xs leading-relaxed">
              <div className="text-slate-400 mb-2">// DUAL-APP ECOSYSTEM &amp; BACKEND-FOR-FRONTEND (BFF) TOPOLOGY</div>
              <div>┌──────────────────────────────┐        ┌──────────────────────────────┐</div>
              <div>│   PUBLIC CIVIC PORTAL        │        │   AUTHENTICATED WORKSPACE    │</div>
              <div>│   Next.js 15.1.7 (React 19)  │        │   React 18.3.1 (Vite 6.1.0)  │</div>
              <div>│   Free E-Books, Civic SEO    │        │   8 Dashboards, PWA App-Shell│</div>
              <div>└──────────────┬───────────────┘        └──────────────┬───────────────┘</div>
              <div>               │                                       │</div>
              <div>               │ REST Requests                         │ REST + HttpOnly Cookie</div>
              <div>               └───────────────────┬───────────────────┘</div>
              <div>                                   ▼</div>
              <div>┌─────────────────────────────────────────────────────────────────────────┐</div>
              <div>│ CORE BACKEND-FOR-FRONTEND (BFF) &amp; REST API LAYER (server/)              │</div>
              <div>│ Node.js 20+ (Pure ES Modules) • Express 4.21.2                          │</div>
              <div>│ • Reverse Proxy Trust (trust proxy = 1) • Helmet CSP &amp; HSTS             │</div>
              <div>│ • Deep Sanitize Pipeline • NoSQL Mongo Sanitizer • HPP Parameter Guard   │</div>
              <div>│ • Triple-Lock Rate Limiter (IP + Account + Composite Fingerprint)       │</div>
              <div>│ • Argon2id Native Hashing + Server Pepper • Dual-Token RTR Engine        │</div>
              <div>└───────────────────────────────────┬─────────────────────────────────────┘</div>
              <div>                                   │</div>
              <div>                 ┌─────────────────┴─────────────────┐</div>
              <div>                 ▼                                   ▼</div>
              <div>┌─────────────────────────────────┐ ┌─────────────────────────────────┐</div>
              <div>│ MongoDB Atlas 7.0 Cluster        │ │ External Integrated Services     │</div>
              <div>│ 30 Mongoose Models, Zero Deletes │ │ • Cloudinary (Encrypted Media)   │</div>
              <div>│ Compound Partial Unique Indexes │ │ • Nodemailer (Municipal SMTP)    │</div>
              <div>│ Immutable Append-Only Audit Vault│ │ • PDFKit (Vector Board Sheets)   │</div>
              <div>└─────────────────────────────────┘ └─────────────────────────────────┘</div>
            </div>
          </section>

          {/* ─────────────────────────────────────────────────────────────
              SECTION 3: IDENTITY & GOVERNANCE
          ───────────────────────────────────────────────────────────── */}
          <section id="roles-catalogue" className="space-y-6 scroll-mt-24">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#006AC7]">Identity &amp; Governance</span>
              <h2 className="text-2xl font-bold text-[#102033] flex items-center gap-2">
                <Users className="w-6 h-6 text-[#006AC7]" />
                3.1 The 8 Authoritative Roles Catalogue
              </h2>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-xs bg-white">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 font-bold text-[#102033]">
                  <tr>
                    <th className="p-3">ROLE</th>
                    <th className="p-3">LEVEL</th>
                    <th className="p-3">DEFAULT SCOPE</th>
                    <th className="p-3">PRIMARY RESPONSIBILITY</th>
                    <th className="p-3">CRITICAL BOUNDARY</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-[#526477]">
                  <tr>
                    <td className="p-3 font-mono font-bold text-[#006AC7]">ROOT_ADMIN</td>
                    <td className="p-3 font-mono">100</td>
                    <td className="p-3 font-mono">GLOBAL</td>
                    <td className="p-3 text-[#102033]">Supreme Technical Architect</td>
                    <td className="p-3 text-red-600">Zero self-demotion via web API</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-bold text-[#006AC7]">SUPER_ADMIN</td>
                    <td className="p-3 font-mono">80</td>
                    <td className="p-3 font-mono">TOWN</td>
                    <td className="p-3 text-[#102033]">Town Directorate / DDO</td>
                    <td className="p-3">Cannot modify another Super Admin</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-bold text-[#006AC7]">ADMIN</td>
                    <td className="p-3 font-mono">60</td>
                    <td className="p-3 font-mono">TOWN</td>
                    <td className="p-3 text-[#102033]">Town Operations Officer</td>
                    <td className="p-3">Cannot grant Level 60+ permissions</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-bold text-[#006AC7]">SUPERVISOR</td>
                    <td className="p-3 font-mono">50</td>
                    <td className="p-3 font-mono">ASSIGNED_SCHOOLS</td>
                    <td className="p-3 text-[#102033]">Cluster Field Inspector</td>
                    <td className="p-3">Quarantined to assigned schools array</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-bold text-[#006AC7]">HM</td>
                    <td className="p-3 font-mono">40</td>
                    <td className="p-3 font-mono">SCHOOL</td>
                    <td className="p-3 text-[#102033]">Head Master (School Head)</td>
                    <td className="p-3">Locked to own school ID exclusively</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-bold text-[#006AC7]">TEACHER</td>
                    <td className="p-3 font-mono">20</td>
                    <td className="p-3 font-mono">CLASS_SECTION</td>
                    <td className="p-3 text-[#102033]">Classroom Faculty</td>
                    <td className="p-3">Only assigned subjects &amp; sections</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-bold text-[#006AC7]">STUDENT</td>
                    <td className="p-3 font-mono">10</td>
                    <td className="p-3 font-mono">SELF</td>
                    <td className="p-3 text-[#102033]">Enrolled Pupil</td>
                    <td className="p-3 text-red-600">Blocked from cohort tabulation gazettes</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-bold text-[#006AC7]">PARENT</td>
                    <td className="p-3 font-mono">10</td>
                    <td className="p-3 font-mono">CHILD</td>
                    <td className="p-3 text-[#102033]">Verified Child Guardian</td>
                    <td className="p-3 text-red-600">Requires VERIFIED ParentStudentLink</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ─────────────────────────────────────────────────────────────
              SECTION 4: DEFENSE-IN-DEPTH SECURITY
          ───────────────────────────────────────────────────────────── */}
          <section id="security-scorecard" className="space-y-6 scroll-mt-24">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#006AC7]">Defense-in-Depth Security</span>
              <h2 className="text-2xl font-bold text-[#102033] flex items-center gap-2">
                <Shield className="w-6 h-6 text-[#006AC7]" />
                4.1 55-Control ASVS 5.0 Security Scorecard (96.4% Compliance)
              </h2>
            </div>

            <p className="text-sm text-[#526477] leading-relaxed">
              Every critical security boundary is verified through direct execution path tracing against OWASP ASVS 5.0 Level 2/3 criteria:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 text-xs">
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
                <div className="font-bold text-[#102033]">Root Governance</div>
                <div className="text-base font-extrabold text-[#006AC7]">87.5% PASS</div>
                <div className="text-slate-400">3 Pass / 1 Partial</div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
                <div className="font-bold text-[#102033]">Administrative Hierarchy</div>
                <div className="text-base font-extrabold text-[#4B7F3A]">100% PASS</div>
                <div className="text-slate-400">5 Pass / 0 Fail</div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
                <div className="font-bold text-[#102033]">Parameter Guards &amp; HPP</div>
                <div className="text-base font-extrabold text-[#4B7F3A]">100% PASS</div>
                <div className="text-slate-400">4 Pass / 0 Fail</div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
                <div className="font-bold text-[#102033]">JWT &amp; Multi-Device RTR</div>
                <div className="text-base font-extrabold text-[#006AC7]">91.7% PASS</div>
                <div className="text-slate-400">5 Pass / 1 Partial</div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
                <div className="font-bold text-[#102033]">Argon2id + Pepper</div>
                <div className="text-base font-extrabold text-[#006AC7]">91.7% PASS</div>
                <div className="text-slate-400">5 Pass / 1 Partial</div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
                <div className="font-bold text-[#102033]">Role &amp; Jurisdiction Scoping</div>
                <div className="text-base font-extrabold text-[#4B7F3A]">100% PASS</div>
                <div className="text-slate-400">8 Pass / 0 Fail</div>
              </div>
            </div>
          </section>

          <section id="security-invariants" className="space-y-6 scroll-mt-24">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#006AC7]">Defense-in-Depth Security</span>
              <h2 className="text-2xl font-bold text-[#102033] flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                4.2 Non-Negotiable Security Invariants
              </h2>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-4 rounded-xl bg-slate-950 text-emerald-400 border border-slate-800 space-y-1">
                <div className="text-amber-400 font-bold">// INVARIANT 1: PARENT WARD ACCESS</div>
                <div>Authenticated Parent ──► VERIFIED ParentStudentLink ──► exact studentProfileId ──► 200 OK</div>
                <div className="text-red-400">// ANY OTHER STATE ──► 403 Forbidden + PARENT_CROSS_WARD_ACCESS_BLOCKED</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 text-emerald-400 border border-slate-800 space-y-1">
                <div className="text-amber-400 font-bold">// INVARIANT 2: STUDENT MARKSHEET ACCESS</div>
                <div>Authenticated Student ──► _id === studentId ──► status === &apos;PUBLISHED&apos; ──► 200 OK</div>
                <div className="text-red-400">// DRAFT, SUBMITTED, or VERIFIED_BY_HM ──► 403 Forbidden</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 text-emerald-400 border border-slate-800 space-y-1">
                <div className="text-amber-400 font-bold">// INVARIANT 3: COHORT GAZETTE TABULATION SHIELD</div>
                <div>GET /tabulation-sheet ──► Role NOT IN [&apos;STUDENT&apos;, &apos;PARENT&apos;] ──► 200 OK</div>
                <div className="text-red-400">// STUDENT or PARENT ──► 403 Forbidden + COHORT_RESULTS_ACCESS_BLOCKED</div>
              </div>
            </div>
          </section>

          {/* ─────────────────────────────────────────────────────────────
              SECTION 5: OPERATIONAL ENGINES
          ───────────────────────────────────────────────────────────── */}
          <section id="atomic-transfers" className="space-y-6 scroll-mt-24">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#006AC7]">Operational Modules</span>
              <h2 className="text-2xl font-bold text-[#102033] flex items-center gap-2">
                <ArrowRightLeft className="w-6 h-6 text-[#006AC7]" />
                5.1 The 5-Stage Atomic Teacher Transfer Engine
              </h2>
            </div>

            <p className="text-sm text-[#526477] leading-relaxed">
              Teacher reassignments across municipal schools are executed through an atomic state machine, preventing ghost transfers and orphan classrooms:
            </p>

            <div className="bg-slate-950 font-mono text-amber-400 p-5 rounded-2xl border border-slate-800 shadow-xl overflow-x-auto text-xs leading-relaxed">
              <div className="text-slate-400 mb-2">// 5-STAGE ATOMIC TRANSFER WORKFLOW</div>
              <div>[1. INITIATED] ──► Supervisor / DDO issues formal Transfer Order with Official Order No.</div>
              <div>      │</div>
              <div>      ▼</div>
              <div>[2. RELIEVED]  ──► Source HM certifies clearance, relieves duties, frees teaching assignments.</div>
              <div>      │</div>
              <div>      ▼</div>
              <div>[3. AWAITING_JOINING] ──► Faculty in transit to destination school.</div>
              <div>      │</div>
              <div>      ├────────────────────────────────────────┐</div>
              <div>      │ Destination HM Confirms Arrival        │ Destination HM Rejects (With Reason)</div>
              <div>      ▼                                        ▼</div>
              <div>[4. COMPLETED]                            [5. REJECTED_BY_HM]</div>
              <div>    School ID updated on User &amp; Profile        │</div>
              <div>    New teaching assignments unlocked          ├──────────────────┐</div>
              <div>                                               ▼                  ▼</div>
              <div>                                        [ADMIN_CANCELLED]   [ADMIN_REAPPROVED]</div>
            </div>
          </section>

          <section id="examination-engine" className="space-y-6 scroll-mt-24">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#006AC7]">Operational Modules</span>
              <h2 className="text-2xl font-bold text-[#102033] flex items-center gap-2">
                <Award className="w-6 h-6 text-[#006AC7]" />
                5.2 Elementary Board Examination &amp; Tabulation Engine (700 Aggregate)
              </h2>
            </div>

            <p className="text-sm text-[#526477] leading-relaxed">
              Implements the authoritative examination formulas of the <strong>DMC Liaquatabad Elementary Board (Grades IV to VIII)</strong>:
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-xs bg-white">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 font-bold text-[#102033]">
                  <tr>
                    <th className="p-3">SUBJECT</th>
                    <th className="p-3">WRITTEN MAX</th>
                    <th className="p-3">NAZRA MAX</th>
                    <th className="p-3">TOTAL MARKS</th>
                    <th className="p-3">SPECIAL EVALUATION RULE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-[#526477]">
                  <tr>
                    <td className="p-3 font-bold text-[#102033]">Islamiat / Ethics</td>
                    <td className="p-3 font-mono">80</td>
                    <td className="p-3 font-mono text-[#006AC7] font-bold">20</td>
                    <td className="p-3 font-mono font-bold">100</td>
                    <td className="p-3">Compulsory oral Nazra Quran recitation split</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#102033]">English</td>
                    <td className="p-3 font-mono">100</td>
                    <td className="p-3 font-mono">-</td>
                    <td className="p-3 font-mono font-bold">100</td>
                    <td className="p-3">Standard written examination</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#102033]">Mathematics</td>
                    <td className="p-3 font-mono">100</td>
                    <td className="p-3 font-mono">-</td>
                    <td className="p-3 font-mono font-bold">100</td>
                    <td className="p-3">Standard written examination</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#102033]">General Science</td>
                    <td className="p-3 font-mono">100</td>
                    <td className="p-3 font-mono">-</td>
                    <td className="p-3 font-mono font-bold">100</td>
                    <td className="p-3">Standard written examination</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#102033]">Social Studies (S.St)</td>
                    <td className="p-3 font-mono">100</td>
                    <td className="p-3 font-mono">-</td>
                    <td className="p-3 font-mono font-bold">100</td>
                    <td className="p-3">Standard written examination</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#102033]">Sindhi</td>
                    <td className="p-3 font-mono">100</td>
                    <td className="p-3 font-mono">-</td>
                    <td className="p-3 font-mono font-bold">100</td>
                    <td className="p-3">Provincial language curriculum</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#102033]">Urdu</td>
                    <td className="p-3 font-mono">100</td>
                    <td className="p-3 font-mono">-</td>
                    <td className="p-3 font-mono font-bold">100</td>
                    <td className="p-3">National language curriculum</td>
                  </tr>
                  <tr className="bg-amber-50/50">
                    <td className="p-3 font-bold text-amber-900">Drawing (Art)</td>
                    <td className="p-3 font-mono">-</td>
                    <td className="p-3 font-mono">-</td>
                    <td className="p-3 font-mono font-bold text-amber-800">Grade Only</td>
                    <td className="p-3 font-bold text-amber-900">EXCLUDED FROM 700 TOTAL AGGREGATE (A, B, C, D)</td>
                  </tr>
                  <tr className="bg-slate-100 font-bold text-[#102033]">
                    <td className="p-3">TOTAL MAXIMUM MARKS</td>
                    <td colSpan={2} className="p-3 text-right">MAX NUMERIC AGGREGATE:</td>
                    <td className="p-3 font-mono text-[#006AC7] text-sm">700 MARKS</td>
                    <td className="p-3">Min Passing: 33% in each subject &amp; overall</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="parent-portal" className="space-y-6 scroll-mt-24">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#006AC7]">Operational Modules</span>
              <h2 className="text-2xl font-bold text-[#102033] flex items-center gap-2">
                <Users className="w-6 h-6 text-[#006AC7]" />
                5.3 Parent Portal: 3-Step Ward Verification Wizard
              </h2>
            </div>

            <p className="text-sm text-[#526477] leading-relaxed">
              Parents cannot view any pupil’s academic or attendance data merely by knowing their Student ID. Access requires passing the <strong>3-Step Cryptographic Verification Wizard</strong>:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                <div className="w-7 h-7 rounded-lg bg-blue-100 text-[#006AC7] font-bold flex items-center justify-center">1</div>
                <div className="font-bold text-[#102033]">Anti-Enumeration Lookup</div>
                <p className="text-[#526477]">
                  Parent supplies School, Class, and GR Number. API returns masked particulars (<code>M**** A***</code>) with zero PII leaks.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 font-bold flex items-center justify-center">2</div>
                <div className="font-bold text-[#102033]">Official Guardian OTP</div>
                <p className="text-[#526477]">
                  6-digit cryptographic OTP dispatched to official guardian mobile on school record. 3 failed attempts locks claim.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-[#4B7F3A] font-bold flex items-center justify-center">3</div>
                <div className="font-bold text-[#102033]">HM Verification Queue</div>
                <p className="text-[#526477]">
                  Head Master physically verifies CNIC and relationship papers, clicking Approve to transition link to <code>VERIFIED</code>.
                </p>
              </div>
            </div>
          </section>

          {/* ─────────────────────────────────────────────────────────────
              SECTION 6: AUDIT & DATA ARCHITECTURE
          ───────────────────────────────────────────────────────────── */}
          <section id="database-models" className="space-y-6 scroll-mt-24">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#006AC7]">Audit &amp; Data Architecture</span>
              <h2 className="text-2xl font-bold text-[#102033] flex items-center gap-2">
                <Database className="w-6 h-6 text-[#006AC7]" />
                6.1 Complete 30 Mongoose Models Catalogue
              </h2>
            </div>

            <p className="text-sm text-[#526477] leading-relaxed">
              Audited directly from <code>server/src/models/</code>. All collections adhere to the zero-hard-deletion policy:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 font-mono text-xs">
              {[
                'Announcement', 'Attendance', 'AttendanceSummary', 'AuditLog',
                'CaptchaNonce', 'Class', 'Document', 'Exam',
                'HolidayCalendar', 'Homework', 'Notification', 'NotificationOutbox',
                'Organization', 'OtpVerification', 'ParentStudentLink', 'ProfileAccessRequest',
                'Result', 'School', 'SchoolInspection', 'Section',
                'SecurityLockout', 'StudentProfile', 'Subject', 'SystemControl',
                'TeacherProfile', 'TeachingAssignment', 'Town', 'TransferRequest',
                'User', 'WeeklyOffPattern'
              ].map((modelName, index) => (
                <div key={modelName} className="p-2.5 rounded-lg bg-white border border-slate-200/80 flex items-center justify-between shadow-2xs">
                  <span className="text-[#102033] font-semibold">{modelName}.js</span>
                  <span className="text-[10px] text-slate-400 font-bold">#{index + 1}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="test-verification" className="space-y-6 scroll-mt-24">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#006AC7]">Verification &amp; Deployment</span>
              <h2 className="text-2xl font-bold text-[#102033] flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-[#4B7F3A]" />
                6.2 Dynamic Test Verification Baseline (1,116 / 1,116 PASS)
              </h2>
            </div>

            <p className="text-sm text-[#526477] leading-relaxed">
              Every production release is verified by <code>node scripts/verifyTestBannerIntegrity.js</code> across all 40 test suites on disk:
            </p>

            <div className="bg-slate-950 font-mono text-emerald-400 p-5 rounded-2xl border border-slate-800 shadow-xl overflow-x-auto text-xs leading-relaxed max-h-80 overflow-y-auto">
              <div className="text-slate-400 mb-2">// DYNAMIC TEST SUITE VERIFICATION LOG (40 SUITES DISCOVERED)</div>
              <div>✓ tests/announcement_and_public_stats.test.js                  Banner: 32/32 (Pass lines: 32)</div>
              <div>✓ tests/argon2_migration_suite.test.js                         Banner: 53/53 (Pass lines: 53)</div>
              <div>✓ tests/attendance_analytics_suite.test.js                     Banner: 32/32 (Pass lines: 32)</div>
              <div>✓ tests/auth_hierarchy_suite.test.js                           Banner: 42/42 (Pass lines: 42)</div>
              <div>✓ tests/auth_suite.test.js                                     Banner: 35/35 (Pass lines: 35)</div>
              <div>✓ tests/authority_model_suite.test.js                          Banner: 43/43 (Pass lines: 43)</div>
              <div>✓ tests/authority_negative_security_suite.test.js              Banner: 37/37 (Pass lines: 37)</div>
              <div>✓ tests/authority_transition_matrix.test.js                    Banner: 45/45 (Pass lines: 45)</div>
              <div>✓ tests/hm_examination_and_results.test.js                     Banner: 23/23 (Pass lines: 23)</div>
              <div>✓ tests/hm_faculty_and_teacher_attendance.test.js              Banner: 14/14 (Pass lines: 14)</div>
              <div>✓ tests/hm_official_marksheet_and_tabulation.test.js           Banner: 14/14 (Pass lines: 14)</div>
              <div>✓ tests/hm_operational_authority_and_security.test.js          Banner: 30/30 (Pass lines: 30)</div>
              <div>✓ tests/hm_school_circulars_and_notices.test.js                Banner: 30/30 (Pass lines: 30)</div>
              <div>✓ tests/hm_student_directory_and_enrollment.test.js            Banner: 14/14 (Pass lines: 14)</div>
              <div>✓ tests/hm_transfer_lifecycle_and_security.test.js             Banner: 25/25 (Pass lines: 25)</div>
              <div>✓ tests/parent_adversarial_security.test.js                    Banner: 10/10 (Pass lines: 10)</div>
              <div>✓ tests/parent_bff_security.test.js                            Banner: 16/16 (Pass lines: 16)</div>
              <div>✓ tests/parent_registration_and_linking_flow.test.js           Banner: 16/16 (Pass lines: 16)</div>
              <div>✓ tests/parent_student_link_model.test.js                      Banner: 15/15 (Pass lines: 15)</div>
              <div>✓ tests/privacy_and_notifications.test.js                      Banner: 16/16 (Pass lines: 16)</div>
              <div>✓ tests/refresh_token_rotation_suite.test.js                   Banner: 46/46 (Pass lines: 46)</div>
              <div>✓ tests/root_admin_mfa_suite.test.js                           Banner: 61/61 (Pass lines: 61)</div>
              <div>✓ tests/root_admin_module_suite.test.js                        Banner: 16/16 (Pass lines: 16)</div>
              <div>✓ tests/root_admin_privacy_and_dashboard_authority.test.js     Banner:  9/9  (Pass lines: 9)</div>
              <div>✓ tests/school_inspection_suite.test.js                        Banner:  6/6  (Pass lines: 6)</div>
              <div>✓ tests/security_and_regression_verification.test.js           Banner: 25/25 (Pass lines: 25)</div>
              <div>✓ tests/security_remediation_wave1.test.js                     Banner: 49/49 (Pass lines: 49)</div>
              <div>✓ tests/security_remediation_wave2_core.test.js                Banner: 28/28 (Pass lines: 28)</div>
              <div>✓ tests/security_suite.test.js                                 Banner: 24/24 (Pass lines: 24)</div>
              <div>✓ tests/seed_data_validation.test.js                           Banner: 17/17 (Pass lines: 17)</div>
              <div>✓ tests/smart_attendance_system.test.js                        Banner: 22/22 (Pass lines: 22)</div>
              <div>✓ tests/staff_profile_and_approval_workflow.test.js            Banner: 33/33 (Pass lines: 33)</div>
              <div>✓ tests/staff_profile_controller_integration.test.js           Banner: 63/63 (Pass lines: 63)</div>
              <div>✓ tests/stealth_killswitch_suite.test.js                       Banner: 15/15 (Pass lines: 15)</div>
              <div>✓ tests/student_onboarding_flows.test.js                       Banner: 21/21 (Pass lines: 21)</div>
              <div>✓ tests/student_workspace_suite.test.js                        Banner: 25/25 (Pass lines: 25)</div>
              <div>✓ tests/supervisor_bola_security_remediation.test.js           Banner: 12/12 (Pass lines: 12)</div>
              <div>✓ tests/teacher_attendance_security.test.js                    Banner: 25/25 (Pass lines: 25)</div>
              <div>✓ tests/teacher_operational_workspace_suite.test.js            Banner: 29/29 (Pass lines: 29)</div>
              <div>✓ tests/town_holiday_and_timing_policy.test.js                 Banner: 48/48 (Pass lines: 48)</div>
              <div className="pt-2 text-cyan-400 font-bold">===========================================================================</div>
              <div className="text-white font-bold">TOTAL BANNER SUM: 1116 / 1116 | TOTAL PASS LINES: 1116 | RESULT: 100% PASS</div>
              <div className="text-cyan-400 font-bold">===========================================================================</div>
            </div>
          </section>

          {/* Footer Navigation Bar */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#526477]">
              Education Department, Liaquatabad Town Centre (DMC) • Sealed Master Documentation v1.0.0
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="px-4 py-2 rounded-xl text-xs font-semibold text-[#526477] hover:bg-slate-100 transition-colors"
              >
                Civic Home
              </Link>
              <a
                href={`${portalUrl}/login`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#006AC7] text-white hover:bg-[#005299] transition-colors"
              >
                Staff Portal
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
