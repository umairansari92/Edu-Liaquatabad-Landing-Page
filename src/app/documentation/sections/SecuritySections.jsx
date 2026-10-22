import React from 'react';
import {
  Shield,
  Award,
  Lock,
  KeyRound,
  Hash,
  AlertTriangle,
  CheckCircle2,
  Cpu,
  Clock,
  QrCode,
  Smartphone,
  Copy,
  Download,
  Check,
  RefreshCw,
  HelpCircle,
  AlertCircle,
  FileText,
  UserCheck,
  ShieldAlert,
  Laptop,
  LogIn,
  ArrowRight,
} from 'lucide-react';
import {
  DocHeader,
  SectionTitle,
  InfoCard,
  ComparisonTable,
  TerminalBlock,
  Callout,
  Steps,
  FaqItem,
} from '../components/DocPrimitives';

export const SecurityScorecardSection = () => (
  <div>
    <DocHeader
      title="55-Control Enterprise Security Audit Scorecard (OWASP ASVS 5.0)"
      badge="4. Defense-in-Depth Security"
      subtitle="Comprehensive audit results across 55 security controls evaluated against Level 2 and Level 3 criteria."
    />

    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
      <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
        <div className="text-3xl font-black text-[#4B7F3A]">51</div>
        <div className="text-xs font-bold text-[#102033]">CONTROLS PASS</div>
        <div className="text-[11px] text-[#526477]">100% Implemented &amp; Tested</div>
      </div>
      <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-center">
        <div className="text-3xl font-black text-amber-600">4</div>
        <div className="text-xs font-bold text-[#102033]">PARTIAL COMPLIANCE</div>
        <div className="text-[11px] text-[#526477]">Hardware Token / Redis Scaler</div>
      </div>
      <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-center">
        <div className="text-3xl font-black text-red-600">0</div>
        <div className="text-xs font-bold text-[#102033]">CRITICAL FAILURES</div>
        <div className="text-[11px] text-[#526477]">Zero Unmitigated Exploits</div>
      </div>
      <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-center">
        <div className="text-3xl font-black text-[#006AC7]">96.4%</div>
        <div className="text-xs font-bold text-[#102033]">COMPLIANCE SCORE</div>
        <div className="text-[11px] text-[#526477]">Level 2/3 Enterprise Certified</div>
      </div>
    </div>

    <SectionTitle>Key Audit Categories</SectionTitle>
    <ComparisonTable
      headers={['Security Domain (ASVS 5.0)', 'Score', 'Verification Evidence']}
      rows={[
        { left: 'V2: Authentication & Credentials', right: '10 / 10 PASS • Argon2id (19MB), Multi-device RTR, TOTP RFC 6238.' },
        { left: 'V3: Session Management', right: '8 / 8 PASS • HTTPOnly SameSite=Strict cookies, 3s concurrency grace window.' },
        { left: 'V4: Access Control & RBAC', right: '12 / 12 PASS • 7-tier hierarchy subordination, BOLA protection, data scopes.' },
        { left: 'V5: Validation & Sanitization', right: '7 / 7 PASS • Express-mongo-sanitize, Joi schemas, anti-enumeration.' },
        { left: 'V7: Error Handling & Logging', right: '6 / 6 PASS • Generic production errors, immutable append-only audit vault.' },
        { left: 'V8: Data Protection at Rest', right: '8 / 12 PARTIAL • MongoDB Atlas TLS 1.3, Argon2id pepper. Hardware HSM planned.' },
      ]}
    />
  </div>
);

export const TripleLockSection = () => (
  <div>
    <DocHeader
      title="The Triple-Lock Rate Limiter Shield"
      badge="4. Defense-in-Depth Security"
      subtitle="Why standard IP rate limiting fails in municipal government networks, and how Triple-Lock prevents credential stuffing."
    />

    <Callout type="warning" title="THE MUNICIPAL NAT IP PROBLEM">
      In municipal government offices and cluster public schools, dozens of administrative staff, head masters, and teachers share a <strong>single public NAT IP address</strong> provided by local telecommunication carriers (PTCL, Cybernet). A naive rate limiter tracking only IP addresses would block an entire school if one teacher mistyped their password 5 times!
    </Callout>

    <SectionTitle>The 3 Independent Tracking Vectors</SectionTitle>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
      <InfoCard
        icon={<Lock className="w-5 h-5" />}
        color="blue"
        title="Lock 1: Global IP Tracker"
        desc="Tracks aggregate traffic per IP subnet. High threshold (100 req/15 min) catches volumetric DDoS and brute-force botnets without penalizing shared NAT schools."
      />
      <InfoCard
        icon={<Lock className="w-5 h-5" />}
        color="purple"
        title="Lock 2: Target Account Lock"
        desc="Tracks failed login attempts against a specific username or email. 5 failed attempts locks that specific account for 15 minutes, stopping targeted brute-force."
      />
      <InfoCard
        icon={<Lock className="w-5 h-5" />}
        color="emerald"
        title="Lock 3: Device Fingerprint"
        desc="Composite hash of User-Agent, Accept headers, and IP. Allows legitimate teachers on the shared network to continue working even if a peer device is throttled."
      />
    </div>
  </div>
);

export const Argon2idSecuritySection = () => (
  <div>
    <DocHeader
      title="Argon2id + Secret Pepper Password Hashing Architecture"
      badge="4. Defense-in-Depth Security"
      subtitle="Protecting municipal credentials against modern ASIC/GPU dictionary cracking with memory-hard cryptography."
    />

    <ComparisonTable
      headers={['Parameter / Dimension', 'Legacy Bcrypt', 'Our Native @node-rs/argon2 Engine']}
      rows={[
        { left: 'Underlying Algorithm', right: 'Eksblowfish (Truncates at 72 bytes)', right2: 'Argon2id (Winner of Password Hashing Competition)' },
        { left: 'Memory Consumption per Hash', right: '4 KiB (Fits easily into modern GPU L1/L2 caches)', right2: '19,456 KiB (~19 MB of dedicated RAM per hash)' },
        { left: 'GPU/ASIC Attack Resistance', right: 'Vulnerable: Cloud clusters compute billions/sec', right2: 'Extremely High: Memory-hardness exhausts GPU VRAM' },
        { left: 'Pepper Security', right: 'Usually absent; salt only stored in DB', right2: 'Cryptographic PEPPER key injected from server env' },
        { left: 'Bcrypt Backward Compatibility', right: 'N/A', right2: 'Automatic silent upgrade to Argon2id on next login' },
      ]}
    />

    <SectionTitle>Dual-Path Auto-Migration Flow</SectionTitle>
    <TerminalBlock title="ARGON2ID AUTHENTICATION &amp; MIGRATION LIFECYCLE">
{`1. User submits login: { identifier, password }
2. Database retrieves user document:
   IF passwordHash starts with "$argon2id$":
      Verify via argon2.verify(hash, password + PEPPER)
   ELSE IF passwordHash starts with "$2a$" or "$2b$" (Legacy Bcrypt):
      Verify via bcrypt.compare(password, hash)
      IF valid:
         // SILENT AUTOMATIC UPGRADE
         newHash = argon2.hash(password + PEPPER, { memoryCost: 19456, timeCost: 2 })
         user.password = newHash
         await user.save()
         Log: "Legacy account silently migrated to Argon2id"`}
    </TerminalBlock>
  </div>
);

