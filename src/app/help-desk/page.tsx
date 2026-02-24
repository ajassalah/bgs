import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./HelpDesk.module.css";
import Image from "next/image";

export default function HelpDeskPage() {
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
          <h1 className={styles.heroTitle}>Help Desk</h1>
          <p className={styles.heroSubtitle}>
            Unlock Your Potential With British Graduate School – Where Global Expertise Meets Local Excellence, Preparing You For A Future Without Limits.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          {/* How to Apply Intro */}
          <div className={styles.howToApply}>
             <span className={styles.topLabel}>HOW TO APPLY</span>
             <div className={styles.arrowIcon}>↓</div>
             <h2 className={styles.mainIntroText}>
               Items with an asterisk are required. The application form saves your progress, so don&apos;t worry about completing it in one sitting!
             </h2>
             <div className={styles.featuredImageWrapper}>
               <Image 
                 src="/help desk hero.jpg" 
                 alt="BGS Campus" 
                 width={1100} 
                 height={500} 
                 className={styles.featuredImage}
               />
             </div>
          </div>

          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2 className={styles.processTitle}>The Application Process</h2>
              
              <div className={styles.processSteps}>
                {/* Step 1 */}
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Complete Application Form</h3>
                    <p>The University of Acadia uses Apply web for the processing of graduate applications. Proceed to the link below to create an Apply web account, submit an application review a submitted application, and access post-submission functionality.</p>
                    <a href="/apply" className={styles.btnRedSmall}>Application Form</a>
                  </div>
                </div>

                {/* Step 2 */}
                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Confirmation of Application</h3>
                    <p>Admissions requirements vary by program. Please consult the <a href="/courses">program website</a> to verify which information is required to complete the application.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Application Review</h3>
                    <p>QRC will review your application to confirm you meet our requirements. If so, you will then be asked to complete an interview as part of the review process.</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Application Interview</h3>
                    <p>Interviews are usually completed over the phone with a member of the Academic Team. The purpose of the interview is to get to know you better, hear about your future plans, understand why you are interested in the course.</p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Payment of Fees</h3>
                    <p>At the end of the application, you will be required to pay the registration fee and the testing fee before continuing to the next step.</p>
                  </div>
                </div>
              </div>

              <div className={styles.infoSection}>
                <h3 className={styles.subTitle}>Requirements: You will need</h3>
                <ul className={styles.list}>
                  <li>You can be admitted at any time during the academic year.</li>
                  <li>If English is not your first language, you will need to demonstrate English language proficiency (equivalent to IELTS with a minimum of 5.5 in each band and 6.0 in speaking).</li>
                  <li>Contact information for one teacher (or two, maximum) who will complete the Teacher Evaluation form.</li>
                  <li>Open to students 18 years and over at course commencement.</li>
                  <li>Spiritual Formation Program Requirements (where applicable).</li>
                </ul>
              </div>

              <div className={styles.dualGrid}>
                <div className={styles.smallCard}>
                  <h4 className={styles.smallCardTitle}>Confirmation of Application</h4>
                  <p>Once submitted, you will receive a confirmation email with further instructions regarding your assessment.</p>
                </div>
                <div className={styles.smallCard}>
                  <h4 className={styles.smallCardTitle}>Financial Aid</h4>
                  <p>Contact our support team to learn more about scholarships and financial assistance programs.</p>
                </div>
              </div>
            </div>

            <div className={styles.sidebar}>
              <div className={styles.ctaCard}>
                <h3>Need Instant Help?</h3>
                <p>Our dedicated support team is here to assist you with any questions during your application process.</p>
                <div className={styles.contactItem}>
                  <span>📞 +44 756 675 6499</span>
                </div>
                <div className={styles.contactItem}>
                  <span>📧 info@britishgraduateschool.co.uk</span>
                </div>
                <a href="/contact" className={styles.btnWhite}>Contact Support</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
