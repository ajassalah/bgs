const aboutSchema = {
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title (Internal Use)',
      type: 'string',
    },
    // Hero Section
    {
      name: 'heroVideo',
      title: 'Hero Video URL',
      type: 'string',
      description: 'The URL for the background video.',
    },
    {
      name: 'heroPoster',
      title: 'Hero Video Poster',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    },
    {
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
    },

    // Story Section
    {
      name: 'storyTitle',
      title: 'Our Story Title',
      type: 'string',
    },
    {
      name: 'storyContent',
      title: 'Our Story Content',
      type: 'array',
      of: [{ type: 'text' }],
    },
    {
      name: 'storyImage',
      title: 'Our Story Image',
      type: 'image',
      options: { hotspot: true },
    },

    // Mission, Vision, Global Outlook
    {
      name: 'missionTitle',
      title: 'Mission Title',
      type: 'string',
    },
    {
      name: 'missionContent',
      title: 'Mission Content',
      type: 'text',
    },
    {
      name: 'visionTitle',
      title: 'Vision Title',
      type: 'string',
    },
    {
      name: 'visionContent',
      title: 'Vision Content',
      type: 'text',
    },
    {
      name: 'globalTitle',
      title: 'Global Outlook Title',
      type: 'string',
    },
    {
      name: 'globalContent',
      title: 'Global Outlook Content',
      type: 'text',
    },

    // Why Choose Us
    {
      name: 'whyChooseTitle',
      title: 'Why Choose Us Title',
      type: 'string',
    },
    {
      name: 'whyChooseSubtitle',
      title: 'Why Choose Us Subtitle',
      type: 'text',
    },
    {
      name: 'whyChooseItems',
      title: 'Why Choose Us Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'desc', title: 'Description', type: 'text' },
            { name: 'icon', title: 'Icon (Emoji or Text)', type: 'string' },
          ]
        }
      ]
    },

    // Stats
    {
      name: 'stats',
      title: 'About Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'value', title: 'Value', type: 'string' },
          ]
        }
      ]
    },
    {
      name: 'motivationalText',
      title: 'Motivational Text (below stats)',
      type: 'text',
    },

    // Future Model Section
    {
      name: 'futureModelTitle',
      title: 'Future Model Title',
      type: 'string',
    },
    {
      name: 'futureModelBadge',
      title: 'Future Model Badge',
      type: 'string',
    },
    {
      name: 'futureModelContent',
      title: 'Future Model Content',
      type: 'array',
      of: [{ type: 'text' }],
    },
    {
      name: 'futureModelImages',
      title: 'Future Model Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule: any) => Rule.max(4),
    },

    // Faculties section is usually dynamic or hardcoded categories
  ],
}

export default aboutSchema;
