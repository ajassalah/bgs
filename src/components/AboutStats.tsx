import styles from "./AboutStats.module.css";

export default function AboutStats() {
  const stats = [
    { value: "2,500+", label: "Students worldwide" },
    { value: "13+", label: "Specializations to choose from" },
    { value: "ASIC Accredited", label: "Only ASIC Accredited College in SL" },
    { value: "ISO 9001:2015", label: "QMS certified" }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.statsGrid}>
          {stats.map((stat, idx) => (
            <div key={idx} className={styles.statItem}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className={styles.motivationalBox}>
          <h2 className={styles.motivationalText}>
            Making Wholesome Individuals, Preparing Each One For The Real World And; Serving The Stereotype That You Need Work Experience Prior To Working Itself
          </h2>
        </div>
      </div>
    </section>
  );
}
