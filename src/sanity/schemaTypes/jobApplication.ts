const jobApplicationSchema = {
  name: 'jobApplication',
  title: 'Job Application',
  type: 'document',
  fields: [
    {
      name: 'job',
      title: 'Job Applied For',
      type: 'reference',
      to: [{ type: 'job' }],
    },
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
    },
    {
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule: any) => Rule.required().email(),
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'resume',
      title: 'Resume/CV',
      type: 'file',
      options: { accept: '.pdf,.doc,.docx' },
    },
    {
      name: 'coverLetter',
      title: 'Cover Letter',
      type: 'text',
    },
    {
      name: 'linkedinProfile',
      title: 'LinkedIn Profile URL',
      type: 'url',
    },
    {
      name: 'portfolioUrl',
      title: 'Portfolio URL',
      type: 'url',
    },
    {
      name: 'status',
      title: 'Application Status',
      type: 'string',
      options: {
        list: [
          { title: 'Submitted', value: 'submitted' },
          { title: 'Under Review', value: 'under-review' },
          { title: 'Interview Scheduled', value: 'interview-scheduled' },
          { title: 'Rejected', value: 'rejected' },
          { title: 'Accepted', value: 'accepted' },
        ],
      },
      initialValue: 'submitted',
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule: any) => Rule.min(0).max(5),
    },
    {
      name: 'notes',
      title: 'Recruiter Notes',
      type: 'text',
    },
    {
      name: 'appliedAt',
      title: 'Applied At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
  preview: {
    select: {
      title: 'fullName',
      subtitle: 'jobTitle',
    },
  },
}

export default jobApplicationSchema;
