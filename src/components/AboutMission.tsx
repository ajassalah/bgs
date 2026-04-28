import styles from "./AboutMission.module.css";

export function AboutMissionSection({ data }: { data?: any }) {
  const title = data?.missionTitle || "Our Mission";
  const desc = data?.missionContent || "At BGS, we believe that education is a fundamental human right. Our mission is to make higher education universally available and equally accessible regardless of geography, background, or circumstance. We are committed to: Ensuring education is based on merit and equal opportunity Supporting the full development of human personality Promoting respect for human rights and freedoms Leveraging online and blended learning platforms to remove barriers to education. By doing so, BGS aims to transform access to education and empower individuals worldwide to achieve their personal and professional goals.";

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <span className={styles.icon}>🎓</span>
          </div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.desc}>{desc}</p>
        </div>
      </div>
    </section>
  );
}

export function AboutVisionSection({ data }: { data?: any }) {
  const title = data?.visionTitle || "Our Vision";
  const desc = data?.visionContent || "Our vision is rooted in the belief that education is essential for every family and represents the best investment for prosperity, health, and independence. BGS strongly supports the rights of parents and learners to make informed choices about education. In many countries, education systems are constrained by limited resources often receiving less than 5% of national GDP. In response, BGS is committed to: Ensuring inclusive, equitable, and quality education for all Promoting lifelong learning opportunities Advancing innovative, skill-based, and flexible learning models. We envision a world where learners regardless of their location can access world-class education that prepares them for success in a rapidly changing global environment.";

  return (
    <section className={styles.section} style={{ backgroundColor: '#001a38' }}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <span className={styles.icon}>👁️</span>
          </div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.desc}>{desc}</p>
        </div>
      </div>
    </section>
  );
}

export function AboutGlobalOutlookSection({ data }: { data?: any }) {
  const title = data?.globalTitle || "Global Outlook and Partnerships";
  const desc = data?.globalContent || "Level-based qualifications follow a structured progression pathway, allowing students to advance step by step—from foundational to doctoral-level studies—based on their pace, goals, and existing qualifications. This modular system adheres to recognized qualification frameworks such as the Regulated Qualifications Framework (RQF) in the United Kingdom, the European Qualifications Framework (EQF), and the Scottish Credit and Qualifications Framework (SCQF). These frameworks ensure that each level corresponds to a specific set of academic outcomes and practical competencies. This structure offers significant flexibility. Learners can start at the level appropriate to their background, complete one stage, and then progress to the next while gaining relevant work experience. This approach encourages Work-Integrated Learning (WIL), a model that combines theoretical instruction with real-world application, enabling students to immediately use their knowledge in professional settings.";

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <span className={styles.icon}>🌍</span>
          </div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.desc}>{desc}</p>
        </div>
      </div>
    </section>
  );
}

export default function AboutMission({ data }: { data?: any }) {
    return (
        <>
            <AboutMissionSection data={data} />
            <AboutVisionSection data={data} />
            <AboutGlobalOutlookSection data={data} />
        </>
    );
}

