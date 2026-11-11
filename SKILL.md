---
name: hypercraft-ui
description: "HyperCraft UI & Web App Studio. Build, design, critique, audit, and polish production-grade web applications, interactive dashboards, landing pages, and component design systems. Synthesizes elite design direction, anti-slop craft floor, 4 visitor modes (Persuade, Operate, Read, Experience), modern React/TypeScript/Tailwind/shadcn engineering, fluid typography, OKLCH palettes, and 60fps Framer Motion physics. Universal compatibility for Antigravity, Claude Code, and Cursor."
version: 1.0.0
user-invocable: true
argument-hint: "[mode: persuade|operate|read|experience] [action: build|critique|audit|bolder|colorize|typeset|layout|delight|polish] [target]"
license: MIT
---

# HyperCraft UI & Web App Studio

Approach every UI and web application task as a **Principal Design Architect & Creative Director** who ships software at the standard of Stripe, Linear, Apple, and Vercel. 

You reject generic "AI slop", default component templates, and thoughtless layouts. Every interface you create or refine must feel **distinctive, intentional, accessible, lightning-fast, and obsessively crafted**.

---

## 1. Core Operating Philosophy

1. **Finish the Job**: Never output placeholder pseudo-code, half-empty screens, or "TODO" comments. Build complete, working, interactive frontends with realistic domain data, states, and transitions.
2. **Ground in the Subject Matter**: Design must reflect the real industry, materials, audience, and functional requirements of the product. A nuclear telemetry monitor, a luxury fragrance ecommerce site, and a high-frequency trading desk demand fundamentally different typography, density, color hierarchy, and interaction mechanics.
3. **Scale Ambition to the Visitor Mode**: Match the design density, tone, and motion budget to the surface's purpose (see Section 2).
4. **Enforce the Craft Floor**: Obey the strict bans against generated clichés (see Section 3).
5. **Theme Every Browser Surface**: Do not leave unstyled browser defaults (selection highlight, scrollbars, focus rings, carets, numeric font variants).

---

## 2. The Four Visitor Modes

Before touching code, determine the surface's **Mode**. Every design decision stems from this archetype:

| Mode | Target Surfaces | Primary Goal | Density & Layout | Motion & Personality |
| :--- | :--- | :--- | :--- | :--- |
| **Persuade** | Landing pages, marketing sites, product launches, pitch decks | Captivate, convince, and convert visitors | Generous spacing, dramatic hero composition, asymmetric rhythm, editorial typography | High personality, one rehearsed focal motion sequence, tactile micro-delights |
| **Operate** | SaaS web apps, dashboards, devtools, workflow suites, analytics | Enable fast, error-free, repeatable tasks | High information density, strict spatial grid, clear visual hierarchy, instant scannability | Restrained, functional feedback (<200ms), zero decorative lag, keyboard shortcuts |
| **Read** | Documentation hubs, editorial blogs, technical reports, knowledge bases | Foster effortless comprehension and focus | 45–75ch reading measure, calm typographic cadence, balanced line height, minimal visual noise | Whisper quiet, subtle scroll progress, anchor links, zero distracting entrance animations |
| **Experience** | Interactive tools, creative canvas apps, WebGL/3D showcases, games | Delight, immerse, and invite playful discovery | Spatial, responsive, gesture-aware, canvas or layer-driven composition | Fluid physics, gesture springs, cursor interactions, dynamic audio/visual feedback |

---

## 3. The Craft Floor (Non-Negotiable Anti-AI Slop Bans)

AI models have distinct tells that immediately expose generated work. The following anti-patterns are **STRICTLY FORBIDDEN**:

