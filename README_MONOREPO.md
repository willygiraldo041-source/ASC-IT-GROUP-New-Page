# ASC IT GROUP - Monorepo

Este proyecto usa **pnpm workspaces** para gestionar el frontend (Next.js) y el CMS (Sanity Studio) en un solo repositorio.

## 🏗️ Estructura

```
ASC-IT-GROUP/
├── frontend/          # Next.js 16 App + Tailwind
├── studio/            # Sanity Studio CMS
├── pnpm-workspace.yaml
└── package.json       # Scripts del monorepo
```

## 🚀 Comandos Principales

### Desarrollo
```bash
# Correr frontend y studio simultáneamente
pnpm dev

# Solo frontend (Next.js en localhost:3000)
pnpm dev:frontend

# Solo studio (Sanity en localhost:3333)
pnpm dev:studio
```

### Build
```bash
# Build frontend
pnpm build

# Build studio
pnpm build:studio
```

### Deploy
```bash
# Deploy frontend a Cloudflare
pnpm deploy

# Deploy studio
pnpm deploy:studio
```

## 📝 Variables de Entorno

### Frontend (`frontend/.env.local`)
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=v7zj-g844
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

Ver `frontend/ENV_SETUP.md` para más detalles.

## 🔗 URLs de Desarrollo

- **Frontend:** http://localhost:3000
- **Sanity Studio:** http://localhost:3333

## 📚 Documentación

- **Frontend:** Ver `frontend/README.md`
- **Studio:** Ver `studio/README.md`
- **Plan de migración:** Ver `.windsurf/plans/`

## 🛠️ Tecnologías

- **Frontend:** Next.js 16, React 19, Tailwind CSS, TypeScript
- **CMS:** Sanity Studio v3
- **Deploy:** Cloudflare Workers (frontend), Sanity Cloud (studio)
- **Package Manager:** pnpm

## 📦 Instalación

```bash
# Instalar dependencias de todos los workspaces
pnpm install
```
