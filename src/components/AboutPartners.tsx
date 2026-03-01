import styles from "./AboutPartners.module.css";
import Image from "next/image";

export default function AboutPartners() {
  const partners = [
    { name: "NQUAL", img: "/nqual logo.jpeg" },
    { name: "Qualifi Endorsed", img: "/qualifi-endorsed-729x800.png" },
    { name: "CGHE", img: "/cghe_logo.png" },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Our Trusted Partners</h2>
        <div className={styles.grid}>
          {partners.map((partner, idx) => (
            <div key={idx} className={styles.item}>
              {partner.img ? (
                <Image src={partner.img} alt={partner.name} width={220} height={160} className={styles.logoImg} style={{ objectFit: 'contain' }} />
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
