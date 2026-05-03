import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/client'
import { POST_BY_SLUG_QUERY, RELATED_POSTS_QUERY } from '@/lib/sanity/queries'
import type { BlogPost, BlogPostPreview } from '@/types/blog'
import { Container } from '@/components/ui/Container'
import { PortableTextRenderer } from '@/components/blog/PortableTextRenderer'
import { getImageUrl, getOgImageUrl } from '@/lib/sanity/image'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, ArrowLeft, ArrowRight, Tag } from 'lucide-react'

export const revalidate = 60

interface PageProps {
  params: Promise<{ slug: string }>
}

async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    const post = await client.fetch(POST_BY_SLUG_QUERY, { slug }, { next: { tags: ['posts'] } })
    return post
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

async function getRelatedPosts(postId: string, categories: string[]): Promise<BlogPostPreview[]> {
  try {
    const posts = await client.fetch(
      RELATED_POSTS_QUERY,
      { postId, categories },
      { next: { tags: ['posts'] } }
    )
    return posts || []
  } catch (error) {
    console.error('Error fetching related posts:', error)
    return []
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return {
      title: 'Post no encontrado',
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
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  const categoryNames = post.categories?.map((cat) => cat.slug.current) || []
  const relatedPosts = await getRelatedPosts(post._id, categoryNames)

  return (
    <main className="relative pt-32 pb-24">
      <Container>
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al Blog
        </Link>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.categories.map((category) => (
                <Link
                  key={category._id}
                  href={`/blog/category/${category.slug.current}`}
                  className="text-sm font-medium px-4 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  {category.title}
                </Link>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-foreground/60 mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            {post.author && (
              <div className="flex items-center gap-3">
                {post.author.image?.asset && (
                  <Image
                    src={getImageUrl(post.author.image.asset, 40, 40)}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )}
                <div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span className="font-medium text-foreground">{post.author.name}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Featured Image */}
          {post.mainImage?.asset && (
            <div className="relative aspect-video rounded-xl overflow-hidden mb-12">
              <Image
                src={getImageUrl(post.mainImage.asset, 1200, 675)}
                alt={post.mainImage.alt || post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg prose-invert max-w-none mb-12">
            <PortableTextRenderer content={post.content} />
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-3 mb-12 pb-12 border-b border-border">
              <Tag className="h-5 w-5 text-foreground/60" />
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm px-3 py-1 rounded-full bg-secondary text-foreground/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Author Bio */}
          {post.author?.bio && (
            <div className="bg-card border border-border rounded-xl p-8 mb-12">
              <div className="flex items-start gap-6">
                {post.author.image?.asset && (
                  <Image
                    src={getImageUrl(post.author.image.asset, 80, 80)}
                    alt={post.author.name}
                    width={80}
                    height={80}
                    className="rounded-full flex-shrink-0"
                  />
                )}
                <div>
                  <h3 className="text-xl font-bold mb-2">Acerca de {post.author.name}</h3>
                  <div className="prose prose-invert">
                    <PortableTextRenderer content={post.author.bio} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="max-w-6xl mx-auto mt-16">
            <h2 className="text-3xl font-bold mb-8">Artículos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost._id}
                  href={`/blog/${relatedPost.slug.current}`}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
                >
                  {relatedPost.mainImage?.asset && (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={getImageUrl(relatedPost.mainImage.asset, 400, 300)}
                        alt={relatedPost.mainImage.alt || relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-foreground/60 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-medium mt-4 group-hover:gap-3 transition-all text-sm">
                      Leer más <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </main>
  )
}
