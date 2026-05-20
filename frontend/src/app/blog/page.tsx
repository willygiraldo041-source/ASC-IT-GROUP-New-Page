import { Metadata } from 'next'
import { BlogPageClient } from '@/components/blog/BlogPageClient'

export const metadata: Metadata = {
  title: 'Blog - ASC IT GROUP',
  description: 'Últimas noticias, artículos y recursos sobre ciberseguridad, pentesting y tecnología.',
}

export default function BlogPage() {
  return <BlogPageClient />
}
