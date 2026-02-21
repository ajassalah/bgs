import styles from "./Welcome.module.css";
import Link from "next/link";

export default function Welcome() {
  return (
    <section className={`section ${styles.welcomeContainer}`} style={{ background: '#f8f9fa' }}>
      <div className="container">
        <div className={styles.welcome}>
          <div className={styles.content}>
            <span className="text-muted uppercase font-bold tracking-widest text-sm" style={{ letterSpacing: '2px', display: 'block', marginBottom: '1rem' }}>LIFE AT BGS</span>
            <h2 className={styles.title}>Experience More Than Just Lectures</h2>
            <p className={styles.description}>
              At British Graduates School (BGS), we believe in a holistic educational experience. Beyond the classroom, our students engage in a vibrant community that fosters growth, leadership, and lifelong connections.
            </p>
            <p className={styles.description}>
              From interactive webinars to global networking events, life at BGS is designed to prepare you for the real world while creating memories that last a lifetime.
            </p>
            
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>2500+</span>
                <span className={styles.statLabel}>PGD Holders</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>Global Partners</span>
              </div>
            </div>
            
            <Link href="/life" className="btn btn-outline mt-2">Explore Campus Life</Link>
          </div>
          
          <div className={styles.imagePlaceholder} style={{ height: '400px' }}>
            <div className={styles.imageOverlay}></div>
            <div style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.2rem', textAlign: 'center', padding: '2rem' }}>
              Campus Culture & Student Life
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
