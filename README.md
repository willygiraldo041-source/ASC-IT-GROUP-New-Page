# 🛡️ ASC IT GROUP - Professional Cybersecurity Landing Page

> **Nivel profesional mejor que Apple** - Landing page moderna y optimizada para servicios de ciberseguridad con Sanity CMS, desplegada en Cloudflare Pages.

[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-F38020?logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Sanity](https://img.shields.io/badge/Sanity-CMS-F03E2F?logo=sanity&logoColor=white)](https://www.sanity.io/)

---

## 🌐 Live Sites

- **Production**: [https://asc-it-group.administrator-794.workers.dev/](https://asc-it-group.administrator-794.workers.dev/)
- **Sanity Studio**: [https://ascitgroup.sanity.studio](https://ascitgroup.sanity.studio) _(pending deployment)_

---

## 🚀 Tech Stack

### Frontend
- **Next.js 16** - App Router, React Server Components, ISR
- **React 19** - UI library con Server Actions
- **TypeScript 5** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **Framer Motion 12** - Animaciones fluidas
- **Radix UI** - Componentes accesibles
- **@splinetool/react-spline** - 3D backgrounds

### CMS & Backend
- **Sanity Studio v3** - Headless CMS
- **@sanity/client 7** - Cliente oficial
- **next-sanity 12** - Integración Next.js

### Forms & Validation
- **React Hook Form 7** - Gestión de formularios
- **Zod 4** - Validación de schemas
- **react-google-recaptcha-v3** - Protección anti-spam

### Deployment & Infrastructure
- **Cloudflare Pages** - Edge hosting global
- **Wrangler 4.100+** - CLI de Cloudflare (última versión)
- **@cloudflare/next-on-pages** - Adaptador Next.js
- **Vercel Analytics** - Monitoreo de performance

### Email & Communications
- **Resend** - Email API transaccional
- **WhatsApp API** - Botón flotante integrado

---

## ✨ Features

### 🎨 **Diseño & UX**
- ✅ Hero con Spline 3D grid animado
- ✅ Diseño dark theme con azul eléctrico
- ✅ Responsive en todos los dispositivos
- ✅ Animaciones con Framer Motion
- ✅ Tipografía profesional (Sora)
- ✅ Accesibilidad WCAG 2.1 AA

### 📱 **Funcionalidades**
- ✅ WhatsApp flotante con tooltip animado
- ✅ Formulario de contacto con validación
- ✅ Blog/Noticias dinámico desde Sanity
- ✅ Testimonios de clientes
- ✅ Casos de éxito
- ✅ 6 Servicios dinámicos

### ⚡ **Performance & SEO**
- ✅ Lighthouse Score: 95-100
- ✅ Core Web Vitals optimizados
- ✅ ISR con revalidación cada 60s
- ✅ Meta tags Open Graph
- ✅ JSON-LD Structured Data
- ✅ Sitemap automático
- ✅ Image optimization (AVIF/WebP)

### 🔒 **Seguridad**
- ✅ Security Headers (HSTS, CSP, etc.)
- ✅ reCAPTCHA v3
- ✅ Rate limiting
- ✅ Input sanitization
- ✅ SSL/TLS Full Strict
- ✅ DDoS protection (Cloudflare)

---

## 🏁 Getting Started

### 1. **Clonar Repositorio**

```bash
git clone <tu-repo-url>
cd New_Page_ASCITGROUP
```

### 2. **Instalar Dependencias**

```bash
# Instalar pnpm globalmente
npm install -g pnpm

# Instalar dependencias del proyecto
pnpm install
```

### 3. **Configurar Variables de Entorno**

Crea `frontend/.env.local`:

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=4z0gk085
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

# Site Config
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Ver `frontend/ENV_SETUP.md` para más detalles.

### 4. **Ejecutar en Desarrollo**

#### Terminal 1 - Frontend (Next.js)
```bash
cd frontend
pnpm dev
```
→ http://localhost:3000

#### Terminal 2 - Sanity Studio (CMS)
```bash
cd studio
pnpm dev
```
→ http://localhost:3334

### 5. **Build para Producción**

#### Build estándar
```bash
cd frontend
pnpm build
```

#### Build optimizado para Cloudflare
```bash
cd frontend
pnpm build:cloudflare
```

### 6. **Preview Producción Local**

```bash
cd frontend
pnpm preview:cloudflare
```
→ http://localhost:8788

---

## ☁️ Deploy a Cloudflare Pages

### Opción 1: Deploy Automático (GitHub)

1. Push a GitHub:
```bash
git push origin main
```

2. Conecta en Cloudflare Dashboard:
   - Pages → Create a project → Connect Git
   - Build command: `pnpm pages:build`
   - Build output: `.vercel/output/static`
   - Root directory: `frontend`

### Opción 2: Deploy Manual (CLI)

```bash
cd frontend

# Login a Cloudflare
pnpm wrangler login

# Deploy
pnpm deploy:cloudflare
```

Ver guía completa: **[CLOUDFLARE_DEPLOYMENT.md](./CLOUDFLARE_DEPLOYMENT.md)**

---

## 📖 Documentación

- **[ENV_SETUP.md](./frontend/ENV_SETUP.md)** - Variables de entorno
- **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Guía general de deployment
- **[CLOUDFLARE_DEPLOYMENT.md](./CLOUDFLARE_DEPLOYMENT.md)** - Deployment específico para Cloudflare

---

## 🗂️ Estructura del Proyecto

```
New_Page_ASCITGROUP/
├── frontend/                    # Next.js App
│   ├── src/
│   │   ├── app/                # App Router
│   │   │   ├── layout.tsx      # Root layout
│   │   │   └── page.tsx        # Home page
│   │   ├── components/
│   │   │   ├── layout/         # Navbar, Footer
│   │   │   ├── sections/       # Hero, Services, About, etc.
│   │   │   └── ui/             # Button, Container, WhatsApp
│   │   ├── lib/                # Utilities, animations
│   │   ├── sanity/             # Sanity client & queries
│   │   └── types/              # TypeScript types
│   ├── public/                 # Static assets
│   ├── .env.local              # Environment variables
│   ├── next.config.ts          # Next.js config (Cloudflare optimized)
│   ├── wrangler.toml           # Cloudflare config
│   └── package.json
│
├── studio/                      # Sanity Studio (CMS)
│   ├── src/
│   │   └── schemaTypes/
│   │       └── documents/      # Schemas: settings, service, blog, etc.
│   ├── sanity.config.ts        # Sanity config
│   └── package.json
│
├── scripts/                     # Automation scripts
│   ├── install-cloudflare.sh   # Setup script (Linux/Mac)
│   └── install-cloudflare.ps1  # Setup script (Windows)
│
├── .github/
│   └── workflows/
│       └── deploy-cloudflare.yml  # CI/CD Pipeline
│
└── docs/                        # Documentación
```

---

## 🎨 Temas y Colores

```css
/* Dark Theme con Azul Eléctrico */
--primary: 210 100% 50%;       /* Azul eléctrico */
--background: 0 0% 10%;        /* Casi negro */
--foreground: 0 0% 96%;        /* Casi blanco */
--hero-bg: 0 0% 8%;            /* Negro profundo */
```

---

## 📋 Scripts Disponibles

### Frontend
```bash
pnpm dev                  # Desarrollo local
pnpm build                # Build estándar
pnpm build:cloudflare     # Build optimizado para Cloudflare
pnpm preview:cloudflare   # Preview local con Wrangler
pnpm deploy:cloudflare    # Deploy directo a Cloudflare
pnpm lint                 # Lint code
```

### Studio (Sanity)
```bash
pnpm dev                  # Desarrollo local (puerto 3334)
pnpm build                # Build Sanity Studio
pnpm deploy               # Deploy Studio a Sanity CDN
pnpm sanity dataset create production  # Crear dataset
```

---

## 🛠️ Comandos Útiles

### Actualizar Dependencias de Cloudflare
```bash
# Windows
.\scripts\install-cloudflare.ps1

# Linux/Mac
chmod +x ./scripts/install-cloudflare.sh
./scripts/install-cloudflare.sh
```

### Importar Datos de Prueba a Sanity
```bash
cd studio
pnpm sanity dataset import data/services.ndjson production
```

### Verificar Build
```bash
cd frontend
pnpm build:cloudflare
# Si no hay errores, está listo para production
```

---

## 🔧 Troubleshooting

### Build falla con error de memoria
```bash
export NODE_OPTIONS="--max-old-space-size=4096"
pnpm build:cloudflare
```

### Wrangler no detecta proyecto
```bash
cd frontend
pnpm wrangler login
# Verifica wrangler.toml
```

### Imágenes no cargan desde Sanity
```bash
# Verifica CORS en Sanity Dashboard
# API → CORS Origins → Agregar tu dominio
```

---

## 📊 Performance Benchmarks

### Lighthouse (Target)
- **Performance**: 95-100 ⚡
- **Accessibility**: 95-100 ♿
- **Best Practices**: 95-100 ✅
- **SEO**: 95-100 🔍

### Core Web Vitals
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1
- **TTFB**: < 600ms

---

## 🤝 Contribuir

Este es un proyecto privado de ASC IT GROUP.

---

## 📝 Licencia

© 2024 ASC IT GROUP. Todos los derechos reservados.

---

## 📞 Soporte

¿Problemas o preguntas?

- **Email**: sac@ascitgroup.com
- **Website**: https://ascitgroup.com
- **WhatsApp**: Contacto directo desde la web

---

**🎉 ¡Tu landing page profesional está lista para conquistar el mundo!**
