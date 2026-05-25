'use client'

import { useState, useEffect } from 'react'
import { client } from '@/sanity/client'
import { POSTS_QUERY } from '@/lib/sanity/queries'
import { SETTINGS_QUERY } from '@/sanity/queries'
import type { BlogPostPreview } from '@/types/blog'
import type { SiteSettings } from '@/types/sanity'
import { Container } from '@/components/ui/Container'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { BlogHero } from '@/components/blog/BlogHero'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import Image from 'next/image'
import { getImageUrl } from '@/lib/sanity/image'
import { Calendar, User, ArrowRight } from 'lucide-react'

function formatDate(dateString: string, locale: 'es' | 'en') {
  const date = new Date(dateString)
  return date.toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function BlogPageClient() {
  const { locale, t } = useLanguage()
  const [posts, setPosts] = useState<BlogPostPreview[]>([])
  const [settings, setSettings] = useState<SiteSettings | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        const [fetchedPosts, fetchedSettings] = await Promise.all([
          client.fetch<BlogPostPreview[]>(POSTS_QUERY, { language: locale }).catch(() => []),
          client.fetch<SiteSettings>(SETTINGS_QUERY).catch(() => null)
        ])
        
        console.log(`📝 Posts obtenidos (${locale}):`, fetchedPosts)
        console.log('📊 Cantidad de posts:', fetchedPosts?.length || 0)
        
        setPosts(fetchedPosts || [])
        setSettings(fetchedSettings)
      } catch (error) {
        console.log('⚠️ Sanity CMS no disponible, usando datos por defecto')
        setPosts([])
        setSettings(null)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [locale])

  return (
    <>
      <Navbar settings={settings} />
      <main className="relative">
        <BlogHero />

        {/* Posts Section */}
        <section className="py-24 bg-gradient-to-b from-transparent to-background/50">
          <Container>
            {loading ? (
              <div className="text-center py-16">
                <p className="text-foreground/60 text-lg">{t('common.loading')}</p>
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-foreground/60 text-lg">
                  {t('blog.noPosts')}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Link
                    key={post._id}
                    href={`/blog/${post.slug.current}`}
                    className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
                  >
                    {/* Image */}
                    {post.mainImage?.asset && (
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={getImageUrl(post.mainImage.asset, 600, 400)}
                          alt={post.mainImage.alt || post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6">
                      {/* Categories */}
                      {post.categories && post.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.categories.slice(0, 2).map((category) => (
                            <span
                              key={category._id}
                              className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary"
                            >
                              {category.title}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Title */}
                      <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-foreground/60 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm text-foreground/60 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(post.publishedAt, locale)}</span>
                        </div>
                        {post.author && (
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{post.author.name}</span>
                          </div>
                        )}
                      </div>

                      {/* Read More */}
                      <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                        {t('common.readMore')} <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </Container>
        </section>
      </main>
      <Footer settings={settings} />
    </>
  )
}
