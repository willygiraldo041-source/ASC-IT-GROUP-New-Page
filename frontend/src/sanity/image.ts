import imageUrlBuilder from '@sanity/image-url'
import { client } from './client'

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

export function getImageDimensions(source: any) {
  const dimensions = builder.image(source).toString().match(/(\d+)x(\d+)/)
  if (!dimensions) return { width: 800, height: 600, aspectRatio: 4 / 3 }
  
  const width = parseInt(dimensions[1], 10)
  const height = parseInt(dimensions[2], 10)
  
  return {
    width,
    height,
    aspectRatio: width / height,
  }
}
