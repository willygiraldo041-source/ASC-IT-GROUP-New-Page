# Variables de Entorno

## Archivo: `.env.local`

Crea un archivo `.env.local` en la raíz de la carpeta `frontend/` con el siguiente contenido:

```env
# ========================================
# SANITY CMS
# ========================================
NEXT_PUBLIC_SANITY_PROJECT_ID=4z0gk085
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

# Sanity API Token (Necesario para draft mode y webhooks)
# Genera en: https://www.sanity.io/manage/personal/project/4z0gk085/api
SANITY_API_TOKEN=

# ========================================
# SITE CONFIGURATION
# ========================================
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=ASC IT GROUP

# ========================================
# ANALYTICS & MONITORING
# ========================================
# Vercel Analytics (Auto-detectado en Vercel)
# NEXT_PUBLIC_VERCEL_ANALYTICS_ID=

# ========================================
# EMAIL & NOTIFICATIONS (Resend)
# ========================================
# Get your API key from: https://resend.com/api-keys
RESEND_API_KEY=

# Email addresses
EMAIL_FROM=noreply@ascitgroup.com
EMAIL_TO=sac@ascitgroup.com

# ========================================
# RECAPTCHA (Google reCAPTCHA v3)
# ========================================
# Get keys from: https://www.google.com/recaptcha/admin
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=
RECAPTCHA_SECRET_KEY=

# ========================================
# PRODUCTION ONLY
# ========================================
# Para producción en Vercel o Cloudflare
# NODE_ENV=production
# NEXT_PUBLIC_SITE_URL=https://ascitgroup.com
```

## 🚀 Para Producción

Configura estas variables en tu plataforma de deployment:

### Vercel
```bash
vercel env add NEXT_PUBLIC_SANITY_PROJECT_ID
vercel env add NEXT_PUBLIC_SANITY_DATASET
vercel env add SANITY_API_TOKEN
vercel env add RESEND_API_KEY
vercel env add NEXT_PUBLIC_RECAPTCHA_SITE_KEY
vercel env add RECAPTCHA_SECRET_KEY
```

### Cloudflare Pages
Agrégalas en: `Settings > Environment Variables`

## Obtener el SANITY_API_TOKEN (Opcional para MVP)

1. Ve a https://www.sanity.io/manage
2. Selecciona tu proyecto: ASC-IT-GROUP-New-Page
3. Ve a API → Tokens
4. Click en "Add API token"
5. Nombre: `Frontend Read Token`
6. Permissions: `Viewer` (solo lectura)
7. Copia el token y pégalo en SANITY_API_TOKEN

**Nota:** Para el MVP, el token no es necesario porque usaremos contenido público.
