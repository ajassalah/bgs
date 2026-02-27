import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import styles from "./Courses.module.css";
import { allCourses as staticCourses } from "@/data/courses";
import { getCourses } from "@/sanity/lib/queries";
import CoursesList from "./CoursesList";

export default async function CoursesPage() {
  // Try to fetch from Sanity
  let coursesFromSanity = [];
  try {
    coursesFromSanity = await getCourses();
  } catch (error) {
    console.warn("Could not fetch courses from Sanity, using fallback data.");
  }

  // Use Sanity data if available, otherwise use static data
  const finalCourses = coursesFromSanity.length > 0 ? coursesFromSanity : staticCourses;

  return (
    <main style={{ overflowX: 'hidden' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className={styles.heroVideo}
        >
          <source src="https://kensleygraduateschool.com/wp-content/uploads/2025/03/4508070-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Our Programs</h1>
          <p className={styles.heroSubtitle}>
            Unlock Your Potential With British Graduate School – Where Global Expertise Meets Local Excellence, Preparing You For A Future Without Limits.
          </p>
        </div>
      </section>

      <CoursesList initialCourses={finalCourses} />

      <CTASection />
      <Footer />
    </main>
  );
}