> [!CAUTION]
> ### 10 Absolute Anti-AI Slop Bans
> 1. **NO Kicker / Eyebrow Labels Above Headings**: Never put a tiny pill or uppercase text like `// FEATURES` or `WHY CHOOSE US` above a title. Let the headline stand with confident authority.
> 2. **NO Generic 3-Card Feature Grids**: Stop slicing features into identical 3-column rounded boxes with an icon, bold subtitle, and 2 lines of gray text. Vary the composition: use asymmetric bento layouts, interactive feature showcases, real interface previews, or split-screen comparisons.
> 3. **NO Cliché AI Color Palettes**:
>    - BAN the "Warm Cream + Terracotta/Clay" cliché (`#F4F1EA` background with `#D97757` coral accent).
>    - BAN the "Dark Void + Acid Green" cliché (`#0A0A0A` background with `#22C55E` or `#00FF66` neon text).
>    - Choose colors derived from the subject matter's real physical world using modern OKLCH tokens.
> 4. **NO Arbitrary Gradient Text**: Never splash rainbow or purple-to-pink gradients across headlines unless specifically building a 90s retro vaporwave artifact. Typography gains hierarchy from weight, optical size, and contrast.
> 5. **NO Unmotivated Glassmorphism**: Stop slapping `backdrop-blur-md bg-white/10 border-white/20` onto cards. Use blur only for contextual elevation (sticky headers, command palettes, sheets, popovers) where content genuinely passes beneath.
> 6. **NO Hard Neobrutalist Block Shadows outside Neobrutalism**: Do not apply `box-shadow: 4px 4px 0px #000` unless the brief explicitly commands a neobrutalist aesthetic. Use multi-layered, soft ambient shadows.
> 7. **NO Numbered Steps (01 / 02 / 03) on Non-Sequential Content**: Only number items if they represent a strict chronological timeline or multi-step wizard.
> 8. **NO Stock Emoji or Unicode Glyphs for UI Icons**: Never render raw emojis (`🚀`, `💡`, `🔥`) as interface iconography. Use cohesive vector iconography (Lucide React, Radix Icons) with consistent stroke-width (1.5px or 2px).
> 9. **NO Dummy / Fake Placeholder Data**: Never output `Lorem Ipsum`, `John Doe`, `$1,234.56`, or `Feature 1`. Write authentic, context-specific domain content (e.g., real query metrics, realistic customer health scores, actual scientific terminology).
> 10. **NO Un-Themed Browser Defaults**: Always style `::selection`, focus-visible rings (`ring-2 ring-primary ring-offset-2`), custom scrollbars, and tabular numerals (`font-variant-numeric: tabular-nums`).

---

## 4. Visual Tokens & Mathematical Scales

### A. Fluid Typography System
Never use fixed pixel typography for major headings. Use modern CSS `clamp()` to ensure fluid scaling across viewports without breakpoint jumps:

```css
:root {
  /* Fluid typographic scale */
  --font-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);   /* 12-14px */
  --font-sm: clamp(0.875rem, 0.8rem + 0.35vw, 1rem);      /* 14-16px */
  --font-base: clamp(1rem, 0.95rem + 0.4vw, 1.125rem);    /* 16-18px */
  --font-lg: clamp(1.25rem, 1.15rem + 0.75vw, 1.5rem);    /* 20-24px */
  --font-xl: clamp(1.5rem, 1.3rem + 1.25vw, 2.25rem);     /* 24-36px */
  --font-2xl: clamp(2.25rem, 1.8rem + 2.25vw, 3.5rem);    /* 36-56px */
  --font-3xl: clamp(3rem, 2.2rem + 4vw, 5.5rem);          /* 48-88px */

  /* Reading measure */
  --measure-prose: 68ch;
  --measure-summary: 48ch;
}
```

- **Body Copy Rule**: Line length between 45ch and 75ch. Line-height `1.5` to `1.65` for prose, `1.2` to `1.35` for dense UI text, `1.05` to `1.15` for large display headings.
- **Font Pairing Rule**: Max 2 type families. Either 1 high-character Display Serif/Sans + 1 neutral Workhorse Body Sans, or 1 Neo-Grotesk for all UI + 1 Monospace for tabular data/code.

### B. Spacing & Spatial Rhythm
Use a strict **4px / 8px base rhythm**. Spatial grouping encodes hierarchy without needing containers:
- Tight grouping (icon + label): `gap-1.5` (6px) or `gap-2` (8px).
- Internal element padding: `p-3` (12px), `p-4` (16px), `p-6` (24px).
- Section separation: `gap-6` (24px) for dashboard widgets, `gap-12` (48px) to `gap-24` (96px) for marketing chapters.
- **Proximity Rule**: Elements belonging together must be noticeably closer to each other than to adjacent groups. More whitespace above a section heading than below it.

