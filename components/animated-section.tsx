'use client'

import type { ReactNode } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  threshold?: number
}

export function AnimatedSection({
  children,
  className = "",
  direction = "up",
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { ref, animationClasses, style } = useScrollAnimation({
    direction,
    delay,
    threshold,
  })

  return (
    <div ref={ref} className={`${animationClasses} ${className}`} style={style}>
      {children}
    </div>
  )
}
