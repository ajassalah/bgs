import styles from "./ProgramCategories.module.css";
import Link from "next/link";

export default function ProgramCategories() {
  const categories = [
    { title: "FOUNDATION", image: "Foundation Image" },
    { title: "UNDERGRADUATE", image: "Undergraduate Image" },
    { title: "POSTGRADUATE DIPLOMA", image: "PGD Image" },
    { title: "MASTERS", image: "Masters Image" }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {categories.map((cat, idx) => (
            <Link href={`/courses?category=${cat.title.toLowerCase()}`} key={idx} className={styles.card}>
              <div className={styles.imagePlaceholder}>{cat.image}</div>
              <div className={styles.overlay}>
                <h3 className={styles.title}>{cat.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
