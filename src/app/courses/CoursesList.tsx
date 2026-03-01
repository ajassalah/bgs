"use client";

import { useState, useMemo } from "react";
import styles from "./Courses.module.css";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";

const PAGE_SIZE = 10;

export default function CoursesList({ initialCourses }: { initialCourses: any[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedBody, setSelectedBody] = useState("All Awarding Bodies");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const categories = useMemo(() => {
    const cats = new Set(initialCourses.map(c => c.category));
    return ["All Categories", ...Array.from(cats)].sort();
  }, [initialCourses]);

  const bodies = useMemo(() => {
    const bds = new Set(initialCourses.map(c => c.awardingBody));
    return ["All Awarding Bodies", ...Array.from(bds)].sort();
  }, [initialCourses]);

  const filteredCourses = useMemo(() => {
    setVisibleCount(PAGE_SIZE);
    return initialCourses.filter(course => {
      const matchesSearch = course.title?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All Categories" || course.category === selectedCategory;
      const matchesBody = selectedBody === "All Awarding Bodies" || course.awardingBody === selectedBody;
      return matchesSearch && matchesCategory && matchesBody;
    });
  }, [initialCourses, searchTerm, selectedCategory, selectedBody]);

  const visibleCourses = filteredCourses.slice(0, visibleCount);
  const hasMore = visibleCount < filteredCourses.length;

  return (
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

        {/* Results count */}
        <p style={{ color: '#666', marginBottom: '1rem', fontSize: '0.9rem' }}>
          Showing {visibleCourses.length} of {filteredCourses.length} courses
        </p>

        {/* Courses Grid */}
        <div className={styles.coursesGrid}>
          {visibleCourses.length > 0 ? (
            visibleCourses.map((course) => (
              <div key={course.id} className={styles.courseCard}>
                <div className={styles.imageWrapper}>
                  {course.image ? (
                    <Image 
                      src={typeof course.image === 'string' ? course.image : (urlForImage(course.image)?.url() || "")} 
                      alt={course.title} 
                      fill 
                      className={styles.cardImage}
                    />
                  ) : (
                    <div className={styles.placeholderImage}>No Image</div>
                  )}
                  <span className={styles.levelBadge}>{course.level}</span>
                  <span className={styles.categoryBadge}>{course.category}</span>
                </div>
                <div className={styles.content}>
                  <span className={styles.awardingBody}>{course.awardingBody}</span>
                  <h3 className={styles.title}>{course.title}</h3>
                  <Link href={`/courses/${course.id}`} className={styles.btn}>
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

        {/* See More Button */}
        {hasMore && (
          <button
            className={styles.seeMoreBtn}
            onClick={() => setVisibleCount(prev => prev + PAGE_SIZE)}
          >
            See More ({filteredCourses.length - visibleCount} remaining)
          </button>
        )}
      </div>
    </section>
  );
}
