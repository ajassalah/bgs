const postSchema = {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
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
      name: 'author',
      title: 'Author',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main image (Displayed in Content)',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'heroImage',
      title: 'Hero Section Image',
      type: 'image',
      description: 'The background image for the top hero section of the blog post.',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'showShareLinks',
      title: 'Show Share Links',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      description: 'Add social media links for this post. You can add, remove, or reorder them.',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'Facebook', value: 'Facebook' },
                  { title: 'LinkedIn', value: 'LinkedIn' },
                  { title: 'Instagram', value: 'Instagram' },
                  { title: 'TikTok', value: 'TikTok' },
                  { title: 'Twitter/X', value: 'Twitter' },
                  { title: 'Other', value: 'Other' },
                ],
              },
            },
            {
              name: 'customPlatform',
              title: 'Custom Platform Name',
              type: 'string',
              hidden: ({ parent }: { parent: any }) => parent?.platform !== 'Other',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule: any) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'platform',
              subtitle: 'url',
            },
          },
        },
      ],
    },
    {
      name: 'relatedPosts',
      title: 'Related Posts',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'post' }] }],
      description: 'Manually select posts to show in the Related Posts section.'
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for SEO and accessibility.',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              description: 'Text that will appear below the image.',
            }
          ]
        },
      ],
    },
  ],
}

export default postSchema;
