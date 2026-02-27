import styles from "./Introduction.module.css";

export default function Introduction({ data }: { data?: any }) {
  const title = data?.introTitle || "Welcome to <br />British Graduate School";
  const content = data?.introDescription || "We specialise in flexible, online higher education designed to fit around work and life. With over 20 years of excellence, we offer globally recognised qualifications tailored for working professionals, adult learners, and students worldwide.\n\nOur mission is simple: to make quality education accessible to all through flexible learning paths, affordable payment options, and practical, career-focused programmes that empower learners to study, work, and succeed at the same time.";

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.titleCol}>
            <h2 
              className={styles.title} 
              dangerouslySetInnerHTML={{ __html: title }}
            >
            </h2>
          </div>
          <div className={styles.contentCol}>
            <p className={styles.text}>
              {content.split('\n').map((para: string, i: number) => (
                para ? <span key={i}>{para}<br /><br /></span> : null
              ))}
            </p>
          </div>
        </div>

        <div className={styles.features}>
          {(data?.introFeatures || [
            { title: "Seamless Progression", description: "Advance step-by-step\nLevels 2 to 8." },
            { title: "Expert Support", description: "Dedicated academic and\ncareer guidance." },
            { title: "Smart Learning Pathways", description: "Designed for modern learners\nand busy lives." }
          ]).map((feature: any, idx: number) => (
            <div key={idx} className={styles.featureItem}>
              <div className={styles.iconBox}>
                {idx === 0 && (
                  <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="#a0142d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                )}
                {idx === 1 && (
                  <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="#a0142d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                )}
                {idx >= 2 && (
                  <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="#a0142d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <circle cx="12" cy="11" r="3"></circle>
                    <path d="M12 14c-1.5 0-3 .5-3 1.5V17h6v-1.5c0-1-1.5-1.5-3-1.5z"></path>
                  </svg>
                )}
              </div>
              <div className={styles.featureContent}>
                <h3>{feature.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: feature.description.replace('\n', '<br />') }}></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
