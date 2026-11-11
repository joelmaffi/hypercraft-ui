# 08. Production Project Blueprints

This guide provides three complete structural blueprints for common web applications. Use these architectures as scaffolding when initiating a project under `build`.

---

## Blueprint 1: High-Conversion Persuasion Surface (Landing Page)

### Page Structure (Top to Bottom)
1. **Sticky Header**: Minimal logo, anchor links, theme switcher, and primary CTA button with backdrop blur.
2. **Hero Epicenter**:
   - Single strong, confident headline with balanced wrapping.
   - 2-line specific value proposition (measure < 55ch).
   - Primary action (ShimmerButton) + secondary documentation link.
   - Interactive Product Preview or live simulated widget (showing the actual UI in action rather than generic marketing illustrations).
3. **Proof Bar**: Subtle monochrome logos of authentic industry leaders or verified customer testimonials.
4. **Asymmetric Bento Grid**: Core product architecture broken down into 1 large hero capability + 1 high-impact metric + 3 tertiary engineering highlights.
5. **Interactive Feature Deep-Dive**: Tabbed walkthrough allowing visitors to toggle between capabilities and watch the live UI preview update.
6. **Conversion Chapter**: High-contrast, focused section with direct action button and guarantee details.
7. **Clean Footer**: Legal links, status page link, social links, theme toggle.

---

## Blueprint 2: High-Density Operating Surface (SaaS Dashboard)

### Application Layout Architecture
```
┌────────────────────────────────────────────────────────────────────────┐
│                              TOP BAR                                   │
│  [Logo / Project Selector]    [Cmd+K Search Input]     [Alerts] [User] │
├──────────────┬─────────────────────────────────────────────────────────┤
│              │ Breadcrumbs / Page Title                [Export] [+New] │
│              ├─────────────────────────────────────────────────────────┤
│   SIDEBAR    │ METRIC STRIP (4 Key KPI Cards with Sparklines & Deltas) │
│              ├─────────────────────────────────────────────────────────┤
│  • Clusters  │ WORKSPACE WORKFLOW CANVAS                               │
│  • Analytics │ [Filter: All | Active | Error]       [Search rows...]   │
│  • Database  │ ─────────────────────────────────────────────────────── │
│  • Telemetry │ HIGH-DENSITY DATA TABLE                                 │
│  • Settings  │ • Row 1: Status Dot | Service Name | P99 Latency | Actions│
│              │ • Row 2: Status Dot | Service Name | P99 Latency | Actions│
│  [Collapse]  │ [Pagination: Showing 1-20 of 142]    [Next >]           │
└──────────────┴─────────────────────────────────────────────────────────┘
```

### Essential Interactive Features
- Collapsible sidebar (`Cmd+B`) preserving state in localStorage.
- Global Command Palette (`Cmd+K`) for jumping across routes and executing quick actions.
- Optimistic updates with feedback toasts (e.g. `sonner` or custom Radix toast).
- Skeleton placeholders on route changes.
- Responsive mobile drawer fallback for smaller screens.

---

## Blueprint 3: Editorial Knowledge Hub (Documentation & Research)

### Three-Column Layout Blueprint
```
┌──────────────┬──────────────────────────────────────────┬──────────────┐
│  SIDEBAR TOC │            MAIN EDITORIAL PROSE          │  SCROLL-SPY  │
│              │                                          │              │
│  Getting     │  # Architecture & Protocols              │  On this page│
│  Started     │                                          │  • Overview  │
│  • Quickstart│  Comprehensive guide to low-latency      │  • Protocols │
│  • Config    │  state replication across clusters...    │  • Benchmarks│
│              │                                          │  • References│
│  Core API    │  ```typescript                           │              │
│  • Ingest    │  const client = new ClusterClient({      │  [Edit page] │
│  • Storage   │    region: "us-east-1",                  │  [Copy link] │
│  • Query     │  })                                      │              │
│              │  ```                                     │              │
└──────────────┴──────────────────────────────────────────┴──────────────┘
```

### Essential Reading Features
- Strict `68ch` max reading measure on prose.
- Code blocks with syntax highlighting, language badge, and one-click copy button.
- Smooth scroll-spy tracking on the right navigation rail.
- Built-in full-text search with keyboard shortcut `/`.
- Responsive floating table-of-contents sheet on mobile.
