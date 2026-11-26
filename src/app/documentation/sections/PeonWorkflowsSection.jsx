'use client';

import React from 'react';
import {
  Briefcase,
  ClipboardCheck,
  Calendar,
  FileText,
  Clock,
  Shield,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Building2,
  IdCard,
  Compass,
  Bug,
  Layers,
  KeyRound,
} from 'lucide-react';

import {
  DocHeader,
  SectionTitle,
  InfoCard,
  Steps,
  ComparisonTable,
  TerminalBlock,
  Callout,
  FaqItem,
} from '../components/DocPrimitives';

const scrollToSubSection = (elementId) => {
  if (typeof document !== 'undefined') {
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
};

export const PeonWorkflowsSection = () => (
  <div id="peon-portal">
    <DocHeader
      title="Support Staff &amp; Peon Portal — Operational Manual &amp; Architecture"
      badge="5. Core Operational Engines"
      subtitle="Unified self-service portal for lower-grade school and office support staff (Peon / Naib Qasid, Chowkidar, Mali, Sweeper / Sanitary Worker, Lab Attendant, Junior Clerk) built on BPS-01–04 employment foundations."
    />

    {/* 4-Metric HUD */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">TECHNICAL ACCESS TIER</div>
        <div className="text-sm font-black text-[#4B7F3A]">ROLES.PEON &bull; Level 20</div>
        <div className="text-xs text-[#526477]">Shared Support Staff Tier</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">IDENTITY SEPARATION</div>
        <div className="text-sm font-black text-[#4B7F3A]">Role &ne; Designation &ne; BPS</div>
        <div className="text-xs text-[#526477]">BPS-01 to BPS-22 Metadata</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">ATTENDANCE GOVERNANCE</div>
        <div className="text-sm font-black text-[#4B7F3A]">School HM vs Office Terminal</div>
        <div className="text-xs text-[#526477]">Category-Enforced Routing</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">SECURITY VERIFICATION</div>
        <div className="text-sm font-black text-emerald-700">14 / 14 Dedicated Tests PASS</div>
        <div className="text-xs text-[#526477]">Scope &amp; Ceiling Hardened</div>
      </div>
    </div>

    {/* Quick Jump TOC */}
    <div className="p-4 sm:p-5 rounded-2xl bg-[#F2F8EF]/70 border border-[#C9DFBC] mb-8">
      <div className="flex items-center gap-2 mb-3">
        <Compass className="w-4 h-4 text-[#4B7F3A]" />
        <h2 className="text-xs font-extrabold uppercase tracking-wider text-[#102033]">
          In This Guide — Jump to Section
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs">
        {[
          { id: 'peon-why', label: '1. What Was Built & Why' },
          { id: 'peon-how', label: '2. How Registration, Attendance & Leave Work' },
          { id: 'peon-challenges', label: '3. Problems Encountered & Security Fixes' },
          { id: 'peon-roles', label: '4. Role-Specific Operational Guides' },
          { id: 'peon-verification', label: '5. Automated Verification & Safeguards' },
        ].map((jumpItem) => (
          <button
            key={jumpItem.id}
            type="button"
            onClick={() => scrollToSubSection(jumpItem.id)}
            className="text-left px-3 py-2 rounded-xl bg-white hover:bg-[#E3F0DC]/70 border border-[#C9DFBC]/70 font-bold text-[#102033] transition cursor-pointer"
          >
            {jumpItem.label}
          </button>
        ))}
      </div>
    </div>

    {/* Section 1: What & Why */}
    <div id="peon-why" className="scroll-mt-6">
      <SectionTitle>1. What Was Built &amp; Why It Was Needed</SectionTitle>
      <p className="text-xs text-[#526477] leading-relaxed mb-4">
        Municipal schools and the Town Education Office rely on non-teaching support personnel (Peon / Naib Qasid, Chowkidar, Mali, Sweeper / Sanitary Worker, Lab Attendant, Junior Clerk). Instead of creating separate fragmented portals or duplicate RBAC roles per job title, the platform retains a single technical non-teaching authority tier (<code>ROLES.PEON</code>, Level 20) while separating descriptive <code>designation</code>, pay scale (<code>bpsScale</code>, e.g. <code>BPS-01</code> to <code>BPS-04</code>), and operational category (<code>STAFF_CATEGORY.SCHOOL_STAFF</code> vs. <code>STAFF_CATEGORY.OFFICE_STAFF</code>).
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <InfoCard
          icon={<Briefcase className="w-5 h-5" />}
          color="green"
          title="Dedicated Self-Service Workspace"
          desc="PeonDashboard.jsx provides 5 mobile-first tabs: Overview, Daily Arrival & Monthly Attendance, Leave (CL/EL), Official Circulars, and Activity History."
        />
        <InfoCard
          icon={<KeyRound className="w-5 h-5" />}
          color="emerald"
          title="BPS &amp; Designation Capture"
          desc="Staff signup captures controlled support designations and official pay scale (BPS-01–04 or higher) without blocking teaching faculty workflows."
        />
        <InfoCard
          icon={<ShieldCheck className="w-5 h-5" />}
          color="purple"
          title="BFF Aggregation &amp; Closure Sync"
          desc="GET /api/v1/staff-attendance/my-workspace hydrates profile, school closures, monthly muster, and CL quota in one scoped call."
        />
      </div>
    </div>

    {/* Section 2: How It Works */}
    <div id="peon-how" className="scroll-mt-6">
      <SectionTitle>2. How Support Staff Workflows Operate End-to-End</SectionTitle>
      <Steps
        items={[
          {
            title: 'Step 1 — Self-Registration with BPS & Designation (/register-teacher / /register-staff)',
            desc: 'Support staff select Non-Teaching Support Staff, choose their official designation (Peon / Naib Qasid, Chowkidar, Mali, Sweeper / Sanitary Worker, etc.) and pay scale (BPS-01–04), verify email via OTP, and enter PENDING_APPROVAL.',
          },
          {
            title: 'Step 2 — Head Master / Office Verification (/approvals)',
            desc: 'Head Master inspects CNIC, Employee ID, Designation, and BPS scale for applicants claiming their school and approves activation, assigning User.schoolId and STAFF_CATEGORY.SCHOOL_STAFF.',
          },
          {
            title: 'Step 3 — Category-Aware Daily Attendance',
            desc: 'School-based support staff submit daily physical arrival via TeacherArrivalAttendanceBanner (POST /api/v1/staff-attendance/submit), which Head Masters approve or decline under the 5-minute relaxation rule. Office-based support staff cannot self-submit (403 anti-fraud guard) and are marked at the Town Office Terminal.',
          },
          {
            title: 'Step 4 — Leave (CL/EL), Circulars &amp; Holidays',
            desc: 'Support staff submit Casual Leave (up to 3 consecutive days from a 24-day annual quota) or Earned Leave (3+ days) via CasualLeaveQuotaCard, view school/town circulars matching NON_TEACHING_STAFF / OFFICE_STAFF, and check scoped Holiday & Weekly-Off calendars.',
          },
        ]}
      />

      <TerminalBlock title="SUPPORT STAFF BFF &amp; ATTENDANCE ROUTING FLOW">
{`Staff Login (role: PEON, Level 20)
 ├── DashboardRouter.jsx ──▶ PeonDashboard.jsx
 │    └── GET /api/v1/staff-attendance/my-workspace (Self-scoped + School Closure aware)
 ├── School Staff (STAFF_CATEGORY.SCHOOL_STAFF)
 │    ├── POST /api/v1/staff-attendance/submit ──▶ PENDING_APPROVAL ──▶ School HM Approves/Rejects
 │    └── POST /api/v1/leave/submit (CL/EL) ──▶ HM Approves CL / Forwards EL to Town Admin
 └── Office Staff (STAFF_CATEGORY.OFFICE_STAFF)
      ├── Self-submit blocked (403) ──▶ Marked by Super Admin via OfficeAttendanceTerminalTab
      └── Views attendance log, CL/EL balance, TOWN circulars (OFFICE_STAFF), and Holidays`}
      </TerminalBlock>
    </div>

    {/* Section 3: Challenges & Security Fixes */}
    <div id="peon-challenges" className="scroll-mt-6">
      <SectionTitle>3. Real Problems Found &amp; Architectural Solutions Applied</SectionTitle>
      <ComparisonTable
        headers={['Issue Identified During Code Audit', 'Security / Operational Risk', 'Implemented Solution']}
        rows={[
          {
            left: '1. Missing Holiday & Weekly-Off Scoping for PEON',
            right: 'holidayController.js omitted ROLES.PEON from school/town $or filters in handleGetHolidays and handleGetWeeklyOffPatterns, allowing cross-school/cross-town holiday data exposure. • FIX: Added ROLES.PEON to strict town + school scoping (and TOWN-only when schoolId is null).',
          },
          {
            left: '2. Permission Default vs. Ceiling Conflict',
            right: 'permissions.js granted LEAVE_VIEW, LEAVE_SUBMIT, and STAFF_ATTENDANCE_SUBMIT in ROLE_DEFAULT_PERMISSIONS[PEON], while ROLE_PERMISSION_CEILING[PEON] omitted them from the allowed set. • FIX: Synchronized ceiling to explicitly allow only those 4 self-service permissions while blocking all teaching/admin capabilities.',
          },
          {
            left: '3. Client Route Leakage on /attendance, /documents &amp; /approvals',
            right: 'PEON lacked a dedicated DashboardRouter branch and landed on the Admin Attendance Workspace (/attendance) and empty export view (/documents). • FIX: Added PeonDashboard.jsx plus deterministic redirects for PEON across DashboardRouter, AttendancePage, DocumentsPage, PendingApprovalsPage, and NotificationDropdown.',
          },
          {
            left: '4. False BPS-14 Fallback &amp; Missing Signup BPS',
            right: 'staffProfileController.js defaulted missing bpsScale to "BPS-14" even for non-teaching staff, and signup lacked bpsScale capture. • FIX: Added BPS_SCALES capture at signup and replaced false fallback with null for non-teaching records without BPS.',
          },
          {
            left: '5. Office Peon Circular Audience Gap',
            right: 'documentController.js and announcementController.js only matched NON_TEACHING_STAFF for ROLES.PEON, hiding OFFICE_STAFF town circulars. • FIX: Added OFFICE_STAFF audience matching when staffCategory === OFFICE_STAFF (without dropping cross-school isolation).',
          },
        ]}
      />
    </div>

    {/* Section 4: Role Guides */}
    <div id="peon-roles" className="scroll-mt-6">
      <SectionTitle>4. Operational Guides Across All Municipal Roles</SectionTitle>
      <ComparisonTable
        headers={['Role', 'Interaction with Support Staff Workflows', 'Governance Boundary']}
        rows={[
          {
            left: 'Root Admin / Super Admin',
            right: 'Marks daily attendance for Town Office support staff on OfficeAttendanceTerminalTab, approves Earned Leave, oversees town circulars and audit trails.',
          },
          {
            left: 'Town Admin (DDO)',
            right: 'Approves town-level staff onboarding, sanctions Earned Leave (EL) forwarded by HMs, initiates inter-school support staff transfers, publishes TOWN circulars.',
          },
          {
            left: 'Supervisor',
            right: 'Inspects assigned school staff rosters (including Peons, Chowkidars, Malis) and initiates inter-school transfers within assigned cluster.',
          },
          {
            left: 'Head Master (HM)',
            right: 'Reviews and approves pending support staff registrations for their school, verifies daily arrival attendance (with 5-minute rule), approves CL (<=3 days), forwards EL, and issues SCHOOL circulars to NON_TEACHING_STAFF.',
          },
          {
            left: 'Teacher',
            right: 'Strictly isolated from managing or approving support staff attendance, leave, or approvals.',
          },
          {
            left: 'Support Staff (PEON, Level 20)',
            right: 'Uses PeonDashboard for daily campus arrival check-in (if school-posted), monthly attendance log, CL/EL applications, authorized circulars, scoped holidays, personal profile, and activity history.',
          },
          {
            left: 'Student &amp; Parent',
            right: 'Zero access to support staff profiles, attendance records, or leave queues.',
          },
        ]}
      />
    </div>

    {/* Section 5: Verification */}
    <div id="peon-verification" className="scroll-mt-6">
      <SectionTitle>5. Automated Security &amp; Workflow Verification</SectionTitle>
      <Callout type="success" title="VERIFIED BY PEON PORTAL SECURITY &amp; REGRESSION SUITES">
        Verified via dedicated suite <code>server/tests/peon_portal_and_support_staff.test.js</code> (14/14 PASS) alongside <code>staff_attendance_phases_1_2_3.test.js</code> (28/28 PASS), <code>leave_and_staff_attendance_lifecycle.test.js</code> (162/162 PASS), <code>town_holiday_and_timing_policy.test.js</code> (52/52 PASS), <code>staff_profile_and_approval_workflow.test.js</code> (33/33 PASS), and <code>staff_profile_controller_integration.test.js</code> (95/95 PASS).
      </Callout>
    </div>
  </div>
);
