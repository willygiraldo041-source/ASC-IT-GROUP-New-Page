# Backlog — ASC IT GROUP

> **Propósito:** registro vivo de todo el trabajo planificado, en progreso y completado del proyecto.
> Cada sesión de trabajo debe abrir este archivo, actualizar el estado de las tareas trabajadas y cerrar con un commit siguiendo el flujo Git descrito en §Flujo de trabajo.
>
> **Responsable de mantenimiento:** actualizar este archivo al inicio y al final de cada sesión.

---

## Flujo de trabajo (SDLC por sesión)

```
main (protegida)
  └── feature/<area>/<descripcion-corta>   ← rama de trabajo
        ├── commits atómicos (convención abajo)
        └── PR → revisión → merge squash → main
```

### Convención de commits (Conventional Commits)

```
<tipo>(<alcance>): <descripción en imperativo, ≤72 chars>

[cuerpo opcional — explica el POR QUÉ, no el qué]
[footer: Closes #N, BREAKING CHANGE, Co-Authored-By…]
```

| Tipo | Cuándo usarlo |
|------|---------------|
| `feat` | Nueva funcionalidad |
| `fix` | Corrección de bug |
| `security` | Remediación de vulnerabilidad |
| `chore` | Limpieza, residuos, dependencias |
| `docs` | Solo documentación |
| `refactor` | Restructuración sin cambio de comportamiento |
| `test` | Adición o corrección de tests |
| `ci` | Cambios en pipelines CI/CD |

### Checklist de cierre de sesión

- [ ] Cambios en `backlog.md` reflejan el estado real
- [ ] `pnpm lint && pnpm build` pasan sin errores (`cd frontend`)
- [ ] Commits atómicos con mensajes convencionales
- [ ] PR abierto contra `main` con descripción de cambios y checklist
- [ ] Rama mergeada solo tras revisión (o auto-aprobación consciente)
- [ ] `main` local sincronizado (`git pull origin main`)

---

## Estado actual del proyecto

| Módulo | Estado |
|--------|--------|
| Frontend Next.js 16 (Cloudflare Pages) | ✅ Productivo |
| Sanity Studio | ✅ Productivo |
| old-react-app | 🗑️ Residual — pendiente eliminar |
| Seguridad web | 🔴 Vulnerabilidades activas — ver Épica S-01 |

---

## Épica S-01 — Remediación de seguridad (Auditoría OWASP 2026-06-01)

**Origen:** auditoría de seguridad completa realizada el 2026-06-01 con metodología OWASP Top 10.
**Rama de trabajo:** `security/remediacion`
**Objetivo:** cerrar todas las vulnerabilidades encontradas y eliminar código residual.

### Resumen de vulnerabilidades

| ID | Hallazgo | Severidad | OWASP | Archivo(s) |
|----|----------|-----------|-------|------------|
| S-01-V1 | Token de escritura Sanity hardcodeado en historial git | 🔴 CRÍTICA | A02/A05 | `update-services.js:9` |
| S-01-V2 | XSS almacenado: protocolo `javascript:` en enlaces del CMS | 🟠 MEDIA | A03 | `PortableTextRenderer.tsx:54-66` |
| S-01-V3 | Sin cabeceras de seguridad HTTP (CSP, X-Frame-Options, HSTS…) | 🟠 MEDIA | A05 | (falta `frontend/public/_headers`) |
| S-01-V4 | Web3Forms access key hardcodeada en código y config commiteada | 🟡 BAJA-MEDIA | A05 | `Contact.tsx:64`, `wrangler.jsonc:8` |
| S-01-V5 | Logging de PII (nombre, email, mensaje) en consola del cliente | 🟡 BAJA | A09 | `Contact.tsx:65-66,83` |
| S-01-V6 | Locale sin validación runtime (path traversal mínimo) | 🔵 INFO | A05 | `LanguageContext.tsx:26` |

### Tareas de la Épica S-01

#### FASE 0 — Contención inmediata (👤 Manual — sin código)

