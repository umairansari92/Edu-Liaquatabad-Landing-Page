import React from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Sparkles,
  Shield,
  Users,
  Building2,
  FileText,
  Activity,
  Award,
} from 'lucide-react';
import {
  DocHeader,
  SectionTitle,
  InfoCard,
  ComparisonTable,
  TerminalBlock,
  Callout,
  Steps,
} from '../components/DocPrimitives';

export const ProblemStatementSection = () => (
  <div>
    <DocHeader
      title="The Real-World Municipal Problem in Public School Education"
      badge="1. System Foundations"
      subtitle="The specific institutional failures, manual corruption vectors, and administrative gaps across Liaquatabad Town that necessitated this platform."
    />

    <p className="text-xs text-[#526477] leading-relaxed mb-6">
      Before this platform, public municipal schools across <strong>Liaquatabad Town Centre (DMC)</strong> operated on paper ledgers and disconnected registers. This manual paradigm suffered from acute, systemic vulnerabilities:
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      <InfoCard
        icon={<AlertCircle className="w-5 h-5" />}
        color="red"
        title="Ghost Staff & Proxy Teachers"
        desc="Physical muster rolls allowed staff absenteeism and unverified proxy teaching. Government biometric systems were standalone and did not link daily attendance to classroom teaching or supervisor audits."
      />
      <InfoCard
        icon={<AlertCircle className="w-5 h-5" />}
        color="amber"
        title="Untracked Staff Transfers"
        desc="Transfers initiated by municipal orders frequently resulted in lost physical relieving chits, allowing teachers to draw salaries without joining destination schools, leaving classrooms vacant for months."
      />
      <InfoCard
        icon={<AlertCircle className="w-5 h-5" />}
        color="purple"
        title="Examination Calculation Errors"
        desc="Tabulation sheets for Sindh Elementary Board examinations (Grades 4–8) were manually compiled. Arbitrary rounding, incorrect Nazra Quran splits, and illegal inclusion of Drawing marks distorted student merits."
      />
      <InfoCard
        icon={<AlertCircle className="w-5 h-5" />}
        color="blue"
        title="Parent Information Blackout"
        desc="Working-class parents had zero access to daily attendance, official homework directives, or authentic report cards. Commercial school apps required high monthly fees that public schools cannot fund."
      />
    </div>

    <SectionTitle>Vulnerability to Software Privilege Escalation</SectionTitle>
    <Callout type="security" title="THE CIVIL SERVICE DESIGNATION TRAP">
      Legacy software systems conflated an official's job title (e.g. &quot;Drawing &amp; Disbursing Officer&quot; or &quot;Town Education Officer&quot;) with technical software roles. When an administrator updated their designation on their profile, it accidentally granted them root database permissions. Our architecture enforces complete decoupling: civil designation is pure descriptive metadata; cryptographic authorization is strictly governed by immutable backend roles and role levels.
    </Callout>

    <SectionTitle>The 5 Transformation Pillars</SectionTitle>
    <Steps
      items={[
        {
          step: '1',
          title: 'Decoupled Identity & Hierarchy Subordination',
          desc: 'Designation ≠ Role ≠ Scope. An actor can never promote, demote, or modify another account whose role level is greater than or equal to their own.',
        },
        {
          step: '2',
          title: 'Cryptographic 5-Stage Atomic Teacher Transfers',
          desc: 'Transfers require sequential state confirmations: INITIATED → HM_RELIEVED → AWAITING_JOINING → HM_JOINED → COMPLETED. Zero orphan classrooms.',
        },
        {
          step: '3',
          title: 'Sindh Elementary Board Mathematical Engine',
          desc: 'Strict 700-mark numeric aggregate, 20/80 Islamiat Nazra split, letter-grade Drawing exclusion, and deterministic class rank calculation.',
        },
        {
          step: '4',
          title: 'Zero-Trust Parent Ward Verification',
          desc: 'Anti-enumeration GR lookup, 6-digit phone OTP to school record mobile number, and physical Head Master CNIC verification before any data is revealed.',
        },
        {
          step: '5',
          title: '100% Immutable Append-Only Audit Vault',
          desc: 'Every state mutation captures actor ID, IP address, user agent, before-state snapshot, and after-state diff. Hard deletions are permanently prohibited.',
        },
      ]}
    />
  </div>
);

