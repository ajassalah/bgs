import styles from "./Certification.module.css";
import Link from "next/link";
import Image from "next/image";

export default function TopUpCertification() {
  return (
    <section className={`${styles.section} ${styles.asicBg}`} style={{ backgroundColor: '#00234a' }}>
      <div className="container">
        <div className={`${styles.grid} ${styles.asicGrid}`}>
          <div className={styles.content}>
            <p className={styles.text} style={{ fontSize: '1.4rem', fontWeight: 600 }}>
              BGS programmes open pathways to globally recognised Bachelor&apos;s and Master&apos;s top-up degrees, available both locally and internationally.
            </p>
            <Link href="/courses" className={styles.btnRed}>Find Courses</Link>
          </div>
          <div className={`${styles.imageBox} ${styles.asicImageBox}`}>
            <Image 
              src="/programes home page.jpg" 
              alt="BGS Top-Up Programmes" 
              width={600} 
              height={400} 
              className={styles.gradImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
