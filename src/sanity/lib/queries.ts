import { client } from './client'

export async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    "id": _id,
    title,
    excerpt,
    "date": publishedAt,
    author,
    "category": categories[0],
    "image": mainImage.asset->url
  }`
  
  try {
    const data = await client.fetch(query)
    return data
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

export async function getPost(id: string) {
  const query = `*[_type == "post" && _id == $id][0] {
    "id": _id,
    title,
    excerpt,
    "date": publishedAt,
    author,
    "category": categories[0],
    "image": mainImage.asset->url,
    "heroImage": heroImage.asset->url,
    showShareLinks,
    socialLinks,
    "relatedPosts": relatedPosts[]-> {
      "id": _id,
      title,
      "image": mainImage.asset->url,
      "date": publishedAt,
      "category": categories[0]
    },
    body
  }`

  try {
    const data = await client.fetch(query, { id })
    return data
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

export async function getCourses() {
  const query = `*[_type == "course"] {
    "id": id,
    title,
    level,
    category,
    awardingBody,
    "image": courseImage,
    overview,
    learningOutcomes,
    progression,
    entryRequirements,
    curriculum,
    duration,
    deliveryMode,
    assessment
  }`

  try {
    const data = await client.fetch(query)
    return data
  } catch (error) {
    console.error('Error fetching courses:', error)
    return []
  }
}

export async function getCourse(id: string) {
  const query = `*[_type == "course" && id == $id][0] {
    "id": id,
    title,
    level,
    category,
    awardingBody,
    "image": courseImage,
    overview,
    learningOutcomes,
    progression,
    entryRequirements,
    curriculum,
    duration,
    deliveryMode,
    assessment
  }`

  try {
    const data = await client.fetch(query, { id })
    return data
  } catch (error) {
    console.error('Error fetching course:', error)
    return null
  }
}

export async function getHomeData() {
  const query = `*[_type == "home"][0] {
    "heroImage": heroImage.asset->url,
    heroTitle,
    heroSubtitle,
    heroCTAText,
    featuredCoursesTitle,
    featuredCoursesSubtitle,
    "featuredCourses": featuredCourses[]-> {
      "id": id,
      title,
      level,
      category,
      awardingBody,
      "image": courseImage
    },
    introTitle,
    introSubtitle,
    introDescription,
    introFeatures,
    "introImages": introImages[].asset->url,
    welcomeTitle,
    welcomeContent,
    "welcomeImage": welcomeImage.asset->url,
    welcomeStats,
    testimonials,
    whyChooseTitle,
    whyChooseSubtitle,
    whyChoosePoints,
    "whyChooseImage": whyChooseImage.asset->url,
    resourcesTitle,
    resourcesSubtitle,
    ctaTitle,
    ctaSubtitle,
    ctaButtonText
  }`

  try {
    const data = await client.fetch(query)
    return data
  } catch (error) {
    console.error('Error fetching home data:', error)
    return null
  }
}