export const IsVsNotSection = () => (
  <div>
    <DocHeader
      title="What This Platform IS vs What This Platform IS NOT"
      badge="1. System Foundations"
      subtitle="Definitive boundary specification separating this municipal civic platform from generic commercial SaaS solutions."
    />

    <p className="text-xs text-[#526477] leading-relaxed mb-6">
      To avoid architectural confusion and scope creep, the engineering constitution clearly defines the institutional boundaries of this platform:
    </p>

    <ComparisonTable
      headers={['What This Platform IS', 'What This Platform IS NOT']}
      rows={[
        {
          left: '🏛️ Centralized Municipal Education Governance Portal for Liaquatabad Town public schools.',
          right: '❌ NOT a commercial multi-tenant SaaS selling software subscriptions to private academies.',
        },
        {
          left: '📋 Authoritative Civil Service Staff Deployment & Atomic Transfer State Machine.',
          right: '❌ NOT a generic HR job board, freelance marketplace, or payroll processing system.',
        },
        {
          left: '📐 Sindh Elementary Board Examination Tabulation Engine (700 marks, Nazra Quran split).',
          right: '❌ NOT an arbitrary GPA calculator or Cambridge/O-Level grading utility.',
        },
        {
          left: '🛡️ Zero-Trust Verified Parent Ward Conduit with 3-step biometric/OTP verification.',
          right: '❌ NOT an unauthenticated open-registration public chat forum or social network.',
        },
        {
          left: '📜 Immutable Administrative Audit Vault with deep before/after state diff snapshots.',
          right: '❌ NOT an ad-supported or commercial data-mining tracking platform.',
        },
        {
          left: '🔍 Role-Scoped Cluster Field Inspection Tool with biometric headcounts & school hygiene audits.',
          right: '❌ NOT an unverified document dump or unmoderated file repository.',
        },
      ]}
    />

    <SectionTitle>Key Architectural Invariants</SectionTitle>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs text-center space-y-1">
        <div className="text-2xl font-black text-[#006AC7]">0 PKRs</div>
        <div className="text-xs font-bold text-[#102033]">Zero Fee Processing</div>
        <div className="text-[11px] text-[#526477]">Public municipal schools charge no fees; no payment gateways exist.</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs text-center space-y-1">
        <div className="text-2xl font-black text-[#4B7F3A]">100% Free</div>
        <div className="text-xs font-bold text-[#102033]">Sindh Textbooks Archive</div>
        <div className="text-[11px] text-[#526477]">Class 1–10 textbooks available via direct public CDN download.</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs text-center space-y-1">
        <div className="text-2xl font-black text-purple-600">0 Deletes</div>
        <div className="text-xs font-bold text-[#102033]">Zero Hard Deletions</div>
        <div className="text-[11px] text-[#526477]">Government records are archived or deactivated, never hard-deleted.</div>
      </div>
    </div>
  </div>
);

export const QuickAccessSection = () => (
  <div>
    <DocHeader
      title="System at a Glance: The 4-Metric Municipal HUD"
      badge="1. System Foundations"
      subtitle="Current engineering benchmarks, verified automated test baselines, and security compliance scores."
    />

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200 text-[#102033] space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-extrabold text-[#006AC7] uppercase tracking-wider">PLATFORM RUNTIME</span>
          <Activity className="w-4 h-4 text-[#006AC7]" />
        </div>
        <div className="text-2xl font-black text-[#102033]">Pure ESM</div>
        <p className="text-[11px] text-[#526477] leading-relaxed">
          Node.js 20+ runtime with 100% ECMAScript Modules. Zero legacy CommonJS.
        </p>
      </div>

      <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 text-[#102033] space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-extrabold text-[#4B7F3A] uppercase tracking-wider">TEST SUITES</span>
          <CheckCircle2 className="w-4 h-4 text-[#4B7F3A]" />
        </div>
        <div className="text-2xl font-black text-[#102033]">1,116 PASS</div>
        <p className="text-[11px] text-[#526477] leading-relaxed">
          40 test suites on disk. 100% assertions passing with zero failed specs.
        </p>
      </div>

      <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-200 text-[#102033] space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-extrabold text-purple-700 uppercase tracking-wider">ASVS COMPLIANCE</span>
          <Shield className="w-4 h-4 text-purple-700" />
        </div>
        <div className="text-2xl font-black text-[#102033]">96.4% Score</div>
        <p className="text-[11px] text-[#526477] leading-relaxed">
          55 security controls evaluated against OWASP ASVS 5.0 (51 Pass, 4 Partial).
        </p>
      </div>

      <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 text-[#102033] space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-extrabold text-amber-700 uppercase tracking-wider">CLIENT BUILD</span>
          <Sparkles className="w-4 h-4 text-amber-700" />
        </div>
        <div className="text-2xl font-black text-[#102033]">Vite 6.1.0</div>
        <p className="text-[11px] text-[#526477] leading-relaxed">
          Clean production bundle in 28.98s. Zero syntax, lint, or type errors.
        </p>
      </div>
    </div>

    <SectionTitle>Dynamic Infrastructure Metrics</SectionTitle>
    <TerminalBlock title="PRODUCTION BENCHMARK SPECIFICATION">
{`┌──────────────────────────────────────┬──────────────────────────────────────┐
│ METRIC CRITERIA                      │ VERIFIED ARCHITECTURAL BENCHMARK     │
├──────────────────────────────────────┼──────────────────────────────────────┤
│ Express Backend Port                 │ :5000 (Hardened REST API + BFF)      │
│ Vite React SPA Port                  │ :5173 (Authenticated Workspace)     │
│ Next.js SSR Portal Port              │ :3000 (Public Civic Landing Page)    │
│ Mongoose Schemas Count               │ 30 Production Models in server/src/  │
│ Argon2id Memory Hardness             │ 19,456 KiB (~19 MB) RAM per Hash     │
│ Refresh Token Rotation Window        │ 3,000ms Grace Period for Concurrency │
│ Karachi Municipal Late Gate Cutoff   │ 08:15 AM PST (Asia/Karachi, UTC+5)   │
│ Friday Early Dismissal Cutoff        │ 12:00 PM PST (Jummah Prayers)        │
└──────────────────────────────────────┴──────────────────────────────────────┘`}
    </TerminalBlock>
  </div>
);
