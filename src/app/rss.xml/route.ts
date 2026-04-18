import { client } from '@/sanity/lib/client'

export async function GET() {
  const postsQuery = `*[_type == "post"] | order(publishedAt desc) [0..10] {
    "id": _id,
    title,
    excerpt,
    "date": publishedAt,
    author
  }`
  
  const posts = await client.fetch(postsQuery)
  const BASE_URL = 'https://britishgraduateschool.co.uk'

  const itemsXml = posts
    .map((post: any) => `
    <item>
      <title>${post.title}</title>
      <link>${BASE_URL}/blog/${post.id}</link>
      <description>${post.excerpt}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid>${BASE_URL}/blog/${post.id}</guid>
    </item>`)
    .join('')

  const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>British Graduate School Blog</title>
    <link>${BASE_URL}/blog</link>
    <description>Latest news and updates from British Graduate School</description>
    <language>en-gb</language>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    ${itemsXml}
  </channel>
</rss>`

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  })
}
