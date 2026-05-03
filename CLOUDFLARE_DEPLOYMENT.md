# ☁️ Deployment a Cloudflare Pages - Guía Completa

## 🚀 ASC IT GROUP - Cloudflare Optimizado

Esta guía cubre el deployment completo de tu aplicación Next.js en **Cloudflare Pages** con todas las optimizaciones activadas.

---

## 📋 Pre-requisitos

- ✅ Cuenta de Cloudflare (gratuita)
- ✅ Repositorio Git (GitHub/GitLab)
- ✅ Node.js 18+ instalado
- ✅ pnpm instalado
- ✅ Wrangler CLI actualizado

---

## 🔧 Paso 1: Instalar Dependencias

```bash
cd frontend
pnpm install
```

Esto instalará:
- `wrangler@^4.100.0` - CLI de Cloudflare (última versión)
- `@cloudflare/next-on-pages@^1.15.6` - Adaptador Next.js para Cloudflare
- `@cloudflare/workers-types@^4.20250423.0` - TypeScript types

---

## 🏗️ Paso 2: Build Local (Testing)

### Opción A: Build para Cloudflare
```bash
pnpm build:cloudflare
```

### Opción B: Preview Local con Wrangler
```bash
pnpm preview:cloudflare
```
→ Abre http://localhost:8788

---

## ☁️ Paso 3: Deploy a Cloudflare Pages

### Método 1: Desde Git (Recomendado)

1. **Push tu código a GitHub/GitLab**
```bash
git add .
git commit -m "feat: optimize for Cloudflare Pages"
git push origin main
```

2. **Conecta en Cloudflare Dashboard**
   - Ve a: https://dash.cloudflare.com/
   - Click en **Pages** → **Create a project**
   - Conecta tu repositorio Git
   - Selecciona el repositorio: `New_Page_ASCITGROUP`

3. **Configuración del Build**
```
Framework preset: Next.js
Build command: pnpm pages:build
Build output directory: .vercel/output/static
Root directory: frontend
Node version: 18
```

4. **Variables de Entorno**

Agrega estas variables en `Settings → Environment variables`:

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=4z0gk085
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=<tu-token-aqui>

# Site Config
NEXT_PUBLIC_SITE_URL=https://ascitgroup.pages.dev

# Email (Resend)
RESEND_API_KEY=<tu-api-key>
EMAIL_FROM=noreply@ascitgroup.com
EMAIL_TO=sac@ascitgroup.com

# reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=<tu-site-key>
RECAPTCHA_SECRET_KEY=<tu-secret-key>

# Node Environment
NODE_VERSION=18
```

5. **Deploy**
   - Click en **Save and Deploy**
   - Espera ~2-3 minutos
   - Tu sitio estará en: `https://asc-it-group.pages.dev`

---

### Método 2: Deploy Directo con Wrangler (CLI)

```bash
# Login a Cloudflare
npx wrangler login

# Deploy
pnpm deploy:cloudflare
```

**Nombre del proyecto:** `asc-it-group`

---

## 🌐 Paso 4: Configurar Dominio Custom

### Opción A: Dominio en Cloudflare

Si tu dominio está en Cloudflare:

1. Ve a **Pages** → Tu proyecto → **Custom domains**
2. Click **Set up a custom domain**
3. Ingresa: `ascitgroup.com`
4. Click **Activate domain**
5. Cloudflare configurará los DNS automáticamente ✅

### Opción B: Dominio Externo

Si tu dominio NO está en Cloudflare:

1. En tu proveedor de DNS, agrega estos registros:

```
Type: CNAME
Name: www
Value: asc-it-group.pages.dev
Proxy: ✅ (si es Cloudflare) o ❌

Type: CNAME (o ALIAS)
Name: @
Value: asc-it-group.pages.dev
```

2. Espera propagación DNS (hasta 24 horas)

---

## ⚡ Paso 5: Optimizaciones Post-Deploy

### 1. Habilitar Cloudflare Zaraz (Analytics)

**Dashboard → Zaraz → Create Account**

Agrega:
- Google Analytics 4
- Facebook Pixel (opcional)
- Hotjar (opcional)

### 2. Configurar Rules (Page Rules)

**Dashboard → Rules → Page Rules**

```
Rule 1: Cache Everything
URL: ascitgroup.com/*
Settings:
  - Cache Level: Cache Everything
  - Edge Cache TTL: 1 month
  - Browser Cache TTL: 4 hours

Rule 2: Security Headers (ya están en next.config.ts)
URL: ascitgroup.com/*
Settings:
  - Security Level: High
  - SSL: Full (strict)
```

### 3. Activar Speed Optimizations

**Dashboard → Speed → Optimization**

Activa:
- ✅ Auto Minify (JavaScript, CSS, HTML)
- ✅ Brotli compression
- ✅ Early Hints
- ✅ Rocket Loader
- ✅ Mirage (lazy load images)
- ✅ Polish (image optimization) - **Requiere plan Pro**

### 4. Configurar Caching

**Dashboard → Caching → Configuration**

```
Caching Level: Standard
Browser Cache TTL: Respect Existing Headers
Always Online: ✅ On
Development Mode: ❌ Off (solo para debugging)
```

### 5. Activar Firewall Rules

**Dashboard → Security → WAF**

