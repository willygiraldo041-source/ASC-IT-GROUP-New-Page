import { Metadata } from 'next'
import { SecurityAuditsIndexClient } from '@/components/services/SecurityAuditsIndexClient'
import { client } from '@/sanity/client'
import { SETTINGS_QUERY } from '@/sanity/queries'
import type { SiteSettings } from '@/types/sanity'

export const metadata: Metadata = {
  title: 'Security Audits | ASC IT GROUP',
  description: 'Auditorías de seguridad completas para garantizar el cumplimiento normativo y fortalecer la postura de seguridad de tu organización.',
}

export default async function SecurityAuditsPage() {
  const settings = await client.fetch<SiteSettings>(SETTINGS_QUERY)

  return <SecurityAuditsIndexClient settings={settings} />
}
