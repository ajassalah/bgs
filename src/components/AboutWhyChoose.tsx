import styles from "./AboutWhyChoose.module.css";

export default function AboutWhyChoose() {
  const items = [
    {
      title: "Affiliate Rankings",
      desc: "The University of Gloucestershire and was ranked 54th in the UK",
      icon: "⭐"
    },
    {
      title: "Advisory Council",
      desc: "An advisory council consisting of industry leaders and accomplished academics",
      icon: "👥"
    },
    {
      title: "Individual Attention",
      desc: "We cater towards every need of each students",
      icon: "🙋"
    },
    {
      title: "Exclusive Provision",
      desc: "Exclusive programmes from the University of Oxford for South Asia and China",
      icon: "📜"
    },
    {
      title: "College Facilities",
      desc: "Providing a variety of facilities and services for students",
      icon: "🏛️"
    },
    {
      title: "Extracurricular Activities",
      desc: "All of it focusing on making you career ready.",
      icon: "🎨"
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Why Choose US?</h2>
          <p className={styles.sectionDesc}>We go to great lengths to identify impressive new talent self starters with specific skill sets to produce truly amazing results.</p>
        </div>
        <div className={styles.grid}>
          {items.map((item, idx) => (
            <div key={idx} className={styles.item}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{item.icon}</span>
              </div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
