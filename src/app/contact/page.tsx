import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./Contact.module.css";
import JsonLd from "@/components/JsonLd";
import Image from "next/image";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <main style={{ overflowX: 'hidden' }}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact British Graduate School",
          "description": "Get in touch with British Graduate School for inquiries about our programmes, admissions, and partnerships.",
          "mainEntity": {
            "@type": "EducationalOrganization",
            "name": "British Graduate School",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "4 De Montfort St",
              "addressLocality": "Leicester",
              "postalCode": "LE1 7GA",
              "addressCountry": "UK"
            },
            "telephone": "+44 756 675 6499",
            "email": "info@britishgraduateschool.co.uk"
          }
        }}
      />
      <Navbar />
      
      {/* Hero Section - Same as About Us */}
      <section className={styles.hero}>
        <Image 
          src="/contact hero image .png" 
          alt="Contact Us" 
          fill 
          priority
          className={styles.heroImage}
        />
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
                <h2 id="contact-form" className={styles.formTitle}>Send a Message</h2>
                <p className={styles.formDesc}>
                  If you have any questions about the programmes we provide, simply use the form below. We try to respond to all queries and comments within 24 hours.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Bottom section: Intro and Cards */}
            <div className={styles.keepInTouchSection}>
              <h2 className={styles.formTitle} style={{ textAlign: 'center' }}>Keep In Touch With Us.</h2>
              <p className={styles.keepInTouchDesc}>If you have any questions about the programmes we provide, simply use the form below. We try and respond to all queries and comments within 24 hours.</p>
              
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
