'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { client } from '@/sanity/client'
import { POST_BY_SLUG_QUERY, RELATED_POSTS_QUERY } from '@/lib/sanity/queries'
import type { BlogPost, BlogPostPreview } from '@/types/blog'
import { Container } from '@/components/ui/Container'
import { PortableTextRenderer } from '@/components/blog/PortableTextRenderer'
import { getImageUrl } from '@/lib/sanity/image'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, ArrowLeft, ArrowRight, Tag } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

interface BlogPostClientProps {
  slug: string
}

function formatDate(dateString: string, locale: 'es' | 'en') {
  const date = new Date(dateString)
  return date.toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function BlogPostClient({ slug }: BlogPostClientProps) {
  const { locale, t } = useLanguage()
  const router = useRouter()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<BlogPostPreview[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        const fetchedPost = await client.fetch<BlogPost>(
          POST_BY_SLUG_QUERY,
          { slug, language: locale }
        )
        
        if (!fetchedPost) {
          router.push('/blog')
          return
        }

        setPost(fetchedPost)

        // Fetch related posts
        const categories = fetchedPost.categories?.map(c => c.slug.current) || []
        const related = await client.fetch<BlogPostPreview[]>(
          RELATED_POSTS_QUERY,
          { postId: fetchedPost._id, categories, language: locale }
        )
        setRelatedPosts(related || [])
      } catch (error) {
        console.error('Error fetching post:', error)
        router.push('/blog')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [slug, locale, router])

  if (loading) {
    return (
      <main className="relative py-32 min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
        <Container>
          <div className="text-center">
            <p className="text-gray-400">{t('common.loading')}</p>
          </div>
        </Container>
      </main>
    )
  }

  if (!post) {
    return null
  }

  return (
    <main className="relative py-32 min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <Container>
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          {t('common.backToHome')}
        </Link>

        <article>
          {/* Header */}
          <header className="mb-12">
            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.categories.map((category) => (
                  <span
                    key={category._id}
                    className="text-sm font-medium px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              {post.title}
            </h1>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-xl text-gray-300 mb-8">{post.excerpt}</p>
            )}

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{formatDate(post.publishedAt, locale)}</span>
              </div>
              {post.author && (
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>{post.author.name}</span>
                </div>
              )}
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 text-sm text-gray-400"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Featured Image */}
          {post.mainImage?.asset && (
            <div className="relative w-full h-96 mb-12 rounded-2xl overflow-hidden">
              <Image
                src={getImageUrl(post.mainImage.asset, 1200, 600)}
                alt={post.mainImage.alt || post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg prose-invert max-w-none mb-16">
            <PortableTextRenderer content={post.content} />
          </div>

          {/* Author Bio */}
          {post.author?.bio && (
            <div className="border-t border-gray-800 pt-8 mb-16">
              <div className="flex gap-4">
                {post.author.image?.asset && (
                  <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={getImageUrl(post.author.image.asset, 80, 80)}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {post.author.name}
                  </h3>
                  <div className="prose prose-sm prose-invert">
                    <PortableTextRenderer content={post.author.bio} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-white mb-8">
              {locale === 'es' ? 'Artículos Relacionados' : 'Related Articles'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost._id}
                  href={`/blog/${relatedPost.slug.current}`}
                  className="group"
                >
                  {relatedPost.mainImage?.asset && (
                    <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={getImageUrl(relatedPost.mainImage.asset, 400, 300)}
                        alt={relatedPost.mainImage.alt || relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-400 mt-2 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-blue-400 font-medium">
                    {t('common.readMore')} <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </Container>
    </main>
  )
}
