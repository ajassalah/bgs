import styles from "./Certification.module.css";
import Link from "next/link";

export default function AsicCertification() {
  return (
    <section className={`${styles.section} ${styles.asicBg}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <div className={styles.logoItem}>ASIC LOGO</div>
            <p className={styles.text}>
              British Graduates School (BGS) is now accredited by Accreditation service for international schools, colleges and Universities (ASIC) as a Premier Institution.
            </p>
            <Link href="/about" className={styles.btnRed}>Learn More</Link>
          </div>
          <div className={styles.imageBox}>
            <div className={styles.placeholder}>Student Graduation ASIC</div>
          </div>
        </div>
      </div>
    </section>
  );
}
