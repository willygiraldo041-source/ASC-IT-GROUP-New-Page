export interface SiteSettings {
  _id: string
  siteName: string
  siteDescription: string
  logo?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  email: string
  phone: string
  whatsappNumber: string
  address: string
  socialLinks: {
    linkedin?: string
    twitter?: string
    github?: string
    facebook?: string
    instagram?: string
  }
}

export interface Service {
  _id: string
  title: string
  slug: string
  description: string
  features: string[]
  icon: string
  image?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  order: number
}

export interface CaseStudy {
  _id: string
  title: string
  slug: string
  client: string
  industry: string
  summary: string
  challenge?: string
  solution?: string
  results: string[]
  image?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  tags: string[]
  featured: boolean
  publishedAt: string
}
