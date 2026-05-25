import { getServerSideSitemap } from 'next-sitemap'
import { client } from '@/sanity/client'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ascitgroup.com'

/**
 * Dynamic sitemap para contenido de Sanity CMS
 * Se regenera en cada request para incluir nuevo contenido
 */
export async function GET() {
  try {
    // Fetch blog posts from Sanity
    const blogPosts = await client.fetch<Array<{ slug: string; _updatedAt: string }>>(
      `*[_type == "post" && !(_id in path("drafts.**"))] {
        "slug": slug.current,
        _updatedAt
      }`
    )

    // Fetch case studies from Sanity
    const caseStudies = await client.fetch<Array<{ slug: string; _updatedAt: string }>>(
      `*[_type == "caseStudy" && !(_id in path("drafts.**"))] {
        "slug": slug.current,
        _updatedAt
      }`
    )

    // Generate fields for sitemap
    const blogFields = blogPosts.map((post) => ({
      loc: `${SITE_URL}/blog/${post.slug}`,
      lastmod: post._updatedAt,
      changefreq: 'weekly' as const,
      priority: 0.7,
    }))

    const caseStudyFields = caseStudies.map((study) => ({
      loc: `${SITE_URL}/case-studies/${study.slug}`,
      lastmod: study._updatedAt,
      changefreq: 'monthly' as const,
      priority: 0.8,
    }))

    return getServerSideSitemap([...blogFields, ...caseStudyFields])
  } catch (error) {
    console.error('Error generating server sitemap:', error)
    // Return empty sitemap on error
    return getServerSideSitemap([])
  }
}
