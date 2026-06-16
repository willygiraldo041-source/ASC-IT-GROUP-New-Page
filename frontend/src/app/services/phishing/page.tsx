import { ServicePageClient } from '@/components/services/ServicePageClient'

export default function Page() {
  return (
    <ServicePageClient
      slug="phishing"
      certifications={["GPEN", "GCIH", "Social Engineering Expert"]}
    />
  )
}