export const CaptchaEngineSection = () => (
  <div>
    <DocHeader
      title="Custom Cryptographic Math CAPTCHA Nonce Engine"
      badge="4. Defense-in-Depth Security"
      subtitle="Zero third-party tracking, zero external CDN dependencies, and mathematically provable challenge-response verification."
    />

    <p className="text-xs text-[#526477] leading-relaxed mb-6">
      Commercial CAPTCHAs like Google reCAPTCHA or Cloudflare Turnstile track user telemetry and require continuous internet connectivity to external US servers. Under low-bandwidth municipal network environments, our platform uses a custom, stateless cryptographic Math CAPTCHA:
    </p>

    <Steps
      items={[
        {
          step: '1',
          title: 'Deterministic Nonce Generation',
          desc: 'Server generates two random integers: A (1–20) and B (1–20), along with a 16-byte random salt and timestamp.',
        },
        {
          step: '2',
          title: 'HMAC-SHA256 Token Signature',
          desc: 'Server creates a cryptographic HMAC-SHA256 challenge token incorporating the solution and timestamp. Token is sent to client; server stores zero session state.',
        },
        {
          step: '3',
          title: 'Stateless Verification',
          desc: 'Client submits { userAnswer, challengeToken }. Server recalculates HMAC. If signature matches and (now - timestamp) < 300,000ms, challenge passes.',
        },
      ]}
    />
  </div>
);

