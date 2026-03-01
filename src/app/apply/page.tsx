import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./Apply.module.css";
import CTASection from "@/components/CTASection";
import ApplyForm from "./ApplyForm";
import { getCourses } from "@/sanity/lib/queries";

export default async function ApplyPage() {
  const courses = await getCourses();

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
          poster="/help desk hero.jpg"
        >
          <source src="https://kensleygraduateschool.com/wp-content/uploads/2025/03/4508070-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Schedule a Tour</h1>
          <p className={styles.heroSubtitle}>
            Unlock Your Potential With British Graduate School – Where Global Expertise Meets Local Excellence, Preparing You For A Future Without Limits.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.formContainer}>
            <div className={styles.formHeader}>
              <h2>Plan Your Meeting With Us</h2>
              <p>Fill out the application form below to begin your journey with British Graduate School. We will review your application and get back to you shortly.</p>
            </div>

            <ApplyForm courses={courses} />
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
