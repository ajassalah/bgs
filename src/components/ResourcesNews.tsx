import styles from "./ResourcesNews.module.css";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import Image from "next/image";
import { getPosts } from "@/sanity/lib/queries";

export default async function ResourcesNews({ data }: { data?: any }) {
  // Try to fetch from Sanity
  let postsFromSanity = [];
  try {
    postsFromSanity = await getPosts();
  } catch (error) {
    console.warn("Could not fetch posts from Sanity, using fallback data.");
  }

  // Use Sanity data if available, otherwise use local static data
  const postsToDisplay = postsFromSanity.length > 0 ? postsFromSanity : blogPosts;

  const mainPosts = postsToDisplay.slice(0, 2);
  const sidePosts = postsToDisplay.slice(2, 5);

  const sectionTitle = data?.resourcesTitle || "Resources & News";
  const sectionSubtitle = data?.resourcesSubtitle || "Explore valuable insights, educational updates, and expert guidance to support your professional growth.";

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.intro}>
          <div>
            <span style={{ color: '#eb4d4b', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '0.5rem' }}>Insights & Updates</span>
            <h2 className={styles.title}>{sectionTitle}</h2>
            <p style={{ maxWidth: '600px', color: '#666', fontSize: '1.1rem', lineHeight: '1.6' }}>
              {sectionSubtitle}
            </p>
          </div>
          <Link href="/blog" className="btn btn-primary" style={{ background: '#eb4d4b', borderColor: '#eb4d4b', padding: '12px 30px' }}>Explore All News</Link>
        </div>

        <div className={styles.grid}>
          <div className={styles.mainCard}>
            {mainPosts.map((post: any, idx: number) => (
              <div key={post.id} className={styles.card}>
                <Link href={`/blog/${post.id}`}>
                  <div className={styles.imageWrapper}>
                    {post.image ? (
                      <Image 
                        src={post.image} 
                        alt={post.title} 
                        fill 
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: 'cover' }} 
                      />
                    ) : (
                      <Image 
                        src={idx === 0 ? "/cat-undergrad.png" : "/cat-masters.png"} 
                        alt="Default" 
                        fill 
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: 'cover' }} 
                      />
                    )}
                  </div>
                </Link>
                <span className={styles.meta}>{post.category}</span>
                <Link href={`/blog/${post.id}`}>
                  <h3 className={styles.cardTitle}>{post.title}</h3>
                </Link>
                <span className={styles.date}>{post.date || "March 1, 2026"}</span>
              </div>
            ))}
          </div>

          <div className={styles.sideColumn}>
            {sidePosts.map((post: any, sIdx: number) => (
              <div key={post.id} className={styles.smallCard}>
                <Link href={`/blog/${post.id}`}>
                  <div className={styles.smallImageWrapper}>
                    {post.image ? (
                      <Image 
                        src={post.image} 
                        alt={post.title} 
                        fill 
                        sizes="(max-width: 768px) 100vw, 25vw"
                        style={{ objectFit: 'cover' }} 
                      />
                    ) : (
                      <Image 
                        src={sIdx % 2 === 0 ? "/cat-postgrad.png" : "/cat-foundation.png"} 
                        alt="Default" 
                        fill 
                        sizes="(max-width: 768px) 100vw, 25vw"
                        style={{ objectFit: 'cover' }} 
                      />
                    )}
                  </div>
                </Link>
                <div>
                  <span className={styles.meta} style={{ marginBottom: '0.25rem' }}>{post.category}</span>
                  <Link href={`/blog/${post.id}`}>
                    <h4 className={styles.cardTitle} style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{post.title}</h4>
                  </Link>
                  <span className={styles.date}>{post.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
