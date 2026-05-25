import { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ApplicationNetworkIndexClient } from '@/components/services/ApplicationNetworkIndexClient'
import { client } from '@/sanity/client'
import { SETTINGS_QUERY } from '@/sanity/queries'
import type { SiteSettings } from '@/types/sanity'

export const metadata: Metadata = {
  title: 'Application and Network Security | ASC IT GROUP',
  description: 'Protección integral de aplicaciones y redes contra amenazas cibernéticas avanzadas.',
}

export default async function ApplicationNetworkSecurityPage() {
  const settings = await client.fetch<SiteSettings>(SETTINGS_QUERY)

  return (
    <>
      <Navbar settings={settings} />
      <ApplicationNetworkIndexClient settings={settings} />
      <Footer settings={settings} />
    </>
  )
}
