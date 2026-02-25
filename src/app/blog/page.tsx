import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import Link from "next/link";
import styles from "./Blog.module.css";
import { blogPosts } from "@/data/blog";

export default function BlogPage() {
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
          <div className={styles.grid}>
            
            {/* Posts Area */}
            <div className={styles.postsList}>
              {blogPosts.map((post) => (
                <article key={post.id} className={styles.postCard}>
                  <div className={styles.imageWrapper}>
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      fill 
                      className={styles.postImage}
                    />
                    <span className={styles.category}>{post.category}</span>
                  </div>
                  <div className={styles.postContent}>
                    <div className={styles.meta}>
                      <span>BY {post.author.toUpperCase()}</span>
                      <span>{post.date}</span>
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <h2 className={styles.postTitle}>{post.title}</h2>
                    </Link>
                    <p className={styles.excerpt}>{post.excerpt}</p>
                    <Link href={`/blog/${post.id}`} className={styles.readMore}>
                      Read More
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              
              <div className={styles.widget}>
                <h3 className={styles.widgetTitle}>Search</h3>
                <div className={styles.searchBox}>
                  <input type="text" placeholder="Search news..." className={styles.searchInput} />
                </div>
              </div>

              <div className={styles.widget}>
                <h3 className={styles.widgetTitle}>Recent Posts</h3>
                {blogPosts.slice(0, 3).map((post) => (
                  <div key={post.id} className={styles.recentPost}>
                    <div style={{ position: 'relative', width: '80px', height: '80px', flexShrink: 0 }}>
                      <Image 
                        src={post.image} 
                        alt={post.title} 
                        fill 
                        className={styles.recentThumb} 
                        style={{ objectFit: 'cover', borderRadius: '6px' }}
                      />
                    </div>
                    <div>
                      <h4 className={styles.recentTitle}>{post.title}</h4>
                      <span className={styles.recentDate}>{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.widget}>
                <h3 className={styles.widgetTitle}>Categories</h3>
                <ul className={styles.categoryList}>
                  <li className={styles.categoryItem}>
                    <Link href="#" className={styles.categoryLink}>
                      <span>Education</span>
                      <span>(4)</span>
                    </Link>
                  </li>
                  <li className={styles.categoryItem}>
                    <Link href="#" className={styles.categoryLink}>
                      <span>Management</span>
                      <span>(12)</span>
                    </Link>
                  </li>
                  <li className={styles.categoryItem}>
                    <Link href="#" className={styles.categoryLink}>
                      <span>Technology</span>
                      <span>(8)</span>
                    </Link>
                  </li>
                  <li className={styles.categoryItem}>
                    <Link href="#" className={styles.categoryLink}>
                      <span>Student Life</span>
                      <span>(5)</span>
                    </Link>
                  </li>
                </ul>
              </div>

            </aside>

          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
