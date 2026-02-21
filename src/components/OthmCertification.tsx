import styles from "./Certification.module.css";
import Link from "next/link";

export default function OthmCertification() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`${styles.grid} ${styles.reverse}`}>
          <div className={styles.content}>
            <div className={styles.logoItem}>OTHM LOGO</div>
            <p className={styles.text}>
              British Graduates School (BGS) is an approved learning center for OTHM – a UK-based awarding body with 20+ years of global excellence in education.
            </p>
            <Link href="/about" className={styles.btnRed}>Learn More</Link>
          </div>
          <div className={styles.imageBox}>
            <div className={styles.placeholder}>Graduation Couple OTHM</div>
          </div>
        </div>
      </div>
    </section>
  );
}
