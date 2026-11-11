# 05. Production Component Engineering & State Architecture

A HyperCraft UI is backed by robust, accessible, error-resilient engineering. Visual beauty without functional integrity is fragile.

---

## 1. Modern Component Conventions

### A. Strict TypeScript Typings
Every component must declare explicit interfaces extending native HTML attributes:

```tsx
import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive"
  size?: "sm" | "md" | "lg"
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}
```

### B. The `cn()` Utility Standard
Combine class names safely with `clsx` and `tailwind-merge` to prevent conflicting Tailwind rules:

```typescript
// lib/utils.ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

---

## 2. The 7 Essential Interface States

Every functional component or view must explicitly handle all 7 states:

```
┌────────────────────────────────────────────────────────┐
│               THE 7 INTERFACE STATES                   │
├───────────────┬────────────────────────────────────────┤
│ 1. Idle       │ Default populated view                 │
│ 2. Hover      │ Subtle lift, border shine, micro-spring│
│ 3. Active     │ Physical press scale (scale-98)        │
│ 4. Loading    │ Shimmer skeleton matching geometry     │
│ 5. Empty      │ Clear orientation + primary CTA        │
│ 6. Error      │ Human diagnosis + Retry action         │
│ 7. Disabled   │ Reduced opacity + descriptive tooltip  │
└───────────────┴────────────────────────────────────────┘
```

### Skeleton Screens (Never Spinners for Full Pages)
Spinners create perceptual latency by hiding layout structure. Skeletons reassure the user that content is arriving in predetermined shapes:

```tsx
export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="w-full divide-y divide-neutral-200/60 dark:divide-neutral-800/60 animate-pulse">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex items-center justify-between py-4 px-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800" />
            <div className="space-y-2">
              <div className="h-3.5 w-32 rounded bg-neutral-200 dark:bg-neutral-800" />
              <div className="h-2.5 w-24 rounded bg-neutral-100 dark:bg-neutral-800/60" />
            </div>
          </div>
          <div className="h-3.5 w-16 rounded bg-neutral-200 dark:bg-neutral-800" />
          <div className="h-3.5 w-20 rounded bg-neutral-200 dark:bg-neutral-800" />
        </div>
      ))}
    </div>
  )
}
```

---

## 3. Accessible Radix Primitives

Never build complex accessible widgets (dialogs, dropdowns, popovers, tabs) from raw `div` tags. Use Radix UI primitives for bulletproof keyboard navigation (`Escape`, `ArrowUp/Down`, `Tab`), ARIA roles, and focus traps:

### Command Palette (`Cmd+K`) Pattern
The command palette is the central nervous system of any modern desktop web app:

```tsx
import * as React from "react"
import { Dialog, DialogContent } from "@radix-ui/react-dialog"
import { Search, Terminal, Settings, ArrowRight } from "lucide-react"

export function CommandPalette({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [query, setQuery] = React.useState("")

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        onOpenChange(!open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [open, onOpenChange])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl overflow-hidden p-0 z-50">
        <div className="flex items-center border-b border-neutral-200 dark:border-neutral-800 px-4 py-3">
          <Search className="w-5 h-5 text-neutral-400 mr-3" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search commands, clusters, or documents... (Cmd+K)"
            className="w-full bg-transparent text-sm focus:outline-none text-neutral-900 dark:text-neutral-100 placeholder-neutral-400"
          />
          <kbd className="text-2xs bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-500 font-mono">ESC</kbd>
        </div>
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          <div className="px-2 py-1 text-2xs uppercase tracking-wider font-semibold text-neutral-400">Navigation</div>
          <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-neutral-400" />
              <span>Cluster Console</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
          </button>
          <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
            <div className="flex items-center gap-2">
              <Settings className="w-4 h-4 text-neutral-400" />
              <span>Project Settings</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
```

---

## 4. Production High-Density Data Tables

For operational screens, data tables must support:
- Sorting by column with visual indicators (`ArrowUpNarrowWide`).
- Filter rows by status / keyword.
- Tabular numerals (`font-mono` or `tabular-nums`) so numbers align vertically.
- Hover highlight per row with instant action triggers on hover.

```tsx
export function DataTable({ items }: { items: Array<{ id: string; name: string; status: string; latency: number; updated: string }> }) {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
      <table className="w-full text-left text-sm">
        <thead className="bg-neutral-50 dark:bg-neutral-800/50 border-b border-neutral-200 dark:border-neutral-800 text-xs text-neutral-500 font-medium">
          <tr>
            <th className="py-3 px-4 font-normal">Service</th>
            <th className="py-3 px-4 font-normal">Health Status</th>
            <th className="py-3 px-4 font-normal text-right">P99 Latency</th>
            <th className="py-3 px-4 font-normal text-right">Last Sync</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800/60">
          {items.map((row) => (
            <tr key={row.id} className="hover:bg-neutral-50/80 dark:hover:bg-neutral-800/40 transition-colors group">
              <td className="py-3 px-4 font-medium text-neutral-900 dark:text-neutral-100">{row.name}</td>
              <td className="py-3 px-4">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {row.status}
                </span>
              </td>
              <td className="py-3 px-4 text-right font-mono text-neutral-600 dark:text-neutral-300 tabular-nums">
                {row.latency}ms
              </td>
              <td className="py-3 px-4 text-right text-xs text-neutral-400">
                {row.updated}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
```
