import type { Metadata } from 'next'
import { ServicePageClient } from '@/components/services/ServicePageClient'
import { JsonLd } from '@/components/seo/JsonLd'
import { generateServiceMetadata, createServiceSchema, createBreadcrumbSchema } from '@/lib/seo/metadata'
import { SITE_URL } from '@/lib/seo/config'

export const metadata: Metadata = generateServiceMetadata(
  'Email Spear Phishing Testing Colombia',
  'Campañas de spear phishing y concienciación de seguridad para empresas colombianas. Evaluamos la vulnerabilidad humana con phishing dirigido, BEC simulado y reportes de awareness para fortalecer tu cultura de seguridad.',
  'phishing',
  ['phishing testing Colombia', 'spear phishing simulation Colombia', 'concienciación phishing empresas Colombia', 'BEC simulation Colombia', 'phishing empresarial Colombia', 'email security testing Colombia', 'security awareness Colombia']
)

const schemas = [
  createServiceSchema(
    'Email Spear Phishing Testing',
    'Campañas de phishing dirigido y BEC simulado para evaluar la vulnerabilidad humana en empresas colombianas.',
    'Social Engineering Testing'
  ),
  createBreadcrumbSchema([
    { name: 'Inicio', url: SITE_URL },
    { name: 'Advanced Attack Simulation', url: `${SITE_URL}/services/advanced-attack-simulation` },
    { name: 'Spear Phishing Testing' },
  ]),
]

export default function Page() {
  return (
    <>
      <JsonLd data={schemas} />
      <ServicePageClient
        slug="phishing"
        certifications={['GPEN', 'GCIH', 'Social Engineering Expert']}
      />
    </>
  )
}
