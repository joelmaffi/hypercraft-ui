# 04. Typography & Spatial Layout Systems

Typography is not merely a delivery vehicle for text; it carries the voice, authority, and emotional posture of the product. Spatial layout governs how effortlessly a human mind navigates and absorbs complex information.

---

## 1. Fluid Typographic Scaling

Fixed font sizes (`text-6xl`, `font-size: 64px`) break easily on intermediate tablets or mobile screens. Fluid typography dynamically calculates optimal sizes using CSS `clamp()` based on the viewport width:

### The Master Fluid Formula
```css
font-size: clamp(MIN_SIZE, CALCULATED_SLOPE, MAX_SIZE);
```

```css
:root {
  /* Dynamic Fluid Scale (Viewport 375px -> 1440px) */
  --text-2xs: clamp(0.6875rem, 0.65rem + 0.15vw, 0.75rem);   /* 11px - 12px */
  --text-xs:  clamp(0.75rem, 0.70rem + 0.25vw, 0.875rem);    /* 12px - 14px */
  --text-sm:  clamp(0.875rem, 0.82rem + 0.35vw, 1.000rem);   /* 14px - 16px */
  --text-base:clamp(1.000rem, 0.95rem + 0.40vw, 1.125rem);   /* 16px - 18px */
  --text-lg:  clamp(1.125rem, 1.05rem + 0.60vw, 1.375rem);   /* 18px - 22px */
  --text-xl:  clamp(1.375rem, 1.20rem + 1.00vw, 1.750rem);   /* 22px - 28px */
  --text-2xl: clamp(1.750rem, 1.45rem + 1.60vw, 2.500rem);   /* 28px - 40px */
  --text-3xl: clamp(2.250rem, 1.80rem + 2.50vw, 3.500rem);   /* 36px - 56px */
  --text-hero:clamp(2.750rem, 2.00rem + 4.50vw, 5.500rem);   /* 44px - 88px */
}
```

---

## 2. Core Typographic Laws

### A. The Measure Law (Line Length)
- **Body Prose**: Strictly enforce `max-width: 65ch` (45ch to 75ch range). When a line extends past 80 characters, the reader's eye loses its place when scanning back to the next line.
- **Short Summaries & Cards**: `35ch` to `48ch`.
- **Headlines**: Avoid orphan words (single trailing words on the last line) using `text-wrap: balance` in CSS:
  ```css
  h1, h2, h3, h4 {
    text-wrap: balance;
  }
  p {
    text-wrap: pretty;
  }
  ```

### B. The Leading Ratio (Line Height)
Line height must be tuned **inversely** to line width and font size:
- **Hero / Display Headings (`36px+`)**: Extremely tight leading: `1.05` to `1.15`. Large headings fall apart with loose leading.
- **Section Headings (`20px - 32px`)**: Snug leading: `1.2` to `1.3`.
- **Body Prose (`16px - 18px`)**: Relaxed leading: `1.55` to `1.65`.
- **Dense Data Cells & Badges (`11px - 14px`)**: Compact leading: `1.25` to `1.35`.

### C. Letter-Spacing (Tracking) Discipline
- **Display Headings**: Tighten tracking as size increases:
  - `32px`: `-0.02em` (`tracking-tight`)
  - `48px+`: `-0.03em` to `-0.04em` (`tracking-tighter`)
- **Body Text**: Neutral `0` or `-0.01em`.
- **Small Caps & Uppercase Badges**: Loosen tracking: `+0.04em` to `+0.08em` (`tracking-wider`).

---

## 3. High-Caliber Font Pairings

Never use random fonts. Rely on cohesive pairings where each family serves a clear structural role:

### Pairing 1: The Modern Product Standard (SaaS / DevTools)
- **Display & UI**: `Inter` / `Geist Sans` / `Plus Jakarta Sans`
- **Data & Code**: `Geist Mono` / `JetBrains Mono`
- *Characteristics*: Extreme scannability, tall x-height, clear numeric distinctions (`0` vs `O`, `1` vs `l`).

### Pairing 2: The Editorial Authority (Fintech / Research / Long-Form)
- **Headlines & Quotes**: `Instrument Serif` / `Newsreader` / `Fraunces`
- **Body & Controls**: `Inter` / `Satoshi`
- *Characteristics*: Intellectual prestige, literary depth, timeless elegance.

