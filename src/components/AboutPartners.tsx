import styles from "./AboutPartners.module.css";

export default function AboutPartners() {
  const partners = [
    { name: "Qualifi", img: "/Qualifi-headerlogo.png" },
    { name: "CQHE", img: "/cqhe-logo-new.webp" },
    { name: "NQUAL", img: "/nqual logo.avif" },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Our Trusted Partners</h2>
        <div className={styles.grid}>
          {partners.map((partner, idx) => (
            <div key={idx} className={styles.item}>
              {partner.img ? (
                <img src={partner.img} alt={partner.name} className={styles.logoImg} />
              ) : (
                <div className={styles.placeholder}>{partner.name}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
