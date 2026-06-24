import type { Metadata } from 'next'
import { PenetrationTestingIndexClient } from '@/components/services/PenetrationTestingIndexClient'
import { client } from '@/sanity/client'
import { SETTINGS_QUERY } from '@/sanity/queries'
import type { SiteSettings } from '@/types/sanity'
import { generateServiceMetadata, createServiceSchema, createBreadcrumbSchema } from '@/lib/seo/metadata'
import { JsonLd } from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/seo/config'

export const metadata: Metadata = generateServiceMetadata(
  'Penetration Testing Colombia',
  'Servicios completos de Penetration Testing en Colombia y Latinoamérica. Web App, Network, Active Directory y Mobile Pentest con certificaciones OSCP, OSWE, eWPT. Identifica vulnerabilidades antes que los atacantes.',
  'penetration-testing',
  ['penetration testing Colombia', 'pentest Colombia', 'pruebas de penetración Colombia', 'hacking ético empresas', 'pentesting empresarial Colombia', 'OSCP Colombia', 'seguridad ofensiva Colombia']
)

const schemas = [
  createServiceSchema(
    'Penetration Testing',
    'Servicios completos de Penetration Testing en Colombia: Web App, Network, Active Directory y Mobile Pentest.',
    'Cybersecurity Service'
  ),
  createBreadcrumbSchema([
    { name: 'Inicio', url: SITE_URL },
    { name: 'Servicios', url: `${SITE_URL}/services/penetration-testing` },
    { name: 'Penetration Testing' },
  ]),
]

export default async function PenetrationTestingPage() {
  let settings: SiteSettings | null = null

  try {
    settings = await client.fetch<SiteSettings>(SETTINGS_QUERY)
  } catch (error) {
    console.log('⚠️ Sanity CMS no disponible, usando datos por defecto')
  }

  return (
    <>
      <JsonLd data={schemas} />
      <PenetrationTestingIndexClient settings={settings} />
    </>
  )
}
