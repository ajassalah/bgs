import styles from "./WhyChooseUs.module.css";
import Link from "next/link";
import Image from "next/image";

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

  const image = data?.whyChooseImage || "/Gemini_Generated_Image_f8hkv8f8hkv8f8hk.png";

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <span className="text-muted uppercase font-bold tracking-widest text-sm" style={{ letterSpacing: '2px', display: 'block', marginBottom: '1rem' }}>Why Choose Us?</span>
            <h2 className={styles.title}>
              {title}
            </h2>
            <div className={styles.list}>
              {points.map((point: string, index: number) => (
                <div key={index} className={styles.item}>
                  <span className={styles.icon}>✓</span>
                  {point}
                </div>
              ))}
            </div>
            <Link href="/contact#contact-form" className="btn btn-secondary" style={{ backgroundColor: '#eb4d4b', color: 'white' }}>Join Now</Link>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={image}
              alt="BGS Graduation Ceremony"
              width={700}
              height={450}
              className={styles.image}
              style={{ objectFit: 'cover', width: '100%', height: '450px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
