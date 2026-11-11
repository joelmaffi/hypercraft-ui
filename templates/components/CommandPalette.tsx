import * as React from "react"
import { Search, ArrowRight, CornerDownLeft } from "lucide-react"

export interface CommandItem {
  id: string
  label: string
  category: string
  icon?: React.ReactNode
  shortcut?: string
  action: () => void
}

export interface CommandPaletteProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  commands: CommandItem[]
}

export function CommandPalette({ open, onOpenChange, commands }: CommandPaletteProps) {
  const [query, setQuery] = React.useState("")
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const inputRef = React.useRef<HTMLInputElement>(null)

  // Listen for Cmd+K / Ctrl+K
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        onOpenChange(!open)
      }
      if (e.key === "Escape" && open) {
        onOpenChange(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [open, onOpenChange])

  // Focus input on open
  React.useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50)
      setQuery("")
      setSelectedIndex(0)
    }
  }, [open])

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase()) ||
    c.category.toLowerCase().includes(query.toLowerCase())
  )

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1))
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault()
      filtered[selectedIndex].action()
      onOpenChange(false)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/40 backdrop-blur-sm transition-opacity">
      <div
        className="relative w-full max-w-xl bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-neutral-200/80 dark:border-neutral-800/80">
          <Search className="w-5 h-5 text-neutral-400 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setSelectedIndex(0)
            }}
            placeholder="Type a command or search... (↑ ↓ to navigate)"
            className="w-full bg-transparent text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md px-1"
          />
          <kbd className="px-2 py-0.5 text-2xs font-mono rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-500 border border-neutral-200 dark:border-neutral-700">
            ESC
          </kbd>
        </div>

        {/* Command List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-xs text-neutral-400">
              No matching commands found.
            </div>
          ) : (
            filtered.map((item, idx) => {
              const isSelected = idx === selectedIndex
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    item.action()
                    onOpenChange(false)
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                    isSelected
                      ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-950 dark:text-neutral-50"
                      : "text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800/60"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-neutral-400">{item.icon}</span>
                    <span>{item.label}</span>
                    <span className="text-[10px] text-neutral-400 font-normal">({item.category})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.shortcut && (
                      <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-200/50 dark:bg-neutral-700/50 text-neutral-500">
                        {item.shortcut}
                      </kbd>
                    )}
                    {isSelected && <CornerDownLeft className="w-3.5 h-3.5 text-neutral-400" />}
                  </div>
                </button>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}
