# ✨ HyperCraft UI & Web App Studio

> **The pinnacle of frontend craft, motion physics, and anti-slop design.**  
> A universal AI agent skill for **Google Antigravity**, **Claude Code**, and **Cursor**.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Compatibility](https://img.shields.io/badge/Compatibility-Antigravity%20%7C%20Claude%20%7C%20Cursor-6366f1.svg)](#installation)
[![Stack](https://img.shields.io/badge/Stack-React%2019%20%7C%20Tailwind%20%7C%20Radix%20%7C%20Framer%20Motion-000.svg)](#tech-stack)

---

## Overview

**HyperCraft UI** elevates AI coding assistants into **Principal Design Architects & Creative Directors**. It synthesizes the world's most sophisticated agent design skills into one unified framework:

1. **The Craft Floor (10 Anti-AI Slop Bans)**: Eradicates generic AI tells (kicker eyebrows, identical 3-card columns, cliché warm-cream/terracotta palettes, unmotivated glassmorphism, zero-blur block shadows, fake placeholder data).
2. **Four Visitor Modes**: Commits to context-specific density, typography, and motion budgets (`Persuade`, `Operate`, `Read`, `Experience`).
3. **Curated Theme Factory**: 10 production-grade OKLCH color palettes with automatic light/dark mode semantic tokens.
4. **Motion Physics & Micro-Delight**: Spring physics over linear easings, shared element transitions via `layoutId`, and GPU-accelerated 60fps animations.
5. **Accessible Component Primitives**: Pre-built accessible components built on Radix UI, Lucide icons, and Tailwind CSS.
6. **Automated Craft Audit Tool**: An intelligent CLI scanner (`audit_ui.py`) that checks any frontend codebase for craft violations.

---

## 🚫 The 10 Absolute Anti-AI Slop Bans

| # | Anti-Pattern | Why It Fails | HyperCraft Solution |
| :- | :--- | :--- | :--- |
| 1 | **Kicker / Eyebrow Labels** | Putting `// FEATURES` or `WHY CHOOSE US` above headings looks timid. | Delete the label; let the headline stand with confident authority. |
| 2 | **Generic 3-Card Columns** | Repetitive same-size rounded cards with an icon and 2 lines of text. | Asymmetric Bento grids, interactive UI previews, and real metric anchors. |
| 3 | **Cliché AI Color Palettes** | Warm cream `#F4F1EA` + terracotta, or dark void + neon green. | Domain-grounded palettes using OKLCH semantic tokens. |
| 4 | **Arbitrary Gradient Text** | Rainbow or purple-to-pink gradient text across headlines. | High-contrast solid typography with optical weight balance. |
| 5 | **Decorative Backdrop Blur** | Applying blur to static cards where nothing scrolls underneath. | Use blur strictly on sticky headers, floating sheets, and modals. |
| 6 | **Zero-Blur Block Shadows** | `box-shadow: 4px 4px 0 #000` outside genuine neobrutalism. | Layered, multi-stop soft ambient shadows. |
| 7 | **Numbered Steps on Non-Sequences** | Arbitrarily numbering `01 Speed`, `02 Scale`, `03 Security`. | Only number chronological workflows or multi-step wizards. |
| 8 | **Raw Emojis for UI Icons** | Rendering `🚀` or `🔥` in buttons. | Cohesive vector iconography (`lucide-react`) with 1.75px stroke. |
| 9 | **Fake Placeholder Data** | "Lorem ipsum", "John Doe", "$1,234.56". | Authentic industry data, real metric formats, and domain vernacular. |
| 10 | **Un-Themed Browser Defaults** | Raw blue selection, default scrollbars, un-styled focus outlines. | Themed `::selection`, custom sleek scrollbars, and `ring-2` focus outlines. |

---

## 🎯 The Four Visitor Modes

- **`Persuade`** (Landing Pages & Product Reveals): High emotional resonance, bold asymmetric hero composition, generous whitespace (`py-24` to `py-36`), fluid display typography (`clamp(2.5rem, 5vw, 4.5rem)`), single orchestrated entrance motion.
- **`Operate`** (SaaS, Dashboards & Tools): High information density, strict 4px/8px grid, instant transitions (<150ms), low eye-travel, full state handling (idle, hover, active, loading skeleton, empty, error, disabled).
- **`Read`** (Documentation & Editorial): 45–75ch reading measure (`max-w-[68ch]`), proportional line height (1.6–1.75), clean code blocks with copy triggers, zero distracting entrance animations.
- **`Experience`** (Interactive Canvas & 3D): Spatial layer depth, gesture springs, cursor followers, fluid physics, and tactile feedback.

---

## 🎨 10 Curated Semantic Themes (OKLCH)

Includes complete light and dark mode CSS variables in `templates/themes/themes.css`:
- **Onyx Modern** (Linear / Vercel monochromatic precision)
- **Nordic Slate** (Cloud telemetry cool slate & cobalt)
- **Velvet Emerald** (Institutional wealth & private equity deep green & gold)
- **Cyber Indigo** (Next-gen AI platforms electric ultraviolet)
- **Warm Amber** (Artisanal publications & rich espresso)
- **Bauhaus Minimal** (Modernist high-contrast geometry & signal accents)
- **Tokyo Cyberpunk** (Obsidian dark mode, neon magenta & cyan)
- **Swiss High-Contrast** (International typographic precision)
- **Arctic Azure** (Bio-tech & health clean azure & glacial white)
- **Rose Quartz** (Luxury lifestyle, blush undertones & plum)

---

## 📦 Ready-to-Use Components

Located in `templates/components/`:
- `SpotlightCard.tsx`: GPU-accelerated cursor radial spotlight tracking.
- `ShimmerButton.tsx`: Rotating conical border glow with spring micro-tap.
- `AnimatedTabs.tsx`: Sliding pill active indicator powered by Framer Motion `layoutId`.
- `CommandPalette.tsx`: Accessible `Cmd+K` keyboard search modal with focus trapping.
- `MetricDisplay.tsx`: Tabular numerals, trend indicators, and percentage deltas.
- `EmptyState.tsx`: Meaningful orientation, illustrated state, and primary call-to-action.

---

## 🚀 Installation & Multi-Agent Setup

### Option A: One-Line Git Install (Windows, macOS & Linux)

Clone directly into your target agent directory from any terminal:

```bash
# 1. Google Antigravity (Project-level)
git clone https://github.com/joelmaffi/hypercraft-ui.git .agent/skills/hypercraft-ui

# 2. Google Antigravity (Global — active in all projects)
# Windows CMD:
git clone https://github.com/joelmaffi/hypercraft-ui.git "%USERPROFILE%\.gemini\config\skills\hypercraft-ui"
# macOS / Linux / Git Bash:
git clone https://github.com/joelmaffi/hypercraft-ui.git ~/.gemini/config/skills/hypercraft-ui

# 3. Claude Code
git clone https://github.com/joelmaffi/hypercraft-ui.git .claude/skills/hypercraft-ui

# 4. Cursor
git clone https://github.com/joelmaffi/hypercraft-ui.git .cursor/skills/hypercraft-ui
```

---

### Option B: Install from Extracted ZIP

> **Note for GitHub ZIP downloads**: If you clicked **Code → Download ZIP** on GitHub, the extracted folder is named `hypercraft-ui-main`. Replace `hypercraft-ui` with `hypercraft-ui-main` in the commands below.

#### 1. Google Antigravity

**Windows (Command Prompt / CMD):**
```cmd
:: Global installation (available in every project)
xcopy /E /I /Y hypercraft-ui "%USERPROFILE%\.gemini\config\skills\hypercraft-ui"

:: Or project-level installation
xcopy /E /I /Y hypercraft-ui .agent\skills\hypercraft-ui
```

**Windows (PowerShell):**
```powershell
# Global installation (available in every project)
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.gemini\config\skills" | Out-Null
Copy-Item -Recurse -Force "hypercraft-ui" "$env:USERPROFILE\.gemini\config\skills\hypercraft-ui"

# Or project-level installation
New-Item -ItemType Directory -Force -Path ".agent\skills" | Out-Null
Copy-Item -Recurse -Force "hypercraft-ui" ".agent\skills\hypercraft-ui"
```

**macOS / Linux:**
```bash
# Global installation (available in every project)
mkdir -p ~/.gemini/config/skills
cp -r hypercraft-ui/ ~/.gemini/config/skills/hypercraft-ui

# Or project-level installation
mkdir -p .agent/skills
cp -r hypercraft-ui/ .agent/skills/hypercraft-ui
```

#### 2. Claude Code

**Windows (CMD):**
```cmd
xcopy /E /I /Y hypercraft-ui .claude\skills\hypercraft-ui
```

**Windows (PowerShell):**
```powershell
New-Item -ItemType Directory -Force -Path ".claude\skills" | Out-Null
Copy-Item -Recurse -Force "hypercraft-ui" ".claude\skills\hypercraft-ui"
```

**macOS / Linux:**
```bash
mkdir -p .claude/skills
cp -r hypercraft-ui/ .claude/skills/hypercraft-ui
```

Invoke in Claude Code with:
```bash
/hypercraft-ui [mode] [action] [target]
```

#### 3. Cursor

Copy the skill and activate Cursor's automatic project rules (`.cursor/rules/hypercraft-ui.mdc`):

**Windows (CMD):**
```cmd
xcopy /E /I /Y hypercraft-ui .cursor\skills\hypercraft-ui
mkdir .cursor\rules 2>nul
copy /Y hypercraft-ui\cursor.rule.mdc .cursor\rules\hypercraft-ui.mdc
```

**Windows (PowerShell):**
```powershell
New-Item -ItemType Directory -Force -Path ".cursor\skills", ".cursor\rules" | Out-Null
Copy-Item -Recurse -Force "hypercraft-ui" ".cursor\skills\hypercraft-ui"
Copy-Item -Force "hypercraft-ui\cursor.rule.mdc" ".cursor\rules\hypercraft-ui.mdc"
```

**macOS / Linux:**
```bash
mkdir -p .cursor/skills .cursor/rules
cp -r hypercraft-ui/ .cursor/skills/hypercraft-ui
cp hypercraft-ui/cursor.rule.mdc .cursor/rules/hypercraft-ui.mdc
```

---

## 🔍 Automated Craft Audit Tool

Scan any frontend codebase (React, TSX, JSX, Vue, Svelte, HTML) for craft floor violations and AI slop tells:

```bash
python scripts/audit_ui.py src/
```

Output:
```
=================================================================
 HYPERCRAFT UI STUDIO - CODEBASE CRAFT AUDIT
=================================================================
Target Directory: src/
Scanned Files:    14
Total Findings:   0
-----------------------------------------------------------------

 [PASSED] Flawless! Zero craft floor violations or AI slop detected.
```

---

## 📄 License

MIT License. Free to use in personal and commercial projects.
