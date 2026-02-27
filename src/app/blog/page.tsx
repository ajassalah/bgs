import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import Link from "next/link";
import styles from "./Blog.module.css";
import { blogPosts as staticBlogPosts } from "@/data/blog";
import { getPosts } from "@/sanity/lib/queries";

export default async function BlogPage() {
  // Try to fetch from Sanity
  let postsFromSanity = [];
  try {
    postsFromSanity = await getPosts();
  } catch (error) {
    console.warn("Could not fetch posts from Sanity, using fallback data.");
  }

  // Use Sanity data if available, otherwise use static data
  const blogPosts = postsFromSanity.length > 0 ? postsFromSanity : staticBlogPosts;
  return (
    <main style={{ overflowX: 'hidden' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className={styles.heroVideo}
        >
          <source src="https://kensleygraduateschool.com/wp-content/uploads/2025/03/4508070-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Blog & News</h1>
          <p className={styles.heroSubtitle}>
            Stay updated with the latest news, educational insights, and success stories from the British Graduate School.
          </p>
        </div>
      </section>

      <section className={styles.mainSection}>
        <div className="container">
          {/* Featured Post */}
          {blogPosts.length > 0 && (
            <div className={styles.featuredPost}>
              <article className={styles.featuredCard}>
                <div className={styles.featuredImageWrapper}>
                  {blogPosts[0].image ? (
                    <Image 
                      src={blogPosts[0].image} 
                      alt={blogPosts[0].title} 
                      fill 
                      className={styles.postImage}
                    />
                  ) : (
                    <div className={styles.placeholderImage}>No Image</div>
                  )}
                  <span className={styles.category}>{blogPosts[0].category}</span>
                </div>
                <div className={styles.featuredContent}>
                  <div className={styles.meta}>
                    <span>BY {blogPosts[0].author.toUpperCase()}</span>
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <Link href={`/blog/${blogPosts[0].id}`}>
                    <h2 className={styles.featuredTitle}>{blogPosts[0].title}</h2>
                  </Link>
                  <p className={styles.featuredExcerpt}>{blogPosts[0].excerpt}</p>
                  <Link href={`/blog/${blogPosts[0].id}`} className={styles.readMore}>
                    Read More
                  </Link>
                </div>
              </article>
            </div>
          )}

          {/* Grid for remaining posts */}
          <div className={styles.postsList}>
            {blogPosts.slice(1).map((post: any) => (
              <article key={post.id} className={styles.postCard}>
                <div className={styles.imageWrapper}>
                  {post.image ? (
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      fill 
                      className={styles.postImage}
                    />
                  ) : (
                    <div className={styles.placeholderImage}>No Image</div>
                  )}
                  <span className={styles.category}>{post.category}</span>
                </div>
                <div className={styles.postContent}>
                  <div className={styles.meta}>
                    <span>BY {post.author.toUpperCase()}</span>
                    <span>{post.date}</span>
                  </div>
                  <Link href={`/blog/${post.id}`}>
                    <h3 className={styles.postTitle}>{post.title}</h3>
                  </Link>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`} className={styles.readMore}>
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
