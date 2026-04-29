import styles from "./Hero.module.css";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";


export default function Hero({ data }: { data?: any }) {
  const title = data?.heroTitle || "Empowering Minds, Redefining Boundaries In Education";
  const tagline = data?.heroTagline || "British Graduate School";
  const subtitle = data?.heroSubtitle || "Unlock Your Potential With British Graduate School — Where Global Expertise Meets Local Excellence, Preparing You For A Future Without Limits.";
  const ctaText = data?.heroCTAText || "Find Programs";
  const admissionText = data?.heroAdmissionText || "Admission";
  const admissionLink = data?.heroAdmissionLink || "/admissions";
  
  let bgImage = "/home-hero-2.jpg";
  if (data?.heroImage) {
    if (typeof data.heroImage === 'string') {
      bgImage = data.heroImage;
    } else if (data.heroImage.asset) {
      bgImage = urlForImage(data.heroImage)?.url() || bgImage;
    }
  }

  return (
    <section className={styles.hero} data-home-hero>
      <div className={styles.heroImage}>
        <Image
          src={bgImage}
          alt="British Graduate School Campus"
          fill
          priority
          style={{ objectFit: 'cover' }}
          quality={90}
        />
      </div>
      <div className={styles.heroOverlay}></div>
      <div className={styles.bgElements}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
      </div>
      
      <div className={styles.heroContent}>
        <h1 className={styles.title} dangerouslySetInnerHTML={{ __html: title.replace('\n', '<br />') }}>
        </h1>
        <p className={styles.subtitle}>
          {subtitle}
        </p>
        <div className={styles.actions}>
          <Link href={admissionLink} className={styles.admissionBtn}>{admissionText}</Link>
          <Link href="/courses" className={styles.mainBtn}>{ctaText}</Link>
        </div>
      </div>

    </section>
  );
}
