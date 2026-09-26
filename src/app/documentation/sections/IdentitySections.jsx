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
      title="The 9 Authoritative RBAC Roles"
      badge="3. Identity, Roles & Scopes"
      subtitle="Complete specification of software roles, role levels, scope boundaries, and municipal authority definitions."
    />

    <p className="text-xs text-[#526477] leading-relaxed mb-6">
      Every user in the system is assigned exactly one primary technical RBAC role. Role levels determine hierarchy subordination, while scopes enforce data tenancy:
    </p>

    <ComparisonTable
      headers={['Role Identifier', 'Role Level', 'Default Scope', 'Primary Operational Authority']}
      rows={[
        {
          left: 'ROOT_ADMIN',
          right: 'Level 100 • GLOBAL • Platform maintainer, emergency killswitch, global disaster recovery, mandatory TOTP MFA.',
        },
        {
          left: 'SUPER_ADMIN',
          right: 'Level 90 • GLOBAL • Operational executive directorate, Town Education Officer, DDO, Chairman DMC. Final transfer approval.',
        },
        {
          left: 'ADMIN',
          right: 'Level 80 • TOWN • Municipal education officers, staff profile approvals, official circular publishing, town audits.',
        },
        {
          left: 'SUPERVISOR',
          right: 'Level 60 • ASSIGNED_SCHOOLS • Field cluster inspection officers, biometric verification, surprise visits, transfer proposals.',
        },
        {
          left: 'HM (Head Master)',
          right: 'Level 50 • SCHOOL • School building head, teacher relieving/joining certifications, student enrollment, parent verification.',
        },
        {
          left: 'TEACHER',
          right: 'Level 30 • CLASS_SECTION • Classroom instructional faculty, daily attendance entry, 700-mark exam score entry, homework assignment.',
        },
        {
          left: 'PEON',
          right: 'Level 20 • SCHOOL • Institutional operational support staff, official notice and circular view access.',
        },
        {
          left: 'STUDENT',
          right: 'Level 10 • SELF • Enrolled public school student, personal attendance review, report card PDF download, homework viewing.',
        },
        {
          left: 'PARENT',
          right: 'Level 10 • CHILD • Verified guardian, multi-ward academic monitoring, attendance alerts, official notice receipt.',
        },
      ]}
    />
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
        { left: 'Teacher Transfer Initiation', right: 'SUPERVISOR, HM, ADMIN, SUPER_ADMIN' },
        { left: 'Teacher Relieving Certification', right: 'HM (Source School), SUPER_ADMIN' },
        { left: 'Teacher Joining Confirmation', right: 'HM (Destination School), SUPER_ADMIN' },
        { left: 'Student Enrollment & GR Assignment', right: 'HM, ADMIN' },
        { left: 'Parent Ward Link Verification', right: 'HM (Physical CNIC Check), ADMIN' },
        { left: 'Daily Student Attendance Marking', right: 'TEACHER (Assigned Section), HM' },
        { left: 'Exam Marks Entry (Subject)', right: 'TEACHER (Assigned Subject), HM' },
        { left: 'Official Tabulation Sheet Lock', right: 'HM, ADMIN, SUPER_ADMIN' },
        { left: 'Marksheet PDF Generation', right: 'TEACHER, HM, STUDENT, PARENT' },
        { left: 'Student Profile Read', right: 'TEACHER (Section), HM, STUDENT, PARENT' },
        { left: 'Ward Academic & Attendance Read', right: 'PARENT (Verified Link Only)' },
        { left: 'School Circulars View', right: 'PEON, TEACHER, HM, ADMIN, SUPER_ADMIN, ROOT_ADMIN' },
        { left: 'Free Sindh Textbook Download', right: 'PUBLIC (Unauthenticated / All)' },
        { left: 'Password Reset via Admin', right: 'ADMIN (Target Level < 80), ROOT_ADMIN' },
        { left: 'Audit Trail Inspection', right: 'ADMIN, SUPER_ADMIN, ROOT_ADMIN' },
      ]}
    />
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
        desc="An Admin (Level 60) cannot suspend or reset another Admin (Level 60). Inter-peer mutations require SUPER_ADMIN (80) or ROOT_ADMIN (100)."
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
        { left: 'GLOBAL', right: 'ROOT_ADMIN • No tenant filter applied; full multi-school visibility.' },
        { left: 'TOWN', right: 'SUPER_ADMIN, ADMIN • Automatically filtered by { townId: actor.townId }.' },
        { left: 'ASSIGNED_SCHOOLS', right: 'SUPERVISOR • Automatically filtered by { schoolId: { $in: actor.assignedSchools } }.' },
        { left: 'SCHOOL', right: 'HM • Automatically filtered by { schoolId: actor.schoolId }.' },
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
