import styles from "./AboutAccreditationDetails.module.css";

export default function AboutAccreditationDetails() {
  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.introText}>
          All qualifications offered through Qualifi and CQHE are subject to rigorous quality assurance processes. These awarding bodies are regulated by Ofqual, the UK government department that oversees qualifications and examinations. This ensures that all programs meet the highest standards of academic integrity and practical relevance.
        </p>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Qualifi</h3>
            <p>Qualifi offers a wide range of vocational and academic qualifications from Level 3 to Level 8 and maintains articulation agreements with numerous UK and international universities.</p>
          </div>
          
          <div className={styles.card}>
            <h3>CQHE</h3>
            <p>CQHE operates as a global accrediting authority, emphasizing innovation in education delivery and the maintenance of international academic standards.</p>
          </div>
          
          <div className={styles.card}>
            <h3>NQUAL</h3>
            <p>NQUAL (National Qualification Organisation for Applied Learning) is an emerging UK-based awarding body committed to applied and technical education.</p>
          </div>
        </div>

        <p className={styles.footerText}>
          The recognition of these awarding bodies allows for credit transfer, university progression, and global acceptance, making the qualifications suitable for both employment and further academic advancement.
        </p>
      </div>
    </section>
  );
}
