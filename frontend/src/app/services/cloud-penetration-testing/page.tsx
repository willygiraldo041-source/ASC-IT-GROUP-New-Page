import { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CloudPentestIndexClient } from '@/components/services/CloudPentestIndexClient'
import { client } from '@/sanity/client'
import { SETTINGS_QUERY } from '@/sanity/queries'
import type { SiteSettings } from '@/types/sanity'

export const metadata: Metadata = {
  title: 'Cloud Penetration Testing | ASC IT GROUP',
  description: 'Evaluaciones de seguridad especializadas para entornos cloud AWS, Azure y Google Cloud Platform.',
}

export default async function CloudPentestingPage() {
  const settings = await client.fetch<SiteSettings>(SETTINGS_QUERY)

  return (
    <>
      <Navbar settings={settings} />
      <CloudPentestIndexClient settings={settings} />
      <Footer settings={settings} />
    </>
  )
}
