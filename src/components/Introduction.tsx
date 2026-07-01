import styles from "./Introduction.module.css";

export default function Introduction({ data }: { data?: any }) {
  const title = data?.introTitle || "Welcome to <br />British Graduate School";
  const content = data?.introDescription || "We specialize in delivering flexible, online higher education designed to complement the demands of modern professional and personal life. With over two decades of academic excellence, we provide globally recognized qualifications that cater to working professionals, adult learners, and ambitious students across the world.Our approach is rooted in accessibility, quality, and real-world relevance. We are committed to widening participation in higher education through flexible study pathways, competitive fee structures, and career-focused programs. Each course is thoughtfully designed to equip learners with the knowledge, skills, and confidence required to progress academically and succeed within an increasingly competitive global landscape.";

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
            { title: "Seamless Progression", description: "Advance step-by-step from Levels 2 to 8." },
            { title: "Expert Support", description: "Dedicated academic and career guidance." },
            { title: "Smart Learning Pathways", description: "Designed for modern learners and busy lives." }
          ]).map((feature: any, idx: number) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.badge}>
                {`0${idx + 1}`}
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDesc}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
