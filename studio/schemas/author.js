export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    },
    {
      name: 'resume',
      title: 'Resume',
      type: 'file',
    },
    {
      type: 'object',
      name: 'socials',
      title: 'Put ya socials here',
      fieldsets: [
        {
          name: 'social',
          title: 'Social media handles',
          options: {
            collapsible: true, // Makes the whole fieldset collapsible
            collapsed: false, // Defines if the fieldset should be collapsed by default or not
            columns: 2 // Defines a grid for the fields and how many columns it should have
          }
        }
      ],
      fields: [
        {
          title: 'LinkedIn',
          name: 'linkedin',
          type: 'url',
          fieldset: 'social'
        },
        {
          title: 'Github',
          name: 'github',
          type: 'url',
          fieldset: 'social'
        },
        {
          title: 'Behance',
          name: 'behance',
          type: 'url',
          fieldset: 'social'
        },
        {
          title: 'Twitter',
          name: 'twitter',
          type: 'string',
          fieldset: 'social'
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
