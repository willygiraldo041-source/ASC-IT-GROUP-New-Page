import type { Metadata } from 'next'
import { CloudPentestIndexClient } from '@/components/services/CloudPentestIndexClient'
import { client } from '@/sanity/client'
import { SETTINGS_QUERY } from '@/sanity/queries'
import type { SiteSettings } from '@/types/sanity'
import { generateServiceMetadata, createServiceSchema, createBreadcrumbSchema } from '@/lib/seo/metadata'
import { JsonLd } from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/seo/config'

export const metadata: Metadata = generateServiceMetadata(
  'Cloud Penetration Testing Colombia',
  'Pentest de infraestructura cloud para empresas colombianas. Evaluamos seguridad en AWS, Azure y GCP con metodologías CSA y MITRE ATT&CK. Identifica misconfiguraciones y vectores de ataque en tu nube.',
  'cloud-penetration-testing',
  ['cloud pentest Colombia', 'cloud penetration testing', 'seguridad en la nube Colombia', 'AWS Azure GCP pentest', 'cloud security Colombia', 'pentest nube empresas Colombia']
)

const schemas = [
  createServiceSchema(
    'Cloud Penetration Testing',
    'Pentest especializado para AWS, Azure y Google Cloud Platform. Evaluamos misconfiguraciones, IAM y vectores de ataque en la nube.',
    'Cloud Security Service'
  ),
  createBreadcrumbSchema([
    { name: 'Inicio', url: SITE_URL },
    { name: 'Servicios', url: `${SITE_URL}/services/cloud-penetration-testing` },
    { name: 'Cloud Penetration Testing' },
  ]),
]

export default async function CloudPentestingPage() {
  let settings: SiteSettings | null = null

  try {
    settings = await client.fetch<SiteSettings>(SETTINGS_QUERY)
  } catch {
    console.log('Sanity no disponible')
  }

  return (
    <>
      <JsonLd data={schemas} />
      <CloudPentestIndexClient settings={settings} />
    </>
  )
}
