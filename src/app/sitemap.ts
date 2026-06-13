import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'
import { allCourses } from '@/data/courses'
import { blogPosts } from '@/data/blog'

const BASE_URL = 'https://britishgraduateschool.co.uk'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    { route: '', priority: 1 },
    { route: '/about', priority: 0.9 },
    { route: '/admissions', priority: 0.9 },
    { route: '/apply', priority: 0.9 },
    { route: '/courses', priority: 0.9 },
    { route: '/blog', priority: 0.9 },
    { route: '/career', priority: 0.8 },
    { route: '/contact', priority: 0.9 },
    { route: '/life', priority: 0.8 },
    { route: '/cqhe', priority: 0.8 },
    { route: '/othm', priority: 0.8 },
    { route: '/qualifi', priority: 0.8 },
    { route: '/study-abroad', priority: 0.8 },
    { route: '/help-desk', priority: 0.7 },
    { route: '/privacy', priority: 0.3 },
    { route: '/terms', priority: 0.3 },
  ].map(({ route, priority }) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority,
  }))

  const localCourseRoutes = allCourses.map((course) => ({
    url: `${BASE_URL}/courses/${course.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const localPostRoutes = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const courseQuery = `*[_type == "course"] { "id": id, _updatedAt }`
  const postQuery = `*[_type == "post"] { "id": _id, _updatedAt }`

  let courses: Array<{ id: string; _updatedAt: string }> = []
  let posts: Array<{ id: string; _updatedAt: string }> = []

  try {
    const sanityRoutes = await Promise.all([
      client.fetch(courseQuery),
      client.fetch(postQuery),
    ])
    courses = sanityRoutes[0]
    posts = sanityRoutes[1]
  } catch (error) {
    console.error('Sitemap Sanity fetch failed:', error)
  }

  const courseRoutes = courses.map((course) => ({
    url: `${BASE_URL}/courses/${course.id}`,
    lastModified: new Date(course._updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const postRoutes = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.id}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const routes = [
    ...staticRoutes,
    ...localCourseRoutes,
    ...localPostRoutes,
    ...courseRoutes,
    ...postRoutes,
  ]

  return Array.from(
    new Map(routes.map((route) => [route.url, route])).values()
  )
}
