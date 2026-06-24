import type { Metadata } from 'next'
import { ServicePageClient } from '@/components/services/ServicePageClient'
import { JsonLd } from '@/components/seo/JsonLd'
import { generateServiceMetadata, createServiceSchema, createBreadcrumbSchema } from '@/lib/seo/metadata'
import { SITE_URL } from '@/lib/seo/config'

export const metadata: Metadata = generateServiceMetadata(
  'Workflow Automation Colombia',
  'Automatización de workflows y procesos para empresas colombianas. Optimizamos flujos de trabajo repetitivos con integraciones inteligentes entre sistemas usando APIs, Zapier, Make y herramientas enterprise.',
  'workflow-automation',
  ['workflow automation Colombia', 'automatización procesos empresariales Colombia', 'process automation Colombia', 'integración sistemas Colombia', 'automatización workflows Colombia', 'optimización procesos empresas Colombia']
)

const schemas = [
  createServiceSchema(
    'Workflow Automation',
    'Automatización de flujos de trabajo empresariales con integraciones inteligentes entre sistemas y APIs.',
    'Business Process Automation'
  ),
  createBreadcrumbSchema([
    { name: 'Inicio', url: SITE_URL },
    { name: 'Intelligent Process Automation', url: `${SITE_URL}/services/automation-services` },
    { name: 'Workflow Automation' },
  ]),
]

export default function Page() {
  return (
    <>
      <JsonLd data={schemas} />
      <ServicePageClient
        slug="workflow-automation"
        certifications={['Microsoft Power Automate Expert', 'Automation Anywhere Certified', 'UiPath Certified']}
      />
    </>
  )
}
