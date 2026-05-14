'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/contexts/LanguageContext'

const languages = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇺🇸' }
]

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const { locale, setLocale } = useLanguage()

  const currentLanguage = languages.find(lang => lang.code === locale)

  const handleLanguageChange = (newLocale: 'es' | 'en') => {
    if (newLocale === locale) {
      setIsOpen(false)
      return
    }

    setLocale(newLocale)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "group relative flex items-center gap-2 px-3 py-2 rounded-lg",
          "bg-background/50 hover:bg-background border border-border",
          "hover:border-primary/50 transition-all duration-200",
          "hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
        )}
      >
        <Globe className="h-4 w-4 text-foreground/70 group-hover:text-primary transition-colors" />
        <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
          {currentLanguage?.flag}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-foreground/50"
        >
          ▾
        </motion.div>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 mt-2 w-48 z-50"
            >
              <div className="rounded-xl border border-border bg-background/95 backdrop-blur-lg shadow-xl overflow-hidden">
                <div className="p-1">
                  {languages.map((language) => {
                    const isActive = language.code === locale
                    
                    return (
                      <button
                        key={language.code}
                        onClick={() => handleLanguageChange(language.code as 'es' | 'en')}
                        className={cn(
                          "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg",
                          "text-sm font-medium transition-all duration-200",
                          "hover:bg-primary/10 hover:text-primary",
                          isActive && "bg-primary/10 text-primary",
                          !isActive && "text-foreground/70"
                        )}
                      >
                        <span className="text-lg">{language.flag}</span>
                        <span className="flex-1 text-left">{language.name}</span>
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          >
                            <Check className="h-4 w-4 text-primary" />
                          </motion.div>
                        )}
                      </button>
                    )
                  })}
                </div>

                {/* Info Footer */}
                <div className="px-3 py-2 border-t border-border bg-primary/5">
                  <p className="text-xs text-foreground/50 text-center">
                    Cambio instantáneo
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
