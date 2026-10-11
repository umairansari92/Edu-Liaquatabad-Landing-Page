import React from 'react';
import {
  Layers,
  KeyRound,
  Cpu,
  ArrowRightLeft,
  Terminal,
  Shield,
  Building2,
  Users,
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

export const HierarchySection = () => (
  <div>
    <DocHeader
      title="The 5-Tier Organizational Hierarchy"
      badge="2. Technology & Architecture"
      subtitle="The authoritative entity structure of public schools, subordination ceilings, and data visibility quarantines across Liaquatabad Town."
    />

    <p className="text-xs text-[#526477] leading-relaxed mb-6">
      Institutional education is structured across a <strong>5-tier organizational entity hierarchy</strong>. Do NOT confuse this physical hierarchy with the <strong>7 data scopes</strong> (GLOBAL, TOWN, ASSIGNED_SCHOOLS, SCHOOL, CLASS_SECTION, SELF, CHILD) which govern multi-tenant query isolation:
    </p>

    <TerminalBlock title="5-TIER ORGANIZATIONAL ENTITY HIERARCHY">
{`┌─────────────────────────────────────────────────────────────────────────────┐
│ TIER 1: ORGANIZATION                                                        │
│ Entity: Organization (e.g., DMC Liaquatabad Town Centre)                    │
│ Level: Supreme municipal education governance & legal entity                │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ TIER 2: TOWN                                                                │
│ Entity: Town (e.g., Liaquatabad Town Centre, Karachi Central)               │
│ Level: Municipal geographic and administrative district boundary            │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ TIER 3: SCHOOL                                                              │
│ Entity: School (e.g., Government Boys Secondary School, SEMIS Code)         │
│ Level: Individual physical school building & institutional cost center       │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ TIER 4: CLASS                                                               │
│ Entity: Class (e.g., Grade 6, Grade 7, Grade 8 Elementary Board)            │
│ Level: Academic grade level within the school curriculum                    │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ TIER 5: SECTION                                                             │
│ Entity: Section (e.g., Section A, Section B, Section C)                     │
│ Level: Specific class cohort / classroom group                              │
└─────────────────────────────────────────────────────────────────────────────┘`}
    </TerminalBlock>

    <SectionTitle>Hierarchy Subordination Laws</SectionTitle>
    <Callout type="security" title="THE SUBORDINATION AXIOM (authorizeHierarchy.js)">
      Any administrative mutation route (create user, change status, assign role) strictly enforces:
      <br />
      <code>actor.roleLevel &gt; target.roleLevel</code>
      <br />
      Authority levels: ROOT_ADMIN (100) &gt; SUPER_ADMIN (90) &gt; ADMIN (80) &gt; SUPERVISOR (60) &gt; HM (50) &gt; TEACHER (30) &gt; PEON (20) &gt; STUDENT (10) | PARENT (10).
      <br />
    </Callout>
  </div>
);

export const DecoupledIdentitySection = () => (
  <div>
    <DocHeader
      title="Decoupled Identity Model: Designation ≠ Role ≠ Scope ≠ Authority"
      badge="2. Technology & Architecture"
      subtitle="Eliminating public sector privilege escalation by separating civil service titles from technical authorization."
    />

    <p className="text-xs text-[#526477] leading-relaxed mb-6">
      In public municipal administration, officials frequently rotate across titles like <em>&quot;Drawing &amp; Disbursing Officer (DDO)&quot;</em>, <em>&quot;Town Education Officer&quot;</em>, or <em>&quot;Senior Head Master&quot;</em>. Our architecture decouples identity into 4 independent vectors:
    </p>

    <TerminalBlock title="THE DECOUPLED IDENTITY AXIOM">
{`   ┌─────────────────────────────────────────────────────────────────────────────────────────┐
   │                           DECOUPLED IDENTITY AXIOM                                      │
   │                                                                                         │
   │   CIVIL DESIGNATION   ≠   RBAC ROLE   ≠   SYSTEM PERMISSION   ≠   GEOGRAPHIC SCOPE      │
   │   ("DDO Education")       (SUPER_ADMIN)   (TRANSFER_APPROVE)      (TOWN: Liaquatabad)   │
   └─────────────────────────────────────────────────────────────────────────────────────────┘`}
    </TerminalBlock>

    <ComparisonTable
      headers={['Identity Dimension', 'Technical Representation', 'Operational Purpose & Security Enforcement']}
      rows={[
        {
          left: 'Civil Designation',
          right:
            'Descriptive text field (e.g., "Drawing & Disbursing Officer (DDO)"). Displayed on official memos and certificates. Possesses 0 software permissions.',
        },
        {
          left: 'RBAC Role',
          right:
            'Cryptographic enum (SUPER_ADMIN, HM, TEACHER, etc.). Decides which controller methods and endpoints can be invoked.',
        },
        {
          left: 'Role Level',
          right:
            'Integer weight (10 to 100). Enforces the subordination ceiling in authorizeHierarchy.js so actors cannot modify equals or superiors.',
        },
        {
          left: 'Geographic Scope',
          right:
            'Boundary enum (GLOBAL, TOWN, ASSIGNED_SCHOOLS, SCHOOL, CLASS_SECTION, SELF, CHILD). Automatically appends schoolId or townId filters to database queries.',
        },
        {
          left: 'Granted Authority',
          right:
            'Runtime JWT claims verified per request. Revoked immediately on account suspension or role demotion.',
        },
      ]}
    />
  </div>
);

export const TechTopologySection = () => (
  <div>
    <DocHeader
      title="Dual-App Architecture: Why Next.js SSR + Vite React SPA?"
      badge="2. Technology & Architecture"
      subtitle="The engineering rationale for separating the public civic portal from the authenticated municipal workspace."
    />

    <p className="text-xs text-[#526477] leading-relaxed mb-6">
      Modern web applications often make the mistake of forcing an entire platform into a single monolithic framework. We intentionally segregated the frontend into two dedicated applications:
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-[#006AC7] font-bold text-sm">
          <Building2 className="w-5 h-5" />
          <span>Next.js 15 Civic Portal (landing-page/)</span>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          Dedicated strictly to public civic engagement: school directory, free textbook downloads, academic gazette announcements, and SEO documentation.
        </p>
        <ul className="text-xs text-[#526477] space-y-1 list-disc pl-4">
          <li>Server-Side Rendering (SSR) for instant first-contentful paint</li>
          <li>Schema.org GovernmentOrganization JSON-LD metadata</li>
          <li>OpenGraph cards for WhatsApp and social previews</li>
          <li>Edge-cached public PDF proxy for textbook CDN</li>
        </ul>
      </div>

      <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-[#4B7F3A] font-bold text-sm">
          <Cpu className="w-5 h-5" />
          <span>React 18 Vite Workspace (client/)</span>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          Dedicated to authenticated daily school operations: attendance marking, 700-mark exam tabulation, teacher rosters, and parent links.
        </p>
        <ul className="text-xs text-[#526477] space-y-1 list-disc pl-4">
          <li>Single-Page App (SPA) for zero-latency in-app navigation</li>
          <li>Sub-second HMR and 28.98s clean Rollup compilation</li>
          <li>Redux Toolkit with concurrent token refresh mutex queue</li>
          <li>PWA Workbox offline caching for weak cellular areas</li>
        </ul>
      </div>
    </div>

    <SectionTitle>Topology Isolation Comparison</SectionTitle>
    <ComparisonTable
      headers={['Feature / Requirement', 'Civic Portal (landing-page)', 'Workspace SPA (client)']}
      rows={[
        { left: 'Primary Goal', right: 'Public trust, discoverability, and civic education access.' },
        { left: 'Rendering Paradigm', right: 'Server-Side Rendered (Next.js App Router).' },
        { left: 'State Management', right: 'Lightweight React local state + URL hash routing.' },
        { left: 'Security Stance', right: 'Read-only public data; no sensitive cookies required.' },
      ]}
    />
  </div>
);

export const BffFlowSection = () => (
  <div>
    <DocHeader
      title="Backend-for-Frontend (BFF) Pattern & End-to-End Data Flow"
      badge="2. Technology & Architecture"
      subtitle="How requests traverse the edge proxy, triple-lock rate limiters, token validation, scope guards, and MongoDB."
    />

    <TerminalBlock title="BOX-DRAWING END-TO-END DATA FLOW PIPELINE">
{`┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. CLIENT BROWSER / MOBILE DEVICE                                           │
│ User triggers action (e.g. submit attendance, claim ward, approve transfer) │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │ HTTPS / TLS 1.3
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ 2. VERCEL REVERSE PROXY / NGINX GATEWAY                                     │
│ • SSL Termination & HSTS Enforcement                                        │
│ • Trust Proxy (1-Hop Header Extraction: X-Forwarded-For)                    │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │ Cleaned Request Envelope
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ 3. EXPRESS API MIDDLEWARE PIPELINE (server/)                                │
│ ├── Helmet (HSTS, CSP, X-Frame-Options: DENY)                               │
│ ├── Express-Mongo-Sanitize & XSS Clean                                      │
│ ├── Triple-Lock Rate Limiter (Global IP + Actor ID + Fingerprint)           │
│ ├── Cookie Parser (HTTPOnly, SameSite=Strict Refresh Cookie)                │
│ └── authenticate.js (JWT Access Token Verification via RS256/HS256)         │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │ Authenticated Actor Attached to req
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ 4. AUTHORIZATION CEILINGS & SCOPE ENGINE                                    │
│ ├── authorizeRoles.js (Assert Role in Allowed Set)                          │
│ ├── authorizeHierarchy.js (Assert actorRoleLevel > targetRoleLevel)         │
│ └── attachScope.js (Inject schoolId / assignedSchools MongoDB Filter)       │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │ Scoped, Validated Controller Call
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ 5. CONTROLLER & BUSINESS LOGIC ENGINES                                      │
│ ├── 5-Stage Atomic Transfer State Machine                                   │
│ ├── 700-Mark Elementary Board Tabulator & Nazra Split                       │
│ └── Zero-Trust Parent Ward Verification Engine                              │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │ Mongoose Model Write
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ 6. MONGOOSE SCHEMA HOOKS & AUDIT VAULT                                      │
│ ├── Pre-save Hooks (Argon2id Hash, Partial Unique Index Assertions)         │
│ ├── AuditLog.create() (Actor ID, IP, Before/After Snapshot Diffs)           │
│ └── MongoDB Atlas 7.0 (W: majority, J: true replication)                    │
└─────────────────────────────────────────────────────────────────────────────┘`}
    </TerminalBlock>
  </div>
);

export const ProjectStructureSection = () => (
  <div>
    <DocHeader
      title="Multi-Repo Directory Layout & Version-Control Topology"
      badge="2. Technology & Architecture"
      subtitle="Physical directory organization across the backend, frontend workspace, landing page, and documentation."
    />

    <TerminalBlock title="DIRECTORY TREE SPECIFICATION">
{`school-management-system/
├── server/                        # Git Repo #1: Express 4.21.2 Backend BFF (Pure ESM)
│   ├── src/
│   │   ├── controllers/          # 26 Domain Controllers (Attendance, Exam, Transfer, Export)
│   │   ├── middlewares/          # 21 Security Filters: authenticate, authorize, scope, rateLimit
│   │   ├── models/               # 32 Mongoose Schemas (User, Student, School, Audit, Outbox)
│   │   ├── routes/               # 27 Mounted Express Route Declarations (v1/index.js)
│   │   ├── services/             # 9 Domain Services (OTP, Timetable, Outbox, Cleanup)
│   │   └── validations/          # Zod Request Validation Schemas
│   └── tests/                    # 55 Production Test Suites (34 in npm test + 21 Adversarial)
│
├── client/                        # Git Repo #2: React 18.3.1 + Vite 6.1.0 Authenticated SPA
│   ├── src/
│   │   ├── components/           # Reusable UI Primitives (Design Constitution v2.0)
│   │   ├── pages/                # 14 Role-Quarantined Workspaces (Admin, HM, Parent, Student)
│   │   ├── services/             # Axios API Client + Token Refresh Mutex Queue
│   │   └── store/                # 10 Redux Toolkit Slices (auth, attendance, exam, etc.)
│   └── public/                   # PWA Manifest, Service Worker (Workbox), Logos
│
├── landing-page/                  # Git Repo #3: Next.js 15.1.7 Civic Public Portal (SSR)
│   ├── src/
│   │   ├── app/
│   │   │   ├── documentation/    # Comprehensive Engineering Documentation Portal (46 Sections)
│   │   │   ├── layout.jsx        # Civic Metadata, Favicons, JSON-LD Schema.org
│   │   │   └── page.jsx          # Public Civic Landing Page
│   │   └── components/           # CivicNavbar, CivicFooter, Textbook Downloader
│   └── public/                   # Free Sindh Textbooks Archive (PDFs)
│
└── docs/                          # Shared Technical Reference & Canonical Specifications
    ├── README.md                 # Master Navigation Index & Stakeholder Sitemap
    ├── PROJECT_OVERVIEW.md       # Municipal Charter & Civic Mission
    ├── DOCUMENTATION_STANDARDS.md# Evidence Labels & Maintenance Definition of Done
    ├── STATUS.md                 # Discrepancy Register (DISC-01 to DISC-09) & Gates
    ├── COVERAGE_MATRIX.md        # Source-to-Documentation Traceability Matrix
    ├── ARCHITECTURE.md           # 3-Tier Topology & Request Flow Lifecycle
    ├── RBAC.md                   # Definitive 9-Authority Hierarchy Matrix
    ├── HM_WORKFLOWS.md           # Operational Head Master Manual (7 Workflows)
    ├── DATABASE.md               # Complete 32-Model Schema Inventory & Indexes
    ├── API.md                    # 27 Mounted Routes & Streaming CSV Contracts
    ├── SECURITY.md               # Canonical Finding Register CF-01 to CF-10
    └── TESTING.md                # Complete 55-Test Suite Inventory & Commands`}
    </TerminalBlock>

    <Callout type="security" title="VERSION-CONTROL TOPOLOGY & REPOSITORY BOUNDARIES">
      The application codebase is structured across <strong>three independent Git repositories</strong> (<code>server/</code>, <code>client/</code>, <code>landing-page/</code>), each with its own remote origin and main branch. The root <code>docs/</code> directory serves as the cross-cutting specification vault and is maintained with absolute consistency across all application tiers.
    </Callout>
  </div>
);
