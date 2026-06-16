import { Metadata } from 'next'
import { PenetrationTestingIndexClient } from '@/components/services/PenetrationTestingIndexClient'
import { client } from '@/sanity/client'
import { SETTINGS_QUERY } from '@/sanity/queries'
import type { SiteSettings } from '@/types/sanity'

export const metadata: Metadata = {
  title: 'Penetration Testing | ASC IT GROUP',
  description: 'Servicios completos de Penetration Testing para identificar vulnerabilidades en tu infraestructura antes que los atacantes.',
}

export default async function PenetrationTestingPage() {
  let settings: SiteSettings | null = null
  
  try {
    settings = await client.fetch<SiteSettings>(SETTINGS_QUERY)
  } catch (error) {
    console.log('⚠️ Sanity CMS no disponible, usando datos por defecto')
  }

  return (
    <PenetrationTestingIndexClient settings={settings} />
  )
}
