import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'choirSong',
  title: 'Choir song',
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
    defineField({
      name: 'composer',
      title: 'Composer',
      type: 'string',
    }),
    defineField({
      name: 'duration',
      title: 'Duration (seconds)',
      type: 'number',
      validation: (Rule) => Rule.min(0).integer(),
    }),
    defineField({
      name: 'lyrics',
      title: 'Lyrics',
      type: 'text',
      rows: 12,
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {dateFormat: 'YYYY-MM-DD'},
      description: 'Optional — when this recording was made',
    }),
    defineField({
      name: 'voices',
      title: 'Voices',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'voice',
          title: 'Voice',
          fields: [
            {
              name: 'part',
              title: 'Part',
              type: 'string',
              options: {
                list: [
                  {title: 'Soprano', value: 'soprano'},
                  {title: 'Alto', value: 'alto'},
                  {title: 'Tenor', value: 'tenor'},
                  {title: 'Bass', value: 'bass'},
                  {title: 'Mix', value: 'mix'},
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'audio',
              title: 'Audio file',
              type: 'file',
              options: {accept: 'audio/*'},
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {part: 'part', filename: 'audio.asset.originalFilename'},
            prepare: ({part, filename}) => ({
              title: part ?? '(no part)',
              subtitle: filename,
            }),
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  orderings: [
    {
      title: 'Name, A→Z',
      name: 'nameAsc',
      by: [{field: 'name', direction: 'asc'}],
    },
    {
      title: 'Date, newest first',
      name: 'dateDesc',
      by: [{field: 'date', direction: 'desc'}],
    },
  ],
  preview: {
    select: {name: 'name', composer: 'composer', voices: 'voices'},
    prepare: ({name, composer, voices}) => ({
      title: name ?? '(untitled)',
      subtitle: [composer, voices ? `${voices.length} voice${voices.length === 1 ? '' : 's'}` : null]
        .filter(Boolean)
        .join(' · '),
    }),
  },
})
