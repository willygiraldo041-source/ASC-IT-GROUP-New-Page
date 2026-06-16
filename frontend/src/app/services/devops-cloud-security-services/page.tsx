import { Metadata } from 'next'
import { DevOpsCloudIndexClient } from '@/components/services/DevOpsCloudIndexClient'
import { client } from '@/sanity/client'
import { SETTINGS_QUERY } from '@/sanity/queries'
import type { SiteSettings } from '@/types/sanity'

export const metadata: Metadata = {
  title: 'DevOps & Cloud Security | ASC IT GROUP',
  description: 'Servicios especializados en seguridad para DevOps, CI/CD, contenedores y entornos cloud multi-proveedor.',
}

export default async function DevOpsCloudSecurityPage() {
  const settings = await client.fetch<SiteSettings>(SETTINGS_QUERY)

  return <DevOpsCloudIndexClient settings={settings} />
}
