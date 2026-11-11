import * as React from "react"
import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react"

export interface MetricDisplayProps {
  label: string
  value: string | number
  unit?: string
  change?: number
  period?: string
  trend?: "up" | "down" | "neutral"
  subtext?: string
  className?: string
}

export function MetricDisplay({
  label,
  value,
  unit,
  change,
  period = "vs last week",
  trend = "neutral",
  subtext,
  className = ""
}: MetricDisplayProps) {
  const isPositive = trend === "up" || (change !== undefined && change > 0)
  const isNegative = trend === "down" || (change !== undefined && change < 0)

  return (
    <div
      className={`rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-neutral-900 p-5 shadow-sm ${className}`}
    >
      <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
        {label}
      </div>
      
      <div className="mt-3 flex items-baseline gap-1.5">
        <span className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50 font-mono tabular-nums">
          {value}
        </span>
        {unit && (
          <span className="text-sm font-normal text-neutral-400 font-sans">
            {unit}
          </span>
        )}
      </div>

      <div className="mt-2 flex items-center gap-2 text-xs">
        {change !== undefined && (
          <span
            className={`inline-flex items-center gap-0.5 font-medium px-1.5 py-0.5 rounded ${
              isPositive
                ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400"
                : isNegative
                ? "bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400"
                : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
            }`}
          >
            {isPositive && <ArrowUpRight className="w-3.5 h-3.5" />}
            {isNegative && <ArrowDownRight className="w-3.5 h-3.5" />}
            {!isPositive && !isNegative && <Minus className="w-3.5 h-3.5" />}
            {Math.abs(change)}%
          </span>
        )}
        <span className="text-neutral-400 text-2xs">{subtext || period}</span>
      </div>
    </div>
  )
}
