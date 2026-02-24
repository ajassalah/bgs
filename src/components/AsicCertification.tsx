import styles from "./Certification.module.css";
import Link from "next/link";
import Image from "next/image";

export default function AsicCertification() {
  return (
    <section className={`${styles.section} ${styles.asicBg}`}>
      <div className="container">
        <div className={`${styles.grid} ${styles.asicGrid}`}>
          <div className={styles.content}>
            <div className={styles.logoItem}>
              <Image 
                src="/qualifi-endorsed-729x800.png" 
                alt="Qualifi Endorsement" 
                width={120} 
                height={80} 
                className={styles.logoImage}
              />
            </div>
            <p className={styles.text}>
              Qualifi offers a wide range of vocational and academic qualifications from Level 3 to Level 8 and maintains articulation agreements with numerous UK and international universities.
            </p>
            <Link href="/about" className={styles.btnRed}>Learn More</Link>
          </div>
          <div className={`${styles.imageBox} ${styles.asicImageBox}`}>
            <Image 
              src="/Student Graduation ASIC.png" 
              alt="Student Graduation ASIC" 
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
