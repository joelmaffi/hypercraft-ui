import * as React from "react"

export interface EmptyStateProps {
  icon?: React.ReactNode
  title: string
  description: string
  actionLabel?: string
  onAction?: () => void
  secondaryActionLabel?: string
  onSecondaryAction?: () => void
  className?: string
}

export function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  onAction,
  secondaryActionLabel,
  onSecondaryAction,
  className = ""
}: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center p-12 text-center rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 ${className}`}
    >
      {icon && (
        <div className="w-12 h-12 mb-4 rounded-xl flex items-center justify-center bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm text-neutral-500 dark:text-neutral-300">
          {icon}
        </div>
      )}
      
      <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
        {title}
      </h3>
      
      <p className="mt-1.5 text-xs text-neutral-500 dark:text-neutral-400 max-w-sm leading-relaxed">
        {description}
      </p>

      {(actionLabel || secondaryActionLabel) && (
        <div className="mt-6 flex items-center gap-3">
          {actionLabel && (
            <button
              onClick={onAction}
              className="px-4 py-2 text-xs font-medium rounded-lg bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 shadow-sm transition-colors"
            >
              {actionLabel}
            </button>
          )}
          {secondaryActionLabel && (
            <button
              onClick={onSecondaryAction}
              className="px-4 py-2 text-xs font-medium rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              {secondaryActionLabel}
            </button>
          )}
        </div>
      )}
    </div>
  )
}