- [ ] **S-01-T01** · Rotar token de Sanity comprometido
  - Panel: [manage.sanity.io](https://manage.sanity.io) → proyecto `4z0gk085` → API → Tokens
  - Revocar: `skD4FQfJ8YZhGqHBxQp9k…` (token expuesto en commit `3c2672d`)
  - Crear token nuevo con permisos mínimos → guardar SOLO en GitHub Secrets (`SANITY_API_TOKEN`) y `.env.local`
  - Verificar: el token viejo devuelve `401 Unauthorized`

- [ ] **S-01-T02** · Revisar y revocar otros tokens desconocidos en Sanity (panel)

#### FASE 1 — Eliminar secretos del código (🤖 Claude)

- [ ] **S-01-T03** · Eliminar `update-services.js` de la raíz
  - Motivo: script residual con token de escritura hardcodeado
  - Alternativa segura ya existe: `studio/scripts/updateServices.ts`

- [ ] **S-01-T04** · Quitar fallback literal de Web3Forms key en `Contact.tsx:64`
  - Cambio: `const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY` (sin literal)

- [ ] **S-01-T05** · Mover `NEXT_PUBLIC_WEB3FORMS_KEY` fuera de `wrangler.jsonc`
  - Configurarla en el panel de Cloudflare Pages como variable de entorno
  - Dejar `wrangler.jsonc` sin el bloque `vars` con esa clave

#### FASE 2 — Hardening XSS y cabeceras HTTP (🤖 Claude)

- [ ] **S-01-T06** · Validar esquema de URLs en `PortableTextRenderer.tsx`
  - Solo permitir `http://`, `https://`, `mailto:`, `tel:`
  - Bloquear `javascript:` y cualquier protocolo desconocido

- [ ] **S-01-T07** · Crear `frontend/public/_headers` con cabeceras de seguridad
  - Incluir: `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `HSTS`, `CSP`, `frame-ancestors: 'none'`
  - Verificar con `curl -I` + [securityheaders.com](https://securityheaders.com) (objetivo ≥ A)

#### FASE 3 — Higiene de datos (🤖 Claude)

- [ ] **S-01-T08** · Eliminar `console.log` con PII en `Contact.tsx` (líneas 65-66, 83)

- [ ] **S-01-T09** · Validar `locale` en runtime en `LanguageContext.tsx:26`
  - `const safe = saved === 'en' ? 'en' : 'es'`

#### FASE 4 — Eliminación de residuos (🤖 Claude con visto bueno)

- [ ] **S-01-T10** · Eliminar directorio `old-react-app/` completo
  - App Vite anterior; no entra en el pipeline de build ni deploy

- [ ] **S-01-T11** · Eliminar assets huérfanos en `public/` raíz
  - Archivos: `vite.svg`, `quienes somos.png`, `01-01.png`…`01-05.png`, `logo_asc.png`
  - El sitio activo usa `frontend/public/`
  - ⚠️ No tocar: `package.json` y `package-lock.json` raíz (orquestan el monorepo)

#### FASE 5 — Verificación y cierre (🤝 Conjunto)

- [ ] **S-01-T12** · `pnpm lint && pnpm build` sin errores en `frontend/`

- [ ] **S-01-T13** · Smoke test: home, blog, servicios, formulario, cambio ES/EN

- [ ] **S-01-T14** · PR `security/remediacion → main` con descripción completa y checklist

- [ ] **S-01-T15** · (Opcional) Purgar token del historial git con `git filter-repo` / BFG
  - Solo higiene; el token ya estaría revocado en T01
  - Requiere coordinar con colaboradores (force-push)

---

## Épicas futuras (backlog)

> Sección para registrar trabajo futuro que surja en sesiones posteriores.

| ID | Épica | Prioridad | Sesión estimada |
|----|-------|-----------|-----------------|
| — | *(por definir)* | — | — |

---

## Historial de sesiones

| Fecha | Épica(s) trabajadas | Tareas completadas | PR |
|-------|--------------------|--------------------|-----|
| 2026-06-01 | S-01 (análisis) | Auditoría OWASP completa, plan redactado | — |

