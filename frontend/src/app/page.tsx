import type { Metadata } from 'next'
import { HomeClient } from '@/components/pages/HomeClient'
import { FloatingButtons } from '@/components/ui/FloatingButtons'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { client } from '@/sanity/client'
import { SERVICES_QUERY, SETTINGS_QUERY } from '@/sanity/queries'
import type { Service, SiteSettings } from '@/types/sanity'
import { generateMetadata as genMetadata } from '@/lib/seo/metadata'
import { SITE_URL, DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/seo/config'

export const metadata: Metadata = genMetadata({
  title: 'ASC IT GROUP | Empresa de Ciberseguridad en Colombia',
  description:
    'ASC IT GROUP: empresa colombiana de ciberseguridad especializada en Penetration Testing, Red Team, Cloud Security y Automatización. Protegemos empresas en Colombia y Latinoamérica.',
  keywords: [
    'empresa ciberseguridad Colombia',
    'pentest Colombia',
    'red team Colombia',
    'seguridad en la nube Colombia',
    'ciberseguridad empresarial Colombia',
    'hacking ético Colombia',
    'auditoría seguridad Colombia',
    'consultoría ciberseguridad',
    'penetration testing Colombia',
    'cybersecurity company Colombia',
  ],
  canonical: SITE_URL,
  languages: {
    'es': SITE_URL,
    'en': `${SITE_URL}/en`,
    'x-default': SITE_URL,
  },
  openGraph: {
    type: 'website',
    title: 'ASC IT GROUP | Empresa de Ciberseguridad en Colombia',
    description:
      'Expertos en Penetration Testing, Red Team y Cloud Security para empresas colombianas y latinoamericanas. Certificaciones OSCP, OSWE, CRTO y más.',
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 800,
        height: 600,
        alt: 'ASC IT GROUP - Empresa de Ciberseguridad Colombia',
        type: 'image/png',
      },
    ],
  },
})


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

      <HomeClient services={services} />

      {/* Floating Buttons - WhatsApp + Scroll to Top */}
      <FloatingButtons settings={settings} showScrollTop={true} />
    </>
  )
}
