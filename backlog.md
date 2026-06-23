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
| old-react-app | ✅ Eliminado (sesión 2026-06-03) |
| Seguridad web | ✅ Remediado — PR `security/remediacion` pendiente merge |

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

- [x] **S-01-T01** · Rotar token de Sanity comprometido ✅ 2026-06-03
  - No había tokens activos en el panel (el comprometido ya no existía)
  - Creado token nuevo `frontend-prod-read` con permisos Viewer
  - Guardado en GitHub Secrets (`SANITY_API_TOKEN`) y `frontend/.env.local`

- [x] **S-01-T02** · Revisar tokens desconocidos en Sanity ✅ 2026-06-03
  - Panel sin tokens previos — nada que revocar

#### FASE 1 — Eliminar secretos del código (🤖 Claude)

- [x] **S-01-T03** · Eliminar `update-services.js` de la raíz ✅ 2026-06-03
- [x] **S-01-T04** · Quitar fallback literal de Web3Forms key en `Contact.tsx` ✅ 2026-06-03
- [x] **S-01-T05** · Mover `NEXT_PUBLIC_WEB3FORMS_KEY` fuera de `wrangler.jsonc` ✅ 2026-06-03
  - ⚠️ Pendiente: configurarla en el panel de Cloudflare Pages como variable de entorno

#### FASE 2 — Hardening XSS y cabeceras HTTP (🤖 Claude)

- [x] **S-01-T06** · Validar esquema de URLs en `PortableTextRenderer.tsx` ✅ 2026-06-03
- [x] **S-01-T07** · Crear `frontend/public/_headers` con cabeceras de seguridad ✅ 2026-06-03
  - ⚠️ Pendiente: verificar con securityheaders.com tras deploy

#### FASE 3 — Higiene de datos (🤖 Claude)

- [x] **S-01-T08** · Eliminar `console.log` con PII en `Contact.tsx` ✅ 2026-06-03
- [x] **S-01-T09** · Validar `locale` en runtime en `LanguageContext.tsx` ✅ 2026-06-03

#### FASE 4 — Eliminación de residuos (🤖 Claude)

- [x] **S-01-T10** · Eliminar directorio `old-react-app/` completo ✅ 2026-06-03
- [x] **S-01-T11** · Eliminar assets huérfanos en `public/` raíz ✅ 2026-06-03

#### FASE 5 — Verificación y cierre (🤝 Conjunto)

- [x] **S-01-T12** · `pnpm build` exitoso en `frontend/` ✅ 2026-06-03
- [x] **S-01-T13** · Smoke test en producción tras deploy ✅ 2026-06-10
  - Home, servicios, about, case-studies: OK. Blog sin posts (esperado, CMS vacío). Headers de seguridad confirmados activos.
- [x] **S-01-T14** · PR `security/remediacion → main` ✅ 2026-06-03
- [~] **S-01-T15** · Purgar token comprometido del historial git con `git filter-repo`
  - Token ya inactivo; repo privado. **No prioritario** — aplazar hasta que el repo sea público o auditoría formal.

---

## Épica F-01 — Fix formulario de contacto Web3Forms (2026-06-10)

**Origen:** error en producción `"Form must include a form_id or access_key field"` reportado en sesión 2026-06-10.
**Rama de trabajo:** `fix/contact-form-web3forms-key`
**Causa raíz:** `NEXT_PUBLIC_WEB3FORMS_KEY` es una variable que Next.js hornea en el bundle en tiempo de build. Al eliminar el fallback hardcodeado (S-01-T04) y mover la key fuera de `wrangler.jsonc` (S-01-T05), el archivo `frontend/.env.local` nunca fue creado, por lo que los builds posteriores compilaban `access_key: undefined`.

### Tareas

- [x] **F-01-T01** · Crear `frontend/.env.local` con `NEXT_PUBLIC_WEB3FORMS_KEY` y variables Sanity ✅ 2026-06-10
- [x] **F-01-T02** · `pnpm build` exitoso — key horneada en bundle JS ✅ 2026-06-10
- [x] **F-01-T03** · Deploy a producción (`asc-it-group.administrator-794.workers.dev`) ✅ 2026-06-10

---

## Épicas futuras (backlog)

| ID | Épica | Prioridad | Sesión estimada |
|----|-------|-----------|-----------------|
| D-01 | Migración DNS: `ascitgroup.com` → Cloudflare Worker | 🔴 Alta | Semana 2026-06-10 |
| M-01 | Botones y enlaces no funcionan en móvil (Hero, CTA, WhatsApp) | 🔴 Alta | 2026-06-11 — validar con el usuario |

---

## Épica D-01 — Migración DNS ascitgroup.com (pendiente)

**Objetivo:** reemplazar WordPress por el nuevo sitio Next.js en el dominio de producción real.
**Registrador confirmado:** WordPress.com (los nameservers se cambian en Upgrades → Domains).
**Método de conexión:** Custom Domains desde el panel de Cloudflare. Dominio canónico: `ascitgroup.com` (apex); `www` redirige al apex (el código ya canoniza a apex en `src/lib/seo.ts`).

### Contexto importante
- `ascitgroup.com` apunta actualmente a hosting WordPress — se va a reemplazar completamente
- El dominio tiene **Google Workspace** configurado (MX + SPF + DKIM) — no debe romperse
- Cloudflare importa registros DNS automáticamente al agregar la zona — los de correo se preservan
- Contenido WordPress existente: no interesa migrar

### Tareas

- [x] **D-01-T01** · Identificar panel/registrador del dominio → **WordPress.com** ✅ (2026-06-22)
- [x] **D-01-T02** · Agregar `ascitgroup.com` como zona en Cloudflare (plan Free) ✅ — NS asignados: `rosa.ns.cloudflare.com` / `ryan.ns.cloudflare.com`
- [x] **D-01-T03** · Verificar MX + SPF + DKIM + site-verification en los NS de Cloudflare ✅ — correo intacto; A/www/wildcard de WordPress eliminados
- [x] **D-01-T04** · Cambiar nameservers en WordPress.com a los de Cloudflare ✅ (2026-06-23) — NS activos: `rosa.ns.cloudflare.com` / `ryan.ns.cloudflare.com`
- [x] **D-01-T05** · Conectar Custom Domains al Worker vía `wrangler.jsonc` (apex + www) ✅ — desplegado; activan al propagar los NS
- [ ] **D-01-T06** · Smoke test: `https://ascitgroup.com` + `www` + correo funcionando
- [ ] **D-01-T07** · Cancelar hosting WordPress (solo tras validar; **mantener el registro del dominio activo**)
- [ ] **D-01-T08** · Endurecimiento post-cutover: quitar `workers_dev` de `wrangler.jsonc` + redirect 301 `www`→apex (opcional)

---

## Historial de sesiones

| Fecha | Épica(s) trabajadas | Tareas completadas | PR |
|-------|--------------------|--------------------|-----|
| 2026-06-01 | S-01 (análisis) | Auditoría OWASP completa, plan redactado | — |
| 2026-06-03 | S-01 (remediación) | T01–T14 completadas, build OK | security/remediacion → main |
| 2026-06-10 | S-01 (cierre) | T13 smoke test OK, T15 aplazada. **Épica S-01 CERRADA ✅** | — |
| 2026-06-10 | F-01 (fix contacto) | T01–T03 completadas, formulario funcional en producción | fix/contact-form-web3forms-key → main |
| 2026-06-23 | D-01 (migración DNS) | T01–T05 (backlog + wrangler.jsonc); T04 cutover NS completado por usuario | — |

