import type { JsonLdSchema } from '@/types/seo'

interface JsonLdProps {
  data: JsonLdSchema | JsonLdSchema[]
}

/**
 * Componente para inyectar JSON-LD structured data
 * Mejora SEO y habilita rich snippets en Google
 */
export function JsonLd({ data }: JsonLdProps) {
  const schemas = Array.isArray(data) ? data : [data]

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 0), // Sin espacios para producción
          }}
        />
      ))}
    </>
  )
}
