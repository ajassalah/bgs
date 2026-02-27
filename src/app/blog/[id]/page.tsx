import { blogPosts as staticBlogPosts } from "@/data/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import styles from "./BlogDetail.module.css";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPost } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import CommentSection from "./CommentSection";
import { urlForImage } from "@/sanity/lib/image";

const PORTABLE_TEXT_COMPONENTS = {
  types: {
    image: ({ value }: { value: any }) => {
      const imageUrl = urlForImage(value)?.url();
      if (!imageUrl) return null;
      
      return (
        <div style={{ margin: '2rem 0', position: 'relative' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
            <Image 
              src={imageUrl} 
              alt={value.alt || 'Blog image'} 
              fill 
              style={{ objectFit: 'cover' }}
            />
          </div>
          {value.caption && (
            <p style={{ 
              textAlign: 'center', 
              fontSize: '0.9rem', 
              color: '#666', 
              marginTop: '0.75rem',
              fontStyle: 'italic'
            }}>
              {value.caption}
            </p>
          )}
        </div>
      );
    },
  },
};

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Try to fetch from Sanity first
  let post: any = null;
  try {
    post = await getPost(id);
  } catch (error) {
    console.error("Sanity fetch failed:", error);
  }

  // Fallback to static data if not found in Sanity
  if (!post) {
    post = staticBlogPosts.find((p) => p.id === id);
  }

  if (!post) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <Navbar />

      {/* Hero Section */}
      <section 
        className={styles.hero} 
        style={{ backgroundImage: `url("${post.heroImage || post.image}")` }}
      >
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <Link href="/blog" className={styles.btnBack}>
             ← Back to News
          </Link>
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link> <span>/</span> <Link href="/blog">Blog</Link> <span>/</span> {post.title}
          </div>
          <h1>{post.title}</h1>
        </div>
      </section>

      <div className={styles.articleContainer}>
        <div className={styles.mainImage}>
          <Image 
            src={post.image} 
            alt={post.title} 
            fill 
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.metaInfo}>
            <span className={styles.category}>{post.category}</span>
            <span>By {post.author}</span>
            <span>{post.date}</span>
          </div>

          <article className={styles.articleBody}>
            {post.body ? (
              <PortableText value={post.body} components={PORTABLE_TEXT_COMPONENTS} />
            ) : (
              <>
                <p className={styles.lead}>{post.excerpt}</p>
                
                <p>
                  In the pursuit of academic excellence and professional growth, the British Graduate School continues 
                  to lead the way in providing world-class education. This recent development marks a significant milestone 
                  in our mission to empower students with the knowledge and skills required to thrive in a global economy.
                </p>

                <h2>Impact on Higher Education</h2>
                <p>
                  The evolving landscape of higher education demands a proactive approach to learning and management. 
                  By integrating practical industry experience with academic rigor, we ensure our graduates are not only 
                  prepared but are also leaders in their respective fields.
                </p>

                <p>
                  Our partnerships with OTHM and Qualifi allow us to offer qualifications that are recognized and respected 
                  worldwide, providing a clear pathway for students to advance their careers or pursue further study 
                  at prestigious universities.
                </p>
              </>
            )}

            {post.showShareLinks !== false && post.socialLinks && post.socialLinks.length > 0 && (
              <div className={styles.shareSection}>
                <h3>Share this article</h3>
                <div className={styles.socialIcons}>
                  {post.socialLinks.map((link: any, idx: number) => {
                    const platform = link.platform;
                    const url = link.url;
                    const customLabel = link.customPlatform || platform || "Social";

                    if (platform === "Facebook") {
                      return <a key={idx} href={url} className={styles.socialBtn} target="_blank" rel="noopener noreferrer" title="Facebook">f</a>;
                    }
                    if (platform === "LinkedIn") {
                      return <a key={idx} href={url} className={styles.socialBtn} target="_blank" rel="noopener noreferrer" title="LinkedIn">in</a>;
                    }
                    if (platform === "Instagram") {
                      return (
                        <a key={idx} href={url} className={styles.socialBtn} target="_blank" rel="noopener noreferrer" title="Instagram">
                          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                      );
                    }
                    if (platform === "TikTok") {
                      return (
                        <a key={idx} href={url} className={styles.socialBtn} target="_blank" rel="noopener noreferrer" title="TikTok">
                          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                        </a>
                      );
                    }
                    if (platform === "Twitter") {
                       return <a key={idx} href={url} className={styles.socialBtn} target="_blank" rel="noopener noreferrer" title="Twitter/X">𝕏</a>;
                    }
                    
                    return (
                      <a key={idx} href={url} className={styles.socialBtn} target="_blank" rel="noopener noreferrer" title={customLabel}>
                        {customLabel.charAt(0).toUpperCase()}
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </article>
        </div>

        <CommentSection />

        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <div className={styles.relatedSection}>
            <h2 className={styles.relatedTitle}>Related Posts</h2>
            <div className={styles.relatedGrid}>
              {post.relatedPosts.map((relPost: any) => (
                <Link key={relPost.id} href={`/blog/${relPost.id}`} className={styles.relatedCard}>
                  <div className={styles.relatedImage}>
                    <Image 
                      src={relPost.image} 
                      alt={relPost.title} 
                      fill 
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className={styles.relatedContent}>
                    <span className={styles.relatedMeta}>{relPost.category}</span>
                    <h4 className={styles.relatedCardTitle}>{relPost.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <CTASection />
      <Footer />
    </main>
  );
}
