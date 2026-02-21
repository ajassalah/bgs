import styles from "./Certification.module.css";
import Link from "next/link";

export default function IsoCertification() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`${styles.grid} ${styles.reverse}`}>
          <div className={styles.content}>
            <div className={styles.logoItem}>ISO LOGO</div>
            <p className={styles.text}>
              British Graduates School (BGS) is ISO 9001:2015 certified for Quality Management Systems, ensuring the education our students receive meets internationally recognized standards.
            </p>
            <Link href="/about" className={styles.btnRed}>Learn More</Link>
          </div>
          <div className={styles.imageBox}>
            <div className={styles.placeholder}>Graduation Flowers ISO</div>
          </div>
        </div>
      </div>
    </section>
  );
}
