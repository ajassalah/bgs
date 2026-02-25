import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import styles from "./Life.module.css";

export default function LifeAtBGSPage() {
  const activities = [
    { title: "Student Communities", desc: "Join diverse student groups and clubs.", icon: "👥" },
    { title: "Campus Events", desc: "Regular webinars, workshops and seminars.", icon: "📅" },
    { title: "Global Network", desc: "Connect with alumni around the world.", icon: "🌍" },
    { title: "Career Support", desc: "Professional guidance for your future path.", icon: "💼" }
  ];

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
          <h1 className={styles.heroTitle}>Life at British Graduate School</h1>
          <p className={styles.heroSubtitle}>
            Unlock Your Potential With British Graduate School – Where Global Expertise Meets Local Excellence, Preparing You For A Future Without Limits.
          </p>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <div className="text-center mb-2">
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1a1a1a' }}>Experience More Than Just Lectures</h2>
            <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '800px', margin: '1rem auto' }}>
              At British Graduate School, we believe in a holistic educational experience that goes beyond traditional classroom learning.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {activities.map((item, idx) => (
              <div key={idx} className={styles.featureCard}>
                <div className={styles.iconCircle}>
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p style={{ color: '#666', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div style={{ marginTop: '6rem' }}>
            <h2 className="text-center mb-2" style={{ fontSize: '2.5rem', fontWeight: 800 }}>Student Success Stories</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
              <div className={styles.testimonialCard}>
                <p className={styles.quote}>&quot;The PGD program in Data Science at British Graduate School was life-changing. The faculty is world-class and the support is amazing.&quot;</p>
                <div className={styles.author}>Malith Perera</div>
                <div className={styles.role}>Data Scientist at TechCorp</div>
              </div>
              <div className={styles.testimonialCard}>
                <p className={styles.quote}>&quot;Highly recommend British Graduate School for anyone looking to upskill in Management. Flexible learning and great networking opportunities.&quot;</p>
                <div className={styles.author}>Sarah de Silva</div>
                <div className={styles.role}>HR Manager</div>
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
