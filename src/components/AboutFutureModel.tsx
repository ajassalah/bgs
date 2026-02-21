import styles from "./AboutFutureModel.module.css";

export default function AboutFutureModel() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2 className={styles.title}>A Model for the Future</h2>
            <div className={styles.textContent}>
              <p>The growing demand for flexible, skill-based, and accredited education is clear. As more students seek alternatives to rigid university systems, qualifications offered through regulated awarding bodies become ever more vital. The ability to earn while learning, to gain experience while studying, and to progress through levels with academic integrity and flexibility, represents a future-facing model of education that addresses the needs of learners and employers alike.</p>
              
              <p>These qualifications are not only recognized by universities and employers around the world but are also designed to meet the needs of modern learners seeking a balance between education, employment, and personal development.</p>
              
              <p>For more than twenty years, our institution has contributed to the transformation of higher education by offering internationally respected qualifications through Qualifi and CQHE. These level-based programs meet global academic standards, support work-integrated learning, and provide flexible progression routes for learners at all stages of life.</p>
              
              <p>With accreditation, international acceptance, and a strong commitment to educational quality, these qualifications prepare students not only for successful careers but also for meaningful lifelong learning. In a world where academic achievement and practical skill must go hand in hand, the value of such programs is both clear and enduring.</p>
            </div>
          </div>
          <div className={styles.imageGrid}>
             <div className={styles.imgRow}>
                <img src="/student-2.jpg" alt="Student 1" className={styles.img} />
                <img src="/online-student-2r.jpg" alt="Student 2" className={styles.img} />
             </div>
             <div className={styles.imgRow}>
                <img src="/about-thumb-2.png" alt="Student 3" className={styles.img} />
                <img src="/online-student-5d.jpg" alt="Student 4" className={styles.img} />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
