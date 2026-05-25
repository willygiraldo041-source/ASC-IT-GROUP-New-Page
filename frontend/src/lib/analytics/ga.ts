// Google Analytics 4 Configuration

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || ''

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

/**
 * Initialize Google Analytics
 */
export const initGA = () => {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || []
  
  // gtag function
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  
  // Initialize GA4
  window.gtag('js', new Date())
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
    send_page_view: false, // Manual page views
  })
}

/**
 * Track page view
 */
export const pageview = (url: string) => {
  if (!GA_MEASUREMENT_ID) return
  
  window.gtag?.('config', GA_MEASUREMENT_ID, {
    page_path: url,
  })
}

/**
 * Track custom event
 */
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category?: string
  label?: string
  value?: number
}) => {
  if (!GA_MEASUREMENT_ID) return
  
  window.gtag?.('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
