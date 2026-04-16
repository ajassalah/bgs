import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import Image from "next/image";
import styles from "./Admissions.module.css";

export default function AdmissionsPage() {
  const steps = [
    { title: "Choose Program", desc: "Select your desired program from our diverse range of courses." },
    { title: "Submit Online", desc: "Complete the online application and upload required documents." },
    { title: "Pay Fees", desc: "Pay the application fee (if applicable) through our secure gateway." },
    { title: "Confirmation", desc: "Await confirmation and personalized guidance from our team." }
  ];

  const googleFormUrl = "https://docs.google.com/forms/d/1Tzzp3Pi2byK0x4TeLBFRS39kX0wbDoAdA3-saD9nOH4/viewform?edit_requested=true";

  return (
    <main style={{ overflowX: 'hidden' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Admissions</h1>
          <p className={styles.heroSubtitle}>
            Become a student of British Graduate School of Business. Together, let&apos;s continue to motivate the next generation to dream big, aim high, and achieve greatness.
          </p>
          <div className="mt-8">
            <Link href={googleFormUrl} target="_blank" className={styles.admissionBtn}>
              APPLY NOW
            </Link>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          {/* Welcome Section */}
          <div className="text-center mb-5">
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1a1a1a' }}>Your Journey Begins Here</h2>
            <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '800px', margin: '1rem auto' }}>
              The future starts here—become a part of our story! Discover our programs designed to build your skills, confidence, and career success.
            </p>
          </div>

          <div style={{ marginTop: '5rem' }}>
            {/* How to Apply */}
            <div className={styles.contentSection}>
              <div className={styles.textSide}>
                <h2>How to Apply</h2>
                <p>
                  Applying to BGS is a simple and straightforward process. We have designed our application system to be as efficient as possible, allowing you to focus on your academic goals.
                </p>
                <div className={styles.list}>
                  <div className={styles.listItem}><strong>Step 1:</strong> Select your preferred program from our catalog.</div>
                  <div className={styles.listItem}><strong>Step 2:</strong> Complete the online application form.</div>
                  <div className={styles.listItem}><strong>Step 3:</strong> Gather and upload the necessary identification and academic documents.</div>
                </div>
              </div>
              <div className={styles.imageSide}>
                <Image src="/admission-student.png" alt="Admission process" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>

            {/* Entry Requirements */}
            <div className={styles.contentSection}>
              <div className={styles.textSide}>
                <h2>Entry Requirements</h2>
                <p>
                  We welcome students from diverse backgrounds and different levels of experience. Entry requirements vary depending on the program level you choose.
                </p>
                <p>
                  General requirements usually include academic transcripts, proof of English proficiency, and identification documents. Please refer to specific program details or contact our admissions team for personalized advice.
                </p>
              </div>
              <div className={styles.imageSide}>
                <Image src="/online-student-3ff-1.jpg" alt="Entry Requirements" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>

            {/* Application Process Steps */}
            <div style={{ padding: '80px 0', background: '#f8f9fa', borderRadius: '30px', margin: '4rem 0' }}>
              <div className="text-center mb-5">
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>The Application Process</h2>
                <p style={{ maxWidth: '800px', margin: '0 auto', color: '#666' }}>
                  Four simple steps to joining the British Graduate School community.
                </p>
              </div>
              <div className={styles.categoriesGrid}>
                {steps.map((step, idx) => (
                  <div key={idx} className={styles.facilityCard}>
                    <span className={styles.facilityIcon}>{idx + 1}</span>
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fees & Financial Aid */}
            <div className={styles.contentSection}>
              <div className={styles.textSide}>
                <h2>Fees & Financial Aid</h2>
                <p>
                  We offer competitive tuition fees with various financial aid options, including scholarships and flexible payment plans, ensuring quality education is accessible to everyone.
                </p>
                <div className={styles.list}>
                  <div className={styles.listItem}>Transparent and competitive fee structure</div>
                  <div className={styles.listItem}>Merit-based scholarships for outstanding students</div>
                  <div className={styles.listItem}>Flexible monthly payment plans available</div>
                </div>
                <div className="mt-8">
                  <Link href={googleFormUrl} target="_blank" className={styles.admissionBtn}>
                    Submit Your Application
                  </Link>
                </div>
              </div>
              <div className={styles.imageSide}>
                <Image src="/qualifi-endorsed-729x800.png" alt="Financial Aid" fill style={{ objectFit: 'contain', background: '#fff' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
      <Footer />
    </main>
  );
}
