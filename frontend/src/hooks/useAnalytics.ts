'use client'

import { useCallback } from 'react'
import * as events from '@/lib/analytics/events'

/**
 * Hook para tracking de eventos de Analytics
 * Proporciona funciones tipadas y fáciles de usar
 */
export function useAnalytics() {
  const trackFormSubmit = useCallback((formName: string, service?: string) => {
    events.trackFormSubmit(formName, service)
  }, [])

  const trackQuoteRequest = useCallback((service: string) => {
    events.trackQuoteRequest(service)
  }, [])

  const trackWhatsAppClick = useCallback((source: string) => {
    events.trackWhatsAppClick(source)
  }, [])

  const trackContactClick = useCallback((method: 'email' | 'phone' | 'form') => {
    events.trackContactClick(method)
  }, [])

  const trackServiceView = useCallback((serviceName: string) => {
    events.trackServiceView(serviceName)
  }, [])

  const trackBlogRead = useCallback((postTitle: string, readTime?: number) => {
    events.trackBlogRead(postTitle, readTime)
  }, [])

  const trackDownloadReport = useCallback((reportName: string) => {
    events.trackDownloadReport(reportName)
  }, [])

  const trackLanguageChange = useCallback((newLanguage: string) => {
    events.trackLanguageChange(newLanguage)
  }, [])

  const trackCTAClick = useCallback((ctaName: string, location: string) => {
    events.trackCTAClick(ctaName, location)
  }, [])

  const trackNewsletterSignup = useCallback(() => {
    events.trackNewsletterSignup()
  }, [])

  const trackSocialShare = useCallback((platform: string, url: string) => {
    events.trackSocialShare(platform, url)
  }, [])

  const trackCaseStudyView = useCallback((caseStudyName: string) => {
    events.trackCaseStudyView(caseStudyName)
  }, [])

  const trackScrollDepth = useCallback((percentage: number) => {
    events.trackScrollDepth(percentage)
  }, [])

  return {
    trackFormSubmit,
    trackQuoteRequest,
    trackWhatsAppClick,
    trackContactClick,
    trackServiceView,
    trackBlogRead,
    trackDownloadReport,
    trackLanguageChange,
    trackCTAClick,
    trackNewsletterSignup,
    trackSocialShare,
    trackCaseStudyView,
    trackScrollDepth,
  }
}
