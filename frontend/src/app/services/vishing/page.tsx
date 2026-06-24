import type { Metadata } from 'next'
import { ServicePageClient } from '@/components/services/ServicePageClient'
import { JsonLd } from '@/components/seo/JsonLd'
import { generateServiceMetadata, createServiceSchema, createBreadcrumbSchema } from '@/lib/seo/metadata'
import { SITE_URL } from '@/lib/seo/config'

export const metadata: Metadata = generateServiceMetadata(
  'Vishing Testing Colombia',
  'Pruebas de vishing (phishing por voz) para empresas colombianas. Evaluamos la resistencia de tu equipo frente a ataques de ingeniería social telefónica con escenarios realistas de fraude y manipulación.',
  'vishing',
  ['vishing testing Colombia', 'vishing simulation Colombia', 'ingeniería social telefónica Colombia', 'phone phishing testing Colombia', 'social engineering Colombia', 'concienciación seguridad empleados Colombia']
)

const schemas = [
  createServiceSchema(
    'Vishing Testing',
    'Simulación de ataques de ingeniería social por voz: evaluación de resistencia del equipo humano a fraudes telefónicos.',
    'Social Engineering Testing'
  ),
  createBreadcrumbSchema([
    { name: 'Inicio', url: SITE_URL },
    { name: 'Advanced Attack Simulation', url: `${SITE_URL}/services/advanced-attack-simulation` },
    { name: 'Vishing Testing' },
  ]),
]

export default function Page() {
  return (
    <>
      <JsonLd data={schemas} />
      <ServicePageClient
        slug="vishing"
        certifications={['Social Engineering Expert', 'GPEN', 'Certified Ethical Hacker']}
      />
    </>
  )
}
