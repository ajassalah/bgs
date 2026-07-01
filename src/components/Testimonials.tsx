import styles from "./Testimonials.module.css";

export default function Testimonials({ data }: { data?: any }) {
  const testimonials = data?.testimonials || [
    {
      text: "The PGD program in Data Science at BGS was life-changing. The faculty is world-class and the support is amazing.",
      name: "Julian Mark ",
      role: "Data Science at TechCorp"
    },
    {
      text: "Highly recommend BGS for anyone looking to upskill in Management. Flexible learning and great networking opportunities.",
      name: "Sarah Frang",
      role: "HR Manager"
    },
    {
      text: "The environment at BGS is truly supportive. I've gained practical skills that I use every day in my current role.",
      name: " Zaidul Fariq",
      role: "Project Manager"
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className="text-center mb-5">
          <span className={styles.subtitle}>REVIEWS</span>
          <h2 className={styles.mainTitle}>
            Student <span style={{ color: '#f04e30' }}>Testimonials</span>
          </h2>
        </div>
        
        <div className={styles.grid}>
          {testimonials.map((t: any, idx: number) => {
            const isHighlighted = idx === 1; // Middle card
            return (
              <div key={idx} className={`${styles.card} ${isHighlighted ? styles.highlighted : ""}`}>
                <div className={styles.quoteIcon}>&quot;&quot;</div>
                
                <div className={styles.stars}>
                  {"★".repeat(5).split("").map((star, i) => (
                    <span key={i} className={styles.star}>{star}</span>
                  ))}
                </div>
                
                <p className={styles.text}>{t.text}</p>
                
                <div className={styles.author}>
                  <div className={isHighlighted ? styles.avatarRed : styles.avatarBlue}>
                    {t.name.trim().charAt(0)}
                  </div>
                  <div>
                    <h4 className={styles.name}>{t.name}</h4>
                    <p className={styles.role}>{t.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
