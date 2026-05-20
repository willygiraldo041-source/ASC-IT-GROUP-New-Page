import { PortableTextBlock } from '@portabletext/react'

export interface BlogAuthor {
  _id: string
  name: string
  slug: {
    current: string
  }
  image?: {
    asset: {
      _id: string
      url: string
    }
  }
  bio?: PortableTextBlock[]
}

export interface BlogCategory {
  _id: string
  title: string
  slug: {
    current: string
  }
  description?: string
}

export interface BlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  mainImage?: {
    asset: {
      _id: string
      url: string
    }
    alt?: string
  }
  content: PortableTextBlock[]
  author?: BlogAuthor
  categories?: BlogCategory[]
  tags?: string[]
  publishedAt: string
  featured?: boolean
  language: 'es' | 'en'
  seo?: {
    metaTitle?: string
    metaDescription?: string
    ogImage?: {
      asset: {
        _id: string
        url: string
      }
    }
  }
}

export interface BlogPostPreview {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  mainImage?: {
    asset: {
      _id: string
      url: string
    }
    alt?: string
  }
  publishedAt: string
  author?: {
    name: string
    slug: {
      current: string
    }
    image?: {
      asset: {
        _id: string
        url: string
      }
    }
  }
  categories?: BlogCategory[]
  featured?: boolean
  language: 'es' | 'en'
}
