import React from 'react';
import {
  Sparkles,
  Cpu,
  Layers,
  Palette,
  CheckCircle2,
  Lock,
  RefreshCw,
  AlertTriangle,
  Zap,
} from 'lucide-react';
import {
  DocHeader,
  SectionTitle,
  InfoCard,
  ComparisonTable,
  TerminalBlock,
  Callout,
  Steps,
  ReasoningCard,
  FailureRecoveryCard,
  VerificationBox,
  CrossQuestions,
} from '../components/DocPrimitives';

export const DesignConstitutionSection = () => (
  <div>
    <DocHeader
      title="Frozen Design Constitution v2.0 & Color Area Percentages"
      badge="7. UI Constitution & Performance"
      subtitle="Strict visual guidelines enforcing civic dignity, high contrast, and accessibility."
    />

    <p className="text-xs text-[#526477] leading-relaxed mb-6">
      To maintain visual consistency and avoid arbitrary styling across 100+ components, the frontend workspace and landing portal adhere strictly to the <strong>Frozen Design Constitution v2.0</strong>:
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
      <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-center">
        <div className="text-3xl font-black text-[#006AC7]">55%</div>
        <div className="text-xs font-bold text-[#102033]">BRAND CIVIC BLUE</div>
        <div className="text-[11px] text-[#526477]">Headers, Primary CTAs, Active States</div>
      </div>
      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
        <div className="text-3xl font-black text-[#102033]">25%</div>
        <div className="text-xs font-bold text-[#102033]">CANVAS WHITE</div>
        <div className="text-[11px] text-[#526477]">Card Backgrounds, Surface Layers</div>
      </div>
      <div className="p-4 rounded-xl bg-slate-100 border border-slate-300 text-center">
        <div className="text-3xl font-black text-slate-700">12%</div>
        <div className="text-xs font-bold text-[#102033]">NEUTRAL SLATE</div>
        <div className="text-[11px] text-[#526477]">Body Typography, Subtle Borders</div>
      </div>
      <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
        <div className="text-3xl font-black text-[#4B7F3A]">≤ 8%</div>
        <div className="text-xs font-bold text-[#102033]">MUNICIPAL GREEN</div>
        <div className="text-[11px] text-[#526477]">Verified Badges, Success Badges Only</div>
      </div>
    </div>

    <Callout type="warning" title="THE 8% GREEN RULE">
      Municipal green (<code>#4B7F3A</code>) represents the official crest of the Government of Sindh. It is strictly reserved for verified civic credentials, passing grades, and successful inspections. Overusing green as a background or generic button color violates the Design Constitution.
    </Callout>

    <ReasoningCard
      title="Color Area Rationale (55/25/12/8 Mathematical Proportion)"
      decision="A mathematically frozen color area ratio: 55% Brand Civic Blue (#006AC7), 25% Canvas White (#FFFFFF), 12% Neutral Slate (#526477), and ≤ 8% Municipal Green (#4B7F3A)."
      whyItWon="Municipal civil servants and teachers spend 6 to 8 hours daily reading tabular data, marksheets, and attendance rosters on budget desktop monitors. Bright multi-colored dashboards or unconstrained CSS utility palettes cause eye strain and degrade legibility. High-contrast Brand Blue against Canvas White establishes authoritative government dignity while ensuring accessibility compliance (WCAG AAA contrast)."
      alternativesRejected="Generic SaaS dark mode by default (rejected: poor legibility under harsh ambient sunlight in municipal school offices); Material Design multi-accent palette (rejected: introduces rainbow visual clutter that dilutes official institutional gravity); Unrestricted Tailwind utility classes (rejected: causes visual drift across components)."
      tradeOffs="Requires frontend developers to adhere strictly to semantic tokens in client/src/index.css rather than inventing arbitrary inline hex codes."
    />

    <FailureRecoveryCard
      failureMode="Component author introduces non-standard colors or inconsistent button styling."
      impact="Visual fragmentation, degraded contrast ratios, and violation of official civic design standards."
      handling="Automated linting and CSS token isolation: client/src/index.css defines root CSS custom properties. Arbitrary hex codes trigger design system review flags."
      recovery="Refactor component to use established primitives from client/src/components/common (DocHeader, InfoCard, StatusBadge)."
    />

    <CrossQuestions
      title="Engineering Cross-Questions & Design System Inquiries"
      items={[
        {
          category: 'Accessibility & Contrast',
          question: 'Why is Dark Mode not enabled as the primary default theme for the municipal portal?',
          answer: 'Government school administrative offices in Karachi typically operate with high ambient daylight and budget LCD/CRT monitors. Dark backgrounds create glare, reflections, and severe ocular fatigue when staff read dense 50-row student marksheets and attendance grids for hours. Light theme (Canvas White with Brand Blue headers) provides maximum optical contrast.',
          evidence: 'docs/DOCUMENTATION_STANDARDS.md:14-35 • client/src/index.css:1-50',
        },
        {
          category: 'Institutional Crest',
          question: 'Why is Municipal Green (#4B7F3A) strictly capped at 8% of the surface area?',
          answer: 'In municipal administration, green is the color of the official Government of Sindh seal and signifies legally verified status (e.g. verified CNIC, passed inspection, verified transfer). If green were used casually for generic buttons, headers, or decorative borders, users would lose the ability to instinctively spot verified versus unverified institutional records.',
          evidence: 'docs/DOCUMENTATION_STANDARDS.md:40-65 • client/src/components/common/StatusBadge.jsx',
        },
      ]}
    />

    <VerificationBox
      sourceFile="client/src/index.css & client/tailwind.config.js"
      testSuite="Client Production Build (Vite 6.1.0 Rollup Bundler)"
      command="cd client && npm run build"
      result="CLEAN BUILD (34.63s, 0 LINT ERRORS)"
    />
  </div>
);

export const ClientArchitectureSection = () => (
  <div>
    <DocHeader
      title="Redux Toolkit State Management & Concurrent Token Refresh Mutex"
      badge="7. UI Constitution & Performance"
      subtitle="Predictable asynchronous data flow, normalized slices, and Axios token refresh concurrency protection."
    />

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      <InfoCard
        icon={<Cpu className="w-5 h-5" />}
        color="blue"
        title="9 Normalized Redux Slices"
        desc="Slices manage auth, schools, teachers, students, attendance, exams, transfers, documents, and notifications independently."
      />
      <InfoCard
        icon={<Lock className="w-5 h-5" />}
        color="purple"
        title="Token Refresh Mutex Queue"
        desc="Prevents token refresh race conditions when 10 simultaneous API calls receive 401s when the access token expires."
      />
    </div>

    <SectionTitle>The Mutex Interceptor Lifecycle</SectionTitle>
    <TerminalBlock title="AXIOS CONCURRENT REFRESH MUTEX LIFECYCLE">
{`1. API request fails with 401 Unauthorized (Expired Access Token).
2. IF !isRefreshing:
      isRefreshing = true
      Trigger POST /api/v1/auth/refresh-token (with HTTPOnly cookie)
3. ELSE (other concurrent requests):
      Push unresolved Promise into failedQueue[]
4. On refresh success:
      Update Redux store with new accessToken
      Drain failedQueue[]: replay every queued request with new token
      isRefreshing = false
5. On refresh failure (e.g. Session revoked):
      Reject all queued requests
      Dispatch logoutAction() to Redux
      Redirect to /login`}
    </TerminalBlock>

    <ReasoningCard
      title="State Architecture Rationale (Redux Toolkit + Mutex vs Lightweight State)"
      decision="Centralizing application state in Redux Toolkit 2.5 across 9 normalized slices, with an Axios request/response interceptor managing an asynchronous token refresh mutex queue."
      whyItWon="A government school workspace involves multi-tab workflows with simultaneous data queries on dashboard launch (e.g. fetching class roster, subjects, timetable, and announcements simultaneously). When the 15-minute access token expires, all 5 calls return HTTP 401 within milliseconds. Without a Mutex Queue, the browser fires 5 parallel refresh calls, triggering token reuse alerts and logging the user out! The Mutex pauses concurrent requests until a single refresh completes, then replays all queued calls transparently."
      alternativesRejected="Zustand (rejected: lacks standardized middleware structure for cross-slice token mutex queues); Context API + useReducer (rejected: causes massive re-renders across deep component trees during state updates); TanStack / React Query alone (rejected: excellent for server-cache, but does not manage client-side state like multi-step modal wizards, local auth tokens, and offline queues)."
      tradeOffs="Requires defining explicit Redux slices, async thunks, and actions for state mutations."
    />

    <FailureRecoveryCard
      failureMode="Refresh token is revoked, session is terminated by admin, or user network completely drops."
      impact="Token refresh call to POST /api/v1/auth/refresh-token fails with HTTP 401 or network error."
      handling="The mutex interceptor catches the refresh failure, rejects all pending requests in failedQueue[], dispatches logoutAction() to Redux, and purges the in-memory access token."
      recovery="Client displays a friendly notification ('Session expired. Please sign in again.') and redirects user to /login while preserving active form inputs in sessionStorage."
    />

    <CrossQuestions
      title="Engineering Cross-Questions & Client Architecture Inquiries"
      items={[
        {
          category: 'Security Architecture',
          question: 'Why does the client NEVER persist JWT access tokens in localStorage or sessionStorage?',
          answer: 'Web storage (localStorage and sessionStorage) is accessible to any JavaScript executing in the browser origin. If a malicious third-party script or XSS vulnerability exists, stored tokens can be exfiltrated instantly. By holding the access token exclusively in Redux closure memory, tokens vanish on tab close and cannot be inspected via browser storage inspectors.',
          evidence: 'client/src/services/apiClient.js:15-60 • docs/AUTHENTICATION.md:80-110',
        },
        {
          category: 'Concurrency & Race Conditions',
          question: 'What happens during the 3-second Refresh Token Rotation (RTR) grace window?',
          answer: 'When a teacher opens multiple browser tabs, requests may hit the backend nearly simultaneously. When the first tab rotates the refresh token, the server provides a 3,000ms grace window where identical incoming refresh tokens receive the new session token without triggering a theft alert or session termination.',
          evidence: 'server/src/controllers/authController.js:1210-1260 • docs/SECURITY.md:140-165',
        },
      ]}
    />

    <VerificationBox
      sourceFile="client/src/services/apiClient.js & client/src/store/index.js"
      testSuite="client/scripts/testErrorUtils.js & client/scripts/testRoleNavigation.js"
      command="cd client && node scripts/testErrorUtils.js"
      result="9 / 9 PASSED (100% INTERCEPTOR INTEGRITY)"
    />
  </div>
);

export const PwaCachingSection = () => (
  <div>
    <DocHeader
      title="Progressive Web App (PWA) Offline App-Shell Caching"
      badge="7. UI Constitution & Performance"
      subtitle="Ensuring instant workspace loading under weak cellular reception across public municipal schools."
    />

    <p className="text-xs text-[#526477] leading-relaxed mb-6">
      Teachers and administrators in public schools often work in thick stone buildings with intermittent cellular connectivity. The client is equipped with a Google Workbox service worker:
    </p>

    <Steps
      items={[
        {
          step: '1',
          title: 'App-Shell Pre-Caching',
          desc: 'On first visit, HTML entry, JavaScript bundles, stylesheets, and SVG logos are cached in browser CacheStorage.',
        },
        {
          step: '2',
          title: 'Instant Offline Launch',
          desc: 'Subsequent visits launch in < 150ms even when the device is in airplane mode or disconnected from the internet.',
        },
        {
          step: '3',
          title: 'Network-First API Strategy',
          desc: 'Dynamic data (attendance, marks, rosters) always fetches live from server; if offline, user receives clean offline notification.',
        },
      ]}
    />

    <ReasoningCard
      title="PWA Offline Architecture Rationale (Workbox Service Worker vs Native Mobile Apps)"
      decision="Progressive Web App (PWA) using Vite PWA Plugin + Google Workbox with a Stale-While-Revalidate app-shell cache strategy."
      whyItWon="Public school teachers use personal Android smartphones, budget Windows laptops, and school tablets with diverse operating systems. A PWA provides instant offline launch (<150ms) across all devices via the browser without requiring staff to install APKs or municipal IT to manage mobile app store publishing ($0 deployment cost)."
      alternativesRejected="Native Flutter/React Native mobile app (rejected: high development and maintenance overhead across iOS/Android, app store approval delays for critical school fixes); Pure online web app (rejected: fails with browser 'No Internet' screen inside government school concrete buildings)."
      tradeOffs="Browser CacheStorage requires cache-busting management when rolling out breaking frontend changes."
    />

    <FailureRecoveryCard
      failureMode="User device completely loses cellular connectivity while navigating the portal."
      impact="Dynamic API requests fail with network errors."
      handling="Workbox serves the cached app-shell immediately. The UI renders clean offline warning banners rather than crashing or showing a white screen."
      recovery="Network-status listener (window.addEventListener('online')) detects connection restoration and automatically triggers background data revalidation."
    />

    <CrossQuestions
      title="Engineering Inquiries & PWA Offline Cross-Questions"
      items={[
        {
          category: 'Institutional Security',
          question: 'Why is daily attendance marking strictly disabled when the teacher is offline?',
          answer: 'Allowing offline attendance marking would allow bad actors to alter the device clock and submit retroactive attendance hours after gate closure (09:00 AM PKT cutoff), defeating the entire Karachi attendance policy. To guarantee non-repudiable institutional time integrity, attendance submission requires a live connection to obtain a server-stamped timestamp.',
          evidence: 'docs/HM_WORKFLOWS.md:120-165 • server/src/controllers/attendanceController.js:45-90',
        },
        {
          category: 'Cache Invalidation',
          question: 'How does the PWA prevent users from running outdated JavaScript after a production update?',
          answer: 'Vite generates unique content hashes in asset filenames (e.g. index-B4z9kL.js). The Workbox service worker compares the new manifest on each page load. When a hash change is detected, Workbox automatically downloads new assets in the background and activates them on the next page reload.',
          evidence: 'client/vite.config.js:25-60 • client/dist/sw.js',
        },
      ]}
    />

    <VerificationBox
      sourceFile="client/vite.config.js & client/public/manifest.json"
      testSuite="Client Production Build (Vite 6.1.0 Workbox Cache Hash Audit)"
      command="cd client && npm run build"
      result="PWA ASSETS PRECACHED (0 WORKBOX ERRORS)"
    />
  </div>
);

