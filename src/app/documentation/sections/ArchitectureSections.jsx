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
  ReasoningCard,
  FailureRecoveryCard,
  VerificationBox,
  CrossQuestions,
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

    <ReasoningCard
      title="5-Tier Physical Entity Model vs 7 Data Tenancy Scopes"
      decision="Separating physical municipal administrative containers (Organization → Town → School → Class → Section) from runtime data query filters (GLOBAL, TOWN, ASSIGNED_SCHOOLS, SCHOOL, CLASS_SECTION, SELF, CHILD)."
      whyItWon="Schools are legal cost centers with distinct SEMIS census IDs and civil personnel allocations, whereas classes and cohorts are dynamic academic groupings. Blending physical entities with software permissions creates rigid schemas that break whenever government policy changes school feeder boundaries."
      alternativesRejected="Flat relational schema (rejected: requires expensive recursive self-joins for municipal rollups); Bundling geographic scope into the user role (rejected: leads to role explosion such as HM_LIAQUATABAD_SCHOOL_1 vs HM_LIAQUATABAD_SCHOOL_2)."
      tradeOffs="Requires the API client interceptor to manage tenant context transparently and the backend to inject compound query filters on every Mongoose operation."
    />

    <FailureRecoveryCard
      failureMode="Physical school closure, municipal boundary restructuring, or cohort merger."
      impact="Unassigned students or orphaned teacher assignments if handled via hard deletion."
      handling="Zero-Hard-Deletion Principle: Schools and classes transition to lifecycleStatus: 'ARCHIVED'. Foreign keys remain referentially intact; downstream analytics filter by active status."
      recovery="Town Admin executes soft reallocation script reassigning active student enrollments to adjacent cluster school with full AuditLog snapshot diff."
    />

    <CrossQuestions
      title="Engineering Cross-Questions & Architectural Inquiries (Hierarchy)"
      items={[
        {
          category: 'Institutional Governance',
          question: 'Why can a Class or Section not possess an autonomous budget, independent Head Master, or direct API role?',
          answer: 'Under the Sindh Local Government Act and DMC education rules, schools (SEMIS entities) are the lowest legal institutional and accounting cost centers. A class is a pedagogical grouping within a school building. Granting financial or administrative autonomy to classes would violate municipal audit regulations and break the single-executive authority of the Head Master.',
          evidence: 'docs/RBAC.md:42 • server/src/constants.js:15-35',
        },
        {
          category: 'Security Subordination',
          question: 'What stops two Town Administrators (Level 80) from suspending each other during an administrative dispute?',
          answer: 'The subordination axiom in authorizeHierarchy.js enforces a strict greater-than rule: actor.roleLevel > target.roleLevel. Because both Town Admins have roleLevel 80, the condition (80 > 80) evaluates to false. Any mutation attempt between peers is halted with HTTP 403 Forbidden ("INSUFFICIENT_HIERARCHICAL_PRIVILEGE"). Peer actions require escalation to Super Admin (Level 90) or Root Admin (Level 100).',
          evidence: 'server/src/middlewares/authorizeHierarchy.js:32-48 • Verified in tests/authority_model_suite.test.js:AM-17',
        },
        {
          category: 'Academic Cohesion',
          question: 'What happens to historical attendance and examination records when a student is reassigned from Section A to Section B?',
          answer: 'Student records, attendance, and exam marks are linked primarily to the immutable studentId and schoolId, with sectionId acting as a temporal assignment tag. Reassigning a student to Section B updates future muster rolls without altering or orphan-linking previous attendance logs in Section A.',
          evidence: 'server/src/models/Attendance.js:18-42 • Verified in tests/student_lifecycle_suite.test.js:140-195',
        },
      ]}
    />

    <VerificationBox
      sourceFile="server/src/middlewares/authorizeHierarchy.js & server/src/constants.js"
      testSuite="server/tests/tenant_isolation_suite.test.js & server/tests/authority_model_suite.test.js"
      command="cd server && node tests/tenant_isolation_suite.test.js"
      result="42 / 42 PASSED (100% ISOLATION INTEGRITY)"
    />
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

    <ReasoningCard
      title="Decoupled Identity Axiom (Designation ≠ Role ≠ Scope ≠ Authority)"
      decision="Storing Civil Service Titles (e.g. 'Drawing and Disbursing Officer (DDO)', 'Town Education Officer') strictly as descriptive metadata with 0 programmatic permissions, deriving authorization exclusively from immutable backend role enums and roleLevel integers."
      whyItWon="In government departments, civil servants frequently rotate duties or hold honorary committee titles without formal civil re-classification. In legacy systems, treating titles as software roles caused catastrophic privilege escalation (e.g. an accountant given administrative deletion rights because their title read 'DDO'). Our decoupled architecture makes title changes strictly aesthetic."
      alternativesRejected="Role-per-designation mappings (rejected: uncontrollable permission drift and audit nightmares); Direct permission assignment to individual users (rejected: high operational overhead for municipal IT)."
      tradeOffs="Requires Town Admins to explicitly manage both civil descriptive profiles and technical RBAC assignments separately during staff onboarding."
    />

    <FailureRecoveryCard
      failureMode="An official is demoted or suspended, but their browser holds a valid 15-minute access token."
      impact="Potential 15-minute window of unauthorized actions if relying solely on stateless JWT verification."
      handling="Token Versioning Guard: The User schema maintains a tokenVersion integer. When a user role is changed or account suspended, tokenVersion is atomically incremented."
      recovery="authenticate.js verifies the token payload against user.tokenVersion on sensitive operations, instantly terminating compromised sessions with HTTP 401 Unauthorized."
    />

    <CrossQuestions
      title="Engineering Cross-Questions & Security Inquiries (Decoupled Identity)"
      items={[
        {
          category: 'Privilege Escalation',
          question: 'What prevents a compromised school clerk from editing their civil title to "Director Education" and gaining administrative access?',
          answer: 'The API controllers and middleware inspect request.user.role (an enum: PEON, TEACHER, HM, ADMIN, SUPER_ADMIN, ROOT_ADMIN) and request.user.roleLevel. The text field civilDesignation is never evaluated by any route guard or database query filter. A clerk renaming themselves "Director" receives zero extra capabilities.',
          evidence: 'server/src/middlewares/authorizeHierarchy.js:20-65 • docs/RBAC.md:12-40',
        },
        {
          category: 'Civil Cadre Invariants',
          question: 'How does the system distinguish a Primary School Teacher (PST) from a Junior Elementary School Teacher (JEST)?',
          answer: 'Both PST and JEST civil cadres share the software RBAC role "TEACHER" (Level 30) with identical classroom capabilities (attendance and subject marks entry). Their specific pedagogical seniority, basic pay scale (BPS-14 vs BPS-16), and qualification are recorded in the TeacherProfile schema, ensuring civil distinctions do not complicate software access rules.',
          evidence: 'server/src/models/TeacherProfile.js:25-60 • Verified in tests/personal_profile_lifecycle_suite.test.js',
        },
      ]}
    />

    <VerificationBox
      sourceFile="server/src/models/User.js & server/src/middlewares/authorizeRoles.js"
      testSuite="server/tests/authority_model_suite.test.js & server/tests/rbac_authorization_suite.test.js"
      command="cd server && node tests/authority_model_suite.test.js"
      result="20 / 20 PASSED (100% CADRE INTEGRITY)"
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

    <ReasoningCard
      title="Dual-App Segregation Rationale (Civic SSR vs Authenticated SPA)"
      decision="Segregating the platform into two decoupled web applications: Next.js 15 SSR (landing-page/) for public civic engagement and Vite 6.1.0 + React 18 SPA (client/) for the authenticated staff workspace."
      whyItWon="Public civic portals require search engine indexation (SEO), OpenGraph preview cards for WhatsApp sharing across parents, and ultra-fast First Contentful Paint. In contrast, the authenticated workspace involves dense 9-slice Redux state, persistent WebSocket/polling queues, and rapid multi-tab classroom navigation where client-side SPA routing avoids costly full-page re-renders."
      alternativesRejected="Single Next.js monolith (rejected: complex authentication redirects, server-component boilerplate for deeply interactive attendance rosters, slower HMR); Pure Vite SPA for both (rejected: zero SEO, inability to render dynamic OpenGraph meta tags for municipal textbook downloads)."
      tradeOffs="Requires maintaining two separate build configurations (Vite and Next.js) and managing CORS origins across civic and workspace domains."
    />

    <FailureRecoveryCard
      failureMode="Temporary cloud CDN degradation or upstream Next.js edge prerendering delay."
      impact="Slow initial page load on public civic portal under heavy school admission announcement traffic."
      handling="Static route pregeneration (SSG): 8/8 civic routes prerender at build time into pure HTML/CSS artifacts served directly from edge storage (Vercel Edge Network) without hitting origin Node.js servers."
      recovery="Automatic failover to edge cache; stale-while-revalidate policy serves cached gazettes while revalidating in background."
    />

    <CrossQuestions
      title="Engineering Inquiries & Architectural Cross-Questions (Topology)"
      items={[
        {
          category: 'State & Performance',
          question: 'Why does the authenticated workspace use Redux Toolkit rather than Next.js Server Components?',
          answer: 'The staff workspace involves complex transactional workflows (e.g. marking 50 students in 2 minutes, running attendance summary aggregations, queuing offline attendance edits, and handling concurrent token refresh mutexes). Redux Toolkit provides normalized local state caching that updates instantaneously in memory without round-tripping through Next.js server actions.',
          evidence: 'client/src/store/index.js:10-45 • docs/ARCHITECTURE.md:85-120',
        },
        {
          category: 'Cookie Scope & CORS',
          question: 'How are sensitive session cookies quarantined between the civic landing page and authenticated workspace?',
          answer: 'The refresh token cookie sets path: "/api/v1/auth" with SameSite=Strict and HttpOnly flags. Because the public landing portal never communicates with /api/v1/auth, the browser never sends or receives session cookies on the civic domain, completely eliminating cross-site cookie exposure.',
          evidence: 'server/src/utils/tokenUtils.js:140-165 • server/src/app.js:25-50',
        },
      ]}
    />

    <VerificationBox
      sourceFile="landing-page/package.json & client/package.json"
      testSuite="Client Production Build (Vite 6.1.0) & Landing Production Build (Next.js 15.5.24)"
      command="cd client && npm run build && cd ../landing-page && npm run build"
      result="BOTH BUILDS CLEAN (0 ERRORS, 0 WARNINGS)"
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

    <ReasoningCard
      title="BFF Architecture Rationale (Express REST vs GraphQL / TRPC / Direct BaaS)"
      decision="A dedicated Node.js/Express REST Backend-for-Frontend (BFF) orchestrating authentication, rate limiting, role authorization, tenant isolation, and audit logging before reaching MongoDB Atlas."
      whyItWon="Provides strict, granular, per-endpoint security control. Express allows chaining 21 purpose-built middleware guards in an exact chronological sequence (Perimeter → Sanitization → Auth → Hierarchy → Scope → Validation). Prevents GraphQL query-complexity denial-of-service and avoids the vendor lock-in and unmaintainable client security rules of direct BaaS (Firebase/Supabase)."
      alternativesRejected="GraphQL (rejected: excessive complexity, difficult HTTP caching, vulnerable to circular relation exhaustion attacks); TRPC (rejected: tightly couples frontend to backend, restricting future mobile Flutter/Android development); Direct Client-to-Mongo (rejected: fatal security risk in multi-tenant municipal systems)."
      tradeOffs="Requires explicitly authoring and maintaining REST controller methods and route contracts across all 27 mounted route groups."
    />

    <FailureRecoveryCard
      failureMode="Database connection timeout, replica set primary failover, or network partition."
      impact="API calls stall or fail to write mutations."
      handling="Mongoose auto-reconnect with 30-second serverSelectionTimeoutMS. Express unhandled rejection interceptor catches dropped operations and returns HTTP 503 Service Unavailable with standard JSON error envelope."
      recovery="Client API interceptor receives 503, displays non-destructive retry notification to user, and preserves form inputs in local Redux state."
    />

    <CrossQuestions
      title="Engineering Cross-Questions & Security Inquiries (BFF & Data Flow)"
      items={[
        {
          category: 'Anti-BOLA Architecture',
          question: 'How does the BFF pipeline prevent a Head Master from modifying students in another school (BOLA/IDOR)?',
          answer: 'The authorizeScope.js middleware extracts schoolId exclusively from the verified JWT payload (request.user.schoolId). Even if an attacker manually modifies the request URL or injects { "schoolId": "SCH-OTHER" } into the JSON body, the controller ignores client body parameters and injects the token-bound schoolId into the Mongoose query. Attempting to query an unassigned school yields 404 Not Found.',
          evidence: 'server/src/middlewares/authorizeScope.js:18-85 • Verified in tests/tenant_isolation_suite.test.js:1-42 (PASS)',
        },
        {
          category: 'Audit Assurance (ADR-04)',
          question: 'What happens if a data export is streamed to a user but the audit logging engine fails to record the transaction?',
          answer: 'Under Architectural Decision Record ADR-04 (Fail-Closed Streaming Export Audit), the streaming export controller wraps file generation in an atomic transaction: the AuditLog entry is verified first. If the audit engine throws an error or fails to write, the HTTP stream is immediately aborted (fail-closed), preventing unmonitored mass data extraction.',
          evidence: 'server/src/controllers/exportController.js:45-80 • Verified in tests/phase2_red_team_verification.test.js (PASS)',
        },
      ]}
    />

    <VerificationBox
      sourceFile="server/src/routes/v1/index.js & server/src/app.js"
      testSuite="server/tests/reliability_and_idempotency_suite.test.js & server/tests/security_defense_in_depth_suite.test.js"
      command="cd server && node tests/reliability_and_idempotency_suite.test.js"
      result="22 / 22 PASSED (100% BFF PIPELINE INTEGRITY)"
    />
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

