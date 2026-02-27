import styles from "./CTASection.module.css";
import Link from "next/link";

export default function CTASection({ data }: { data?: any }) {
  const title = data?.ctaTitle || "Choose Your Qualification BGS";
  const buttonText = data?.ctaButtonText || "Contact Us";

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <Link href="/contact" className={styles.btn}>
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
