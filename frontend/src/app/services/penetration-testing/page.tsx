import { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { PenetrationTestingIndexClient } from '@/components/services/PenetrationTestingIndexClient'
import { client } from '@/sanity/client'
import { SETTINGS_QUERY } from '@/sanity/queries'
import type { SiteSettings } from '@/types/sanity'

export const metadata: Metadata = {
  title: 'Penetration Testing | ASC IT GROUP',
  description: 'Servicios completos de Penetration Testing para identificar vulnerabilidades en tu infraestructura antes que los atacantes.',
}

export default async function PenetrationTestingPage() {
  const settings = await client.fetch<SiteSettings>(SETTINGS_QUERY)

  return (
    <>
      <Navbar settings={settings} />
      <PenetrationTestingIndexClient settings={settings} />
      <Footer settings={settings} />
    </>
  )
}
