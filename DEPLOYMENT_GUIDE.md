# 🚀 Guía de Deployment - ASC IT GROUP

## 📦 Stack Tecnológico

- **Frontend**: Next.js 16 (App Router) + TypeScript + Tailwind CSS
- **CMS**: Sanity Studio v3
- **Animaciones**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Email**: Resend
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel / Cloudflare Pages

---

## 🏗️ Arquitectura del Proyecto

```
New_Page_ASCITGROUP/
├── frontend/           # Next.js App
│   ├── src/
│   │   ├── app/       # App Router (Pages & Layouts)
│   │   ├── components/
│   │   │   ├── layout/    # Navbar, Footer
│   │   │   ├── sections/  # Hero, Services, About, etc.
│   │   │   └── ui/        # Button, Container, WhatsAppButton
│   │   ├── lib/       # Utilities, animations, validations
│   │   ├── sanity/    # Sanity client & queries
│   │   └── types/     # TypeScript types
│   └── .env.local     # Variables de entorno (no comitear)
│
└── studio/            # Sanity Studio
    ├── src/
    │   └── schemaTypes/
    │       └── documents/  # Schemas: settings, service, blog, etc.
    └── sanity.config.ts
```

---

## 🔧 Instalación Local

### 1. Clonar Repositorio
```bash
git clone <tu-repo>
cd New_Page_ASCITGROUP
```

### 2. Instalar Dependencias
```bash
pnpm install
```

### 3. Configurar Variables de Entorno

**Frontend** - Crea `frontend/.env.local`:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=4z0gk085
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Ejecutar en Desarrollo

**Terminal 1 - Frontend:**
```bash
cd frontend
pnpm dev
```
→ http://localhost:3000

**Terminal 2 - Sanity Studio:**
```bash
cd studio
pnpm dev
```
→ http://localhost:3334

---

## 🌐 Deployment a Producción

### Opción 1: Vercel (Recomendado)

#### Frontend
```bash
cd frontend
vercel
```

**Configurar Variables de Entorno en Vercel:**
1. Ve a: `Project Settings → Environment Variables`
2. Agrega:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID=4z0gk085`
   - `NEXT_PUBLIC_SANITY_DATASET=production`
   - `NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01`
   - `NEXT_PUBLIC_SITE_URL=https://tu-dominio.com`
   - `RESEND_API_KEY=re_xxx` (si usas email)

#### Sanity Studio
```bash
cd studio
pnpm sanity deploy
```

**Dominio sugerido:** `studio.ascitgroup.com`

---

### Opción 2: Cloudflare Pages

#### Frontend

1. **Conecta el repo** en Cloudflare Pages
2. **Build settings:**
   - Build command: `pnpm build`
   - Build output directory: `.next`
   - Root directory: `frontend`
3. **Variables de entorno:** Agregar las mismas que Vercel

#### Sanity Studio

Usa `pnpm sanity deploy` (se despliega en Sanity's CDN)

---

## 📝 Contenido CMS

### Schemas Disponibles

1. **Site Settings** (Singleton)
   - Nombre del sitio
   - Email, teléfono, WhatsApp
   - Redes sociales
   - Logo

2. **Services**
   - Título, descripción, características
   - Icono (Lucide)
   - Imagen
   - Orden

3. **Case Studies**
   - Cliente, industria
   - Desafío, solución, resultados
   - Tags, imagen

4. **Blog Posts**
   - Título, contenido (rich text)
   - Imagen, categoría, tags
   - Autor, fecha

5. **Testimonials**
   - Nombre, cargo, empresa
   - Foto, testimonio
   - Calificación (1-5)

---

## 🎨 Personalización

### Colores (Tailwind)

Edita `frontend/src/app/globals.css`:

```css
:root {
  --primary: 210 100% 50%;      /* Azul eléctrico */
  --background: 0 0% 10%;       /* Negro oscuro */
  --foreground: 0 0% 96%;       /* Blanco casi puro */
}
```

### Fuente

Cambia en `frontend/src/app/layout.tsx`:

```ts
import { Sora } from 'next/font/google'

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})
```

---

## 🔒 Seguridad

### Headers de Seguridad

Agregar en `frontend/next.config.ts`:

```ts
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin',
        },
      ],
    },
  ]
}
```

---

## 📊 SEO

El sitio ya incluye:
- ✅ Meta tags optimizados
- ✅ Open Graph
- ✅ Twitter Cards
- ✅ JSON-LD Structured Data
- ✅ Sitemap automático
- ✅ robots.txt

---

## 🚨 Troubleshooting

### Error: "Project not found"
→ Verifica el `NEXT_PUBLIC_SANITY_PROJECT_ID` en `.env.local`

### WhatsApp no aparece
→ Asegúrate de tener `whatsappNumber` configurado en Site Settings

### Imágenes no cargan
→ Verifica que el dominio esté en la lista de allowed origins de Sanity

---

## 📞 Soporte

Para dudas: sac@ascitgroup.com

---

**¡Tu sitio está listo para producción! 🎉**
