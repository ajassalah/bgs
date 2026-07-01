import styles from "./WhyChooseUs.module.css";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

export default function WhyChooseUs({ data }: { data?: any }) {
  const title = data?.whyChooseTitle || "We go to great lengths to identify impressive new talent self starters with specific skill sets to produce truly amazing results.";
  
  const points = data?.whyChoosePoints || [
    "Qualifi Endorsed College",
    "ISO 9001-2015 Certified for Quality Management System",
    "Experienced Faculty",
    "Progression Routes to Global Universities",
    "Only College to Provide Free CPD Programmes",
    "Free study abroad consultation and free CPD progression."
  ];

  let image = "/Gemini_Generated_Image_f8hkv8f8hkv8f8hk.png";
  if (data?.whyChooseImage) {
    if (typeof data.whyChooseImage === 'string') {
      image = data.whyChooseImage;
    } else if (data.whyChooseImage.asset) {
      image = urlForImage(data.whyChooseImage)?.url() || image;
    }
  }

  // Format the title to highlight 'impressive new talent'
  const formattedTitle = title.replace(
    "impressive new talent",
    `<span style="color: #f04e30;">impressive new talent</span>`
  );

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <span className={styles.subtitle}>WHY CHOOSE US?</span>
            <h2 
              className={styles.title}
              dangerouslySetInnerHTML={{ __html: formattedTitle }}
            >
            </h2>
            
            <div className={styles.listGrid}>
              {points.map((point: string, index: number) => (
                <div key={index} className={styles.item}>
                  <span className={styles.checkIcon}>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className={styles.pointText}>{point}</span>
                </div>
              ))}
            </div>
            
            <Link href="/contact#contact-form" className={styles.btnPill}>
              Join Now
            </Link>
          </div>
          
          <div className={styles.imageContainer}>
            <Image
              src={image}
              alt="BGS Graduation Ceremony"
              width={700}
              height={450}
              className={styles.image}
              priority
            />
            <div className={styles.floatingCard}>
              <span className={styles.floatingNumber}>100%</span>
              <span className={styles.floatingText}>Graduate satisfaction with academic support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
