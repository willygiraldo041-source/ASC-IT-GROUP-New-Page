import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './src/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'ASC IT GROUP',

  projectId: '4z0gk085',
  dataset: 'production',
  
  studioHost: 'ascitgroup',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})