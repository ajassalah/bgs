import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import styles from "./Cqhe.module.css";

export const metadata: Metadata = {
  title: "CQHE | Centre for Qualification and Higher Education",
  description:
    "Explore CQHE qualifications through British Graduate School, including UK vocational pathways from Levels 3 to 7 across business, IT, health care, accounting, and more.",
};

const stats = [
  { value: "100+", label: "Qualifications" },
  { value: "980+", label: "Achievers" },
  { value: "15+", label: "Centers" },
];

const qualificationLevels = [
  { level: "Level 3", text: "Foundation and entry pathways" },
  { level: "Level 4", text: "Undergraduate year 1 equivalent" },
  { level: "Level 5", text: "Undergraduate year 2 equivalent" },
  { level: "Level 6", text: "Graduate diploma level" },
  { level: "Level 7", text: "Postgraduate diploma level" },
];

const featuredCourses = [
  "CQHE Level 7 Postgraduate Diploma in Business Strategy (RQF)",
  "CQHE Advanced Diploma in Sports Management",
  "CQHE Level 3 Diploma in Quantity Surveying",
  "CQHE Level 6 Graduate Diploma in Quantity Surveying",
  "CQHE Level 5 Diploma in Quantity Surveying",
  "CQHE Level 4 Diploma in Electrical & Electronic Engineering Technology",
];

const categories = [
  "Information Technology",
  "Business Management",
  "Data Science and AI",
  "Psychology",
  "Accounting and Finance",
  "Law",
  "Engineering",
  "Strategic Marketing",
  "Human Resource Management",
  "Education and Training Management",
  "Tourism & Hospitality Management",
  "Logistics and Supply Chain Management",
];

const values = [
  "Integrity",
  "Excellence",
  "Accountability",
  "Collaboration",
  "Professionalism",
];

export default function CqhePage() {
  return (
    <main className={styles.page}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "CQHE Qualifications",
          description:
            "Information about CQHE qualifications, recognition, and study pathways at British Graduate School.",
          breadcrumb: "Home > CQHE",
        }}
      />
      <Navbar />

      <section className={styles.hero}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.heroVideo}
          poster="/help desk hero.jpg"
        >
          <source
            src="https://kensleygraduateschool.com/wp-content/uploads/2025/03/4508070-uhd_3840_2160_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className={styles.logoPanel}>
            <Image
              src="/cghe_logo.png"
              alt="CQHE logo"
              width={220}
              height={95}
              priority
              className={styles.logo}
            />
          </div>
          <p className={styles.kicker}>Centre for Qualification and Higher Education</p>
          <h1 className={styles.heroTitle}>CQHE</h1>
          <p className={styles.heroSubtitle}>
            Unlocking potential, one qualification at a time. Explore flexible
            vocational qualifications and higher education pathways designed for
            global learners.
          </p>
          <div className={styles.heroActions}>
            <a href="/apply" className={styles.btnRed}>
              Inquire Now
            </a>
            <a href="https://cqhe.org.uk/" target="_blank" className={styles.btnGhost}>
              Visit CQHE
            </a>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((item) => (
              <div className={styles.statCard} key={item.label}>
                <span>{item.value}</span>
                <p>{item.label}</p>
              </div>
            ))}
          </div>

          <div className={styles.introGrid}>
            <div>
              <p className={styles.eyebrow}>Who We Are</p>
              <h2 className={styles.mainTitle}>
                A UK-based British awarding body for vocational qualifications.
              </h2>
            </div>
            <div>
              <p className={styles.description}>
                Centre for Qualification and Higher Education (CQHE) delivers
                qualifications at Levels 3, 4, 5, 6, and 7 across fields such as
                Business, Health and Social Care, Information Technology,
                Accountancy, and related professional disciplines.
              </p>
              <p className={styles.description}>
                CQHE works with approved centers in the UK and worldwide. It is
                registered with the UK Register of Learning Providers (UKRLP),
                and its qualifications are approved and endorsed by World
                Education Services (WES).
              </p>
            </div>
          </div>

          <div className={styles.recognitionBand}>
            <div className={styles.recognitionLogo}>
              <Image
                src="/cghe_logo.png"
                alt="CQHE logo"
                width={180}
                height={80}
                className={styles.logo}
              />
            </div>
            <div>
              <h3>Recognition and Quality</h3>
              <p>
                CQHE focuses on internationally recognized qualifications,
                quality standards, and practical learning routes that support
                academic progression and employability.
              </p>
            </div>
          </div>

          <div className={styles.levelsSection}>
            <p className={styles.eyebrow}>Qualification Levels</p>
            <h2 className={styles.mainTitle}>CQHE pathways from Level 3 to Level 7</h2>
            <div className={styles.levelsGrid}>
              {qualificationLevels.map((item) => (
                <div className={styles.levelCard} key={item.level}>
                  <span className={styles.levelNum}>{item.level}</span>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.contentGrid}>
            <section className={styles.panel}>
              <p className={styles.eyebrow}>Featured Qualifications</p>
              <h3 className={styles.subTitle}>Popular CQHE courses</h3>
              <ul className={styles.list}>
                {featuredCourses.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
            </section>

            <section className={styles.panel}>
              <p className={styles.eyebrow}>Study Areas</p>
              <h3 className={styles.subTitle}>Featured categories</h3>
              <div className={styles.categoryGrid}>
                {categories.map((category) => (
                  <span key={category}>{category}</span>
                ))}
              </div>
            </section>
          </div>

          <div className={styles.ukrlpSection}>
            <Image
              src="/UKRLP.png"
              alt="UK Register of Learning Providers registration"
              width={1100}
              height={620}
              className={styles.ukrlpImage}
            />
          </div>

          <div className={styles.valuesSection}>
            <p className={styles.eyebrow}>Core Values</p>
            <div className={styles.valuesGrid}>
              {values.map((value) => (
                <span key={value}>{value}</span>
              ))}
            </div>
          </div>

          <div className={styles.ctaBox}>
            <p>
              British Graduate School supports learners who want to follow CQHE
              qualification pathways with guidance, flexible study support, and
              progression-focused academic advice.
            </p>
            <a href="/apply" className={styles.btnRed}>
              Inquire Now
            </a>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
