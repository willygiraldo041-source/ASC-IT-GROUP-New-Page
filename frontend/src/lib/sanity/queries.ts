import {groq} from 'next-sanity'

// Get all blog posts with pagination
export const POSTS_QUERY = groq`*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  publishedAt,
  author->{
    name,
    slug,
    image {
      asset->{
        _id,
        url
      }
    }
  },
  categories[]->{
    title,
    slug
  },
  featured
}`

// Get a single post by slug
export const POST_BY_SLUG_QUERY = groq`*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  content,
  publishedAt,
  author->{
    name,
    slug,
    image {
      asset->{
        _id,
        url
      }
    },
    bio
  },
  categories[]->{
    title,
    slug,
    description
  },
  tags,
  featured,
  seo {
    metaTitle,
    metaDescription,
    ogImage {
      asset->{
        _id,
        url
      }
    }
  }
}`

// Get all categories
export const CATEGORIES_QUERY = groq`*[_type == "category"] | order(title asc) {
  _id,
  title,
  slug,
  description
}`

// Get posts by category
export const POSTS_BY_CATEGORY_QUERY = groq`*[_type == "blogPost" && $categorySlug in categories[]->slug.current] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  publishedAt,
  author->{
    name,
    slug,
    image {
      asset->{
        _id,
        url
      }
    }
  },
  categories[]->{
    title,
    slug
  }
}`

// Get featured posts
export const FEATURED_POSTS_QUERY = groq`*[_type == "blogPost" && featured == true] | order(publishedAt desc) [0...3] {
  _id,
  title,
  slug,
  excerpt,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  publishedAt,
  author->{
    name,
    slug
  },
  categories[]->{
    title,
    slug
  }
}`

// Get all authors
export const AUTHORS_QUERY = groq`*[_type == "author"] | order(name asc) {
  _id,
  name,
  slug,
  image {
    asset->{
      _id,
      url
    }
  },
  bio
}`

// Get related posts (same categories, excluding current post)
export const RELATED_POSTS_QUERY = groq`*[_type == "blogPost" && _id != $postId && count((categories[]->slug.current)[@ in $categories]) > 0] | order(publishedAt desc) [0...3] {
  _id,
  title,
  slug,
  excerpt,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  publishedAt,
  categories[]->{
    title,
    slug
  }
}`
