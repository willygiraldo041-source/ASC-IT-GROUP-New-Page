import { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CaseStudiesClient } from '@/components/case-studies/CaseStudiesClient'
import { client } from '@/sanity/client'
import { SETTINGS_QUERY } from '@/sanity/queries'
import type { SiteSettings } from '@/types/sanity'

export const metadata: Metadata = {
  title: 'Casos de Éxito | ASC IT GROUP',
  description: 'Descubre cómo hemos ayudado a organizaciones a fortalecer su postura de seguridad, optimizar procesos y transformar la gestión del riesgo.',
}

export default async function CaseStudiesPage() {
  let settings: SiteSettings | null = null
  
  try {
    settings = await client.fetch<SiteSettings>(SETTINGS_QUERY)
  } catch (error) {
    console.log('⚠️ Sanity CMS no disponible, usando datos por defecto')
  }

  return (
    <>
      <Navbar settings={settings} />
      <CaseStudiesClient settings={settings} />
      <Footer settings={settings} />
    </>
  )
}
