import * as React from "react"
import { motion } from "framer-motion"

export interface TabItem {
  id: string
  label: string
  icon?: React.ReactNode
  badge?: string | number
}

export interface AnimatedTabsProps {
  tabs: TabItem[]
  activeId: string
  onChange: (id: string) => void
  layoutId?: string
  className?: string
}

export function AnimatedTabs({
  tabs,
  activeId,
  onChange,
  layoutId = "active-tab-indicator",
  className = ""
}: AnimatedTabsProps) {
  return (
    <div
      role="tablist"
      className={`inline-flex items-center gap-1 p-1 bg-neutral-100 dark:bg-neutral-800/80 rounded-xl border border-neutral-200/80 dark:border-neutral-700/60 ${className}`}
    >
      {tabs.map((tab) => {
        const isActive = activeId === tab.id
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={`relative flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
              isActive
                ? "text-neutral-900 dark:text-neutral-50"
                : "text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId={layoutId}
                className="absolute inset-0 bg-white dark:bg-neutral-700/90 rounded-lg shadow-sm border border-neutral-200/50 dark:border-neutral-600/40"
                transition={{ type: "spring", stiffness: 420, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              {tab.icon}
              {tab.label}
              {tab.badge !== undefined && (
                <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-neutral-200 dark:bg-neutral-600 text-neutral-700 dark:text-neutral-200">
                  {tab.badge}
                </span>
              )}
            </span>
          </button>
        )
      })}
    </div>
  )
}
