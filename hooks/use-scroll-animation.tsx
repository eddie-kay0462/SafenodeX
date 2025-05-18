"use client"

import { useEffect, useRef, useState } from "react"

type AnimationDirection = "up" | "down" | "left" | "right"

interface UseScrollAnimationProps {
  threshold?: number
  direction?: AnimationDirection
  delay?: number
  once?: boolean
}

export function useScrollAnimation({
  threshold = 0.1,
  direction = "up",
  delay = 0,
  once = true,
}: UseScrollAnimationProps = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, once])

  const getDirectionStyles = () => {
    switch (direction) {
      case "up":
        return "translate-y-10"
      case "down":
        return "translate-y-[-10px]"
      case "left":
        return "translate-x-10"
      case "right":
        return "translate-x-[-10px]"
      default:
        return "translate-y-10"
    }
  }

  const animationClasses = `transition-all duration-700 ease-out ${
    isVisible ? "opacity-100 transform-none" : `opacity-0 ${getDirectionStyles()}`
  }`

  const delayStyle = delay ? { transitionDelay: `${delay}ms` } : {}

  return { ref, animationClasses, style: delayStyle, isVisible }
}
