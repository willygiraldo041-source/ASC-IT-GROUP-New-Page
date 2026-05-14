'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { ServiceDetailPage } from './ServiceDetailPage'

interface ServicePageClientProps {
  slug: string
  certifications: string[]
}

export function ServicePageClient({ slug, certifications }: ServicePageClientProps) {
  const { t, messages } = useLanguage()
  
  // Get service details from translations
  const serviceData = (messages as any)?.serviceDetails?.[slug]
  
  if (!serviceData) {
    return <div>Service not found</div>
  }

  return (
    <ServiceDetailPage
      title={serviceData.title}
      subtitle={serviceData.subtitle}
      description={Array.isArray(serviceData.description) ? serviceData.description : []}
      certifications={certifications}
      benefits={Array.isArray(serviceData.benefits) ? serviceData.benefits : []}
      cta={{
        title: serviceData.cta?.title || '',
        description: serviceData.cta?.description || '',
        buttonText: serviceData.cta?.buttonText || '',
        buttonLink: "/#contact"
      }}
    />
  )
}
