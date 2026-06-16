import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { Toaster } from 'react-hot-toast'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { PageLoader } from '@/components/ui/PageLoader'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'
import { JsonLd } from '@/components/seo/JsonLd'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { generateMetadata as genMetadata } from '@/lib/seo/metadata'
import { organizationSchema, websiteSchema } from '@/lib/seo/config'
import { client } from '@/sanity/client'
import { SETTINGS_QUERY } from '@/sanity/queries'
import type { SiteSettings } from '@/types/sanity'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

// Generate metadata from SEO config
export const metadata: Metadata = genMetadata({})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Fetch settings once at build time; persists across all client navigations
  let settings: SiteSettings | null = null

  try {
    settings = await client.fetch<SiteSettings>(SETTINGS_QUERY)
  } catch (error) {
    console.log('Sanity fetch failed in layout, using default data:', error)
  }

  return (
    <html lang="es" className={`${sora.variable} dark scroll-smooth`}>
      <head>
        {/* Structured Data - JSON-LD */}
        <JsonLd data={[organizationSchema, websiteSchema]} />
        
        {/* Google Analytics 4 */}
        <GoogleAnalytics />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased overflow-x-hidden">
        <PageLoader />
        
        {/* CustomCursor deshabilitado — spotlight del hero reemplaza el efecto */}
        
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer settings={settings} />
        </LanguageProvider>
        
        {/* Vercel Analytics */}
        <Analytics />
        
        {/* Toast Notifications */}
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1a1a1a',
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            },
          }}
        />
      </body>
    </html>
  )
}
