'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { initGA, pageview, GA_MEASUREMENT_ID } from '@/lib/analytics/ga'

/**
 * Google Analytics 4 Component
 * Integrates GA4 with Next.js App Router
 */
export function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Initialize GA on mount
  useEffect(() => {
    if (GA_MEASUREMENT_ID) {
      initGA()
    }
  }, [])

  // Track page views on route change
  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
    pageview(url)
  }, [pathname, searchParams])

  // Don't render if no GA ID
  if (!GA_MEASUREMENT_ID) {
    return null
  }

  return (
    <>
      {/* Google Analytics gtag.js */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
    </>
  )
}
