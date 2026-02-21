import styles from "./AboutPartnershipUniversities.module.css";

export default function AboutPartnershipUniversities() {
  const universities = [
    {
      name: "University of the West of Scotland (UWS) – United Kingdom",
      desc: "The University of the West of Scotland (UWS) is one of the United Kingdom's leading modern universities, with campuses located in Paisley, Ayr, Lanarkshire, Dumfries, and London. UWS is well-regarded for its forward-thinking approach, research informed teaching, and strong industry links. UWS offers a diverse range of undergraduate and postgraduate programmes, with a focus on real-world application and career readiness. The university is globally recognized for widening access to higher education and is ranked among the top young universities in the world. Our partnership enables students holding recognized Level 6 to Level 7 UK-regulated qualifications to progress onto advanced stages of UWS degree programmes."
    },
    {
      name: "Villa Rica University – Mexico",
      desc: "Villa Rica University (Universidad Villa Rica) is a respected private university in Mexico, known for its commitment to academic excellence and innovation in higher education. The institution provides a wide spectrum of programmes across business, engineering, health sciences, and humanities. The partnership allows international learners to benefit from bilingual delivery, cross cultural academic experiences, and direct entry pathways to complete their higher education in a vibrant Latin American environment. Villa Rica emphasizes social responsibility, global citizenship, and practical skill development, aligning with our institutional values."
    },
    {
      name: "Universidad Amauta – Peru",
      desc: "Universidad Amauta is a recognized institution of higher education in Peru, dedicated to promoting academic excellence, social development, and innovation. It delivers a broad range of career-oriented programmes in fields such as education, health, public administration, and business. Through our collaboration, eligible learners may transfer credits and pursue progression routes into relevant bachelor's or master's degree programmes. Universidad Amauta is committed to producing globally competent graduates equipped with both academic knowledge and practical skills necessary in today's professional landscape."
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Partnership Universities</h2>
        <p className={styles.intro}>As part of our strategic global initiatives, we maintain academic collaborations with esteemed international universities. These partnerships facilitate progression opportunities, credit recognition, and academic exchange, thereby enriching the learning experience for our students.</p>
        
        <div className={styles.list}>
          {universities.map((uni, idx) => (
            <div key={idx} className={styles.uniItem}>
              <h3 className={styles.uniName}>{uni.name}</h3>
              <p className={styles.uniDesc}>{uni.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
