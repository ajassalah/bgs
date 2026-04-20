import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'

const BASE_URL = 'https://britishgraduateschool.co.uk'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch dynamic routes from Sanity
  const courseQuery = `*[_type == "course"] { "id": id, _updatedAt }`
  const postQuery = `*[_type == "post"] { "id": _id, _updatedAt }`
  
  const [courses, posts] = await Promise.all([
    client.fetch(courseQuery),
    client.fetch(postQuery)
  ])

  const courseRoutes = courses.map((course: any) => ({
    url: `${BASE_URL}/courses/${course.id}`,
    lastModified: new Date(course._updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const postRoutes = posts.map((post: any) => ({
    url: `${BASE_URL}/blog/${post.id}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const staticRoutes = [
    '',
    '/about',
    '/admissions',
    '/apply',
    '/courses',
    '/blog',
    '/career',
    '/contact',
    '/life',
    '/cqhe',
    '/qualifi',
    '/study-abroad',
    '/help-desk',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.9,
  }))

  return [...staticRoutes, ...courseRoutes, ...postRoutes]
}
