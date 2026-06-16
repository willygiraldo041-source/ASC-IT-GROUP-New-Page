import { ServicePageClient } from '@/components/services/ServicePageClient'

export default function Page() {
  return (
    <ServicePageClient
      slug="ransomware-sim"
      certifications={["GCFA", "GCIH", "GREM", "OSCP"]}
    />
  )
}
