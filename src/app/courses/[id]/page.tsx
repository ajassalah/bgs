import { allCourses as staticCourses } from "@/data/courses";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import styles from "./CourseDetail.module.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCourse } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";

export default async function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Try to fetch from Sanity first
  let course: any = null;
  try {
    course = await getCourse(id);
  } catch (error) {
    console.error("Sanity fetch failed:", error);
  }

  // Fallback to static data
  if (!course) {
    course = staticCourses.find((c) => c.id === id);
  }

  if (!course) {
    notFound();
  }

  // Handle the image path - use course image if available, else fallback
  const heroImageUrl = typeof course.image === 'string' 
    ? course.image 
    : (urlForImage(course.image)?.url() || "/course inside hero section .jpg");

  return (
    <main className={styles.main}>
      <Navbar />

      {/* Hero Section */}
      <section 
        className={styles.hero} 
        style={{ backgroundImage: `url("${encodeURI(heroImageUrl)}")` }}
      >
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <Link href="/courses" className={styles.btnBack}>
             ← Back to All Courses
          </Link>
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link> <span>/</span> <Link href="/courses">Courses</Link> <span>/</span> {course.title}
          </div>
          <h1>{course.title}</h1>
        </div>
      </section>

      <div className={styles.detailContainer}>
        <div className={styles.contentGrid}>
          {/* Main Content Area */}
          <div className={styles.mainContent}>
            
            {course.overview && (
              <section className={styles.section}>
                <h2>Qualification Overview</h2>
                <p>{course.overview}</p>
              </section>
            )}

            {course.learningOutcomes && course.learningOutcomes.length > 0 && (
              <section className={styles.section}>
                <h2>Learning Outcomes</h2>
                <p>Upon successful completion of this qualification, learners will be able to:</p>
                <ul className={styles.list}>
                  {course.learningOutcomes.map((outcome: string, index: number) => (
                    <li key={index}>{outcome}</li>
                  ))}
                </ul>
              </section>
            )}

            {course.entryRequirements && course.entryRequirements.length > 0 && (
              <section className={styles.section}>
                <h2>Entry Requirements</h2>
                <ul className={styles.list}>
                  {course.entryRequirements.map((req: string, index: number) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </section>
            )}

            {course.curriculum && course.curriculum.length > 0 && (
              <section className={styles.section}>
                <h2>Curriculum</h2>
                <p>Developing essential management skills through following modules:</p>
                <div className={styles.curriculumList}>
                  {course.curriculum.map((module: string, index: number) => (
                    <div key={index} className={styles.curriculumItem}>
                      <span className={styles.curriculumNumber}>{index + 1}</span>
                      <span>{module}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {course.progression && course.progression.length > 0 && (
              <section className={styles.section}>
                <h2>Progression Routes</h2>
                <ul className={styles.list}>
                  {course.progression.map((route: string, index: number) => (
                    <li key={index}>{route}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className={styles.sidebar}>
            <div className={styles.infoCard}>
              <div className={styles.infoItem}>
                <strong>Level</strong>
                <span>{course.level}</span>
              </div>
              <div className={styles.infoItem}>
                <strong>Duration</strong>
                <span>{course.duration || "N/A"}</span>
              </div>
              <div className={styles.infoItem}>
                <strong>Awarding Body</strong>
                <span>{course.awardingBody}</span>
              </div>
              <div className={styles.infoItem}>
                <strong>Mode</strong>
                <span>{course.deliveryMode || "Online / Blended"}</span>
              </div>
              <div className={styles.infoItem}>
                <strong>Assessment</strong>
                <span>{course.assessment || "Assignments"}</span>
              </div>
            </div>

            <div className={styles.inquiryCard}>
              <h3>Interested in this Course?</h3>
              <p>Contact our admissions team to learn more about the enrollment process, fees, and upcoming intakes.</p>
              <Link href="/contact" className={styles.btnApply}>
                Make an Inquiry
              </Link>
            </div>
          </div>
        </div>
      </div>

      <CTASection />
      <Footer />
    </main>
  );
}
