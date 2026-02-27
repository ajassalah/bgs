import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'British Graduate School',

  projectId: 'p4z69c2l',
  dataset: 'production',

  basePath: '/admin',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
