'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Locale = 'es' | 'en'

interface Messages {
  [key: string]: any
}

interface LanguageContextType {
  locale: Locale
  messages: Messages
  setLocale: (locale: Locale) => void
  t: (key: string, params?: Record<string, any>) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('es')
  const [messages, setMessages] = useState<Messages>({})

  useEffect(() => {
    const saved = localStorage.getItem('preferred-language')
    const safeLocale: Locale = saved === 'en' ? 'en' : 'es'
    const browserLang = navigator.language.split('-')[0]
    const initialLocale: Locale = saved ? safeLocale : (browserLang === 'en' ? 'en' : 'es')

    loadMessages(initialLocale)
  }, [])

  const loadMessages = async (newLocale: Locale) => {
    try {
      const response = await fetch(`/messages/${newLocale}.json`)
      const data = await response.json()
      setMessages(data)
      setLocaleState(newLocale)
    } catch (error) {
      console.error('Error loading messages:', error)
    }
  }

  const setLocale = (newLocale: Locale) => {
    localStorage.setItem('preferred-language', newLocale)
    loadMessages(newLocale)
  }

  // Translation function with nested key support
  const t = (key: string, params?: Record<string, any>): string => {
    const keys = key.split('.')
    let value: any = messages

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k]
      } else {
        return key // Return key if not found
      }
    }

    let result = typeof value === 'string' ? value : key

    // Replace parameters if provided
    if (params) {
      Object.keys(params).forEach(param => {
        result = result.replace(`{${param}}`, params[param])
      })
    }

    return result
  }

  return (
    <LanguageContext.Provider value={{ locale, messages, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
