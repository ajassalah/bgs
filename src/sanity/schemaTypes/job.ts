const jobSchema = {
  name: 'job',
  title: 'Job Posting',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'summary',
      title: 'Short Summary',
      type: 'text',
      rows: 3,
    },
    {
      name: 'description',
      title: 'Job Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'department',
      title: 'Department',
      type: 'string',
      options: {
        list: [
          { title: 'Academic', value: 'academic' },
          { title: 'Admissions', value: 'admissions' },
          { title: 'Administration', value: 'administration' },
          { title: 'Marketing', value: 'marketing' },
          { title: 'Student Support', value: 'student-support' },
          { title: 'Technology', value: 'technology' },
          { title: 'Finance', value: 'finance' },
          { title: 'Human Resources', value: 'hr' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'jobType',
      title: 'Job Type',
      type: 'string',
      options: {
        list: [
          { title: 'Full-time', value: 'full-time' },
          { title: 'Part-time', value: 'part-time' },
          { title: 'Contract', value: 'contract' },
          { title: 'Internship', value: 'internship' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'workMode',
      title: 'Work Mode',
      type: 'string',
      options: {
        list: [
          { title: 'On-site', value: 'on-site' },
          { title: 'Hybrid', value: 'hybrid' },
          { title: 'Remote', value: 'remote' },
        ],
      },
      initialValue: 'on-site',
    },
    {
      name: 'experienceLevel',
      title: 'Experience Level',
      type: 'string',
      options: {
        list: [
          { title: 'Entry Level', value: 'entry' },
          { title: 'Mid Level', value: 'mid' },
          { title: 'Senior', value: 'senior' },
          { title: 'Lead', value: 'lead' },
        ],
      },
    },
    {
      name: 'skills',
      title: 'Required Skills',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'requirements',
      title: 'Requirements',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'salaryMin',
      title: 'Minimum Salary',
      type: 'number',
    },
    {
      name: 'salaryMax',
      title: 'Maximum Salary',
      type: 'number',
    },
    {
      name: 'salaryCurrency',
      title: 'Salary Currency',
      type: 'string',
      options: {
        list: [
          { title: 'GBP', value: 'GBP' },
          { title: 'USD', value: 'USD' },
          { title: 'EUR', value: 'EUR' },
          { title: 'LKR', value: 'LKR' },
        ],
      },
      initialValue: 'GBP',
    },
    {
      name: 'image',
      title: 'Job Listing Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'closingDate',
      title: 'Application Closing Date',
      type: 'datetime',
    },
    {
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'postedAt',
      title: 'Posted Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      department: 'department',
      media: 'image',
    },
    prepare(selection: any) {
      const { title, department, media } = selection;
      return {
        title,
        subtitle: department ? department.toUpperCase() : 'No department',
        media,
      };
    },
  },
}

export default jobSchema;
