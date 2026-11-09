import React from 'react';
import {
  Shield,
  Building2,
  Users,
  GraduationCap,
  ClipboardCheck,
  TrendingUp,
  ArrowRightLeft,
  Clock,
  FileText,
  Calendar,
  IdCard,
  CheckCircle2,
  AlertTriangle,
  Eye,
  Briefcase,
  Megaphone,
  Layers,
  Award,
  Zap,
  Lock,
  FileCheck,
  Search,
  School,
  XCircle,
} from 'lucide-react';

import {
  DocHeader,
  SectionTitle,
  InfoCard,
  ComparisonTable,
  Callout,
  Steps,
  FaqItem,
} from '../components/DocPrimitives';

export const AdminWorkflowsSection = () => (
  <div id="admin-operational-workflows">
    <DocHeader
      title="Town Admin Operational Manual & Governance Guide"
      badge="5. Core Operational Engines"
      subtitle="Complete operational guide for Town Administrators (such as Town Education Officers and Drawing & Disbursing Officers) governing municipal schools, faculty rosters, inter-school transfers, attendance oversight, centralized board exams, town circulars, and calendar management across Town Municipal Corporation (TMC) Liaquatabad."
    />

    {/* Metadata Ribbon */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">ROLE</div>
        <div className="text-sm font-black text-[#102033]">TOWN ADMINISTRATOR</div>
        <div className="text-xs text-[#526477]">Town Education Officer / DDO</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">JURISDICTION</div>
        <div className="text-sm font-black text-[#006AC7]">TOWN-WIDE SCOPE</div>
        <div className="text-xs text-[#526477]">Authorized Municipal Town</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">WORKSPACE STATUS</div>
        <div className="text-sm font-black text-[#4B7F3A]">ACTIVE &amp; VERIFIED</div>
        <div className="text-xs text-[#526477]">8 Dedicated Modules Active</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">GOVERNANCE TIER</div>
        <div className="text-sm font-black text-purple-600">MUNICIPAL EXECUTIVE</div>
        <div className="text-xs text-[#526477]">Subordinate Staff &amp; Schools</div>
      </div>
    </div>

    {/* ── Section 1: The Town Administrator Role & Mission ── */}
    <SectionTitle>1. Understanding the Town Administrator Role</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      In the municipal governance structure of Liaquatabad Town, a <strong>Town Administrator</strong> (such as the Town Education Officer or Drawing &amp; Disbursing Officer) is the chief operational executive for public education within the town. Town Admins oversee all municipal schools, manage teaching and non-teaching personnel, coordinate inter-school faculty transfers, approve official Earned Leave, publish centralized announcements, declare town-wide weather emergencies, and monitor standardized examination results.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      {/* 1.1 Authorized Administrative Authority */}
      <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-3">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
          <CheckCircle2 className="w-4 h-4 text-[#4B7F3A]" />
          <h4 className="font-bold text-xs text-[#102033] uppercase tracking-wider">
            1.1 Authorized Administrative Powers
          </h4>
        </div>
        <ul className="text-xs text-[#526477] space-y-2 list-disc list-inside leading-relaxed">
          <li>
            <strong>Municipal School Governance:</strong> Register new institutions, update school profiles, and configure standard operating shifts and attendance timing windows.
          </li>
          <li>
            <strong>Personnel &amp; Duty Management:</strong> Manage subordinate personnel (Headmasters, Supervisors, Teachers, and Support Staff), activate or suspend accounts with mandatory justification, and assign cluster supervision duties.
          </li>
          <li>
            <strong>Inter-School Faculty Transfers:</strong> Initiate official transfer directives, monitor relieving and joining confirmations, and exercise exclusive authority to cancel transfer orders.
          </li>
          <li>
            <strong>Two-Tier Earned Leave Approvals:</strong> Review and grant final statutory approval for Earned Leave forwarded through proper channels by school Headmasters.
          </li>
          <li>
            <strong>Centralized Examination Oversight:</strong> Provision Elementary Board exam schedules, oversee tabulation sheets, and verify published school results.
          </li>
          <li>
            <strong>Town-Level Directives:</strong> Broadcast official announcements with targeted audience delivery (All Users, Staff, Teachers, HMs, Students, or Parents).
          </li>
          <li>
            <strong>Campus Notice Oversight:</strong> Inspect school-level circulars published by Headmasters, join bidirectional discussion threads, and reject unauthorized notices.
          </li>
          <li>
            <strong>Holiday &amp; Emergency Closures:</strong> Enforce town-wide gazetted holidays, 1-click seasonal break presets, and emergency weather closures (such as monsoon rain alerts).
          </li>
        </ul>
      </div>

      {/* 1.2 Non-Negotiable Boundaries */}
      <div className="p-5 rounded-xl bg-white border border-red-200 shadow-xs space-y-3 bg-red-50/20">
        <div className="flex items-center gap-2 pb-2 border-b border-red-100">
          <AlertTriangle className="w-4 h-4 text-red-600" />
          <h4 className="font-bold text-xs text-red-900 uppercase tracking-wider">
            1.2 Clear Operational Boundaries (What Town Admins Cannot Do)
          </h4>
        </div>
        <ol className="text-xs text-[#526477] space-y-2.5 list-decimal list-inside leading-relaxed">
          <li>
            <strong className="text-red-900">Strict Town Scoping:</strong> An Admin has operational authority strictly within their assigned municipal town. Cross-town data access is blocked by security boundaries.
          </li>
          <li>
            <strong className="text-red-900">No Privilege Elevation:</strong> Town Admins cannot create, modify, suspend, or manage other Admins, Super Admins, or Root Admins.
          </li>
          <li>
            <strong className="text-red-900">No Self-Joining Confirmation:</strong> An Admin can order a faculty transfer, but physical joining must be confirmed directly by the destination school Headmaster upon physical reporting.
          </li>
          <li>
            <strong className="text-red-900">No Daily Attendance Tampering:</strong> Daily classroom attendance is marked by designated Class Teachers and verified by Headmasters. Admins audit compliance; they do not alter historical daily roll calls.
          </li>
          <li>
            <strong className="text-red-900">Zero Fee Collection:</strong> Under the municipal public education charter, tuition is completely free. Admins have no authority to establish or collect student fees.
          </li>
        </ol>
      </div>
    </div>

    {/* ── Section 2: Admin vs SuperAdmin vs RootAdmin ── */}
    <SectionTitle>2. Authority Boundaries: Town Admin vs. Super Admin vs. Root Admin</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      To maintain administrative accountability and prevent unauthorized privilege escalation, the platform divides management authority into three distinct tiers:
    </p>

    <ComparisonTable
      headers={['Administrative Tier', 'Jurisdiction & Authority', 'Account Management & Operational Scope']}
      rows={[
        {
          left: 'Town Admin (Level 80)',
          right:
            'Operates strictly within an authorized municipal town. Manages operational schools, subordinate staff (HMs, Supervisors, Teachers, Peons), inter-school transfers, Earned Leave approvals, centralized exams, and town circulars. Cannot create or modify other Admins or platform-level accounts.',
        },
        {
          left: 'Super Admin (Level 90)',
          right:
            'Exercises global platform oversight across multiple towns. Provisions and manages Town Admin accounts, configures global system settings, and inspects multi-town audit logs. Protected by active-account preservation rules (cannot disable their own account or the last active Super Admin).',
        },
        {
          left: 'Root Admin (Level 100)',
          right:
            'The ultimate emergency recovery authority. Initialized strictly through secure server configuration for system maintenance and disaster recovery. Root Admin identity is hidden from general staff listings to prevent targeted credential attacks.',
        },
      ]}
    />

    {/* ── Section 3: The Town Admin Command Center ── */}
    <SectionTitle>3. Navigating the Town Admin Command Center</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      The Town Admin Command Center provides eight integrated operational workspaces. Each tab is synchronized to the web address bar, allowing direct bookmarking and smooth browser navigation without page reloads.
    </p>

    <ComparisonTable
      headers={['Workspace Tab', 'Purpose & Operational Focus', 'Key Administrative Actions']}
      rows={[
        {
          left: 'Town Overview',
          right:
            'High-level telemetry dashboard showing four real-time metrics: Total Town Schools, Active Faculty Count, Enrolled Student Count, and Town Attendance Average. Includes governance summary cards and quick operation shortcuts.',
        },
        {
          left: 'Schools',
          right:
            'Complete municipal school directory. Inspect campus details, view operating shifts, review classroom infrastructure, register new schools, and update official timing windows.',
        },
        {
          left: 'Faculty & Staff',
          right:
            'Searchable roster of all teaching and non-teaching personnel assigned within the town. Filter by designation (HM, Supervisor, Teacher, Peon) and manage active or suspended lifecycle statuses.',
        },
        {
          left: 'Students Roster',
          right:
            'Centralized enrollment registry across all municipal campuses. Filter by school, class, and gender, or search by student name and General Register (GR) number.',
        },
        {
          left: 'Teacher Transfers',
          right:
            'Inter-school transfer management hub. Initiate transfer orders between town schools, track relieving and joining progress, and cancel directives when needed.',
        },
        {
          left: 'Live Monitor',
          right:
            'Real-time classroom execution monitor. Check current teaching periods, subject timetables, and classroom occupancy across town schools as classes take place.',
        },
        {
          left: 'Academic Operations',
          right:
            'Elementary Board Examination coordination workspace. Manage exam schedules, grade weightages, Nazra Quran splits, marksheet verification, and tabulation sheets.',
        },
        {
          left: 'Reports & Circulars',
          right:
            'Centralized document repository. Broadcast town-wide directives, inspect school circulars published by Headmasters, and participate in discussion threads.',
        },
      ]}
    />

    {/* ── Section 4: School Administration ── */}
    <SectionTitle>4. Managing Municipal Schools &amp; Campus Settings</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      Town Admins maintain the official institutional registry for all government primary, elementary, and secondary schools located in the town.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <h4 className="font-bold text-xs text-[#102033] uppercase tracking-wider flex items-center gap-1.5">
          <Building2 className="w-4 h-4 text-[#006AC7]" />
          <span>School Registration &amp; Profiles</span>
        </h4>
        <p className="text-xs text-[#526477] leading-relaxed">
          Admins can register newly sanctioned municipal schools, recording official EMIS codes, campus addresses, education levels (Primary, Elementary, Secondary), and operating shifts (Morning or Afternoon). Institutional profiles can be updated when contact details or facility capabilities change.
        </p>
      </div>

      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <h4 className="font-bold text-xs text-[#102033] uppercase tracking-wider flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-[#4B7F3A]" />
          <span>Operational Timings &amp; Attendance Windows</span>
        </h4>
        <p className="text-xs text-[#526477] leading-relaxed">
          Admins configure standard school hours, assembly start times, and grace periods for morning and afternoon shifts. Headmasters can request minor adjustments for their campus with a mandatory justification, but overall policy alignment remains governed by the Town Administration.
        </p>
      </div>
    </div>

    {/* ── Section 5: Faculty, Staff & Duty Management ── */}
    <SectionTitle>5. Faculty, Staff &amp; Duty Assignment Governance</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      The <strong>Faculty &amp; Staff</strong> tab provides centralized personnel management for all public education employees working in the town.
    </p>

    <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs mb-6 space-y-3">
      <h4 className="font-bold text-xs text-[#102033] uppercase tracking-wider flex items-center gap-1.5">
        <Users className="w-4 h-4 text-[#006AC7]" />
        <span>Staff Lifecycle Actions &amp; Justification Requirements</span>
      </h4>
      <p className="text-xs text-[#526477] leading-relaxed">
        Admins can search personnel by name, email, or designation and view assigned schools. When administrative action is required (for example, placing a staff member on inquiry leave or restoring active duty), Admins can update the lifecycle status between <strong>ACTIVE</strong> and <strong>SUSPENDED</strong>.
      </p>
      <div className="p-3 rounded-lg bg-amber-50/70 border border-amber-200 text-xs text-amber-900 leading-relaxed">
        <strong>Mandatory Justification Rule:</strong> To prevent arbitrary disciplinary actions, updating a staff member&apos;s lifecycle status requires entering an official justification reason (minimum 3 characters). The justification, timestamp, and Admin identity are permanently recorded in the central audit log.
      </div>
    </div>

    {/* ── Section 6: Inter-School Staff Transfers ── */}
    <SectionTitle>6. Inter-School Staff Transfers</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      Inter-school faculty transfers in municipal schools must follow formal civil service protocol. The platform enforces a clear four-stage workflow to prevent unauthorized reassignments:
    </p>

    <Steps
      steps={[
        {
          step: '1',
          title: 'Initiate Transfer Order',
          desc: 'A Town Administrator or Academic Supervisor initiates a transfer recommendation, specifying the faculty member, current releasing school, destination school, and official administrative reason.',
        },
        {
          step: '2',
          title: 'Releasing School Handover',
          desc: 'The releasing school Headmaster completes the relieving checklist, confirming that classroom keys, textbooks, and student records have been handed over.',
        },
        {
          step: '3',
          title: 'Destination School Joining Confirmation',
          desc: 'The incoming teacher physically reports to the destination campus. The receiving Headmaster physically verifies their reporting and confirms joining in the system. Town Admins do not bypass this local verification.',
        },
        {
          step: '4',
          title: 'Administrative Cancellation or Override',
          desc: 'If an administrative inquiry or sudden staffing emergency arises, only a Town Administrator can officially cancel an active transfer directive or issue an emergency override.',
        },
      ]}
    />

    {/* ── Section 7: Attendance Governance & Leave Workflows ── */}
    <SectionTitle>7. Attendance Governance &amp; Leave Approvals</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      Town Administrators monitor town-wide attendance averages and maintain the integrity of public service leave policies.
    </p>

    <div className="space-y-4 mb-6">
      <h4 className="text-xs font-bold text-[#102033] uppercase tracking-wider">
        The Two-Tier Earned Leave (EL) Workflow ("Through Proper Channel")
      </h4>
      <p className="text-xs text-[#526477] leading-relaxed">
        Under government service regulations, Headmasters cannot grant long-term Earned Leave on their own authority, nor do field teachers apply directly to Town Office bypassing their campus. The platform strictly enforces the civil service &ldquo;through proper channel&rdquo; hierarchy:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InfoCard
          icon={<FileText className="w-5 h-5" />}
          color="blue"
          title="Stage 1: Teacher Application"
          desc="The teacher submits an Earned Leave request (minimum 3 calendar days) from their classroom dashboard, specifying dates and reason."
        />
        <InfoCard
          icon={<Briefcase className="w-5 h-5" />}
          color="amber"
          title="Stage 2: HM Recommendation"
          desc="The school Headmaster reviews the application, verifies classroom substitute arrangements, and officially forwards the request to Town Office."
        />
        <InfoCard
          icon={<Shield className="w-5 h-5" />}
          color="emerald"
          title="Stage 3: Town Admin Approval"
          desc="The Town Administrator / DDO reviews the forwarded request and grants official statutory approval or rejection. HM-only approvals are blocked."
        />
      </div>

      <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-[#526477] leading-relaxed">
        <strong>Casual Leave (CL) vs. Earned Leave (EL):</strong> Casual Leave (up to 3 consecutive working days) is approved directly at the campus level by the school Headmaster. Earned Leave (3 or more days) legally requires Town Admin approval.
      </div>
    </div>

    {/* ── Section 8: Centralized Board Examinations ── */}
    <SectionTitle>8. Centralized Elementary Board Examinations</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      Town Administrators oversee the administration of centralized Grade 4 to 8 Elementary Board Examinations across all town institutions.
    </p>

    <ComparisonTable
      headers={['Examination Component', 'Sindh Board Standard & Institutional Rule', 'Town Admin Responsibility']}
      rows={[
        {
          left: '700-Mark Academic Aggregate',
          right:
            'Standardized subjects: English, Urdu, Mathematics, Science, Social Studies, Islamiat, and Sindhi (100 marks each).',
          extra: 'Town Admins configure exam dates and verify curriculum coverage across town campuses.',
        },
        {
          left: 'Compulsory Nazra Recitation Split',
          right:
            'Islamiat evaluation is strictly split into 20 marks Oral Nazra Quran recitation and 80 marks Written theory.',
          extra: 'The platform calculation engine enforces this split automatically during mark verification.',
        },
        {
          left: 'Drawing & Art Grade Exclusion',
          right:
            'Drawing is graded on a letter scale (A to D) and excluded from the 700-mark numeric aggregate to prevent grade distortion.',
          extra: 'Admins verify that schools record Drawing assessments without inflating core academic totals.',
        },
        {
          left: 'Official Tabulation Sheets',
          right:
            'Generates Legal Landscape (14" × 8.5") official board tabulation gazettes with red failure indicators and official signature lines.',
          extra: 'Admins inspect and endorse finalized class tabulation gazettes for official directorate records.',
        },
      ]}
    />

    {/* ── Section 9: Announcements & Document Oversight ── */}
    <SectionTitle>9. Town Announcements &amp; Campus Notice Oversight</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      The platform provides two distinct announcement streams: centralized Town Directives issued by Town Administration, and campus notices published by Headmasters.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <h4 className="font-bold text-xs text-[#102033] uppercase tracking-wider flex items-center gap-1.5">
          <Megaphone className="w-4 h-4 text-[#006AC7]" />
          <span>Broadcasting Town Directives</span>
        </h4>
        <p className="text-xs text-[#526477] leading-relaxed">
          Admins broadcast official notifications (such as examination orders, holiday advisories, or administrative circulars). You can target specific audiences (All Users, Staff, Teachers, HMs, Students, or Parents). Announcements appear directly on recipients&apos; dashboard hero banners in the official Government Green theme.
        </p>
      </div>

      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <h4 className="font-bold text-xs text-[#102033] uppercase tracking-wider flex items-center gap-1.5">
          <Eye className="w-4 h-4 text-[#4B7F3A]" />
          <span>School Notice Oversight &amp; Rejection</span>
        </h4>
        <p className="text-xs text-[#526477] leading-relaxed">
          Through the <strong>School Announcements Oversight</strong> tab, Admins review all notices published by Headmasters across the town. Admins can join threaded discussions with the HM or reject unauthorized notices with a mandatory written reason, preserving a complete audit record.
        </p>
      </div>
    </div>

    {/* ── Section 10: Holidays & Calendar Governance ── */}
    <SectionTitle>10. Holidays, Emergency Closures &amp; Calendar Governance</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      Town Administrators manage the official municipal calendar, declaring scheduled breaks and emergency closures through the <strong>Holidays &amp; Calendar</strong> workspace.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-blue-800">1-CLICK PRESETS</div>
        <div className="text-sm font-black text-blue-900">Rapid Seasonal Breaks</div>
        <div className="text-xs text-blue-700 leading-relaxed">
          Quick-declare Summer Vacation, Winter Break, Iqbal&apos;s Day, or Eid-ul-Fitr.
        </div>
      </div>

      <div className="p-4 rounded-xl bg-rose-50/80 border border-rose-200 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-rose-800">WEATHER ALERTS</div>
        <div className="text-sm font-black text-rose-900">Rain Emergencies</div>
        <div className="text-xs text-rose-700 leading-relaxed">
          Declare town-wide emergency closures for heavy monsoon flooding with 1 tap.
        </div>
      </div>

      <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-emerald-800">WEEKEND POLICIES</div>
        <div className="text-sm font-black text-emerald-900">Weekly-Off Pattern</div>
        <div className="text-xs text-emerald-700 leading-relaxed">
          Enforce the official Saturday &amp; Sunday weekend pattern for all town schools.
        </div>
      </div>

      <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-amber-800">LIFECYCLE STATES</div>
        <div className="text-sm font-black text-amber-900">Active &bull; Expired &bull; Cancelled</div>
        <div className="text-xs text-amber-700 leading-relaxed">
          Cancel closures with mandatory reason; past records remain archived.
        </div>
      </div>
    </div>

    {/* ── Section 11: Audit Logs & Sensitive Data Protection ── */}
    <SectionTitle>11. Audit Logs, Accountability &amp; Sensitive Data Protection</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      Every meaningful administrative action—such as updating a school&apos;s hours, transferring a teacher, approving leave, or declaring an emergency closure—is permanently recorded in an immutable, append-only audit vault.
    </p>

    <Callout type="security" title="Sensitive Data Privacy & Access Protection">
      Under civil service privacy policies, sensitive personal information—including national identity numbers (CNIC/B-Form), private residential addresses, personal bank details, and confidential annual evaluation reports—is strictly protected. Holding a Town Admin role does not grant unrestricted access to private employee records. Data is displayed on a need-to-know basis to protect employee privacy.
    </Callout>

    {/* ── Section 12: Real Problems We Encountered & How We Solved Them ── */}
    <SectionTitle>12. Real Improvements We Made to the Town Admin Experience</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      During system development and administrative trials, our team resolved several operational challenges to ensure a smooth administrative experience:
    </p>

    <div className="space-y-4 mb-8">
      {/* Case 1 */}
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-blue-50 text-[#006AC7] flex items-center justify-center font-bold text-xs">
            1
          </div>
          <h4 className="font-bold text-xs text-[#102033]">
            Prevented Accidental Cross-Town Data Leaks
          </h4>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>What users experienced:</strong> In early prototypes, searching for schools or teachers could display institutions located in neighboring municipal towns, risking accidental reassignments or confusion during administrative audits.
        </p>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>How it was improved:</strong> We established strict town-level data boundaries. All searches, school registries, and faculty lists are automatically locked to your assigned municipal town.
        </p>
        <div className="text-[11px] text-emerald-800 font-semibold bg-emerald-50/60 p-2 rounded-lg border border-emerald-200">
          Result: Admins only see and manage records within their authorized town jurisdiction.
        </div>
      </div>

      {/* Case 2 */}
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-blue-50 text-[#006AC7] flex items-center justify-center font-bold text-xs">
            2
          </div>
          <h4 className="font-bold text-xs text-[#102033]">
            Enforced the &ldquo;Through Proper Channel&rdquo; Leave Hierarchy
          </h4>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>What users experienced:</strong> Teachers were submitting long-term Earned Leave requests directly to Town Office without notifying their school, leaving classrooms without coverage. In other cases, Headmasters attempted to approve long-term leaves beyond their legal authority.
        </p>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>How it was improved:</strong> We codified the official two-tier workflow. Teachers submit to their school, Headmasters review and forward with substitute recommendations, and Town Admins give final statutory approval.
        </p>
        <div className="text-[11px] text-emerald-800 font-semibold bg-emerald-50/60 p-2 rounded-lg border border-emerald-200">
          Result: Complete staffing accountability with zero unnotified classroom vacancies.
        </div>
      </div>

      {/* Case 3 */}
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-blue-50 text-[#006AC7] flex items-center justify-center font-bold text-xs">
            3
          </div>
          <h4 className="font-bold text-xs text-[#102033]">
            Structured Oversight for School-Level Notices
          </h4>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>What users experienced:</strong> When Headmasters published campus notices with incorrect dates or policy misunderstandings, Admins had no structured way to request revisions without completely deleting the notice, which destroyed official records.
        </p>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>How it was improved:</strong> We created the School Notice Oversight tab. Admins can join threaded discussions with the Headmaster to clarify details or formally reject the notice with a written explanation, while preserving the full audit trail.
        </p>
        <div className="text-[11px] text-emerald-800 font-semibold bg-emerald-50/60 p-2 rounded-lg border border-emerald-200">
          Result: Transparent, collaborative oversight that keeps public school notices accurate and compliant.
        </div>
      </div>

      {/* Case 4 */}
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-blue-50 text-[#006AC7] flex items-center justify-center font-bold text-xs">
            4
          </div>
          <h4 className="font-bold text-xs text-[#102033]">
            1-Click Rapid Holiday Presets for Seasonal Breaks
          </h4>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>What users experienced:</strong> Announcing gazetted breaks (such as Iqbal&apos;s Day or Winter Vacation) required manually re-entering dates, justifications, and policies every season, creating opportunities for date mismatches across town schools.
        </p>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>How it was improved:</strong> We introduced 1-Click Rapid Break Presets. Admins can deploy standardized town-wide gazetted breaks and weather alerts with one click, ensuring uniform dates across all campuses.
        </p>
        <div className="text-[11px] text-emerald-800 font-semibold bg-emerald-50/60 p-2 rounded-lg border border-emerald-200">
          Result: Fast, error-free holiday scheduling across the entire municipal town.
        </div>
      </div>

      {/* Case 5 */}
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-blue-50 text-[#006AC7] flex items-center justify-center font-bold text-xs">
            5
          </div>
          <h4 className="font-bold text-xs text-[#102033]">
            Unified Government Green Visual Identity Across Workspaces
          </h4>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>What users experienced:</strong> In earlier versions, various Admin tabs used inconsistent color accents, mismatched fonts, and cluttered headers that felt disjointed from the public education portal.
        </p>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>How it was improved:</strong> We harmonized all administrative workspaces under the approved Education Department Government Green palette, with clear typography, intuitive icons, and responsive layouts for desktop and mobile.
        </p>
        <div className="text-[11px] text-emerald-800 font-semibold bg-emerald-50/60 p-2 rounded-lg border border-emerald-200">
          Result: A cohesive, professional SaaS interface tailored for public administration.
        </div>
      </div>
    </div>

    {/* ── Section 13: Frequently Asked Questions ── */}
    <SectionTitle>13. Frequently Asked Questions &amp; Everyday Tips</SectionTitle>

    <div className="space-y-3 my-6">
      <FaqItem
        category="Jurisdiction"
        question="Can a Town Administrator manage schools located in an adjacent municipal town?"
        answer="No. To preserve jurisdictional integrity and prevent administrative conflicts, Town Admins operate strictly within their assigned town. If your town assignment has changed, your account must be updated by a Super Administrator."
        evidence="Verified against town-scoping authorization rules in the backend API."
      />

      <FaqItem
        category="Transfers"
        question="Why can't a Town Admin confirm that a transferred teacher has joined their new school?"
        answer="To ensure local campus accountability, the Headmaster of the receiving school must physically verify that the incoming teacher has reported on-site before confirming joining in the system. Town Admins initiate and oversee the transfer order, while local physical reporting remains verified by campus executives."
        evidence="Verified against transfer route authorization rules."
      />

      <FaqItem
        category="Leave"
        question="Can a Headmaster approve Earned Leave directly without Town Admin review?"
        answer="No. Under civil service regulations, Headmasters can only grant Casual Leave (up to 3 days). Earned Leave legally requires review by the school Headmaster followed by final statutory approval from the Town Administrator / DDO."
        evidence="Verified against the two-tier leave policy workflow."
      />

      <FaqItem
        category="Announcements"
        question="What is the difference between a Town Announcement and a School Notice?"
        answer="Town Announcements are official directives broadcast by Town Administration to target groups across all town schools. School Notices are localized circulars published by individual Headmasters strictly for their own campus community. Admins have oversight visibility over all school notices."
        evidence="Verified against announcement category and audience scoping rules."
      />

      <FaqItem
        category="Accounts"
        question="Can a Town Administrator create another Admin or promote someone to Super Admin?"
        answer="No. Town Admins manage operational personnel (HMs, Supervisors, Teachers, Peons) within their town. Provisioning, modifying, or promoting higher-tier platform accounts (Admins and Super Admins) is restricted exclusively to Super Administrators."
        evidence="Verified against central user governance authorization ceilings."
      />

      <FaqItem
        category="Closures"
        question="What happens when an Admin declares a town-wide Rain Emergency closure?"
        answer="Declaring an emergency closure immediately updates the calendar status across all town schools, displays an emergency closure hero banner on eligible student and staff dashboards, and pauses daily attendance marking requirements for the declared dates."
        evidence="Verified against holiday governance and emergency closure dispatch rules."
      />
    </div>
  </div>
);

