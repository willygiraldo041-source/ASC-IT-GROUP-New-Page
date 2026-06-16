import { Metadata } from 'next'
import { client } from '@/sanity/client'
import { POST_BY_SLUG_QUERY } from '@/lib/sanity/queries'
import type { BlogPost } from '@/types/blog'
import { getOgImageUrl } from '@/lib/sanity/image'
import { BlogPostClient } from '@/components/blog/BlogPostClient'

export const dynamicParams = false

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "blogPost"]{ "slug": slug.current }`)
  return posts.map((post: { slug: string }) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  
  // Fetch post for metadata (using default language 'es')
  try {
    const post = await client.fetch<BlogPost>(
      POST_BY_SLUG_QUERY, 
      { slug, language: 'es' },
      { next: { tags: ['posts'] } }
    )

    if (!post) {
      return {
        title: 'Post no encontrado | ASC IT GROUP',
      }
    }

    const ogImage = post.seo?.ogImage?.asset
      ? getOgImageUrl(post.seo.ogImage.asset)
      : post.mainImage?.asset
      ? getOgImageUrl(post.mainImage.asset)
      : undefined

    return {
      title: post.seo?.metaTitle || `${post.title} - Blog ASC IT GROUP`,
      description: post.seo?.metaDescription || post.excerpt,
      openGraph: {
        title: post.seo?.metaTitle || post.title,
        description: post.seo?.metaDescription || post.excerpt,
        images: ogImage ? [{ url: ogImage }] : undefined,
        type: 'article',
        publishedTime: post.publishedAt,
      },
    }
  } catch (error) {
    console.error('Error generating metadata:', error)
    return {
      title: 'Blog | ASC IT GROUP',
    }
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params

  return <BlogPostClient slug={slug} />
}
