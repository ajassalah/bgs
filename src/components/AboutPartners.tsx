import styles from "./AboutPartners.module.css";
import Image from "next/image";

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
                <Image src={partner.img} alt={partner.name} width={120} height={40} className={styles.logoImg} style={{ objectFit: 'contain' }} />
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
