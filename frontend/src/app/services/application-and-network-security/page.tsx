import { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ApplicationNetworkIndexClient } from '@/components/services/ApplicationNetworkIndexClient'
import { getSiteSettings } from '@/lib/sanity/queries'
import type { SiteSettings } from '@/types/sanity'

export const metadata: Metadata = {
  title: 'Application and Network Security | ASC IT GROUP',
  description: 'Protección integral de aplicaciones y redes contra amenazas cibernéticas avanzadas.',
}

export default async function ApplicationNetworkSecurityPage() {
  const settings: SiteSettings | null = await getSiteSettings()

  return (
    <>
      <Navbar settings={settings} />
      <ApplicationNetworkIndexClient settings={settings} />
      <Footer settings={settings} />
    </>
  )
}
