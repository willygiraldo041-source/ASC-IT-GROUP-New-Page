'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-40 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Volver arriba"
        >
          <div className="relative">
            {/* Background */}
            <div className="h-12 w-12 rounded-full bg-primary shadow-lg shadow-primary/50 flex items-center justify-center transition-all group-hover:shadow-xl group-hover:shadow-primary/60">
              <ArrowUp className="h-6 w-6 text-white" />
            </div>
            
            {/* Ping Animation */}
            <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
            
            {/* Glow */}
            <span className="absolute inset-0 rounded-full bg-primary opacity-0 blur-md transition-opacity group-hover:opacity-30" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
