import styles from "./FeaturedCourses.module.css";
import Link from "next/link";

const courses = [
  {
    title: "Postgraduate Diploma in Strategic Management and Leadership",
    level: "OTHM Level 7",
    category: "Management",
  },
  {
    title: "Postgraduate Diploma in Education Management and Leadership",
    level: "OTHM Level 7",
    category: "Education",
  },
  {
    title: "Postgraduate Diploma in Data Science",
    level: "Level 7 Diploma",
    category: "Technology",
  },
  {
    title: "OTHM Level 7 Diploma in Artificial Intelligence",
    level: "Level 7 Diploma",
    category: "AI & Data",
  },
  {
    title: "Postgraduate Diploma in Project Management",
    level: "OTHM Level 7",
    category: "Management",
  },
  {
    title: "Master of Business Administration (Top-up)",
    level: "Master's Degree",
    category: "Business",
  }
];

export default function FeaturedCourses() {
  return (
    <section className="section bg-gray">
      <div className="container">
        <div className="text-center mb-2">
          <span className="text-muted uppercase font-bold tracking-widest text-sm" style={{ letterSpacing: '2px', display: 'block', marginBottom: '0.5rem' }}>Our Top-Rated Programs</span>
          <h2 style={{ fontSize: '2.5rem' }}>Shape Your Professional Future</h2>
        </div>
        
        <div className={styles.coursesGrid}>
          {courses.map((course, index) => (
            <div key={index} className={styles.courseCard}>
              <div className={styles.courseImage}>
                <span className={styles.category}>{course.category}</span>
                {course.category} Image
              </div>
              <div className={styles.courseContent}>
                <div className={styles.courseLevel}>{course.level}</div>
                <h3 className={styles.courseTitle}>{course.title}</h3>
                <Link href={`/course/${index}`} className={styles.learnMore}>
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-2">
          <Link href="/courses" className="btn btn-primary">View All Courses</Link>
        </div>
      </div>
    </section>
  );
}
