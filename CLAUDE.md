# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ASC IT GROUP is a professional cybersecurity company website — a monorepo with two workspaces:

- **`frontend/`** — Next.js 16 app (static export → Cloudflare Pages)
- **`studio/`** — Sanity Studio v3 (headless CMS, deployed to `ascitgroup.sanity.studio`)

## Commands

All commands should be run from within the relevant workspace directory.

### Frontend (`cd frontend`)

```bash
pnpm dev              # Dev server → http://localhost:3000
pnpm build            # Production build (static export to out/)
pnpm deploy           # Deploy static export to Cloudflare via Wrangler
pnpm lint             # ESLint (Next.js core-web-vitals + TypeScript rules)
```

### Studio (`cd studio`)

```bash
pnpm dev              # Sanity Studio dev → http://localhost:3334
pnpm build            # Build studio
pnpm deploy           # Deploy studio to Sanity CDN
```

### From monorepo root

```bash
npm run dev           # Starts frontend dev server
npm run dev:studio    # Starts Sanity Studio dev server
npm run build         # Builds frontend (installs deps too)
```

## Environment Variables

Copy `frontend/env.template` to `frontend/.env.local`. Minimum required for local dev:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=4z0gk085
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Architecture

### Next.js 16 — Breaking Changes Note

This project uses Next.js 16, which has breaking changes. Before modifying any Next.js-specific code (routing, layouts, data fetching), check `node_modules/next/dist/docs/` for current API docs.

### Static Export + Cloudflare

The frontend outputs a fully static site (`output: 'export'` in `next.config.ts`). This means:
- **No server-side rendering at request time** — data is fetched at build time
- `next/image` uses `unoptimized: true`
- API routes are not available (forms use Web3Forms; no server functions)
- Build output goes to `out/`, deployed via Wrangler

### Data Flow: Sanity → Frontend

Pages are Server Components that fetch from Sanity at build time using the client at `frontend/src/sanity/client.ts`. GROQ queries live in `frontend/src/sanity/queries.ts`. Sanity schema types are defined in `studio/src/schemaTypes/documents/`.

The TypeScript types mirroring Sanity schemas are in `frontend/src/types/sanity.ts`. All Sanity fetches are wrapped in `try/catch` with empty array/null fallbacks so the site builds even when Sanity is unreachable.

There are **two separate query files**:
- `frontend/src/sanity/queries.ts` — main queries used by server-page components (services, settings, case studies)
- `frontend/src/lib/sanity/queries.ts` — blog-specific queries (blogPost, category, author) with language filtering

### Internationalization

The site supports Spanish (`es`, default) and English (`en`). There are two parallel i18n systems in use:

1. **`next-intl`** — routing configuration in `frontend/src/i18n/routing.ts`, with `localePrefix: 'as-needed'` (Spanish URLs have no prefix; English uses `/en/...`)
2. **`LanguageContext`** — a custom React context (`frontend/src/contexts/LanguageContext.tsx`) that loads JSON translation files from `frontend/messages/{locale}.json` at runtime. Used by client components via `useLanguage()` hook and `t('key.path')` function.

Translation files: `frontend/messages/es.json` and `frontend/messages/en.json`.

### Component Structure

```
frontend/src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (fonts, analytics, toasts, LanguageProvider)
│   ├── page.tsx            # Home (server component, fetches Sanity data)
│   ├── blog/               # Blog listing + [slug] detail
│   ├── services/           # Many static service pages + [slug] dynamic
│   ├── about/, case-studies/, privacy/, terms/
├── components/
│   ├── layout/             # Navbar, NavbarClient, Footer
│   ├── pages/              # HomeClient (client wrapper for home sections)
│   ├── sections/           # Hero, Services, About, CTA, Contact
│   ├── blog/               # Blog-specific components
│   ├── case-studies/       # Case study components
│   ├── ui/                 # Shared primitives (Button, Container, etc.)
│   ├── analytics/          # GoogleAnalytics (wrapped in Suspense)
│   └── seo/                # JsonLd structured data
├── contexts/               # LanguageContext
├── hooks/                  # useAnalytics, useMediaQuery
├── lib/                    # animations, scroll, SEO utilities, validations
├── sanity/                 # client.ts, queries.ts, image.ts
└── types/                  # sanity.ts (TypeScript interfaces)
```

### Server vs Client Components

The pattern used throughout: server page components fetch data → pass as props to `*Client.tsx` client components. Example: `app/page.tsx` (server) fetches services/settings from Sanity, passes to `HomeClient.tsx` (client) which renders the interactive sections.

### Styling

Tailwind CSS v4 with `postcss.config.mjs`. Prettier formats with `prettier-plugin-tailwindcss` for class sorting. Configuration: no semicolons, single quotes, 2-space indent, trailing commas (ES5).

### Sanity CMS Schemas

Defined in `studio/src/schemaTypes/documents/`:
- `settings.ts` — site-wide config (contact info, social links, logo)
- `service.ts` — cybersecurity service entries
- `blogPost.ts` — blog articles (with `language` field for i18n)
- `caseStudy.ts` — client case studies
- `author.ts`, `category.ts` — blog metadata
- `localizedString.ts`, `localizedText.ts` — reusable i18n objects
