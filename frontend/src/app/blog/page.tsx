import { Metadata } from 'next'
import { client } from '@/sanity/client'
import { POSTS_QUERY } from '@/lib/sanity/queries'
import type { BlogPostPreview } from '@/types/blog'
import { Container } from '@/components/ui/Container'
import Link from 'next/link'
import Image from 'next/image'
import { getImageUrl } from '@/lib/sanity/image'
import { Calendar, User, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog - ASC IT GROUP',
  description: 'Últimas noticias, artículos y recursos sobre ciberseguridad, pentesting y tecnología.',
}

export const revalidate = 60 // Revalidar cada 60 segundos

async function getBlogPosts(): Promise<BlogPostPreview[]> {
  try {
    const posts = await client.fetch(POSTS_QUERY, {}, { next: { tags: ['posts'] } })
    console.log('📝 Posts obtenidos de Sanity:', posts)
    console.log('📊 Cantidad de posts:', posts?.length || 0)
    return posts || []
  } catch (error) {
    console.error('❌ Error fetching posts:', error)
    return []
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

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <main className="relative">
      {/* Hero Section with Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
        
        {/* Content */}
        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto py-20">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Blog de Ciberseguridad
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Descubre las últimas tendencias, mejores prácticas y noticias del mundo de la ciberseguridad
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Pentesting
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Red Team
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Seguridad Cloud
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Posts Section */}
      <section className="py-24 bg-gradient-to-b from-transparent to-background/50">
        <Container>

        {/* Posts Grid */}
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-foreground/60 text-lg">
              No hay posts publicados aún. ¡Pronto habrá contenido nuevo!
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
                      <span>{formatDate(post.publishedAt)}</span>
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
                    Leer más <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
        </Container>
      </section>
    </main>
  )
}
