import * as React from "react"

export interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  spotlightColor?: string
  className?: string
}

export function SpotlightCard({
  children,
  spotlightColor = "rgba(99, 102, 241, 0.08)",
  className = "",
  ...props
}: SpotlightCardProps) {
  const divRef = React.useRef<HTMLDivElement>(null)
  const [position, setPosition] = React.useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = React.useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return
    const rect = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleMouseEnter = () => setOpacity(1)
  const handleMouseLeave = () => setOpacity(0)

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/90 shadow-sm transition-shadow hover:shadow-md ${className}`}
      {...props}
    >
      {/* GPU Radial Spotlight Layer */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 ease-out"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
