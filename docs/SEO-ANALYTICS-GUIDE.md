# 📊 SEO + Analytics - Guía Completa

## ASC IT GROUP - Optimización para Motores de Búsqueda y Analítica Web

---

## 📑 Tabla de Contenidos

1. [Resumen Ejecutivo](#resumen-ejecutivo)
2. [Configuración Inicial](#configuración-inicial)
3. [SEO Técnico](#seo-técnico)
4. [Google Analytics 4](#google-analytics-4)
5. [Eventos Implementados](#eventos-implementados)
6. [Sitemap y Robots](#sitemap-y-robots)
7. [Structured Data (JSON-LD)](#structured-data)
8. [Open Graph y Social Sharing](#open-graph)
9. [Core Web Vitals](#core-web-vitals)
10. [Cómo Agregar Nuevas Páginas](#agregar-páginas)
11. [Checklist SEO](#checklist-seo)

---

## 🎯 Resumen Ejecutivo

### Implementaciones Completadas

#### ✅ SEO Técnico
- Meta tags dinámicos (title, description, keywords)
- Canonical URLs
- Robots directives
- Open Graph tags
- Twitter Cards
- hreflang para i18n

#### ✅ Structured Data (Schema.org)
- Organization
- WebSite
- Service (plantilla)
- BlogPosting (plantilla)
- Breadcrumb (plantilla)

#### ✅ Google Analytics 4
- Tracking automático de page views
- 13 eventos personalizados
- Hook `useAnalytics()` para fácil integración

#### ✅ Performance
- Sitemap dinámico
- Robots.txt optimizado
- Core Web Vitals optimizados
- GPU acceleration
- Lazy loading

---

## ⚙️ Configuración Inicial

### 1. Variables de Entorno

Copia `env.template` a `.env.local`:

\`\`\`bash
cp env.template .env.local
\`\`\`

Configura las variables:

\`\`\`env
NEXT_PUBLIC_SITE_URL=https://ascitgroup.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Tu Google Analytics 4 ID
NEXT_PUBLIC_WEB3FORMS_KEY=your-key-here
\`\`\`

### 2. Google Analytics 4 Setup

1. Ve a [Google Analytics](https://analytics.google.com)
2. Crea una propiedad GA4
3. Copia el Measurement ID (formato: `G-XXXXXXXXXX`)
4. Agrégalo a `.env.local`

### 3. Generar Sitemap

El sitemap se genera automáticamente en build:

\`\`\`bash
npm run build
# Genera: /public/sitemap.xml y /public/robots.txt
\`\`\`

Para generar manualmente:

\`\`\`bash
npx next-sitemap
\`\`\`

---

## 🔍 SEO Técnico

### Estructura de Archivos

\`\`\`
src/
├── lib/seo/
│   ├── config.ts          # Configuración global SEO
│   └── metadata.ts        # Helpers para generar metadata
├── types/seo.ts           # TypeScript types
└── components/seo/
    └── JsonLd.tsx         # Componente JSON-LD
\`\`\`

### Uso en Páginas

#### Método 1: Metadata Simple

\`\`\`tsx
// app/about/page.tsx
import { Metadata } from 'next'
import { generateMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = generateMetadata({
  title: 'Sobre Nosotros | ASC IT GROUP',
  description: 'Conoce nuestro equipo de expertos en ciberseguridad',
  canonical: 'https://ascitgroup.com/about',
})

export default function AboutPage() {
  return <div>...</div>
}
\`\`\`

#### Método 2: Metadata para Servicios

\`\`\`tsx
// app/services/[slug]/page.tsx
import { generateServiceMetadata } from '@/lib/seo/metadata'

export async function generateMetadata({ params }) {
  const service = await getService(params.slug)
  
  return generateServiceMetadata(
    service.name,
    service.description,
    params.slug
  )
}
\`\`\`

#### Método 3: Metadata para Blog

\`\`\`tsx
// app/blog/[slug]/page.tsx
import { generateBlogMetadata } from '@/lib/seo/metadata'

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug)
  
  return generateBlogMetadata(
    post.title,
    post.description,
    params.slug,
    post.publishedDate,
    post.image
  )
}
\`\`\`

---

## 📈 Google Analytics 4

### Hook `useAnalytics()`

Importa y usa el hook en componentes client:

\`\`\`tsx
'use client'

import { useAnalytics } from '@/hooks/useAnalytics'

export function MyComponent() {
  const { trackFormSubmit, trackCTAClick } = useAnalytics()
  
  const handleSubmit = () => {
    trackFormSubmit('newsletter', 'blog_sidebar')
  }
  
  return <button onClick={handleSubmit}>Subscribe</button>
}
\`\`\`

### Funciones Disponibles

| Función | Parámetros | Descripción |
|---------|-----------|-------------|
| `trackFormSubmit()` | formName, service? | Envío de formulario |
| `trackQuoteRequest()` | service | Solicitud de cotización |
| `trackWhatsAppClick()` | source | Click en WhatsApp |
| `trackContactClick()` | method | Click en contacto |
| `trackServiceView()` | serviceName | Vista de servicio |
| `trackBlogRead()` | postTitle, readTime? | Lectura de blog |
| `trackDownloadReport()` | reportName | Descarga de reporte |
| `trackLanguageChange()` | newLanguage | Cambio de idioma |
| `trackCTAClick()` | ctaName, location | Click en CTA |
| `trackNewsletterSignup()` | - | Registro newsletter |
| `trackSocialShare()` | platform, url | Compartir en redes |
| `trackCaseStudyView()` | caseStudyName | Vista de caso de estudio |
| `trackScrollDepth()` | percentage | Profundidad de scroll |

---

## 🎯 Eventos Implementados

### 1. Formulario de Contacto

**Evento:** `form_submit`
**Dónde:** `Contact.tsx`
**Cuándo:** Al enviar exitosamente el formulario

\`\`\`tsx
trackFormSubmit('contact_form', data.service)
\`\`\`

### 2. WhatsApp Button

**Evento:** `whatsapp_click`
**Dónde:** `FloatingButtons.tsx`
**Cuándo:** Al hacer click en el botón flotante de WhatsApp

\`\`\`tsx
trackWhatsAppClick('floating_button')
\`\`\`

### 3. Agregar Eventos a Nuevos Componentes

#### Ejemplo: Botón de Descarga

\`\`\`tsx
'use client'

import { useAnalytics } from '@/hooks/useAnalytics'

export function DownloadButton({ fileName }: { fileName: string }) {
  const { trackDownloadReport } = useAnalytics()
  
  const handleDownload = () => {
    trackDownloadReport(fileName)
    // ... lógica de descarga
  }
  
  return <button onClick={handleDownload}>Download {fileName}</button>
}
\`\`\`

---

## 🗺️ Sitemap y Robots

### Sitemap Estático

Generado automáticamente en build:

\`\`\`
/sitemap.xml          # Páginas estáticas
/server-sitemap.xml   # Contenido dinámico (Sanity)
\`\`\`

### Sitemap Dinámico

Para contenido de Sanity CMS (blog, case studies):

**Archivo:** `app/server-sitemap.xml/route.ts`

Este sitemap se regenera en cada request y incluye:
- Todos los blog posts
- Todos los case studies
- lastmod automático desde Sanity

### Robots.txt

Generado automáticamente con configuración:

\`\`\`txt
User-agent: *
Allow: /
Disallow: /admin
Disallow: /api
Disallow: /staging
Disallow: /_next

User-agent: Googlebot
Allow: /
Crawl-delay: 0

Sitemap: https://ascitgroup.com/sitemap.xml
Sitemap: https://ascitgroup.com/server-sitemap.xml
\`\`\`

---

## 📦 Structured Data

### JSON-LD Schemas Disponibles

#### 1. Organization (Global)

Ya implementado en `layout.tsx`:

\`\`\`tsx
<JsonLd data={[organizationSchema, websiteSchema]} />
\`\`\`

#### 2. Service (Por Servicio)

\`\`\`tsx
import { JsonLd } from '@/components/seo/JsonLd'
import type { ServiceSchema } from '@/types/seo'

const serviceSchema: ServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Penetration Testing',
  description: 'Evaluación de seguridad...',
  provider: {
    '@type': 'Organization',
    name: 'ASC IT GROUP',
    url: 'https://ascitgroup.com',
  },
  serviceType: 'Cybersecurity',
}

export default function ServicePage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      {/* Tu contenido */}
    </>
  )
}
\`\`\`

#### 3. BlogPosting (Por Blog Post)

\`\`\`tsx
const blogSchema: BlogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Título del Post',
  description: 'Descripción...',
  author: {
    '@type': 'Organization',
    name: 'ASC IT GROUP',
  },
  publisher: {
    '@type': 'Organization',
    name: 'ASC IT GROUP',
  },
  datePublished: '2024-01-15',
}

<JsonLd data={blogSchema} />
\`\`\`

---

## 🚀 Open Graph y Social Sharing

### Configuración Automática

Todas las páginas tienen Open Graph configurado automáticamente.

### Personalizar Imagen OG

\`\`\`tsx
export const metadata = generateMetadata({
  title: 'Mi Página',
  description: 'Descripción',
  openGraph: {
    images: [
      {
        url: 'https://ascitgroup.com/og-images/mi-pagina.jpg',
        width: 1200,
        height: 630,
        alt: 'Mi Página Preview',
      },
    ],
  },
})
\`\`\`

### Generar Imágenes OG

Recomendaciones:
- **Tamaño:** 1200x630px
- **Formato:** JPG o PNG
- **Peso:** < 1MB
- **Ubicación:** `/public/og-images/`

Herramientas recomendadas:
- [OG Image Playground](https://og-playground.vercel.app/)
- [Cloudinary](https://cloudinary.com/)
- Figma/Canva

---

## ⚡ Core Web Vitals

### Optimizaciones Aplicadas

#### 1. LCP (Largest Contentful Paint)

✅ Lazy loading de imágenes
✅ Priorización de contenido above-the-fold
✅ Compresión de imágenes
✅ Font preloading (Sora)

#### 2. CLS (Cumulative Layout Shift)

✅ Dimensiones fijas para imágenes
✅ Reserva de espacio para anuncios/iframes
✅ `contain: layout` en sections

#### 3. INP (Interaction to Next Paint)

✅ Animaciones optimizadas (0.15s)
✅ GPU acceleration
✅ debounce en inputs pesados
✅ Code splitting

### Medir Performance

\`\`\`bash
# Lighthouse CI
npm run build
npx lighthouse https://ascitgroup.com --view

# Web Vitals
npm install -D web-vitals
\`\`\`

---

## ➕ Cómo Agregar Nuevas Páginas

### Checklist por Página

1. **Crear archivo page.tsx**

\`\`\`tsx
// app/nueva-pagina/page.tsx
import { Metadata } from 'next'
import { generateMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = generateMetadata({
  title: 'Título | ASC IT GROUP',
  description: 'Descripción optimizada para SEO...',
  keywords: ['keyword1', 'keyword2'],
  canonical: 'https://ascitgroup.com/nueva-pagina',
})

export default function NuevaPagina() {
  return <div>Contenido</div>
}
\`\`\`

2. **Agregar JSON-LD si aplica**

\`\`\`tsx
import { JsonLd } from '@/components/seo/JsonLd'

const schema = { /* ... */ }

export default function Page() {
  return (
    <>
      <JsonLd data={schema} />
      {/* Contenido */}
    </>
  )
}
\`\`\`

3. **Agregar tracking de eventos**

\`\`\`tsx
'use client'

import { useAnalytics } from '@/hooks/useAnalytics'

export function ClientComponent() {
  const { trackCTAClick } = useAnalytics()
  
  return <button onClick={() => trackCTAClick('button_name', 'location')}>
    Click me
  </button>
}
\`\`\`

4. **Regenerar sitemap**

\`\`\`bash
npm run build
\`\`\`

---

## ✅ Checklist SEO

### Por Página

- [ ] Metadata completo (title, description)
- [ ] Canonical URL configurado
- [ ] Open Graph tags
- [ ] Twitter Cards
- [ ] JSON-LD structured data (si aplica)
- [ ] Imágenes con alt text
- [ ] Headings jerárquicos (H1 → H2 → H3)
- [ ] Enlaces internos relevantes
- [ ] Mobile responsive
- [ ] Performance > 90 en Lighthouse

### Global

- [ ] Google Analytics 4 configurado
- [ ] Sitemap.xml generado
- [ ] Robots.txt configurado
- [ ] SSL/HTTPS activo
- [ ] Favicon configurado
- [ ] 404 page personalizada
- [ ] hreflang tags (i18n)
- [ ] Schema.org Organization
- [ ] Core Web Vitals optimizados

### Testing

\`\`\`bash
# Test local
npm run dev

# Test build
npm run build
npm run start

# Test SEO
# Google Rich Results Test
https://search.google.com/test/rich-results

# Lighthouse
npx lighthouse http://localhost:3000 --view
\`\`\`

---

## 🔗 Enlaces Útiles

- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics 4](https://analytics.google.com/)
- [Schema.org Documentation](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [Next.js SEO](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Web.dev](https://web.dev/measure/)

---

## 📞 Soporte

Para preguntas sobre SEO o Analytics:

- Email: sac@ascitgroup.com
- WhatsApp: +57 314 795 0662

---

**Última actualización:** Mayo 24, 2026
**Versión:** 1.0.0
