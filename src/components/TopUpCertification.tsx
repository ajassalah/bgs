import styles from "./Certification.module.css";
import Link from "next/link";

export default function TopUpCertification() {
  return (
    <section className={`${styles.section} ${styles.asicBg}`} style={{ backgroundColor: '#00234a' }}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <p className={styles.text} style={{ fontSize: '1.4rem', fontWeight: 600 }}>
              BGS programmes open pathways to globally recognised Bachelor's and Master's top-up degrees, available both locally and internationally.
            </p>
            <Link href="/courses" className={styles.btnRed}>Find Courses</Link>
          </div>
          <div className={styles.imageBox}>
            <div className={styles.placeholder}>Library Students Top-Up</div>
          </div>
        </div>
      </div>
    </section>
  );
}
