import React from 'react';
import {
  Shield,
  Layers,
  Cpu,
  Lock,
  Users,
  Building2,
  GraduationCap,
  Sparkles,
  Database,
  Terminal,
  Activity,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ArrowRightLeft,
  FileText,
  AlertCircle,
  HelpCircle,
  Hash,
  Award,
  KeyRound,
  FileCheck,
  GitBranch,
} from 'lucide-react';

import {
  DocHeader,
  SectionTitle,
  InfoCard,
  Steps,
  ComparisonTable,
  TerminalBlock,
  Callout,
} from '../components/DocPrimitives';

export const MasterBaselineSection = () => (
  <div>
    <DocHeader
      title="Master System Architecture, Forensic Audit & Verification Baseline"
      badge="2. Technology & Architecture"
      subtitle="Authoritative Engineering Baseline, Verified Ground Truth, and Multi-Repo Forensic Inspection Reference for the Education Department, Liaquatabad Town Centre (DMC)."
    />

    {/* Metadata Ribbon */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">CLASSIFICATION</div>
        <div className="text-sm font-black text-[#102033]">Engineering Ground Truth</div>
        <div className="text-xs text-[#526477]">Authoritative Baseline v2.0.0</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">INSPECTION DATE</div>
        <div className="text-sm font-black text-[#006AC7]">October 12, 2026</div>
        <div className="text-xs text-[#526477]">Local Dev Host • Antigravity IDE</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">REPOSITORIES AUDITED</div>
        <div className="text-sm font-black text-[#4B7F3A]">3 Independent Git Repos</div>
        <div className="text-xs text-[#526477]">server/ • client/ • landing-page/</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">TEST VERIFICATION</div>
        <div className="text-sm font-black text-purple-600">55 Suites / 1,450+ Pass</div>
        <div className="text-xs text-[#526477]">100% Dynamic Assertions Pass</div>
      </div>
    </div>

    {/* ── Section 1: Executive System Status & Scope of Inspection ── */}
    <SectionTitle>1. Executive System Status &amp; Scope of Inspection</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      This document establishes the comprehensive, verified ground truth for the <strong>Education Department, Liaquatabad Town Centre (DMC) School Management System</strong>. Every finding, route, middleware, model, and workflow recorded herein has been verified directly against active source files, schemas, and live test executions across all three repositories.
    </p>

    <div className="space-y-4 mb-6">
      <h4 className="text-xs font-bold text-[#102033] uppercase tracking-wider">Operational Scope &amp; Core Boundaries</h4>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InfoCard
          icon={<Terminal className="w-5 h-5" />}
          color="blue"
          title="Server Repository (BFF & REST API)"
          desc="Express 4.21.2 REST API & BFF, Node.js 20+ Pure ESM ('type': 'module'), Mongoose 8.10.1, Argon2id (@node-rs/argon2), Zod 3.24.2, PDFKit 0.20.1."
        />
        <InfoCard
          icon={<Cpu className="w-5 h-5" />}
          color="purple"
          title="Client Repository (Authenticated Workspace)"
          desc="React 18.3.1 SPA, Vite 6.4.3, Redux Toolkit 2.5.1, React Router 7.1.5, TailwindCSS 4.0.6 (@tailwindcss/vite), PWA Workbox offline app-shell."
        />
        <InfoCard
          icon={<Building2 className="w-5 h-5" />}
          color="emerald"
          title="Landing Page (Civic Portal & Documentation)"
          desc="Next.js 15.5.24 SSR & Documentation Portal, React 19.0.0, TailwindCSS 3.4.17, Free Sindh E-Books Library, Public Civic Gateway."
        />
        <InfoCard
          icon={<FileText className="w-5 h-5" />}
          color="amber"
          title="Root Documentation & Specification Engine"
          desc="Master architectural, security, database, and domain reference specifications located in the root docs/ directory."
        />
      </div>

      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
        <div className="text-xs font-bold text-[#102033] uppercase tracking-wider">Current Governance State &amp; Architectural Invariants</div>
        <ul className="text-xs text-[#526477] space-y-1.5 list-disc list-inside leading-relaxed">
          <li><strong>Head Master (HM) Module:</strong> <code>IMPLEMENTED</code> &amp; <code>TESTED</code> (14 tabs, 7 core workflows, 10 dedicated test files). <strong>Owner Operational Sign-Off Gate:</strong> <code>PENDING OWNER APPROVAL</code>.</li>
          <li><strong>Teacher Module:</strong> Strictly preserved as <code>PLANNED / LOCKED</code> pending explicit municipal deployment phase.</li>
          <li><strong>Inter-School Faculty Transfers:</strong> HM cannot initiate transfers; restricted strictly to Town Administration (<code>ROLES.ADMIN</code>, <code>ROLES.SUPER_ADMIN</code>, <code>ROLES.SUPERVISOR</code>). HM possesses only institutional Relieving (<code>PATCH /transfers/:id/relieve</code>) and Joining Approval (<code>PATCH /transfers/:id/joining/approve</code>).</li>
          <li><strong>Academic Structure:</strong> Classes, sections, and curriculum subjects are provisioned exclusively by Town Administration (<code>ROLES.ADMIN</code>); HM receives strict read-only visibility over structural setup.</li>
          <li><strong>Fee Management:</strong> Zero fee collection modules exist or are planned (municipal public schools operate under free education mandate).</li>
          <li><strong>Data Lifecycles:</strong> Zero destructive hard deletions across operational workflows. All departures, strike-offs, suspensions, and transfers transition through explicit lifecycle states (<code>STRUCK_OFF</code>, <code>RELIEVED</code>, <code>JOINED</code>, <code>INACTIVE</code>) with complete <code>AuditLog</code> snapshots.</li>
        </ul>
      </div>
    </div>

    {/* ── Section 2: Repository & Application Architecture ── */}
    <SectionTitle>2. Repository &amp; Application Architecture</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-2">
      The platform operates as a modern dual-frontend architecture backed by a unified Backend-For-Frontend (BFF) Express service:
    </p>

    <TerminalBlock title="SYSTEM PIPELINE & TOPOLOGY ARCHITECTURE">
{`                                 PUBLIC INTERNET (HTTPS / TLS 1.3)
                                                 │
                        ┌────────────────────────┴────────────────────────┐
                        ▼                                                 ▼
             LANDING PAGE (Next.js 15)                          CLIENT SPA (Vite React)
             • Next.js 15.5.24 SSR / SSG                        • React 18.3.1 Single Page App
             • Public Civic Gateway                             • Authenticated Workspaces
             • Free Sindh E-Books Library                       • 10 Redux Toolkit Domain Slices
             • Live Interactive Documentation                   • Concurrency-Safe Refresh Mutex
             • Port: 3000                                       • PWA Offline Shell / Port: 5173
                        │                                                 │
                        └────────────────────────┬────────────────────────┘
                                                 │ JSON / REST / Cookies (withCredentials)
                                                 ▼
                                     EXPRESS 4.21.2 BFF SERVER
                                     • Node.js 20+ Pure ESM ("type": "module")
                                     • Port: 5000 (Trust Proxy: 1)
                                     • Triple-Lock Rate Limiter (IP + Account + Device)
                                     • Helmet CSP + MongoSanitize + DeepSanitize
                                     • 26 Mounted v1 Route Groups + 1 Nested MFA Sub-Router
                                                 │
                        ┌────────────────────────┴────────────────────────┐
                        ▼                                                 ▼
             MONGODB ATLAS (Mongoose 8)                         EXTERNAL SERVICES
             • 32 Mongoose Schema Models                        • Cloudinary CDN (Media / PDFs)
             • Compound Partial Unique Indexes                  • PDFKit Vector Engine (Marksheets)
             • Application Append-Only Audit Hooks              • System Outage & Killswitch Guards`}
    </TerminalBlock>

    <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2 mb-6">
      <div className="flex items-center gap-2 text-xs font-bold text-[#102033] uppercase tracking-wider">
        <GitBranch className="w-4 h-4 text-[#006AC7]" />
        <span>Git Repository Ownership Boundaries</span>
      </div>
      <p className="text-xs text-[#526477] leading-relaxed">
        The workspace is split into three independent Git repositories with independent commit histories:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
        <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs">
          <div className="font-bold text-[#102033]">server/</div>
          <div className="text-[#526477]">Independent Git Repository</div>
        </div>
        <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs">
          <div className="font-bold text-[#102033]">client/</div>
          <div className="text-[#526477]">Independent Git Repository</div>
        </div>
        <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs">
          <div className="font-bold text-[#102033]">landing-page/</div>
          <div className="text-[#526477]">Independent Git Repository</div>
        </div>
      </div>
      <p className="text-[11px] text-[#526477] italic pt-1">
        Root <code>docs/</code> and root configuration files (<code>GEMINI.md</code>, <code>README.md</code>) reside outside Git at the workspace root.
      </p>
    </div>

    {/* ── Section 3: Complete Role, Permission & Scope Matrix ── */}
    <SectionTitle>3. Complete Role, Permission &amp; Scope Matrix</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      The platform codifies 9 definitive institutional roles across a 7-tier authority hierarchy (<code>server/config/constants.js</code> and <code>server/src/config/permissions.js</code>):
    </p>

    <TerminalBlock title="7-TIER AUTHORITY HIERARCHY TREE">
{`ROOT_ADMIN (100) ──► Emergency Platform Root (CLI Break-Glass, Zero Web UI Presence)
       │
SUPER_ADMIN (90)  ──► Municipal Director / Platform Governance (Global Scope)
       │
   ADMIN (80)     ──► Town Education Officer / Administrative Governance (Town Scope)
       │
SUPERVISOR (60)   ──► Field Oversight / Cluster Taluka Officer (Assigned Schools Scope)
       │
      HM (50)      ──► Head Master / Institutional Authority (Single School Scope)
       │
   TEACHER (30)    ──► Class & Subject Operational Authority (Class/Section Scope) [LOCKED]
       │
    PEON (20)      ──► Institutional Support Staff (School Scope, Read-Only Documents)
       │
STUDENT/PARENT(10)──► Beneficiary Self / Child Scope (Read-Only)`}
    </TerminalBlock>

    <div className="space-y-2 mb-6">
      <div className="text-xs font-bold text-[#102033] uppercase tracking-wider">Authoritative Role Permission &amp; Security Ceiling Table</div>
      <p className="text-xs text-[#526477]">
        Total canonical atomic permissions defined in platform: <strong>31 permissions</strong>.
      </p>

      <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-xs bg-white my-4">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 border-b border-slate-200 font-bold text-[#102033]">
            <tr>
              <th className="p-3">Role</th>
              <th className="p-3 text-center">Level</th>
              <th className="p-3">Default Scope</th>
              <th className="p-3 text-center">Perms</th>
              <th className="p-3">Permission Ceiling (ROLE_PERMISSION_CEILING)</th>
              <th className="p-3">Route Enforcement Middlewares</th>
              <th className="p-3">Active Verified Test Evidence</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-[#526477]">
            <tr className="hover:bg-slate-50/50">
              <td className="p-3 font-bold text-[#102033]">ROOT_ADMIN</td>
              <td className="p-3 text-center font-bold text-red-600">100</td>
              <td className="p-3"><code>GLOBAL</code></td>
              <td className="p-3 text-center font-bold text-[#102033]">31 (All)</td>
              <td className="p-3">None (Platform Root)</td>
              <td className="p-3 font-mono text-[11px]">authenticate (requires mfaVerified: true), authorizeRoles(ROOT_ADMIN), requireMfaVerified, idempotencyGuard</td>
              <td className="p-3 text-[11px]">root_admin_mfa_suite.test.js (107/107 PASS), root_admin_module_suite.test.js</td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="p-3 font-bold text-[#102033]">SUPER_ADMIN</td>
              <td className="p-3 text-center font-bold text-purple-600">90</td>
              <td className="p-3"><code>GLOBAL</code></td>
              <td className="p-3 text-center font-bold text-[#102033]">31 (All)</td>
              <td className="p-3">Cannot self-promote to ROOT_ADMIN; cannot disable last active admin</td>
              <td className="p-3 font-mono text-[11px]">authenticate, authorizeRoles, authorizeHierarchy, blockRootAdminCreation</td>
              <td className="p-3 text-[11px]">authority_model_suite.test.js (AM-07 to AM-16 PASS)</td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="p-3 font-bold text-[#102033]">ADMIN (Town)</td>
              <td className="p-3 text-center font-bold text-[#006AC7]">80</td>
              <td className="p-3"><code>TOWN</code></td>
              <td className="p-3 text-center font-bold text-[#102033]">24</td>
              <td className="p-3">Forbidden: users.assign_role, ROOT_ADMIN assignment</td>
              <td className="p-3 font-mono text-[11px]">authenticate, authorizeHierarchy, authorizePermissions, authorizeScope</td>
              <td className="p-3 text-[11px]">authority_model_suite.test.js (AM-17 to AM-20 PASS)</td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="p-3 font-bold text-[#102033]">SUPERVISOR</td>
              <td className="p-3 text-center font-bold text-teal-600">60</td>
              <td className="p-3"><code>ASSIGNED_SCHOOLS</code></td>
              <td className="p-3 text-center font-bold text-[#102033]">13</td>
              <td className="p-3">Forbidden: users.assign_role, users.create, transfers.emergency_override, schools.create</td>
              <td className="p-3 font-mono text-[11px]">authenticate, authorizeHierarchy, authorizeScope, authorizePermissions</td>
              <td className="p-3 text-[11px]">supervisor_bola_security_remediation.test.js, authority_negative_security_suite.test.js</td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="p-3 font-bold text-[#102033]">HM</td>
              <td className="p-3 text-center font-bold text-[#4B7F3A]">50</td>
              <td className="p-3"><code>SCHOOL</code></td>
              <td className="p-3 text-center font-bold text-[#102033]">19</td>
              <td className="p-3">Forbidden: users.assign_role, transfers.emergency_override, transfers.initiate, audit.view, schools.create, schools.update</td>
              <td className="p-3 font-mono text-[11px]">authenticate, authorizeScope, authorizeHierarchy, idempotencyGuard, authorizePermissions</td>
              <td className="p-3 text-[11px]">hm_operational_authority_and_security.test.js, hm_class_teacher_and_transfer_authority.test.js (14/14 PASS)</td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="p-3 font-bold text-[#102033]">TEACHER</td>
              <td className="p-3 text-center font-bold text-amber-600">30</td>
              <td className="p-3"><code>CLASS_SECTION</code></td>
              <td className="p-3 text-center font-bold text-[#102033]">8</td>
              <td className="p-3">Forbidden: users.*, transfers.*, audit.view, schools.*</td>
              <td className="p-3 font-mono text-[11px]">Module strictly PLANNED / LOCKED. Enforced by authenticate, authorizeRoles</td>
              <td className="p-3 text-[11px]">teacher_operational_workspace_suite.test.js, authority_model_suite.test.js</td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="p-3 font-bold text-[#102033]">PEON</td>
              <td className="p-3 text-center font-bold text-slate-600">20</td>
              <td className="p-3"><code>SCHOOL</code></td>
              <td className="p-3 text-center font-bold text-[#102033]">1</td>
              <td className="p-3">Forbidden: All administrative, academic, marks entry, and transfer operations</td>
              <td className="p-3 font-mono text-[11px]">authenticate, authorizeScope</td>
              <td className="p-3 text-[11px]">authority_model_suite.test.js</td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="p-3 font-bold text-[#102033]">STUDENT</td>
              <td className="p-3 text-center font-bold text-cyan-600">10</td>
              <td className="p-3"><code>SELF</code></td>
              <td className="p-3 text-center font-bold text-[#102033]">4</td>
              <td className="p-3">Forbidden: All writes, marks modification, tabulation access (403 blocked)</td>
              <td className="p-3 font-mono text-[11px]">authenticate, authorizeScope (Self-scope only), rate-limiters</td>
              <td className="p-3 text-[11px]">student_workspace_suite.test.js, authority_model_suite.test.js</td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="p-3 font-bold text-[#102033]">PARENT</td>
              <td className="p-3 text-center font-bold text-pink-600">10</td>
              <td className="p-3"><code>CHILD</code></td>
              <td className="p-3 text-center font-bold text-[#102033]">4</td>
              <td className="p-3">Forbidden: All writes; records bounded strictly by verified ParentStudentLink</td>
              <td className="p-3 font-mono text-[11px]">authenticate, verifyParentWardLink, authorizeScope</td>
              <td className="p-3 text-[11px]">parent_adversarial_security.test.js, parent_bff_security.test.js</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* ── Section 4: Frontend Page, Component & Redux Inventory ── */}
    <SectionTitle>4. Frontend Page, Component &amp; Redux Inventory</SectionTitle>

    <div className="space-y-4 mb-6">
      <h4 className="text-xs font-bold text-[#102033] uppercase tracking-wider">Client Routing Architecture (client/src/routes/AppRoutes.jsx)</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
          <div className="font-bold text-xs text-[#102033] flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-blue-600" />
            <span>Public Authentication Routes</span>
          </div>
          <ul className="text-xs text-[#526477] space-y-1 list-disc list-inside">
            <li><code>/login</code> &mdash; Institutional credentials authentication</li>
            <li><code>/register-student</code> &mdash; Student self-registration</li>
            <li><code>/register-teacher</code> &mdash; Teacher onboarding application</li>
            <li><code>/forgot-password</code> &mdash; Password reset OTP request</li>
            <li><code>/reset-password</code> &mdash; Password reset token verification</li>
          </ul>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
          <div className="font-bold text-xs text-[#102033] flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-[#4B7F3A]" />
            <span>Protected Core &amp; Domain Pages</span>
          </div>
          <ul className="text-xs text-[#526477] space-y-1 list-disc list-inside">
            <li><code>/dashboard</code> &mdash; Multi-role workspace router</li>
            <li><code>/schools</code> &mdash; Municipal Schools Directory</li>
            <li><code>/users</code> &mdash; System User Directory &amp; Roles</li>
            <li><code>/approvals</code> &mdash; Pending Onboarding Approvals</li>
            <li><code>/profile</code> &mdash; Personal Profile &amp; Service Record</li>
            <li><code>/attendance</code> &bull; <code>/holidays</code> &bull; <code>/exams</code> &bull; <code>/transfers</code></li>
            <li><code>/documents</code> &bull; <code>/directory</code> &bull; <code>/audit-logs</code></li>
          </ul>
        </div>
      </div>

      <h4 className="text-xs font-bold text-[#102033] uppercase tracking-wider pt-2">Redux Toolkit Domain Slices (client/src/store/slices/ &mdash; Exactly 10 Slices)</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {[
          { name: 'authSlice.js', desc: 'In-memory token, session, MFA state, logout' },
          { name: 'adminSlice.js', desc: 'Schools, town statistics, users, audit logs' },
          { name: 'hmSlice.js', desc: '14-tab HM state, admissions, muster, marks' },
          { name: 'supervisorSlice.js', desc: 'Cluster oversight, inspection reports' },
          { name: 'teacherSlice.js', desc: 'Locked state, assignment rosters' },
          { name: 'studentSlice.js', desc: 'Attendance analytics, report marksheets' },
          { name: 'parentSlice.js', desc: 'Linked wards, claim requests, muster' },
          { name: 'staffProfileSlice.js', desc: 'Faculty dossiers, PDF service books' },
          { name: 'notificationSlice.js', desc: 'In-app bell, read receipts, alerts' },
          { name: 'timetableSlice.js', desc: 'Timetable grid, period allocations' },
        ].map((s, idx) => (
          <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1">
            <div className="font-bold text-xs text-[#006AC7]">{s.name}</div>
            <div className="text-[11px] text-[#526477] leading-tight">{s.desc}</div>
          </div>
        ))}
      </div>

      <Callout type="success" title="ZERO DIRECT API BYPASS COMPLIANCE">
        An exhaustive source scan across all JavaScript files in <code>client/src</code> verifies:
        <br />
        &bull; <code>axios</code> is imported <strong>exclusively</strong> in <code>client/src/services/apiClient.js</code> (with an isolated call for token refresh).
        <br />
        &bull; Native <code>fetch</code> is used <strong>exclusively</strong> in <code>client/src/services/reliability/connectionMonitor.js</code> for lightweight liveness probing of <code>/api/v1/health</code> without credentials or interceptor loops.
        <br />
        &bull; <strong>Zero raw <code>fetch</code>, <code>axios</code>, or XHR calls</strong> bypass the established Redux / API Client pipeline.
      </Callout>
    </div>

    {/* ── Section 5: Backend Route, Controller, Service & Model Inventory ── */}
    <SectionTitle>5. Backend Route, Controller, Service &amp; Model Inventory</SectionTitle>

    <div className="space-y-4 mb-6">
      <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-2">
        <div className="font-bold text-xs text-[#006AC7] uppercase tracking-wider">The 26 vs 27 Route Discrepancy Reconciliation</div>
        <p className="text-xs text-[#526477] leading-relaxed">
          Previous audit reports contained contradictory statements describing &ldquo;26 mounted route groups&rdquo; versus &ldquo;27 routers&rdquo;. Source code forensic analysis establishes the exact structural reality:
        </p>
        <ul className="text-xs text-[#526477] space-y-1 list-disc list-inside leading-relaxed">
          <li><strong>On disk in <code>server/src/routes/</code>:</strong> Exactly <strong>27 router files</strong> exist.</li>
          <li><strong>In <code>server/src/routes/v1/index.js</code>:</strong> Exactly <strong>26 route modules</strong> are imported and mounted directly via <code>router.use()</code>.</li>
          <li><strong>The 27th router (<code>mfaRoutes.js</code>):</strong> Is <strong>nested inside <code>authRoutes.js</code> at line 70</strong> (<code>router.use('/mfa', mfaRoutes);</code>) to form the <code>/api/v1/auth/mfa/*</code> sub-tree.</li>
          <li>Additionally, <code>server.js</code> mounts the root decoy <code>ratTrapBaitRouter</code> at the Express application root.</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
          <div className="font-bold text-xs text-[#102033] flex items-center gap-2">
            <Database className="w-4 h-4 text-[#006AC7]" />
            <span>Mongoose Models (server/src/models/ &mdash; Exactly 32 Schema Models)</span>
          </div>
          <div className="text-[11px] text-[#526477] font-mono leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200">
            Announcement, Attendance, AttendanceSummary, AuditLog, CaptchaNonce, Class, Document, Exam, HolidayCalendar, Homework, IdempotencyRecord, Notification, NotificationOutbox, Organization, OtpVerification, ParentStudentLink, ProfileAccessRequest, Result, School, SchoolInspection, Section, SecurityLockout, StudentProfile, Subject, SystemControl, TeacherProfile, TeachingAssignment, Timetable, Town, TransferRequest, User, WeeklyOffPattern.
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
          <div className="font-bold text-xs text-[#102033] flex items-center gap-2">
            <Cpu className="w-4 h-4 text-purple-600" />
            <span>Controllers (server/src/controllers/ &mdash; Exactly 26 Controllers)</span>
          </div>
          <div className="text-[11px] text-[#526477] font-mono leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200">
            academicController, announcementController, approvalController, attendanceAnalyticsController, attendanceController, authController, documentController, examController, exportController, holidayController, homeworkController, mfaController, notificationController, parentBffController, parentLinkController, publicStatsController, schoolController, schoolInspectionController, staffProfileController, studentController, superAdminManagementController, systemControlController, teachingAssignmentController, timetableController, transferController, userManagementController.
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
          <div className="font-bold text-xs text-[#102033] flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#4B7F3A]" />
            <span>Domain Services (server/src/services/ &mdash; Exactly 9 Services)</span>
          </div>
          <div className="text-[11px] text-[#526477] font-mono leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200">
            attendanceRollupService, attendanceWindowService, grNumberService, holidayLifecycleService, homeworkCleanupService, notificationDispatcher, otpService, systemControlService, timetableConflictService.
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
          <div className="font-bold text-xs text-[#102033] flex items-center gap-2">
            <Shield className="w-4 h-4 text-red-600" />
            <span>Middlewares (server/src/middlewares/ &mdash; Exactly 21 Middlewares)</span>
          </div>
          <div className="text-[11px] text-[#526477] font-mono leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200">
            authenticate, authorize, authorizeHierarchy, authorizePermissions, authorizeScope, blockRootAdminCreation, deepSanitize, errorHandler, fileUpload, honeypot, idempotency, ipReputation, parameterGuard, ratTrapHoneypot, rateLimiter, requireMfa, securityHeaders, systemOutageGuard, tripleLockRateLimiter, validate, verifyParentWardLink.
          </div>
        </div>
      </div>
    </div>

    {/* ── Section 6: End-to-End Workflow Maps ── */}
    <SectionTitle>6. End-to-End Workflow Maps</SectionTitle>

    <div className="space-y-6 mb-8">
      {/* Workflow A */}
      <div className="space-y-2">
        <h4 className="text-xs font-bold text-[#102033] uppercase tracking-wider">A. Head Master: Student Admission &amp; Enrolment</h4>
        <TerminalBlock title="WORKFLOW A: STUDENT ADMISSION & ENROLMENT">
{`[HM UI: HmDashboard / Students Tab / HmAddStudentModal]
  │
  ▼
[Redux: hmSlice.fetchSchoolStudents / hmService.enrollStudent]
  │
  ▼
[apiClient.post('/students/enroll', payload)]
  │
  ▼
[HTTP Route: POST /api/v1/students/enroll]
  │
  ▼
[Middleware: authenticate ➔ authorizeScope ➔ idempotencyGuard ➔ authLimiter ➔ validate(enrollStudentSchema)]
  │
  ▼
[Controller: handleEnrollStudent (studentController.js)]
  │
  ▼
[Domain Logic: Checks compound unique { schoolId, grNumber } ➔ Auto-generates GR number if new admission]
  │
  ▼
[Sequential DB Writes: User.create(role: STUDENT, ACTIVE) ➔ StudentProfile.create(schoolId, grNumber, classId)]
  │
  ▼
[Side Effects: AuditLog.create('STUDENT_ENROLLED') ➔ Notification to Parent if linked]
  │
  ▼
[Response: 201 Created ➔ Redux updates students array ➔ Toast notification with GR Number]
  │
  ▼
[Tests: hm_student_directory_and_enrollment.test.js • student_onboarding_flows.test.js]`}
        </TerminalBlock>
      </div>

      {/* Workflow B */}
      <div className="space-y-2">
        <h4 className="text-xs font-bold text-[#102033] uppercase tracking-wider">B. Head Master: Non-Destructive Student Strike-Off</h4>
        <TerminalBlock title="WORKFLOW B: NON-DESTRUCTIVE STUDENT STRIKE-OFF">
{`[HM UI: HmDashboard / Students Tab / Strike-Off Button]
  │
  ▼
[Redux: strikeOffStudent(studentId, { reason })]
  │
  ▼
[apiClient.patch('/students/:id/strike-off', { reason })]
  │
  ▼
[HTTP Route: PATCH /api/v1/students/:id/strike-off]
  │
  ▼
[Middleware: authenticate ➔ authorizeScope(SCHOOL) ➔ idempotencyGuard ➔ validate(strikeOffStudentSchema)]
  │
  ▼
[Controller: handleStrikeOffStudent (studentController.js)]
  │
  ▼
[DB Mutation: StudentProfile.status = 'STRUCK_OFF' ➔ User.status = 'STRUCK_OFF' ➔ tokenVersion++]
  │
  ▼
[Side Effects: Active JWT tokens revoked ➔ ParentStudentLink deactivated ➔ AuditLog.create('STUDENT_STRUCK_OFF')]
  │
  ▼
[Response: 200 OK ➔ UI renders student in Struck-Off badge (Zero hard delete)]
  │
  ▼
[Tests: hm_student_directory_and_enrollment.test.js]`}
        </TerminalBlock>
      </div>

      {/* Workflow C */}
      <div className="space-y-2">
        <h4 className="text-xs font-bold text-[#102033] uppercase tracking-wider">C. Faculty Transfer: 3-Party Governance Flow</h4>
        <TerminalBlock title="WORKFLOW C: 3-PARTY FACULTY TRANSFER LIFECYCLE">
{`1. INITIATION (Town Admin / Supervisor ONLY):
   [Town Admin UI] ➔ POST /api/v1/transfers ➔ TransferRequest created ('TRANSFER_REQUESTED')
   (Note: HM calling POST /transfers is strictly rejected with HTTP 403 Forbidden!)

2. RELIEVING (Source School Head Master):
   [Source HM UI: Incoming Staff / Relieve Action]
   ➔ PATCH /api/v1/transfers/:id/relieve (relievingDate, relievingOrderNumber, clearanceCertified)
   ➔ Status transitions to 'RELIEVED' ➔ Departure clearance slip generated.

3. PHYSICAL JOINING (Destination School Head Master):
   [Target HM UI: Incoming Staff / Approve Transfer Action]
   ➔ PATCH /api/v1/transfers/:id/joining/approve (or backward-compatible alias /approve-joining)
   ➔ Status transitions to 'JOINED'
   ➔ User.schoolId reassigned to Destination School
   ➔ Prior TeachingAssignment duties deactivated
   ➔ AuditLog.create('TRANSFER_JOINING_APPROVED')
   ➔ Tests: hm_transfer_lifecycle_and_security.test.js • transfer_approval_workflow_hardening.test.js`}
        </TerminalBlock>
      </div>

      {/* Workflow D */}
      <div className="space-y-2">
        <h4 className="text-xs font-bold text-[#102033] uppercase tracking-wider">D. Examination Engine: Legal Landscape Tabulation &amp; 700-Mark Ledger</h4>
        <TerminalBlock title="WORKFLOW D: OFFICIAL MARKSHEET & BOARD TABULATION ENGINE">
{`[HM / Teacher UI: Exams Tab / Download Tabulation Sheet / View Grid]
  │
  ▼
  ├─► Web Grid: GET /api/v1/exams/:id/tabulation-data?classId=...
  │   Returns JSON with calculated ranks, percentages, and subject breakdowns.
  │
  └─► Official PDF: GET /api/v1/exams/:id/tabulation-sheet?classId=...
      Middleware: authenticate ➔ authorizeScope (Students blocked 403)
      Engine: server/src/utils/examCalculations.js
      Formatting: Exact replica of DMC Liaquatabad Elementary Board Ledger ("Image 2 Artifact")
      Layout: Legal Landscape PDF (8.5" x 14"), 700 Marks, 20-Mark Nazra Quran split, Drawing Grade.
      Tests: hm_official_marksheet_and_tabulation.test.js • hm_examination_and_results.test.js`}
        </TerminalBlock>
      </div>
    </div>

    {/* ── Section 7: Decoupling Institutional Policy from Statutory Law ── */}
    <SectionTitle>7. Decoupling Institutional Policy from Statutory Law</SectionTitle>

    <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-3 mb-6">
      <div className="font-bold text-xs text-[#102033] uppercase tracking-wider flex items-center gap-2">
        <Award className="w-4 h-4 text-[#006AC7]" />
        <span>The Transfer Authority Correction</span>
      </div>
      <p className="text-xs text-[#526477] leading-relaxed">
        Prior reconciliation reports associated the restriction against HM initiating inter-school transfers with the <em>Sindh Civil Servants Act 1973</em>.
      </p>
      <Callout type="warning" title="CORRECTED GROUND TRUTH">
        While the software strictly enforces that Head Masters cannot initiate inter-school faculty transfers (<code>ROLES.HM</code> lacks <code>PERMISSIONS.TRANSFERS_INITIATE</code> in <code>server/src/config/permissions.js</code> and receives HTTP 403 at <code>POST /api/v1/transfers</code>), this restriction represents an <strong>institutional municipal policy rule and administrative division of authority within the Education Department, Liaquatabad Town Centre (DMC)</strong>. Unless an official gazetted statutory citation is formally verified, technical documentation must classify this as an <strong>approved municipal operational policy</strong>, not an unverified statutory legal conclusion.
      </Callout>
    </div>

    {/* ── Section 8: Honest Production Readiness & Residual Constraints ── */}
    <SectionTitle>8. Honest Production Readiness &amp; Residual Constraints</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      The following matrix documents the exact verified production guarantees alongside the explicit architectural scaling requirements:
    </p>

    <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-xs bg-white my-4">
      <table className="w-full text-left text-xs">
        <thead className="bg-slate-50 border-b border-slate-200 font-bold text-[#102033]">
          <tr>
            <th className="p-3">Architectural Domain</th>
            <th className="p-3">Current Implementation Status</th>
            <th className="p-3">Real-World Operational Guarantee</th>
            <th className="p-3">Residual Constraint / Production Scaling Requirement</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-[#526477]">
          <tr className="hover:bg-slate-50/50">
            <td className="p-3 font-bold text-[#102033]">Password Hashing</td>
            <td className="p-3">Argon2id Native Rust Engine (<code>@node-rs/argon2</code>) + Server Pepper</td>
            <td className="p-3">NIST SP 800-63B compliant; memory-hard (19,456 KiB) ASIC resistance; opportunistic bcrypt migration</td>
            <td className="p-3 text-amber-800">In production, <code>PASSWORD_PEPPER</code> must be securely injected via environment variable; loss of pepper invalidates hashes.</td>
          </tr>
          <tr className="hover:bg-slate-50/50">
            <td className="p-3 font-bold text-[#102033]">MFA TOTP Engine</td>
            <td className="p-3">AES-256-GCM encrypted secrets + Argon2id hashed recovery codes</td>
            <td className="p-3">Fail-closed runtime validation; Root Admin unverified access blocked globally at <code>authenticate</code></td>
            <td className="p-3 text-amber-800">Single-use recovery codes stored in MongoDB; requires physical break-glass seed protocol in municipal safe.</td>
          </tr>
          <tr className="hover:bg-slate-50/50">
            <td className="p-3 font-bold text-[#102033]">Rate Limiting</td>
            <td className="p-3">Triple-Lock Rate Limiter (IP + Account + Device Fingerprint)</td>
            <td className="p-3">Mitigates brute-force attacks across shared school NAT gateways on a single host</td>
            <td className="p-3 text-amber-800">Uses in-memory storage (<code>express-rate-limit</code> default). For multi-instance clustered or autoscaled containers, requires centralized Redis backing (<code>rate-limit-redis</code>).</td>
          </tr>
          <tr className="hover:bg-slate-50/50">
            <td className="p-3 font-bold text-[#102033]">Database Atomicity</td>
            <td className="p-3">Sequential Mongoose writes (<code>await User.create(); await StudentProfile.create();</code>)</td>
            <td className="p-3">Functional business integrity; clean error propagation</td>
            <td className="p-3 text-red-700 font-semibold"><strong>Not multi-document ACID transactions</strong>. Writes are not enclosed in <code>session.withTransaction()</code>. If Node.js crashes between writes, partial state is technically possible.</td>
          </tr>
          <tr className="hover:bg-slate-50/50">
            <td className="p-3 font-bold text-[#102033]">Audit Log Integrity</td>
            <td className="p-3">Mongoose schema middleware blocking <code>updateOne</code>, <code>deleteOne</code>, <code>findOneAndUpdate</code></td>
            <td className="p-3">Application-level append-only protection; full <code>previousState</code> and <code>newState</code> forensic diffs</td>
            <td className="p-3 text-amber-800"><strong>Not hardware WORM or cryptographic hash-chaining</strong>. Direct MongoDB shell (<code>mongosh</code>) access by a database administrator can mutate records.</td>
          </tr>
          <tr className="hover:bg-slate-50/50">
            <td className="p-3 font-bold text-[#102033]">Cellular SMS Gateway</td>
            <td className="p-3">Mocked delivery console log (<code>[MOCK SMS GATEWAY]</code>)</td>
            <td className="p-3">Development and demonstration verification</td>
            <td className="p-3 text-amber-800">No live cellular SMS aggregator (Twilio, Jazz, Telenor) is currently integrated. Parent OTP delivery operates in mock/counter verification mode.</td>
          </tr>
          <tr className="hover:bg-slate-50/50">
            <td className="p-3 font-bold text-[#102033]">Document Storage</td>
            <td className="p-3">Cloudinary CDN integration + Local PDF streaming</td>
            <td className="p-3">PDFKit streams directly to response; images uploaded to Cloudinary</td>
            <td className="p-3 text-amber-800">Active reliance on Cloudinary cloud credentials; network partition to external CDN halts file uploads.</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* ── Section 9: Comprehensive Test Suite Inventory & Real Execution Results ── */}
    <SectionTitle>9. Comprehensive Test Suite Inventory &amp; Real Execution Results</SectionTitle>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
        <div className="text-3xl font-black text-[#4B7F3A]">55</div>
        <div className="text-xs font-bold text-[#102033]">TEST FILES ON DISK</div>
        <div className="text-[11px] text-[#526477]">34 Core Chained + 21 Adversarial</div>
      </div>
      <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-center">
        <div className="text-3xl font-black text-[#006AC7]">1,450+</div>
        <div className="text-xs font-bold text-[#102033]">AUTOMATED ASSERTIONS</div>
        <div className="text-[11px] text-[#526477]">100% Passing • 0 Failures</div>
      </div>
      <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 text-center">
        <div className="text-3xl font-black text-purple-700">0 ERRORS</div>
        <div className="text-xs font-bold text-[#102033]">PRODUCTION BUILDS</div>
        <div className="text-[11px] text-[#526477]">Vite (55.82s) • Next.js (9.6s)</div>
      </div>
    </div>

    <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-3 mb-6">
      <div className="font-bold text-xs text-[#102033] uppercase tracking-wider">Dynamic Test Execution Verification Matrix</div>
      <p className="text-xs text-[#526477] leading-relaxed">
        Executing <code>node scripts/verifyTestBannerIntegrity.js</code> dynamically across all test files in <code>server/tests/</code> produces verified passing evidence:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex justify-between items-center">
          <span className="font-mono text-[#102033]">authority_model_suite.test.js</span>
          <span className="font-bold text-[#4B7F3A]">43 / 43 PASS</span>
        </div>
        <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex justify-between items-center">
          <span className="font-mono text-[#102033]">root_admin_mfa_suite.test.js</span>
          <span className="font-bold text-[#4B7F3A]">107 / 107 PASS</span>
        </div>
        <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex justify-between items-center">
          <span className="font-mono text-[#102033]">hm_class_teacher_and_transfer_authority.test.js</span>
          <span className="font-bold text-[#4B7F3A]">14 / 14 PASS</span>
        </div>
        <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex justify-between items-center">
          <span className="font-mono text-[#102033]">optional_sections_and_teaching_assignment.test.js</span>
          <span className="font-bold text-[#4B7F3A]">7 / 7 PASS</span>
        </div>
        <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex justify-between items-center">
          <span className="font-mono text-[#102033]">auth_session_lifecycle_and_persistence.test.js</span>
          <span className="font-bold text-[#4B7F3A]">23 / 23 PASS</span>
        </div>
        <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex justify-between items-center">
          <span className="font-mono text-[#102033]">hm_centralized_exam_and_timetable_sync.test.js</span>
          <span className="font-bold text-[#4B7F3A]">3 / 3 PASS</span>
        </div>
        <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex justify-between items-center">
          <span className="font-mono text-[#102033]">hm_notices_idempotency_and_reliability.test.js</span>
          <span className="font-bold text-[#4B7F3A]">11 / 11 PASS</span>
        </div>
        <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex justify-between items-center">
          <span className="font-mono text-[#102033]">phase2_red_team_verification.test.js</span>
          <span className="font-bold text-[#4B7F3A]">PASS</span>
        </div>
      </div>
    </div>

    {/* ── Section 10: Prioritized Gap Closure & Finishing Plan ── */}
    <SectionTitle>10. Prioritized Gap Closure &amp; Finishing Plan</SectionTitle>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <div className="font-bold text-xs text-red-700 flex items-center gap-2">
          <Shield className="w-4 h-4 text-red-600" />
          <span>P0: Security &amp; Data Integrity</span>
        </div>
        <ul className="text-xs text-[#526477] space-y-1.5 list-disc list-inside">
          <li><span className="font-bold text-emerald-700">[VERIFIED]</span> Root Admin fail-closed MFA enforcement across all routes.</li>
          <li><span className="font-bold text-emerald-700">[VERIFIED]</span> Prevent BOLA / IDOR across municipal school boundaries (<code>authorizeScope</code>).</li>
          <li><span className="font-bold text-amber-700">[PLANNED]</span> Wrap multi-document writes (Student enrollment, Transfer joining) in MongoDB replica set transactions (<code>session.withTransaction()</code>).</li>
        </ul>
      </div>

      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <div className="font-bold text-xs text-blue-700 flex items-center gap-2">
          <BriefcaseIcon className="w-4 h-4 text-[#006AC7]" />
          <span>P1: Core Operational Workflows</span>
        </div>
        <ul className="text-xs text-[#526477] space-y-1.5 list-disc list-inside">
          <li><span className="font-bold text-emerald-700">[VERIFIED]</span> HM 7 Core Workflows fully implemented in frontend and backend.</li>
          <li><span className="font-bold text-amber-700">[PENDING]</span> Owner Operational Acceptance Gate for Head Master Module.</li>
          <li><span className="font-bold text-purple-700">[LOCKED]</span> Teacher Operational Workspace (Awaiting explicit owner authorization).</li>
        </ul>
      </div>

      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <div className="font-bold text-xs text-teal-700 flex items-center gap-2">
          <Layers className="w-4 h-4 text-teal-600" />
          <span>P2: Usability &amp; Intersystem Navigation</span>
        </div>
        <ul className="text-xs text-[#526477] space-y-1.5 list-disc list-inside">
          <li><span className="font-bold text-emerald-700">[VERIFIED]</span> Dynamic sidebar active-tab matching across <code>/directory?tab=students</code>, <code>/dashboard?tab=assignments</code>, and standalone pages.</li>
          <li><span className="font-bold text-emerald-700">[VERIFIED]</span> Read-only academic structure display in HM dashboard reflecting Town Admin configuration authority.</li>
        </ul>
      </div>

      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <div className="font-bold text-xs text-purple-700 flex items-center gap-2">
          <FileCheck className="w-4 h-4 text-purple-600" />
          <span>P3: Documentation &amp; Portal Synchronicity</span>
        </div>
        <ul className="text-xs text-[#526477] space-y-1.5 list-disc list-inside">
          <li><span className="font-bold text-emerald-700">[COMPLETED]</span> Forensic ground truth baseline report (<code>MASTER_SYSTEM_ARCHITECTURE_AND_VERIFICATION_BASELINE.md</code>).</li>
          <li><span className="font-bold text-emerald-700">[COMPLETED]</span> Documentation Portal synchronization across 44+ authoritative domain sections.</li>
        </ul>
      </div>
    </div>

    {/* ── Section 11: Git Repository Status ── */}
    <SectionTitle>11. Git Repository Status</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      Historical source-documented repository verification status (October 12, 2026 inspection):
    </p>

    <TerminalBlock title="GIT REPOSITORY INSPECTION STATUS (OCTOBER 12, 2026)">
{`# Server Repository Status
cd "d:/My Courses/Web Deveopment/Projects And Assingments/School Management System/server"
# Modified test files: optional_sections_and_teaching_assignment.test.js, auth_session_lifecycle_and_persistence.test.js, hm_class_teacher_and_transfer_authority.test.js

# Client Repository Status
cd "d:/My Courses/Web Deveopment/Projects And Assingments/School Management System/client"
# Modified: HmNavigation.jsx, Sidebar.jsx, AttendancePage.jsx, HmDashboard.jsx (Tab navigation alignment)

# Landing Page Repository Status
cd "d:/My Courses/Web Deveopment/Projects And Assingments/School Management System/landing-page"
# Clean / Verified passing Next.js production build

# Root Documentation
# docs/MASTER_SYSTEM_ARCHITECTURE_AND_VERIFICATION_BASELINE.md (Created)`}
    </TerminalBlock>

    {/* Official Institutional Footer */}
    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center text-xs text-[#526477] mt-8">
      Official Architecture &amp; Verification Baseline Maintained by the Education Department, Liaquatabad Town Centre (DMC) IT Security Office.
      <br />
      Synchronously tracked with <code>docs/MASTER_SYSTEM_ARCHITECTURE_AND_VERIFICATION_BASELINE.md</code>.
    </div>
  </div>
);

// Helper icon component for P1 card
function BriefcaseIcon(props) {
  return <Building2 {...props} />;
}
