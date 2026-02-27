import styles from "./FeaturedCourses.module.css";
import Link from "next/link";
import { allCourses } from "@/data/courses";
import Image from "next/image";
import { getCourses } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";

export default async function FeaturedCourses({ data }: { data?: any }) {
  // Use manually selected courses from Home schema if they exist
  let featuredCourses = data?.featuredCourses || [];
  
  if (featuredCourses.length === 0) {
    // Try to fetch from Sanity all courses
    let coursesFromSanity = [];
    try {
      coursesFromSanity = await getCourses();
    } catch (error) {
      console.warn("Could not fetch courses from Sanity, using fallback data.");
    }

    // Use Sanity data if available, otherwise filter from local static data
    const level7Courses = coursesFromSanity.length > 0 
      ? coursesFromSanity.filter((c: any) => c.level?.includes("Level 7"))
      : allCourses.filter((course: any) => course.level.includes("Level 7"));

    // Pick first 6 for the grid
    featuredCourses = level7Courses.slice(0, 6);
  }

  const sectionTitle = data?.featuredCoursesTitle || "Shape Your Professional Future";
  const sectionSubtitle = data?.featuredCoursesSubtitle || "Our Top-Rated Programs";

  return (
    <section className="section bg-gray">
      <div className="container">
        <div className="text-center mb-5">
          <span className="text-muted uppercase font-bold tracking-widest text-sm" style={{ letterSpacing: '2px', display: 'block', marginBottom: '0.5rem' }}>{sectionSubtitle}</span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>{sectionTitle}</h2>
        </div>
        
        <div className={styles.coursesGrid}>
          {featuredCourses.map((course: any) => (
            <div key={course.id} className={styles.courseCard}>
              <div className={styles.courseImage}>
                {course.image ? (
                  <Image 
                    src={typeof course.image === 'string' ? course.image : (urlForImage(course.image)?.url() || "")} 
                    alt={course.title} 
                    fill 
                    style={{ objectFit: 'cover' }} 
                  />
                ) : (
                  <div style={{ width: '100%', height: '100%', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>
                    No Image
                  </div>
                )}
                <span className={styles.category}>{course.category}</span>
              </div>
              <div className={styles.courseContent}>
                <div className={styles.courseLevel}>{course.awardingBody} {course.level}</div>
                <h3 className={styles.courseTitle}>{course.title}</h3>
                <Link href={`/courses/${course.id}`} className={styles.learnMore}>
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        <br />
        <div className="text-center mt-5">
          <Link href="/courses" className="btn btn-primary" style={{ background: '#eb4d4b', padding: '12px 30px', borderRadius: '5px', borderColor: '#eb4d4b' }}>View All Courses</Link>
        </div>
      </div>
    </section>
  );
}
