import type { Metadata } from 'next'
import { AutomationIndexClient } from '@/components/services/AutomationIndexClient'
import { client } from '@/sanity/client'
import { SETTINGS_QUERY } from '@/sanity/queries'
import type { SiteSettings } from '@/types/sanity'
import { generateServiceMetadata, createServiceSchema, createBreadcrumbSchema } from '@/lib/seo/metadata'
import { JsonLd } from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/seo/config'

export const metadata: Metadata = generateServiceMetadata(
  'Intelligent Process Automation Colombia',
  'Automatización inteligente de procesos para empresas colombianas. Workflow automation, RPA y bots de automatización con IA para optimizar operaciones, reducir errores y disminuir costos empresariales.',
  'automation-services',
  ['process automation Colombia', 'automatización procesos Colombia', 'RPA Colombia', 'workflow automation empresas Colombia', 'automatización empresarial Colombia', 'bots empresariales Colombia', 'inteligencia artificial automatización Colombia']
)

const schemas = [
  createServiceSchema(
    'Intelligent Process Automation',
    'Workflow automation, RPA y bots inteligentes para optimizar procesos empresariales en Colombia.',
    'Process Automation Service'
  ),
  createBreadcrumbSchema([
    { name: 'Inicio', url: SITE_URL },
    { name: 'Servicios', url: `${SITE_URL}/services/automation-services` },
    { name: 'Intelligent Process Automation' },
  ]),
]

export default async function AutomationPage() {
  let settings: SiteSettings | null = null

  try {
    settings = await client.fetch<SiteSettings>(SETTINGS_QUERY)
  } catch {
    console.log('Sanity no disponible')
  }

  return (
    <>
      <JsonLd data={schemas} />
      <AutomationIndexClient settings={settings} />
    </>
  )
}
