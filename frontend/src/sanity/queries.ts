// Settings query
export const SETTINGS_QUERY = `*[_type == "settings"][0]{
  _id,
  siteName,
  siteDescription,
  logo,
  email,
  phone,
  whatsappNumber,
  address,
  socialLinks
}`

// Services query
export const SERVICES_QUERY = `*[_type == "service"] | order(order asc){
  _id,
  title,
  "slug": slug.current,
  description,
  features,
  icon,
  image,
  order
}`

// Single service query
export const SERVICE_QUERY = `*[_type == "service" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  description,
  icon,
  features,
  image
}`

// Case Studies query
export const CASE_STUDIES_QUERY = `*[_type == "caseStudy"] | order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  client,
  industry,
  summary,
  results,
  image,
  tags,
  featured,
  publishedAt
}`

// Featured Case Studies query
export const FEATURED_CASE_STUDIES_QUERY = `*[_type == "caseStudy" && featured == true] | order(publishedAt desc)[0...3]{
  _id,
  title,
  "slug": slug.current,
  client,
  industry,
  summary,
  results,
  image,
  tags,
  publishedAt
}`
