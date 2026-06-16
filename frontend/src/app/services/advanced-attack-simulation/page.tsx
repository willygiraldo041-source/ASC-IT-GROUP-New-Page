import { Metadata } from 'next'
import { AdvancedAttackIndexClient } from '@/components/services/AdvancedAttackIndexClient'
import { client } from '@/sanity/client'
import { SETTINGS_QUERY } from '@/sanity/queries'
import type { SiteSettings } from '@/types/sanity'

export const metadata: Metadata = {
  title: 'Advanced Attack Simulation | ASC IT GROUP',
  description: 'Simulaciones avanzadas de ataques cibernéticos: Red Team, Ransomware, Phishing, Vishing y más.',
}

export default async function AdvancedAttackPage() {
  const settings = await client.fetch<SiteSettings>(SETTINGS_QUERY)

  return <AdvancedAttackIndexClient settings={settings} />
}
