import styles from "./ResourcesNews.module.css";
import Link from "next/link";

export default function ResourcesNews() {
  const sideArticles = [
    { title: "What more can you learn?", date: "May 31, 2022" },
    { title: "Why should a Teacher get a PgDip in Education Management?", date: "October 18, 2021" },
    { title: "6 Benefits of MBA after Engineering", date: "October 8, 2021" }
  ];

  return (
    <section className={styles.section}>
      <div className="container" style={{ position: 'relative' }}>
        <div className={styles.intro}>
          <div>
            <h2 className={styles.title} style={{ color: 'white', background: '#333', display: 'inline-block', padding: '0 10px' }}>Resources & News</h2>
            <p style={{ maxWidth: '500px', color: 'var(--text-muted)' }}>
              Explore valuable insights, updates, and expert guidance to support your learning journey and professional growth.
            </p>
          </div>
          <Link href="/blog" className="btn btn-outline" style={{ fontSize: '0.8rem', padding: '0.5rem 1.2rem', backgroundColor: '#e9ecef', border: 'none' }}>Browse Blog</Link>
        </div>

        <div className={styles.grid}>
          <div className={styles.mainCard}>
            <div className={styles.card}>
              <div className={styles.image}>Graduation Ceremony</div>
              <span className={styles.meta}>BLOG</span>
              <h3 className={styles.cardTitle}>Kensley Graduate School - Graduation Ceremony 2024 - OTHM & ATHE</h3>
              <span className={styles.date}>September 19, 2024</span>
            </div>
            <div className={styles.card}>
              <div className={styles.image}>AI Webinar</div>
              <span className={styles.meta}>BLOG</span>
              <h3 className={styles.cardTitle}>The Future of Artificial Intelligence-Webinar</h3>
              <span className={styles.date}>March 22, 2024</span>
            </div>
          </div>

          <div className={styles.sideColumn}>
            {sideArticles.map((article, idx) => (
              <div key={idx} className={styles.smallCard}>
                <div className={styles.smallImage}>Article {idx + 1}</div>
                <div>
                  <span className={styles.meta}>BLOG</span>
                  <h4 className={styles.cardTitle} style={{ fontSize: '0.95rem' }}>{article.title}</h4>
                  <span className={styles.date}>{article.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
