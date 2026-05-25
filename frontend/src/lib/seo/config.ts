import type { SEOConfig, OrganizationSchema, WebSiteSchema } from '@/types/seo'

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ascitgroup.com'
export const SITE_NAME = 'ASC IT GROUP'
export const SITE_DESCRIPTION =
  'Expertos en Ciberseguridad y Pentesting. Ofrecemos servicios de Penetration Testing, Red Team, Auditorías de Seguridad y Consultoría en Cloud Security.'

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`

// SEO por defecto
export const defaultSEO: SEOConfig = {
  title: 'ASC IT GROUP | Cybersecurity & Penetration Testing Experts',
  description: SITE_DESCRIPTION,
  keywords: [
    'cybersecurity',
    'pentesting',
    'penetration testing',
    'red team',
    'security audit',
    'ethical hacking',
    'ciberseguridad',
    'hacking ético',
    'seguridad informática',
    'consultoría seguridad',
  ],
  canonical: SITE_URL,
  openGraph: {
    type: 'website',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'ASC IT GROUP - Cybersecurity Experts',
        type: 'image/jpeg',
      },
    ],
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ascitgroup',
    creator: '@ascitgroup',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
}

// Schema.org Organization
export const organizationSchema: OrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: SITE_DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bogotá',
    addressCountry: 'CO',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+57-314-795-0662',
    contactType: 'customer service',
    email: 'sac@ascitgroup.com',
  },
  sameAs: [
    'https://www.linkedin.com/company/ascitgroup',
    'https://twitter.com/ascitgroup',
    'https://www.facebook.com/ascitgroup',
  ],
}

// Schema.org WebSite
export const websiteSchema: WebSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}
