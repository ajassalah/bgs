import styles from "./CTASection.module.css";
import Link from "next/link";

export default function CTASection({ data }: { data?: any }) {
  const title = "Choose Your <span style=\"color: #f04e30;\">Qualification</span> at BGS";
  const desc = "Our team has over a decade of experience helping students like you. Don't hesitate — reach out today and take the first step towards your future success.";

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <span className={styles.subtitle}>GET STARTED</span>
          <h2 
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: title }}
          >
          </h2>
          <p className={styles.description}>{desc}</p>
          
          <div className={styles.buttons}>
            <Link href="/apply" className={styles.btnPrimary}>
              Apply Now &rarr;
            </Link>
            <Link href="/contact" className={styles.btnOutline}>
              Talk to an Advisor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
