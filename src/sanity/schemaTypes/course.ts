export default {
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
      description: 'Upload a high-quality image for this course.',
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