Reglas sugeridas:
```
Rule 1: Block Bad Bots
Expression: (cf.client.bot)
Action: Block

Rule 2: Rate Limiting (Contact Form)
Expression: (http.request.uri.path eq "/api/contact")
Action: Rate Limit (10 requests per minute)

Rule 3: Geo-blocking (opcional)
Expression: (ip.geoip.country in {"CN" "RU"})
Action: Challenge
```

---

## 📊 Paso 6: Monitoring & Analytics

### Cloudflare Web Analytics (Gratuito)

1. **Dashboard → Analytics → Web Analytics**
2. Click **Add a site**
3. Copia el snippet JavaScript
4. Agrega en `frontend/src/app/layout.tsx`:

```tsx
<Script
  defer
  src='https://static.cloudflareinsights.com/beacon.min.js'
  data-cf-beacon='{"token": "TU_TOKEN_AQUI"}'
/>
```

### Real User Monitoring (RUM)

Ya incluido con Vercel Analytics, pero también puedes usar Cloudflare:

**Dashboard → Speed → Measurements**

Activa:
- ✅ Core Web Vitals
- ✅ Page Load Time
- ✅ Time to First Byte (TTFB)

---

## 🔒 Paso 7: SSL/TLS Configuration

**Dashboard → SSL/TLS → Overview**

Configuración recomendada:
```
Encryption mode: Full (strict)
Minimum TLS Version: 1.2
Opportunistic Encryption: ✅ On
TLS 1.3: ✅ On
Automatic HTTPS Rewrites: ✅ On
Certificate Transparency Monitoring: ✅ On
```

### Forzar HTTPS

**Dashboard → SSL/TLS → Edge Certificates**

```
Always Use HTTPS: ✅ On
HTTP Strict Transport Security (HSTS): ✅ Enable
  - Max Age Header: 12 months
  - Include subdomains: ✅ Yes
  - Preload: ✅ Yes
```

---

## 🎯 Performance Benchmarks

Después del deployment, deberías obtener:

### Lighthouse Scores (Target)
```
Performance:     95-100 ⚡
Accessibility:   95-100 ♿
Best Practices:  95-100 ✅
SEO:            95-100 🔍
```

### Core Web Vitals
```
LCP (Largest Contentful Paint):  < 2.5s
FID (First Input Delay):          < 100ms
CLS (Cumulative Layout Shift):    < 0.1
TTFB (Time to First Byte):        < 600ms
```

### Cloudflare Metrics
```
Global CDN Response Time:  < 50ms
Cache Hit Ratio:           > 80%
Bandwidth Saved:           > 60%
```

---

## 🔄 Continuous Deployment

### Automatic Deploys

Cada `git push` a `main` desplegará automáticamente:

```bash
git add .
git commit -m "feat: new feature"
git push origin main
```

→ Cloudflare Pages auto-detecta y deploya en ~2-3 min

### Preview Deployments

Cada Pull Request genera un preview:
```
URL: https://<branch>.asc-it-group.pages.dev
```

### Rollback

Si algo falla:

1. **Dashboard → Pages → Deployments**
2. Selecciona un deployment anterior
3. Click **...** → **Rollback to this deployment**

---

## 🐛 Troubleshooting

### Build Failed

**Error:** `Module not found`
```bash
# Solución: Limpia cache y reinstala
rm -rf node_modules .next
pnpm install
pnpm build:cloudflare
```

**Error:** `Out of memory`
```bash
# Solución: Aumenta memoria de Node
export NODE_OPTIONS="--max-old-space-size=4096"
pnpm build:cloudflare
```

### Deploy Exitoso pero sitio en blanco

**Causa:** Variables de entorno faltantes

**Solución:**
1. Ve a **Settings → Environment Variables**
2. Verifica que TODAS las variables estén configuradas
3. Re-deploy: **Deployments → Retry deployment**

### Imágenes no cargan (404)

**Causa:** Sanity CDN no está en allowed origins

**Solución:**
```ts
// next.config.ts
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'cdn.sanity.io',
      pathname: '/images/**',
    },
  ],
}
```

### CORS Errors

**Solución en Sanity:**
1. https://sanity.io/manage → Tu proyecto
2. **API → CORS Origins**
3. Agrega: `https://ascitgroup.com`
4. Agrega: `https://asc-it-group.pages.dev`

---

## 💰 Costos

### Cloudflare Pages (Free Plan)
```
✅ 500 builds/month
✅ Unlimited bandwidth
✅ Unlimited requests
✅ 1 concurrent build
✅ DDoS protection
✅ CDN global
✅ SSL gratuito
```

### Cloudflare Pages (Pro - $20/mes)
```
✅ 5,000 builds/month
✅ 5 concurrent builds
✅ Image Resizing & Polish
✅ Advanced analytics
```

### Costos Estimados (Free Forever)
```
Cloudflare Pages:     $0/mes
Sanity (Free):        $0/mes (hasta 3 usuarios)
Vercel Analytics:     $0/mes
Total:               $0/mes 🎉
```

---

## 📚 Recursos

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Next.js on Cloudflare](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)
- [Cloudflare Workers](https://workers.cloudflare.com/)

---

## 🎊 ¡Deployment Completo!

Tu sitio está ahora:
- ✅ Desplegado globalmente en 300+ ciudades
- ✅ Protegido con DDoS mitigation
- ✅ Optimizado para Core Web Vitals
- ✅ Con SSL/TLS automático
- ✅ Cache inteligente activado
- ✅ Monitoreado con analytics

**URL:** https://asc-it-group.pages.dev

---

**¿Problemas? Contáctanos:** sac@ascitgroup.com