### Pairing 3: The High-Contrast Swiss Modernist
- **Headlines**: `Space Grotesk` / `Clash Display`
- **Body**: `General Sans` / `Inter`
- *Characteristics*: Confident geometry, architectural presence.

---

## 4. Spatial Rhythm & Grid Architecture

### The 4px Base Scale
All spacing, padding, margins, and heights must be exact multiples of 4:
`4px (1)`, `8px (2)`, `12px (3)`, `16px (4)`, `24px (6)`, `32px (8)`, `48px (12)`, `64px (16)`, `96px (24)`.

### Optical vs. Mathematical Alignment
- **Icon + Text Pairing**: Icons are often visually smaller or lighter than adjacent bold text. Shift icons down by `1px` or give them `1.5px` stroke weight to match font weight optically.
- **Button Padding**: Horizontal button padding should always be `1.5x` to `2x` vertical padding:
  - Compact: `px-3 py-1.5`
  - Standard: `px-4 py-2`
  - Hero CTA: `px-6 py-3`

---

## 5. Responsive Bento Layout Patterns

The Bento Grid is the gold standard for modern feature presentation when implemented with authentic hierarchy:

```tsx
export function BentoFeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 max-w-6xl mx-auto">
      {/* 1. Large Feature Anchor (7 cols) */}
      <div className="md:col-span-7 bg-neutral-900 text-white rounded-2xl p-7 border border-neutral-800 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-medium tracking-tight">Real-Time Event Stream</h3>
          <p className="text-neutral-400 text-sm mt-1 max-w-md">
            Ingest 500,000 events/sec with guaranteed zero-loss persistent logging and sub-millisecond query indexing.
          </p>
        </div>
        <div className="mt-6 h-48 bg-neutral-950 rounded-xl border border-neutral-800 p-4 font-mono text-xs text-neutral-300 overflow-hidden">
          {/* Live visualization or chart */}
          <div className="text-emerald-400 font-semibold mb-2">● Cluster #01 HEALTHY</div>
          <div>[10:14:02.19] Batch ingested: 42,910 records (2.1ms)</div>
          <div>[10:14:02.84] Replicated to region us-east-1 (OK)</div>
        </div>
      </div>

      {/* 2. Key Metric Stat (5 cols) */}
      <div className="md:col-span-5 bg-white dark:bg-neutral-900 rounded-2xl p-7 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-medium tracking-tight text-neutral-900 dark:text-neutral-50">Zero Cold Starts</h3>
          <p className="text-neutral-500 text-sm mt-1">Global edge worker runtime.</p>
        </div>
        <div className="my-6">
          <div className="text-6xl font-bold font-mono tracking-tight text-neutral-950 dark:text-white">
            0<span className="text-3xl text-neutral-400 font-normal">ms</span>
          </div>
          <p className="text-xs text-neutral-500 mt-2 font-medium">Warm standby across 310 edge locations worldwide.</p>
        </div>
      </div>

      {/* 3. Three Tertiary Highlights (4 cols each) */}
      <div className="md:col-span-4 bg-neutral-50 dark:bg-neutral-900/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800">
        <h4 className="font-medium text-neutral-900 dark:text-neutral-100">End-to-End Encryption</h4>
        <p className="text-xs text-neutral-500 mt-1">AES-256 GCM hardware-level encryption at rest and in transit.</p>
      </div>

      <div className="md:col-span-4 bg-neutral-50 dark:bg-neutral-900/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800">
        <h4 className="font-medium text-neutral-900 dark:text-neutral-100">Audit Compliance</h4>
        <p className="text-xs text-neutral-500 mt-1">SOC 2 Type II certified with continuous real-time verification.</p>
      </div>

      <div className="md:col-span-4 bg-neutral-50 dark:bg-neutral-900/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800">
        <h4 className="font-medium text-neutral-900 dark:text-neutral-100">Automatic Failover</h4>
        <p className="text-xs text-neutral-500 mt-1">Multi-cloud active-active redundancy with automated DNS healing.</p>
      </div>
    </div>
  )
}
```
