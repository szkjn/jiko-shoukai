import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'loc',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Format: DD.MM.YYYY',
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'text',
      rows: 10,
      validation: (Rule) => Rule.required(),
      description: 'Can include HTML tags',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Performances', value: 'performances'},
          {title: 'Installations', value: 'installations'},
          {title: 'Programming', value: 'programming'},
          {title: 'Talks', value: 'talks'},
          {title: 'Releases', value: 'releases'},
        ],
      },
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'img',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'label', type: 'string', title: 'Label', validation: (Rule) => Rule.required()},
            {name: 'url', type: 'url', title: 'URL', validation: (Rule) => Rule.required()},
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'loc',
      media: 'img.0',
    },
  },
})

