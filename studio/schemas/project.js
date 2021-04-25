export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
        },
        {
            name: 'subtitle',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
        },
        {
            name: 'date',
            title: 'Date of completion',
            type: 'date',
        },
        {
            name: 'thumbnail',
            title: 'Featured image',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        },
        {
            name: 'link',
            title: 'Project url',
            type: 'url',
        },
        {
            name: 'technologies',
            title: 'Technology summary',
            type: 'array',
            of: [
                {
                    type: 'string',
                },
            ],
            options: {
                layout: 'tags',
            },
        },
    ],
    orderings: [
        {
            title: 'Completion Date, Newest',
            name: 'releaseDateDesc',
            by: [
                {field: 'date', direction: 'desc'}
            ]
        }
    ]
};