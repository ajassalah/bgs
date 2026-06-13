import AutoCourseSlugInput from '../components/AutoCourseSlugInput'

const courseSchema = {
  name: 'course',
  title: 'Course',
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
      description: 'Auto-generated from the course title and used in the course detail page URL.',
      options: {
        source: 'title',
        maxLength: 120,
        slugify: (input: string) =>
          input
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, ''),
      },
      components: {
        input: AutoCourseSlugInput,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'id',
      title: 'Course ID',
      type: 'string',
    },
    {
      name: 'level',
      title: 'Level',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'awardingBody',
      title: 'Awarding Body',
      type: 'string',
    },
    {
      name: 'courseImage',
      title: 'Course Thumbnail Image',
      type: 'image',
      description: 'Upload the thumbnail image that appears in the courses list.',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image',
      title: 'Legacy Course Image',
      type: 'image',
      description: 'Existing course image field kept for older course documents and imports.',
      options: {
        hotspot: true,
      },
      hidden: true,
    },
    {
      name: 'heroImage',
      title: 'Course Hero Image',
      type: 'image',
      description: 'Upload the large hero image that appears at the top of the course detail page.',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'text',
    },
    {
      name: 'learningOutcomes',
      title: 'Learning Outcomes',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'progression',
      title: 'Progression',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'entryRequirements',
      title: 'Entry Requirements',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'curriculum',
      title: 'Curriculum',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
    },
    {
      name: 'deliveryMode',
      title: 'Delivery Mode',
      type: 'string',
    },
    {
      name: 'assessment',
      title: 'Assessment',
      type: 'string',
    },
  ],
}
export default courseSchema;
