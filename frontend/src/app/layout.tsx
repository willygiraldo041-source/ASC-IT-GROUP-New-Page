import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { Toaster } from 'react-hot-toast'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { PageLoader } from '@/components/ui/PageLoader'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'
import { JsonLd } from '@/components/seo/JsonLd'
import { generateMetadata as genMetadata } from '@/lib/seo/metadata'
import { organizationSchema, websiteSchema } from '@/lib/seo/config'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

// Generate metadata from SEO config
export const metadata: Metadata = genMetadata({})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
        
        {/* Custom Cursor (solo desktop) - Deshabilitado temporalmente */}
        {/* <div className="hidden lg:block">
          <CustomCursor />
        </div> */}
        
        <LanguageProvider>
          {children}
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
