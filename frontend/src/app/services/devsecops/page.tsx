import { ServicePageClient } from '@/components/services/ServicePageClient'

export default function Page() {
  return (
    <ServicePageClient
      slug="devsecops"
      certifications={["Certified DevSecOps Professional", "AWS Security Specialty", "Kubernetes Security Specialist"]}
    />
  )
}
