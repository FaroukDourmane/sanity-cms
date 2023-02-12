import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myStructure } from './deskStructure'

export default defineConfig({
  name: 'default',
  basePath: '/dashboard',
  title: 'Portfolio Dashboard',

  projectId: '4qtz8oyx',
  dataset: 'production',

  plugins: [deskTool(
    {
      // structure: S => myStructure(S)
    }
  ), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
