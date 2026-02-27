import styles from "./Hero.module.css";
import Link from "next/link";

export default function Hero({ data }: { data?: any }) {
  const title = data?.heroTitle || "Empowering Minds, Redefining Boundaries In Education";
  const subtitle = data?.heroSubtitle || "Unlock Your Potential With British Graduate School — Where Global Expertise Meets Local Excellence, Preparing You For A Future Without Limits.";
  const ctaText = data?.heroCTAText || "Find Courses";
  const bgImage = data?.heroImage;

  return (
    <section className={styles.hero}>
      <div 
        className={styles.heroImage} 
        style={bgImage ? { backgroundImage: `url("${bgImage}")` } : {}}
      ></div>
      <div className={styles.heroOverlay}></div>
      <div className={styles.bgElements}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
      </div>
      
      <div className={styles.heroContent}>
        <span className={styles.tagline}>Excellence in Education Since Foundations</span>
        <h1 className={styles.title} dangerouslySetInnerHTML={{ __html: title.replace('\n', '<br />') }}>
        </h1>
        <p className={styles.subtitle}>
          {subtitle}
        </p>
        <div className={styles.actions}>
          <Link href="/courses" className={styles.mainBtn}>{ctaText}</Link>
        </div>
        <div className={styles.statsRow}>
          <div className={styles.statItem}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
            <span>Over 2500 PGD holders</span>
          </div>
          <div className={styles.statItem}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            <span>Learn from anywhere</span>
          </div>
        </div>
      </div>

      <svg className={styles.waves} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className={styles.parallax}>
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
      </svg>
    </section>
  );
}
