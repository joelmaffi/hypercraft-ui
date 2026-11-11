# 03. Color Architecture & Curated Theme Factory

Color in world-class interface design is an instrument of **hierarchy, meaning, and atmosphere**, not mere decoration.

---

## 1. The Modern Color Space: Why OKLCH?

Legacy RGB and HSL color models are not perceptually uniform. In HSL, pure yellow (`hsl(60, 100%, 50%)`) appears blindingly bright, while pure blue (`hsl(240, 100%, 50%)`) appears dark and muddy, despite sharing the same "50% Lightness" value.

**OKLCH (Lightness, Chroma, Hue)** solves this:
- **`L` (Lightness)**: Perceptual luminance from `0%` (pure black) to `100%` (pure white). An OKLCH lightness of 70% looks equally luminous whether the color is blue, green, or yellow.
- **`C` (Chroma)**: Color saturation/intensity, from `0` (neutral gray) to `~0.37` (maximum vibrant display P3 chroma).
- **`H` (Hue)**: Hue angle from `0` to `360` degrees.

### Semantic Token Scale Structure
Never write raw hex codes in component markup. Always bind styles to semantic CSS variables:

```
Canvas / Surface Tokens:
  --bg-canvas       (Base background)
  --bg-surface      (Cards, table rows, standard containers)
  --bg-elevated     (Modals, popovers, dropdowns)
  --bg-subtle       (Hover states, badge backgrounds)

Border Tokens:
  --border-subtle   (Internal dividers, table gridlines)
  --border-strong   (Card outlines, inputs, active borders)

Text & Icon Tokens:
  --text-primary    (High-contrast headings and body prose)
  --text-secondary  (Metadata, labels, table headers)
  --text-muted      (Placeholders, timestamps, disabled indicators)

Interactive Action Tokens:
  --action-primary  (Primary call-to-action background)
  --action-hover    (Primary hover state)
  --action-text     (Text inside primary action)

Semantic State Tokens:
  --success, --warning, --destructive, --info
```

---

## 2. The 60-30-10 Distribution Rule

A harmonious interface distributes visual weight according to the 60-30-10 principle:
- **60% Dominant Base**: Canvas and neutral surface tones. Sets the overall atmosphere (clean light, deep dark, or muted paper).
- **30% Secondary Structure**: Card backgrounds, sidebars, borders, typography, and structural lines.
- **10% Accent Energy**: Primary buttons, active state indicators, key metrics, and conversion paths.

When accents cover more than 15-20% of the screen, the interface loses hierarchy and screams for attention everywhere.

---

## 3. Ten World-Class Production Themes

These 10 battle-tested themes provide complete light and dark mode CSS variables.

### Theme 1: Onyx Modern (Linear & Vercel Inspired)
*Target*: Developer tools, modern SaaS, productivity platforms.
*Vibe*: Monochromatic precision, obsidian surfaces, high-contrast typography, electric blue micro-accent.

```css
[data-theme="onyx"] {
  /* Light Mode */
  --bg-canvas: oklch(99% 0 0);
  --bg-surface: oklch(100% 0 0);
  --bg-elevated: oklch(97% 0 0);
  --bg-subtle: oklch(95% 0 0);
  --border-subtle: oklch(92% 0 0);
  --border-strong: oklch(82% 0 0);
  --text-primary: oklch(12% 0 0);
  --text-secondary: oklch(42% 0 0);
  --text-muted: oklch(62% 0 0);
  --action-primary: oklch(15% 0 0);
  --action-hover: oklch(25% 0 0);
  --action-text: oklch(99% 0 0);
  --accent: oklch(55% 0.22 260);
}

[data-theme="onyx"].dark, .dark [data-theme="onyx"] {
  /* Dark Mode */
  --bg-canvas: oklch(12% 0 0);
  --bg-surface: oklch(16% 0 0);
  --bg-elevated: oklch(20% 0 0);
  --bg-subtle: oklch(24% 0 0);
  --border-subtle: oklch(26% 0 0);
  --border-strong: oklch(34% 0 0);
  --text-primary: oklch(98% 0 0);
  --text-secondary: oklch(70% 0 0);
  --text-muted: oklch(50% 0 0);
  --action-primary: oklch(98% 0 0);
  --action-hover: oklch(90% 0 0);
  --action-text: oklch(12% 0 0);
  --accent: oklch(65% 0.22 260);
}
```

---

### Theme 2: Nordic Slate
*Target*: Cloud infrastructure, database consoles, telemetry suites.
*Vibe*: Cool slate-blue undertones, crisp technical clarity, cobalt accent.

