import React from 'react';
import {
  GraduationCap,
  Briefcase,
  Users,
  Award,
  Calendar,
  FileText,
  Clock,
  Shield,
  CheckCircle2,
  AlertTriangle,
  AlertCircle,
  ArrowRightLeft,
  FileCheck,
  CheckSquare,
  Lock,
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

export const HmWorkflowsSection = () => (
  <div id="hm-operational-workflows">
    <DocHeader
      title="Head Master (HM) Operational Manual & Workflow Contracts"
      badge="5. Core Operational Engines"
      subtitle="Official Operational Handbook & Institutional Contracts for School Building Executives governing Enrolment, Marksheets, Single-Cohort Allocations, Emergency Weather Closures, and Staff Muster Governance."
    />

    {/* Metadata Ribbon */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">ROLE CODE &amp; LEVEL</div>
        <div className="text-sm font-black text-[#102033]">HM &bull; Level 50</div>
        <div className="text-xs text-[#526477]">Head Master / Head Mistress</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">JURISDICTIONAL SCOPE</div>
        <div className="text-sm font-black text-[#006AC7]">SCHOOL Scope</div>
        <div className="text-xs text-[#526477]">Single Assigned Campus Gates</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">IMPLEMENTATION STATUS</div>
        <div className="text-sm font-black text-[#4B7F3A]">IMPLEMENTED &amp; TESTED</div>
        <div className="text-xs text-[#526477]">10 Core Workflows Verified</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">OPERATIONAL SIGN-OFF</div>
        <div className="text-sm font-black text-amber-600">Approval PENDING</div>
        <div className="text-xs text-[#526477]">Owner Operational Sign-Off Gate</div>
      </div>
    </div>

    {/* ── Section 1: Institutional Authority & Non-Negotiable Boundaries ── */}
    <SectionTitle>1. Institutional Authority &amp; Non-Negotiable Boundaries</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      The <strong>Head Master / Head Mistress (HM)</strong> is the senior institutional executive of an individual municipal government school. System authority is strictly bounded by the physical gates of their assigned school:
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      {/* 1.1 Permitted Operational Authority */}
      <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-3">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
          <CheckCircle2 className="w-4 h-4 text-[#4B7F3A]" />
          <h4 className="font-bold text-xs text-[#102033] uppercase tracking-wider">1.1 Permitted Operational Authority</h4>
        </div>
        <ul className="text-xs text-[#526477] space-y-2 list-disc list-inside leading-relaxed">
          <li>Full operational visibility over enrolled students and faculty assigned to their school.</li>
          <li>Enrolling new students, generating General Register (GR) numbers, and updating student profiles.</li>
          <li>Executing authorized, reasoned, audited student strike-offs (<code>status: &apos;STRUCK_OFF&apos;</code>).</li>
          <li>Allocating teaching duties and designating Period 1 Class Teachers across classes/cohorts.</li>
          <li>Verifying submitted student examination marks and publishing official A4 report cards.</li>
          <li>Generating official Legal Landscape Gazette Tabulation Sheets for board records.</li>
          <li>Declaring same-day or future school emergency closures (e.g. monsoon rain flooding).</li>
          <li>Publishing school notices and circulars with emergency pinning.</li>
          <li>Inspecting physical NADRA B-Forms and approving Parent-Student link verification claims.</li>
          <li>Confirming physical joining of incoming teachers transferred by Town Administration.</li>
        </ul>
      </div>

      {/* 1.2 Prohibited Actions */}
      <div className="p-5 rounded-xl bg-white border border-red-200 shadow-xs space-y-3 bg-red-50/20">
        <div className="flex items-center gap-2 pb-2 border-b border-red-100">
          <AlertTriangle className="w-4 h-4 text-red-600" />
          <h4 className="font-bold text-xs text-red-900 uppercase tracking-wider">1.2 Prohibited Actions (Non-Negotiable Governance Walls)</h4>
        </div>
        <ol className="text-xs text-[#526477] space-y-2.5 list-decimal list-inside leading-relaxed">
          <li>
            <strong className="text-red-900">Cross-School Boundary Isolation:</strong> An HM cannot query, view, modify, or export data belonging to any other school. Any cross-school request triggers HTTP <code>403 Forbidden</code> and emits an immutable security audit event.
          </li>
          <li>
            <strong className="text-red-900">Zero Fee Management:</strong> Free public education charter; HM has no authority to record or collect student fees.
          </li>
          <li>
            <strong className="text-red-900">No Inter-School Transfer Initiation:</strong> Inter-school transfers are decreed exclusively by Town Administration (<code>ADMIN</code> / <code>SUPER_ADMIN</code>). An HM cannot reassign faculty to another school.
          </li>
          <li>
            <strong className="text-red-900">No Institutional Structural Mutations:</strong> HM cannot alter centrally provisioned classes, numeric grades, or curriculum subjects.
          </li>
          <li>
            <strong className="text-red-900">No Hard Deletions:</strong> Student and staff records must be archived or transitioned through lifecycle statuses; hard deletion is blocked at the database driver level.
          </li>
        </ol>
      </div>
    </div>

    {/* ── Section 2: Workflow 1: Student Admission, Roster Management & Strike-Off ── */}
    <SectionTitle>2. Workflow 1: Student Admission, Roster Management &amp; Strike-Off</SectionTitle>

    <div className="space-y-4 mb-6">
      <h4 className="text-xs font-bold text-[#102033] uppercase tracking-wider">2.1 Enrollment Flow</h4>
      <TerminalBlock title="WORKFLOW 1.1: STUDENT ENROLLMENT FLOW">
{`HM Clicks "Admit Student" ──▶ Form Validation (Zod) ──▶ apiClient.post('/students')
  │
  ▼
studentController.js:handleEnrollStudent
  │
  ├── 1. Validates assignedSchoolId === req.user.schoolId
  ├── 2. grNumberService generates deterministic sequential GR Number for this school
  ├── 3. StudentProfile.create({ lifecycleStatus: 'ACTIVE', schoolId: actor.schoolId })
  └── 4. AuditLog.create({ action: 'STUDENT_ENROLLED', targetId: studentProfile._id })`}
      </TerminalBlock>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs mb-4">
        <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
          <span className="font-bold text-[#102033]">Frontend Route:</span>
          <div className="font-mono text-[#006AC7]">/directory?tab=students</div>
        </div>
        <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
          <span className="font-bold text-[#102033]">Redux Slice:</span>
          <div className="font-mono text-purple-700">hmSlice.js (enrollStudent)</div>
        </div>
        <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
          <span className="font-bold text-[#102033]">Backend Route:</span>
          <div className="font-mono text-emerald-700">POST /api/v1/students</div>
        </div>
        <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
          <span className="font-bold text-[#102033]">Validation Fields:</span>
          <div className="text-[#526477]">Name, DOB, gender, address, guardian, phone</div>
        </div>
      </div>

      <h4 className="text-xs font-bold text-[#102033] uppercase tracking-wider pt-2">2.2 Non-Destructive Student Strike-Off</h4>
      <p className="text-xs text-[#526477] leading-relaxed">
        When a student leaves or is formally struck off due to continuous unexplained absence:
      </p>

      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <ol className="text-xs text-[#526477] space-y-1.5 list-decimal list-inside leading-relaxed">
          <li>HM opens student actions menu in <code>/directory</code> and selects <strong>&ldquo;Strike Off Student&rdquo;</strong>.</li>
          <li>A confirmation modal requires an explicit <strong>Institutional Justification Reason</strong> (minimum 10 characters).</li>
          <li>Backend controller (<code>studentController.js:handleStrikeOffStudent</code>):
            <ul className="pl-6 space-y-1 list-disc list-inside pt-1">
              <li>Transitions <code>StudentProfile.lifecycleStatus</code> from <code>ACTIVE</code> to <code>STRUCK_OFF</code>.</li>
              <li>Records <code>struckOffDate: new Date()</code>, <code>struckOffReason</code>, and <code>struckOffBy: req.user._id</code>.</li>
              <li>Invalidates any active authenticated sessions for that student (<code>tokenVersion</code> incremented).</li>
              <li>Auto-revokes active <code>ParentStudentLink</code> documents (<code>status: &apos;REVOKED&apos;</code>).</li>
              <li>Writes immutable <code>AuditLog</code> entry (<code>action: &apos;STUDENT_STRUCK_OFF&apos;</code>).</li>
            </ul>
          </li>
        </ol>
        <div className="pt-2 text-[11px] text-[#4B7F3A] font-semibold">
          &bull; Test Evidence: <code>hm_student_directory_and_enrollment.test.js</code> (Assertions 14&ndash;18, PASS).
        </div>
      </div>
    </div>

    {/* ── Section 3: Workflow 2: Teaching Allocation & Class Teacher Designation ── */}
    <SectionTitle>3. Workflow 2: Teaching Allocation &amp; Class Teacher Designation</SectionTitle>

    <div className="space-y-4 mb-6">
      <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 space-y-1.5">
        <h4 className="text-xs font-bold text-[#006AC7] uppercase tracking-wider">3.1 Municipal Single-Cohort Model (sectionId: null)</h4>
        <p className="text-xs text-[#526477] leading-relaxed">
          In Liaquatabad Town municipal government schools, primary and middle classes operate as whole cohorts without subdivided &ldquo;A/B/C&rdquo; sections.
        </p>
        <ul className="text-xs text-[#526477] space-y-1 list-disc list-inside">
          <li>The allocation modal in <code>/directory?tab=staff</code> defaults to <strong>&ldquo;-- Whole Class / Single Cohort (No Section) --&rdquo;</strong>.</li>
          <li><code>TeachingAssignment</code> supports <code>sectionId: null</code>, representing full instructional responsibility for that grade.</li>
        </ul>
      </div>

      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <h4 className="text-xs font-bold text-[#102033] uppercase tracking-wider">3.2 Designating Period 1 Class Teacher</h4>
        <ol className="text-xs text-[#526477] space-y-1.5 list-decimal list-inside leading-relaxed">
          <li>HM selects an active class/cohort and clicks <strong>&ldquo;Designate Class Teacher&rdquo;</strong>.</li>
          <li>Backend controller (<code>academicController.js:handleAssignClassTeacher</code>):
            <ul className="pl-6 space-y-1 list-disc list-inside pt-1">
              <li>Verifies candidate belongs to <code>req.user.schoolId</code> and holds <code>isTeachingStaff: true</code>.</li>
              <li>Updates <code>Class.classTeacherId</code> or <code>Section.classTeacherId</code>.</li>
              <li>Writes immutable <code>AuditLog</code> entry (<code>action: &apos;SECTION_CLASS_TEACHER_DESIGNATED&apos;</code>).</li>
            </ul>
          </li>
        </ol>
        <div className="pt-2 text-[11px] text-[#4B7F3A] font-semibold">
          &bull; Test Evidence: <code>hm_class_teacher_and_transfer_authority.test.js</code> (Assertions 1&ndash;14, PASS).
        </div>
      </div>
    </div>

    {/* ── Section 4: Workflow 3: Examination Results, Marksheets & Tabulation Sheets ── */}
    <SectionTitle>4. Workflow 3: Examination Results, Marksheets &amp; Tabulation Sheets</SectionTitle>

    <div className="space-y-4 mb-6">
      <TerminalBlock title="WORKFLOW 3: EXAMINATION LIFECYCLE & GAZETTE RENDERING">
{`Teacher Submits Draft Marks ──▶ HM Reviews in /exams ──▶ HM Batch Verifies
                                                              │
                                                              ▼
               ┌──────────────────────────────────────────────┴──────────────────────────────┐
               ▼                                                                             ▼
   1-Click A4 Official Report Card                                           Official Gazette Tabulation Sheet
   (marksheetController.js / PDFKit)                                         (Legal Landscape 14"x8.5" PDF)
   - 700 Max Marks Aggregate                                                 - Complete cohort roster & rank
   - Islamiat 20/80 Split                                                    - Subject-by-subject tabulation
   - Drawing Letter Grade (A-F)                                              - Official HM signature seal
   - Official Board Gazette Watermark                                        - Permanent government audit record`}
      </TerminalBlock>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
          <h4 className="text-xs font-bold text-[#102033] uppercase tracking-wider">4.1 Batch Verification Gate</h4>
          <ul className="text-xs text-[#526477] space-y-1.5 list-disc list-inside leading-relaxed">
            <li>Endpoint: <code>PATCH /api/v1/exams/:id/verify-batch</code></li>
            <li>Only marks in status <code>SUBMITTED</code> can be transitioned to <code>VERIFIED_BY_HM</code>.</li>
            <li><strong>Zero-Audit Guarantee:</strong> If 0 marks were modified, exactly 0 audit records are written.</li>
            <li>Once verified, examination status transitions to <code>PUBLISHED</code>, making results visible on student and parent dashboards.</li>
          </ul>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
          <h4 className="text-xs font-bold text-[#102033] uppercase tracking-wider">4.2 PDF Rendering Standards</h4>
          <ul className="text-xs text-[#526477] space-y-1.5 list-disc list-inside leading-relaxed">
            <li><strong>A4 Marksheet PDF:</strong> Generated via server-side streaming PDFKit with authentic DMC header, watermark seal, and QR code verification placeholder.</li>
            <li><strong>Legal Landscape Tabulation Sheet:</strong> Rendered in <code>14&quot; x 8.5&quot;</code> landscape orientation to accommodate all academic subjects, aggregate, percentage, and rank on a single high-density official government sheet.</li>
          </ul>
        </div>
      </div>
      <div className="text-[11px] text-[#4B7F3A] font-semibold">
        &bull; Test Evidence: <code>hm_official_marksheet_and_tabulation.test.js</code> (Assertions 1&ndash;18, PASS).
      </div>
    </div>

    {/* ── Section 5: Workflow 4: Monsoon Emergency Rain Closures & Holiday Governance ── */}
    <SectionTitle>5. Workflow 4: Monsoon Emergency Rain Closures &amp; Holiday Governance</SectionTitle>

    <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-3 mb-6">
      <h4 className="text-xs font-bold text-[#102033] uppercase tracking-wider">5.1 Declaring Emergency School Closure</h4>
      <p className="text-xs text-[#526477] leading-relaxed">
        In the event of severe urban flooding or local emergencies in Liaquatabad Town:
      </p>
      <ol className="text-xs text-[#526477] space-y-2 list-decimal list-inside leading-relaxed">
        <li>HM navigates to <code>/holidays</code> and clicks <strong>&ldquo;Declare Emergency Closure&rdquo;</strong>.</li>
        <li>Scope is hard-locked to <code>scopeType: &apos;SCHOOL&apos;</code> and <code>finalSchoolId: actor.schoolId</code>.</li>
        <li>Backend controller (<code>holidayController.js:handleCreateHoliday</code>):
          <ul className="pl-6 space-y-1 list-disc list-inside pt-1">
            <li>Validates <code>startDate</code> and <code>endDate</code> in <code>YYYY-MM-DD</code> format.</li>
            <li>Calculates initial status deterministically:
              <br />
              &bull; <code>startDate &gt; todayPkt</code> &rarr; <code>status: &apos;SCHEDULED&apos;</code>
              <br />
              &bull; <code>startDate === todayPkt</code> &rarr; <code>status: &apos;ACTIVE&apos;</code>
            </li>
            <li>Dispatches emergency notifications to:
              <br />
              &ndash; All active students enrolled in the school.
              <br />
              &ndash; All verified parents linked via <code>ParentStudentLink</code>.
              <br />
              &ndash; All school teachers and support staff.
              <br />
              &ndash; Field Supervisors assigned to this school&apos;s cluster.
            </li>
          </ul>
        </li>
      </ol>
      <div className="pt-2 text-[11px] text-[#4B7F3A] font-semibold">
        &bull; Test Evidence: <code>closure_lifecycle_and_notifications.test.js</code> (Assertions 1&ndash;19, PASS).
      </div>
    </div>

    {/* ── Section 6: Workflow 5: Official Circulars & School Notices ── */}
    <SectionTitle>6. Workflow 5: Official Circulars &amp; School Notices</SectionTitle>

    <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-3 mb-6">
      <h4 className="text-xs font-bold text-[#102033] uppercase tracking-wider">6.1 Publishing Notices (/documents)</h4>
      <ul className="text-xs text-[#526477] space-y-1.5 list-disc list-inside leading-relaxed">
        <li>HM creates notice with title, reference number, body text, and optional attachment.</li>
        <li>Urgent priority automatically pins notice (<code>isPinned: true</code>) to the top of student and staff portals.</li>
        <li>Scoped strictly to <code>SCHOOL</code> and permitted audiences (<code>TEACHERS</code>, <code>STUDENTS</code>, <code>PARENTS</code>).</li>
        <li>Soft Archival: Notices are archived (<code>ARCHIVED</code>), preserving full government history.</li>
      </ul>
      <div className="pt-2 text-[11px] text-[#4B7F3A] font-semibold">
        &bull; Test Evidence: <code>hm_school_circulars_and_notices.test.js</code> (Assertions 1&ndash;22, PASS).
      </div>
    </div>

    {/* ── Section 7: Workflow 6: Parent-Student Link Verification Queue ── */}
    <SectionTitle>7. Workflow 6: Parent-Student Link Verification Queue</SectionTitle>

    <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-3 mb-6">
      <h4 className="text-xs font-bold text-[#102033] uppercase tracking-wider">7.1 NADRA Document Inspection &amp; Verification</h4>
      <p className="text-xs text-[#526477] leading-relaxed">
        When a parent claims a student via the Parent Portal:
      </p>
      <ol className="text-xs text-[#526477] space-y-2 list-decimal list-inside leading-relaxed">
        <li>Claim enters status <code>PENDING_HM_APPROVAL</code> after parent verifies mobile OTP.</li>
        <li>HM opens <code>/approvals</code> &rarr; <strong>&ldquo;Parent Ward Claims&rdquo;</strong> tab.</li>
        <li>HM checks physical government documents:
          <div className="pl-6 pt-1 space-y-1 text-slate-700 font-medium">
            <div>&bull; [x] Official NADRA B-Form inspected.</div>
            <div>&bull; [x] Guardian CNIC verified.</div>
          </div>
        </li>
        <li>HM clicks <strong>&ldquo;Verify &amp; Approve&rdquo;</strong> (<code>POST /api/v1/hm/parent-links/:linkId/verify</code>).</li>
        <li>Link transitions to <code>VERIFIED</code>. Parent gains immediate read-only access to ward attendance, homework, and marksheets.</li>
      </ol>
      <div className="pt-2 text-[11px] text-[#4B7F3A] font-semibold">
        &bull; Test Evidence: <code>parent_hm_verification_bridge.test.js</code> (Assertions 1&ndash;20, PASS).
      </div>
    </div>

    {/* ── Section 8: Workflow 7: Faculty Transfer Arrival Confirmation (Joining) ── */}
    <SectionTitle>8. Workflow 7: Faculty Transfer Arrival Confirmation (Joining)</SectionTitle>

    <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-3 mb-6">
      <h4 className="text-xs font-bold text-[#102033] uppercase tracking-wider">8.1 Processing Incoming Faculty</h4>
      <ol className="text-xs text-[#526477] space-y-2 list-decimal list-inside leading-relaxed">
        <li>Town Administration decrees an official teacher transfer order (<code>TransferRequest</code>).</li>
        <li>Source school issues formal relieving certificate. Transfer status becomes <code>RELIEVED</code>.</li>
        <li>Teacher arrives physically at the target school.</li>
        <li>Target HM opens <code>/transfers</code> and clicks <strong>&ldquo;Confirm Physical Joining&rdquo;</strong> (<code>PATCH /transfers/:id/approve-joining</code>).</li>
        <li>Backend updates <code>User.schoolId = targetSchoolId</code>, sets <code>TransferRequest.status = &apos;JOINED&apos;</code>, clears previous teaching assignments, and records arrival in <code>AuditLog</code>.</li>
      </ol>
      <div className="pt-2 text-[11px] text-[#4B7F3A] font-semibold">
        &bull; Test Evidence: <code>hm_transfer_lifecycle_and_security.test.js</code> (Assertions 1&ndash;24, PASS).
      </div>
    </div>

    {/* ── Section 9: Workflow 8: Staff Daily Attendance & 5-Minute Relaxation Queue ── */}
    <SectionTitle>9. Workflow 8: Staff Daily Attendance &amp; 5-Minute Relaxation Queue</SectionTitle>

    <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-3 mb-6">
      <h4 className="text-xs font-bold text-[#102033] uppercase tracking-wider">9.1 Verification Invariants &amp; Relaxation Badges</h4>
      <p className="text-xs text-[#526477] leading-relaxed">
        Teachers and non-teaching staff submit daily attendance check-ins from school premises:
      </p>
      <ol className="text-xs text-[#526477] space-y-2 list-decimal list-inside leading-relaxed">
        <li>Submissions enter status <code>PENDING</code> under the Head Master&apos;s school queue (<code>GET /api/v1/staff-attendance/pending</code>).</li>
        <li>
          <strong>5-Minute Relaxation Window (<code>APPROVAL_RELAXATION_WINDOW_MS = 300,000 ms</code>):</strong>
          <br />
          &bull; &le; 5 minutes: Displayed with a green <strong>Quick Approve</strong> badge. HM can approve with a single click; reason is optional.
          <br />
          &bull; &gt; 5 minutes: Displayed with an amber <strong>Late Approval Window Expired</strong> badge. An explicit text reason (&ge; 5 characters) explaining the delay is strictly enforced for audit logging.
        </li>
        <li><strong>Rejection Policy:</strong> Rejecting an attendance submission transitions status to <code>REJECTED</code> (Absent). A mandatory explanation (&ge; 5 characters) is strictly enforced.</li>
        <li><strong>Self-Action Prevention:</strong> HM cannot approve or reject their own attendance record; an attempt yields HTTP <code>403 Forbidden</code>.</li>
      </ol>
      <div className="pt-2 text-[11px] text-[#4B7F3A] font-semibold">
        &bull; Test Evidence: <code>leave_and_staff_attendance_lifecycle.test.js</code> (Assertions 35&ndash;39, PASS).
      </div>
    </div>

    {/* ── Section 10: Workflow 9: Faculty Casual Leave (CL) & Earned Leave (EL) Governance ── */}
    <SectionTitle>10. Workflow 9: Faculty Casual Leave (CL) &amp; Earned Leave (EL) Governance</SectionTitle>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <h4 className="text-xs font-bold text-[#102033] uppercase tracking-wider">10.1 Casual Leave (CL) Approval Flow</h4>
        <ol className="text-xs text-[#526477] space-y-1.5 list-decimal list-inside leading-relaxed">
          <li>Teachers submit Casual Leave via their portal, or HM initiates it on verbal notice (<code>POST /api/v1/leaves/hm-initiate</code>).</li>
          <li>Quota: Maximum 24 calendar days per calendar year. No carry-forward; resets on 1 January 00:00 PKT.</li>
          <li>Requests appear in HM&apos;s Pending Leaves Queue (<code>GET /api/v1/leaves/pending</code>).</li>
          <li>HM evaluates coverage and relief arrangements, then approves (<code>PATCH /api/v1/leaves/:id/approve</code>) or rejects with mandatory reason (<code>PATCH /api/v1/leaves/:id/reject</code>).</li>
          <li><strong>Direct Absent Recording:</strong> If a teacher is absent without notice, HM can record a direct unnotified absence entry via the HM Initiate action, generating an official audit record.</li>
        </ol>
      </div>

      <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <h4 className="text-xs font-bold text-[#102033] uppercase tracking-wider">10.2 Earned Leave (EL) Governance &amp; Administrative Ceiling</h4>
        <ol className="text-xs text-[#526477] space-y-1.5 list-decimal list-inside leading-relaxed">
          <li>Minimum duration: 3 consecutive calendar days.</li>
          <li><strong>Institutional Isolation:</strong> EL requests from school faculty appear in HM&apos;s queue strictly for operational visibility (reliever planning).</li>
          <li><strong>Approval Ceiling:</strong> Head Master has <strong>zero authority</strong> to approve Earned Leave. EL approval is strictly restricted to Admin (Level 80) or higher. Any approval attempt by HM triggers HTTP <code>403 Forbidden</code>.</li>
        </ol>
      </div>
    </div>
    <div className="text-[11px] text-[#4B7F3A] font-semibold mb-6">
      &bull; Test Evidence: <code>leave_and_staff_attendance_lifecycle.test.js</code> (Assertions 1&ndash;13, 24&ndash;28, PASS).
    </div>

    {/* ── Section 11: Workflow 10: Head Master Daily Self-Attendance Protocol ── */}
    <SectionTitle>11. Workflow 10: Head Master Daily Self-Attendance Protocol</SectionTitle>

    <div className="space-y-4 mb-6">
      <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <h4 className="text-xs font-bold text-[#102033] uppercase tracking-wider">11.1 Dedicated Self-Effective Attendance (/api/v1/staff-attendance/hm-self)</h4>
        <ol className="text-xs text-[#526477] space-y-1.5 list-decimal list-inside leading-relaxed">
          <li>Unlike regular staff whose attendance requires supervisory sign-off, Head Masters sign the institutional register as the head of campus.</li>
          <li>In the HM Dashboard, an <strong>HM Self-Attendance Bar</strong> provides a 1-click attendance sign-in for the current date.</li>
          <li>Calling <code>POST /api/v1/staff-attendance/hm-self</code>:
            <ul className="pl-6 space-y-1 list-disc list-inside pt-1">
              <li>Validates caller role is strictly <code>HM</code>.</li>
              <li>Sets <code>isHmSelfRecord: true</code>.</li>
              <li>Marks status immediately as <code>APPROVED</code> with <code>approvedAt: new Date()</code> and <code>approvedByUserId: actor._id</code>.</li>
              <li>Strictly enforces idempotency: only 1 self-attendance record allowed per calendar date (subsequent calls return <code>409 Conflict</code>).</li>
              <li>Emits an immutable <code>AuditLog</code> entry (<code>action: &apos;HM_SELF_ATTENDANCE_RECORDED&apos;</code>).</li>
            </ul>
          </li>
        </ol>
      </div>

      <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <h4 className="text-xs font-bold text-[#102033] uppercase tracking-wider">11.2 HM Casual Leave Submission &amp; Midnight Rollover</h4>
        <ol className="text-xs text-[#526477] space-y-1.5 list-decimal list-inside leading-relaxed">
          <li>When an HM requires Casual Leave, they submit the request through the portal.</li>
          <li>Because self-approval is forbidden, the HM&apos;s CL is routed to the assigned Field Supervisor or Town Administration.</li>
          <li><strong>Midnight Rollover &amp; Idempotent Absent Default (<code>processMidnightHmClTransition</code>):</strong>
            <ul className="pl-6 space-y-1 list-disc list-inside pt-1">
              <li>At 00:05 PKT each night, a scheduled cron job scans for HM CL requests for the previous day that remain in <code>PENDING</code> status.</li>
              <li>Any unapproved HM CL is transitioned to <code>SUPERSEDED</code> (<code>decisionReason: &apos;Auto-superseded at midnight PKT: CL not approved before date rollover&apos;</code>).</li>
              <li>An idempotent <code>StaffAttendanceRecord</code> with status <code>REJECTED</code> (Absent) is upserted for that date.</li>
              <li>An immutable audit trail entry (<code>action: &apos;HM_CL_MIDNIGHT_SUPERSEDED_ABSENT&apos;</code>) is recorded.</li>
            </ul>
          </li>
        </ol>
        <div className="pt-2 text-[11px] text-[#4B7F3A] font-semibold">
          &bull; Test Evidence: <code>leave_and_staff_attendance_lifecycle.test.js</code> (Assertions 20&ndash;23, 40&ndash;45, PASS).
        </div>
      </div>

      <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <h4 className="text-xs font-bold text-[#102033] uppercase tracking-wider">11.3 Late Correction Protocol (POST /api/v1/leave/:id/correct)</h4>
        <p className="text-xs text-[#526477] leading-relaxed">
          If an HM&apos;s CL request was superseded at midnight or rejected, an authorized superior (assigned Supervisor for that school cluster, or Admin+) can perform a Late Correction:
        </p>
        <ol className="text-xs text-[#526477] space-y-1.5 list-decimal list-inside leading-relaxed">
          <li><strong>Mandatory Free-Text Reason:</strong> Must be provided (minimum 5 characters, e.g., &ldquo;Hardcopy application approved by Town Office&rdquo;).</li>
          <li><strong>State Transition:</strong> <code>LeaveRequest.status</code> transitions from <code>SUPERSEDED</code> to <code>APPROVED</code>.</li>
          <li><strong>History Preservation:</strong> An immutable entry is appended to <code>correctionHistory</code> recording <code>previousStatus</code>, <code>newStatus</code>, <code>correctionReason</code>, <code>correctedBy</code>, <code>correctedAt</code>, and previous state snapshot.</li>
          <li><strong>Linked Attendance Non-Erasure:</strong> The linked <code>StaffAttendanceRecord</code> (previously defaulted to <code>REJECTED</code> / Absent) is updated to <code>APPROVED</code>. Crucially, the original Absent record and reason are <strong>NOT silently erased or deleted</strong>; the prior Absent reason is explicitly preserved in <code>lateApprovalReason</code> and audit trails.</li>
          <li><strong>Audit Trail:</strong> Emits <code>LEAVE_REQUEST_LATE_CORRECTION</code> in <code>auditlogs</code>.</li>
        </ol>
        <div className="pt-2 text-[11px] text-[#4B7F3A] font-semibold">
          &bull; Test Evidence: <code>leave_and_staff_attendance_lifecycle.test.js</code> (Assertions 98&ndash;113, PASS).
        </div>
      </div>
    </div>

    {/* Official Institutional Footer */}
    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center text-xs text-[#526477] mt-8">
      Official Head Master Workflow Contracts Maintained by the Education Department, Liaquatabad Town Centre (DMC) IT Security Office.
      <br />
      Synchronously tracked with <code>docs/HM_WORKFLOWS.md</code>.
    </div>
  </div>
);
