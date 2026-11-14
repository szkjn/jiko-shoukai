import {defineField, defineType} from 'sanity'

// a choir owns songs (see choirSong.choir). there is a single one today; the
// type exists so that a second choir does not require reshaping the data.
export default defineType({
  name: 'choir',
  title: 'Choir',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
  ],
})