```css
[data-theme="nordic-slate"] {
  --bg-canvas: oklch(98.5% 0.008 230);
  --bg-surface: oklch(100% 0 0);
  --bg-elevated: oklch(96% 0.012 230);
  --border-subtle: oklch(91% 0.015 230);
  --text-primary: oklch(18% 0.03 235);
  --text-secondary: oklch(45% 0.03 235);
  --action-primary: oklch(52% 0.20 245);
  --action-hover: oklch(46% 0.22 245);
  --action-text: oklch(99% 0 0);
}

.dark [data-theme="nordic-slate"] {
  --bg-canvas: oklch(15% 0.02 235);
  --bg-surface: oklch(19% 0.025 235);
  --bg-elevated: oklch(24% 0.03 235);
  --border-subtle: oklch(28% 0.025 235);
  --text-primary: oklch(96% 0.01 230);
  --text-secondary: oklch(72% 0.02 230);
  --action-primary: oklch(62% 0.22 245);
  --action-hover: oklch(68% 0.22 245);
  --action-text: oklch(12% 0.02 235);
}
```

---

### Theme 3: Velvet Emerald (Fintech & Wealth)
*Target*: Private equity, institutional fintech, portfolio analytics, luxury commerce.
*Vibe*: Deep forest green, warm champagne gold metadata, crisp banknote paper.

```css
[data-theme="velvet-emerald"] {
  --bg-canvas: oklch(98.5% 0.005 140);
  --bg-surface: oklch(100% 0 0);
  --border-subtle: oklch(91% 0.015 140);
  --text-primary: oklch(18% 0.03 145);
  --text-secondary: oklch(42% 0.03 145);
  --action-primary: oklch(42% 0.14 150);
  --action-hover: oklch(36% 0.15 150);
  --action-text: oklch(99% 0 0);
  --accent: oklch(75% 0.12 85); /* Champagne Gold */
}

.dark [data-theme="velvet-emerald"] {
  --bg-canvas: oklch(14% 0.03 150);
  --bg-surface: oklch(18% 0.035 150);
  --border-subtle: oklch(26% 0.03 150);
  --text-primary: oklch(96% 0.01 140);
  --text-secondary: oklch(70% 0.02 140);
  --action-primary: oklch(58% 0.16 150);
  --action-hover: oklch(64% 0.16 150);
  --action-text: oklch(10% 0.02 150);
  --accent: oklch(80% 0.14 85);
}
```

---

### Theme 4: Cyber Indigo
*Target*: AI studios, API platforms, autonomous systems.
*Vibe*: Electric ultraviolet, indigo glows, hyper-clean dark mode.
- Action: `oklch(56% 0.24 275)` | Accent: `oklch(68% 0.26 310)`

### Theme 5: Warm Amber (Artisanal & Editorial)
*Target*: Curated publications, coffee & architecture, design studio portfolios.
*Vibe*: Oatmeal/linen paper (`oklch(97% 0.012 80)`), rich espresso typography (`oklch(18% 0.02 60)`), deep burnished amber accent (`oklch(58% 0.18 55)`).

### Theme 6: Bauhaus Minimal
*Target*: Architecture portfolios, modern art collections, graphic design tooling.
*Vibe*: Strict grayscale geometry, stark contrast, pure primary accents (Signal Red `oklch(58% 0.25 25)`).

### Theme 7: Tokyo Cyberpunk
*Target*: Web3, gaming telemetry, creative coding platforms.
*Vibe*: Pitch-black obsidian (`oklch(8% 0 0)`), neon magenta (`oklch(65% 0.32 340)`), electric cyan (`oklch(78% 0.22 205)`).

### Theme 8: Swiss High-Contrast
*Target*: Typographic magazines, technical manuals, regulatory platforms.
*Vibe*: Pure mathematical black and white, zero tint, international red warning accent.

### Theme 9: Arctic Azure
*Target*: Medical tech, climate research, pharmaceutical data, clean tech.
*Vibe*: Glacial white, cool cyan-blue tint, deep navy text, high-trust serene atmosphere.

### Theme 10: Rose Quartz
*Target*: Beauty, lifestyle, wellness, luxury hospitality.
*Vibe*: Soft blush undertones, muted taupe surfaces, deep plum primary actions.

---

## 4. Contrast Verification (WCAG AAA Compliance)

Always verify that text meets standard contrast ratios against its immediate background:
- **Small Text (< 18px / 14pt regular)**: Contrast ratio ≥ `4.5:1` (WCAG AA) or `7:1` (WCAG AAA).
- **Large Text (≥ 18px bold or ≥ 24px regular)**: Contrast ratio ≥ `3:1` (WCAG AA) or `4.5:1` (WCAG AAA).
- **UI Components & Borders**: Contrast ratio ≥ `3:1` against adjacent background.

Never place gray text on a colored background (e.g. gray text on a blue card). Always tint secondary text using the parent surface's hue.