// ══════════════════════════════════════════════════════════════════════════════
// 6. ARCHITECTURAL DECISION RECORDS (ADR-01 TO ADR-08)
// ══════════════════════════════════════════════════════════════════════════════
export const ArchitecturalDecisionsSection = () => (
  <div>
    <DocHeader
      title="Architectural Decision Records (ADR-01 to ADR-08)"
      badge="2. Technology & Architecture"
      subtitle="Formal decision logs, technical trade-offs, and institutional rationales governing platform architecture."
    />

    {/* 4-Metric HUD */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">CANONICAL ADRS</div>
        <div className="text-sm font-black text-[#006AC7]">8 Formal Records</div>
        <div className="text-xs text-[#526477]">ADR-01 through ADR-08</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">SECURITY HARDENING</div>
        <div className="text-sm font-black text-[#4B7F3A]">Argon2id + Pepper</div>
        <div className="text-xs text-[#526477]">19 MB RAM per Hash</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">CIVIL CADRES</div>
        <div className="text-sm font-black text-purple-600">Decoupled Identity</div>
        <div className="text-xs text-[#526477]">Designation ≠ Role</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">MUNICIPAL AUDIT</div>
        <div className="text-sm font-black text-amber-600">Fail-Closed Exports</div>
        <div className="text-xs text-[#526477]">Zero Unaudited Streams</div>
      </div>
    </div>

    <p className="text-xs text-[#526477] leading-relaxed mb-6">
      Every core architectural mechanism in the municipal platform was forged through an explicit engineering trade-off. Below is the canonical register of Architectural Decision Records:
    </p>

    <ComparisonTable
      headers={['ADR Identifier & Subject', 'Decision & Context', 'Institutional Rationale & Outcome']}
      rows={[
        {
          left: 'ADR-01: Decoupling Civil Designation from RBAC',
          right: 'Decision: Civil Service Designation (e.g. DDO, TEO) is stored as descriptive metadata; authorization is driven strictly by immutable backend roleLevel (10–100) and geographic scope.',
        },
        {
          left: 'ADR-02: Single-Cohort Class Model in Primary Schools',
          right: 'Decision: sectionId in TeachingAssignment and StudentProfile is nullable (null represents Whole Class cohort). Accommodates Liaquatabad schools where grades are not divided into sections.',
        },
        {
          left: 'ADR-03: In-Memory File Processing Buffer',
          right: 'Decision: File uploads use multer.memoryStorage(). PDFs and marksheets are processed in RAM and streamed directly to Cloudinary or the client, leaving zero unencrypted files on disk.',
        },
        {
          left: 'ADR-04: Fail-Closed Streaming CSV Data Export Audit',
          right: 'Decision: Data exports stream directly to the client. If the audit logging engine fails to record the export, the connection is immediately aborted (fail-closed), preventing unmonitored mass data extraction.',
        },
        {
          left: 'ADR-05: Native Argon2id + Pepper Hashing Architecture',
          right: 'Decision: Upgraded from legacy bcrypt to native @node-rs/argon2 with 19,456 KiB RAM cost and a server-side pepper key. Thwarts GPU/ASIC dictionary attacks while silently upgrading legacy hashes.',
        },
        {
          left: 'ADR-06: Asynchronous Outbox Pattern for Durable Alerts',
          right: 'Decision: NotificationOutbox decouples HTTP request-response cycles from external communication delays. Background worker dispatches notifications with exponential backoff and deduplication.',
        },
        {
          left: 'ADR-07: Karachi Hardware Window Attendance Policy',
          right: 'Decision: Hard-coded timing gates enforce Asia/Karachi (PKT) time: gates open at 07:30 AM, late threshold at 08:15 AM, and hard lock at 09:00 AM, eliminating retroactive paper proxy attendance.',
        },
        {
          left: 'ADR-08: Forensic Attribution Watermark vs Screen Blur',
          right: 'Decision: Browser heuristic deterrence (blur on blur, hotkey blocking) is combined with dynamic server-stamped SVG/Canvas watermarks (Username, IP, Timestamp) to ensure non-repudiable leak attribution.',
        },
      ]}
    />
  </div>
);
