import { ServicePageClient } from '@/components/services/ServicePageClient'

export default function Page() {
  return (
    <ServicePageClient
      slug="k8s-security"
      certifications={["CKS", "CKA", "Kubernetes Security Specialist", "Cloud Native Security"]}
    />
  )
}
