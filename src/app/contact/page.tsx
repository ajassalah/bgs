import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./Contact.module.css";

export default function ContactPage() {
  return (
    <main style={{ overflowX: 'hidden' }}>
      <Navbar />
      
      {/* Hero Section - Same as About Us */}
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
          <h1 className={styles.heroTitle}>Contact Us</h1>
          <p className={styles.heroSubtitle}>
            Unlock Your Potential With British Graduate School – Where Global Expertise Meets Local Excellence, Preparing You For A Future Without Limits.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            
            {/* Top section: Contact Form */}
            <div className={styles.formSection}>
              <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2 className={styles.formTitle}>Send a Message</h2>
                <p className={styles.formDesc}>
                  If you have any questions about the programmes we provide, simply use the form below. We try to respond to all queries and comments within 24 hours.
                </p>
                <form className={styles.contactForm}>
                  <div className={styles.inputGroup}>
                    <input type="text" placeholder="First Name" className={styles.input} required />
                    <input type="text" placeholder="Last Name" className={styles.input} required />
                  </div>
                  <input type="email" placeholder="Email Address" className={styles.input} required />
                  <input type="text" placeholder="Subject" className={styles.input} required />
                  <textarea placeholder="Your Message" rows={6} className={styles.textarea} required></textarea>
                  <button type="submit" className={styles.submitBtn}>Send Message</button>
                </form>
              </div>
            </div>

            {/* Bottom section: Intro and Cards */}
            <div style={{ marginTop: '4rem' }}>
              <h2 className={styles.formTitle} style={{ textAlign: 'center' }}>Keep In Touch With Us.</h2>
              <p style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.2rem', fontWeight: '500', color: '#666', maxWidth: '800px', margin: '0 auto' }}>If you have any questions about the programmes we provide, simply use the form below. We try and respond to all queries and comments within 24 hours.</p>
              
              <div className={styles.infoCards}>
                <div className={styles.infoCard}>
                  <div className={styles.iconWrapper}>📍</div>
                  <h3>Location</h3>
                  <p>2nd Floor, 1st, 4 De Montfort St, Leicester LE1 7GA, United Kingdom.</p>
                </div>
                
                <div className={styles.infoCard}>
                  <div className={styles.iconWrapper}>📞</div>
                  <h3>Call Us</h3>
                  <p>+44 756 675 6499</p>
                  <p style={{ fontSize: '0.85rem', marginTop: '0.2rem', color: '#888' }}></p>
                </div>
                
                <div className={styles.infoCard}>
                  <div className={styles.iconWrapper}>📧</div>
                  <h3>Email</h3>
                  <p>info@britishgraduateschool.co.uk</p>
                  <p style={{ fontSize: '0.85rem', marginTop: '0.2rem', color: '#888' }}>Speak to our Friendly team.</p>
                </div>
                
                <div className={styles.infoCard}>
                  <div className={styles.iconWrapper}>⏰</div>
                  <h3>Office Hours</h3>
                  <p>Mon-Fri from 8am to 5pm</p>
                  <p style={{ fontSize: '0.85rem', marginTop: '0.2rem', color: '#888' }}>Closed on Weekends</p>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Map */}
          <div className={styles.mapContainer}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.8804364024845!2d-1.1294863233261765!3d52.62888997232297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877611684c9888d%3A0xe9f75ec1f010f361!2s4%20De%20Montfort%20St%2C%20Leicester%20LE1%207GA%2C%20UK!5e0!3m2!1sen!2slk!4v1709282300000!5m2!1sen!2slk" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
