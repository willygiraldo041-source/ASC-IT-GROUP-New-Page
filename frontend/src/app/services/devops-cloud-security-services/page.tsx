import type { Metadata } from 'next'
import { DevOpsCloudIndexClient } from '@/components/services/DevOpsCloudIndexClient'
import { client } from '@/sanity/client'
import { SETTINGS_QUERY } from '@/sanity/queries'
import type { SiteSettings } from '@/types/sanity'
import { generateServiceMetadata, createServiceSchema, createBreadcrumbSchema } from '@/lib/seo/metadata'
import { JsonLd } from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/seo/config'

export const metadata: Metadata = generateServiceMetadata(
  'DevOps & Cloud Security Colombia',
  'Soluciones DevSecOps y seguridad cloud para empresas colombianas. CI/CD seguro, Kubernetes hardening, Infrastructure as Code seguro y DevSecOps integrado para proteger tu pipeline de desarrollo en la nube.',
  'devops-cloud-security-services',
  ['DevOps security Colombia', 'cloud security DevSecOps Colombia', 'DevSecOps empresas Colombia', 'Kubernetes security Colombia', 'CI/CD security Colombia', 'cloud security Latin America', 'infraestructura segura Colombia']
)

const schemas = [
  createServiceSchema(
    'DevOps & Cloud Security',
    'CI/CD seguro, Kubernetes hardening y DevSecOps para proteger pipelines de desarrollo en Colombia.',
    'DevSecOps & Cloud Security Service'
  ),
  createBreadcrumbSchema([
    { name: 'Inicio', url: SITE_URL },
    { name: 'Servicios', url: `${SITE_URL}/services/devops-cloud-security-services` },
    { name: 'DevOps & Cloud Security' },
  ]),
]

export default async function DevOpsCloudSecurityPage() {
  let settings: SiteSettings | null = null

  try {
    settings = await client.fetch<SiteSettings>(SETTINGS_QUERY)
  } catch {
    console.log('Sanity no disponible')
  }

  return (
    <>
      <JsonLd data={schemas} />
      <DevOpsCloudIndexClient settings={settings} />
    </>
  )
}
