import { createClient } from '@sanity/client'
import fs from 'node:fs'

function loadEnv(path) {
  const env = {}
  if (!fs.existsSync(path)) return env

  for (const line of fs.readFileSync(path, 'utf8').split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue

    const index = trimmed.indexOf('=')
    if (index === -1) continue

    const key = trimmed.slice(0, index).trim()
    const value = trimmed.slice(index + 1).trim().replace(/^['"]|['"]$/g, '')
    env[key] = value
  }

  return env
}

const env = { ...loadEnv('.env.local'), ...process.env }
const token = env.SANITY_API_WRITE_TOKEN || env.SANITY_WRITE_TOKEN || env.SANITY_TOKEN

if (!token) {
  console.error('Missing Sanity write token. Add SANITY_API_WRITE_TOKEN to .env.local.')
  process.exit(1)
}

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'p4z69c2l',
  dataset: env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-02-26',
  token,
  useCdn: false,
})

const now = new Date().toISOString()

const jobs = [
  {
    _id: 'career-academic-advisor',
    _type: 'job',
    title: 'Academic Advisor',
    slug: { _type: 'slug', current: 'academic-advisor' },
    summary:
      'Support learners through course selection, academic progression, and study planning across BGS programmes.',
    department: 'academic',
    location: 'Leicester, United Kingdom',
    jobType: 'full-time',
    workMode: 'hybrid',
    experienceLevel: 'mid',
    skills: ['Student guidance', 'Academic planning', 'Communication'],
    requirements: [
      'Experience in higher education or student advisory services',
      'Strong communication and learner support skills',
      'Ability to manage student records and progression plans',
    ],
    benefits: ['Professional development', 'Collaborative academic team', 'Hybrid work support'],
    salaryCurrency: 'GBP',
    isActive: true,
    postedAt: now,
  },
  {
    _id: 'career-admissions-officer',
    _type: 'job',
    title: 'Admissions Officer',
    slug: { _type: 'slug', current: 'admissions-officer' },
    summary:
      'Manage applicant enquiries, admissions documentation, and student onboarding for international learners.',
    department: 'admissions',
    location: 'Leicester, United Kingdom',
    jobType: 'full-time',
    workMode: 'on-site',
    experienceLevel: 'entry',
    skills: ['Admissions', 'CRM handling', 'Documentation'],
    requirements: [
      'Experience in admissions, administration, or customer service',
      'High attention to detail',
      'Professional written and verbal communication',
    ],
    benefits: ['Structured training', 'International education exposure', 'Career progression'],
    salaryCurrency: 'GBP',
    isActive: true,
    postedAt: now,
  },
  {
    _id: 'career-digital-marketing-executive',
    _type: 'job',
    title: 'Digital Marketing Executive',
    slug: { _type: 'slug', current: 'digital-marketing-executive' },
    summary:
      'Plan and execute digital campaigns that promote BGS programmes, student stories, and admissions events.',
    department: 'marketing',
    location: 'Remote / Hybrid',
    jobType: 'contract',
    workMode: 'hybrid',
    experienceLevel: 'mid',
    skills: ['Campaigns', 'Social media', 'Content planning'],
    requirements: [
      'Digital marketing experience in education or services',
      'Ability to plan content calendars and campaigns',
      'Understanding of lead generation and reporting',
    ],
    benefits: ['Flexible working', 'Creative ownership', 'Campaign portfolio development'],
    salaryCurrency: 'GBP',
    isActive: true,
    postedAt: now,
  },
]

for (const job of jobs) {
  await client.createOrReplace(job)
  console.log(`Upserted ${job.title}`)
}

const count = await client.fetch('count(*[_type == "job" && isActive == true])')
console.log(`Active jobs in Sanity: ${count}`)
