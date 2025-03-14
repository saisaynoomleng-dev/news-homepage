import { type SchemaTypeDefinition } from 'sanity'
import { blog } from './blogType'
import { postType } from './postType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blog,
    postType,
  ],
}
