import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./Othm.module.css";
import Image from "next/image";
import CTASection from "@/components/CTASection";

export default function OthmPage() {
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
          <h1 className={styles.heroTitle}>OTHM Sri Lanka</h1>
          <p className={styles.heroSubtitle}>
            Globally Recognized Pathways. OTHM enables students to gain access to recognized degree and Master&apos;s top-up programmes in the UK.
          </p>
        </div>
      </section>

      {/* About OTHM Section */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.introBox}>
            <h2 className={styles.mainTitle}>About OTHM</h2>
            <p className={styles.description}>
              OTHM is a UK-based awarding organisation with a global network of accredited delivery centres. Since 2003, OTHM has enabled thousands of students to gain access to recognised degree and Master’s top-up programmes in the UK. While OTHM is not a university, it works in collaboration with university partners and approved centres to offer qualifications.
            </p>
          </div>

          <div className={styles.grid}>
            <div className={styles.regulationBox}>
              <h3 className={styles.subTitle}>Regulation & Recognition</h3>
              <p className={styles.description}>
                The OTHM quality assurance team comprises respected academics and industry experts. The organisation is:
              </p>
              <ul className={styles.list}>
                <li><strong>Regulated by Ofqual</strong> (UK government body)</li>
                <li><strong>Recognised by Qualifications Wales</strong></li>
                <li><strong>Full member of the Federation of Awarding Bodies (FAB)</strong></li>
                <li><strong>WES approved</strong> for international academic equivalency</li>
              </ul>
            </div>
            
            <div className={styles.imageBox}>
               <div className={styles.imageWrapper}>
                <Image src="/nqual logo.jpeg" alt="OTHM Regulation" fill className={styles.img} style={{ objectFit: 'contain' }} />
              </div>
            </div>
          </div>

          <div className={styles.levelsSection}>
            <h3 className={styles.mainTitle}>OTHM Qualification Levels</h3>
            <div className={styles.levelsGrid}>
              <div className={styles.levelCard}>
                <span className={styles.levelNum}>Level 3</span>
                <p>Foundation Level</p>
              </div>
              <div className={styles.levelCard}>
                <span className={styles.levelNum}>Level 4</span>
                <p>Year 1 of Undergraduate Degree</p>
              </div>
              <div className={styles.levelCard}>
                <span className={styles.levelNum}>Level 5</span>
                <p>Year 2 of Undergraduate Degree</p>
              </div>
              <div className={styles.levelCard}>
                <span className={styles.levelNum}>Level 6</span>
                <p>Year 3 of Undergraduate Degree</p>
              </div>
              <div className={styles.levelCard}>
                <span className={styles.levelNum}>Level 7</span>
                <p>Postgraduate Level</p>
              </div>
            </div>
          </div>

          <div className={styles.whySection}>
            <h3 className={styles.subTitle}>Why Choose OTHM?</h3>
            <div className={styles.whyGrid}>
              <div className={styles.whyItem}>
                <h4>Globally Recognised</h4>
                <p>Regulated qualifications accepted for degree and Master’s top-up programmes worldwide.</p>
              </div>
              <div className={styles.whyItem}>
                <h4>Cost-Effective</h4>
                <p>A high-quality UK education pathway at a fraction of the traditional cost.</p>
              </div>
              <div className={styles.whyItem}>
                <h4>Career Relevant</h4>
                <p>Blended curriculum of academic and professional content focused on career skills.</p>
              </div>
              <div className={styles.whyItem}>
                <h4>Flexible Learning</h4>
                <p>Flexible learning options via approved centres to fit your lifestyle and work.</p>
              </div>
            </div>
          </div>
          
          <div className={styles.ctaBox}>
            <p>At British Graduate School, we are committed to helping every student grow with the support of experienced lecturers and a student-centric approach.</p>
            <h4 style={{ color: '#eb4d4b', margin: '1rem 0', fontWeight: 800 }}>Your future begins here.</h4>
            <a href="/apply" className={styles.btnRed}>Inquire Now</a>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
