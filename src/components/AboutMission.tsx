import styles from "./AboutMission.module.css";

export function AboutMissionSection({ data }: { data?: any }) {
  const missionTitle = data?.missionTitle || "Our Mission";
  const missionDesc = data?.missionContent || "At BGS, we believe that education is a fundamental human right. Our mission is to make higher education universally available and equally accessible regardless of geography, background, or circumstance. We are committed to ensuring education is based on merit, supporting the full development of human personality, and leveraging online/blended learning platforms to remove traditional barriers to education.";

  const visionTitle = data?.visionTitle || "Our Vision";
  const visionDesc = data?.visionContent || "Our vision is rooted in the belief that quality education is essential for every family and represents the best investment for prosperity, health, and independence. BGS strongly supports the rights of parents and learners to make informed choices, committed to ensuring inclusive, equitable, quality education, and advancing innovative, skill-based learning models globally.";

  const globalTitle = data?.globalTitle || "Global Outlook";
  const globalDesc = data?.globalContent || "Level-based qualifications follow a structured progression pathway, allowing students to advance step by step based on their pace, goals, and existing credentials. This modular system adheres to recognized qualification frameworks such as the Regulated Qualifications Framework (RQF) in the UK, ensuring each level corresponds to specific academic outcomes and practical competencies.";

  return (
    <section className={styles.section}>
      <div className="container">
        <div className="text-center mb-5">
          <span className={styles.subtitle}>VALUES & PURPOSE</span>
          <h2 className={styles.mainTitle}>
            Shaping the Future of <span style={{ color: '#f04e30' }}>Global Education</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {/* Mission Card */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>🎓</span>
            </div>
            <h3 className={styles.cardTitle}>{missionTitle}</h3>
            <p className={styles.desc}>{missionDesc}</p>
          </div>

          {/* Vision Card */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>👁️</span>
            </div>
            <h3 className={styles.cardTitle}>{visionTitle}</h3>
            <p className={styles.desc}>{visionDesc}</p>
          </div>

          {/* Global Outlook Card */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>🌍</span>
            </div>
            <h3 className={styles.cardTitle}>{globalTitle}</h3>
            <p className={styles.desc}>{globalDesc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutVisionSection({ data }: { data?: any }) {
  // Bundled inside AboutMissionSection, return null to avoid duplicate rendering
  return null;
}

export function AboutGlobalOutlookSection({ data }: { data?: any }) {
  // Bundled inside AboutMissionSection, return null to avoid duplicate rendering
  return null;
}

export default function AboutMission({ data }: { data?: any }) {
  return <AboutMissionSection data={data} />;
}
