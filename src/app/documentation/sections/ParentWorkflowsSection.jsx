'use client';

import React from 'react';
import {
  Users,
  Shield,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Clock,
  KeyRound,
  Heart,
  GraduationCap,
  Award,
  ClipboardCheck,
  BookOpen,
  FileText,
  Lock,
  Layers,
  Code2,
  Bug,
  ArrowRight,
  Compass,
  RefreshCw,
  UserPlus,
  Building2,
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
  ReasoningCard,
  FailureRecoveryCard,
  VerificationBox,
  CrossQuestions,
} from '../components/DocPrimitives';

const scrollToSubSection = (elementId) => {
  if (typeof document !== 'undefined') {
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
};

export const ParentWorkflowsSection = () => (
  <div id="parent-portal">
    <DocHeader
      title="Parent &amp; Guardian Portal — Complete User Guide &amp; Technical Architecture"
      badge="5. Core Operational Engines"
      subtitle="Comprehensive family guide and engineering manual explaining parent account registration, 7-day verification rules, multi-level Class Teacher and Head Master child verification, the unassigned-teacher waiting queue, multi-child switching, unlinking governance, BFF security, and verified bug post-mortems."
    />

    {/* Metadata Ribbon */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">PORTAL ROLE &amp; SCOPE</div>
        <div className="text-sm font-black text-[#102033]">PARENT &bull; Level 10</div>
        <div className="text-xs text-[#526477]">SCOPES.CHILD (Verified Only)</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">VERIFICATION MODEL</div>
        <div className="text-sm font-black text-[#4B7F3A]">Teacher + 5-Point HM</div>
        <div className="text-xs text-[#526477]">No SMS OTP Dependency</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">LIFECYCLE PROTECTION</div>
        <div className="text-sm font-black text-[#4B7F3A]">Permanent After Verified</div>
        <div className="text-xs text-[#526477]">Waiting Queue Pauses Clock</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">PARENT SECURITY SUITES</div>
        <div className="text-sm font-black text-emerald-700">108 / 108 Tests PASS</div>
        <div className="text-xs text-[#526477]">6 Dedicated Parent Suites</div>
      </div>
    </div>

    {/* In-Page Quick Jump Table of Contents */}
    <div className="p-4 sm:p-5 rounded-2xl bg-[#F2F8EF]/70 border border-[#C9DFBC] mb-8">
      <div className="flex items-center gap-2 mb-3">
        <Compass className="w-4 h-4 text-[#4B7F3A]" />
        <h2 className="text-xs font-extrabold uppercase tracking-wider text-[#102033]">
          In This Guide — Jump to Section
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs">
        {[
          { id: 'par-user-account', label: '1. Parent Account & 7-Day Verification' },
          { id: 'par-user-linking', label: '2. Linking a Child (Step-by-Step)' },
          { id: 'par-user-waiting', label: '3. When No Class Teacher Is Assigned' },
          { id: 'par-user-multichild', label: '4. Managing Multiple Children' },
          { id: 'par-user-requests', label: '5. Active Requests, History & Unlinking' },
          { id: 'par-user-childinfo', label: '6. Viewing Child Attendance, Marks & Notices' },
          { id: 'par-user-privacy', label: '7. Safety & Privacy in Plain English' },
          { id: 'par-user-faq', label: '8. Troubleshooting & Common Questions' },
          { id: 'par-tech-history', label: '9. Technical History (WHAT / WHY / HOW)' },
          { id: 'par-tech-qa', label: '10. Architectural Cross-Questions (Q&A)' },
          { id: 'par-tech-bugs', label: '11. Verified Bug Post-Mortems' },
          { id: 'par-tech-security', label: '12. Security, RBAC & Maintenance Map' },
        ].map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollToSubSection(item.id)}
            className="text-left px-3 py-2 rounded-xl bg-white/90 hover:bg-white border border-[#C9DFBC]/70 hover:border-[#4B7F3A] text-[#102033] font-semibold transition-all flex items-center justify-between gap-2 cursor-pointer"
          >
            <span className="truncate">{item.label}</span>
            <ArrowRight className="w-3 h-3 text-[#4B7F3A] shrink-0" />
          </button>
        ))}
      </div>
    </div>

    <Callout type="info" title="Important System Rule: Physical Institutional Verification (No SMS OTP)">
      Parents do <strong>not</strong> verify child links using SMS verification codes. Because child privacy is strictly protected under Town Municipal Corporation (TMC) Liaquatabad policy, every parent-child connection passes through a <strong>multi-level school review</strong>: you submit a request in the portal, your child&apos;s Class Teacher reviews class records, and the school Head Master verifies your original CNIC and your child&apos;s NADRA B-Form in person. Sections 1–8 explain everything you need as a parent; Sections 9–12 provide technical architecture and engineering history for developers.
    </Callout>

    {/* ════════════════════════════════════════════════════════════════════════
        SECTION 1: PARENT ACCOUNT
       ════════════════════════════════════════════════════════════════════════ */}
    <div id="par-user-account" className="scroll-mt-20">
      <SectionTitle>1. Parent Account Registration, Login &amp; The 7-Day Verification Window</SectionTitle>
      <p className="text-xs text-[#526477] leading-relaxed mb-4">
        Any mother, father, or legal guardian with a child attending a municipal school in Liaquatabad Town can register one Parent Portal account and connect all of their children &mdash; even if their children attend different municipal schools.
      </p>

      <Steps
        items={[
          {
            step: '1',
            title: 'Create Your Parent Account (/register-parent)',
            desc: 'Complete the 4-step registration form: (1) Personal Details & 13-digit CNIC, (2) Residential Address (permanent & current address), (3) Occupation & Employment information, and (4) Strong Password + Terms Declaration + simple Math CAPTCHA. Your email, phone number, and CNIC must each be unique.',
          },
          {
            step: '2',
            title: 'Sign In Immediately (/login)',
            desc: 'Your Parent account activates right away so you can access your Parent Dashboard and submit child-link requests. To reset a forgotten password later, click "Forgot Password?" (/forgot-password) for a 6-digit email recovery code.',
          },
          {
            step: '3',
            title: 'Understand the 7-Day Physical Verification Window',
            desc: 'While your account is unverified (zero verified children yet), a banner at the top of your dashboard shows your 7-day countdown deadline (in Pakistan Standard Time, PKT) along with automated reminders at 72 hours, 24 hours, and 6 hours remaining.',
          },
          {
            step: '4',
            title: 'Account Verification vs. Child-Link Verification',
            desc: 'Your Parent Account only needs to satisfy physical verification ONCE. As soon as a Head Master approves your first child link, your account becomes permanently verified and never expires — even if that child later transfers or is unlinked. Each additional child still receives their own separate child-link check.',
          },
        ]}
      />

      <Callout type="warning" title="What Happens If 7 Days Pass Without Any Verified Child?">
        If a newly registered Parent account completes zero physical child verifications within 7 days (and is not paused waiting for staff assignment), the automated lifecycle sweep marks the account <code>EXPIRED</code> and releases your email, phone, and CNIC so unverified accounts do not accumulate personal information indefinitely. You can always register a fresh account once you are ready to visit the school.
      </Callout>
    </div>

    {/* ════════════════════════════════════════════════════════════════════════
        SECTION 2: LINKING A CHILD
       ════════════════════════════════════════════════════════════════════════ */}
    <div id="par-user-linking" className="scroll-mt-20">
      <SectionTitle>2. How to Link a Child (Step-by-Step Institutional Workflow)</SectionTitle>
      <p className="text-xs text-[#526477] leading-relaxed mb-4">
        Before starting, keep three things handy: your child&apos;s <strong>School Name</strong>, their <strong>General Register (GR) Number</strong> (printed on admission receipts and old report cards), and your <strong>original CNIC + child&apos;s NADRA B-Form</strong> for the final school office check.
      </p>

      <Steps
        items={[
          {
            step: '1',
            title: 'Search by School & GR Number (?tab=link_ward)',
            desc: 'Open the "Link a Student" tab (or click "Link Another Child" at the top of your dashboard). Select your child\'s municipal school, enter their GR Number, and click "Search Student". (Automatic server check)',
          },
          {
            step: '2',
            title: 'Confirm the Masked Student Preview',
            desc: 'For child safety, the screen displays only the student\'s masked name (for example, "M******d A*i"), school photo if available, school name, class, section, and enrollment status. If this child is already linked to you or already has an open request from you, the portal tells you right away. (Automatic server check)',
          },
          {
            step: '3',
            title: 'Choose Your Relationship & Submit Link Request',
            desc: 'Select Father, Mother, or Legal Guardian. If you choose Legal Guardian, a notice reminds you to present official NADRA guardianship or court custody papers at the school. Click "Submit Link Request". (User action)',
          },
          {
            step: '4',
            title: 'Class Teacher Review ("Waiting for Class Teacher")',
            desc: 'Your request goes directly to your child\'s designated Class Teacher (not subject teachers), who checks classroom attendance and enrollment records. The teacher either recommends your request to the Head Master or declines it with a written reason if details do not match. (Requires Class Teacher action)',
          },
          {
            step: '5',
            title: 'Head Master Physical Document Verification ("Waiting for Head Teacher")',
            desc: 'Once the Class Teacher recommends your request, visit your school office during school hours with your original CNIC and your child\'s original NADRA B-Form (plus custody papers for legal guardians). The Head Master checks 5 mandatory items in the school system (CNIC, B-Form, Admission Ledger, Relationship, and Student Identity) and approves the link. (Requires in-person visit + Head Master action)',
          },
          {
            step: '6',
            title: 'Full Parent Access Unlocked (VERIFIED)',
            desc: 'You receive an in-app notification confirming verification. Your child immediately appears in the "My Children" switcher bar at the top of your dashboard, unlocking attendance, report cards, homework, and notices.',
          },
        ]}
      />

      <TerminalBlock title="INSTITUTIONAL 4-STAGE LINK FLOW">
{`[Stage 1: Parent Submits Request]
       │
       ├─(Class Teacher Assigned)─────► PENDING_TEACHER_APPROVAL ("Waiting for Class Teacher")
       │                                      │
       │                                      ├─(Teacher Declines)──► REJECTED (Shows Reason; Can Retry)
       │                                      │
       │                                      ▼ (Teacher Recommends)
       │                                PENDING_HM_APPROVAL ("Waiting for Head Teacher")
       │                                      │
       │                                      ├─(HM Declines)──────► REJECTED (Can Retry)
       │                                      ▼ (HM 5-Point Physical Check Passed)
       │                                   VERIFIED ("My Children" Access Unlocked!)
       │
       └─(No Class Teacher Assigned)──► WAITING_STAFF_ASSIGNMENT (7-Day Expiry Clock PAUSED)
                                              │
                                              ▼ (HM Assigns Class Teacher -> Auto-Routed)`}
      </TerminalBlock>
    </div>

    {/* ════════════════════════════════════════════════════════════════════════
        SECTION 3: NO ASSIGNED CLASS TEACHER
       ════════════════════════════════════════════════════════════════════════ */}
    <div id="par-user-waiting" className="scroll-mt-20">
      <SectionTitle>3. What Happens If Your Child&apos;s Class Has No Assigned Class Teacher</SectionTitle>
      <p className="text-xs text-[#526477] leading-relaxed mb-4">
        Sometimes a newly created class section does not yet have a Class Teacher assigned in the school&apos;s digital schedule. Instead of rejecting your request or letting the Head Master skip the teacher check, the system uses a smart waiting queue to protect both fairness and your account deadline:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <InfoCard
          icon={<Clock className="w-4 h-4" />}
          color="amber"
          title="1. Request Status & Clock Pause"
          desc="Your request enters 'Waiting for Staff Assignment' (WAITING_STAFF_ASSIGNMENT). Your 7-day verification deadline automatically pauses so you are never penalized or expired while waiting for school staffing."
        />
        <InfoCard
          icon={<Building2 className="w-4 h-4" />}
          color="green"
          title="2. Head Master Alerted Automatically"
          desc="The school Head Master receives an automatic system alert asking them to assign a Class Teacher to that section. Under institutional rules, the Head Master cannot bypass the Class Teacher review step."
        />
        <InfoCard
          icon={<RefreshCw className="w-4 h-4" />}
          color="emerald"
          title="3. Automatic Resume Upon Assignment"
          desc="The moment the Head Master assigns a Class Teacher to that section, your waiting request automatically moves to 'Waiting for Class Teacher', the teacher is notified, and your paused time is added back fairly."
        />
      </div>

      <Callout type="info" title="What Should You Do If a Request Stays in 'Waiting for Staff Assignment'?">
        You do not need to cancel or resubmit your request &mdash; doing so would only reset your queue position. Your account is protected while waiting. If several school days pass without change, gently remind the school office or Head Master that your child&apos;s section needs a Class Teacher designated in the portal.
      </Callout>
    </div>

    {/* ════════════════════════════════════════════════════════════════════════
        SECTION 4: MULTIPLE CHILDREN
       ════════════════════════════════════════════════════════════════════════ */}
    <div id="par-user-multichild" className="scroll-mt-20">
      <SectionTitle>4. Managing Multiple Children &amp; Switching Between Profiles</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2.5">
          <h4 className="font-bold text-xs text-[#102033] uppercase tracking-wider flex items-center gap-2">
            <Users className="w-4 h-4 text-[#4B7F3A]" /> Adding &amp; Switching Children
          </h4>
          <ul className="text-xs text-[#526477] space-y-2 list-disc list-inside leading-relaxed">
            <li><strong>Link Children Across Different Schools:</strong> One parent account can link children in different grades or different TMC Liaquatabad municipal schools.</li>
            <li><strong>My Children Bar:</strong> Verified children appear as green selector buttons at the top of your dashboard showing their name, GR number, and school code.</li>
            <li><strong>Instant Clean Switching:</strong> Tapping another child clears the previous child&apos;s loaded marks, attendance, and homework from your screen immediately before loading the newly selected child&apos;s records.</li>
          </ul>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2.5">
          <h4 className="font-bold text-xs text-[#102033] uppercase tracking-wider flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#4B7F3A]" /> Independent Child Verification Rule
          </h4>
          <ul className="text-xs text-[#526477] space-y-2 list-disc list-inside leading-relaxed">
            <li><strong>No Automatic Sibling Access:</strong> Linking and verifying one child does <em>not</em> automatically reveal brothers or sisters enrolled at the same school.</li>
            <li><strong>Separate Verification Per Child:</strong> Submit a separate link request for each child using their individual GR Number. Each child maintains their own independent verification status.</li>
            <li><strong>When One Link Is Pending, Rejected, or Revoked:</strong> A rejected, pending, or revoked link for Child B never blocks your active verified access to Child A.</li>
          </ul>
        </div>
      </div>
    </div>

    {/* ════════════════════════════════════════════════════════════════════════
        SECTION 5: REQUEST MANAGEMENT & UNLINKING
       ════════════════════════════════════════════════════════════════════════ */}
    <div id="par-user-requests" className="scroll-mt-20">
      <SectionTitle>5. Requests, Application History, Cancellation &amp; Formal Unlinking</SectionTitle>
      <p className="text-xs text-[#526477] leading-relaxed mb-4">
        Your Parent Portal keeps active verified children clearly separated from pending applications and historical outcomes. Open the <strong>Link a Student</strong> tab (<code>?tab=link_ward</code>) to inspect both your <strong>Active Requests</strong> and <strong>Past Requests</strong> tables.
      </p>

      <ComparisonTable
        headers={['Status Label in Portal', 'Internal State Code', 'Meaning & Available Parent Action']}
        rows={[
          {
            left: 'My Children (Verified)',
            right: 'VERIFIED',
            extra: 'Active approved child visible in top switcher. Parent cannot directly delete/revoke; click "Request Record Unlinking" on Student Overview to ask the Head Master to review removal.',
          },
          {
            left: 'Waiting for Staff Assignment',
            right: 'WAITING_STAFF_ASSIGNMENT',
            extra: 'Section has no Class Teacher yet. Expiry clock paused. Parent may tap "Cancel Request" if submitted in error.',
          },
          {
            left: 'Waiting for Class Teacher',
            right: 'PENDING_TEACHER_APPROVAL',
            extra: 'Assigned Class Teacher is reviewing school records. Parent may tap "Cancel Request" anytime before approval.',
          },
          {
            left: 'Waiting for Head Teacher',
            right: 'PENDING_HM_APPROVAL',
            extra: 'Recommended by Class Teacher; awaiting final in-person CNIC/B-Form inspection by Head Master. Parent may tap "Cancel Request".',
          },
          {
            left: 'Unlink Requested • In Review',
            right: 'VERIFIED (unlinkRequestStatus: PENDING)',
            extra: 'Shown on a verified child card while the Head Master reviews your unlinking request. Child access continues until HM approves or declines.',
          },
          {
            left: 'Declined',
            right: 'REJECTED',
            extra: 'Moved to Past Requests with the teacher or HM explanation reason. You may fix issues and submit a fresh request anytime.',
          },
          {
            left: 'Cancelled',
            right: 'CANCELLED',
            extra: 'You voluntarily cancelled a pending request before approval. Moved to Past Requests; you may resubmit anytime.',
          },
          {
            left: 'Expired',
            right: 'EXPIRED',
            extra: 'Pending claim closed when an unverified account exceeded the 7-day verification window.',
          },
          {
            left: 'Revoked by School',
            right: 'REVOKED',
            extra: 'Previously verified child access ended by Head Master (either due to your approved unlink request or administrative/custody action). Preserved in history.',
          },
        ]}
      />

      <Callout type="warning" title="Why Can't Parents Remove a Verified Child Immediately Without HM Review?">
        To maintain clean institutional records, prevent accidental data loss, and protect custody audit trails, parents cannot unilaterally revoke a verified child link themselves (attempting to hit the direct revoke endpoint returns <code>403 Forbidden</code>). Instead, use <strong>Request Record Unlinking</strong> on the child&apos;s Overview card, enter a clear reason (at least 10 characters), and submit it to your school Head Master. If the Head Master declines your unlink request, your link stays <code>VERIFIED</code> and you can submit a new unlink request later if circumstances change.
      </Callout>
    </div>

    {/* ════════════════════════════════════════════════════════════════════════
        SECTION 6: VIEWING CHILD INFORMATION
       ════════════════════════════════════════════════════════════════════════ */}
    <div id="par-user-childinfo" className="scroll-mt-20">
      <SectionTitle>6. What Verified Parents Can View Across Dashboard Tabs</SectionTitle>
      <p className="text-xs text-[#526477] leading-relaxed mb-4">
        Every tab on the Parent Dashboard reflects only the currently selected verified child in your <strong>My Children</strong> bar:
      </p>

      <ComparisonTable
        headers={['Dashboard Tab', 'Information Displayed (Verified Child Required)']}
        rows={[
          {
            left: 'Student Overview (?tab=overview)',
            right: 'Student full name, lifecycle status, parental relationship, GR number, class, section, school name & EMIS code, school holiday/closure banner if closed today, 4 summary metric cards (Attendance Rate, Latest Exam Grade, Active Homework count, Official Notices count), next 3 due homework items, 4 most recent attendance days, and the Request Record Unlinking button.',
          },
          {
            left: 'Attendance (?tab=attendance)',
            right: 'Overall working days, Days Present, Days Absent, Approved Leave count, and a "Daily Attendance Records (Last 30 Days)" list showing exact dates, weekdays, status badges (PRESENT, ABSENT, LEAVE), and teacher remarks.',
          },
          {
            left: 'Report Cards (?tab=marksheets)',
            right: 'Published examination cards only (drafts hidden). Shows Academic Year, Term, Verification Status, Class Rank, Grade, Percentage, Obtained/Max marks, full subject-by-subject scores (Theory, Practical, Total, Pass/Fail), and a 1-click "Download PDF" marksheet button.',
          },
          {
            left: 'Homework (?tab=homework)',
            right: 'Active homework tasks assigned to your child\'s class & section over recent lookback windows (14 days default), showing Subject tag, Due Date, full Title & Description, Teacher Name/Designation, and downloadable non-expired attachments. (Read-only display; no parent upload action).',
          },
          {
            left: 'Notices & Circulars (?tab=circulars)',
            right: 'Published school, town (Liaquatabad), and global notices scoped for parents and students of your child\'s school, including issuer details and downloadable notice PDF attachments.',
          },
          {
            left: 'Link a Student (?tab=link_ward)',
            right: 'GR Number lookup wizard, relationship selector, Active Requests queue (with Cancel Request), and Past Requests archive.',
          },
          {
            left: 'Activity Log (?tab=activity & /activity-history)',
            right: 'Plain-language record of your account and child-link events (claim submitted, teacher/HM decisions, unlink requests, logins, password updates, attendance/result updates) with technical server telemetry removed.',
          },
          {
            left: 'Parent Account Profile (/profile) & Holidays (/holidays)',
            right: 'View your full guardian registration particulars, verified children list, application history, and activity log at /profile; view municipal gazetted holidays at /holidays. Note: Class Timetables are currently available in the Student Portal, not as a separate Parent Dashboard tab.',
          },
        ]}
      />
    </div>

    {/* ════════════════════════════════════════════════════════════════════════
        SECTION 7: SECURITY & PRIVACY IN PLAIN ENGLISH
       ════════════════════════════════════════════════════════════════════════ */}
    <div id="par-user-privacy" className="scroll-mt-20">
      <SectionTitle>7. How the Portal Protects Child Privacy (Plain-English Security)</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <InfoCard
          icon={<Shield className="w-4 h-4" />}
          color="green"
          title="Why Search Hides Full Names Before Approval"
          desc="When you type a GR number into Link a Student, the system only shows a masked name (such as M******d A*i) and never reveals whether another parent is already linked. Strangers cannot browse student lists or discover private family information."
        />
        <InfoCard
          icon={<Lock className="w-4 h-4" />}
          color="purple"
          title="Why Server Checks Every Single Click"
          desc="Even when you switch children in your browser, every attendance, marksheet, homework, and notice request is checked separately by the server against your verified Parent-Student Link. Switching a child in the interface never grants access to another family's student."
        />
        <InfoCard
          icon={<UserPlus className="w-4 h-4" />}
          color="cyan"
          title="Both Parents & Legal Guardians Supported"
          desc="Both Mother and Father can register separate accounts and verify against the same child at the school office (subject to court custody directives). Linking one child never exposes brothers or sisters without separate verification."
        />
        <InfoCard
          icon={<AlertTriangle className="w-4 h-4" />}
          color="amber"
          title="Immediate Stop When Access Ends"
          desc="If a Head Master revokes a link (for example after an approved unlink request or custody change), access to that student's marks, attendance, homework, and notices stops immediately on the very next screen load."
        />
      </div>
    </div>

    {/* ════════════════════════════════════════════════════════════════════════
        SECTION 8: PARENT TROUBLESHOOTING & FAQS
       ════════════════════════════════════════════════════════════════════════ */}
    <div id="par-user-faq" className="scroll-mt-20">
      <SectionTitle>8. Parent Troubleshooting &amp; Frequently Asked Questions</SectionTitle>
      <div className="space-y-2.5 my-4">
        <FaqItem
          category="Login"
          question="I cannot log in or my old parent account stopped working."
          answer="Confirm your email and password and solve the math CAPTCHA. If more than 7 days passed after registration without verifying at least one child at school (and without a waiting-for-staff-assignment claim pausing your clock), your unverified account may have expired and released your email/CNIC. In that case, register a fresh account at /register-parent when you are ready to visit the school."
          evidence="parentAccountLifecycleService.js:processParentLifecycleSweep (7-day expiry rule)"
        />
        <FaqItem
          category="Password"
          question="I forgot my parent account password."
          answer="Click 'Forgot Password?' on the sign-in screen (/forgot-password), enter your registered email address, and solve the CAPTCHA. A 6-digit password reset code will be sent to your email so you can choose a new password at /reset-password."
          evidence="ForgotPasswordPage.jsx & ResetPasswordPage.jsx"
        />
        <FaqItem
          category="Lookup"
          question="Child lookup says 'No enrolled student record found' or shows an error."
          answer="Double-check that you picked the right school in the dropdown and entered your child's exact numeric GR Number (found on their admission receipt or report card, not their roll seat number). If the school recently changed paper registers or hasn't entered the student yet, ask the School Clerk or Head Master to confirm the student's digital GR Number."
          evidence="parentLinkController.js:handleLookupWard (strict { schoolId, grNumber } query)"
        />
        <FaqItem
          category="Duplicates"
          question="It says 'Request in Progress' or I get a duplicate claim error when trying to link my child."
          answer="You already have an active request or verified link for that child on your own account. Scroll down inside the 'Link a Student' tab to Active Requests to see whether it is waiting for Staff Assignment, Class Teacher, or Head Teacher."
          evidence="ParentStudentLink.js partial unique index parent_student_active_partial_unique (409 Conflict)"
        />
        <FaqItem
          category="Waiting Queue"
          question="My request says 'Waiting for Staff Assignment'. Do I need to do anything?"
          answer="No immediate action or cancellation is needed. Your child's section currently has no assigned Class Teacher in the portal, so your 7-day verification timer is safely paused. The Head Master has been alerted to assign a teacher. Once assigned, your request advances automatically. You can politely check with the school office if it stays unchanged for several school days."
          evidence="parentLinkController.js:217-282 & parentClaimReconciliationService.js"
        />
        <FaqItem
          category="Pending"
          question="My request is stuck on 'Waiting for Class Teacher' or 'Waiting for Head Teacher'."
          answer="If it says 'Waiting for Class Teacher', your child's Class Teacher has not yet reviewed the application. If it says 'Waiting for Head Teacher', the Class Teacher has already recommended it, and the school is waiting for you to visit the Head Master's office during school hours with your original CNIC and your child's original NADRA B-Form for final 5-point physical approval."
          evidence="teacherParentLinkController.js -> parentLinkController.js:handleHmVerifyParentLink"
        />
        <FaqItem
          category="Rejected"
          question="My link request was Declined. Can I apply again?"
          answer="Yes. Look under 'Past Requests' in the Link a Student tab to read the exact reason recorded by the Class Teacher or Head Master. After fixing any wrong documents or confirming enrollment details with the school office, you can search again and submit a new link request immediately."
          evidence="ParentStudentLink.js excludes REJECTED/CANCELLED/REVOKED/EXPIRED from active unique index"
        />
        <FaqItem
          category="Multi-Child"
          question="I linked one child, why can't I see my younger child at the same school?"
          answer="Every student relationship is verified independently for privacy and custody safety. Even if both children share the same parents, click 'Link Another Child', search using the second child's GR Number, and complete verification for them."
          evidence="verifyParentWardLink.js verifies exact (parentId, studentProfileId, status: 'VERIFIED')"
        />
        <FaqItem
          category="Unlinking"
          question="I requested to unlink a child, why is the child still showing in my dashboard?"
          answer="To protect official records, unlinking requires Head Master review rather than happening instantaneously. While your request is reviewed, the child card displays 'Unlink Requested • In Review'. Once the Head Master approves the request, the student disappears from My Children and moves to Past Requests as 'Revoked by School'."
          evidence="parentLinkController.js:1208-1217 (403 on direct revoke), 1224-1348 (formal unlink request)"
        />
        <FaqItem
          category="Missing Info"
          question="Report cards, homework, or attendance are empty after switching children."
          answer="First tap 'Refresh' at the top right of the Parent Portal. Remember that Report Cards appear only after an exam is formally PUBLISHED by the school and department; Homework only shows active tasks from the last 14 days; and Attendance shows records once daily roll calls have been submitted for that student."
          evidence="ParentDashboard.jsx & parentBffController.js"
        />
      </div>
    </div>

    {/* ════════════════════════════════════════════════════════════════════════
        SECTION 9: TECHNICAL HISTORY & FULL-STACK IMPLEMENTATION
       ════════════════════════════════════════════════════════════════════════ */}
    <div id="par-tech-history" className="scroll-mt-20">
      <SectionTitle>9. Development History &amp; Full-Stack Architecture (WHAT / WHY / HOW)</SectionTitle>
      <p className="text-xs text-[#526477] leading-relaxed mb-4">
        Built across several iterative architectural waves documented in Git history, tests, and implementation plans, the Parents Portal combines user-friendly guardian workflows with strict anti-BOLA BFF enforcement and fail-safe lifecycle automation.
      </p>

      <TerminalBlock title="PARENTS PORTAL END-TO-END ARCHITECTURAL PIPELINE">
{`[Parent Browser / PWA]
  ├─ UI: RegisterParentPage.jsx (4-step + CNIC + CAPTCHA)
  │      ParentDashboard.jsx (My Children Switcher, 7 tabs, Active vs Past Requests, Unlink Modal)
  │      ParentProfilePage.jsx (/profile self & /parents/:id/profile staff view)
  └─ Redux & Bridge: parentSlice.js (purges activeWardData on switch/pending/rejected/logout)
                       └─► parentService.js ─► apiClient.js (HttpOnly cookie RTR)
                                                  │
                                                  ▼
[Express Routes & Middleware (server/)]
  ├─ /api/v1/parent/lookup-ward        ──► parentLookupLimiter ─► handleLookupWard (masked PII, self-only check)
  ├─ /api/v1/parent/initiate-claim     ──► authLimiter + idempotency ─► handleInitiateClaim
  ├─ /api/v1/parent/claims/:id/cancel  ──► handleCancelClaim (Pending statuses only; Atomic CAS)
  ├─ /api/v1/parent/claims/:id/revoke  ──► handleParentRevokeLink (Always 403 Forbidden!)
  ├─ /api/v1/parent/claims/:id/request-unlink ──► handleParentRequestUnlink -> HM alert
  └─ /api/v1/parent/wards/:studentProfileId/* ──► authenticate + PARENT role + verifyParentWardLink (VERIFIED gate)
                                                  │
                                                  ▼
[Staff & Lifecycle Engines]
  ├─ Teacher Desk: teacherParentLinkRoutes.js -> Section.classTeacherId authorization
  ├─ HM Desk:      hmParentLinkRoutes.js -> 5-Point Physical Checklist + Reject Unlink / Revoke
  ├─ Cluster/Dir:  userManagementController.js + authorizeScope.js (HM/Teacher/Supervisor/Admin scoped)
  └─ Workers:      parentAccountLifecycleService.js (7-day cutover fail-safe) + parentClaimReconciliationService.js`}
      </TerminalBlock>

      <ComparisonTable
        headers={['Architectural Milestone & Evidence', 'WHAT Was Built & WHY It Evolved', 'HOW It Works & Accepted Trade-Offs']}
        rows={[
          {
            left: '1. Removal of SMS OTP & Multi-Level Institutional Gate (Commits 71bc457, c1012ec, af18188)',
            right: 'WHAT: Replaced speculative third-party SMS OTP linking with Class Teacher Review -> Head Master 5-Point Physical Verification Checklist (Original CNIC, B-Form, Ledger, Relationship, Identity). • WHY: Municipal platform lacks a live third-party SMS gateway, and physical document inspection prevents SIM-swap custody stalking.',
            extra: 'HOW: Teacher routes PENDING_TEACHER_APPROVAL -> PENDING_HM_APPROVAL; HM CAS-updates to VERIFIED only when all 5 boolean checks equal true. Trade-off: Requires 1 in-person school visit.',
          },
          {
            left: '2. Smart Waiting Queue & Idempotent Claim Reconciler (Commit ea7c8e7)',
            right: 'WHAT: Added WAITING_STAFF_ASSIGNMENT state, clock-pause fields on ParentStudentLink, Class Teacher assignment auto-transition hook, and idempotent reconcilePendingParentClaims({ dryRun }). • WHY: Avoided deadlock when a section has no Class Teacher without letting HM bypass Class Teacher review.',
            extra: 'HOW: academicController assignment hooks + reconciler sum totalStaffAssignmentPausedMs cleanly onto the parent\'s 7-day budget. Trade-off: Slight complexity in deadline math, 100% covered by 13 tests.',
          },
          {
            left: '3. Lifecycle Decoupling & Unlink Request Governance (Commits 6d89bf4, b378142, a2981f2)',
            right: 'WHAT: Separated verified relationships (My Children) from Active/Past Requests; locked /revoke to 403; built /request-unlink + HM approve/reject-unlink endpoints; enforced permanent parent exemption after first verifiedAt/hasSatisfiedVerificationDeadline; gated worker by fail-safe PARENT_POLICY_CUTOVER_DATE. • WHY: Prevents verified parents from accidentally losing accounts after a single child link revocation or legacy database cutover.',
            extra: 'HOW: Fail-closed cutover parser aborts sweep if config missing/invalid; unlink rejection clears unlinkRequestedAt so future legitimate unlink requests remain allowed.',
          },
          {
            left: '4. Cross-Portal Guardian Directory & Strict Data Scoping (Commits 80f9594, f6ba8dc, d421aeb, a3b79da, 7fa700d)',
            right: 'WHAT: Unlocked ParentProfilePage & GuardiansDirectoryView across HM, Teacher, Supervisor, and Admin portals with role-specific filtering in handleGetUsers, handleGetUserById, and authorizeScope B3 shield. • WHY: School and cluster staff needed guardian visibility without leaking siblings across classes, schools, or clusters.',
            extra: 'HOW: HM locked to schoolId; Teacher locked to Section.classTeacherId + TeachingAssignment enrolled students; Supervisor locked to assignedSchools + verified links; Admin locked to townId.',
          },
          {
            left: '5. Parent Activity Feed Consumer Sanitization (Commit d421aeb)',
            right: 'WHAT: Enforced PARENT_ALLOWED_ACTIONS allowlist and consumer-safe field projection inside activityHistoryController.js. • WHY: Parents must not see raw JSON snapshots, internal model names, server IP addresses, session hashes, or request IDs.',
            extra: 'HOW: formatAuditLogForViewer strips technical telemetry specifically for ROLES.PARENT while preserving full forensic fields for auditors.',
          },
        ]}
      />
    </div>

    {/* ════════════════════════════════════════════════════════════════════════
        SECTION 10: ARCHITECTURAL CROSS-QUESTIONING
       ════════════════════════════════════════════════════════════════════════ */}
    <div id="par-tech-qa" className="scroll-mt-20">
      <SectionTitle>10. Parent Portal Architectural Cross-Questioning (Q&amp;A)</SectionTitle>
      <CrossQuestions
        title="Reasoning, Security Trade-Offs &amp; Design Alternatives"
        items={[
          {
            category: 'Documented Decision',
            question: 'Why are Parents banned from directly revoking a verified child link themselves, requiring an HM-approved Unlink Request instead?',
            answer:
              'Documented Historical Decision (Commit a2981f2) -> Verified relationships represent authoritative municipal school custody links, whereas pending applications are citizen-owned drafts. If parents could click "Revoke" directly, accidental removals or post-dispute deletions could erase live custody linkage without school oversight. Parents can cancel pending requests freely, while verified unlinking submits a reasoned request (?reason >= 10 chars) to the Head Master. Alternative (Infinite Campus district unlink model): Direct user unlinking speeds removal but weakens school-level audit governance.',
            evidence: 'server/src/controllers/parentLinkController.js:1208-1348 & parent_lifecycle_and_expiry.test.js Tests 6.1–6.6',
          },
          {
            category: 'Documented Decision',
            question: 'Why does Parent account verification stay permanently satisfied even if every linked child is later revoked or transferred?',
            answer:
              'Documented Historical Decision (Commits a2981f2 & 80f9594) -> Lifecycle Decoupling Invariant: Once a parent physically visits an institution with CNIC/B-Form and completes verification once (verifiedAt or hasSatisfiedVerificationDeadline: true), their civil identity is proven. Re-subjecting proven accounts to an automated 7-day purge cron after child graduation/revocation would cause catastrophic data loss. Inferred Alternative: Checking active VERIFIED count > 0 on every sweep would fail whenever a single child graduates before a younger sibling joins.',
            evidence: 'server/src/services/parentAccountLifecycleService.js:89-108, 256-279 & parent_directory_and_profile.test.js Test 21',
          },
          {
            category: 'Documented Decision',
            question: 'Why couldn\'t the Head Master simply bypass the Class Teacher stage when a section lacked an assigned teacher?',
            answer:
              'Documented Historical Decision (Commit ea7c8e7, Approved Hybrid Queue Plan) -> The Class Teacher holds daily classroom familiarity with children and families and serves as the first institutional integrity check. Allowing direct HM bypass for unassigned sections would incentivize leaving sections unassigned to shortcut verification. Instead, WAITING_STAFF_ASSIGNMENT alerts the HM to fix staffing and fairly pauses the parent\'s clock. Alternative: Direct HM fast-track bypass (rejected explicitly during design review).',
            evidence: 'server/src/controllers/parentLinkController.js:638-645 & parent_waiting_queue_and_reconciliation.test.js Test 6',
          },
          {
            category: 'Security Design',
            question: 'Why does the backend ignore StudentProfile.parentUserId for BFF authorization and require ParentStudentLink lookup instead?',
            answer:
              'Inferred & Documented Security Rule (ParentStudentLink.js:10-14, verifyParentWardLink.js) -> A StudentProfile document holds a single legacy parentUserId reference, whereas real families routinely have BOTH Mother and Father holding separate verified accounts, plus status transitions (PENDING, REJECTED, REVOKED). Authorizing via ParentStudentLink(parentId === req.user._id, studentProfileId, verificationStatus === "VERIFIED") supports multiple verified guardians per student and instant per-relationship revocation without corrupting student records.',
            evidence: 'server/src/middlewares/verifyParentWardLink.js:38-80 & parent_bff_security.test.js (16/16 PASS)',
          },
          {
            category: 'Frontend State',
            question: 'Why does parentSlice purge activeWardData immediately inside setSelectedWardId, pending, and rejected?',
            answer:
              'Documented Engineering Fix (Commit 60d0e07) -> Trusting the browser UI state without purging caused Child A\'s marksheets/attendance to flash on screen while Child B\'s API call was in-flight, or stay stuck on screen if Child B\'s fetch failed. Purging activeWardData guarantees zero cross-child stale visual leakage. Combined with backend verifyParentWardLink, UI cache bugs can never bypass authorization.',
            evidence: 'client/src/store/slices/parentSlice.js:208-214 & parentSlice extraReducers',
          },
        ]}
      />
    </div>

    {/* ════════════════════════════════════════════════════════════════════════
        SECTION 11: BUG POST-MORTEMS
       ════════════════════════════════════════════════════════════════════════ */}
    <div id="par-tech-bugs" className="scroll-mt-20">
      <SectionTitle>11. Verified Bug History &amp; Engineering Post-Mortems</SectionTitle>
      <div className="space-y-4 my-4">
        <FailureRecoveryCard
          failureMode="BUG 1 — HTTP 500 CastError During Guardian Directory Text Search (Commit 0950288)"
          impact="Typing partial names ('tar', 'tari', 'tariq') in Guardians Directory threw HTTP 500 Internal Server Error ('Failed to retrieve guardians directory records')."
          handling="Root Cause: In StudentProfile, grNumber is stored as a numeric field (type: Number). The search query builder in handleGetUsers attempted to run a text regex match ({ grNumber: { $regex: 'tar' } }) against that numeric field. Mongoose attempted to cast the text string into a number, throwing CastError: Cast to number failed for value 'i' at path 'grNumber'. Furthermore, unit mocks didn't call Mongoose .cast(), hiding the crash offline."
          recovery="Fix: Restricted grNumber matching strictly to numeric input (/^\\d+$/.test(trimmedSearch) && length <= 8) parsed with parseInt, added unformatted 13-digit CNIC normalization, and updated test mocks to run real Schema casting. Verified by Tests 7–9 in parent_directory_and_profile.test.js (29/29 PASS)."
        />

        <FailureRecoveryCard
          failureMode="BUG 2 — Teacher Guardian Sibling Data Leak in User Detail Inspection (Commit d421aeb)"
          impact="A Teacher assigned only to Class 2-A inspecting a parent's profile (/api/v1/users/:id) could see older siblings enrolled in Class 8-B within the same school."
          handling="Root Cause: While handleGetUsers restricted the list query to class parents, handleGetUserById populated parentLinks using only schoolId without filtering linkedStudents by the Teacher's assigned sections and teaching assignments."
          recovery="Fix: Applied strict Section (classTeacherId) and TeachingAssignment ID filters inside handleGetUserById and handleGetUsers link enrichment for ROLES.TEACHER. Verified by Test 22 in parent_directory_and_profile.test.js (anti-sibling leak assertion)."
        />

        <FailureRecoveryCard
          failureMode="BUG 3 — Multi-Child Stale Redux Cache Bleeding & Duplicate Unlink Lockout (Commits 60d0e07, 80f9594)"
          impact="(A) Switching between children flashed previous child's marksheets until fetch completed. (B) After an HM declined an unlink request (REJECTED), unlinkRequestedAt stayed populated, permanently blocking the parent from submitting any future unlink request (HTTP 409)."
          handling="(A) setSelectedWardId did not reset activeWardData. (B) handleParentRequestUnlink checked truthiness of unlinkRequestedAt instead of checking unlinkRequestStatus === 'PENDING'."
          recovery="Fix: (A) parentSlice resets activeWardData cleanly on child switch/pending/rejected. (B) handleHmRejectUnlinkRequest clears unlinkRequestedAt = null and sets unlinkRequestStatus = 'REJECTED'; handleParentRequestUnlink checks PENDING status only. Verified by Tests 19–20 in parent_directory_and_profile.test.js."
        />

        <FailureRecoveryCard
          failureMode="BUG 4 — Missing Supervisor Guardians Directory & Cluster Boundary Hardening (Commits a3b79da, 7fa700d)"
          impact="Supervisors had no Guardians Directory entry in sidebar/mobile navigation, were routed to legacy dashboard tabs for Staff/Students, and handleGetUsers ignored Supervisor schoolId dropdown filters."
          handling="Root Cause: navigationConfig.js & SupervisorNavigation.jsx omitted /directory?tab=guardians; authorizeScope B3 Supervisor check did not mandate verificationStatus: 'VERIFIED'."
          recovery="Fix: Harmonized cross-portal navigation across Teacher, HM, Supervisor, and Admin; added cluster schoolId validation in userManagementController.js (403 on foreign cluster school); mandated VERIFIED link in authorizeScope.js. Verified by Tests 24–29 in parent_directory_and_profile.test.js (29/29 PASS) & Vite client build."
        />
      </div>
    </div>

    {/* ════════════════════════════════════════════════════════════════════════
        SECTION 12: SECURITY, RBAC & MAINTENANCE
       ════════════════════════════════════════════════════════════════════════ */}
    <div id="par-tech-security" className="scroll-mt-20">
      <SectionTitle>12. Staff &amp; Parent RBAC Boundaries, Test Evidence &amp; Maintenance Guide</SectionTitle>
      <ComparisonTable
        headers={['Institutional Role', 'Permitted Guardian / Child Visibility & Actions', 'Non-Negotiable Server Boundary & Audit']}
        rows={[
          {
            left: 'PARENT (Level 10 · CHILD)',
            right: 'View ONLY own VERIFIED linked children via BFF routes (/parent/wards/:id/*). Submit claims, cancel pending claims, request unlink.',
            extra: 'Blocked from unverified/sibling/other-family students (403 + PARENT_CROSS_WARD_ACCESS_BLOCKED); direct /revoke locked to 403.',
          },
          {
            left: 'TEACHER (Level 30 · CLASS_SECTION)',
            right: 'If designated Section.classTeacherId: review & recommend/decline claims for enrolled students in that section. Inspect guardians only for assigned class students.',
            extra: 'Subject teachers receive 403 on claim review; sibling students outside teacher sections stripped from parent profiles.',
          },
          {
            left: 'HM (Level 50 · SCHOOL)',
            right: 'Inspect parent directory for own school; complete mandatory 5-point physical verification; reject/revoke links; process parent unlink requests; allocate Class Teachers.',
            extra: 'Cannot skip Class Teacher stage on WAITING_STAFF_ASSIGNMENT or PENDING_TEACHER_APPROVAL (400). Cross-school blocked (403).',
          },
          {
            left: 'SUPERVISOR (Level 60 · ASSIGNED_SCHOOLS)',
            right: 'Read-only cluster oversight of Guardians Directory (/directory?tab=guardians) filtered by assignedSchools with verified links only.',
            extra: 'Cross-cluster guardian access blocked (403 + CROSS_CLUSTER_GUARDIAN_ACCESS_BLOCKED); foreign schoolId filter rejected (403).',
          },
          {
            left: 'ADMIN (Level 80 · TOWN)',
            right: 'Read-only directory oversight within assigned townId jurisdiction; cannot substitute for school HM during physical 5-point endorsement.',
            extra: 'HM verification endpoint rejects ADMIN with 403 Forbidden (local campus accountability preserved).',
          },
        ]}
      />

      <VerificationBox
        sourceFile="server/src/controllers/parentLinkController.js, parentBffController.js & parentAccountLifecycleService.js"
        testSuite="6 Dedicated Parent Security, Lifecycle, Waiting Queue & Directory Test Suites"
        command="node server/tests/parent_directory_and_profile.test.js && node server/tests/parent_lifecycle_and_expiry.test.js && node server/tests/parent_waiting_queue_and_reconciliation.test.js && node server/tests/parent_student_link_multi_level.test.js && node server/tests/parent_adversarial_security.test.js && node server/tests/parent_bff_security.test.js"
        result="108 / 108 TESTS PASSED (29 + 22 + 13 + 18 + 10 + 16)"
      />

      <Callout type="info" title="Maintenance Trigger Checklist for Engineers">
        Update <code>ParentWorkflowsSection.jsx</code> whenever: (1) ParentStudentLink lifecycle states or verification gates change, (2) Parent 7-day expiry/cutover policies change, (3) BFF ward endpoints add or alter capabilities (such as adding Class Timetable to ParentDashboard in the future), or (4) Role scoping rules change across Teacher, HM, Supervisor, or Admin guardian views.
      </Callout>
    </div>
  </div>
);
