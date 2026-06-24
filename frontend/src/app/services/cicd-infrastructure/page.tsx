import type { Metadata } from 'next'
import { ServicePageClient } from '@/components/services/ServicePageClient'
import { JsonLd } from '@/components/seo/JsonLd'
import { generateServiceMetadata, createServiceSchema, createBreadcrumbSchema } from '@/lib/seo/metadata'
import { SITE_URL } from '@/lib/seo/config'

export const metadata: Metadata = generateServiceMetadata(
  'CI/CD & Infrastructure Automation Colombia',
  'Automatización de CI/CD e infraestructura como código para empresas colombianas. Implementamos pipelines DevOps seguros con GitHub Actions, Terraform, Ansible y Kubernetes con mejores prácticas de seguridad integradas.',
  'cicd-infrastructure',
  ['CI/CD automation Colombia', 'infrastructure as code Colombia', 'DevOps Colombia', 'pipeline seguro DevOps', 'Terraform Colombia', 'GitHub Actions Colombia', 'Kubernetes automation Colombia', 'IaC Colombia']
)

const schemas = [
  createServiceSchema(
    'CI/CD & Infrastructure Automation',
    'Pipelines DevOps seguros con GitHub Actions, Terraform, Ansible y Kubernetes para empresas colombianas.',
    'DevOps Infrastructure Automation'
  ),
  createBreadcrumbSchema([
    { name: 'Inicio', url: SITE_URL },
    { name: 'DevOps & Cloud Security', url: `${SITE_URL}/services/devops-cloud-security-services` },
    { name: 'CI/CD & Infrastructure Automation' },
  ]),
]

export default function Page() {
  return (
    <>
      <JsonLd data={schemas} />
      <ServicePageClient
        slug="cicd-infrastructure"
        certifications={['Kubernetes Administrator', 'Terraform Associate', 'AWS DevOps Professional', 'Azure DevOps Engineer']}
      />
    </>
  )
}
