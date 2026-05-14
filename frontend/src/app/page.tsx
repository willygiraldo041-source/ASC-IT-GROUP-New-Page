import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HomeClient } from '@/components/pages/HomeClient'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { BackToTop } from '@/components/ui/BackToTop'
import { client } from '@/sanity/client'
import { SERVICES_QUERY, SETTINGS_QUERY } from '@/sanity/queries'
import type { Service, SiteSettings } from '@/types/sanity'


export default async function Home() {
  // Fetch data from Sanity with fallback
  let services: Service[] = []
  let settings: SiteSettings | null = null
  
  try {
    [services, settings] = await Promise.all([
      client.fetch<Service[]>(SERVICES_QUERY),
      client.fetch<SiteSettings>(SETTINGS_QUERY),
    ])
  } catch (error) {
    console.log('Sanity fetch failed, using default data:', error)
    // Fallback to default data if Sanity is unavailable
    services = []
    settings = null
  }

  return (
    <>
      {/* Scroll Progress Bar */}
      <ScrollProgress />
      
      <Navbar settings={settings} />
      <HomeClient services={services} />
      <Footer settings={settings} />
      
      {/* Floating Buttons */}
      {settings?.whatsappNumber && (
        <WhatsAppButton phoneNumber={settings.whatsappNumber} />
      )}
      <BackToTop />
    </>
  )
}
