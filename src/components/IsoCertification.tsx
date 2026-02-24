import styles from "./Certification.module.css";
import Link from "next/link";
import Image from "next/image";

export default function IsoCertification() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`${styles.grid} ${styles.reverse} ${styles.asicGrid}`}>
          <div className={styles.content}>
            <div className={styles.logoItem}>
              <Image 
                src="/cghe_logo.png" 
                alt="CGHE Logo" 
                width={120} 
                height={60} 
                className={styles.logoImage}
              />
            </div>
            <p className={styles.text}>
              CQHE operates as a global accrediting authority, emphasizing innovation in education delivery and the maintenance of international academic standards.
            </p>
            <Link href="/about" className={styles.btnRed}>Learn More</Link>
          </div>
          <div className={`${styles.imageBox} ${styles.asicImageBox}`}>
            <Image 
              src="/cqhe homea.jpeg" 
              alt="Graduation Flowers ISO" 
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
