import type { Metadata } from 'next'
import { ServicePageClient } from '@/components/services/ServicePageClient'
import { JsonLd } from '@/components/seo/JsonLd'
import { generateServiceMetadata, createServiceSchema, createBreadcrumbSchema } from '@/lib/seo/metadata'
import { SITE_URL } from '@/lib/seo/config'

export const metadata: Metadata = generateServiceMetadata(
  'Ransomware Attack Simulation Colombia',
  'Simulación controlada de ataques de ransomware para empresas en Colombia. Evaluamos la resistencia de tu organización frente al cifrado masivo de datos, movimiento lateral y exfiltración sin afectar producción.',
  'ransomware-sim',
  ['ransomware simulation Colombia', 'simulación ransomware Colombia', 'ransomware preparedness Colombia', 'business continuity testing Colombia', 'ciberseguridad ransomware Colombia', 'ataque ransomware simulación empresas']
)

const schemas = [
  createServiceSchema(
    'Ransomware Attack Simulation',
    'Simulación controlada de ransomware: evaluación de resistencia, lateral movement, exfiltración y capacidad de respuesta.',
    'Advanced Attack Simulation Service'
  ),
  createBreadcrumbSchema([
    { name: 'Inicio', url: SITE_URL },
    { name: 'Advanced Attack Simulation', url: `${SITE_URL}/services/advanced-attack-simulation` },
    { name: 'Ransomware Simulation' },
  ]),
]

export default function Page() {
  return (
    <>
      <JsonLd data={schemas} />
      <ServicePageClient
        slug="ransomware-sim"
        certifications={['GCFA', 'GCIH', 'GREM', 'OSCP']}
      />
    </>
  )
}
