import styles from "./Certification.module.css";
import Link from "next/link";
import Image from "next/image";

export default function OthmCertification() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`${styles.grid} ${styles.reverse} ${styles.asicGrid}`}>
          <div className={styles.content}>
            <div className={styles.logoItem}>
              <Image 
                src="/nqual logo.jpeg" 
                alt="NQUAL Logo" 
                width={120} 
                height={60} 
                className={styles.logoImage}
              />
            </div>
            <p className={styles.text}>
              NQUAL (National Qualification Organisation for Applied Learning) is an emerging UK-based awarding body committed to applied and technical education.
            </p>
            <Link href="/about" className={styles.btnRed}>Learn More</Link>
          </div>
          <div className={`${styles.imageBox} ${styles.asicImageBox}`}>
            <Image 
              src="/nqual home page.jpg" 
              alt="Graduation Couple OTHM" 
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
