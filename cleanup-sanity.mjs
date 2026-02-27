import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p4z69c2l',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_TOKEN,
  apiVersion: '2024-02-26',
});

async function cleanupData() {
  console.log('Starting Sanity cleanup...');

  if (!process.env.SANITY_TOKEN) {
    console.error('ERROR: SANITY_TOKEN environment variable is missing.');
    return;
  }

  // 1. Cleanup Courses: Remove old 'image' field if it exists
  console.log('Cleaning up course documents...');
  const courses = await client.fetch('*[_type == "course"]');
  for (const course of courses) {
    if (course.image) {
      try {
        await client.patch(course._id).unset(['image']).commit();
        console.log(`Removed old image field from course: ${course.title || course._id}`);
      } catch (err) {
        console.error(`Failed to patch course ${course._id}:`, err.message);
      }
    }
  }

  // 2. Cleanup Posts: Remove corrupted 'socialLinks' if they cause issues
  console.log('Cleaning up post documents...');
  const posts = await client.fetch('*[_type == "post"]');
  for (const post of posts) {
    // If socialLinks is an object (old format), unset it so it can be re-added as an array
    if (post.socialLinks && !Array.isArray(post.socialLinks)) {
      try {
        await client.patch(post._id).unset(['socialLinks']).commit();
        console.log(`Reset socialLinks from post: ${post.title || post._id}`);
      } catch (err) {
        console.error(`Failed to patch post ${post._id}:`, err.message);
      }
    }
  }

  console.log('Cleanup finished!');
}

cleanupData();
