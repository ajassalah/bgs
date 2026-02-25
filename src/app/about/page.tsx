import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./About.module.css";
import Image from "next/image";
import { AboutMissionSection, AboutVisionSection, AboutGlobalOutlookSection } from "@/components/AboutMission";
import AboutWhyChoose from "@/components/AboutWhyChoose";
import AboutStats from "@/components/AboutStats";
import AboutPartners from "@/components/AboutPartners";
import Testimonials from "@/components/Testimonials";
import AboutAccreditationDetails from "@/components/AboutAccreditationDetails";
import AboutPartnershipUniversities from "@/components/AboutPartnershipUniversities";
import AboutFutureModel from "@/components/AboutFutureModel";
import CTASection from "@/components/CTASection";

export default function AboutPage() {
  return (
    <main style={{ overflowX: 'hidden' }}>
      <Navbar />
      
      {/* Hero Section - Video Background from Kensley */}
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
          <h1 className={styles.heroTitle}>About Us</h1>
          <p className={styles.heroSubtitle}>
            Unlock Your Potential With British Graduate School – Where Global Expertise Meets Local Excellence, Preparing You For A Future Without Limits.
          </p>
        </div>
      </section>

      {/* 1. Our Story Section */}
      <section className={styles.intro}>
        <div className="container">
          <div className={styles.grid}>
            <div>
              <h2 className={styles.sectionTitle}>Our Story</h2>
              <p className={styles.text}>
                British Graduates School (BGS) was founded with campuses and operational hubs in both the United Kingdom and Sri Lanka. The institution was established with a clear purpose: to provide high-quality, internationally recognized qualifications to learners across the globe.
              </p>
              <p className={styles.text}>
                Business corporations always prefer employing individuals who possess both the theoretical as well as the practical knowledge. Therefore, our methodology is not only limited to theoretical teaching, but it is also putting that theoretical teaching into practice by showing them real examples as well as exposing them to the businesses related to the fields that they are pursuing.
              </p>
            </div>
            <div className={styles.imageBox}>
               <div style={{ position: 'relative', width: '100%', height: '400px' }}>
                <Image 
                  src="/online-student-5d.jpg" 
                  alt="BGS Foundation" 
                  fill
                  style={{ objectFit: 'cover', borderRadius: '12px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Trusted Partners Section (Logo Strip + Cards) */}
      <AboutPartners />
      <AboutAccreditationDetails />

      {/* 3. Our Mission Section */}
      <AboutMissionSection />

      {/* 4. Our Vision Section */}
      <AboutVisionSection />

      {/* 5. Global Outlook and Partnerships Section */}
      <AboutGlobalOutlookSection />

      {/* 6. Why Choose US? Section */}
      <AboutWhyChoose />

      {/* Additional Stats and Sections */}
      <AboutStats />
      
      <AboutPartnershipUniversities />

      <AboutFutureModel />

      <section className={styles.faculties}>
        <div className="container">
          <h2 className={styles.sectionTitle} style={{ color: 'white', textAlign: 'center' }}>Our Faculties</h2>
          <p style={{ textAlign: 'center', opacity: 0.8, maxWidth: '700px', margin: '0 auto', color: 'white', marginBottom: '3rem' }}>
            We&apos;ve designed our schools to equip you with the knowledge and skills needed for success in today&apos;s global landscape.
          </p>
          <div className={styles.facultyList}>
            <div className={styles.facultyItem}>School of Management</div>
            <div className={styles.facultyItem}>School of Computing</div>
            <div className={styles.facultyItem}>School of Health & Social Sciences</div>
            <div className={styles.facultyItem}>School of Education</div>
            <div className={styles.facultyItem}>School of Hospitality and Tourism</div>
            <div className={styles.facultyItem}>School of Engineering and Surveying</div>
          </div>
        </div>
      </section>

      <section style={{ background: '#f8f9fa' }}>
        <Testimonials />
      </section>
      
      <CTASection />
      <Footer />
    </main>
  );
}
