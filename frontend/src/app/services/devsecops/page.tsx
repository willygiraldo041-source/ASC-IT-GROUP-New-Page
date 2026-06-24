import type { Metadata } from 'next'
import { ServicePageClient } from '@/components/services/ServicePageClient'
import { JsonLd } from '@/components/seo/JsonLd'
import { generateServiceMetadata, createServiceSchema, createBreadcrumbSchema } from '@/lib/seo/metadata'
import { SITE_URL } from '@/lib/seo/config'

export const metadata: Metadata = generateServiceMetadata(
  'Cloud Security DevSecOps Colombia',
  'Integración de seguridad en pipelines DevOps para empresas colombianas. Implementamos DevSecOps con SAST, DAST, análisis de contenedores, secretos y políticas de seguridad como código en tu nube.',
  'devsecops',
  ['DevSecOps Colombia', 'cloud security DevOps Colombia', 'SAST DAST Colombia', 'seguridad pipeline DevOps Colombia', 'container security Colombia', 'DevSecOps empresas Colombia', 'shift-left security Colombia']
)

const schemas = [
  createServiceSchema(
    'Cloud Security DevSecOps',
    'DevSecOps con SAST, DAST, container scanning y security as code para pipelines de desarrollo en Colombia.',
    'DevSecOps Cloud Security Service'
  ),
  createBreadcrumbSchema([
    { name: 'Inicio', url: SITE_URL },
    { name: 'DevOps & Cloud Security', url: `${SITE_URL}/services/devops-cloud-security-services` },
    { name: 'Cloud Security DevSecOps' },
  ]),
]

export default function Page() {
  return (
    <>
      <JsonLd data={schemas} />
      <ServicePageClient
        slug="devsecops"
        certifications={['Certified DevSecOps Professional', 'AWS Security Specialty', 'Kubernetes Security Specialist']}
      />
    </>
  )
}
