import { fetchFresh } from './client'

export async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    "id": coalesce(slug.current, _id),
    title,
    excerpt,
    "date": publishedAt,
    author,
    "category": categories[0],
    "image": mainImage.asset->url
  }`
  
  try {
    const data = await fetchFresh(query)
    return data
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

export async function getPost(id: string) {
  const query = `*[_type == "post" && (_id == $id || slug.current == $id)][0] {
    "id": coalesce(slug.current, _id),
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
      "id": coalesce(slug.current, _id),
      title,
      "image": mainImage.asset->url,
      "date": publishedAt,
      "category": categories[0]
    },
    body
  }`

  try {
    const data = await fetchFresh(query, { id })
    return data
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

export async function getCourses() {
  const query = `*[_type == "course"] {
    "id": id,
    "slug": slug.current,
    title,
    level,
    category,
    awardingBody,
    "image": coalesce(courseImage, image),
    "heroImage": coalesce(heroImage, courseImage, image),
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
    const data = await fetchFresh(query)
    return data
  } catch (error) {
    console.error('Error fetching courses:', error)
    return []
  }
}

export async function getCourse(slugOrId: string) {
  const query = `*[_type == "course" && (slug.current == $slugOrId || id == $slugOrId)][0] {
    "id": id,
    "slug": slug.current,
    title,
    level,
    category,
    awardingBody,
    "image": coalesce(courseImage, image),
    "heroImage": coalesce(heroImage, courseImage, image),
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
    const data = await fetchFresh(query, { slugOrId })
    return data
  } catch (error) {
    console.error('Error fetching course:', error)
    return null
  }
}

export async function getHomeData() {
  const query = `*[_type == "home"][0] {
    heroImage,
    heroTitle,
    heroSubtitle,
    heroCTAText,
    featuredCoursesTitle,
    featuredCoursesSubtitle,
    "featuredCourses": featuredCourses[]-> {
      "id": id,
      "slug": slug.current,
      title,
      level,
      category,
      awardingBody,
      "image": coalesce(courseImage, image),
      "heroImage": coalesce(heroImage, courseImage, image)
    },
    introTitle,
    introSubtitle,
    introDescription,
    introFeatures,
    introImages,
    welcomeTitle,
    welcomeContent,
    welcomeImage,
    welcomeStats,
    testimonials,
    whyChooseTitle,
    whyChooseSubtitle,
    whyChoosePoints,
    whyChooseImage,
    resourcesTitle,
    resourcesSubtitle,
    "programCategories": programCategories[] {
      title,
      image,
      "imageUrl": image.asset->url,
      link
    },
    "benefitItems": benefitItems[] {
      name,
      label
    },
    "certificationBlocks": certificationBlocks[] {
      blockId,
      logo,
      title,
      text,
      mainImage,
      buttonText,
      buttonLink,
      isReverse,
      isDarkBg
    },
    ctaTitle,
    ctaSubtitle,
    ctaButtonText
  }`

  try {
    const data = await fetchFresh(query)
    return data
  } catch (error) {
    console.error('Error fetching home data:', error)
    return null
  }
}
export async function getAboutData() {
  const query = `*[_type == "about"][0] {
    heroVideo,
    heroPoster,
    heroTitle,
    heroSubtitle,
    storyTitle,
    storyContent,
    storyImage,
    missionTitle,
    missionContent,
    visionTitle,
    visionContent,
    globalTitle,
    globalContent,
    whyChooseTitle,
    whyChooseSubtitle,
    whyChooseItems,
    stats,
    motivationalText,
    futureModelTitle,
    futureModelBadge,
    futureModelContent,
    futureModelImages
  }`

  try {
    const data = await fetchFresh(query)
    return data
  } catch (error) {
    console.error('Error fetching about data:', error)
    return null
  }
}
