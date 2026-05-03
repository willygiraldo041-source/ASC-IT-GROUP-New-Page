import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/client'
import { POSTS_BY_CATEGORY_QUERY, CATEGORIES_QUERY } from '@/lib/sanity/queries'
import type { BlogPostPreview, BlogCategory } from '@/types/blog'
import { Container } from '@/components/ui/Container'
import Link from 'next/link'
import Image from 'next/image'
import { getImageUrl } from '@/lib/sanity/image'
import { Calendar, User, ArrowRight, ArrowLeft } from 'lucide-react'

export const revalidate = 60

interface PageProps {
  params: Promise<{ slug: string }>
}

async function getCategory(slug: string): Promise<BlogCategory | null> {
  try {
    const categories = await client.fetch(CATEGORIES_QUERY)
    return categories.find((cat: BlogCategory) => cat.slug.current === slug) || null
  } catch (error) {
    console.error('Error fetching category:', error)
    return null
  }
}

async function getPostsByCategory(categorySlug: string): Promise<BlogPostPreview[]> {
  try {
    const posts = await client.fetch(
      POSTS_BY_CATEGORY_QUERY,
      { categorySlug },
      { next: { tags: ['posts'] } }
    )
    return posts || []
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const category = await getCategory(slug)

  if (!category) {
    return {
      title: 'Categoría no encontrada',
    }
  }

  return {
    title: `${category.title} - Blog ASC IT GROUP`,
    description: category.description || `Artículos sobre ${category.title}`,
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

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params
  const category = await getCategory(slug)

  if (!category) {
    notFound()
  }

  const posts = await getPostsByCategory(slug)

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

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.title}</h1>
          {category.description && (
            <p className="text-lg text-foreground/60 max-w-3xl">
              {category.description}
            </p>
          )}
        </div>

        {/* Posts Grid */}
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-foreground/60 text-lg">
              No hay posts en esta categoría aún.
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

                <div className="p-6">
                  {post.categories && post.categories.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.categories.slice(0, 2).map((cat) => (
                        <span
                          key={cat._id}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary"
                        >
                          {cat.title}
                        </span>
                      ))}
                    </div>
                  )}

                  <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-foreground/60 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-foreground/60 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                    {post.author && (
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author.name}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    Leer más <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </main>
  )
}
