'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
}

export function WhatsAppButton({ phoneNumber, message }: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      setShowTooltip(true)
      // Auto hide tooltip after 5 seconds
      setTimeout(() => setShowTooltip(false), 5000)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleClick = () => {
    const defaultMessage = message || '¡Hola! Me gustaría obtener más información sobre sus servicios de ciberseguridad.'
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(defaultMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bottom-full right-0 mb-4 w-64"
              >
                <div className="relative rounded-2xl border border-primary/20 bg-card p-4 shadow-lg backdrop-blur-sm">
                  <button
                    onClick={() => setShowTooltip(false)}
                    className="absolute -right-2 -top-2 rounded-full bg-background p-1 hover:bg-muted transition-colors"
                    aria-label="Cerrar"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  <p className="text-sm font-medium mb-1">¿Necesitas ayuda?</p>
                  <p className="text-xs text-muted-foreground">
                    Escríbenos por WhatsApp y te responderemos enseguida
                  </p>
                  {/* Arrow */}
                  <div className="absolute -bottom-2 right-6 h-4 w-4 rotate-45 border-b border-r border-primary/20 bg-card" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/50 transition-all hover:shadow-xl hover:shadow-[#25D366]/60"
            aria-label="Contactar por WhatsApp"
          >
            <MessageCircle className="h-8 w-8 text-white" />
            
            {/* Ping animation */}
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
            
            {/* Glow effect */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 transition-opacity group-hover:opacity-30" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
