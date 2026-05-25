'use client'

import { useState, useEffect } from 'react'
import { ArrowUp, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import type { SiteSettings } from '@/types/sanity'

interface FloatingButtonsProps {
  settings?: SiteSettings | null
  showScrollTop?: boolean // Control para mostrar/ocultar scroll-to-top
}

export function FloatingButtons({ settings, showScrollTop = true }: FloatingButtonsProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostrar solo después de scrollear 400px
      if (window.scrollY > 400) {
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
      behavior: 'smooth'
    })
  }

  const whatsappNumber = settings?.whatsappNumber?.replace(/\D/g, '') || '573147950662'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('¡Hola! Me interesa conocer más sobre sus servicios de ciberseguridad.')}`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Botón de WhatsApp - SIEMPRE VISIBLE y prominente */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300" />
        
        {/* Pulse animation */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 rounded-full bg-green-400 -z-10"
        />

        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-foreground text-background text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-lg">
          Chatea con nosotros
        </span>
      </motion.a>

      {/* Botón de Scroll to Top - Más pequeño, gris, solo visible al scrollear */}
      <AnimatePresence>
        {showScrollTop && isVisible && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.05, opacity: 1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="group relative flex items-center justify-center w-11 h-11 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300 opacity-70 hover:opacity-100"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
            
            {/* Subtle glow */}
            <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />

            {/* Tooltip */}
            <span className="absolute right-full mr-3 px-2.5 py-1 bg-foreground/90 text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              Volver arriba
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
