import { ServicePageClient } from '@/components/services/ServicePageClient'

export default function Page() {
  return (
    <ServicePageClient
      slug="security-audits"
      certifications={["ISO 27001", "CIS Controls", "NIST", "PCI-DSS"]}
    />
  )
}
