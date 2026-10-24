# Margly — A clearer path to your career

Margly is an interactive prototype of a career-guidance platform for Indian
college students, recent graduates, and freshers. It helps users discover
roles, understand the skills each role expects, prepare for interviews, find
sample opportunities, and track their applications — all in one calm, focused
experience.

> **This is a frontend design prototype.** All jobs, companies, salaries, and
> data are fictional sample content. There is no backend, no account system,
> and no real job listings. Everything you enter is saved only in your own
> browser via `localStorage`.

---

## The fresher journey

```
Discover a career → Explore roles → Identify skill gaps → Prepare → Find jobs → Save & track
```

---

## Tech stack

- **React 18** + **TypeScript** (strict)
- **Vite 5** (dev server + build)
- **Tailwind CSS 3** (design tokens in `tailwind.config.js`)
- **React Router 6** (client-side routing)
- **Lucide React** (icons)
- **localStorage** (prototype persistence)
- **@mediapipe/face_detection** (on-device face detection for the live interview
  eye-contact check — runs locally in the browser)

No backend, no paid APIs, no external AI services. The one ML model
(MediaPipe FaceDetection) runs entirely on the user's device; webcam frames are
never uploaded.

---

## Getting started

### Prerequisites

- **Node.js 18+** and npm (comes with Node). Check with `node -v`.

### Install & run

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Build for production (type-checks, then bundles to /dist)
npm run build

# 4. Preview the production build locally
npm run preview

# 5. Type-check only (no build)
npm run lint
```

Open <http://localhost:5173> in your browser.

> **Windows / PowerShell note:** if `node`/`npm` are not on your PATH, the
> installer typically places them in `C:\Program Files\nodejs`. If PowerShell
> blocks `npm.ps1` due to execution policy, call `npm.cmd` directly.

---

## Project structure

```
Margly/
├── index.html                 # App entry, fonts, favicon
├── netlify.toml               # Netlify build + SPA redirect config
├── public/
│   ├── favicon.svg            # Browser-tab brand mark
│   └── _redirects             # SPA fallback for static hosts
├── src/
│   ├── main.tsx               # React root, Router + store providers
│   ├── App.tsx                # All route definitions
│   ├── index.css              # Tailwind layers + design-system base styles
│   │
│   ├── context/
│   │   └── AppStore.tsx       # Global state (profile, saved, apps, progress, toasts)
│   │
│   ├── data/                  # ← Edit sample content here
│   │   ├── types.ts           # Shared domain types
│   │   ├── careers.ts         # 9 career paths
│   │   ├── jobs.ts            # 14 sample jobs/internships
│   │   ├── interview.ts       # Role-specific interview questions
│   │   ├── options.ts         # Dropdown/chip option lists
│   │   └── defaults.ts        # Empty profile + sample application entries
│   │
│   ├── lib/
│   │   ├── storage.ts         # Safe localStorage wrapper (swap for an API later)
│   │   ├── skillGap.ts        # Transparent skill-readiness computation
│   │   ├── format.ts          # Date / label formatting helpers
│   │   └── cn.ts              # className combiner
│   │
│   ├── components/
│   │   ├── ui/                # Button, Input, Select, Badge, Card, ProgressBar,
│   │   │                        ChipSelect, StatusBadge
│   │   ├── layout/            # MarketingHeader, Footer, Sidebar, AppLayout,
│   │   │                        MarketingLayout, nav-items
│   │   ├── cards/             # JobCard, CareerCard
│   │   └── common/            # Logo, EmptyState, Skeleton, Modal, ConfirmDialog,
│   │                            Toasts, Breadcrumbs, PageHeader, DemoNotice,
│   │                            FilterDrawer, CompanyAvatar, SkillIndicator,
│   │                            ScrollToTop
│   │
│   └── pages/                 # One file per route (see below)
└── ...
```

---

## Routes

| Path | Page | Notes |
| --- | --- | --- |
| `/` | Landing | Marketing page with designed product preview |
| `/onboarding` | Onboarding | 6-step personalized setup |
| `/dashboard` | Dashboard | Personalized hub (empty state before onboarding) |
| `/explore-careers` | Explore Careers | Search + filters |
| `/careers/:slug` | Career Detail | Full role breakdown |
| `/skill-gap` | Skill Gap | Transparent readiness assessment |
| `/jobs` | Jobs | Search, combined filters, mobile drawer |
| `/jobs/:id` | Job Detail | Save, apply instructions, add to tracker |
| `/saved-jobs` | Saved Jobs | Persisted saved opportunities |
| `/applications` | Applications | Tracker with list + board views |
| `/interview-prep` | Interview Prep | Overview + checklist |
| `/interview-prep/:role` | Interview Role | Practice mode per role |
| `/profile` | Profile | Editable profile + completion meter |
| `/settings` | Settings | Preferences + reset demo data |
| `/about`, `/privacy`, `/terms`, `/contact` | Static | Footer content |
| `*` | Not Found | 404 fallback |

---

## Key components & state

**`AppStore` (`src/context/AppStore.tsx`)** is the single source of truth. It
holds the user `profile`, `savedJobIds`, `savedCareerSlugs`, `completedTasks`,
`practicedQuestions`, `applications`, and transient `toasts`. Each slice is
persisted to `localStorage` under a `margly:` key prefix. Access it anywhere
with the `useStore()` hook.

**`lib/storage.ts`** is the only module that touches `localStorage`. Reads are
defensive — malformed or missing JSON falls back to a default rather than
throwing. To add a real backend later, replace this module's read/write
functions with API calls; no component changes required.

**`lib/skillGap.ts`** computes the readiness estimate. For each role skill it
takes `min(current, expected) / expected`, averages across all skills, and
rounds. This is intentionally simple and transparent — it is **not** a
validated employability score.

---

## Design system

Defined in `tailwind.config.js` and `src/index.css`.

| Token | Value | Usage |
| --- | --- | --- |
| `navy` | `#172B4D` | Primary buttons, headings, active nav |
| `growth` | `#477A63` | Success, progress, highlights |
| `sand` | `#F6F4EF` | Warm page background |
| `white` | `#FFFFFF` | Cards, forms, surfaces |
| `mist` | `#E5E9EF` | Borders, dividers |
| `charcoal` | `#252A32` | Body text |
| `muted` | `#667085` | Secondary text |
| `light-green` | `#E8EEE8` | Soft success backgrounds |
| `light-blue` | `#EDF2F8` | Informational surfaces |
| `warning` | `#A15C16` | Warnings |
| `error` | `#B42318` | Errors / destructive |

