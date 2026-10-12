import React from 'react';
import {
  Users,
  Award,
  Shield,
  Layers,
  Clock,
  KeyRound,
  CheckCircle2,
  AlertTriangle,
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

export const RolesCatalogueSection = () => (
  <div>
    <DocHeader
      title="The 9 Authoritative Municipal Roles: Authority Catalogue & Operational Overviews"
      badge="3. Identity, Roles & Scopes"
      subtitle="Complete specification of all 9 institutional software roles, hierarchy ceilings, route permissions, and operational guidance across Liaquatabad Town."
    />

    {/* 4-Metric HUD */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">DEFINED ROLES</div>
        <div className="text-sm font-black text-[#006AC7]">9 Municipal Roles</div>
        <div className="text-xs text-[#526477]">Root Admin to Parent</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">AUTHORITY LEVELS</div>
        <div className="text-sm font-black text-[#4B7F3A]">7 Hierarchy Ceilings</div>
        <div className="text-xs text-[#526477]">Level 10 to Level 100</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">TENANT ISOLATION</div>
        <div className="text-sm font-black text-purple-600">7 Data Scopes</div>
        <div className="text-xs text-[#526477]">Global to Child Scope</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">ATOMIC PERMISSIONS</div>
        <div className="text-sm font-black text-amber-600">31 Capabilities</div>
        <div className="text-xs text-[#526477]">Enforced by Zod &amp; RBAC</div>
      </div>
    </div>

    <p className="text-xs text-[#526477] leading-relaxed mb-6">
      Every user in the system is assigned exactly one primary technical RBAC role. Role levels determine hierarchy subordination, while scopes enforce data tenancy. Below is the authoritative role catalog followed by operational overviews and handbook navigation for each role:
    </p>

    <SectionTitle>Authoritative Role &amp; Permission Ceiling Matrix</SectionTitle>
    <ComparisonTable
      headers={['Role Identifier', 'Level & Scope', 'Default Perms', 'Permission Ceilings & Security Guards', 'Status & Evidence']}
      rows={[
        {
          left: '1. ROOT_ADMIN',
          right: 'Level 100 • GLOBAL • 31 Perms (All) • Supreme platform governance. Dedicated web dashboard (RootAdminDashboard.jsx) with stealth outage gate, user account controls, and audit logs behind mandatory RFC 6238 TOTP MFA. Zero Web UI for Account Creation (CLI-only via createRootAdmin.js script) • Status: IMPLEMENTED & TESTED (root_admin_mfa_suite: 107/107 PASS).',
        },
        {
          left: '2. SUPER_ADMIN',
          right: 'Level 90 • GLOBAL • 31 Perms (All) • Municipal Director, Town Education Officer, DDO. Cannot self-promote to ROOT_ADMIN; cannot disable last active Super Admin. Enforced by authorizeHierarchy • Status: IMPLEMENTED & TESTED (authority_model_suite: AM-07 to AM-16 PASS).',
        },
        {
          left: '3. ADMIN (Town Admin)',
          right: 'Level 80 • TOWN • 23 Perms • Operational town administration, school provisioning, staff profile approvals, teacher transfer initiation. Forbidden: users.assign_role, ROOT_ADMIN assignment • Status: IMPLEMENTED & TESTED (authority_model_suite: AM-17 to AM-20 PASS).',
        },
        {
          left: '4. SUPERVISOR',
          right: 'Level 60 • ASSIGNED_SCHOOLS • 13 Perms • Field cluster inspection officer. Unannounced school visits, BOLA-isolated cluster scoping, inspection lifecycle management (DRAFT to CLOSED). Physical GPS geofencing (<150m) is PLANNED / ROADMAP • Status: IMPLEMENTED & TESTED (supervisor_bola_security_remediation: 12/12 PASS).',
        },
        {
          left: '5. HM (Head Master)',
          right: 'Level 50 • SCHOOL • 17 Perms • Institutional building executive. Student enrollment, strike-off, single-cohort duties, marks verification, Legal Tabulation Sheet, rain closures. Forbidden: Transfer initiation, structural setup, fees • Status: IMPLEMENTED & TESTED (Owner Operational Sign-Off PENDING; 173 tests across 10 files).',
        },
        {
          left: '6. TEACHER',
          right: 'Level 30 • CLASS_SECTION • 8 Perms • Classroom instructional faculty. Daily attendance, subject marks entry. Status strictly locked by explicit owner direction • Status: PLANNED / LOCKED (teacher_operational_workspace_suite: 29/29 PASS).',
        },
        {
          left: '7. PEON (Support Staff)',
          right: 'Level 20 • SCHOOL • 1 Perm (documents.view) • Institutional support staff. View access to official school circulars and notices. Forbidden: All administrative, marks, and transfer operations • Status: IMPLEMENTED & TESTED.',
        },
        {
          left: '8. STUDENT',
          right: 'Level 10 • SELF • 4 Perms • Enrolled public school student. View personal attendance, download published A4 marksheet PDF, view homework and circulars. Unpublished exam results strictly hidden • Status: IMPLEMENTED & TESTED (student_workspace_suite: 25/25 PASS).',
        },
        {
          left: '9. PARENT',
          right: 'Level 10 • CHILD • 4 Perms • Verified legal guardian. 3-step ward claim, phone OTP, physical HM verification. Multi-ward switcher, published marksheet download, attendance tracking • Status: IMPLEMENTED & TESTED (74 tests across 5 Parent suites).',
        },
      ]}
    />

    <SectionTitle>Operational Overviews &amp; Handbook Status for Municipal Roles</SectionTitle>
    <div className="space-y-4 my-6">
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-black text-[#006AC7]">ROLE 1 &amp; 2: ROOT_ADMIN &amp; SUPER_ADMIN (DIRECTORATE GOVERNANCE)</span>
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-[#006AC7] border border-blue-200">GLOBAL SCOPE • OPERATIONAL GUIDE</span>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>Purpose:</strong> Supreme municipal oversight, policy governance, and disaster recovery. Root Admin manages platform killswitches and emergency maintenance via CLI / break-glass tokens with mandatory RFC 6238 TOTP MFA, and accesses privileged web controls via <code>RootAdminDashboard.jsx</code>. Super Admin serves as executive Municipal Director / Town Education Officer (DDO).
        </p>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>Key Operations:</strong> Provisioning and disabling Super Admin accounts (with final-admin lockout protection), approving inter-school transfers across Liaquatabad Town clusters, issuing town-wide circulars, declaring gazetted holidays, and inspecting audit trails.
        </p>
      </div>

      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-black text-[#4B7F3A]">ROLE 3: ADMIN (TOWN EDUCATION OFFICER / DDO)</span>
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-[#4B7F3A] border border-emerald-200">TOWN SCOPE • OPERATIONAL GUIDE</span>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>Purpose:</strong> Operational administration of Liaquatabad Town Centre schools. Manages school profiles, initiates inter-school staff transfers (POST /api/v1/transfers), provisions academic classes, sections, and subjects, and verifies staff onboarding dossiers.
        </p>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>Security Boundaries:</strong> Subordination ceiling strictly prohibits mutating accounts at Level 80 or above. Scoped strictly to townId. Cannot grant ROOT_ADMIN role.
        </p>
      </div>

      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-black text-purple-700">ROLE 4: SUPERVISOR (CLUSTER FIELD OVERSIGHT)</span>
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200">ASSIGNED_SCHOOLS SCOPE • OPERATIONAL GUIDE</span>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>Purpose:</strong> Unannounced physical surveillance of cluster schools. Conducts on-site inspections, physical headcount verification, WASH/potable water audits, and infrastructure deficiency escalation.
        </p>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>Security Boundaries:</strong> BOLA-hardened query scoping strictly rejects inspections or record access for schools outside the supervisor&apos;s assignedSchools array. Lifecycle status enforcement (DRAFT to CLOSED) with AuditLog diff tracking on every mutation. (Note: Automated device GPS geofencing &lt;150m is a future roadmap integration).
        </p>
      </div>

      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-black text-amber-600">ROLE 5: HEAD MASTER (HM — BUILDING EXECUTIVE)</span>
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-600 border border-amber-200">SCHOOL SCOPE • COMPLETE HANDBOOK • APPROVAL PENDING</span>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>Operational Handbook:</strong> Fully implemented across 14 dedicated workspace tabs and 7 core institutional workflows. See the dedicated, exhaustive operational reference section below: <a href="#hm-workflows" className="text-[#006AC7] font-semibold underline">Head Master 14-Tab Operational Manual &amp; 7 Workflows</a>.
        </p>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>Security Boundaries:</strong> Single-school BOLA quarantine (schoolId). HM CANNOT initiate transfers (Town Admin authority only). Classes and subjects are read-only (Town Admin configured). Zero fee handling under free public education mandate. Zero hard deletions on student/faculty records.
        </p>
      </div>

      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-black text-red-600">ROLE 6: TEACHER (CLASSROOM INSTRUCTIONAL FACULTY)</span>
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-50 text-red-600 border border-red-200">CLASS_SECTION SCOPE • PLANNED / LOCKED</span>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>Current Status:</strong> Strictly locked by explicit municipal owner direction. Workspace access, routing, and development are frozen until the Head Master module receives formal operational owner sign-off.
        </p>
      </div>

      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-black text-slate-700">ROLE 7: PEON / NON-TEACHING SUPPORT STAFF</span>
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">SCHOOL SCOPE • OPERATIONAL OVERVIEW</span>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>Purpose:</strong> Institutional support staff. Receives institutional school scope with read-only access to official notices and circulars (documents.view). Forbidden from modifying student, academic, marks, or administrative records.
        </p>
      </div>

      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-black text-[#006AC7]">ROLE 8: STUDENT (BENEFICIARY SELF WORKSPACE)</span>
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-[#006AC7] border border-blue-200">SELF SCOPE • PORTAL OVERVIEW</span>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>Purpose:</strong> Public school student self-service portal (6 tabs in StudentDashboard.jsx): Overview, Examination &amp; Official Marksheet (with 1-click A4 PDF download), My Homework, Attendance Intelligence, Official Circulars, and Digital Student ID Card. See <a href="#student-management" className="text-[#006AC7] font-semibold underline">Student Management Engine</a>.
        </p>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>Security Invariants:</strong> Identity derived exclusively from authenticated JWT request.user._id. Marksheets strictly shielded unless status === &apos;PUBLISHED&apos;. Peer student IDOR attempts trigger 403 Forbidden and immutable security audit logs.
        </p>
      </div>

      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-black text-[#4B7F3A]">ROLE 9: PARENT (VERIFIED GUARDIAN CONDUIT)</span>
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-[#4B7F3A] border border-emerald-200">CHILD SCOPE VIA VERIFIED LINK • PORTAL OVERVIEW</span>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>Purpose:</strong> Legal guardian monitoring portal across 3 verified waves: Anti-enumeration ward lookup $\rightarrow$ 6-digit cryptographic OTP challenge dispatched to official contact on school record $\rightarrow$ Head Master physical NADRA B-Form / CNIC inspection. See <a href="#parent-portal" className="text-[#006AC7] font-semibold underline">Parent Portal Architecture</a>.
        </p>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>Security Invariants:</strong> Enforced by verifyParentWardLink middleware. Parent only receives data for students with status === &apos;VERIFIED&apos; in ParentStudentLink. Cross-parent IDOR blocked with 403 and PARENT_CROSS_WARD_ACCESS_BLOCKED audit logging.
        </p>
      </div>
    </div>
  </div>
);

export const CapabilityMatrixSection = () => (
  <div>
    <DocHeader
      title="31-Granular Permission Master Matrix"
      badge="3. Identity, Roles & Scopes"
      subtitle="Exhaustive capability permissions across all 9 roles enforced by server-side authorization middleware."
    />

    <ComparisonTable
      headers={['Core System Capability', 'Allowed Roles & Constraints']}
      rows={[
        { left: 'Platform Maintenance & Seed Scripts', right: 'ROOT_ADMIN only' },
        { left: 'Global Municipal Outage Mode', right: 'ROOT_ADMIN only' },
        { left: 'Final Teacher Transfer Approval', right: 'ROOT_ADMIN, SUPER_ADMIN' },
        { left: 'Town-Wide Gazetted Circulars', right: 'ROOT_ADMIN, SUPER_ADMIN, ADMIN' },
        { left: 'Staff Creation (Below Own Level)', right: 'ROOT_ADMIN, SUPER_ADMIN, ADMIN' },
        { left: 'School Inspection Audit Submission', right: 'SUPERVISOR, ADMIN, SUPER_ADMIN' },
        { left: 'Inter-School Transfer Initiation', right: 'SUPERVISOR, ADMIN, SUPER_ADMIN (HM cannot initiate inter-school transfers)' },
        { left: 'Teacher Relieving Certification', right: 'HM (Source School), SUPER_ADMIN' },
        { left: 'Teacher Joining Confirmation', right: 'HM (Destination School), SUPER_ADMIN' },
        { left: 'Student Enrollment & GR Assignment', right: 'HM, ADMIN' },
        { left: 'Parent Ward Link Verification', right: 'HM (Physical CNIC Check), ADMIN' },
        { left: 'Daily Student Attendance Marking', right: 'TEACHER (Assigned Section - LOCKED), HM' },
        { left: 'Exam Marks Entry (Subject)', right: 'TEACHER (Assigned Subject - LOCKED), HM' },
        { left: 'Official Tabulation Sheet Lock', right: 'HM, ADMIN, SUPER_ADMIN' },
        { left: 'Marksheet PDF Generation', right: 'HM, STUDENT (Published Only), PARENT (Verified Link)' },
        { left: 'Student Profile Read', right: 'HM, STUDENT (Self Only), PARENT (Verified Ward Only)' },
        { left: 'Ward Academic & Attendance Read', right: 'PARENT (Verified Link Only)' },
        { left: 'School Circulars View', right: 'PEON, TEACHER, HM, ADMIN, SUPER_ADMIN, ROOT_ADMIN' },
        { left: 'Free Sindh Textbook Download', right: 'PUBLIC (Unauthenticated / All)' },
        { left: 'Password Reset via Admin', right: 'ADMIN (Target Level < 80), ROOT_ADMIN' },
        { left: 'Audit Trail Inspection', right: 'ADMIN, SUPER_ADMIN, ROOT_ADMIN' },
      ]}
    />

    <Callout type="security" title="OPERATIONAL DIRECTORY VS CENTRAL ACCOUNT GOVERNANCE">
      <strong>/directory</strong> (School-Scoped Operational Workspace): Head Masters and teachers manage student rosters and daily attendance.<br />
      <strong>/users</strong> (Central Municipal Governance): Central Town Administration (Admin/Super Admin) manages credentials and platform lifecycle.
    </Callout>
  </div>
);

export const SubordinationSection = () => (
  <div>
    <DocHeader
      title="Administrative Subordination Rules & Immunity Guarantees"
      badge="3. Identity, Roles & Scopes"
      subtitle="Strict mathematical rules preventing lateral or upward privilege escalation across the municipal hierarchy."
    />

    <Callout type="security" title="THE SUBORDINATION FORMULA">
      In <code>server/src/middlewares/authorizeHierarchy.js</code>:
      <br />
      An actor with <code>roleLevel_A</code> attempting to mutate an account with <code>roleLevel_T</code> is allowed IF AND ONLY IF:
      <br />
      <strong>roleLevel_A &gt; roleLevel_T</strong>
      <br />
      Hierarchical Weightings: ROOT_ADMIN (100) &gt; SUPER_ADMIN (90) &gt; ADMIN (80) &gt; SUPERVISOR (60) &gt; HM (50) &gt; TEACHER (30) &gt; PEON (20) &gt; STUDENT / PARENT (10).
    </Callout>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
      <InfoCard
        icon={<Shield className="w-5 h-5" />}
        color="red"
        title="Root Admin Immunity"
        desc="Root Admin (Level 100) cannot be edited, demoted, or suspended by any user. Any route attempting to modify Root Admin throws 403 Forbidden."
      />
      <InfoCard
        icon={<AlertTriangle className="w-5 h-5" />}
        color="amber"
        title="Anti-Self-Demotion"
        desc="Administrators cannot demote or suspend their own accounts via the API to prevent accidental municipal lockout."
      />
      <InfoCard
        icon={<CheckCircle2 className="w-5 h-5" />}
        color="emerald"
        title="Lateral Protection"
        desc="An Admin (Level 80) cannot suspend or reset another Admin (Level 80). Inter-peer mutations require SUPER_ADMIN (Level 90) or ROOT_ADMIN (Level 100)."
      />
    </div>
  </div>
);

export const DataScopesSection = () => (
  <div>
    <DocHeader
      title="The 7 Geographic & Institutional Data Scopes"
      badge="3. Identity, Roles & Scopes"
      subtitle="How the scope engine mathematically restricts database queries to prevent cross-school data tampering."
    />

    <ComparisonTable
      headers={['Data Scope', 'Authorized Role(s)', 'MongoDB Query Filter Injected by BFF']}
      rows={[
        { left: 'GLOBAL', right: 'ROOT_ADMIN, SUPER_ADMIN • No tenant filter applied; full multi-school municipal visibility.' },
        { left: 'TOWN', right: 'ADMIN • Automatically filtered by { townId: actor.townId }.' },
        { left: 'ASSIGNED_SCHOOLS', right: 'SUPERVISOR • Automatically filtered by { schoolId: { $in: actor.assignedSchools } }.' },
        { left: 'SCHOOL', right: 'HM, PEON • Automatically filtered by { schoolId: actor.schoolId }.' },
        { left: 'CLASS_SECTION', right: 'TEACHER • Filtered by { classId: actor.classId, sectionId: actor.sectionId }.' },
        { left: 'SELF', right: 'STUDENT • Filtered strictly by { studentId: actor._id }.' },
        { left: 'CHILD', right: 'PARENT • Filtered strictly by { studentId: { $in: verifiedWardIds } }.' },
      ]}
    />
  </div>
);

export const AccountLifecycleSection = () => (
  <div>
    <DocHeader
      title="Account Lifecycle State Machine"
      badge="3. Identity, Roles & Scopes"
      subtitle="Strict account status transitions governing registration, activation, suspension, and deactivation."
    />

    <TerminalBlock title="ACCOUNT LIFECYCLE FINITE STATE MACHINE">
{`    ┌─────────────────┐
    │     PENDING     │ (Self-registration: Teacher / Student / Parent)
    └────────┬────────┘
             │ Verified by HM or OTP
             ▼
    ┌─────────────────┐
    │     ACTIVE      │ ◄──────────┐
    └────────┬────────┘            │
             │                     │ Reinstated by Admin
             ├─────────────────────┼─────────────────────┐
             │ Infraction / Audit  │ Discharged / Leave  │
             ▼                     │                     ▼
    ┌─────────────────┐            │            ┌─────────────────┐
    │    SUSPENDED    │────────────┘            │    INACTIVE     │
    └─────────────────┘                         └─────────────────┘
    (Login rejected: 403)                       (Read-only archive)`}
    </TerminalBlock>
  </div>
);

