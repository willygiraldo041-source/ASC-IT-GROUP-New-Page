import type { Metadata } from 'next'
import { ServicePageClient } from '@/components/services/ServicePageClient'
import { JsonLd } from '@/components/seo/JsonLd'
import { generateServiceMetadata, createServiceSchema, createBreadcrumbSchema } from '@/lib/seo/metadata'
import { SITE_URL } from '@/lib/seo/config'

export const metadata: Metadata = generateServiceMetadata(
  'Red Team Assessment Colombia',
  'Operaciones Red Team para empresas colombianas y latinoamericanas. Simulamos ataques reales de amenazas persistentes avanzadas (APT) con kill chain completa para evaluar la madurez de tu postura defensiva.',
  'red-team',
  ['red team Colombia', 'red team assessment Colombia', 'APT simulation Colombia', 'simulación ataques avanzados Colombia', 'OSEP Colombia', 'OSCE Colombia', 'ciberseguridad ofensiva avanzada Colombia']
)

const schemas = [
  createServiceSchema(
    'Red Team Assessment',
    'Simulación realista de ataques APT: reconocimiento, intrusión, movimiento lateral, persistencia y exfiltración.',
    'Red Team Security Assessment'
  ),
  createBreadcrumbSchema([
    { name: 'Inicio', url: SITE_URL },
    { name: 'Red Team Operations', url: `${SITE_URL}/services/red-team-operations` },
    { name: 'Red Team' },
  ]),
]

export default function Page() {
  return (
    <>
      <JsonLd data={schemas} />
      <ServicePageClient
        slug="red-team"
        certifications={['OSEP', 'OSCE³', 'CRTO', 'CARTP']}
      />
    </>
  )
}
