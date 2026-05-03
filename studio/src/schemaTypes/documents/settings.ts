import {defineType} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      description: 'Nombre del sitio (ej: ASC IT GROUP)',
    },
    {
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      description: 'Descripción para SEO',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'email',
      title: 'Email de Contacto',
      type: 'string',
      validation: (Rule) => Rule.email(),
    },
    {
      name: 'phone',
      title: 'Teléfono',
      type: 'string',
      description: 'Formato: +57 300 123 4567',
    },
    {
      name: 'whatsappNumber',
      title: 'WhatsApp Number',
      type: 'string',
      description: 'Formato: +573001234567',
    },
    {
      name: 'address',
      title: 'Dirección',
      type: 'string',
    },
    {
      name: 'socialLinks',
      title: 'Redes Sociales',
      type: 'object',
      fields: [
        {name: 'linkedin', title: 'LinkedIn', type: 'url'},
        {name: 'twitter', title: 'Twitter/X', type: 'url'},
        {name: 'github', title: 'GitHub', type: 'url'},
        {name: 'facebook', title: 'Facebook', type: 'url'},
        {name: 'instagram', title: 'Instagram', type: 'url'},
      ],
    },
  ],
})
