'use client';

import React from 'react';
import {
  GraduationCap,
  CalendarDays,
  Award,
  BookOpen,
  ClipboardCheck,
  FileText,
  IdCard,
  Shield,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Clock,
  KeyRound,
  Printer,
  QrCode,
  Download,
  Lock,
  UserCheck,
  Layers,
  Code2,
  Bug,
  ArrowRight,
  Compass,
  Sparkles,
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

export const StudentWorkflowsSection = () => (
  <div id="student-portal">
    <DocHeader
      title="Student Portal — Complete User Guide & Technical Architecture"
      badge="5. Core Operational Engines"
      subtitle="Step-by-step handbook for students covering portal login, account activation, daily timetable, attendance tracking, published exam marksheets, homework assignments, digital CR80 ID cards, and backend BFF isolation."
    />

    {/* Metadata Ribbon */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">PORTAL ROLE &amp; LEVEL</div>
        <div className="text-sm font-black text-[#102033]">STUDENT &bull; Level 10</div>
        <div className="text-xs text-[#526477]">SCOPES.SELF (Read-Only)</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">IMPLEMENTED MODULES</div>
        <div className="text-sm font-black text-[#4B7F3A]">9 Student Views Active</div>
        <div className="text-xs text-[#526477]">Dashboard, Profile, ID, Calendar</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">PUBLIC ID VERIFICATION</div>
        <div className="text-sm font-black text-[#4B7F3A]">QR + 32-Hex Token</div>
        <div className="text-xs text-[#526477]">CR80 &amp; A4 Print Layouts</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">ONBOARDING VERIFICATION</div>
        <div className="text-sm font-black text-emerald-700">21 / 21 Flow Tests PASS</div>
        <div className="text-xs text-[#526477]">Workspace Suite: See Findings</div>
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
          { id: 'stu-user-start', label: '1. Getting Started & Account Access' },
          { id: 'stu-user-profile', label: '2. Student Profile & Official PDF Dossier' },
          { id: 'stu-user-academics', label: '3. Attendance, Timetable & Academics' },
          { id: 'stu-user-exams', label: '4. Exams, Results & Marksheets' },
          { id: 'stu-user-homework', label: '5. Homework, Notices & Holidays' },
          { id: 'stu-user-idcard', label: '6. Digital Student ID Card & QR Scan' },
          { id: 'stu-user-restrictions', label: '7. Permissions & Read-Only Rules' },
          { id: 'stu-user-faq', label: '8. Troubleshooting & Common Questions' },
          { id: 'stu-tech-arch', label: '9. Development History (WHAT / WHY / HOW)' },
          { id: 'stu-tech-qa', label: '10. Architectural Decision Q&A' },
          { id: 'stu-tech-bugs', label: '11. Verified Bug & Finding Register' },
          { id: 'stu-tech-security', label: '12. Security, RBAC & Maintenance Map' },
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

    <Callout type="info" title="Part I: Student User Handbook — Plain-Language Practical Guide">
      Sections 1 through 8 are written directly for students and families using the portal on a phone, tablet, or computer. Technical implementation details and developer history begin in Section 9. For Head Master and Clerk student enrollment instructions, see{' '}
      <a href="#student-management" className="font-bold text-[#38662D] underline">
        Students, GR &amp; Digital ID Card Registry
      </a>
      .
    </Callout>

    {/* ════════════════════════════════════════════════════════════════════════
        SECTION 1: GETTING STARTED
       ════════════════════════════════════════════════════════════════════════ */}
    <div id="stu-user-start" className="scroll-mt-20">
      <SectionTitle>1. Getting Started: How to Activate Your Account &amp; Sign In</SectionTitle>
      <p className="text-xs text-[#526477] leading-relaxed mb-4">
        The Student Portal gives every actively enrolled municipal school student private online access to their class schedule, daily attendance percentages, homework instructions, published report cards, school circulars, and Digital Student Identity Card.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <InfoCard
          icon={<KeyRound className="w-4 h-4" />}
          color="green"
          title="Who Can Use the Student Portal?"
          desc="Any student whose enrollment is registered in an Education Department (TMC Liaquatabad) school with an ACTIVE status. If your record is marked TRANSFERRED, STRUCK_OFF, or INACTIVE, portal login access is automatically disabled."
        />
        <InfoCard
          icon={<GraduationCap className="w-4 h-4" />}
          color="cyan"
          title="How Students Receive Login Access"
          desc="Students join in two ways: (1) Your Head Master or school office registers your login credentials during admission, or (2) If you are already enrolled in school registers without an online password, you activate your account online."
        />
      </div>

      <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#102033] mb-3">
        A. Activating an Existing Enrolled Student Account
      </h4>
      <Steps
        items={[
          {
            step: '1',
            title: 'Open the Account Activation Screen',
            desc: 'From the portal sign-in page, click "Register / Activate Account" and open the Student Activation tab (/register-student?tab=activate-account).',
          },
          {
            step: '2',
            title: 'Verify Your School Identity (2-Factor Check)',
            desc: 'Select your Municipal School, enter either your General Register (GR) Number or Global Student ID (such as MMHA-0001), and enter your exact Date of Birth as recorded on your school admission register.',
          },
          {
            step: '3',
            title: 'Set Your Login Email & Password',
            desc: 'Enter your active email address and choose a strong password (at least 8 characters with uppercase, lowercase, number, and symbol). Click "Verify Email & Activate Portal Account" and confirm the 6-digit code sent to your email.',
          },
        ]}
      />

      <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#102033] mt-6 mb-3">
        B. Signing In &amp; Navigating Your Workspace
      </h4>
      <Steps
        items={[
          {
            step: '1',
            title: 'Sign In Safely at /login',
            desc: 'Enter your registered email address and password, solve the simple math verification question (anti-bot CAPTCHA), and click "Sign In".',
          },
          {
            step: '2',
            title: 'Desktop vs. Phone Navigation',
            desc: 'On computers and laptops, use the dark-green sidebar on the left side of the screen. On mobile phones and tablets, the sidebar hides automatically and a scrollable horizontal pill bar appears near the top of your dashboard so every tab stays one thumb-tap away.',
          },
          {
            step: '3',
            title: 'Understanding Your Overview Home Screen',
            desc: 'The Overview tab greets you using Karachi local time, displays your Class, Section, Roll/GR Number, and School Name, shows four quick summary cards (Attendance, Active Homework, Latest Exam Grade, Official Notices), and alerts you immediately if school is closed today for a holiday or emergency.',
          },
        ]}
      />
    </div>

    {/* ════════════════════════════════════════════════════════════════════════
        SECTION 2: PROFILE & PDF
       ════════════════════════════════════════════════════════════════════════ */}
    <div id="stu-user-profile" className="scroll-mt-20">
      <SectionTitle>2. Viewing Your Student Profile &amp; Downloading Official Records</SectionTitle>
      <p className="text-xs text-[#526477] leading-relaxed mb-4">
        Your Student Profile holds the official demographic and enrollment record maintained by your school. You can view it in brief on the Overview tab or click <strong>View Record</strong> (or open <strong>Student Profile</strong> in the sidebar at <code>/profile</code>) for the complete dossier.
      </p>

      <ComparisonTable
        headers={['Profile Section', 'Information Displayed to the Student', 'Can You Edit It?']}
        rows={[
          {
            left: 'Hero Summary Header',
            right: 'Official student portrait photo (or Graduation cap icon if not yet uploaded), General Register (GR #), Global Student ID, enrollment status badge (e.g. ACTIVE), instruction medium (Urdu, English, or Sindhi), Class, Section, Roll Number, and School EMIS code.',
            extra: 'Read-only. Managed by Head Master.',
          },
          {
            left: '1. Personal Information Card',
            right: 'Student Full Name, Father / Guardian Name and Relationship, Mother\'s Full Name, NADRA B-Form / Child Registration Certificate (CRC) Number, Guardian CNIC Number, Date of Birth (numeric and spelled out in words), Gender, Religion, Place of Birth, Guardian Cell Number, Official Portal Email, and Residential Address.',
            extra: 'Read-only. Students cannot hide or mask personal records.',
          },
          {
            left: '2. Enrolment Details Card',
            right: 'General Register (GR) Number, Admission Register Number, Global Student ID, Admission Type (New Admission vs. Migrated Paper Record), Medium of Instruction, Assigned School, Class, Section, Admission Date, and Admission Remarks.',
            extra: 'Read-only institutional asset.',
          },
        ]}
      />

      <Callout type="warning" title="Need to Correct a Spelling Mistake or Date of Birth?">
        Students cannot edit identity or academic records online. If your name spelling, Date of Birth, father&apos;s name, or B-Form number has a mistake, visit your school office with your original <strong>NADRA B-Form / CRC</strong> and ask the School Clerk or Head Master to update the official school register. To print or save your record for external submissions, use the <strong>Print Record</strong> or <strong>Download Official PDF</strong> buttons at the top of the <code>/profile</code> page.
      </Callout>
    </div>

    {/* ════════════════════════════════════════════════════════════════════════
        SECTION 3: ATTENDANCE, TIMETABLE & ACADEMICS
       ════════════════════════════════════════════════════════════════════════ */}
    <div id="stu-user-academics" className="scroll-mt-20">
      <SectionTitle>3. Checking Your Daily Attendance, Timetable &amp; Academic Schedule</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
            <ClipboardCheck className="w-4 h-4 text-[#4B7F3A]" />
            <h4 className="font-bold text-xs text-[#102033] uppercase tracking-wider">
              Daily &amp; Session Attendance (?tab=attendance)
            </h4>
          </div>
          <p className="text-xs text-[#526477] leading-relaxed">
            Your Class Teacher records morning attendance during official school hours (Pakistan Standard Time, PKT). Your Attendance tab automatically calculates three side-by-side summary cards plus a full monthly bar breakdown:
          </p>
          <ul className="text-xs text-[#526477] space-y-1.5 list-disc list-inside leading-relaxed">
            <li><strong>Current Month Card:</strong> Shows Present / Working Days percentage along with exact Present, Absent, and Approved Leave day counts.</li>
            <li><strong>Last Month Card:</strong> Preserves last month&apos;s verified attendance record for easy comparison.</li>
            <li><strong>Academic Session Card:</strong> Cumulative percentage computed from your official admission date across all working days.</li>
            <li><strong>Session Attendance History:</strong> Progress bars color-coded green at 75% or above and red below 75% to help you spot attendance drops early.</li>
          </ul>
          <p className="text-[11px] text-[#526477] bg-slate-50 p-2.5 rounded-lg border border-slate-200/70">
            <strong>What if my attendance shows Absent when I was in class?</strong> Speak to your Period 1 Class Teacher or Head Master immediately. Under municipal rules, same-day corrections can only be certified by your Head Master.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
            <CalendarDays className="w-4 h-4 text-[#4B7F3A]" />
            <h4 className="font-bold text-xs text-[#102033] uppercase tracking-wider">
              My Class Timetable (?tab=timetable)
            </h4>
          </div>
          <p className="text-xs text-[#526477] leading-relaxed">
            Your Timetable view connects directly to your school&apos;s active published weekly schedule for your assigned Class and Section:
          </p>
          <ul className="text-xs text-[#526477] space-y-1.5 list-disc list-inside leading-relaxed">
            <li><strong>Live Period Status Banner:</strong> During school hours, displays which period is currently running (with exact start and end times) and what class is scheduled next.</li>
            <li><strong>Day Tabs (Monday to Saturday):</strong> Automatically selects today&apos;s weekday when you open the tab; tap any day pill to plan notebooks for upcoming days.</li>
            <li><strong>Period Details:</strong> Lists each slot in chronological order with subject name, assigned teacher, slot type (Teaching, Assembly, Recess), and room number if set.</li>
          </ul>
          <p className="text-[11px] text-[#526477] bg-slate-50 p-2.5 rounded-lg border border-slate-200/70">
            <strong>What if my timetable appears empty?</strong> A timetable only appears once your Head Master finalizes and activates your class&apos;s timetable for the current session. Contact your Class Teacher if periods are missing.
          </p>
        </div>
      </div>
    </div>

    {/* ════════════════════════════════════════════════════════════════════════
        SECTION 4: EXAMS, RESULTS & MARKSHEETS
       ════════════════════════════════════════════════════════════════════════ */}
    <div id="stu-user-exams" className="scroll-mt-20">
      <SectionTitle>4. Examinations, Published Results &amp; Official Marksheet PDFs</SectionTitle>
      <p className="text-xs text-[#526477] leading-relaxed mb-4">
        Open the <strong>Exams &amp; Marksheet</strong> tab (<code>?tab=exams</code>) to view certified exam results and download print-ready board marksheets. Draft marks being entered by teachers stay completely hidden until your Head Master verifies them and the exam status becomes <code>PUBLISHED</code>.
      </p>

      <Steps
        items={[
          {
            step: '1',
            title: 'Select the Examination Term',
            desc: 'If more than one exam has been published (for example, Mid-Term and Annual Final), tap the exam pill at the top to switch between scorecards.',
          },
          {
            step: '2',
            title: 'Read the Five Summary Metrics',
            desc: 'At a glance you will see: Aggregate Marks (such as 542 / 700), Percentage (%), Overall Letter Grade, Class Rank (# position), and overall Result Status (PASS or FAIL).',
          },
          {
            step: '3',
            title: 'Inspect Your Subject Breakdown',
            desc: 'Every subject shows Maximum Marks, Obtained Marks, and Pass/Fail status. On mobile phones, subjects appear as compact stacked cards; on larger screens they appear in a structured table.',
          },
          {
            step: '4',
            title: 'Download Official Marksheet (PDF)',
            desc: 'Click the green "Download Official Marksheet (PDF)" button to save your official A4 computerized transcript generated directly by the server.',
          },
        ]}
      />

      <ComparisonTable
        headers={['Special Board Rules in Results', 'How It Works on Your Scorecard']}
        rows={[
          {
            left: 'Islamiat Marks Split (Nazra + Written)',
            right: 'Per DMC Liaquatabad Elementary Board rules, Islamiat displays two separate components adding up to 100: Nazra Quran recitation marks (out of 20) and Written Theory marks (out of 80).',
          },
          {
            left: 'Drawing (Letter Grade Only)',
            right: 'Drawing is graded exclusively by letter grade (such as A, B, C, or D) under visual arts assessment. It shows "Graded Only" and carries zero numeric marks in the 700-mark total aggregate.',
          },
          {
            left: 'Missing or Incorrect Subject Score',
            right: 'Published marks cannot be edited by students. If a subject score looks wrong or missing after official result day, bring your school roll slip to your Head Master or Examination In-charge teacher for verification.',
          },
        ]}
      />
    </div>

    {/* ════════════════════════════════════════════════════════════════════════
        SECTION 5: HOMEWORK & CIRCULARS
       ════════════════════════════════════════════════════════════════════════ */}
    <div id="stu-user-homework" className="scroll-mt-20">
      <SectionTitle>5. Homework Assignments, Official Notices &amp; School Holidays</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <InfoCard
          icon={<BookOpen className="w-4 h-4" />}
          color="amber"
          title="My Homework (?tab=homework)"
          desc="Shows homework posted by teachers strictly for your school, class, and section within recent lookback windows (7 days past by default). Filter using tabs: All Assignments, Active, Due Soon (due within 48 hours), and Overdue. If the teacher attached worksheets or reference files, download them directly from the card. Note: Online file upload/submission is not enabled — complete assignments in your notebook and submit in class."
        />
        <InfoCard
          icon={<FileText className="w-4 h-4" />}
          color="purple"
          title="Official Circulars (?tab=notices) & Holidays (/holidays)"
          desc="View published school, town-wide, and global circulars filtered for students. Search by keyword, title, or circular reference number. Urgent circulars (such as heavy rain emergencies, heatwave alerts, or cyclone closures) automatically highlight at the top of your Overview tab. Check the Holidays & Calendar page (/holidays) in the sidebar for upcoming gazetted holidays and weekly off schedules."
        />
      </div>
    </div>

    {/* ════════════════════════════════════════════════════════════════════════
        SECTION 6: DIGITAL STUDENT ID CARD
       ════════════════════════════════════════════════════════════════════════ */}
    <div id="stu-user-idcard" className="scroll-mt-20">
      <SectionTitle>6. Digital Student ID Card &amp; QR Verification</SectionTitle>
      <p className="text-xs text-[#526477] leading-relaxed mb-4">
        Open the <strong>Digital Student ID</strong> tab (<code>?tab=id_card</code>) to preview, print, and verify your two-sided official student identity card.
      </p>

      <ComparisonTable
        headers={['ID Card Feature', 'What Is Included & How It Is Used']}
        rows={[
          {
            left: 'Front Face (Identity & Emblem)',
            right: 'Official TMC Liaquatabad Education Department header, your School Name, STUDENT ID badge, framed student portrait photo, Full Name ribbon, General Register (GR) #, Roll #, Class & Section, Academic Session, Global Student ID, and background official emblem watermark.',
          },
          {
            left: 'Back Face (Verification & Stamp Box)',
            right: 'Residential Address, Date of Birth, real scannable cryptographic QR code ("Scan to Verify"), and two intentionally blank white areas at the bottom reserved for your Head Master\'s physical ink signature and the official school rubber stamp.',
          },
          {
            left: 'Dual Print Layouts',
            right: 'Toggle Front / Back / Both on screen, then print either in CR80 Duplex Card Mode (standard 54mm × 85.6mm plastic PVC ID card printer format) or A4 Sheet Mode (front and back side-by-side with cutting guidelines for paper printing and lamination).',
          },
          {
            left: 'Public QR Verification (/verify-student)',
            right: 'Scanning the QR code opens /verify-student?code=<32-hex-token>. Any examiner, gatekeeper, or supervisor can verify your active enrollment status immediately without needing to log in.',
          },
        ]}
      />
    </div>

    {/* ════════════════════════════════════════════════════════════════════════
        SECTION 7: PERMISSIONS & RESTRICTIONS
       ════════════════════════════════════════════════════════════════════════ */}
    <div id="stu-user-restrictions" className="scroll-mt-20">
      <SectionTitle>7. What Students Can &amp; Cannot Do (Privacy &amp; Safety Rules)</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="p-5 rounded-xl bg-white border border-[#C9DFBC] shadow-sm space-y-2.5">
          <h4 className="font-bold text-xs text-[#38662D] uppercase tracking-wider flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" /> Allowed Student Actions
          </h4>
          <ul className="text-xs text-[#526477] space-y-1.5 list-disc list-inside leading-relaxed">
            <li>Inspect your own enrollment profile and download your official A4 PDF record.</li>
            <li>View your own current month, last month, and academic session attendance totals.</li>
            <li>View your class timetable and live active teaching period indicator.</li>
            <li>View and download PDF marksheets for your own published examinations.</li>
            <li>Read homework assignments and download valid homework attachments (prior to their 7-day attachment expiry).</li>
            <li>Preview and print your Digital Student ID Card (CR80 or A4).</li>
            <li>Read student-targeted circulars, holidays, and your own personal Activity History (<code>/activity-history</code>).</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-white border border-red-200 shadow-sm space-y-2.5 bg-red-50/10">
          <h4 className="font-bold text-xs text-red-900 uppercase tracking-wider flex items-center gap-2">
            <Lock className="w-4 h-4 text-red-600" /> Blocked &amp; Intentionally Unavailable Actions
          </h4>
          <ul className="text-xs text-[#526477] space-y-1.5 list-disc list-inside leading-relaxed">
            <li><strong>No Classmate Lists:</strong> Students cannot inspect class rosters or see other pupils&apos; details (<code>GET /students/section/:id</code> returns 403 Forbidden and logs a security event).</li>
            <li><strong>No Peer Exam Results:</strong> Students cannot view classmates&apos; marksheets or class tabulation sheets.</li>
            <li><strong>No Profile Editing or Field Hiding:</strong> Personal vitals and academic fields are governed by institutional ownership and cannot be hidden or changed by students.</li>
            <li><strong>No Online Homework Uploads:</strong> The portal displays teacher assignments; physical notebooks or class submissions are used.</li>
            <li><strong>No Fee Payment Module:</strong> Municipal schools provide free public education; no fee vouchers or billing screens exist.</li>
          </ul>
        </div>
      </div>
    </div>

    {/* ════════════════════════════════════════════════════════════════════════
        SECTION 8: STUDENT TROUBLESHOOTING & FAQS
       ════════════════════════════════════════════════════════════════════════ */}
    <div id="stu-user-faq" className="scroll-mt-20">
      <SectionTitle>8. Student Troubleshooting &amp; Frequently Asked Questions</SectionTitle>
      <div className="space-y-2.5 my-4">
        <FaqItem
          category="Login"
          question="I cannot log in to my Student Portal account."
          answer="First check that your email spelling and password are correct and solve the math CAPTCHA carefully (if you miss attempts repeatedly, wait for the automatic security lockout countdown to reach zero). Second, confirm with your Head Master that your enrollment status is ACTIVE — students marked STRUCK_OFF or TRANSFERRED cannot sign in. If you were enrolled on paper registers and have never created an online password, go to /register-student?tab=activate-account to activate your portal login."
          evidence="authController.js:handleLogin & studentController.js:handleGetMyStudentProfile (lifecycleStatus === 'ACTIVE' gate)"
        />
        <FaqItem
          category="Password"
          question="I forgot my password. How can I reset it?"
          answer="On the Login page, click 'Forgot Password?' (/forgot-password), enter your registered portal email address, solve the CAPTCHA, and submit. The system sends a 6-digit password reset code to your email. Enter that code and your new password at /reset-password. All old logged-in devices will be signed out safely once updated."
          evidence="ForgotPasswordPage.jsx -> POST /api/v1/auth/forgot-password -> ResetPasswordPage.jsx -> POST /api/v1/auth/reset-password"
        />
        <FaqItem
          category="Profile"
          question="My name, Date of Birth, B-Form, or guardian phone number is incorrect on my profile."
          answer="Student profiles are read-only official government records. Students cannot edit identity fields online. Please visit your school office with your original NADRA B-Form / CRC and ask the School Clerk or Head Master to update the record in the school register."
          evidence="StudentProfilePage.jsx read-only institutional governance policy"
        />
        <FaqItem
          category="Attendance"
          question="My attendance shows 'Absent' or says attendance records are not initialized."
          answer="If your attendance shows 'not yet initialized', you may have just been admitted today and no school roll call has occurred since your admission date. If a specific day shows Absent in error, notify your Class Teacher promptly. Teachers mark daily attendance during Karachi school hours and only your Head Master can approve a same-day override."
          evidence="StudentDashboard.jsx:1147-1150 & attendanceAnalyticsController.js"
        />
        <FaqItem
          category="Timetable"
          question="My Class Timetable tab is empty or shows the wrong teacher."
          answer="The timetable reads active published slots for your exact Class and Section. If your Head Master has not yet published this term's timetable or has assigned your class as a whole cohort without sections yet, the grid will appear blank. Inform your Class Teacher or Head Master."
          evidence="PersonalScheduleView.jsx & timetableController.js"
        />
        <FaqItem
          category="Exams"
          question="My teacher took tests last week, why does 'Exams & Marksheet' say No Published Results Available?"
          answer="By design, raw or draft marks entered by subject teachers are hidden from students and parents until the Head Master completes verification and the department officially sets the exam status to PUBLISHED. Once published, your full subject scorecard and PDF button appear automatically."
          evidence="examController.js:1596-1599 (filterCriteria.status = 'PUBLISHED')"
        />
        <FaqItem
          category="Homework"
          question="Why did an older homework assignment or attachment disappear?"
          answer="The Student Homework view automatically displays active homework within the recent lookback window (past 7 days from due date) so the list stays focused on current work. Additionally, uploaded file attachments automatically expire 7 days after creation to keep school storage fast and clean."
          evidence="homeworkController.js:339-363 (pastCutoff default 7 days & attachment expiresAt filter)"
        />
        <FaqItem
          category="Activity"
          question="On mobile phone, tapping 'Activity History' in the top pill bar kept me on Overview. How do I view it?"
          answer="Known UI bug identified during our audit (see Section 11): in StudentDashboard.jsx line 188, validTabKeys omits 'activity', so the mobile pill tab falls back to Overview. Workaround: open the main menu drawer and tap 'Activity History' (/activity-history) directly — that dedicated page works cleanly on all devices."
          evidence="Observed in StudentDashboard.jsx:188 vs navigationConfig.js:52"
        />
      </div>
    </div>

    {/* ════════════════════════════════════════════════════════════════════════
        SECTION 9: TECHNICAL ARCHITECTURE & DEVELOPMENT HISTORY
       ════════════════════════════════════════════════════════════════════════ */}
    <div id="stu-tech-arch" className="scroll-mt-20">
      <SectionTitle>9. Technical Architecture &amp; Development History (WHAT / WHY / HOW)</SectionTitle>
      <p className="text-xs text-[#526477] leading-relaxed mb-4">
        This section reconstructs the actual engineering implementation, commit history, trade-offs, and BFF data pipelines powering the Student Portal across React, Redux Toolkit, Express, and MongoDB.
      </p>

      <TerminalBlock title="STUDENT PORTAL FULL-STACK ARCHITECTURE PIPELINE">
{`[Student Browser / PWA]
  ├─ UI Views: StudentDashboard.jsx (7 tabs + activity route)
  │            StudentProfilePage.jsx (/profile -> A4 PDF dossier)
  │            DigitalStudentIdCard.jsx (CR80 54x85.6mm & A4 Sheet + QR)
  │            RegisterStudentPage.jsx (Flow B: GR/GlobalID + DOB + Email OTP)
  ├─ Public Verifier: StudentVerificationPage.jsx (/verify-student?code=...)
  └─ State & Bridge: studentSlice.js ─► studentService.js ─► apiClient.js (RTR HttpOnly cookies)
                                          │
                                          ▼
[Express BFF / API Routes (server/)]
  ├─ Middleware Chain: authenticate ─► resolveActiveDuty ─► authorizeScope ─► idempotencyGuard
  ├─ Controllers:
  │   ├─ studentController.js       -> GET /students/my-profile, /:id/profile, /:id/pdf
  │   ├─ examController.js          -> GET /exams/my-results, /:examId/results/:id/marksheet
  │   ├─ homeworkController.js      -> GET /homework/student (authoritative StudentProfile filter)
  │   ├─ attendanceAnalyticsCtrl.js -> GET /attendance/analytics/student (anti-spoof userId guard)
  │   └─ timetableController.js     -> GET /timetable/my-schedule
  └─ MongoDB Models:
      └─ StudentProfile ({ schoolId, grNumber } unique + cardVerificationCode 32-hex) + User`}
      </TerminalBlock>

      <ComparisonTable
        headers={['Engineering Milestone (Verified Evidence)', 'WHAT Was Built & WHY It Was Needed', 'HOW It Works & Accepted Trade-Offs']}
        rows={[
          {
            left: '1. Dedicated Student Profile Isolation (Commits 19a395c, 8be9227)',
            right: 'WHAT: Built StudentProfilePage.jsx, server GET /students/my-profile, GET /students/:id/profile, GET /students/:id/pdf, and session-aware ProfileDispatcher in AppRoutes.jsx. • WHY: Previously students visiting /profile rendered civil service employee forms (BPS pay scale, casual leaves, bank fields), exposed privacy eye toggles, and risked creating invalid TeacherProfile rows.',
            extra: 'HOW: Enforces zero privacy self-masking for students; PATCH /staff/:id/privacy returns 403 for student actors. Trade-off: Corrections require school clerk intervention rather than self-service editing.',
          },
          {
            left: '2. CR80 / A4 Digital Student ID & Cryptographic QR (Commits eb09c0d, 9a538b6, f48ae7e, 44d5f40, 482528c)',
            right: 'WHAT: Two-sided portrait CR80 PVC card & A4 cut-sheet print portal (createPortal + dynamic @page CSS) plus 32-hex cardVerificationCode QR code verifying against public /public/verify-student. • WHY: Prevent counterfeit paper IDs and resolve print truncation bugs on thermal/PVC and A4 printers.',
            extra: 'HOW: StudentProfile generates 16 random bytes (32 hex) on creation/first view; back card intentionally leaves blank ink boxes for HM stamp/signature. Trade-off: Requires physical wet stamping after printing for high-stakes exams.',
          },
          {
            left: '3. Authoritative Server-Derived Class Scoping (examController, homeworkController, attendanceAnalyticsController)',
            right: 'WHAT: BFF-style student endpoints ignore any ?studentId=, ?classId=, or ?schoolId= passed by clients and derive targets strictly from request.user._id -> StudentProfile. • WHY: Prevents students from snooping on other sections or higher grades by modifying query URLs.',
            extra: 'HOW: Passing a mismatched ?userId= to /attendance/analytics/student immediately triggers HTTP 403 and writes STUDENT_ATTENDANCE_SPOOF_BLOCKED to AuditLog. Verified in student_workspace_suite.test.js Scenarios 2.3 & 4.3.',
          },
          {
            left: '4. School Closure Integration & Refresh Token Multi-Device Alignment (Commits 3f59d03, 32298a5)',
            right: 'WHAT: Wired checkIsSchoolClosed into /students/my-profile (returning todayClosure) and aligned student session generator schema with activeSessions/refreshTokenHash multi-device format. • WHY: Prevent unexpected logouts on login/activation and display live holiday/emergency closures.',
            extra: 'HOW: Closure state resolves dynamically via Asia/Karachi calendar check without modifying StudentProfile records.',
          },
        ]}
      />
    </div>

    {/* ════════════════════════════════════════════════════════════════════════
        SECTION 10: ARCHITECTURAL DECISION Q&A
       ════════════════════════════════════════════════════════════════════════ */}
    <div id="stu-tech-qa" className="scroll-mt-20">
      <SectionTitle>10. Student Portal Architectural Cross-Questioning (Q&amp;A)</SectionTitle>
      <CrossQuestions
        title="Design Decisions, Reasoning & Alternatives Considered"
        items={[
          {
            category: 'Privacy & BOLA',
            question: 'Why does the backend ignore ?studentId or ?sectionId query parameters on student endpoints instead of validating them?',
            answer:
              'Decision -> Derive student scope strictly from authenticated JWT session userId -> Reason: A student only ever has ONE legitimate self-identity (SCOPES.SELF). Ignoring client-supplied IDs (or immediately rejecting mismatches with 403 on attendance analytics) eliminates IDOR/BOLA classes structurally -> Alternatives: Checking "if (query.studentId === req.user._id)" everywhere invites developer omission bugs. Server-derived lookup is safer.',
            evidence: 'server/src/controllers/examController.js:1595-1597, homeworkController.js:329-346, attendanceAnalyticsController.js:29-51',
          },
          {
            category: 'Governance',
            question: 'Why are students prohibited from editing their profile fields or toggling field privacy like employees?',
            answer:
              'Decision -> Enforced read-only StudentProfile with zero privacy toggles -> Reason: Student enrollment records (legal name, DOB, B-Form, GR#, father name) are statutory government registry assets tied to NADRA documentation and board exam certificates. Allowing student edits or hiding fields would compromise school administration and break board verification -> Alternatives: Self-edit approval queues could be added later if desired, but physical B-Form inspection by clerks prevents fraudulent age changes.',
            evidence: 'client/src/pages/students/StudentProfilePage.jsx:31-40 (Institutional Data Governance header)',
          },
          {
            category: 'Safety Boundary',
            question: 'Why are students explicitly blocked (403) from viewing class section rosters and classmate lists?',
            answer:
              'Decision -> Explicit role rejection of ROLES.STUDENT in handleGetSectionStudents -> Reason: In urban public schools, minor pupils (ages 5–16) require anti-harassment and anti-stalking safeguards; exposing lists of classmates, GR numbers, or peer photos to every student account widens scraping risk -> Alternatives: Classroom LMS forums allow peer lists when social interaction is the goal, which is outside municipal registry governance.',
            evidence: 'server/src/controllers/studentController.js:529-549 (STUDENT_ROSTER_ACCESS_BLOCKED audit log)',
          },
          {
            category: 'ID Card Printing',
            question: 'Why did we build CR80 Duplex and A4 Sheet HTML/CSS @page print portals instead of generating an ID Card PDF exclusively on the backend?',
            answer:
              'Decision -> Client React portal print architecture (DigitalStudentIdCard.jsx) backed by QR generation -> Reason: Schools use mixed printing hardware (dedicated 54mm × 85.6mm PVC card printers vs. standard A4 office printers + scissors + lamination). Dynamic CSS @page injection adjusts exact physical dimensions interactively while letting staff preview Front/Back/Both before printing -> Trade-off: Browser print header/footer settings depend on clean @media print CSS isolation.',
            evidence: 'client/src/components/student/DigitalStudentIdCard.jsx:49-87, 173-231',
          },
        ]}
      />
    </div>

    {/* ════════════════════════════════════════════════════════════════════════
        SECTION 11: VERIFIED BUGS & FINDINGS
       ════════════════════════════════════════════════════════════════════════ */}
    <div id="stu-tech-bugs" className="scroll-mt-20">
      <SectionTitle>11. Verified Bug History &amp; Honest Audit Findings</SectionTitle>
      <div className="space-y-4 my-4">
        <FailureRecoveryCard
          failureMode="RESOLVED BUG (Commit 32298a5): Newly registered/activated students experienced immediate session rejection due to schema mismatch with multi-device refreshTokenHash."
          impact="Students completing Flow A registration or Flow B portal activation could not retain valid refresh sessions on subsequent API calls."
          handling="Diagnosed authController session payload generation mismatch against User.activeSessions schema added during multi-device hardening. Updated student token generator to populate activeSessions properly."
          recovery="Verified via student onboarding flows (21/21 passing validation checks in student_onboarding_flows.test.js)."
        />

        <FailureRecoveryCard
          failureMode="RESOLVED BUG (Commit 482528c): Public QR ID Card scanner (/verify-student) displayed missing student name when studentFullName lived only on populated User.fullName."
          impact="Scanning QR codes on student ID cards for certain migrated records returned blank or fallback student names."
          handling="Updated public card verification controller in publicStatsController.js to populate userId.fullName and gracefully fall back when StudentProfile.studentFullName is empty."
          recovery="Verified across publicRoutes.js -> StudentVerificationPage.jsx rendering."
        />

        <Callout type="warning" title="UNRESOLVED FINDING 1 (Code Observation): Mobile 'Activity History' Tab Key Mismatch in StudentDashboard.jsx">
          <strong>Observed Defect (Not Altered — Reporting Per Scope Rules):</strong> In{' '}
          <code>client/src/pages/dashboard/StudentDashboard.jsx:188</code>,{' '}
          <code>validTabKeys = [&apos;overview&apos;, &apos;timetable&apos;, &apos;exams&apos;, &apos;homework&apos;, &apos;attendance&apos;, &apos;notices&apos;, &apos;id_card&apos;]</code> does not include <code>&apos;activity&apos;</code>, even though{' '}
          <code>StudentNavigation.jsx:21</code> includes an Activity History pill and{' '}
          <code>StudentDashboard.jsx:1422</code> has a renderer for <code>activeTabKey === &apos;activity&apos;</code>. Clicking that mobile pill falls back to <code>overview</code>. Desktop/sidebar navigation to <code>/activity-history</code> works normally.
        </Callout>

        <Callout type="warning" title="UNRESOLVED FINDING 2 (Test Output): student_workspace_suite.test.js Offline Execution Timeout on Test 1.1">
          <strong>Observed Test Execution Error (Run Date: Nov 26, 2026):</strong> Running <code>node server/tests/student_workspace_suite.test.js</code> crashed on Test 1.1 with{' '}
          <code>MongooseError: Operation `studentprofiles.updateOne()` buffering timed out after 10000ms</code>. Cause: <code>handleGetMyStudentProfile</code> (<code>studentController.js:466</code>) backfills missing <code>cardVerificationCode</code> via <code>StudentProfile.updateOne()</code>, and the offline test mock fixture omits <code>cardVerificationCode</code> without stubbing <code>StudentProfile.updateOne</code>. Left untouched per documentation-only task rules.
        </Callout>
      </div>
    </div>

    {/* ════════════════════════════════════════════════════════════════════════
        SECTION 12: SECURITY, RBAC & MAINTENANCE
       ════════════════════════════════════════════════════════════════════════ */}
    <div id="stu-tech-security" className="scroll-mt-20">
      <SectionTitle>12. Security Boundaries, Verification Evidence &amp; Maintenance Rules</SectionTitle>
      <ComparisonTable
        headers={['Security Control / Invariant', 'How It Protects Student Data', 'Authoritative Code / Test Evidence']}
        rows={[
          {
            left: 'Role-Derived Self Scoping (SCOPES.SELF)',
            right: 'Student endpoints resolve data strictly from authenticated JWT actor ID. Client-supplied query params (?studentId, ?userId) are ignored or rejected with 403.',
            extra: 'studentController.js:436-461, homeworkController.js:329-346, examController.js:1595',
          },
          {
            left: 'Published-Only Examination Gate',
            right: 'Marksheet queries hardcode status: "PUBLISHED" so unverified drafts cannot leak prior to HM/Department release.',
            extra: 'examController.js:1598 • studentService.js:30-42',
          },
          {
            left: 'Anti-Roster Scraping & Audit Trail',
            right: 'Section rosters reject ROLES.STUDENT with 403 and log STUDENT_ROSTER_ACCESS_BLOCKED; attendance ID spoofing logs STUDENT_ATTENDANCE_SPOOF_BLOCKED.',
            extra: 'studentController.js:529-549, attendanceAnalyticsController.js:29-51',
          },
          {
            left: 'Activation 2nd-Factor & Rate Limiting',
            right: 'Portal activation requires School + GR/Global ID + exact Date of Birth + studentActivationLimiter + Email OTP confirmation.',
            extra: 'student_onboarding_flows.test.js (21/21 PASS in this session)',
          },
        ]}
      />

      <VerificationBox
        sourceFile="client/src/pages/dashboard/StudentDashboard.jsx & server/src/controllers/studentController.js"
        testSuite="server/tests/student_onboarding_flows.test.js (PASS) & student_workspace_suite.test.js (Fixture Update Needed)"
        command="node server/tests/student_onboarding_flows.test.js"
        result="21 / 21 ONBOARDING PASSED • WORKSPACE TEST CRASH DOCUMENTED"
      />

      <Callout type="info" title="Maintenance Trigger Checklist for Engineers">
        Update <code>StudentWorkflowsSection.jsx</code> whenever: (1) a new tab is added to <code>StudentDashboard.jsx</code> / <code>StudentNavigation.jsx</code>, (2) homework submission capabilities or attachment expiry change, (3) exam grading rules (Islamiat/Drawing/aggregate) change, or (4) Digital ID card fields or QR verification endpoints are modified.
      </Callout>
    </div>
  </div>
);
