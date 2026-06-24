import type { Metadata } from 'next'
import { AdvancedAttackIndexClient } from '@/components/services/AdvancedAttackIndexClient'
import { client } from '@/sanity/client'
import { SETTINGS_QUERY } from '@/sanity/queries'
import type { SiteSettings } from '@/types/sanity'
import { generateServiceMetadata, createServiceSchema, createBreadcrumbSchema } from '@/lib/seo/metadata'
import { JsonLd } from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/seo/config'

export const metadata: Metadata = generateServiceMetadata(
  'Advanced Attack Simulation Colombia',
  'Simulación de ataques avanzados para empresas colombianas: AI Pentest, Red Team, Ransomware Simulation, Spear Phishing y Vishing. Evalúa la madurez defensiva de tu organización con escenarios reales.',
  'advanced-attack-simulation',
  ['advanced attack simulation Colombia', 'simulación ataques avanzados Colombia', 'BAS Colombia', 'breach attack simulation Colombia', 'ciberseguridad avanzada Colombia', 'threat simulation empresas Colombia']
)

const schemas = [
  createServiceSchema(
    'Advanced Attack Simulation',
    'Simulaciones avanzadas: AI Pentest, Red Team, Ransomware, Phishing y Vishing para empresas colombianas.',
    'Advanced Security Testing Service'
  ),
  createBreadcrumbSchema([
    { name: 'Inicio', url: SITE_URL },
    { name: 'Servicios', url: `${SITE_URL}/services/advanced-attack-simulation` },
    { name: 'Advanced Attack Simulation' },
  ]),
]

export default async function AdvancedAttackPage() {
  let settings: SiteSettings | null = null

  try {
    settings = await client.fetch<SiteSettings>(SETTINGS_QUERY)
  } catch {
    console.log('Sanity no disponible')
  }

  return (
    <>
      <JsonLd data={schemas} />
      <AdvancedAttackIndexClient settings={settings} />
    </>
  )
}
