import type { Metadata } from 'next'
import { ServicePageClient } from '@/components/services/ServicePageClient'
import { JsonLd } from '@/components/seo/JsonLd'
import { generateServiceMetadata, createServiceSchema, createBreadcrumbSchema } from '@/lib/seo/metadata'
import { SITE_URL } from '@/lib/seo/config'

export const metadata: Metadata = generateServiceMetadata(
  'Security Audits Colombia',
  'Auditorías de seguridad integral para empresas colombianas. Evaluamos controles técnicos y organizacionales con marcos ISO 27001, CIS Controls, NIST y PCI DSS. Generamos planes de remediación priorizados.',
  'security-audits',
  ['auditoría seguridad Colombia', 'security audit Colombia', 'ISO 27001 Colombia', 'cumplimiento PCI DSS Colombia', 'CIS Controls Colombia', 'NIST Colombia', 'auditoría ciberseguridad empresas Colombia']
)

const schemas = [
  createServiceSchema(
    'Security Audits',
    'Auditorías de seguridad técnicas y organizacionales: ISO 27001, CIS Controls, NIST y PCI DSS para empresas colombianas.',
    'Security Audit Service'
  ),
  createBreadcrumbSchema([
    { name: 'Inicio', url: SITE_URL },
    { name: 'Security Audits', url: `${SITE_URL}/services/security-audits-services` },
    { name: 'Security Audits' },
  ]),
]

export default function Page() {
  return (
    <>
      <JsonLd data={schemas} />
      <ServicePageClient
        slug="security-audits"
        certifications={['ISO 27001', 'CIS Controls', 'NIST', 'PCI-DSS']}
      />
    </>
  )
}
