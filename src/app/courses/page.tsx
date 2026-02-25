"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import Link from "next/link";
import styles from "./Courses.module.css";
import { allCourses } from "@/data/courses";

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedBody, setSelectedBody] = useState("All Awarding Bodies");

  const categories = useMemo(() => {
    const cats = new Set(allCourses.map(c => c.category));
    return ["All Categories", ...Array.from(cats)].sort();
  }, []);

  const bodies = useMemo(() => {
    const bds = new Set(allCourses.map(c => c.awardingBody));
    return ["All Awarding Bodies", ...Array.from(bds)].sort();
  }, []);

  const filteredCourses = useMemo(() => {
    return allCourses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All Categories" || course.category === selectedCategory;
      const matchesBody = selectedBody === "All Awarding Bodies" || course.awardingBody === selectedBody;
      return matchesSearch && matchesCategory && matchesBody;
    });
  }, [searchTerm, selectedCategory, selectedBody]);

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
          <h1 className={styles.heroTitle}>Our Programs</h1>
          <p className={styles.heroSubtitle}>
            Unlock Your Potential With British Graduate School – Where Global Expertise Meets Local Excellence, Preparing You For A Future Without Limits.
          </p>
        </div>
      </section>

      <section className={styles.mainContent}>
        <div className="container">
          
          {/* Filter Bar */}
          <div className={styles.filterBar}>
            <div className={styles.searchWrapper}>
              <input 
                type="text" 
                placeholder="Search for a course..." 
                className={styles.searchInput}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className={styles.selectWrapper}>
              <select 
                className={styles.select}
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div className={styles.selectWrapper}>
              <select 
                className={styles.select}
                value={selectedBody}
                onChange={(e) => setSelectedBody(e.target.value)}
              >
                {bodies.map(body => (
                  <option key={body} value={body}>{body}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Courses Grid */}
          <div className={styles.coursesGrid}>
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <div key={course.id} className={styles.courseCard}>
                  <div className={styles.imageWrapper}>
                    <Image 
                      src={course.image} 
                      alt={course.title} 
                      fill 
                      className={styles.cardImage}
                    />
                    <span className={styles.levelBadge}>{course.level}</span>
                    <span className={styles.categoryBadge}>{course.category}</span>
                  </div>
                  <div className={styles.content}>
                    <span className={styles.awardingBody}>{course.awardingBody}</span>
                    <h3 className={styles.title}>{course.title}</h3>
                    <Link href={`/contact#contact-form`} className={styles.btn}>
                      View Course
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.noResults}>
                <h3>No courses found matching your criteria.</h3>
                <button 
                  onClick={() => {setSearchTerm(""); setSelectedCategory("All Categories"); setSelectedBody("All Awarding Bodies");}}
                  style={{ color: '#eb4d4b', fontSize: '1rem', marginTop: '1rem', cursor: 'pointer', background: 'none', border: 'none', textDecoration: 'underline' }}
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
