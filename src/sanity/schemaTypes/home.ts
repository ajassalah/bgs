export default {
  name: 'home',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title (Internal Use)',
      type: 'string',
    },
    // Hero Section
    {
      name: 'heroImage',
      title: 'Hero Background Image',
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
    {
      name: 'heroCTAText',
      title: 'Hero CTA Button Text',
      type: 'string',
    },

    // Featured Courses Section
    {
      name: 'featuredCoursesTitle',
      title: 'Featured Courses Section Title',
      type: 'string',
    },
    {
      name: 'featuredCoursesSubtitle',
      title: 'Featured Courses Section Subtitle',
      type: 'string',
    },
    {
      name: 'featuredCourses',
      title: 'Featured Courses',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'course' }] }],
    },

    // Introduction Section
    {
      name: 'introTitle',
      title: 'Introduction Title',
      type: 'string',
    },
    {
      name: 'introSubtitle',
      title: 'Introduction Subtitle',
      type: 'string',
    },
    {
      name: 'introDescription',
      title: 'Introduction Description',
      type: 'text',
    },
    {
      name: 'introFeatures',
      title: 'Introduction Features (The 3 icons section)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Feature Title', type: 'string' },
            { name: 'description', title: 'Feature Description', type: 'text' },
          ]
        }
      ]
    },
    {
      name: 'introImages',
      title: 'Introduction Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },

    // Welcome Section
    {
      name: 'welcomeTitle',
      title: 'Welcome Title',
      type: 'string',
    },
    {
      name: 'welcomeContent',
      title: 'Welcome Content',
      type: 'text',
    },
    {
      name: 'welcomeImage',
      title: 'Welcome Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'welcomeStats',
      title: 'Welcome Section Stats (e.g. 2500+ PGD Holders)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Stat Label', type: 'string' },
            { name: 'value', title: 'Stat Value', type: 'string' },
          ]
        }
      ]
    },

    // Testimonials
    {
      name: 'testimonials',
      title: 'Student Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Student Name', type: 'string' },
            { name: 'role', title: 'Student Role/Job', type: 'string' },
            { name: 'text', title: 'Testimonial Text', type: 'text' },
          ]
        }
      ]
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
      name: 'whyChoosePoints',
      title: 'Why Choose Us Bullet Points',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'whyChooseImage',
      title: 'Why Choose Us Sidebar Image',
      type: 'image',
      options: { hotspot: true }
    },

    // Program Categories
    {
      name: 'programCategories',
      title: 'Program Categories',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Category Title', type: 'string' },
            { name: 'image', title: 'Category Image', type: 'image', options: { hotspot: true } },
            { name: 'link', title: 'Category Link (internal)', type: 'string' },
          ]
        }
      ]
    },

    // Benefits Strip (formerly Accreditations)
    {
      name: 'benefitItems',
      title: 'Benefits Strip (Accreditations Items)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Line 1 (e.g. Global)', type: 'string' },
            { name: 'label', title: 'Line 2 (e.g. Recognition)', type: 'string' },
          ]
        }
      ]
    },

    // Certification Sections (Qualifi, ISO, OTHM, Top-Up)
    {
      name: 'certificationBlocks',
      title: 'Certification/Accreditation Contrast Blocks',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'blockId', title: 'Internal Block Label (e.g. Qualifi)', type: 'string' },
            { name: 'logo', title: 'Logo Image', type: 'image', options: { hotspot: true } },
            { name: 'title', title: 'Main Title / Bold Text', type: 'string' },
            { name: 'text', title: 'Description Text', type: 'text' },
            { name: 'mainImage', title: 'Main Illustration Image', type: 'image', options: { hotspot: true } },
            { name: 'buttonText', title: 'Button Text', type: 'string' },
            { name: 'buttonLink', title: 'Button Link', type: 'string' },
            { name: 'isReverse', title: 'Reverse Layout (Image on Left)', type: 'boolean' },
            { name: 'isDarkBg', title: 'Dark Background (Blue)', type: 'boolean' },
          ]
        }
      ]
    },

    // Resources & News Section
    {
      name: 'resourcesTitle',
      title: 'Resources Section Title',
      type: 'string',
    },
    {
      name: 'resourcesSubtitle',
      title: 'Resources Section Subtitle',
      type: 'text',
    },

    // CTA Section
    {
      name: 'ctaTitle',
      title: 'CTA Section Title',
      type: 'string',
    },
    {
      name: 'ctaSubtitle',
      title: 'CTA Section Subtitle',
      type: 'text',
    },
    {
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      type: 'string',
    },
  ],
}
