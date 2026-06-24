import type { Metadata } from 'next'
import { RedTeamIndexClient } from '@/components/services/RedTeamIndexClient'
import { client } from '@/sanity/client'
import { SETTINGS_QUERY } from '@/sanity/queries'
import type { SiteSettings } from '@/types/sanity'
import { generateServiceMetadata, createServiceSchema, createBreadcrumbSchema } from '@/lib/seo/metadata'
import { JsonLd } from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/seo/config'

export const metadata: Metadata = generateServiceMetadata(
  'Red Team Assessments Colombia',
  'Evaluaciones Red Team para empresas colombianas y latinoamericanas. Simulamos ataques reales de APTs con kill chain completa: reconocimiento, intrusión, movimiento lateral y exfiltración de datos.',
  'red-team-operations',
  ['red team Colombia', 'red team assessments Colombia', 'simulación APT Colombia', 'ciberseguridad ofensiva Colombia', 'red team empresarial Colombia', 'threat simulation Latin America', 'adversary simulation Colombia']
)

const schemas = [
  createServiceSchema(
    'Red Team Operations',
    'Simulaciones avanzadas de ataques APT para evaluar la madurez defensiva de empresas colombianas y latinoamericanas.',
    'Red Team Security Service'
  ),
  createBreadcrumbSchema([
    { name: 'Inicio', url: SITE_URL },
    { name: 'Servicios', url: `${SITE_URL}/services/red-team-operations` },
    { name: 'Red Team Operations' },
  ]),
]

export default async function RedTeamOperationsPage() {
  let settings: SiteSettings | null = null

  try {
    settings = await client.fetch<SiteSettings>(SETTINGS_QUERY)
  } catch {
    console.log('Sanity no disponible')
  }

  return (
    <>
      <JsonLd data={schemas} />
      <RedTeamIndexClient settings={settings} />
    </>
  )
}
