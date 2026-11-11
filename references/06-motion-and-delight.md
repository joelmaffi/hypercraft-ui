# 06. Motion Physics & Micro-Delight

Motion in world-class software is **physical, contextual, and purposeful**. It answers actions, communicates spatial relationships, and elevates perceived performance.

---

## 1. Physics Over Linear Curves

Human eyes find mechanical, linear animations jarring. Real-world objects possess mass, inertia, and momentum. Use spring physics rather than arbitrary duration curves:

### Curated Spring Physics Presets
```typescript
export const springs = {
  // 1. Snappy (Buttons, toggles, dropdown popups, tabs)
  snappy: { type: "spring", stiffness: 400, damping: 30 },

  // 2. Gentle (Modal dialogs, drawers, page view transitions)
  gentle: { type: "spring", stiffness: 260, damping: 24 },

  // 3. Tactile Micro-Tap (Button press scale)
  tap: { scale: 0.98, transition: { type: "spring", stiffness: 500, damping: 25 } },

  // 4. Smooth Float / Hover
  hover: { y: -2, transition: { type: "spring", stiffness: 300, damping: 20 } }
}
```

---

## 2. Shared Layout Transitions (`layoutId`)

When an active indicator or card expands into a new state, never teleport it or jump heights. Use Framer Motion's `layoutId` to morph between states seamlessly:

### Sliding Pill Navigation Tabs
```tsx
import * as React from "react"
import { motion } from "framer-motion"

const tabs = ["Overview", "Deployments", "Analytics", "Settings"]

export function AnimatedTabs() {
  const [selected, setSelected] = React.useState("Overview")

  return (
    <div className="flex items-center gap-1 p-1 bg-neutral-100 dark:bg-neutral-800/80 rounded-xl border border-neutral-200 dark:border-neutral-700/60">
      {tabs.map((tab) => {
        const isActive = selected === tab
        return (
          <button
            key={tab}
            onClick={() => setSelected(tab)}
            className={`relative px-4 py-1.5 text-xs font-medium rounded-lg transition-colors duration-150 ${
              isActive ? "text-neutral-900 dark:text-neutral-50" : "text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-300"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="active-tab-pill"
                className="absolute inset-0 bg-white dark:bg-neutral-700 rounded-lg shadow-sm"
                transition={{ type: "spring", stiffness: 450, damping: 32 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        )
      })}
    </div>
  )
}
```

---

## 3. High-Polish Visual Effects (Magic UI Recipes)

### A. The GPU Spotlight Card
A card that tracks the user's cursor with a subtle radial gradient, revealing border highlights and ambient lighting:

```tsx
import * as React from "react"

export function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const divRef = React.useRef<HTMLDivElement>(null)
  const [position, setPosition] = React.useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = React.useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return
    const rect = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 ${className}`}
    >
      {/* Dynamic Cursor Spotlight Layer */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99, 102, 241, 0.08), transparent 40%)`
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
```

### B. The Shimmer Glow Button
A premium primary button featuring a rotating conic glow border that catches the eye without tacky rainbow colors:

```tsx
export function ShimmerButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative inline-flex items-center justify-center p-0.5 overflow-hidden rounded-xl font-medium text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 active:scale-[0.98]"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-xl group-hover:opacity-100 opacity-70 blur-sm transition-opacity" />
      <span className="relative px-5 py-2.5 transition-all ease-in duration-150 bg-neutral-900 text-white rounded-[10px] group-hover:bg-neutral-950 flex items-center gap-2">
        {children}
      </span>
    </button>
  )
}
```

---

## 4. The Delight Thesis

Delight is not frivolous animations or cartoonish sounds. True delight comes from:
1. **Speed & Optimistic Updates**: The app reacts before the server responds. Liking, saving, or reordering completes instantly on the UI, rolling back gracefully only if the request fails.
2. **Contextual Thoughtfulness**: Automatically focusing the search input when pressing `/`. Showing a keyboard shortcut badge on hover.
3. **Humane Error Recovery**: Instead of "Error 500: Internal Server Error", render: "We could not reach your cluster. We've saved your unsaved query drafts locally. [Retry Connection]".
4. **Subtle Celebration on Real Milestones**: A modest, tasteful micro-confetti or checkmark bloom when a user ships their first deployment—never for ordinary button clicks.

---

## 5. Performance & Accessibility Guardrails

- **GPU Acceleration**: Animate ONLY `transform` and `opacity`. Never animate `width`, `height`, `margin`, or `left/top` during continuous animations (which trigger expensive layout recalculations and repaint jank).
- **Reduced Motion**: Always honor the user's OS preference:
  ```tsx
  import { useReducedMotion } from "framer-motion"

  const shouldReduceMotion = useReducedMotion()
  const animationProps = shouldReduceMotion ? {} : { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 } }
  ```
