import styles from "./AboutPartners.module.css";
import Image from "next/image";

export default function AboutPartners() {
  const partners = [
    { name: "Qualifi Endorsed", img: "/Qualifi-headerlogo - Copy.png", url: "https://qualifi.net/" },
    { name: "CQHE", img: "/cghe_logo.png", url: "https://cqhe.org.uk/" },
    { name: "NQUAL", img: "/nqual logo.jpeg", url: "https://www.nqual.co.uk/" },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Our Trusted Partners</h2>
        <div className={styles.grid}>
          {partners.map((partner, idx) => (
            <a 
              key={idx} 
              href={partner.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.item}
            >
              {partner.img ? (
                <Image
                  src={partner.img}
                  alt={partner.name}
                  width={220}
                  height={160}
                  className={`${styles.logoImg} ${idx === 0 ? styles.qualifiLogo : ""}`}
                  style={{ objectFit: 'contain' }}
                />
              ) : (
                <div className={styles.placeholder}>{partner.name}</div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
