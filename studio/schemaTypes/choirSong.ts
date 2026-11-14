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
      name: 'choir',
      title: 'Choir',
      type: 'reference',
      to: [{type: 'choir'}],
    }),
    defineField({
      name: 'order',
      title: 'Order in the song list',
      type: 'number',
      description: 'Lower comes first. Songs without a number go to the end, alphabetically.',
      validation: (Rule) => Rule.min(0),
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
      name: 'bpm',
      title: 'Tempo (bpm)',
      type: 'number',
      description:
        'Click tempo the voices were recorded to. With "beats per bar", gives the app its bar numbers, beat pulse and loop.',
      validation: (Rule) => Rule.positive(),
    }),
    defineField({
      name: 'beats',
      title: 'Beats per bar',
      type: 'number',
      description: 'Top number of the time signature, counted in clicks: 3 for 3/4, 4 for 4/4, 6 for 6/4.',
      validation: (Rule) => Rule.positive().integer(),
    }),
    defineField({
      name: 'offset',
      title: 'Offset (seconds)',
      type: 'number',
      description: 'Seconds of audio before bar 1. Leave at 0 when the recording starts on the first beat.',
      initialValue: 0,
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'score',
      title: 'Score (MusicXML)',
      type: 'file',
      description: 'MusicXML export from MuseScore. Each staff must be named after a voice (Soprano, Alto, Ténor, Basse…).',
      options: {accept: '.musicxml,.xml'},
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
                  {title: 'Mezzo', value: 'mezzo'},
                  {title: 'Alto', value: 'alto'},
                  {title: 'Tenor', value: 'tenor'},
                  {title: 'Bass', value: 'bass'},
                  {title: 'Lead', value: 'lead'},
                  {title: 'Lead (high)', value: 'leadHigh'},
                  {title: 'Mix', value: 'mix'},
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'Optional. Name shown in the app instead of the default one for this part.',
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
            select: {part: 'part', label: 'label', filename: 'audio.asset.originalFilename'},
            prepare: ({part, label, filename}) => ({
              title: label ?? part ?? '(no part)',
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
      title: 'Order in the song list',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
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
