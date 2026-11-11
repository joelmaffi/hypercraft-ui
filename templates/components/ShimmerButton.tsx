import * as React from "react"

export interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  shimmerColor?: string
  shimmerDuration?: string
  className?: string
}

export function ShimmerButton({
  children,
  shimmerColor = "from-indigo-500 via-purple-500 to-indigo-500",
  shimmerDuration = "3s",
  className = "",
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      className={`group relative inline-flex items-center justify-center p-[1px] overflow-hidden rounded-xl font-medium text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 active:scale-[0.98] ${className}`}
      {...props}
    >
      {/* Animated Conic/Gradient Glow */}
      <span
        className={`absolute inset-[-100%] bg-gradient-to-r ${shimmerColor} animate-spin opacity-70 group-hover:opacity-100 blur-[2px] transition-opacity`}
        style={{ animationDuration: shimmerDuration }}
      />
      
      {/* Button Interior */}
      <span className="relative w-full h-full px-5 py-2.5 transition-colors duration-150 bg-neutral-900 text-white rounded-[11px] group-hover:bg-neutral-950 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  )
}
