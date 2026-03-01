/**
 * seed-home.mjs
 * -------------------------------------------------------------------
 * Run with:  node seed-home.mjs <SANITY_WRITE_TOKEN>
 *
 * This script creates / patches the single "home" document in Sanity
 * with all the default content that is currently hardcoded in the
 * Next.js components, so that editors can see and change it in the
 * Studio without having to type everything from scratch.
 * -------------------------------------------------------------------
 */

import { createClient } from '@sanity/client';

const token = process.argv[2];
if (!token) {
  console.error('Usage: node seed-home.mjs <SANITY_WRITE_TOKEN>');
  process.exit(1);
}

const client = createClient({
  projectId: 'p4z69c2l',
  dataset: 'production',
  apiVersion: '2024-02-26',
  token,
  useCdn: false,
});

const homeDoc = {
  _type: 'home',
  _id: 'home-singleton',

  title: 'Home Page',

  // ── Hero ────────────────────────────────────────────────────────────
  heroTitle: 'Empowering Minds, Redefining Boundaries In Education',
  heroSubtitle:
    'Unlock Your Potential With British Graduate School — Where Global Expertise Meets Local Excellence, Preparing You For A Future Without Limits.',
  heroCTAText: 'Find Courses',

  // ── Featured Courses ─────────────────────────────────────────────
  featuredCoursesTitle: 'Shape Your Professional Future',
  featuredCoursesSubtitle: 'Our Top-Rated Programs',

  // ── Introduction (LIFE AT BGS / Welcome to BGS) ──────────────────
  introTitle: 'Welcome to <br />British Graduate School',
  introDescription:
    'We specialise in flexible, online higher education designed to fit around work and life. With over 20 years of excellence, we offer globally recognised qualifications tailored for working professionals, adult learners, and students worldwide.\n\nOur mission is simple: to make quality education accessible to all through flexible learning paths, affordable payment options, and practical, career-focused programmes that empower learners to study, work, and succeed at the same time.',
  introFeatures: [
    {
      _key: 'feature-1',
      title: 'Seamless Progression',
      description: 'Advance step-by-step\nLevels 2 to 8.',
    },
    {
      _key: 'feature-2',
      title: 'Expert Support',
      description: 'Dedicated academic and\ncareer guidance.',
    },
    {
      _key: 'feature-3',
      title: 'Smart Learning Pathways',
      description: 'Designed for modern learners\nand busy lives.',
    },
  ],

  // ── Welcome / Life at BGS ────────────────────────────────────────
  welcomeTitle: 'Experience More Than Just Lectures',
  welcomeContent:
    'At British Graduates School (BGS), we believe in a holistic educational experience. Beyond the classroom, our students engage in a vibrant community that fosters growth, leadership, and lifelong connections.\n\nFrom interactive webinars to global networking events, life at BGS is designed to prepare you for the real world while creating memories that last a lifetime.',
  welcomeStats: [
    { _key: 'stat-1', label: 'PGD Holders', value: '2500+' },
    { _key: 'stat-2', label: 'Global Partners', value: '15+' },
  ],

  // ── Testimonials ─────────────────────────────────────────────────
  testimonials: [
    {
      _key: 'testimonial-1',
      name: 'Julian Mark',
      role: 'Data Scientist at TechCorp',
      text: 'The PGD program in Data Science at BGS was life-changing. The faculty is world-class and the support is amazing.',
    },
    {
      _key: 'testimonial-2',
      name: 'Sarah Frang',
      role: 'HR Manager',
      text: 'Highly recommend BGS for anyone looking to upskill in Management. Flexible learning and great networking opportunities.',
    },
    {
      _key: 'testimonial-3',
      name: 'Zaidul Fariq',
      role: 'Project Manager',
      text: "The environment at BGS is truly supportive. I've gained practical skills that I use every day in my current role.",
    },
  ],

  // ── Why Choose Us ────────────────────────────────────────────────
  whyChooseTitle:
    'We go to great lengths to identify impressive new talent self starters with specific skill sets to produce truly amazing results.',
  whyChooseSubtitle: 'Why Choose Us?',
  whyChoosePoints: [
    'Qualifi Endorsed College',
    'ISO 9001-2015 Certified for Quality Management System',
    'Experienced Faculty',
    'Progression Routes to Global Universities',
    'Only College to Provide Free CPD Programmes',
    'Free study abroad consultation and free CPD progression.',
  ],

  // ── Program Categories ──────────────────────────────────────────
  programCategories: [
    { _key: 'pc-1', title: 'FOUNDATION', link: '/courses?category=foundation' },
    { _key: 'pc-2', title: 'UNDERGRADUATE', link: '/courses?category=undergraduate' },
    { _key: 'pc-3', title: 'POSTGRADUATE DIPLOMA', link: '/courses?category=postgraduate diploma' },
    { _key: 'pc-4', title: 'MASTERS', link: '/courses?category=masters' },
  ],

  // ── Benefits Strip (Accreditations) ──────────────────────────────
  benefitItems: [
    { _key: 'b-1', name: "Global", label: "Recognition" },
    { _key: 'b-2', name: "Job-Relevant", label: "Modules" },
    { _key: 'b-3', name: "Fast-Track Programs", label: "with Flexible Schedules" },
    { _key: 'b-4', name: "Affordable Tuition Plans", label: "& Scholarships" }
  ],

  // ── Certification Sections ───────────────────────────────────────
  certificationBlocks: [
    {
      _key: 'cert-1',
      blockId: 'Qualifi',
      title: 'Qualifi Endorsed',
      text: 'Qualifi offers a wide range of vocational and academic qualifications from Level 3 to Level 8 and maintains articulation agreements with numerous UK and international universities.',
      buttonText: 'Learn More',
      buttonLink: '/qualifi',
      isReverse: false,
      isDarkBg: false,
    },
    {
      _key: 'cert-2',
      blockId: 'ISO/CQHE',
      title: 'CQHE Global',
      text: 'CQHE operates as a global accrediting authority, emphasizing innovation in education delivery and the maintenance of international academic standards.',
      buttonText: 'Learn More',
      buttonLink: '/about',
      isReverse: true,
      isDarkBg: false,
    },
    {
      _key: 'cert-3',
      blockId: 'Top-Up',
      title: 'Top-Up Degrees',
      text: "BGS programmes open pathways to globally recognised Bachelor's and Master's top-up degrees, available both locally and internationally.",
      buttonText: 'Find Courses',
      buttonLink: '/courses',
      isReverse: false,
      isDarkBg: true,
    },
    {
      _key: 'cert-4',
      blockId: 'OTHM/NQUAL',
      title: 'NQUAL Awarding Body',
      text: 'NQUAL (National Qualification Organisation for Applied Learning) is an emerging UK-based awarding body committed to applied and technical education.',
      buttonText: 'Learn More',
      buttonLink: '/othm',
      isReverse: true,
      isDarkBg: false,
    }
  ],

  // ── Resources & News ─────────────────────────────────────────────
  resourcesTitle: 'Resources & News',
  resourcesSubtitle:
    'Explore valuable insights, educational updates, and expert guidance to support your professional growth.',

  // ── CTA ──────────────────────────────────────────────────────────
  ctaTitle: 'Choose Your Qualification BGS',
  ctaSubtitle: '',
  ctaButtonText: 'Contact Us',
};

async function seed() {
  console.log('🌱  Seeding home document to Sanity...');
  try {
    // createOrReplace so re-running this is safe
    const result = await client.createOrReplace(homeDoc);
    console.log('✅  Done! Home document ID:', result._id);
    console.log('   Open your Studio at http://localhost:3000/admin to verify.');
  } catch (err) {
    console.error('❌  Seed failed:', err.message);
    process.exit(1);
  }
}

seed();
