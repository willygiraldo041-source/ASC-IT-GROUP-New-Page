import type { SEOConfig, OrganizationSchema, WebSiteSchema } from '@/types/seo'

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ascitgroup.com'
export const SITE_NAME = 'ASC IT GROUP'
export const SITE_DESCRIPTION =
  'Empresa de ciberseguridad en Colombia. Servicios de Penetration Testing, Red Team, Auditorías de Seguridad y Cloud Security para empresas colombianas y latinoamericanas.'

export const DEFAULT_OG_IMAGE = `${SITE_URL}/LogoASCfinal.png`

// SEO por defecto
export const defaultSEO: SEOConfig = {
  title: 'ASC IT GROUP | Empresa de Ciberseguridad en Colombia',
  description: SITE_DESCRIPTION,
  keywords: [
    'ciberseguridad Colombia',
    'empresa ciberseguridad Colombia',
    'pentest Colombia',
    'penetration testing Colombia',
    'red team Colombia',
    'seguridad informática Colombia',
    'hacking ético Colombia',
    'auditoría seguridad Colombia',
    'seguridad en la nube Colombia',
    'consultoría ciberseguridad',
    'ciberseguridad empresarial',
    'cybersecurity Latin America',
  ],
  canonical: SITE_URL,
  openGraph: {
    type: 'website',
    title: 'ASC IT GROUP | Empresa de Ciberseguridad en Colombia',
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 800,
        height: 600,
        alt: 'ASC IT GROUP - Empresa de Ciberseguridad en Colombia',
        type: 'image/png',
      },
    ],
    locale: 'es_CO',
    alternateLocale: ['en_US'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ascitgroup',
    creator: '@ascitgroup',
    title: 'ASC IT GROUP | Empresa de Ciberseguridad en Colombia',
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
