'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [hasFinePointer, setHasFinePointer] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    // Only activate on devices with a precise pointer (mouse/trackpad).
    // Tablets and phones report pointer: coarse — skip the cursor entirely.
    const mql = window.matchMedia('(pointer: fine)')
    setHasFinePointer(mql.matches)

    const handlePointerChange = (e: MediaQueryListEvent) => setHasFinePointer(e.matches)
    mql.addEventListener('change', handlePointerChange)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      mql.removeEventListener('change', handlePointerChange)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  // No mouse device or user prefers reduced motion → render nothing
  if (!hasFinePointer || shouldReduceMotion) return null

  const springConfig = { type: 'spring' as const, stiffness: 500, damping: 28, mass: 0.5 }
  const ringConfig = { type: 'spring' as const, stiffness: 150, damping: 15, mass: 0.1 }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference supports-[mix-blend-mode:difference]:mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={springConfig}
      />

      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-primary/50 rounded-full pointer-events-none z-[9998] mix-blend-difference supports-[mix-blend-mode:difference]:mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={ringConfig}
      />
    </>
  )
}
