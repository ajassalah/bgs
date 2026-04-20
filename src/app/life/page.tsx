import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import Image from "next/image";
import styles from "./Life.module.css";
import JsonLd from "@/components/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Life at BGS | Student Experience & Campus Culture",
  description: "Experience vibrant student life at British Graduate School. Explore our clubs, cultural activities, and support services designed for holistic growth.",
};

export default function LifeAtBGSPage() {
  const activities = [
    { title: "Student Communities", desc: "Join diverse student groups and clubs.", icon: "👥" },
    { title: "Campus Events", desc: "Regular webinars, workshops and seminars.", icon: "📅" },
    { title: "Global Network", desc: "Connect with alumni around the world.", icon: "🌍" },
    { title: "Career Support", desc: "Professional guidance for your future path.", icon: "💼" }
  ];

  return (
    <main style={{ overflowX: 'hidden' }}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Student Life at BGS",
          "description": "Discover the holistic student experience at British Graduate School, including facilities, activities, and support.",
          "breadcrumb": "Home > Student Life"
        }}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className={styles.heroVideo}
          poster="/student-life-stairs.png"
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

          <div style={{ marginTop: '5rem' }}>
            {/* Student Life Overview */}
            <div className={styles.contentSection}>
              <div className={styles.textSide}>
                <h2>Student Life at BGS</h2>
                <p>
                  The British Graduate School offers a vibrant and inclusive environment where students from diverse backgrounds come together to learn, grow, and create lifelong memories. Life at BGS isn&apos;t just about academic excellence—it&apos;s about discovering your passions, exploring opportunities, and building a community.
                </p>
                <div className={styles.list}>
                  <div className={styles.listItem}>Modern learning environment with global perspectives</div>
                  <div className={styles.listItem}>Vibrant inclusive community for personal growth</div>
                  <div className={styles.listItem}>Exceptional balance between studies and networking</div>
                </div>
              </div>
                <div className={styles.imageSide}>
                  <Image src="/student-life-stairs.png" alt="Student Life" fill style={{ objectFit: 'cover' }} />
                </div>
              </div>
  
              {/* Accommodation & Campus Life */}
              <div className={styles.contentSection}>
                <div className={styles.textSide}>
                  <h2>Student Accommodation & Campus Life</h2>
                  <p>
                    Living on campus is a great way to immerse yourself in the university experience. BGS offers comfortable and affordable accommodation options, each equipped with essential amenities. The residences foster a strong sense of community, with regular events and study groups.
                  </p>
                  <p>
                    The BGS campus is a blend of modern facilities and serene landscapes, providing the perfect setting for learning and leisure. From state-of-the-art lecture halls to cozy study spaces, the campus is designed to meet every student&apos;s needs.
                  </p>
                </div>
                <div className={styles.imageSide}>
                  <Image src="/online-student-5d.jpg" alt="Campus Facilities" fill style={{ objectFit: 'cover' }} />
                </div>
              </div>
  
              {/* Clubs & Activities Grid */}
              <div style={{ padding: '60px 0' }}>
                <div className="text-center mb-5">
                  <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Clubs & Cultural Activities</h2>
                  <p style={{ maxWidth: '800px', margin: '0 auto', color: '#666' }}>
                    At BGS, students can join a variety of clubs catering to diverse interests, helping them develop teamwork and leadership skills.
                  </p>
                </div>
                <div className={styles.categoriesGrid}>
                  <div className={styles.facilityCard}>
                    <span className={styles.facilityIcon}>📚</span>
                    <h4>Academic Clubs</h4>
                    <p>Deepen your knowledge in marketing, finance, or technology through expert-led sessions.</p>
                  </div>
                  <div className={styles.facilityCard}>
                    <span className={styles.facilityIcon}>🎨</span>
                    <h4>Cultural & Arts</h4>
                    <p>Celebrate diversity through drama, photography, music, and cultural exhibitions.</p>
                  </div>
                  <div className={styles.facilityCard}>
                    <span className={styles.facilityIcon}>🏆</span>
                    <h4>Sports Clubs</h4>
                    <p>Stay active with football, badminton, yoga, and various fitness initiatives.</p>
                  </div>
                  <div className={styles.facilityCard}>
                    <span className={styles.facilityIcon}>💡</span>
                    <h4>Leadership</h4>
                    <p>Enhance your leadership skills and develop business ideas with like-minded peers.</p>
                  </div>
                </div>
  
                {/* Cultural Activities Detail */}
                <div style={{ marginTop: '4rem', background: '#fff', padding: '3rem', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', color: '#a0142d' }}>Cultural Experiences</h3>
                  <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Experience the world through a multicultural lens at British Graduate School:</p>
                  <div className={styles.list}>
                    <div className={styles.listItem}><strong>Festivals:</strong> Celebrate global traditions including Diwali, Eid, and Christmas.</div>
                    <div className={styles.listItem}><strong>Events:</strong> Participate in themed nights, cultural exhibitions, and unique culinary experiences.</div>
                    <div className={styles.listItem}><strong>Awareness:</strong> Be part of global awareness initiatives that foster inclusivity and empathy.</div>
                  </div>
                </div>
              </div>
  
              {/* Support & Services */}
              <div className={styles.contentSection}>
                <div className={styles.textSide}>
                  <h2>Workshops & Support Services</h2>
                  <p>
                    BGS offers a rich calendar of workshops to help you grow professionally, including public speaking, leadership training, and career fairs.
                  </p>
                  <div className={styles.list}>
                    <div className={styles.listItem}><strong>Counseling & Mentorship:</strong> Personalized guidance for academic and personal challenges.</div>
                    <div className={styles.listItem}><strong>Career Services:</strong> Internship placements, CV building, and career coaching sessions.</div>
                    <div className={styles.listItem}><strong>Health & Wellbeing:</strong> Dedicated resources and activities to maintain physical and mental health.</div>
                  </div>
                </div>
                <div className={styles.imageSide}>
                  <Image src="/online-student-2r.jpg" alt="Student Support" fill style={{ objectFit: 'cover' }} />
                </div>
              </div>

            {/* Campus Facilities */}
            <div style={{ padding: '60px 0' }}>
              <div className="text-center mb-5">
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Campus Facilities</h2>
                <p style={{ maxWidth: '800px', margin: '0 auto', color: '#666' }}>
                  Enjoy state-of-the-art facilities designed to support your academic and leisure needs throughout your journey.
                </p>
              </div>
              <div className={styles.categoriesGrid}>
                <div className={styles.facilityCard}>
                  <span className={styles.facilityIcon}>📖</span>
                  <h4>Libraries</h4>
                  <p>Access a wealth of knowledge in modern, quiet study spaces equipped with digital resources.</p>
                </div>
                <div className={styles.facilityCard}>
                  <span className={styles.facilityIcon}>🏋️</span>
                  <h4>Sports Complex</h4>
                  <p>A fully equipped gym with indoor and outdoor courts for fitness and recreational sports.</p>
                </div>
                <div className={styles.facilityCard}>
                  <span className={styles.facilityIcon}>☕</span>
                  <h4>Cafeteria</h4>
                  <p>Relax and socialize in our common areas while savoring delicious and healthy meals.</p>
                </div>
              </div>
            </div>

            {/* Workshops & Events */}
            <div style={{ padding: '60px 0', background: '#fcfcfc', borderRadius: '20px', margin: '4rem 0' }}>
              <div className="text-center mb-5">
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Workshops & Events</h2>
                <p style={{ maxWidth: '800px', margin: '0 auto', color: '#666' }}>
                  BGS offers a rich calendar of workshops and events to help you grow personally and professionally.
                </p>
              </div>
              <div className={styles.categoriesGrid}>
                <div className={styles.facilityCard} style={{ borderTopColor: '#00234a' }}>
                  <span className={styles.facilityIcon}>🎯</span>
                  <h4>Skill Workshops</h4>
                  <p>Public speaking, leadership, coding, and language training to sharpen your edge.</p>
                </div>
                <div className={styles.facilityCard} style={{ borderTopColor: '#00234a' }}>
                  <span className={styles.facilityIcon}>🤝</span>
                  <h4>Networking</h4>
                  <p>Career fairs, guest lectures, and alumni meetups to build your professional circle.</p>
                </div>
                <div className={styles.facilityCard} style={{ borderTopColor: '#00234a' }}>
                  <span className={styles.facilityIcon}>🎉</span>
                  <h4>Social Gatherings</h4>
                  <p>Movie nights, themed parties, and talent shows to unwind and connect with peers.</p>
                </div>
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
