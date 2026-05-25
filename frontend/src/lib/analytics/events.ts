import { event } from './ga'

/**
 * GA4 Custom Events for ASC IT GROUP
 */

// Form submission
export const trackFormSubmit = (formName: string, service?: string) => {
  event({
    action: 'form_submit',
    category: 'engagement',
    label: formName,
    value: service ? 1 : 0,
  })
}

// Quote request
export const trackQuoteRequest = (service: string) => {
  event({
    action: 'quote_request',
    category: 'conversion',
    label: service,
    value: 1,
  })
}

// WhatsApp click
export const trackWhatsAppClick = (source: string) => {
  event({
    action: 'whatsapp_click',
    category: 'engagement',
    label: source,
  })
}

// Contact click
export const trackContactClick = (method: 'email' | 'phone' | 'form') => {
  event({
    action: 'contact_click',
    category: 'engagement',
    label: method,
  })
}

// Service view
export const trackServiceView = (serviceName: string) => {
  event({
    action: 'service_view',
    category: 'engagement',
    label: serviceName,
  })
}

// Blog read
export const trackBlogRead = (postTitle: string, readTime?: number) => {
  event({
    action: 'blog_read',
    category: 'engagement',
    label: postTitle,
    value: readTime,
  })
}

// Download report
export const trackDownloadReport = (reportName: string) => {
  event({
    action: 'download_report',
    category: 'engagement',
    label: reportName,
  })
}

// Language change
export const trackLanguageChange = (newLanguage: string) => {
  event({
    action: 'language_change',
    category: 'engagement',
    label: newLanguage,
  })
}

// CTA button click
export const trackCTAClick = (ctaName: string, location: string) => {
  event({
    action: 'cta_click',
    category: 'engagement',
    label: `${ctaName} - ${location}`,
  })
}

// Newsletter signup
export const trackNewsletterSignup = () => {
  event({
    action: 'newsletter_signup',
    category: 'conversion',
    label: 'footer',
  })
}

// Social share
export const trackSocialShare = (platform: string, url: string) => {
  event({
    action: 'social_share',
    category: 'engagement',
    label: `${platform} - ${url}`,
  })
}

// Case study view
export const trackCaseStudyView = (caseStudyName: string) => {
  event({
    action: 'case_study_view',
    category: 'engagement',
    label: caseStudyName,
  })
}

// Scroll depth
export const trackScrollDepth = (percentage: number) => {
  event({
    action: 'scroll_depth',
    category: 'engagement',
    label: `${percentage}%`,
    value: percentage,
  })
}