Typography uses **Inter** with a system fallback, an 8px spacing system, a
1200px max content width, 12–16px card radii, and restrained shadows. Status is
always communicated with text/icons in addition to color. Reduced-motion
preferences are respected.

---

## Working features

- Landing CTAs route into onboarding and discovery.
- 6-step onboarding with validation, progress persistence (survives refresh),
  editable summary, and a suggested target role.
- Personalized dashboard with real counts derived from your data, plus empty
  states before onboarding.
- Career discovery with text search and industry / area / work-mode /
  fresher-friendly filters.
- Full career detail pages with responsibilities, skills, tools, project ideas,
  learning steps, related jobs, and interview links.
- Job discovery with title + location search, seven combinable filters,
  relevance/newest sorting, result counts, a mobile filter drawer, and empty
  states.
- Job detail pages with save/unsave, application instructions, and tracker
  actions (all demo-only).
- Save/unsave persists across refreshes; a dedicated saved-jobs page.
- Skill-gap assessment: change levels, add skills, complete practice tasks,
  switch target role — readiness updates live.
- Interview prep: role question sets, reveal answer structures, write and save
  your own answers, mark questions practiced, track progress, and a checklist.
- Application tracker: add/edit/delete (with confirmation), status changes,
  follow-up dates, notes, search/filter, summary counts, and list + board views.
- Editable profile with a completion meter and validation.
- Settings with preference editing and a confirmed "reset demo data" action.
- **Branded preloader** on first load (animated mark, progress, fades out;
  respects reduced-motion).
- **Live virtual interviewer** (`/interview-prep/:role/live`): webcam preview,
  questions spoken aloud (text-to-speech), live speech-to-text transcription,
  and **on-device eye-contact monitoring** that issues strict spoken + on-screen
  warnings when you look away, with violation counts in per-question and session
  feedback.
- Toasts, loading skeletons, empty states, 404 page, breadcrumbs.
- Responsive at mobile (390px), tablet (768px), and desktop (1440px); refreshing
  any nested route works.

---

## Prototype limitations

- **No backend or authentication.** Data lives only in your browser's
  `localStorage`; it is not stored on a server or secured.
- **All content is fictional sample data.** Companies, jobs, salaries, and
  posting dates are invented for demonstration. Nothing represents real
  vacancies or employers.
- **Readiness scores are illustrative estimates**, not validated predictions of
  interviews or job offers.
- **No notifications or emails.** Follow-up dates are shown in-app only.
- **Interview sample answers are learning aids** — adapt them to your own real
  experience.
- Two careers (Backend Developer, AI/ML Associate) don't yet have dedicated
  interview question sets; their links point to the general interview-prep page.
- **Eye-contact detection is a local approximation, not true gaze tracking.** It
  uses MediaPipe FaceDetection to check whether a face is present, centered, and
  facing forward — a solid proxy for "looking at the camera," but it does not
  track pupils/gaze and is not an AI judgment of interview performance. The model
  loads from a CDN on first use, so the live eye-contact check needs an internet
  connection the first time; the camera itself and all analysis stay on-device.
  The rest of the app works fully offline.
- Speech-to-text and text-to-speech depend on browser support (best in Chrome/
  Edge). The agent degrades gracefully (camera + typing still work) when they're
  unavailable.

---

## Editing sample data

All content is centralized in `src/data/`:

- Add or edit careers in `careers.ts`.
- Add or edit jobs in `jobs.ts` (keep `careerSlug` matching a career).
- Add interview question sets in `interview.ts`.
- Adjust onboarding/profile option lists in `options.ts`.

The UI updates automatically from these files.

---

## Deployment (Netlify or any static host)

The app is a static SPA. Build output goes to `dist/`.

### Netlify

1. Push this repo to GitHub/GitLab.
2. In Netlify, create a new site from the repo.
3. Build command: `npm run build` · Publish directory: `dist`.
4. The included `netlify.toml` and `public/_redirects` set up the SPA fallback
   so deep links (e.g. `/careers/ui-ux-designer`) resolve on refresh.

### Other static hosts (Vercel, GitHub Pages, Cloudflare Pages, etc.)

Deploy the contents of `dist/` and configure a catch-all rewrite to
`index.html` so client-side routes work on direct navigation/refresh. On
Vercel, add a rewrite from `/(.*)` to `/index.html`.

---

## Scripts reference

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check (`tsc -b`) then build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Type-check without emitting |
