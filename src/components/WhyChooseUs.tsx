import styles from "./WhyChooseUs.module.css";
import Link from "next/link";

export default function WhyChooseUs() {
  const points = [
    "Only ASIC Accredited College in Sri Lanka",
    "ISO 9001-2015 Certified for Quality Management System",
    "Experienced Faculty",
    "Progression Routes to Global Universities",
    "Only College to Provide Free CPD Programmes",
    "Free study abroad consultation and free CPD progression."
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <span className="text-muted uppercase font-bold tracking-widest text-sm" style={{ letterSpacing: '2px', display: 'block', marginBottom: '1rem' }}>Why Choose Us?</span>
            <h2 className={styles.title}>
              We go to great lengths to identify impressive new talent self starters with specific skill sets to produce truly amazing results.
            </h2>
            <div className={styles.list}>
              {points.map((point, index) => (
                <div key={index} className={styles.item}>
                  <span className={styles.icon}>✓</span>
                  {point}
                </div>
              ))}
            </div>
            <Link href="/apply" className="btn btn-secondary" style={{ backgroundColor: '#eb4d4b', color: 'white' }}>Join Now</Link>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.imagePlaceholder}>
              Graduation Ceremony Image
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
