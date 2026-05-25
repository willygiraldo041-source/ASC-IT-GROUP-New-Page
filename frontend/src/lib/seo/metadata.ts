import type { Metadata } from 'next'
import type { SEOConfig } from '@/types/seo'
import { defaultSEO, SITE_URL, SITE_NAME } from './config'

/**
 * Genera metadata de Next.js desde configuración SEO
 */
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
      languages: {
        'es-ES': `${SITE_URL}/es`,
        'en-US': `${SITE_URL}/en`,
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
      locale: seo.openGraph.locale || 'es_ES',
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

/**
 * Genera metadata para páginas de servicios
 */
export function generateServiceMetadata(
  serviceName: string,
  description: string,
  slug: string
): Metadata {
  return generateMetadata({
    title: `${serviceName} | ASC IT GROUP`,
    description,
    keywords: [
      serviceName.toLowerCase(),
      'cybersecurity',
      'pentesting',
      'security services',
      'ciberseguridad',
    ],
    canonical: `${SITE_URL}/services/${slug}`,
    openGraph: {
      type: 'website',
      title: `${serviceName} | ASC IT GROUP`,
      description,
      url: `${SITE_URL}/services/${slug}`,
      siteName: SITE_NAME,
      images: [
        {
          url: `${SITE_URL}/og-images/services/${slug}.jpg`,
          width: 1200,
          height: 630,
          alt: serviceName,
        },
      ],
    },
  })
}

/**
 * Genera metadata para blog posts
 */
export function generateBlogMetadata(
  title: string,
  description: string,
  slug: string,
  publishedDate?: string,
  image?: string
): Metadata {
  return generateMetadata({
    title: `${title} | Blog ASC IT GROUP`,
    description,
    keywords: ['cybersecurity blog', 'security insights', 'pentesting guide'],
    canonical: `${SITE_URL}/blog/${slug}`,
    openGraph: {
      type: 'article',
      title,
      description,
      url: `${SITE_URL}/blog/${slug}`,
      siteName: SITE_NAME,
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : undefined,
    },
  })
}
