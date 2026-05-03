import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/client'

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Helper to get optimized image URL
export function getImageUrl(source: any, width?: number, height?: number) {
  let urlBuilder = builder.image(source).auto('format').quality(90)
  
  if (width) urlBuilder = urlBuilder.width(width)
  if (height) urlBuilder = urlBuilder.height(height)
  
  return urlBuilder.url()
}

// Helper for Open Graph images
export function getOgImageUrl(source: any) {
  return builder
    .image(source)
    .width(1200)
    .height(630)
    .fit('crop')
    .auto('format')
    .quality(90)
    .url()
}
