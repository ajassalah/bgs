import { createClient } from '@sanity/client';
import { allCourses } from './src/data/courses.ts';
import { blogPosts } from './src/data/blog.ts';

const client = createClient({
  projectId: 'p4z69c2l',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_TOKEN,
  apiVersion: '2024-02-26',
});

async function migrateData() {
  console.log('Starting migration...');

  // 1. Migrate blog posts
  console.log('Migrating blog posts...');
  for (const post of blogPosts) {
    try {
      const doc = {
        _type: 'post',
        _id: `msg-blog-${post.id}`, // Custom ID to avoid duplicates
        title: post.title,
        slug: { _type: 'slug', current: post.id },
        excerpt: post.excerpt,
        publishedAt: new Date(post.date).toISOString() || new Date().toISOString(),
        author: post.author,
        // Categories is an array in schema, string in static data
        categories: [post.category],
        // Note: Images cannot be migrated by URL easily via script without downloading and uploading
        // We will skip image asset creation for now to avoid complexity, 
        // user will need to upload images in Studio or we'd need a more complex downloader
      };
      await client.createOrReplace(doc);
      console.log(`Migrated post: ${post.title}`);
    } catch (err) {
      console.error(`Failed to migrate post ${post.id}:`, err.message);
    }
  }

  // 2. Migrate courses
  console.log('Migrating courses...');
  for (const course of allCourses) {
    try {
      const doc = {
        _type: 'course',
        _id: `msg-course-${course.id}`,
        title: course.title,
        id: course.id,
        level: course.level,
        category: course.category,
        awardingBody: course.awardingBody,
        overview: course.overview,
        learningOutcomes: course.learningOutcomes,
        progression: course.progression,
        entryRequirements: course.entryRequirements,
        curriculum: course.curriculum,
        duration: course.duration,
        deliveryMode: course.deliveryMode,
        assessment: course.assessment,
      };
      await client.createOrReplace(doc);
      console.log(`Migrated course: ${course.title}`);
    } catch (err) {
      console.error(`Failed to migrate course ${course.id}:`, err.message);
    }
  }

  console.log('Migration finished!');
}

migrateData();
