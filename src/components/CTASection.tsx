import styles from "./CTASection.module.css";
import Link from "next/link";

export default function CTASection({ data }: { data?: any }) {
  const title = data?.ctaTitle || "Apply Now or Speak to an Advisor";
  const desc = data?.ctaDescription || "Our team has over a decade of experience helping students like you. Don't hesitate - reach out to us today and take the first step towards your future success!";

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{desc}</p>
          </div>
          <div className={styles.buttons}>
            <a href="https://docs.google.com/forms/d/1Tzzp3Pi2byK0x4TeLBFRS39kX0wbDoAdA3-saD9nOH4/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
              Apply now
            </a>
            <Link href="/contact" className={styles.btnOutline}>
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
