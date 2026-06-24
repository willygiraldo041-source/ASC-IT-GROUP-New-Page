import type { Metadata } from 'next'
import type { SEOConfig, ServiceSchema, BreadcrumbSchema } from '@/types/seo'
import { defaultSEO, SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from './config'

export function generateMetadata(config: Partial<SEOConfig>): Metadata {
  const seo = { ...defaultSEO, ...config }

  const metadata: Metadata = {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: seo.canonical || SITE_URL,
      languages: seo.languages || {
        'es': SITE_URL,
        'en': `${SITE_URL}/en`,
        'x-default': SITE_URL,
      },
    },
  }

  // Open Graph
  if (seo.openGraph) {
    metadata.openGraph = {
      type: seo.openGraph.type || 'website',
      title: seo.openGraph.title,
      description: seo.openGraph.description,
      url: seo.openGraph.url,
      siteName: seo.openGraph.siteName,
      locale: seo.openGraph.locale || 'es_CO',
      alternateLocale: seo.openGraph.alternateLocale || ['en_US'],
      images: seo.openGraph.images || [],
    }
  }

  // Twitter
  if (seo.twitter) {
    metadata.twitter = {
      card: seo.twitter.card,
      site: seo.twitter.site,
      creator: seo.twitter.creator,
      title: seo.twitter.title || seo.title,
      description: seo.twitter.description || seo.description,
      images: seo.twitter.images || [],
    }
  }

  return metadata
}

const COLOMBIAN_KEYWORDS = [
  'ciberseguridad Colombia',
  'pentest Colombia',
  'seguridad informática Colombia',
  'hacking ético Colombia',
  'empresa ciberseguridad Colombia',
]

export function generateServiceMetadata(
  serviceName: string,
  description: string,
  slug: string,
  keywords?: string[]
): Metadata {
  const canonicalUrl = `${SITE_URL}/services/${slug}`
  return generateMetadata({
    title: `${serviceName} | ASC IT GROUP`,
    description,
    keywords: [...(keywords ?? [serviceName.toLowerCase()]), ...COLOMBIAN_KEYWORDS],
    canonical: canonicalUrl,
    languages: {
      'es': canonicalUrl,
      'en': `${SITE_URL}/en/services/${slug}`,
      'x-default': canonicalUrl,
    },
    openGraph: {
      type: 'website',
      title: `${serviceName} | ASC IT GROUP`,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 800,
          height: 600,
          alt: `${serviceName} - ASC IT GROUP Colombia`,
          type: 'image/png',
        },
      ],
    },
  })
}

export function generateBlogMetadata(
  title: string,
  description: string,
  slug: string,
  publishedDate?: string,
  image?: string
): Metadata {
  const canonicalUrl = `${SITE_URL}/blog/${slug}`
  return generateMetadata({
    title: `${title} | Blog ASC IT GROUP`,
    description,
    keywords: ['cybersecurity blog', 'security insights', 'pentesting guide', 'ciberseguridad Colombia'],
    canonical: canonicalUrl,
    languages: {
      'es': canonicalUrl,
      'en': `${SITE_URL}/en/blog/${slug}`,
      'x-default': canonicalUrl,
    },
    openGraph: {
      type: 'article',
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: image
        ? [{ url: image, width: 1200, height: 630, alt: title }]
        : undefined,
    },
  })
}

export function createServiceSchema(
  name: string,
  description: string,
  serviceType: string
): ServiceSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    serviceType,
    areaServed: 'Colombia',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
    },
  }
}

export function createBreadcrumbSchema(
  items: Array<{ name: string; url?: string }>
): BreadcrumbSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
