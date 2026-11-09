import React from 'react';
import {
  Shield,
  Layers,
  Building2,
  Users,
  GraduationCap,
  ClipboardCheck,
  TrendingUp,
  ArrowLeftRight,
  Clock,
  FileText,
  Calendar,
  IdCard,
  CheckCircle2,
  AlertTriangle,
  Eye,
  Briefcase,
  Copy,
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

export const SupervisorWorkflowsSection = () => (
  <div id="supervisor-operational-workflows">
    <DocHeader
      title="Supervisor Workspace & Field Oversight Manual"
      badge="5. Core Operational Engines"
      subtitle="Complete operational guide for Academic Supervisors governing cluster field visits, infrastructure hygiene audits, attendance compliance monitoring, staff rosters, and cross-school transfer tracking across Town Municipal Corporation (TMC) Liaquatabad."
    />

    {/* Metadata Ribbon */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">ROLE</div>
        <div className="text-sm font-black text-[#102033]">ACADEMIC SUPERVISOR</div>
        <div className="text-xs text-[#526477]">Cluster Field Inspector</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">JURISDICTION</div>
        <div className="text-sm font-black text-[#4B7F3A]">ASSIGNED CLUSTER</div>
        <div className="text-xs text-[#526477]">Authorized Municipal Schools</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">WORKSPACE STATUS</div>
        <div className="text-sm font-black text-[#4B7F3A]">ACTIVE &amp; VERIFIED</div>
        <div className="text-xs text-[#526477]">8 Dedicated Modules Active</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">DUAL-DUTY WORKSPACE</div>
        <div className="text-sm font-black text-purple-600">WORKSPACE SWITCHING</div>
        <div className="text-xs text-[#526477]">Teacher / HM + Supervisor</div>
      </div>
    </div>

    {/* ── Section 1: The Supervisor Role & Core Mission ── */}
    <SectionTitle>1. Understanding the Academic Supervisor Role</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      In the public education system of Liaquatabad Town, an <strong>Academic Supervisor</strong> serves as an independent field oversight officer. Supervisors bridge the gap between central Town Municipal Administration and individual school buildings. They conduct on-site physical audits, monitor student and faculty attendance trends, inspect campus hygiene and safety, and verify that instructional standards are being maintained.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      {/* 1.1 Authorized Supervisory Capabilities */}
      <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-3">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
          <CheckCircle2 className="w-4 h-4 text-[#4B7F3A]" />
          <h4 className="font-bold text-xs text-[#102033] uppercase tracking-wider">
            1.1 Authorized Supervisory Authority
          </h4>
        </div>
        <ul className="text-xs text-[#526477] space-y-2 list-disc list-inside leading-relaxed">
          <li>
            <strong>Cluster-Wide School Visibility:</strong> Review institutional profiles, student enrollments, faculty counts, and operating shifts for all schools within your authorized cluster.
          </li>
          <li>
            <strong>Unannounced Field Inspections:</strong> Conduct on-site audits, record physical headcounts, assess drinking water and electrical safety, and submit official inspection reports.
          </li>
          <li>
            <strong>Remedial Directives:</strong> Issue prioritized corrective action items (High, Medium, Low) to school leadership for safety or academic improvements.
          </li>
          <li>
            <strong>Signed Copy Archives:</strong> Upload scanned, signed copies of physical inspection orders (PDF format, up to 10MB) directly into the central municipal record.
          </li>
          <li>
            <strong>Attendance Monitoring:</strong> Audit daily and monthly student attendance compliance rates without altering classroom records.
          </li>
          <li>
            <strong>Personnel Oversight:</strong> Review verified faculty rosters, teacher designations, and non-teaching support staff assignments across cluster schools.
          </li>
          <li>
            <strong>Transfer Initiation:</strong> Recommend and initiate inter-school faculty transfer requests between assigned schools for Town Administration review.
          </li>
          <li>
            <strong>Live Period Monitoring:</strong> Check active classroom teaching slots and timetable execution across cluster schools in real time.
          </li>
        </ul>
      </div>

      {/* 1.2 Non-Negotiable Boundaries */}
      <div className="p-5 rounded-xl bg-white border border-red-200 shadow-xs space-y-3 bg-red-50/20">
        <div className="flex items-center gap-2 pb-2 border-b border-red-100">
          <AlertTriangle className="w-4 h-4 text-red-600" />
          <h4 className="font-bold text-xs text-red-900 uppercase tracking-wider">
            1.2 Clear Operational Boundaries (What Supervisors Cannot Do)
          </h4>
        </div>
        <ol className="text-xs text-[#526477] space-y-2.5 list-decimal list-inside leading-relaxed">
          <li>
            <strong className="text-red-900">No Cross-Cluster Access:</strong> A Supervisor can only access schools explicitly assigned to their cluster. Any attempt to inspect or query an unassigned school is blocked automatically by access boundaries.
          </li>
          <li>
            <strong className="text-red-900">Read-Only Institutional Records:</strong> While Supervisors can view school profiles and student lists, they cannot change school configurations, operating hours, class names, or student General Register (GR) profiles.
          </li>
          <li>
            <strong className="text-red-900">No Attendance Marking Authority:</strong> Attendance must be recorded directly by classroom teachers and verified by Headmasters. Supervisors audit attendance data; they do not mark or modify daily attendance logs.
          </li>
          <li>
            <strong className="text-red-900">No Final Transfer Approval:</strong> Supervisors can propose faculty transfers between cluster schools, but physical joining must be approved by the destination Headmaster, and transfer orders can only be finalized or canceled by Town Administrators.
          </li>
          <li>
            <strong className="text-red-900">No Inspection Self-Closure:</strong> Once an inspection report is submitted, only central Town Administrators can conduct formal reviews, request revisions, or mark an inspection officially closed.
          </li>
        </ol>
      </div>
    </div>

    {/* ── Section 2: Dual Responsibilities & Workspace Switching ── */}
    <SectionTitle>2. Dual Responsibilities &amp; Workspace Switching</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      In public education administration, staff members may carry dual responsibilities. For example, a senior teacher might teach regular morning classes at their base school while also serving as an Academic Supervisor for a cluster of neighboring schools.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <InfoCard
        icon={<Briefcase className="w-5 h-5" />}
        color="green"
        title="1. Dedicated Supervisor Account"
        desc="Full-time supervisory officers assigned by Town Administration. When signing in, the platform opens directly into the cluster supervision workspace."
      />
      <InfoCard
        icon={<GraduationCap className="w-5 h-5" />}
        color="emerald"
        title="2. Teacher + Supervisor Duties"
        desc="Educators who manage classroom teaching at their base school while conducting field visits for assigned cluster schools. Their classroom schedules and student rosters remain active."
      />
      <InfoCard
        icon={<Building2 className="w-5 h-5" />}
        color="purple"
        title="3. Headmaster + Supervisor Duties"
        desc="School executives managing their own campus while also providing cluster-level oversight for neighboring schools. Both duty scopes operate independently."
      />
    </div>

    <Callout type="info" title="How to Switch Your Active Workspace">
      If you hold dual responsibilities, you use a single unified account rather than multiple logins. Click the <strong>Mode Switcher</strong> located at the top of your dashboard. Choose whether you want to work as a <strong>Teacher</strong> (to view your timetable and mark classroom attendance), a <strong>Headmaster</strong> (to manage your campus), or a <strong>Supervisor</strong> (to inspect cluster schools). Switching workspaces updates your active dashboard tools and data views immediately while keeping your single login and user identity unified.
    </Callout>

    {/* ── Section 3: The Supervisor Workspace & Navigation ── */}
    <SectionTitle>3. Navigating the Supervisor Workspace</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      The Supervisor Workspace is organized into eight primary operational sections, plus shared municipal resources. Designed for both field tablets and desktop computers, the interface adapts automatically to your screen size.
    </p>

    <ComparisonTable
      headers={['Dashboard Section', 'Purpose & Everyday Tasks', 'Available Actions & Controls']}
      rows={[
        {
          left: 'Overview',
          right:
            'A central command center displaying four real-time metrics: Total Assigned Schools, Average Cluster Attendance Rate, Active/Pending Inspections, and Active Staff Transfers. Also provides a "Copy Briefing Summary" button that formats a summary briefing of cluster statistics to your clipboard for administrative reporting.',
        },
        {
          left: 'Inspections',
          right:
            'The core field inspection hub. Create new school inspection reports using standardized checklists, track draft and submitted audits, generate official formatted PDFs, and upload signed office copies.',
        },
        {
          left: 'Schools',
          right:
            'An interactive directory of all municipal schools in your assigned cluster. Filter by primary, elementary, or secondary levels, morning or afternoon shifts, and view comprehensive institutional profiles.',
        },
        {
          left: 'Attendance',
          right:
            'Cluster-wide attendance health monitoring. Review overall percentage benchmarks, identify schools requiring compliance follow-up, and audit monthly working day logs.',
        },
        {
          left: 'Staff Directory',
          right:
            'A searchable roster of teaching faculty and non-teaching support personnel assigned across your cluster schools. Filter by institution and category (Teaching, Non-Teaching, Parents) to view designations and campus postings.',
        },
        {
          left: 'Student Directory',
          right:
            'A centralized roster of enrolled students across all assigned cluster schools. Filter by school, gender, and enrollment status, or search by student name, General Register (GR) number, or parent details.',
        },
        {
          left: 'Staff Transfers',
          right:
            'Track ongoing inter-school teacher transfer directives affecting your cluster. Initiate transfer recommendations between assigned schools and monitor relief and joining statuses.',
        },
        {
          left: 'Live Monitor',
          right:
            'A real-time overview of active teaching periods and daily schedules across cluster classrooms, helping you verify timetable compliance during field visits.',
        },
      ]}
    />

    {/* ── Section 4: Cluster Schools Directory & Read-Only Profiles ── */}
    <SectionTitle>4. Reviewing Assigned Schools &amp; School Profiles</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      The <strong>Schools</strong> tab gives Supervisors operational visibility into each campus under their supervision. You can quickly view the school level, operating shift, campus address, Headmaster contact details, student enrollment counts, and faculty numbers.
    </p>

    <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs mb-6 space-y-3">
      <div className="flex items-center gap-2">
        <Eye className="w-4 h-4 text-[#4B7F3A]" />
        <h4 className="font-bold text-xs text-[#102033] uppercase tracking-wider">
          Read-Only Institutional Profile Screen
        </h4>
      </div>
      <p className="text-xs text-[#526477] leading-relaxed">
        Clicking <strong>&ldquo;View Full Profile&rdquo;</strong> on any school card opens the complete institutional overview for that campus. Supervisors can inspect classrooms, enrolled student distributions, teaching rosters, and facilities.
      </p>
      <div className="p-3 rounded-lg bg-[#F2F8EF]/80 border border-[#C9DFBC] text-xs text-[#102033] leading-relaxed">
        <strong>Important Safety Guard:</strong> When opened by a Supervisor, the school profile runs in <em>Read-Only Inspection Mode</em>. Action controls that modify school records (such as updating school contact info or reassigning class teachers) are automatically disabled. This guarantees that Supervisors can review school records thoroughly without any risk of accidentally altering official school files.
      </div>
    </div>

    {/* ── Section 5: The Field Inspection Workflow ── */}
    <SectionTitle>5. The Step-by-Step Field Inspection Process</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      Field inspections provide structured, verifiable data regarding school conditions, teacher attendance, and classroom learning. The platform organizes every visit into a standardized, multi-point evaluation.
    </p>

    <Steps
      steps={[
        {
          step: '1',
          title: 'Start a New Field Inspection',
          desc: 'From the Inspections tab, click "New Field Inspection". Select the visited school from your assigned cluster list and verify the visit date and academic session.',
        },
        {
          step: '2',
          title: 'Complete Infrastructure & Academic Hygiene Checklists',
          desc: 'Evaluate campus cleanliness, functional washrooms, safe drinking water, electricity, and boundary wall security. Check lesson plans, syllabus progress, and student notebook corrections.',
        },
        {
          step: '3',
          title: 'Conduct Physical Attendance Headcount',
          desc: 'Perform an unannounced physical count in classrooms. Enter the verified student count and present teacher count. The system automatically calculates discrepancies between enrolled registers and physical attendance.',
        },
        {
          step: '4',
          title: 'Assign Grade & Issue Remedial Directives',
          desc: 'Assign an overall visit grade (A, B, C, or D) and summary score. If deficiencies exist, add prioritized remedial directives (High, Medium, or Low) with clear completion deadlines for the school administration.',
        },
        {
          step: '5',
          title: 'Save Draft or Submit to Town Directorate',
          desc: 'Save your audit as a Draft while on-site. Once finalized, click "Submit Inspection". If severe deficiencies or urgent directives exist, the report is automatically marked "Action Required" for administrative intervention.',
        },
        {
          step: '6',
          title: 'Upload Official Signed Office Copy',
          desc: 'Download the inspection report as a formatted PDF, obtain necessary physical signatures on-site, and upload the signed document (PDF only, up to 10MB) to complete the official record.',
        },
      ]}
    />

    <div className="space-y-4 my-6">
      <h4 className="text-xs font-bold text-[#102033] uppercase tracking-wider">
        Understanding Inspection Statuses
      </h4>
      <ComparisonTable
        headers={['Inspection Status', 'What It Means', 'Next Steps in the Workflow']}
        rows={[
          {
            left: 'DRAFT',
            right:
              'The report is currently being prepared by the Supervisor. You can continue updating scores, checklists, notes, and directives until you are ready to submit.',
          },
          {
            left: 'SUBMITTED',
            right:
              'The inspection is finalized and delivered to the central Town Directorate. It is now locked from routine editing while awaiting administrative review.',
          },
          {
            left: 'ACTION_REQUIRED',
            right:
              'The visit identified critical safety or academic concerns (such as Grade C or D ratings, broken sanitation facilities, or severe headcount discrepancies). Immediate follow-up is assigned.',
          },
          {
            left: 'UNDER_REVIEW',
            right:
              'Town Municipal Officers are actively reviewing the inspection findings and coordinating necessary departmental follow-up.',
          },
          {
            left: 'REVIEWED',
            right:
              'Town Administration has reviewed and endorsed the inspection report. Directives are forwarded to the school for execution.',
          },
          {
            left: 'RETURNED_FOR_CORRECTION',
            right:
              'Central administration returned the report with specific review notes requesting additional evidence or clarifications. The Supervisor can edit and resubmit.',
          },
          {
            left: 'CLOSED',
            right:
              'All remedial actions have been confirmed completed by Town Administration. The inspection record is permanently archived and cannot be modified.',
          },
        ]}
      />
      <p className="text-[11px] text-[#526477] italic">
        Note: The letter grading thresholds (A, B, C, D) are operational working defaults built into the dashboard to highlight areas needing attention, rather than statutory gazetted standards.
      </p>
    </div>

    {/* ── Section 6: Attendance Compliance Standards ── */}
    <SectionTitle>6. Monitoring Attendance Compliance</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      Regular student and faculty attendance is vital for quality public education. The <strong>Attendance</strong> tab gives Supervisors real-time cluster averages and categorizes schools into operational health indicators:
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-emerald-800">TIER 1: ON TRACK</div>
        <div className="text-base font-black text-emerald-900">&ge; 85% Attendance</div>
        <div className="text-xs text-emerald-700 leading-relaxed">
          Strong daily engagement. Normal supervisory monitoring applies.
        </div>
      </div>
      <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-amber-800">TIER 2: BELOW TARGET</div>
        <div className="text-base font-black text-amber-900">75% to 84% Attendance</div>
        <div className="text-xs text-amber-700 leading-relaxed">
          Moderate drop in daily attendance. School leadership should be cautioned.
        </div>
      </div>
      <div className="p-4 rounded-xl bg-rose-50/80 border border-rose-200 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-rose-800">TIER 3: CRITICAL</div>
        <div className="text-base font-black text-rose-900">&lt; 75% Attendance</div>
        <div className="text-xs text-rose-700 leading-relaxed">
          Urgent concern. Requires on-site inspection and community outreach check.
        </div>
      </div>
      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-slate-600">NOT SUBMITTED</div>
        <div className="text-base font-black text-slate-800">No Data / 0 Days</div>
        <div className="text-xs text-slate-500 leading-relaxed">
          School has not submitted daily attendance rolls. Follow-up required with HM.
        </div>
      </div>
    </div>

    <Callout type="info" title="Operational Health Indicator Note">
      These percentage tiers represent operational health benchmarks configured in the dashboard to help supervisors spot attendance drops quickly. They serve as administrative monitoring guides rather than statutory legislative standards. Daily attendance marking remains the sole responsibility of classroom teachers and Headmasters.
    </Callout>

    {/* ── Section 7: Staff Rosters, Student Directory & Caching ── */}
    <SectionTitle>7. Working with Staff and Student Directories</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      Supervisors have access to verified directories for both school personnel and enrolled students across their assigned cluster.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <h4 className="font-bold text-xs text-[#102033] uppercase tracking-wider flex items-center gap-1.5">
          <Users className="w-4 h-4 text-[#4B7F3A]" />
          <span>Staff Directory Oversight</span>
        </h4>
        <p className="text-xs text-[#526477] leading-relaxed">
          Search all teachers and non-teaching support staff (such as peons and support personnel) assigned to your cluster. You can check designations, school postings, and contact information. This ensures that staffing allocations remain transparent across institutions.
        </p>
      </div>

      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <h4 className="font-bold text-xs text-[#102033] uppercase tracking-wider flex items-center gap-1.5">
          <GraduationCap className="w-4 h-4 text-[#4B7F3A]" />
          <span>Student Directory &amp; Fast Searching</span>
        </h4>
        <p className="text-xs text-[#526477] leading-relaxed">
          Look up enrolled students by name, General Register (GR) number, or parent details. When cluster student records are already loaded and no new search filters have been applied, switching back to this tab displays existing data immediately, reducing unnecessary network delays during field visits.
        </p>
      </div>
    </div>

    {/* ── Section 8: Staff Transfers ── */}
    <SectionTitle>8. Managing Staff Transfers: Initiation vs. Approval</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      Staff transfers in municipal government schools must follow formal administrative protocol. To prevent arbitrary personnel movements or operational disruption, the platform separates transfer responsibilities cleanly:
    </p>

    <ComparisonTable
      headers={['Transfer Stage', 'Responsible Authority', 'Supervisor Role & Responsibilities']}
      rows={[
        {
          left: '1. Initiation',
          right:
            'Academic Supervisors or Town Administrators initiate transfer recommendations for teaching or non-teaching staff between schools in the cluster.',
        },
        {
          left: '2. Relieving Order',
          right:
            'The releasing school Headmaster completes the relieving checklist, confirming that classroom materials and records have been handed over.',
        },
        {
          left: '3. Joining Approval',
          right:
            'The destination school Headmaster physically verifies the incoming staff member and confirms joining in the system. Supervisors cannot approve joining.',
        },
        {
          left: '4. Cancellation or Emergency Override',
          right:
            'Only central Town Administrators can cancel an active transfer directive or issue emergency administrative overrides.',
        },
      ]}
    />

    {/* ── Section 9: Live Class Monitor, Circulars & Holidays ── */}
    <SectionTitle>9. Live Monitoring, Notices &amp; Academic Calendar</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      Beyond audits and directories, Supervisors use three shared tools during their everyday field operations:
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <InfoCard
        icon={<Clock className="w-5 h-5" />}
        color="green"
        title="Live Class Monitor"
        desc="Check what is happening in any classroom right now. Shows the active period, scheduled subject, assigned teacher, and classroom location in real time."
      />
      <InfoCard
        icon={<FileText className="w-5 h-5" />}
        color="emerald"
        title="Notices & Circulars"
        desc="Direct access to official town announcements, examination orders, and departmental circulars issued by municipal leadership."
      />
      <InfoCard
        icon={<Calendar className="w-5 h-5" />}
        color="amber"
        title="Holidays & Calendar"
        desc="Check the official Sindh Government school calendar, gazetted holidays, approved weekend patterns, and emergency weather closures."
      />
    </div>

    {/* ── Section 10: Real Problems We Encountered & How We Solved Them ── */}
    <SectionTitle>10. Real Improvements We Made to the Supervisor Experience</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      During user testing and field trials, our team identified several usability challenges. Here is what we found, what we improved, and how the platform behaves now:
    </p>

    <div className="space-y-4 mb-8">
      {/* Problem 1 */}
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[#F2F8EF] text-[#4B7F3A] flex items-center justify-center font-bold text-xs">
            1
          </div>
          <h4 className="font-bold text-xs text-[#102033]">
            Eliminated Confusing Duplicate Navigation on Large Screens
          </h4>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>What users experienced:</strong> On laptops and desktop monitors, users saw two navigation menus simultaneously: the main left sidebar and an extra row of navigation buttons across the top of the dashboard. This cluttered the screen and caused confusion about where to click.
        </p>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>How it was improved:</strong> We streamlined the layout. The top navigation buttons now appear exclusively on mobile and tablet devices where the sidebar is hidden. On desktops, navigation is cleanly handled by the main sidebar.
        </p>
        <div className="text-[11px] text-emerald-800 font-semibold bg-emerald-50/60 p-2 rounded-lg border border-emerald-200">
          Result: A clean, distraction-free workspace on every device.
        </div>
      </div>

      {/* Problem 2 */}
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[#F2F8EF] text-[#4B7F3A] flex items-center justify-center font-bold text-xs">
            2
          </div>
          <h4 className="font-bold text-xs text-[#102033]">
            Fixed Browser Back Button &amp; Shareable Tab Links
          </h4>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>What users experienced:</strong> When switching between sections (like moving from Inspections to Attendance), the web address bar did not change. If a Supervisor refreshed their browser or clicked the browser Back button, they were thrown back to the overview screen and lost their place.
        </p>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>How it was improved:</strong> Every dashboard section now syncs to clear URL address parameters (for example, <code>/dashboard?tab=inspections</code>). Refreshing the page or using browser Back and Forward buttons now works reliably.
        </p>
        <div className="text-[11px] text-emerald-800 font-semibold bg-emerald-50/60 p-2 rounded-lg border border-emerald-200">
          Result: You can bookmark specific tabs and use your browser buttons naturally without losing your place.
        </div>
      </div>

      {/* Problem 3 */}
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[#F2F8EF] text-[#4B7F3A] flex items-center justify-center font-bold text-xs">
            3
          </div>
          <h4 className="font-bold text-xs text-[#102033]">
            Reduced Unnecessary Loading Spinners in the Student Directory
          </h4>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>What users experienced:</strong> Every time a user clicked over to the Student Directory, the screen flashed with a full loading spinner—even if they had just visited that tab seconds earlier. This caused noticeable delays in the field.
        </p>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>How it was improved:</strong> We added smart background caching. If student records for your cluster are already loaded and no new search filters have been entered, the directory opens immediately without a full re-fetch.
        </p>
        <div className="text-[11px] text-emerald-800 font-semibold bg-emerald-50/60 p-2 rounded-lg border border-emerald-200">
          Result: Significantly faster tab switching with reduced screen flicker.
        </div>
      </div>

      {/* Problem 4 */}
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[#F2F8EF] text-[#4B7F3A] flex items-center justify-center font-bold text-xs">
            4
          </div>
          <h4 className="font-bold text-xs text-[#102033]">
            Safe School Inspections Without Accidental Record Edits
          </h4>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>What users experienced:</strong> When Supervisors clicked into a school profile to check classrooms or facilities, there was a risk that clicking an edit button might accidentally change school settings or teacher allocations.
        </p>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>How it was improved:</strong> We implemented a strict <em>Read-Only Inspection Mode</em>. When a Supervisor opens any school profile, all data is clearly visible, but editing controls are locked.
        </p>
        <div className="text-[11px] text-emerald-800 font-semibold bg-emerald-50/60 p-2 rounded-lg border border-emerald-200">
          Result: Supervisors can explore school data with complete confidence, knowing official records remain protected.
        </div>
      </div>

      {/* Problem 5 */}
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[#F2F8EF] text-[#4B7F3A] flex items-center justify-center font-bold text-xs">
            5
          </div>
          <h4 className="font-bold text-xs text-[#102033]">
            Seamless Workspace Switching for Dual-Duty Educators
          </h4>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>What users experienced:</strong> Teachers who also served as cluster supervisors previously had difficulty accessing their teaching tools versus their supervisory tools, leading to confusion about which workspace was active.
        </p>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>How it was improved:</strong> We introduced the Mode Switcher menu in the dashboard header. With one tap, users can toggle between their Teacher, Headmaster, or Supervisor workspaces.
        </p>
        <div className="text-[11px] text-emerald-800 font-semibold bg-emerald-50/60 p-2 rounded-lg border border-emerald-200">
          Result: One unified account handles all your professional responsibilities effortlessly.
        </div>
      </div>
    </div>

    {/* ── Section 11: Common Questions & Helpful Tips ── */}
    <SectionTitle>11. Frequently Asked Questions &amp; Helpful Tips</SectionTitle>

    <div className="space-y-3 my-6">
      <FaqItem
        category="Access"
        question="Why can't I see a school that is located just outside my cluster?"
        answer="Access is strictly governed by municipal administrative assignments. You can only view and inspect schools that are explicitly assigned to your supervision cluster by Town Administration. If your cluster assignment has changed, contact the Town Education Office to update your official cluster roster."
        evidence="Verified against cluster boundary access rules and active test suites."
      />

      <FaqItem
        category="Inspections"
        question="Can I edit an inspection report after submitting it?"
        answer="While an inspection is in DRAFT status, you can freely update scores, checklists, and remarks. Once submitted to the Town Directorate, the report is locked to preserve official audit integrity. If corrections are needed, Town Administration can return the report with review notes, allowing you to revise and resubmit."
        evidence="Verified against inspection state lifecycle rules."
      />

      <FaqItem
        category="Transfers"
        question="Why can't I approve a teacher's transfer joining directly from my dashboard?"
        answer="To ensure local campus accountability, physical joining must be confirmed by the Headmaster of the destination school where the teacher will physically report. Supervisors have the authority to initiate transfer recommendations, but final campus joining remains the responsibility of the receiving Headmaster."
        evidence="Verified against transfer route authorization rules."
      />

      <FaqItem
        category="Attendance"
        question="Can a Supervisor mark student attendance during an unannounced school visit?"
        answer="No. Daily student attendance must be marked by designated Period 1 Class Teachers and verified by the school Headmaster. During inspections, Supervisors perform independent physical headcounts to audit and verify the accuracy of the school's recorded attendance."
        evidence="Verified against attendance engine permissions."
      />

      <FaqItem
        category="Documents"
        question="What file types and sizes are supported when uploading signed inspection copies?"
        answer="To ensure legal archiving standards and prevent malicious files, the platform accepts only valid PDF documents up to 10 Megabytes (MB). Every uploaded file undergoes binary header verification before being stored."
        evidence="Verified against file upload security validation."
      />

      <FaqItem
        category="Dual Roles"
        question="If I switch from Supervisor mode to Teacher mode, will I lose my inspection drafts?"
        answer="No. All your inspection drafts and notes are safely saved to your user profile in the central database. Switching modes only changes your active workspace view; it never erases your work or affects your records in either role."
        evidence="Verified against workspace context switching service."
      />
    </div>
  </div>
);
