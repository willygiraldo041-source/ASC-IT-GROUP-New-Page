export const defaultSEO = {
  titleTemplate: '%s | ASC IT GROUP',
  defaultTitle: 'ASC IT GROUP - Cybersecurity & Ethical Hacking Experts',
  description:
    'Professional penetration testing, red team operations, and security audits. Protect your business with expert cybersecurity services from ASC IT GROUP.',
  canonical: 'https://ascitgroup.com',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://ascitgroup.com',
    siteName: 'ASC IT GROUP',
    title: 'ASC IT GROUP - Cybersecurity & Ethical Hacking Experts',
    description:
      'Professional penetration testing, red team operations, and security audits.',
    images: [
      {
        url: 'https://ascitgroup.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ASC IT GROUP - Cybersecurity Experts',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    handle: '@ascitgroup',
    site: '@ascitgroup',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=5',
    },
    {
      name: 'theme-color',
      content: '#0a0a0a',
    },
    {
      name: 'keywords',
      content:
        'cybersecurity, pentesting, penetration testing, red team, blue team, security audit, ethical hacking, vulnerability assessment, incident response',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ASC IT GROUP',
  url: 'https://ascitgroup.com',
  logo: 'https://ascitgroup.com/logo.png',
  description:
    'Professional cybersecurity services including penetration testing, red team operations, and security audits.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+57-XXX-XXX-XXXX',
    contactType: 'Customer Service',
    availableLanguage: ['Spanish', 'English'],
  },
  sameAs: [
    'https://www.linkedin.com/company/ascitgroup',
    'https://twitter.com/ascitgroup',
  ],
}
