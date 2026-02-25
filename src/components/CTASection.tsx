import styles from "./CTASection.module.css";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>Choose Your Qualification BGS</h2>
          <Link href="/contact" className={styles.btn}>
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
