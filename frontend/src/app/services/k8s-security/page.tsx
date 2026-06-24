import type { Metadata } from 'next'
import { ServicePageClient } from '@/components/services/ServicePageClient'
import { JsonLd } from '@/components/seo/JsonLd'
import { generateServiceMetadata, createServiceSchema, createBreadcrumbSchema } from '@/lib/seo/metadata'
import { SITE_URL } from '@/lib/seo/config'

export const metadata: Metadata = generateServiceMetadata(
  'Kubernetes Security Colombia',
  'Seguridad y hardening de Kubernetes para empresas colombianas. Auditamos configuraciones K8s, RBAC, network policies, imágenes de contenedores y secretos para proteger tus workloads cloud-native.',
  'k8s-security',
  ['Kubernetes security Colombia', 'K8s security audit Colombia', 'seguridad contenedores Colombia', 'Kubernetes pentest Colombia', 'cloud-native security Colombia', 'CKS Colombia', 'container orchestration security']
)

const schemas = [
  createServiceSchema(
    'Kubernetes Security',
    'Hardening y auditoría de Kubernetes: RBAC, network policies, imágenes de contenedores y gestión de secretos.',
    'Kubernetes & Container Security'
  ),
  createBreadcrumbSchema([
    { name: 'Inicio', url: SITE_URL },
    { name: 'DevOps & Cloud Security', url: `${SITE_URL}/services/devops-cloud-security-services` },
    { name: 'Kubernetes Security' },
  ]),
]

export default function Page() {
  return (
    <>
      <JsonLd data={schemas} />
      <ServicePageClient
        slug="k8s-security"
        certifications={['CKS', 'CKA', 'Kubernetes Security Specialist', 'Cloud Native Security']}
      />
    </>
  )
}
