import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./Qualifi.module.css";
import Image from "next/image";
import CTASection from "@/components/CTASection";

export default function QualifiPage() {
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
          <h1 className={styles.heroTitle}>Qualifi Endorsement</h1>
          <p className={styles.heroSubtitle}>
            A Premier Education Distinction. British Graduate School is proud to be a Qualifi Endorsed institution, ensuring the highest standards of academic excellence.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.content}>
              <h2 className={styles.mainTitle}>Qualifi Endorsement</h2>
              <p className={styles.description}>
                Qualifi Endorsement is a leading, globally recognised quality standard in international education. Institutions undergo an impartial and independent external assessment process to confirm their provision meets rigorous internationally accepted standards, covering the whole spectrum of its administration, governance, and educational offering.
              </p>
              <p className={styles.description}>
                Achieving this endorsement demonstrates to students and stakeholders that an institution is a high-quality education provider that delivers safe and rewarding educational experiences and is committed to continuous improvement throughout its operation.
              </p>

              <div className={styles.highlightCard}>
                <h3 className={styles.subTitle}>About Qualifi</h3>
                <p>Qualifi is a leading 21st-century UK awarding organisation regulated by Ofqual (Office of Qualifications and Examinations Regulation). Their mission is to enable students to gain the skills and knowledge required for success in the global economy. Qualifi works with over 400 centres globally to deliver vocationally related and academic qualifications from Level 3 to Level 8.</p>
              </div>
            </div>

            <div className={styles.imageCol}>
              <div className={styles.logoCard}>
                <Image src="/qualifi-endorsed-729x800.png" alt="Qualifi Endorsed" width={300} height={200} style={{ objectFit: 'contain' }} />
                <p className={styles.caption}>Official Endorsement Status</p>
              </div>
            </div>
          </div>

          <div className={styles.premierSection}>
            <h2 className={styles.subTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>BGS is now a Premier Institution</h2>
            <div className={styles.flexGrid}>
              <div className={styles.flexItem}>
                <div className={styles.iconBox}>🏆</div>
                <h4>Academic Excellence</h4>
                <p>This distinction is a direct reflection of our adherence to prestigious international standards.</p>
              </div>
              <div className={styles.flexItem}>
                <div className={styles.iconBox}>🌍</div>
                <h4>Global Recognition</h4>
                <p>Our endorsed status ensures that qualifications earned here carry weight with employers worldwide.</p>
              </div>
              <div className={styles.flexItem}>
                <div className={styles.iconBox}>📈</div>
                <h4>Continuous Improvement</h4>
                <p>We are dedicated to maintaining and exceeding the rigorous benchmarks set by leading bodies.</p>
              </div>
            </div>
          </div>

          <div className={styles.ctaBanner}>
            <h3>Ready to join a premier institution?</h3>
            <p>Start your journey with British Graduate School today.</p>
            <a href="/apply" className={styles.btnWhite}>Inquire Now</a>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
