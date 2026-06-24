import type { Metadata } from 'next'
import { ApplicationNetworkIndexClient } from '@/components/services/ApplicationNetworkIndexClient'
import { client } from '@/sanity/client'
import { SETTINGS_QUERY } from '@/sanity/queries'
import type { SiteSettings } from '@/types/sanity'
import { generateServiceMetadata, createServiceSchema, createBreadcrumbSchema } from '@/lib/seo/metadata'
import { JsonLd } from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/seo/config'

export const metadata: Metadata = generateServiceMetadata(
  'Application and Network Security',
  'Seguridad integral de aplicaciones y redes para empresas en Colombia. Pentest web, mobile, network y Active Directory con metodologías OWASP, PTES y NIST. Protege tu infraestructura de amenazas avanzadas.',
  'application-and-network-security',
  ['application security Colombia', 'network security Colombia', 'seguridad aplicaciones Colombia', 'OWASP pentest Colombia', 'network penetration testing Colombia', 'ciberseguridad aplicaciones empresas']
)

const schemas = [
  createServiceSchema(
    'Application and Network Security',
    'Seguridad integral de aplicaciones y redes para empresas colombianas: Web App, Network, AD y Mobile Pentest.',
    'Cybersecurity Service'
  ),
  createBreadcrumbSchema([
    { name: 'Inicio', url: SITE_URL },
    { name: 'Servicios', url: `${SITE_URL}/services/application-and-network-security` },
    { name: 'Application & Network Security' },
  ]),
]

export default async function ApplicationNetworkSecurityPage() {
  let settings: SiteSettings | null = null

  try {
    settings = await client.fetch<SiteSettings>(SETTINGS_QUERY)
  } catch {
    console.log('Sanity no disponible')
  }

  return (
    <>
      <JsonLd data={schemas} />
      <ApplicationNetworkIndexClient settings={settings} />
    </>
  )
}
