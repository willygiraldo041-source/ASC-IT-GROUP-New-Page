import type { Metadata } from 'next'
import { ServicePageClient } from '@/components/services/ServicePageClient'
import { JsonLd } from '@/components/seo/JsonLd'
import { generateServiceMetadata, createServiceSchema, createBreadcrumbSchema } from '@/lib/seo/metadata'
import { SITE_URL } from '@/lib/seo/config'

export const metadata: Metadata = generateServiceMetadata(
  'Bot Automation & RPA Colombia',
  'Automatización robótica de procesos (RPA) y bots inteligentes para empresas colombianas. Implementamos soluciones con UiPath, Automation Anywhere y Python para maximizar eficiencia operativa.',
  'bot-automation',
  ['RPA Colombia', 'bot automation Colombia', 'robotic process automation Colombia', 'automatización RPA empresas Colombia', 'bots empresariales Colombia', 'UiPath Colombia', 'Automation Anywhere Colombia']
)

const schemas = [
  createServiceSchema(
    'Bot Automation & RPA',
    'Automatización robótica de procesos con UiPath, Automation Anywhere y Python para empresas colombianas.',
    'Robotic Process Automation'
  ),
  createBreadcrumbSchema([
    { name: 'Inicio', url: SITE_URL },
    { name: 'Intelligent Process Automation', url: `${SITE_URL}/services/automation-services` },
    { name: 'Bot Automation & RPA' },
  ]),
]

export default function Page() {
  return (
    <>
      <JsonLd data={schemas} />
      <ServicePageClient
        slug="bot-automation"
        certifications={['UiPath Advanced Developer', 'Automation Anywhere Master', 'Python Automation Expert']}
      />
    </>
  )
}
