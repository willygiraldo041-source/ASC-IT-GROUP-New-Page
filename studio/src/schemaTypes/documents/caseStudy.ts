import {defineType} from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Case Studies',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      description: 'Ej: Pentesting para Banco Nacional',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'client',
      title: 'Cliente',
      type: 'string',
      description: 'Nombre del cliente (puede ser anónimo)',
    },
    {
      name: 'industry',
      title: 'Industria',
      type: 'string',
      description: 'Ej: Banca, E-commerce, Salud',
    },
    {
      name: 'summary',
      title: 'Resumen',
      type: 'text',
      rows: 3,
      description: 'Resumen del caso en 2-3 líneas',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'challenge',
      title: 'Desafío',
      type: 'text',
      description: 'Problema que tenía el cliente',
    },
    {
      name: 'solution',
      title: 'Solución',
      type: 'text',
      description: 'Cómo lo resolviste',
    },
    {
      name: 'results',
      title: 'Resultados',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Resultados clave (ej: 50+ vulnerabilidades encontradas)',
    },
    {
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Ej: Pentesting, Red Team, Web Security',
    },
    {
      name: 'featured',
      title: 'Destacado',
      type: 'boolean',
      description: 'Mostrar en la página principal',
      initialValue: false,
    },
    {
      name: 'publishedAt',
      title: 'Fecha de Publicación',
      type: 'datetime',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'client',
      media: 'image',
    },
  },
  orderings: [
    {
      title: 'Fecha (Más reciente)',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],
})
