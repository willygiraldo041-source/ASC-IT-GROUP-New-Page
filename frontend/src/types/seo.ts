export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  languages?: Record<string, string>
  openGraph?: OpenGraphConfig
  twitter?: TwitterConfig
  jsonLd?: JsonLdSchema | JsonLdSchema[]
}

export interface OpenGraphConfig {
  type: 'website' | 'article' | 'profile'
  title: string
  description: string
  url: string
  siteName: string
  images?: OpenGraphImage[]
  locale?: string
  alternateLocale?: string[]
}

export interface OpenGraphImage {
  url: string
  width?: number
  height?: number
  alt?: string
  type?: string
}

export interface TwitterConfig {
  card: 'summary' | 'summary_large_image' | 'app' | 'player'
  site?: string
  creator?: string
  title?: string
  description?: string
  images?: string[]
}

export type JsonLdSchema =
  | OrganizationSchema
  | WebSiteSchema
  | ServiceSchema
  | BlogPostingSchema
  | BreadcrumbSchema
  | FAQPageSchema

export interface OrganizationSchema {
  '@context': 'https://schema.org'
  '@type': 'Organization'
  name: string
  url: string
  logo?: string
  description?: string
  address?: {
    '@type': 'PostalAddress'
    streetAddress?: string
    addressLocality: string
    addressRegion?: string
    postalCode?: string
    addressCountry: string
  }
  contactPoint?: {
    '@type': 'ContactPoint'
    telephone: string
    contactType: string
    email?: string
  }
  sameAs?: string[]
}

export interface WebSiteSchema {
  '@context': 'https://schema.org'
  '@type': 'WebSite'
  name: string
  url: string
  description?: string
  publisher?: {
    '@type': 'Organization'
    name: string
  }
  potentialAction?: {
    '@type': 'SearchAction'
    target: string
    'query-input': string
  }
}

export interface ServiceSchema {
  '@context': 'https://schema.org'
  '@type': 'Service'
  name: string
  description: string
  provider: {
    '@type': 'Organization'
    name: string
    url: string
  }
  serviceType: string
  areaServed?: string
  offers?: {
    '@type': 'Offer'
    price?: string
    priceCurrency?: string
    availability?: string
  }
}

export interface BlogPostingSchema {
  '@context': 'https://schema.org'
  '@type': 'BlogPosting'
  headline: string
  description: string
  image?: string
  author: {
    '@type': 'Person' | 'Organization'
    name: string
  }
  publisher: {
    '@type': 'Organization'
    name: string
    logo?: {
      '@type': 'ImageObject'
      url: string
    }
  }
  datePublished: string
  dateModified?: string
  mainEntityOfPage?: string
}

export interface BreadcrumbSchema {
  '@context': 'https://schema.org'
  '@type': 'BreadcrumbList'
  itemListElement: Array<{
    '@type': 'ListItem'
    position: number
    name: string
    item?: string
  }>
}

export interface FAQPageSchema {
  '@context': 'https://schema.org'
  '@type': 'FAQPage'
  mainEntity: Array<{
    '@type': 'Question'
    name: string
    acceptedAnswer: {
      '@type': 'Answer'
      text: string
    }
  }>
}