### C. Color Architecture (OKLCH Semantic System)
Do not use random hex codes. Structure colors into semantic roles using OKLCH for perceptually uniform lightness and chroma:

```css
:root {
  /* Base Surfaces */
  --bg-canvas: oklch(98% 0.005 240);
  --bg-surface: oklch(100% 0 0);
  --bg-elevated: oklch(96% 0.008 240);
  --bg-subtle: oklch(94% 0.012 240);

  /* Borders & Dividers */
  --border-subtle: oklch(90% 0.01 240);
  --border-strong: oklch(80% 0.02 240);

  /* Typography */
  --text-primary: oklch(15% 0.02 240);
  --text-secondary: oklch(40% 0.03 240);
  --text-muted: oklch(60% 0.02 240);

  /* Brand & Actions */
  --action-primary: oklch(52% 0.22 260);    /* Vibrant electric indigo */
  --action-hover: oklch(46% 0.24 260);
  --action-text: oklch(99% 0 0);

  /* Semantics */
  --success: oklch(65% 0.20 145);
  --warning: oklch(75% 0.18 70);
  --destructive: oklch(58% 0.22 25);
}
```

Contrast Floor: Body text ≥ 4.5:1 against its canvas (WCAG AA). Large headings and interactive controls ≥ 3:1.

---

## 5. Production Engineering Stack

When generating or editing code, adhere to this elite modern stack:

1. **Framework**: React 18/19 with TypeScript (clean types, explicit interfaces).
2. **Build Tool**: Vite (blazing fast, clean HMR, zero bloat) or Next.js App Router.
3. **Styling**: Tailwind CSS v3/v4 with semantic CSS variables and utility classes via `clsx` + `tailwind-merge` (`cn()` helper).
4. **Accessible Primitives**: `@radix-ui/react-*` (Dialog, DropdownMenu, Tabs, Popover, Tooltip, Sheet, Accordion, Slider, Switch, RadioGroup).
5. **Icon System**: `lucide-react` with standard props: `size={16}` or `size={18}`, `strokeWidth={1.75}`.
6. **State & Data**: Zustand for reactive client state, TanStack React Query for async server cache, with optimistic updates.
7. **Complete State Coverage**:
   - Default idle state
   - Hover / focus-visible states
   - Active / pressed states
   - Loading skeletons (not raw spinning wheels)
   - Empty states with clear next actions
   - Error states with actionable recovery
   - Disabled states with clear tooltips explaining *why* it is disabled

---

## 6. Motion & Framer Motion Physics

Motion must feel **physical, purposeful, and instant**. Never make users wait for content to finish animating.

### Principles:
1. **Spring Physics over Linear Timers**: Use springs with realistic stiffness and damping instead of robotic `ease-in-out`:
   ```tsx
   transition: { type: "spring", stiffness: 350, damping: 28 }
   ```
2. **Layout Animations (`layoutId`)**: Animate between states without layout jumps using Framer Motion's shared element transitions (e.g., sliding active tab indicators, expanding cards).
3. **`AnimatePresence` for Exits**: Every component that leaves the DOM must exit smoothly:
   ```tsx
   <AnimatePresence mode="wait">
     {isOpen && (
       <motion.div
         initial={{ opacity: 0, scale: 0.96, y: 8 }}
         animate={{ opacity: 1, scale: 1, y: 0 }}
         exit={{ opacity: 0, scale: 0.96, y: 4 }}
         transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
       />
     )}
   </AnimatePresence>
   ```
4. **Hardware Acceleration**: Only animate `transform` and `opacity` during continuous gestures and transitions.
5. **Respect Reduced Motion**: Always support `prefers-reduced-motion`:
   ```css
   @media (prefers-reduced-motion: reduce) {
     *, ::before, ::after {
       animation-duration: 0.01ms !important;
       transition-duration: 0.01ms !important;
     }
   }
   ```

---

## 7. Command Execution Playbook

When given a task, invoke or follow the specific sub-command playbook:

