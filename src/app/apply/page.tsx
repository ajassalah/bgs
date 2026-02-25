import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./Apply.module.css";
import CTASection from "@/components/CTASection";

export default function ApplyPage() {
  return (
    <main style={{ overflowX: 'hidden' }}>
      <Navbar />
      
      {/* Hero Section - Matching Contact Page Style */}
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

            <form className={styles.applyForm}>
              <div className={styles.formSection}>
                <div className={styles.inputGrid}>
                  <div className={styles.formGroup}>
                    <label>First Name*</label>
                    <input type="text" className={styles.input} placeholder="Enter your first name" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Last Name*</label>
                    <input type="text" className={styles.input} placeholder="Enter your last name" required />
                  </div>
                </div>
              </div>

              <div className={styles.inputGrid}>
                <div className={styles.formGroup}>
                  <label>Email Address*</label>
                  <input type="email" className={styles.input} placeholder="Enter your email" required />
                </div>
                <div className={styles.formGroup}>
                  <label>Phone Number*</label>
                  <input type="tel" className={styles.input} placeholder="Enter your phone number" required />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Select Program of Interest*</label>
                <select className={styles.select} required>
                  <option value="">Choose a program...</option>
                  <option value="diploma">Postgraduate Diploma in Strategic Management</option>
                  <option value="data-science">Postgraduate Diploma in Data Science</option>
                  <option value="ai">OTHM Level 7 Diploma in AI</option>
                  <option value="business">Bachelor&apos;s Top-up Degree</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label>Prefered Contact Method</label>
                <div style={{ display: 'flex', gap: '2rem', marginTop: '0.5rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '400' }}>
                    <input type="radio" name="contact" value="email" /> Email
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '400' }}>
                    <input type="radio" name="contact" value="phone" /> Phone
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '400' }}>
                    <input type="radio" name="contact" value="whatsapp" /> WhatsApp
                  </label>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Additional Message / Questions</label>
                <textarea className={styles.textarea} rows={5} placeholder="Tell us more about your background or any questions you have..."></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>Submit Application</button>
            </form>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
