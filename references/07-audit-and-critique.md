# 07. Audit, Critique & Quality Verification

A HyperCraft UI is rigorously audited before it reaches a user. Use this guide when executing the `critique` or `audit` actions.

---

## 1. The 10 Nielsen Usability Heuristics Rubric

Score each heuristic from **0 (Severe Defect)** to **4 (Exemplary Craft)**:

| # | Heuristic | What to Verify | Score (0-4) |
| :- | :--- | :--- | :-: |
| 1 | **Visibility of System Status** | Are loading states, pending network requests, progress bars, and active selections immediately obvious? | / 4 |
| 2 | **Match Between System & Real World** | Does the interface use authentic terminology, natural mental models, and intuitive units of measurement? | / 4 |
| 3 | **User Control & Freedom** | Can users undo accidental actions, cancel ongoing requests, or dismiss modals with `Escape` or backdrop clicks? | / 4 |
| 4 | **Consistency & Standards** | Are spacing, colors, button styles, typography, and keyboard shortcuts uniform throughout the application? | / 4 |
| 5 | **Error Prevention** | Does the UI prevent dangerous actions with confirmation dialogs, form input constraints, and disabled invalid states? | / 4 |
| 6 | **Recognition Rather than Recall** | Are options, actions, and filters visible in context, minimizing the user's need to remember prior steps? | / 4 |
| 7 | **Flexibility & Efficiency of Use** | Are power-user accelerators provided (keyboard shortcuts, quick filters, bulk actions, command palette)? | / 4 |
| 8 | **Aesthetic & Minimalist Design** | Is irrelevant noise eliminated? Does every element on the screen fight for and earn its right to exist? | / 4 |
| 9 | **Help Users Recognize & Recover from Errors** | Are error messages written in clear human language with actionable recovery paths rather than cryptic error codes? | / 4 |
| 10 | **Help & Documentation** | Are complex data fields supported with unobtrusive tooltips, contextual docs links, and clear empty states? | / 4 |

---

## 2. Cognitive Load Audit

Inspect the visual complexity of the screen using the **Chunking Law (Miller's Law)**:
- **Rule of 5**: No single navigation bar or card group should present more than 5-7 unorganized choices at once.
- **Visual Grouping**: Use proximity (tighter spacing between related items, generous spacing between distinct items) rather than drawing heavy borders or nesting cards inside cards.
- **Eye-Travel Efficiency**: The primary workflow must follow the natural F-pattern or Z-pattern reading trajectory without zigzagging randomly across the monitor.

---

## 3. Accessibility & WCAG Checklist

### Color & Contrast
- [ ] Body prose meets minimum `4.5:1` contrast ratio against canvas.
- [ ] Large headings (≥18px bold or ≥24px regular) meet minimum `3:1` contrast ratio.
- [ ] Interactive icons and borders meet `3:1` contrast ratio.
- [ ] Color is never the sole conveyor of information (e.g. status includes both a colored dot and text label).

### Keyboard Navigation & Focus
- [ ] All interactive elements (`<button>`, `<a>`, `<input>`, `<select>`) can be reached and activated via `Tab` and `Enter`/`Space`.
- [ ] Focus rings are clearly visible via `:focus-visible` with high-contrast outlines (never `outline: none` without a custom replacement).
- [ ] Modal dialogs trap keyboard focus while open and restore focus to the trigger upon closing.
- [ ] Modals and popovers dismiss on `Escape`.

### Touch & Mobile Targets
- [ ] All interactive touch targets are at least `44px x 44px` on mobile viewports.
- [ ] Spacing between adjacent touch targets is at least `8px` to prevent mis-taps.

---

## 4. The Anti-Slop Audit Checklist

Run through the 10 Craft Floor criteria:
- [ ] No kicker/eyebrow labels above headings.
- [ ] No generic, identical 3-card feature columns.
- [ ] No clichéd warm cream/terracotta or dark void/acid-green palettes.
- [ ] No arbitrary multi-color gradient headlines.
- [ ] No unmotivated backdrop-blur on static components.
- [ ] No zero-blur hard block shadows (unless true neobrutalism).
- [ ] No arbitrary numbers (01 / 02 / 03) on non-sequences.
- [ ] No raw Unicode emojis used as UI icons.
- [ ] No "Lorem ipsum" or dummy placeholder text.
- [ ] Themed browser selection, custom scrollbars, and tabular numbers.