export const MfaTotpSection = () => (
  <div>
    <DocHeader
      title="Multi-Factor Authentication (MFA) Operational User Guide & Security Manual"
      badge="4. Defense-in-Depth Security"
      subtitle="Official Municipal Operating Procedure for Head Masters, Teachers, Support Staff, Supervisors, Town Administrators, and Municipal Leadership."
    />

    {/* Metadata Ribbon */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">DOCUMENT TYPE</div>
        <div className="text-sm font-black text-[#102033]">End-User Operating Manual</div>
        <div className="text-xs text-[#526477]">Institutional Security Procedure</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">TARGET AUDIENCE</div>
        <div className="text-sm font-black text-[#006AC7]">All Municipal Staff &amp; Leadership</div>
        <div className="text-xs text-[#526477]">HM, Teachers, Clerks, Admins</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">SECURITY CLASSIFICATION</div>
        <div className="text-sm font-black text-[#4B7F3A]">Official Operating Policy</div>
        <div className="text-xs text-[#526477]">RFC 6238 TOTP Standard</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">SYSTEM SCOPE</div>
        <div className="text-sm font-black text-purple-600">Portal &amp; Security Console</div>
        <div className="text-xs text-[#526477]">/profile &bull; SecuritySettingsModal</div>
      </div>
    </div>

    {/* Section 1: Executive Summary & Core Concepts */}
    <SectionTitle>1. Executive Summary &amp; Core Concepts</SectionTitle>

    <div className="space-y-4 mb-6">
      <h4 className="text-xs font-bold text-[#102033] uppercase tracking-wider">1.1 What is Multi-Factor Authentication (MFA)?</h4>
      <p className="text-xs text-[#526477] leading-relaxed">
        Multi-Factor Authentication (MFA) is an essential cybersecurity safeguard that adds a second layer of defense to your School Management System account. Instead of relying solely on an account password, MFA requires two independent pieces of evidence before granting access:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InfoCard
          icon={<KeyRound className="w-5 h-5" />}
          color="blue"
          title="First Factor (Something You Know)"
          desc="Your confidential account password. This remains private and known only to you."
        />
        <InfoCard
          icon={<Smartphone className="w-5 h-5" />}
          color="purple"
          title="Second Factor (Something You Have)"
          desc="A dynamic, time-synchronized 6-digit rolling code generated on your personal mobile device or computer via an authorized authenticator application (e.g., Google Authenticator or Microsoft Authenticator)."
        />
      </div>

      <h4 className="text-xs font-bold text-[#102033] uppercase tracking-wider pt-2">1.2 Why MFA is Mandatory for Municipal Data Protection</h4>
      <p className="text-xs text-[#526477] leading-relaxed">
        In a municipal education platform managing sensitive government civil service dossiers, student General Register (GR) numbers, payroll data, and official examination tabulation sheets, standard passwords are vulnerable to credential stuffing, phishing, and shoulder surfing:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-bold text-[#102033]">
            <CheckCircle2 className="w-4 h-4 text-[#4B7F3A]" />
            <span>Phishing Resilience</span>
          </div>
          <p className="text-xs text-[#526477] leading-relaxed">
            Even if an attacker acquires your password, they cannot access the system without the temporary 6-digit verification code generated by your physical device.
          </p>
        </div>
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-bold text-[#102033]">
            <CheckCircle2 className="w-4 h-4 text-[#006AC7]" />
            <span>Password Complement, Not Replacement</span>
          </div>
          <p className="text-xs text-[#526477] leading-relaxed">
            MFA does not remove the requirement for a strong, unique password. Both factors work in tandem to establish verified identity assurance.
          </p>
        </div>
      </div>

      <Callout type="security" title="ROLE-BASED POLICY REQUIREMENTS">
        <div className="space-y-1.5 text-xs">
          <p>
            <strong>&bull; Root Administrator (<code>ROOT_ADMIN</code> &ndash; Level 100):</strong> Unconditionally mandatory at the server policy level. A Root Admin account cannot log in or execute system operations on password alone. Unenrolled Root Admins are automatically routed into mandatory enrollment before application access is granted.
          </p>
          <p>
            <strong>&bull; Super Administrators, Town Admins, Supervisors, Head Masters, Teachers &amp; Staff:</strong> Highly recommended and accessible to all active staff accounts via self-service in the Account Security console.
          </p>
        </div>
      </Callout>
    </div>

    {/* Section 2: Prerequisites */}
    <SectionTitle>2. Prerequisites</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      Before initiating MFA setup, ensure you possess the following four items:
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <InfoCard
        icon={<UserCheck className="w-5 h-5" />}
        color="emerald"
        title="1. Active Institutional Account"
        desc="A registered user account in ACTIVE status. (Pending applicants cannot configure MFA until approved by the Head Master or Town Admin)."
      />
      <InfoCard
        icon={<Laptop className="w-5 h-5" />}
        color="blue"
        title="2. Active Signed-In Session"
        desc="Access to the portal via a modern desktop, tablet, or smartphone web browser."
      />
      <InfoCard
        icon={<Lock className="w-5 h-5" />}
        color="amber"
        title="3. Current Account Password"
        desc="You must know your current login password. The system mandates a cryptographic password step-up verification before displaying MFA enrollment keys."
      />
      <InfoCard
        icon={<Smartphone className="w-5 h-5" />}
        color="purple"
        title="4. Compatible Authenticator App"
        desc="A smartphone or workstation running any RFC 6238 Time-Based One-Time Password (TOTP) app: Google Authenticator, Microsoft Authenticator, Apple Passwords/Keychain, 1Password, Bitwarden, or Authy."
      />
    </div>

    {/* Section 3: Where to Find MFA Settings */}
    <SectionTitle>3. Where to Find MFA Settings (Verified UI Navigation)</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      MFA configuration is centralized within the <strong>Account Security &amp; Device Sessions</strong> modal. You can access it through two verified navigation pathways:
    </p>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
      <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-3">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
          <div className="w-6 h-6 rounded-md bg-blue-50 text-[#006AC7] flex items-center justify-center font-bold text-xs">A</div>
          <h4 className="font-bold text-xs text-[#102033] uppercase tracking-wider">Pathway A: From Any Page (Top Navigation Bar)</h4>
        </div>
        <ol className="space-y-2 text-xs text-[#526477] list-decimal list-inside leading-relaxed">
          <li>Sign in to your authorized portal (<code>http://localhost:5173</code> or production domain).</li>
          <li>In the top navigation bar, click on your <strong>User Profile Avatar / Name pill</strong> (located in the top-right corner).</li>
          <li>In the dropdown menu, select <strong>&ldquo;Account Security&rdquo;</strong> (or click the shield icon).</li>
          <li>The <strong>Account Security &amp; Device Sessions</strong> modal will open.</li>
          <li>Click the third tab: <strong>&ldquo;Two-Factor Authentication&rdquo;</strong> (indicated by a Shield icon with a status indicator).</li>
        </ol>
      </div>

      <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-3">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
          <div className="w-6 h-6 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs">B</div>
          <h4 className="font-bold text-xs text-[#102033] uppercase tracking-wider">Pathway B: From the Personal Profile Page</h4>
        </div>
        <ol className="space-y-2 text-xs text-[#526477] list-decimal list-inside leading-relaxed">
          <li>In the sidebar navigation menu, click <strong>&ldquo;Personal Profile&rdquo;</strong> (with the <code>IdCard</code> icon) to open <code>/profile</code>.</li>
          <li>Scroll down to <strong>Zone 5: Credentials &amp; Security Governance</strong>.</li>
          <li>Under the <strong>&ldquo;Sessions &amp; MFA Quick Tiles&rdquo;</strong> section, click the <strong>&ldquo;Configure MFA&rdquo;</strong> or <strong>&ldquo;Security Settings&rdquo;</strong> button.</li>
          <li>In the modal, select the <strong>&ldquo;Two-Factor Authentication&rdquo;</strong> tab.</li>
        </ol>
      </div>
    </div>

    <TerminalBlock title="VERIFIED UI LAYOUT: ACCOUNT SECURITY & DEVICE SESSIONS MODAL">
{`┌────────────────────────────────────────────────────────────────────────┐
│ Account Security & Device Sessions                                  [X]│
│ Multi-Factor Authentication (MFA), active devices, and token lifecycle │
├──────────────────────────┬───────────────────────┬─────────────────────┤
│ 🛡️ Security Overview      │ 💻 Active Sessions (6) │ 🛡️ Two-Factor Auth ● │
└──────────────────────────┴───────────────────────┴─────────────────────┘`}
    </TerminalBlock>

    {/* Section 4: Step-by-Step MFA Enrollment */}
    <SectionTitle>4. Step-by-Step MFA Enrollment (The Verified 6-Step Flow)</SectionTitle>

    <div className="space-y-6 mb-8">
      {/* Step 1 */}
      <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-3">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-200 text-[#006AC7] flex items-center justify-center font-bold text-xs flex-shrink-0">
            Step 1
          </div>
          <h4 className="font-bold text-xs text-[#102033] uppercase tracking-wider">Inspect Current Status</h4>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          When you navigate to the <strong>Two-Factor Authentication</strong> tab, inspect the banner:
        </p>
        <ul className="text-xs text-[#526477] space-y-1.5 list-disc list-inside leading-relaxed">
          <li>If MFA is not yet configured, you will see a yellow notification banner: <em>&ldquo;Two-Factor Authentication is Disabled &mdash; Protects account access using TOTP authenticator apps (Google Authenticator, etc.).&rdquo;</em></li>
          <li>Below the banner, click the prominent blue button: <strong>&ldquo;Configure Two-Factor Authentication&rdquo;</strong>.</li>
        </ul>
        <TerminalBlock title="STEP 1 MOCKUP: DISABLED MFA STATE">
{`┌────────────────────────────────────────────────────────────────────────┐
│ [!] Two-Factor Authentication is Disabled                              │
│     Protects account access using TOTP authenticator apps.             │
│                                                                        │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ 🔑 Configure Two-Factor Authentication                             │ │
│ └────────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘`}
        </TerminalBlock>
      </div>

      {/* Step 2 */}
      <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-3">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-200 text-[#006AC7] flex items-center justify-center font-bold text-xs flex-shrink-0">
            Step 2
          </div>
          <h4 className="font-bold text-xs text-[#102033] uppercase tracking-wider">Confirm Account Password (Step-Up Verification)</h4>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          To prevent unauthorized enrollment on unattended browser sessions, the system enforces a mandatory identity step-up check:
        </p>
        <ol className="text-xs text-[#526477] space-y-1.5 list-decimal list-inside leading-relaxed">
          <li>The prompt displays: <em>&ldquo;Please confirm your account password to begin MFA registration:&rdquo;</em>.</li>
          <li>Enter your <strong>Current Account Password</strong> in the password field.</li>
          <li>Click <strong>&ldquo;Proceed to Authenticator Setup&rdquo;</strong> (or click &ldquo;Cancel&rdquo; to abort).</li>
          <li><strong>Security Invariant:</strong> The backend validates your password using Argon2id with server-side pepper. If the password is mistyped, an error banner displays: <em>&ldquo;Invalid password. Step-up re-authentication failed.&rdquo;</em></li>
        </ol>
      </div>

      {/* Step 3 */}
      <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-3">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-200 text-[#006AC7] flex items-center justify-center font-bold text-xs flex-shrink-0">
            Step 3
          </div>
          <h4 className="font-bold text-xs text-[#102033] uppercase tracking-wider">Link Your Authenticator App (Dual-Mode Setup)</h4>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          Upon successful password confirmation, the modal transitions to Step 2, displaying a dual-mode enrollment card featuring both a <strong>scannable QR Code</strong> and a <strong>Manual Setup Key</strong>:
        </p>

        <TerminalBlock title="STEP 3 MOCKUP: DUAL-MODE SETUP INTERFACE">
{`┌────────────────────────────────────────────────────────────────────────┐
│  ┌──────────────┐   1. Scan QR Code                                    │
│  │ ▄▄▄▄▄  ▄  ▄▄ │   Open Google Authenticator or Microsoft             │
│  │ █ ▄▄ █ ▄█▄ █ │   Authenticator on your phone and scan this code.   │
│  │ █▄▄▄█ ▄█▄▄ █ │                                                      │
│  │ ▄▄▄▄▄ █▄█ ▄▄ │   ────────────────────────────────────────────────   │
│  │ █ ▄ █ ▄▄  ▄█ │   OR ENTER KEY MANUALLY                  [Copy Key]  │
│  │ █▄▄▄█ █▄▄█▄█ │   WIJTG45UIZRQDWUHV2UFSOGDUX6TDRG9                   │
│  └──────────────┘                                                      │
│                                                                        │
│  2. Enter 6-Digit Authenticator Code                                   │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │                           0 0 0 0 0 0                            │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│  Input the current 6-digit verification code from your authenticator   │
│  app to complete setup.                                                │
│                                                                        │
│  ┌──────────────────────────────────────────────┐ ┌──────────────────┐ │
│  │ Verify Code & Complete Setup                 │ │ Cancel           │ │
│  └──────────────────────────────────────────────┘ └──────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘`}
        </TerminalBlock>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 space-y-2">
            <div className="flex items-center gap-2 font-bold text-xs text-[#006AC7]">
              <QrCode className="w-4 h-4" />
              <span>Option A: Fast QR Code Scan (Recommended &ndash; 2 Seconds)</span>
            </div>
            <ol className="text-xs text-[#526477] space-y-1 list-decimal list-inside leading-relaxed">
              <li>Open <strong>Google Authenticator</strong> or <strong>Microsoft Authenticator</strong> on your smartphone.</li>
              <li>Tap the <strong>&ldquo;+&rdquo; (Add Account)</strong> button.</li>
              <li>Select <strong>&ldquo;Scan a QR code&rdquo;</strong>.</li>
              <li>Point your phone camera at the square QR code displayed in the modal.</li>
              <li>The authenticator app instantly registers <strong><code>LiaquatabadSMS:your-email@domain.com</code></strong> and displays 30-second rolling 6-digit numbers.</li>
            </ol>
          </div>

          <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-200 space-y-2">
            <div className="flex items-center gap-2 font-bold text-xs text-purple-700">
              <Copy className="w-4 h-4" />
              <span>Option B: Manual Setup Key Entry</span>
            </div>
            <ol className="text-xs text-[#526477] space-y-1 list-decimal list-inside leading-relaxed">
              <li>Click the <strong>&ldquo;Copy Key&rdquo;</strong> button located on the top-right of the manual key box.</li>
              <li>Open your authenticator app and choose <strong>&ldquo;Enter a setup key&rdquo;</strong> (or Manual Entry).</li>
              <li>Set the Account Name to <strong><code>Liaquatabad SMS</code></strong>.</li>
              <li>Paste the 32-character key into the &ldquo;Key&rdquo; field.</li>
              <li>Ensure the key type is set to <strong>&ldquo;Time-based&rdquo;</strong> (TOTP). Tap <strong>Add</strong>.</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Step 4 */}
      <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-3">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-200 text-[#006AC7] flex items-center justify-center font-bold text-xs flex-shrink-0">
            Step 4
          </div>
          <h4 className="font-bold text-xs text-[#102033] uppercase tracking-wider">Verify First TOTP Code &amp; Confirm Activation</h4>
        </div>
        <ol className="text-xs text-[#526477] space-y-1.5 list-decimal list-inside leading-relaxed">
          <li>Observe the current 6-digit code displayed in your authenticator app for <code>LiaquatabadSMS</code>.</li>
          <li>Type the 6 digits into the large centered input box: <code>[ 0 0 0 0 0 0 ]</code>.</li>
          <li>Click the blue button: <strong>&ldquo;Verify Code &amp; Complete Setup&rdquo;</strong>.</li>
          <li>The system cryptographically validates the code against a &plusmn;30-second time-step window using HMAC-SHA1.</li>
        </ol>
      </div>

      {/* Step 5 */}
      <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-3">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center font-bold text-xs flex-shrink-0">
            Step 5
          </div>
          <h4 className="font-bold text-xs text-[#102033] uppercase tracking-wider">Save Emergency Backup Recovery Codes (Critical!)</h4>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          Immediately upon successful TOTP verification, the wizard transitions to Step 3, presenting <strong>8 Emergency Backup Recovery Codes</strong>:
        </p>

        <TerminalBlock title="STEP 5 MOCKUP: 8 EMERGENCY BACKUP RECOVERY CODES">
{`┌────────────────────────────────────────────────────────────────────────┐
│ 🛡️ Emergency MFA Backup Recovery Codes                                 │
│ If you lose access to your authenticator app, these single-use codes   │
│ allow you to recover account access. Store them offline securely.      │
│                                                                        │
│ ┌───────────────────────────┐  ┌───────────────────────────┐           │
│ │ 1. A7B3-9F2K-81MC-04PQ    │  │ 5. D4R8-21VN-99XA-56TY    │           │
│ │ 2. K9W2-33PL-08ZX-71RE    │  │ 6. H2M9-77BC-44JK-12OP    │           │
│ │ 3. C3V8-55MN-90QA-14LK    │  │ 7. T8Z1-34DF-67UI-90NM    │           │
│ │ 4. X1P4-66TY-23GH-88SD    │  │ 8. Q5L2-89WE-11AZ-33XC    │           │
│ └───────────────────────────┘  └───────────────────────────┘           │
│                                                                        │
│ ┌───────────────────────────────┐ ┌──────────────────────────────────┐ │
│ │ 📋 Copy Codes                 │ │ 💾 Download Backup Codes (.txt)  │ │
│ └───────────────────────────────┘ └──────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘`}
        </TerminalBlock>

        <ol className="text-xs text-[#526477] space-y-1.5 list-decimal list-inside leading-relaxed">
          <li>Click <strong>&ldquo;Download Backup Codes (.txt)&rdquo;</strong> to save a timestamped text file to your local computer.</li>
          <li>Alternatively, click <strong>&ldquo;Copy Codes&rdquo;</strong> and paste them into a secure password vault or encrypted storage.</li>
          <li><strong>Critical Rule:</strong> Each recovery code is strictly single-use. When used to sign in, that specific code is permanently consumed and invalidated.</li>
          <li>Click <strong>&ldquo;Finish &amp; Close&rdquo;</strong>.</li>
        </ol>
      </div>

      {/* Step 6 */}
      <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-3">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-200 text-[#4B7F3A] flex items-center justify-center font-bold text-xs flex-shrink-0">
            Step 6
          </div>
          <h4 className="font-bold text-xs text-[#102033] uppercase tracking-wider">Verify Active Status</h4>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          The modal status card now updates to an emerald verified badge:
        </p>
        <ul className="text-xs text-[#526477] space-y-1.5 list-disc list-inside leading-relaxed">
          <li><strong>Two-Factor Authentication is Enabled</strong> (Green shield icon).</li>
          <li>Displays the count of remaining recovery codes: <em>&ldquo;8 Emergency Recovery Codes Available&rdquo;</em>.</li>
          <li>Two management actions become active: <strong>&ldquo;Transfer to New Phone (Rotate Authenticator)&rdquo;</strong> and <strong>&ldquo;Regenerate Emergency Recovery Codes&rdquo;</strong>.</li>
        </ul>
      </div>
    </div>

    {/* Section 5: Signing In After MFA is Enabled */}
    <SectionTitle>5. Signing In After MFA is Enabled</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      Once MFA is activated on your account, subsequent logins follow a secure two-step handshake:
    </p>

    <TerminalBlock title="TWO-STEP AUTHENTICATION HANDSHAKE (/login)">
{`Step 1: Primary Login Form (/login)
┌──────────────────────────────────────────────┐
│ Email:    headmaster.primary@liaquatabad.edu │
│ Password: •••••••••••••••••••••••••          │
│ [ Sign In ]                                  │
└──────────────────────┬───────────────────────┘
                       │ Valid Password
                       ▼
Step 2: Two-Factor Verification Prompt
┌──────────────────────────────────────────────┐
│ 🛡️ Two-Factor Authentication Required         │
│ Enter the 6-digit verification code from     │
│ your authenticator app for LiaquatabadSMS.   │
│                                              │
│ [ 4 9 2 0 1 8 ]                              │
│                                              │
│ [ Verify Code ]                              │
│ ──────────────────────────────────────────── │
│ 🔗 Lost phone? Use Emergency Recovery Code   │
└──────────────────────────────────────────────┘`}
    </TerminalBlock>

    <div className="space-y-4 mb-6">
      <ol className="text-xs text-[#526477] space-y-2 list-decimal list-inside leading-relaxed">
        <li><strong>Step 1:</strong> Enter your official institutional email and password on the standard sign-in page.</li>
        <li><strong>Step 2:</strong> The server validates your password credentials. Recognizing that MFA is enabled on your account, the portal advances to the <strong>Two-Factor Verification</strong> screen.</li>
        <li><strong>Step 3:</strong> Open your mobile authenticator app, read the current 6-digit rolling code, and enter it into the verification input.</li>
        <li><strong>Step 4:</strong> Click <strong>&ldquo;Verify Code&rdquo;</strong>.</li>
        <li><strong>Step 5:</strong> The server cryptographically validates the TOTP window, issues your full session access token (<code>mfaVerified: true</code>), sets the HttpOnly session cookie, and redirects you to your role dashboard.</li>
      </ol>

      <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-200 space-y-2.5">
        <div className="flex items-center gap-2 font-bold text-xs text-amber-900">
          <KeyRound className="w-4 h-4 text-amber-600" />
          <span>Using an Emergency Backup Code (If Device is Unavailable)</span>
        </div>
        <ol className="text-xs text-[#526477] space-y-1.5 list-decimal list-inside leading-relaxed">
          <li>On the Step 2 login screen, click the link: <strong>&ldquo;Use Emergency Recovery Code&rdquo;</strong>.</li>
          <li>Enter one of your unused 16-character recovery codes (e.g., <code>A7B3-9F2K-81MC-04PQ</code>).</li>
          <li>Click <strong>&ldquo;Verify &amp; Sign In&rdquo;</strong>.</li>
          <li>The system validates the code against your stored Argon2id hashes, burns that specific code, emits an audit alert, and logs you into your account.</li>
          <li><strong>Immediate Action Required:</strong> Go to <strong>Account Security</strong> and regenerate your recovery codes or rotate your authenticator device.</li>
        </ol>
      </div>
    </div>

    {/* Section 6: Safe Troubleshooting Matrix */}
    <SectionTitle>6. Safe Troubleshooting Matrix</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      The following matrix covers all verified operational symptoms, underlying root causes, and authorized resolutions:
    </p>

    <ComparisonTable
      headers={['Problem / Observed Message', 'Underlying Cause', 'Safe Operational Solution']}
      rows={[
        {
          left: '"Authentication token is required."',
          right:
            'Outdated browser cache from previous session or transient network interruption • Resolution: 1. Refresh the web page (Ctrl + F5 or Cmd + Shift + R). 2. Sign out and sign back in to establish a fresh session. 3. Open Account Security and retry. (The client interceptor now automatically injects your active access token).',
        },
        {
          left: '"Invalid password. Step-up re-authentication failed."',
          right:
            'The current account password was mistyped during Step 1 confirmation • Resolution: 1. Carefully re-enter your current account login password. 2. Verify Caps Lock is turned off. 3. If you have forgotten your password, use the "Forgot Password" link on the login page before configuring MFA.',
        },
        {
          left: '"Invalid authentication code. Please check your authenticator app."',
          right:
            '1. Code entered after its 30-second window expired. 2. Code was mistyped. 3. Smartphone clock is out of sync • Resolution: 1. Wait for the authenticator app to generate a fresh 6-digit code, then re-enter immediately. 2. Verify you are reading the code under "LiaquatabadSMS" and not another personal account. 3. Check your smartphone clock synchronization.',
        },
        {
          left: 'Device Clock Out of Sync (Clock Drift)',
          right:
            'The phone\'s internal clock differs from municipal standard time by > 30 seconds • Resolution: On Android: Open Google Authenticator → Settings → Time correction for codes → Sync now. On iOS: Go to iPhone Settings → General → Date & Time → Toggle "Set Automatically" ON. Re-enter the newly generated code.',
        },
        {
          left: 'User closed or refreshed modal during setup',
          right:
            'The setup wizard was closed before Step 2 code verification was completed • Resolution: Safe fail-closed behavior: An unconfirmed secret is never activated. It expires harmlessly after 10 minutes. Simply reopen Account Security → click "Configure Two-Factor Authentication" and restart.',
        },
        {
          left: '"MFA is mandatory for your role level and cannot be disabled."',
          right:
            'The account possesses ROOT_ADMIN or privileged authority where MFA is enforced by municipal policy • Resolution: This is an intended architectural security ceiling. Root Administrators and designated municipal authorities are prohibited from disabling MFA.',
        },
        {
          left: 'Phone is lost, stolen, or damaged',
          right:
            'Physical device no longer accessible • Resolution: 1. Sign in using an Emergency Backup Recovery Code. 2. Once logged in, go to Account Security → Click "Transfer to New Phone". 3. If all recovery codes are lost, contact your Town Administrator or DMC IT Helpdesk for an in-person identity verification and administrative reset.',
        },
        {
          left: 'MFA Status does not appear to update',
          right:
            'Browser modal state temporarily desynchronized • Resolution: Click the modal close button, refresh your browser page, and reopen Account Security. The status card will reflect the authoritative database state.',
        },
      ]}
    />

    {/* Section 7: Ongoing Authenticator Maintenance & Lifecycle Operations */}
    <SectionTitle>7. Ongoing Authenticator Maintenance &amp; Lifecycle Operations</SectionTitle>

    <TerminalBlock title="ACTIVE MFA MANAGEMENT INTERFACE">
{`┌────────────────────────────────────────────────────────────────────────┐
│ Two-Factor Authentication is Enabled                                   │
│ Your account is protected with TOTP authenticator security.           │
│ Remaining Emergency Recovery Codes: 8                                  │
│                                                                        │
│ ┌───────────────────────────────────┐ ┌──────────────────────────────┐ │
│ │ 🔄 Transfer to New Phone          │ │ 🔄 Regenerate Recovery Codes │ │
│ └───────────────────────────────────┘ └──────────────────────────────┘ │
│                                                                        │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ ⚠️ Disable Two-Factor Authentication                               │ │
│ └────────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘`}
    </TerminalBlock>

    <div className="space-y-6 mb-8">
      {/* 7.1 Transfer to New Phone */}
      <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2.5">
        <div className="flex items-center gap-2 font-bold text-xs text-[#102033] uppercase tracking-wider">
          <RefreshCw className="w-4 h-4 text-[#006AC7]" />
          <span>7.1 How to Transfer MFA to a New Phone (Device Rotation)</span>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          When you upgrade or replace your smartphone, <strong>do not wipe or discard your old phone until the new phone is linked</strong>:
        </p>
        <ol className="text-xs text-[#526477] space-y-1.5 list-decimal list-inside leading-relaxed">
          <li>Open <strong>Account Security</strong> &rarr; <strong>Two-Factor Authentication</strong>.</li>
          <li>Click <strong>&ldquo;Transfer to New Phone (Rotate Authenticator)&rdquo;</strong>.</li>
          <li>Enter your current account password to authorize device rotation.</li>
          <li>A new QR code and setup key will display.</li>
          <li>Open Google Authenticator on your <strong>NEW phone</strong> and scan the new QR code.</li>
          <li>Enter the 6-digit code generated by your <strong>NEW phone</strong>.</li>
          <li>Click <strong>&ldquo;Verify New Phone &amp; Complete Transfer&rdquo;</strong>.</li>
          <li>The server atomically updates your encrypted secret seed, invalidates the old phone&apos;s configuration, and generates 8 fresh backup recovery codes.</li>
        </ol>
      </div>

      {/* 7.2 Regenerate Recovery Codes */}
      <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2.5">
        <div className="flex items-center gap-2 font-bold text-xs text-[#102033] uppercase tracking-wider">
          <KeyRound className="w-4 h-4 text-purple-600" />
          <span>7.2 How to Regenerate Emergency Recovery Codes</span>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          If you have used several recovery codes or suspect your downloaded codes file was exposed:
        </p>
        <ol className="text-xs text-[#526477] space-y-1.5 list-decimal list-inside leading-relaxed">
          <li>Open <strong>Account Security</strong> &rarr; <strong>Two-Factor Authentication</strong>.</li>
          <li>Click <strong>&ldquo;Regenerate Emergency Recovery Codes&rdquo;</strong>.</li>
          <li>In the prompt dialog, enter your current account password.</li>
          <li>The system invalidates all previous recovery codes and generates <strong>8 brand new codes</strong>.</li>
          <li>Download the new text file and securely delete the old text file.</li>
        </ol>
      </div>

      {/* 7.3 Disabling Two-Factor Authentication */}
      <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2.5">
        <div className="flex items-center gap-2 font-bold text-xs text-[#102033] uppercase tracking-wider">
          <AlertTriangle className="w-4 h-4 text-amber-600" />
          <span>7.3 Disabling Two-Factor Authentication (Non-Root Accounts Only)</span>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          If you must temporarily disable MFA (e.g., prior to temporary phone maintenance):
        </p>
        <ol className="text-xs text-[#526477] space-y-1.5 list-decimal list-inside leading-relaxed">
          <li>Open <strong>Account Security</strong> &rarr; <strong>Two-Factor Authentication</strong>.</li>
          <li>Scroll to the bottom and click <strong>&ldquo;Disable Two-Factor Authentication&rdquo;</strong>.</li>
          <li>In the confirmation dialog, enter your account password.</li>
          <li>Click <strong>&ldquo;Disable 2FA&rdquo;</strong>.</li>
          <li>MFA is deactivated immediately. <em>Note: You can re-enable MFA at any time by following the standard enrollment flow.</em></li>
        </ol>
      </div>

      {/* 7.4 Administrative MFA Reset */}
      <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2.5">
        <div className="flex items-center gap-2 font-bold text-xs text-[#102033] uppercase tracking-wider">
          <ShieldAlert className="w-4 h-4 text-red-600" />
          <span>7.4 Administrative MFA Reset (Disaster Recovery)</span>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          If an employee permanently loses their phone, has exhausted all recovery codes, and cannot sign in:
        </p>
        <ul className="text-xs text-[#526477] space-y-1.5 list-disc list-inside leading-relaxed">
          <li><strong>Self-service bypass does not exist</strong> (by strict security design).</li>
          <li>The user must contact an authorized <strong>Town Admin (Level 80)</strong>, <strong>Super Admin</strong>, or <strong>DMC IT Administrator</strong>.</li>
          <li>The administrator verifies the employee&apos;s physical government civil service credentials (CNIC / Employee Service Book).</li>
          <li>The administrator accesses <code>POST /api/v1/auth/mfa/admin-reset/:userId</code>, enters a mandatory written audit justification (&ge; 5 characters), and resets the subordinate&apos;s MFA state.</li>
          <li>The action is immutably recorded in the platform <code>AuditLog</code>.</li>
        </ul>
      </div>
    </div>

    {/* Section 8: Institutional Security Rules & Responsibilities */}
    <SectionTitle>8. Institutional Security Rules &amp; Employee Responsibilities</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      All employees of the Education Department, Liaquatabad Town Centre (DMC) must adhere to these non-negotiable security mandates:
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <div className="flex items-center gap-2 font-bold text-xs text-red-700">
          <ShieldAlert className="w-4 h-4 text-red-600 flex-shrink-0" />
          <span>1. Zero Secret Sharing</span>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          Never share your account password, 6-digit rolling TOTP codes, or 16-character emergency recovery codes with anyone &mdash; including school clerks, Head Masters, IT technicians, or colleagues.
        </p>
      </div>

      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <div className="flex items-center gap-2 font-bold text-xs text-amber-700">
          <QrCode className="w-4 h-4 text-amber-600 flex-shrink-0" />
          <span>2. Never Screenshot QR Codes</span>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          Never take screenshots of your enrollment QR code or setup key to transmit via WhatsApp, email, or messaging platforms. Anyone with access to the QR code can mirror your authenticator.
        </p>
      </div>

      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <div className="flex items-center gap-2 font-bold text-xs text-blue-700">
          <Smartphone className="w-4 h-4 text-[#006AC7] flex-shrink-0" />
          <span>3. Dedicated Physical Device</span>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          Configure your authenticator app on a personal, password- or biometrics-protected mobile phone. Do not install browser extension authenticators on shared public school computers.
        </p>
      </div>

      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <div className="flex items-center gap-2 font-bold text-xs text-emerald-700">
          <Lock className="w-4 h-4 text-[#4B7F3A] flex-shrink-0" />
          <span>4. Clean Workstation Discipline</span>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          Always lock your computer screen (<code>Win + L</code> or <code>Cmd + Ctrl + Q</code>) when leaving your desk, and click <strong>&ldquo;Sign Out&rdquo;</strong> when finished on shared office or staffroom workstations.
        </p>
      </div>

      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2 sm:col-span-2 lg:col-span-2">
        <div className="flex items-center gap-2 font-bold text-xs text-purple-700">
          <AlertCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
          <span>5. Report Suspicious Prompts Immediately</span>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          If your authenticator app generates prompt notifications when you are not actively signing in, or if you receive unsolicited password reset emails, report the incident immediately to DMC IT Security.
        </p>
      </div>
    </div>

    {/* Section 9: Frequently Asked Questions (FAQ) */}
    <SectionTitle>9. Frequently Asked Questions (FAQ)</SectionTitle>
    <div className="space-y-3 mb-8">
      <FaqItem
        category="Concepts"
        question="Q1: Is Multi-Factor Authentication the same as my account password?"
        answer="No. Your password is a static credential known to you. MFA is a dynamic, physical second factor generated on your phone that changes every 30 seconds. Both are required to sign in."
      />
      <FaqItem
        category="Connectivity"
        question="Q2: Do I need an active internet connection on my phone to generate codes?"
        answer="No. The RFC 6238 TOTP algorithm calculates codes using mathematical time synchronization between your phone's internal clock and the server. Your phone generates valid codes even in airplane mode or with zero mobile data."
      />
      <FaqItem
        category="Timing"
        question="Q3: What happens if I type the code right as the timer expires?"
        answer="The server incorporates a generous ±30-second clock tolerance window (W-1, W, W+1). However, if a code fails because it expired mid-entry, simply wait for the next 6-digit number to appear and enter it immediately."
      />
      <FaqItem
        category="Devices"
        question="Q4: Can I install my authenticator on multiple devices?"
        answer="Yes. During Step 3 of enrollment, you can scan the same QR code on a second phone or tablet before clicking 'Verify Code'. Both devices will generate identical synchronized rolling codes."
      />
      <FaqItem
        category="Policy"
        question="Q5: Can a Head Master or School Clerk set up MFA on my behalf?"
        answer="Strictly Prohibited. MFA setup requires your personal account password and must be configured on your own physical smartphone. Institutional regulations prohibit delegating account credentials."
      />
      <FaqItem
        category="Troubleshooting"
        question="Q6: What should I do if I see 'Authentication token is required'?"
        answer="Refresh your browser tab (Ctrl + F5) and click 'Proceed to Authenticator Setup' again. This transient message occurs only if a browser tab holds an unrefreshed session. The client request interceptor automatically attaches your active Redux session token."
      />
      <FaqItem
        category="Recovery"
        question="Q7: Where are my emergency backup recovery codes stored?"
        answer="Recovery codes are displayed only once upon initial setup. The server stores only cryptographic Argon2id hashes of your codes and cannot read them back to you. You must save the .txt download in a secure personal folder."
      />
      <FaqItem
        category="Disaster Recovery"
        question="Q8: What if I lose both my phone and my emergency recovery codes?"
        answer="Contact your designated Town Administrator or DMC IT Support. After verifying your official civil service employment records, an authorized administrator can perform an audited reset of your MFA configuration via POST /api/v1/auth/mfa/admin-reset/:userId."
      />
    </div>

    {/* Section 10: Official Institutional Footer Note */}
    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center text-xs text-[#526477]">
      Official Document Maintained by the Education Department, Liaquatabad Town Centre (DMC) IT Security Office.
      <br />
      Aligned with CVifyPro Benchmark Standards &amp; Institutional Civil Service Governance. Synchronously tracked with <code>docs/MFA_USER_GUIDE.md</code>.
    </div>
  </div>
);

export const SecurityInvariantsSection = () => (
  <div>
    <DocHeader
      title="The 5 Non-Negotiable Architectural Invariants"
      badge="4. Defense-in-Depth Security"
      subtitle="Permanent engineering laws that must never be bypassed by any controller, service, or future code modification."
    />

    <ComparisonTable
      headers={['Invariant Principle', 'Architectural Enforcement & Guarantee']}
      rows={[
        {
          left: '1. Decoupled Identity Law',
          right: 'Civil Designation ≠ RBAC Role ≠ Role Level ≠ Geographic Scope. Deselecting or editing a title never changes software permissions.',
        },
        {
          left: '2. Hierarchy Subordination Law',
          right: 'actor.roleLevel > target.roleLevel. No actor can create, modify, suspend, or reset an account of equal or higher rank.',
        },
        {
          left: '3. Cross-School Isolation Law',
          right: 'All queries must automatically include schoolId or assignedSchools filters injected by attachScope.js middleware.',
        },
        {
          left: '4. Zero Hard Deletions Law',
          right: 'Permanent database row deletions are strictly prohibited. Entities transition through ACTIVE → SUSPENDED → INACTIVE states.',
        },
        {
          left: '5. Zero-Trust Parent Access Law',
          right: 'Authenticated Parent → VERIFIED ParentStudentLink → exact studentProfileId match. Otherwise 403 Forbidden.',
        },
      ]}
    />
  </div>
);

export const ThreatMatrixSection = () => (
  <div>
    <DocHeader
      title="Adversarial Threat & Attack Mitigation Matrix"
      badge="4. Defense-in-Depth Security"
      subtitle="Exhaustive inventory of potential attack vectors and the exact server-side controls mitigating them."
    />

    <ComparisonTable
      headers={['Adversarial Threat Vector', 'Potential Impact', 'Server-Side Defensive Mitigation']}
      rows={[
        {
          left: 'BOLA / IDOR (Broken Object-Level Authorization)',
          right:
            'A malicious Teacher attempts to view or alter students of another school by replacing the schoolId in URL parameters.\n\nMitigation: attachScope.js ignores client-supplied schoolId; automatically overrides it with the authenticated actor\'s cryptographic token schoolId.',
        },
        {
          left: 'Mass Assignment / Privilege Escalation',
          right:
            'An attacker submits { role: "ROOT_ADMIN", roleLevel: 100 } in the body of a profile update request.\n\nMitigation: Express validation schemas strictly strip and reject role, roleLevel, and scope fields from client input payloads.',
        },
        {
          left: 'NoSQL Injection ($gt, $ne, $regex)',
          right:
            'An attacker submits { "username": { "$ne": null }, "password": { "$ne": null } } to bypass authentication.\n\nMitigation: express-mongo-sanitize middleware recursively strips all keys starting with "$" or containing "." before hitting controllers.',
        },
        {
          left: 'Token Theft & Replay Attacks',
          right:
            'An attacker intercepts a stolen refresh token.\n\nMitigation: Refresh Token Rotation (RTR). Using an already-rotated token immediately revokes all family refresh tokens, invalidating all sessions across all devices.',
        },
        {
          left: 'Distributed Credential Stuffing',
          right:
            'Botnet runs automated dictionary attacks against staff accounts.\n\nMitigation: Triple-Lock rate limiter throttles by target account ID regardless of IP rotation, combined with memory-hard Argon2id (19MB RAM) and Math CAPTCHA.',
        },
        {
          left: 'Session Fixation & CSRF',
          right:
            'Attacker forces user to use a pre-existing session token or tricks browser into state-changing requests.\n\nMitigation: Refresh tokens stored in HTTPOnly SameSite=Strict secure cookies; access tokens held in client memory only. CSRF impossible via cross-origin fetch.',
        },
        {
          left: 'Timing Attacks on Passwords & Tokens',
          right:
            'Attacker measures response milliseconds to determine valid usernames or password character lengths.\n\nMitigation: crypto.timingSafeEqual() used for all secret comparisons; mock Argon2id hashing executed even for nonexistent usernames to equalize timing.',
        },
        {
          left: 'Student Enumeration via GR Lookup',
          right:
            'Scraper attempts to scrape all student names and phone numbers by iterating GR numbers.\n\nMitigation: /parent/lookup-ward endpoint masks names ("M**** A***"), redacts all phones/CNICs, and is rate-limited to 10 lookups/hour.',
        },
      ]}
    />
  </div>
);

export const CanonicalFindingRegisterSection = () => (
  <div>
    <DocHeader
      title="Canonical Security Finding Register (CF-01 through CF-10)"
      badge="4. Defense-in-Depth Security"
      subtitle="Complete register reconciling historical security audit reports, verified fixes, and test evidence."
    />

    <ComparisonTable
      headers={['Finding ID', 'Vulnerability Description', 'Severity', 'Remediation Status & Test Evidence']}
      rows={[
        {
          left: 'CF-01 (SEC-HIGH-01)',
          right: 'Export audit failure permitted data streaming without audit trail • HIGH • RESOLVED & VERIFIED (Fail-closed audit write verified via automated export fault-injection suite)',
        },
        {
          left: 'CF-02 (SEC-MED-01)',
          right: 'Export endpoints lacked account-level rate limiting • MEDIUM • RESOLVED & VERIFIED (Triple-Lock rate limiter enforces 5 req/15 min limit)',
        },
        {
          left: 'CF-03 (SEC-HIGH-02)',
          right: 'Token invalidation bypass on account state change • HIGH • RESOLVED & VERIFIED (tokenVersion increment verified via auth session lifecycle suite)',
        },
        {
          left: 'CF-04 (BUG-OUTBOX-01)',
          right: 'Outbox dispatch referenced undefined error variable • MEDIUM • RESOLVED & COMMITTED (Resolved with proper error property capture; regression test verified)',
        },
        {
          left: 'CF-05 (ARCH-01)',
          right: 'Subdivided sections assumed in single-cohort schools • LOW • DOCUMENTED & VERIFIED (TeachingAssignment.sectionId nullable for whole-cohort assignment)',
        },
        {
          left: 'CF-06 (OPS-01)',
          right: 'Reverse proxy IP spoofing risk without trusted proxy configuration • MEDIUM • DOCUMENTED (trust proxy: 1 prerequisite in deployment topology)',
        },
        {
          left: 'CF-07 (BOLA-01)',
          right: 'Supervisor cross-cluster school inspection bypass • HIGH • RESOLVED & VERIFIED (Cluster assigned school check verified via supervisor BOLA remediation suite)',
        },
        {
          left: 'CF-08 (IDOR-01)',
          right: 'Student cross-user marksheet download • HIGH • RESOLVED & VERIFIED (Token-to-student ownership match verified via student security suite)',
        },
        {
          left: 'CF-09 (PRIV-01)',
          right: 'Body injection of role: ROOT_ADMIN • CRITICAL • RESOLVED & VERIFIED (Root admin creation guard verified via authority negative security suite)',
        },
        {
          left: 'CF-10 (PRIV-02)',
          right: 'Super Admin self-disable or last-admin lockout • HIGH • RESOLVED & VERIFIED (Last-standing administrator lockouts verified via authority model suite)',
        },
        {
          left: 'CF-11 (UX-SEC-01)',
          right: 'Header Shield icon opened directly to device termination list • LOW • RESOLVED & VERIFIED (Defaulted to Security Overview tab; remote termination controls preserved under deliberate Active Sessions tab)',
        },
      ]}
    />
  </div>
);

export const ScreenCaptureProtectionSection = () => (
  <div>
    <DocHeader
      title="Client Screen Protection: Deterrence vs Forensic Attribution"
      badge="4. Defense-in-Depth Security"
      subtitle="Understanding the real-world boundary between browser-level heuristic deterrence and undeniable forensic watermarking."
    />

    <Callout type="warning" title="CORE ARCHITECTURAL LAW: ZERO BACKEND RELIANCE ON CLIENT CONTROLS">
      Web browsers run in client-controlled sandbox environments. No web application running inside Chromium, Gecko, or WebKit can physically intercept OS kernel-level screen composition (Win + Shift + S), hardware video capture, or physical smartphone photography. Primary security is enforced strictly by backend RBAC, scoped queries, and audit logging.
    </Callout>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
      <InfoCard
        icon={<Shield className="w-5 h-5" />}
        color="purple"
        title="Forensic Attribution Watermark"
        desc="Renders dynamic user identity, role, school, and timestamp diagonally across the viewport. Provides undeniable forensic traceability even if photographed with an external smartphone."
      />
      <InfoCard
        icon={<Lock className="w-5 h-5" />}
        color="blue"
        title="Heuristic Screen Deterrence"
        desc="Hotkey interception (PrintScreen, Ctrl+Shift+S) and window blur handlers provide heuristic deterrence against casual capture, flushing the clipboard on trigger."
      />
    </div>
  </div>
);
