# 02. Visitor Modes & Information Architecture

Every web application and interface belongs to one of four distinct **Visitor Modes**. Before deciding on layout, density, typography, or animation budgets, you must declare and commit to the active mode.

Mixing modes carelessly (such as putting marketing fluff inside an analytical dashboard, or high-density tiny data tables on a conversion landing page) creates cognitive friction.

---

## The Four Modes Overview

```
   ┌─────────────────────────────────────────────────────────────────┐
   │                       THE 4 VISITOR MODES                       │
   └─────────────────────────────────────────────────────────────────┘
             ▲                                       ▲
             │                                       │
     HIGH PERSONALITY                         HIGH UTILITY
             │                                       │
   ┌─────────────────┐                     ┌─────────────────┐
   │    PERSUADE     │                     │     OPERATE     │
   │  Landing Pages  │                     │  SaaS / Tools   │
   │ Marketing Sites │                     │   Dashboards    │
   └─────────────────┘                     └─────────────────┘
             │                                       │
             ▼                                       ▼
   ┌─────────────────┐                     ┌─────────────────┐
   │   EXPERIENCE    │                     │      READ       │
   │ Creative Canvas │                     │  Documentation  │
   │ 3D / Interactive│                     │ Editorial Blogs │
   └─────────────────┘                     └─────────────────┘
```

---

## Mode 1: PERSUADE (Conversion & Storytelling)

### Core Mission
Convince a skeptical visitor to take action (sign up, buy, schedule a demo, join waitlist). The interface must establish immediate credibility, communicate the core value proposition in seconds, and eliminate doubt.

### Spatial & Layout Rules
- **Hero Composition**: The hero is the emotional epicenter. Avoid boring centered headlines with two buttons. Use split-screen heroes, live interactive component previews, floating UI cards, or high-fidelity product renders.
- **Asymmetric Rhythm**: Alternate between full-bleed chapter sections, asymmetric 2-column breakdowns, and bento grid feature showcases.
- **Whitespace Generosity**: Section vertical padding `py-24` (96px) to `py-36` (144px). Let statements breathe.
- **Typography as Hero**: Large display sizes (`clamp(2.5rem, 5vw, 4.5rem)`), high contrast, tight letter-tracking (`tracking-tight` or `-0.03em`).

### Motion Budget
- **One Orchestrated Entrance**: A single choreographed page-load sequence (e.g. title fades up, subtitle follows with slight delay, product visual scales in smoothly).
- **Interactive Demonstrations**: Micro-interactions that let the visitor *feel* the product before signing up (e.g., interactive code editors, live sliders, toggleable preview modes).

---

## Mode 2: OPERATE (SaaS, Dashboards & Tools)

### Core Mission
Enable expert users to perform complex, high-frequency, repeatable tasks with maximum speed, zero error, and minimal cognitive strain.

### Spatial & Layout Rules
- **Information Density**: Compact, efficient, and scannable. Tight vertical rhythm (`p-2` to `p-4`), small but legible typography (`13px` - `14px` for data cells, `11px` - `12px` for metadata badges).
- **Predictable Topology**:
  - Persistent left navigation rail (collapsible with keyboard shortcut `Cmd+B`).
  - Sticky top action bar with search (`Cmd+K`), breadcrumbs, notifications, and profile.
  - Primary work canvas with clear status filters and bulk action controls.
- **Zero Decorative Lag**: Users do not want to wait 400ms for a menu to animate open when they are clicking it 50 times an hour. Keep transitions under `150ms` or instant.
- **Low Eye-Travel**: Place related triggers adjacent to the data they affect. Do not force the user to scan diagonally across an ultrawide monitor to click "Save".

### Operational State Matrix
Every operational screen must account for 7 distinct states:
1. **Initial Hydration / Loading**: Skeletons that match the exact layout geometry of incoming data.
2. **Populated (Normal)**: Clean tabular data, status indicators, and sorting headers.
3. **Empty (First Run)**: An inviting onboarding message, a clear call-to-action button to create the first record, and an optional link to docs or sample templates.
4. **Empty (Filtered)**: "No records found matching '[search term]' with clear button to Reset Filters.
5. **Error / Degraded**: Descriptive failure diagnosis (e.g., "Unable to reach database cluster") with a Retry button and trace ID.
6. **Editing / Pending**: Optimistic UI updates with a non-intrusive status toast ("Saving changes...").
7. **Permission Blocked**: Clear explanation of required RBAC role with a button to request access.

---

## Mode 3: READ (Documentation & Editorial)

### Core Mission
Deliver dense, structured information with supreme typographic clarity. Eliminate all distractions so the reader can sustain deep cognitive focus.

### Spatial & Layout Rules
- **Reading Measure**: Strictly constrain prose line length between `45ch` and `75ch` (optimally `65ch` / `680px`). Lines wider than 80ch cause eye fatigue when returning to the start of the next line.
- **Proportional Leading**: Generous line height for body text (`1.6` to `1.75`). Wider lines demand taller leading.
- **Three-Column Classic Layout**:
  - Left Column (240px - 280px): Deep hierarchical table of contents / chapter navigation.
  - Center Column (680px max): Main content prose, code blocks, tables, callouts.
  - Right Column (200px - 240px): "On this page" scroll-spy navigation, breadcrumb jumping, and feedback actions.
- **Typographic Cadence**:
  - Generous margin above headings (`mt-10` to `mt-14`) and tight margin below (`mb-3` to `mb-4`) so headings belong unmistakably to the section below them.
  - Styled code blocks with syntax highlighting, copy-to-clipboard button, and line numbers.

---

## Mode 4: EXPERIENCE (Interactive, Creative & 3D)

### Core Mission
Immerse the user in a captivating, tactile, or spatial environment. Reward curiosity and play.

### Spatial & Layout Rules
- **Canvas-First Viewport**: Fixed full-viewport canvas (`100dvh`, `overflow-hidden`) with floating heads-up-display (HUD) controls.
- **Spatial Layering**: Distinct z-index layers:
  - `z-0`: Background WebGL canvas / interactive particle field / 3D scene.
  - `z-10`: Interactive overlay elements, floating cards, draggable nodes.
  - `z-50`: Top-level HUD, modal overlays, controls, settings tray.
- **Gesture-Driven Interactions**: Drag-and-drop, pan and zoom, pinch gestures, spring-physics inertia, and cursor followers.
- **Tactile Feedback**: Subtle audio cues (synthesized clicks, soft pops) or subtle haptics when supported.
