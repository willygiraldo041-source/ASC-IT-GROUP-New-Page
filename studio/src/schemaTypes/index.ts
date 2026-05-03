// Documents
import settings from './documents/settings'
import service from './documents/service'
import caseStudy from './documents/caseStudy'
import blogPost from './documents/blogPost'
import testimonial from './documents/testimonial'

// Blog schemas
import author from './author'
import category from './category'

export const schemaTypes = [
  // Site Settings (Singleton)
  settings,
  
  // Content Types
  service,
  caseStudy,
  blogPost,
  testimonial,
  
  // Blog
  author,
  category,
]
