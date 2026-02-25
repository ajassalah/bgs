import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./StudyAbroad.module.css";
import Image from "next/image";
import CTASection from "@/components/CTASection";

export default function StudyAbroadPage() {
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
          <h1 className={styles.heroTitle}>Study Abroad</h1>
          <p className={styles.heroSubtitle}>
            Explore. Learn, Graduate Global. Seamlessly transfer to top universities worldwide with internationally recognized programs.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.introBox}>
            <h2 className={styles.mainTitle}>Your Getaway to Global Education Excellence</h2>
            <p className={styles.description}>
              At British Graduate School, we offer Study Abroad Opportunities that broaden your educational horizons. Through our partnerships with top universities and colleges worldwide, we provide seamless pathways to renowned institutions. Our expert guidance ensures that you’re well-prepared for a smooth transition and valuable international exposure, enriching your academic and cultural experiences.
            </p>
            <p className={styles.description}>
              With Accreditations and Partnerships from leading educational bodies, our programs maintain the highest academic standards. You can trust that your qualifications, earned through our globally recognized programs, will be respected by employers around the world.
            </p>
          </div>

          <div className={styles.destinationGrid}>
            <div className={styles.destinationCard}>
              <div className={styles.destImageWrapper}>
                <Image src="/online-student-2r.jpg" alt="Study in the USA" fill className={styles.destImage} />
              </div>
              <div className={styles.destContent}>
                <h3>Study in the USA</h3>
                <p>Explore world-class opportunities at leading American universities through our exclusive pathways.</p>
                <a href="/apply" className={styles.btnOutline}>Apply Now</a>
              </div>
            </div>

            <div className={styles.destinationCard}>
              <div className={styles.destImageWrapper}>
                <Image src="/online-student-3ff-1.jpg" alt="Study in the UK" fill className={styles.destImage} />
              </div>
              <div className={styles.destContent}>
                <h3>Study in the UK</h3>
                <p>Access prestigious British institutions including Southampton Solent University and University of Wolverhampton.</p>
                <a href="/apply" className={styles.btnOutline}>Apply Now</a>
              </div>
            </div>
          </div>

          <div className={styles.infoGrid}>
            <div className={styles.infoBox}>
              <h2 className={styles.subTitle}>IELTS Preparation</h2>
              <p>At British Graduate School, we offer comprehensive IELTS training to help you achieve your best score. Our expert instructors provide personalized coaching, practice tests, and valuable tips to ensure you&apos;re fully prepared for the exam. Whether you&apos;re aiming to study abroad or improve your language proficiency, we’ll guide you every step of the way.</p>
            </div>
            
            <div className={styles.infoBox}>
              <h2 className={styles.subTitle}>Why Choose Us for Your Journey?</h2>
              <ul className={styles.list}>
                <li><strong>Scholarships Available</strong> – Financial support opportunities to make your global education more affordable.</li>
                <li><strong>Offer Letters Within 48 Hours</strong> – Get speedy responses and move forward with your academic journey without delays.</li>
                <li><strong>Fast-Track Application Process</strong> – Simplified procedures to ensure a quick and hassle-free university application experience.</li>
              </ul>
            </div>
          </div>

          <div className={styles.progressionSection}>
            <h2 className={styles.subTitle}>OTHM Progression Route</h2>
            <p>Students who complete their OTHM qualifications through British Graduate School gain access to exclusive progression routes with leading international universities. These globally recognized pathways enable our students to seamlessly advance their studies—paving the way for internationally accredited degrees and globally respected career opportunities.</p>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
