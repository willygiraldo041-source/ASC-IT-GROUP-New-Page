import type { Metadata } from 'next'
import { SecurityAuditsIndexClient } from '@/components/services/SecurityAuditsIndexClient'
import { client } from '@/sanity/client'
import { SETTINGS_QUERY } from '@/sanity/queries'
import type { SiteSettings } from '@/types/sanity'
import { generateServiceMetadata, createServiceSchema, createBreadcrumbSchema } from '@/lib/seo/metadata'
import { JsonLd } from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/seo/config'

export const metadata: Metadata = generateServiceMetadata(
  'Security Audit Services Colombia',
  'Auditorías de seguridad para empresas colombianas. Evaluamos controles de seguridad, gaps de compliance ISO 27001, NIST y PCI DSS. Generamos roadmaps de mejora priorizados para fortalecer tu postura de seguridad.',
  'security-audits-services',
  ['security audits Colombia', 'auditoría seguridad empresas Colombia', 'ISO 27001 audit Colombia', 'NIST security assessment Colombia', 'cumplimiento normativo Colombia', 'cybersecurity audit Latin America', 'PCI DSS Colombia']
)

const schemas = [
  createServiceSchema(
    'Security Audit Services',
    'Auditorías de seguridad completas para empresas colombianas: ISO 27001, NIST, PCI DSS y gap analysis.',
    'Security Audit Service'
  ),
  createBreadcrumbSchema([
    { name: 'Inicio', url: SITE_URL },
    { name: 'Servicios', url: `${SITE_URL}/services/security-audits-services` },
    { name: 'Security Audits' },
  ]),
]

export default async function SecurityAuditsPage() {
  let settings: SiteSettings | null = null

  try {
    settings = await client.fetch<SiteSettings>(SETTINGS_QUERY)
  } catch {
    console.log('Sanity no disponible')
  }

  return (
    <>
      <JsonLd data={schemas} />
      <SecurityAuditsIndexClient settings={settings} />
    </>
  )
}