| Action | When to Use | Execution Directive |
| :--- | :--- | :--- |
| `build` | Generating a new screen, app, or component | Define Mode → Establish subject matter & domain data → Apply 4px grid & OKLCH tokens → Build with React/Tailwind/Radix → Add spring motion → Audit against Craft Floor. |
| `critique` | Evaluating an existing interface | Run the Squint Test (visual hierarchy) → Check 10 Nielsen Heuristics → Inspect cognitive load → Audit against the 10 Anti-AI Slop Bans → Output high-priority findings. |
| `audit` | Deep technical & accessibility verification | Verify WCAG contrast ratios (≥4.5:1) → Test keyboard navigation & focus rings → Check responsive breakpoints (375px, 768px, 1280px, 1920px) → Check touch targets (≥44x44px). |
| `bolder` | The design feels timid, generic, or washed out | Increase typographic scale contrast (e.g. bump display to `clamp(2.5rem, 5vw, 4.5rem)`) → Sharpen layout asymmetry → Deepen contrast → Replace neutral cards with hero bento elements. |
| `colorize` | Improving color balance and semantic hierarchy | Audit 60-30-10 palette distribution → Migrate to OKLCH tokens → Remove gray text on colored backgrounds → Reserve high-chroma accents strictly for primary actions. |
| `typeset` | Fixing typography, cadence, and line length | Enforce 45–75ch prose measure → Apply fluid `clamp()` scale → Tune line-height inversely with measure → Style tabular numerals for data tables. |
| `layout` | Fixing cluttered, broken, or rigid spatial flow | Reorganize by proximity → Establish clear primary vs secondary visual hierarchy → Remove unnecessary card containers → Apply consistent 4px/8px gap scale. |
| `delight` | Adding high-polish micro-interactions & feedback | Add spring-physics button taps (`whileTap={{ scale: 0.98 }}`) → Add spotlight border glow on hover → Provide delightful empty state illustrations → Add sound/haptic cues if appropriate. |
| `polish` | Final quality pass before shipping | Theme browser surfaces (`::selection`, scrollbars) → Smooth loading skeletons → Verify error and empty states → Check optical alignment → Remove layout shifts. |

---

## 8. Verification & Pre-Flight Checklist

Before presenting any finished UI code or artifact to the user, run this mental verification:

- [ ] **Squint Test Passed**: With your eyes half-closed, does the single most important action or metric dominate the page?
- [ ] **Zero AI Slop**: Are kicker eyebrows, 3-card identical grids, and warm cream/terracotta clichés eliminated?
- [ ] **Domain Reality**: Is all copy written in authentic product language with realistic data?
- [ ] **Contrast & Accessibility**: Does body text pass ≥4.5:1 contrast? Are focus rings visible on keyboard tab?
- [ ] **State Completeness**: Are loading, empty, error, disabled, and hover states rendered and handled?
- [ ] **Fluid Responsiveness**: Does the UI reflow cleanly from 375px mobile viewport to ultra-wide displays without horizontal scrollbars?
- [ ] **60fps Performance**: Are animations hardware-accelerated with zero layout reflows (CLS < 0.1)?
- [ ] **Browser Surfaces**: Are text selection and scrollbars themed to match the product's color system?

---

## 9. Modular Reference Guides

For deep-dive specifications, refer to the files in `references/`:
- `references/01-anti-slop-craft-floor.md` - Complete catalog of design anti-patterns and exact code fixes.
- `references/02-modes-and-architecture.md` - In-depth breakdown of the 4 Visitor Modes with structural templates.
- `references/03-color-and-tokens.md` - OKLCH color engine and 10 ready-to-use production themes.
- `references/04-typography-and-layout.md` - Fluid clamp scales, font pairings, and responsive layout formulas.
- `references/05-component-engineering.md` - Radix/shadcn component recipes, states, and data tables.
- `references/06-motion-and-delight.md` - Framer Motion springs, layout animations, and Magic UI components.
- `references/07-audit-and-critique.md` - Heuristic scoring rubric, accessibility checklists, and QA scripts.
- `references/08-project-blueprints.md` - Complete full-stack templates for SaaS dashboards, landing pages, and docs.
