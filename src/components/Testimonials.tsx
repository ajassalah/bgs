import styles from "./Testimonials.module.css";

export default function Testimonials({ data }: { data?: any }) {
  const testimonials = data?.testimonials || [
    {
      text: "The PGD program in Data Science at BGS was life-changing. The faculty is world-class and the support is amazing.",
      name: "Julian Mark ",
      role: "Data Scientist at TechCorp"
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
        <div className="text-center mb-2">
          <span className="text-muted uppercase font-bold tracking-widest text-sm" style={{ letterSpacing: '2px', display: 'block', marginBottom: '1rem' }}>REVIEWS</span>
          <h2 style={{ fontSize: '2.5rem' }}>Student Testimonials</h2>
        </div>
        <div className={styles.grid}>
          {testimonials.map((t: any, idx: number) => (
            <div key={idx} className={styles.card}>
              <div className={styles.quoteIcon}>&quot;</div>
              <p className={styles.text}>{t.text}</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.name.charAt(0)}</div>
                <div>
                  <h4 className={styles.name}>{t.name}</h4>
                  <p className={styles.role}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
