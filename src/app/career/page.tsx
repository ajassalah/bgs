import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import { client } from "@/sanity/lib/client";
import { Metadata } from "next";
import CareerBoard, { CareerJob } from "./CareerBoard";
import styles from "./Career.module.css";

export const metadata: Metadata = {
  title: "Careers | British Graduate School",
  description:
    "Explore current career opportunities at British Graduate School and apply for roles across academic, admissions, student support, operations, and more.",
};

const fallbackJobs: CareerJob[] = [
  {
    _id: "sample-academic-advisor",
    title: "Academic Advisor",
    slug: { current: "academic-advisor" },
    summary:
      "Support learners through course selection, academic progression, and study planning across BGS programmes.",
    department: "academic",
    location: "Leicester, United Kingdom",
    jobType: "full-time",
    workMode: "hybrid",
    experienceLevel: "mid",
    skills: ["Student guidance", "Academic planning", "Communication"],
    requirements: [
      "Experience in higher education or student advisory services",
      "Strong communication and learner support skills",
      "Ability to manage student records and progression plans",
    ],
    benefits: ["Professional development", "Collaborative academic team", "Hybrid work support"],
    postedAt: new Date().toISOString(),
  },
  {
    _id: "sample-admissions-officer",
    title: "Admissions Officer",
    slug: { current: "admissions-officer" },
    summary:
      "Manage applicant enquiries, admissions documentation, and student onboarding for international learners.",
    department: "admissions",
    location: "Leicester, United Kingdom",
    jobType: "full-time",
    workMode: "on-site",
    experienceLevel: "entry",
    skills: ["Admissions", "CRM handling", "Documentation"],
    requirements: [
      "Experience in admissions, administration, or customer service",
      "High attention to detail",
      "Professional written and verbal communication",
    ],
    benefits: ["Structured training", "International education exposure", "Career progression"],
    postedAt: new Date().toISOString(),
  },
  {
    _id: "sample-digital-marketing-executive",
    title: "Digital Marketing Executive",
    slug: { current: "digital-marketing-executive" },
    summary:
      "Plan and execute digital campaigns that promote BGS programmes, student stories, and admissions events.",
    department: "marketing",
    location: "Remote / Hybrid",
    jobType: "contract",
    workMode: "hybrid",
    experienceLevel: "mid",
    skills: ["Campaigns", "Social media", "Content planning"],
    requirements: [
      "Digital marketing experience in education or services",
      "Ability to plan content calendars and campaigns",
      "Understanding of lead generation and reporting",
    ],
    benefits: ["Flexible working", "Creative ownership", "Campaign portfolio development"],
    postedAt: new Date().toISOString(),
  },
];

async function getCareerJobs(): Promise<CareerJob[]> {
  const query = `*[_type == "job" && isActive == true] | order(postedAt desc) {
    _id,
    title,
    slug,
    summary,
    description,
    department,
    location,
    jobType,
    workMode,
    skills,
    requirements,
    benefits,
    experienceLevel,
    salaryMin,
    salaryMax,
    salaryCurrency,
    postedAt,
    closingDate,
    image
  }`;

  try {
    const jobs = await client.fetch<CareerJob[]>(query);
    return jobs.length > 0 ? jobs : fallbackJobs;
  } catch (error) {
    console.error("Error fetching career jobs:", error);
    return fallbackJobs;
  }
}

export default async function CareerPage() {
  const jobs = await getCareerJobs();

  return (
    <main className={styles.page}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Careers at British Graduate School",
          description:
            "Current job openings and career opportunities at British Graduate School.",
          breadcrumb: "Home > Career",
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
          poster="/student-life-stairs.png"
        >
          <source
            src="https://kensleygraduateschool.com/wp-content/uploads/2025/03/4508070-uhd_3840_2160_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <p className={styles.kicker}>Careers at BGS</p>
          <h1 className={styles.heroTitle}>Build What Education Becomes Next</h1>
          <p className={styles.heroSubtitle}>
            Join a growing international education team helping learners access
            flexible, career-focused qualifications and global progression routes.
          </p>
        </div>
      </section>

      <CareerBoard jobs={jobs} />

      <CTASection />
      <Footer />
    </main>
  );
}
