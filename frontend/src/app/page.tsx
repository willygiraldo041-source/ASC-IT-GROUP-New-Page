import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { About } from '@/components/sections/About'
import { CTA } from '@/components/sections/CTA'
import { Contact } from '@/components/sections/Contact'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { BackToTop } from '@/components/ui/BackToTop'
import { client } from '@/sanity/client'
import { SERVICES_QUERY, SETTINGS_QUERY } from '@/sanity/queries'
import type { Service, SiteSettings } from '@/types/sanity'

export const revalidate = 60 // Revalidar cada 60 segundos

export default async function Home() {
  // Fetch data from Sanity
  const [services, settings] = await Promise.all([
    client.fetch<Service[]>(SERVICES_QUERY),
    client.fetch<SiteSettings>(SETTINGS_QUERY),
  ])

  return (
    <>
      {/* Scroll Progress Bar */}
      <ScrollProgress />
      
      <Navbar settings={settings} />
      <main className="relative">
        <Hero />
        <Services services={services} />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer settings={settings} />
      
      {/* Floating Buttons */}
      {settings?.whatsappNumber && (
        <WhatsAppButton phoneNumber={settings.whatsappNumber} />
      )}
      <BackToTop />
    </>
  )
}
