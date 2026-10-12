import React from 'react';
import {
  CheckCircle2,
  Building2,
  Activity,
  BookOpen,
  Shield,
  Clock,
  Terminal,
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

export const TestVerificationSection = () => (
  <div>
    <DocHeader
      title="55 Test Suites Automated Verification Reference"
      badge="8. Verification & Deployment"
      subtitle="Comprehensive automated test coverage baseline verifying all security boundaries, state machines, and mathematical engines."
    />

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
        <div className="text-3xl font-black text-[#4B7F3A]">55 / 55</div>
        <div className="text-xs font-bold text-[#102033]">SUITES ON DISK</div>
        <div className="text-[11px] text-[#526477]">34 Chained in npm test + 21 Adversarial</div>
      </div>
      <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-center">
        <div className="text-3xl font-black text-[#006AC7]">1,436</div>
        <div className="text-xs font-bold text-[#102033]">ASSERTIONS PASS</div>
        <div className="text-[11px] text-[#526477]">1,436 / 1,436 (100%) • 0 Failed Specs • 0 Flaky Tests</div>
      </div>
      <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 text-center">
        <div className="text-3xl font-black text-purple-700">100%</div>
        <div className="text-xs font-bold text-[#102033]">BANNER INTEGRITY</div>
        <div className="text-[11px] text-[#526477]">Verified by automated test suites</div>
      </div>
    </div>

    <SectionTitle>Dynamic Test Suite Architecture &amp; Execution Verification</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      Backend testing relies on dynamic execution rather than static lists. The automated test integrity runner (<code>server/scripts/verifyTestBannerIntegrity.js</code>) dynamically discovers all 55 <code>.test.js</code> files on disk in <code>server/tests/</code> and executes each file live via isolated child processes (<code>execSync(&apos;node &#36;&#123;file&#125;&apos;)</code>) with <code>NODE_ENV=test</code>. If any assertion fails or an unhandled exception occurs, the runner aborts with exit code 1. The 1,436 figure represents the arithmetic sum of passing assertions parsed directly from stdout closing banners across all 55 executing suites:
    </p>
    <TerminalBlock title="BACKEND TEST SUITE EXECUTION MODES">
{`# 1. Execute All 55 Discovered Test Suites via Dynamic Child-Process Runner (1,436 Assertions)
$ cd server && node scripts/verifyTestBannerIntegrity.js

# 2. Execute 34 Chained Core Integration Suites
$ cd server && npm test

# 3. Execute Phase 2 Red Team & Export Fail-Closed Adversarial Verification
$ cd server && node tests/phase2_red_team_verification.test.js

# 4. Execute Parent Portal Adversarial Security Suite
$ cd server && node tests/parent_adversarial_security.test.js

# 5. Execute Single-Cohort Teaching Assignment & Query Verification
$ cd server && node tests/optional_sections_and_teaching_assignment.test.js`}
    </TerminalBlock>
  </div>
);

export const DeploymentTopologySection = () => (
  <div>
    <DocHeader
      title="Multi-Zone Production Deployment Topology"
      badge="8. Verification & Deployment"
      subtitle="Edge proxying, TLS termination, reverse-proxy trust configuration, and secret management."
    />

    <TerminalBlock title="PRODUCTION NETWORK TOPOLOGY">
{`                        INTERNET TRAFFIC
                                │ (TLS 1.3 / HTTPS)
                                ▼
┌─────────────────────────────────────────────────────────────┐
│ VERCEL MULTI-ZONE EDGE NETWORK                              │
│ • liaquatabad-schools.gov.pk (landing-page / Next.js SSR)   │
│ • app.liaquatabad-schools.gov.pk (client / Vite React SPA)  │
└──────────────────────────────┬──────────────────────────────┘
                                │ X-Forwarded-For, X-Forwarded-Proto
                                ▼
┌─────────────────────────────────────────────────────────────┐
│ HARDENED REVERSE PROXY GATEWAY (NGINX / TRAEFIK)            │
│ app.set('trust proxy', 1); (Single-hop header trust)        │
└──────────────────────────────┬──────────────────────────────┘
                                │ Internal Secure VPC
                                ▼
┌─────────────────────────────────────────────────────────────┐
│ NODE.JS 20+ API CLUSTER (DOCKER / PM2)                     │
│ port: 5000 • Helmet • Argon2id Native Rust Engine          │
└──────────────────────────────┬──────────────────────────────┘
                                │ TLS Encrypted Connection
                                ▼
┌─────────────────────────────────────────────────────────────┐
│ MONGODB ATLAS 7.0 (M10+ REPLICA SET)                        │
│ W: majority, J: true, Automated Daily Snapshots             │
└─────────────────────────────────────────────────────────────┘`}
    </TerminalBlock>
  </div>
);

export const StatusRoadmapSection = () => (
  <div>
    <DocHeader
      title="Honest Platform Status, Gaps & Implementation Roadmap"
      badge="8. Verification & Deployment"
      subtitle="Transparent accounting of production-ready components versus outstanding operational pre-requisites."
    />

    <ComparisonTable
      headers={['Platform Dimension', 'Current Status', 'Operational Pre-requisite / Roadmap Action']}
      rows={[
        {
          left: 'Backend API & BFF',
          right: '100% PRODUCTION READY • 55 test suites on disk (34 chained in npm test), Triple-Lock active.',
        },
        {
          left: 'Head Master (HM) Workspace',
          right: 'IMPLEMENTED & TESTED • 173 automated tests pass across 10 files (180 with single-cohort). Owner Operational Approval PENDING.',
        },
        {
          left: 'Teacher Workspace',
          right: 'PLANNED / LOCKED • Strictly locked by explicit owner direction. Development frozen until HM sign-off.',
        },
        {
          left: 'Streaming CSV Data Exports',
          right: '100% VERIFIED • Fail-closed audit logging verified under adversarial test injection.',
        },
        {
          left: 'Civic Landing Portal',
          right: '100% PRODUCTION READY • Next.js 15 SSR, SEO Schema.org, free textbooks archive live.',
        },
        {
          left: 'Parent Portal Verification',
          right: '100% VERIFIED • GR Lookup + OTP challenge + HM document verification complete.',
        },
        {
          left: 'Parent Cellular SMS Gateway',
          right: 'PARTIAL / MOCKED • Nodemailer email OTP operational; telco cellular SMS gateway planned.',
        },
        {
          left: 'Cloudinary Production Vault',
          right: 'STAGING KEYS ACTIVE • Requires official municipal budget allocation for dedicated Enterprise bucket.',
        },
        {
          left: 'Production SMTP Gateway',
          right: 'STAGING ACTIVE • Requires Sindh Government official @liaquatabad-dmc.gov.pk mail server credentials.',
        },
      ]}
    />
  </div>
);

export const GlossarySection = () => (
  <div>
    <DocHeader
      title="Institutional & Technical Glossary"
      badge="8. Verification & Deployment"
      subtitle="Definitions of municipal government terminology, acronyms, and technical engineering jargon."
    />

    <ComparisonTable
      headers={['Term / Acronym', 'Full Institutional / Technical Definition']}
      rows={[
        { left: 'DMC', right: 'District Municipal Corporation • The local government body governing municipal affairs in Karachi.' },
        { left: 'DDO', right: 'Drawing and Disbursing Officer • Civil service authority authorized to sanction expenditures and staff payroll.' },
        { left: 'SEMIS', right: 'Sindh Education Management Information System • Official census code assigned to every public school.' },
        { left: 'GR Number', right: 'General Register Number • Permanent sequential admission ID assigned to a student upon enrollment.' },
        { left: 'HM', right: 'Head Master / Head Mistress • The executive head and administrative lead of an individual school building.' },
        { left: 'Nazra Quran', right: 'Oral Quran recitation test carrying 20 mandatory marks in the 100-mark Islamiat board subject.' },
        { left: 'PST / JEST', right: 'Primary School Teacher / Junior Elementary School Teacher • Official civil service teaching cadres in Sindh.' },
        { left: 'RTR', right: 'Refresh Token Rotation • Security mechanism issuing a new refresh token with every access token renewal.' },
        { left: 'BOLA', right: 'Broken Object-Level Authorization • Security vulnerability allowing unauthorized access to arbitrary records.' },
        { left: 'ASVS', right: 'Application Security Verification Standard • OWASP framework for enterprise software security.' },
        { left: 'Pure ESM', right: 'ECMAScript Modules • Modern JavaScript standard using import/export rather than CommonJS require().' },
      ]}
    />
  </div>
);

export const DiscrepancyRegisterSection = () => (
  <div>
    <DocHeader
      title="Discrepancy Register & Historical Resolution Audit (DISC-01 to DISC-10)"
      badge="8. Verification & Deployment"
      subtitle="Reconciling historical documentation claims against active source code, test execution, and Git history."
    />

    {/* 4-Metric HUD */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">AUDITED DISCREPANCIES</div>
        <div className="text-sm font-black text-[#006AC7]">10 Discrepancies</div>
        <div className="text-xs text-[#526477]">DISC-01 through DISC-10</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">CODE RECONCILIATION</div>
        <div className="text-sm font-black text-[#4B7F3A]">100% Code-Verified</div>
        <div className="text-xs text-[#526477]">0 Fabricated Claims</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">HM STATUS</div>
        <div className="text-sm font-black text-amber-600">Approval PENDING</div>
        <div className="text-xs text-[#526477]">Separate Owner Decision</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">TEACHER STATUS</div>
        <div className="text-sm font-black text-red-600">LOCKED / BLOCKED</div>
        <div className="text-xs text-[#526477]">Explicit Owner Direction</div>
      </div>
    </div>

    <p className="text-xs text-[#526477] leading-relaxed mb-6">
      Phase A audit identified 10 discrepancies between historical text documentation and current code truth. Below is the authoritative resolution of each discrepancy substantiated by direct code, tests, and Git commits:
    </p>

    <ComparisonTable
      headers={['Discrepancy ID', 'Historical Claim vs Code Reality', 'Canonical Resolution & Code Evidence']}
      rows={[
        {
          left: 'DISC-01: Teacher Workspace Status',
          right: 'Historical: "100% completed & sealed" • Reality: Explicit owner direction locks the Teacher workspace • Resolution: Status is strictly PLANNED / LOCKED. Zero live teacher routes.',
        },
        {
          left: 'DISC-02: HM Module Operational Sign-Off',
          right: 'Historical: "Approved and operational" • Reality: 173 automated assertions pass across all 10 HM test files on disk (180 including optional sections); dynamic audit confirms 1,436/1,436 total assertions pass platform-wide, but owner operational sign-off remains pending • Resolution: Marked as IMPLEMENTED & TESTED (Owner Approval PENDING).',
        },
        {
          left: 'DISC-03: Role Levels & Permission Scopes',
          right: 'Historical: Flat numeric levels without scopes • Reality: server/src/constants.js binds PEON=20, STUDENT/PARENT=10 with data scopes • Resolution: Reconciled 9-role matrix with jurisdictional boundaries.',
        },
        {
          left: 'DISC-04: Outbox Error Variable Fix',
          right: 'Historical: Report claimed outbox fix verified in commit 9b55bd0 • Reality: Commit 9b55bd0 in server/ git history confirms fix (notificationDispatchError.message) • Resolution: VERIFIED & COMMITTED.',
        },
        {
          left: 'DISC-05: Security Finding IDs Reconciliation',
          right: 'Historical: Conflicting finding IDs across reports • Reality: Reconciled into Canonical Finding Register CF-01 to CF-10 in docs/SECURITY.md • Resolution: VERIFIED CANONICAL REGISTER.',
        },
        {
          left: 'DISC-06: Single-Cohort Academic Reality',
          right: 'Historical: Assumed classes subdivided into sections • Reality: DMC Liaquatabad schools operate whole classes without sections • Resolution: TeachingAssignment.sectionId is nullable (null = Whole Class).',
        },
        {
          left: 'DISC-07: Inter-School Transfer Authority',
          right: 'Historical: Some drafts assumed HM can initiate inter-school transfers • Reality: Town Admin only initiates transfers; HM only relieves and joins • Resolution: VERIFIED TRANSFER BOUNDARY.',
        },
        {
          left: 'DISC-08: Parent Cellular SMS Delivery',
          right: 'Historical: Described SMS as live • Reality: otpService.js uses Nodemailer for email OTP; telco SMS gateway is mocked • Resolution: Marked as PARTIAL / MOCKED (Email live, SMS planned).',
        },
        {
          left: 'DISC-09: Version-Control Repository Ownership',
          right: 'Historical: Single repo assumed • Reality: 3 independent Git repos (server, client, landing-page); root docs/ unversioned • Resolution: Multi-repo topology documented with migration options.',
        },
        {
          left: 'DISC-10: The 26 vs 27 Router Architecture Reconciliation',
          right: 'Historical: Inconsistent text claiming 26 mounted route groups vs 27 router files • Reality: Exactly 27 router files on disk in server/src/routes/; 26 mounted in server/src/routes/v1/index.js; the 27th router (mfaRoutes.js) is nested inside authRoutes.js at line 70, plus ratTrapBaitRouter at root • Resolution: Fully verified and documented in MASTER_SYSTEM_ARCHITECTURE_AND_VERIFICATION_BASELINE.md.',
        },
      ]}
    />
  </div>
);

