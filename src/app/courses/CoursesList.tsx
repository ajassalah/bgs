"use client";

import { useEffect, useMemo, useState } from "react";
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    const body = params.get("body");
    const search = params.get("search");

    if (category) setSelectedCategory(category);
    if (body) setSelectedBody(body);
    if (search) setSearchTerm(search);
  }, []);

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
      
      {/* Blue Search Section */}
      <div className={styles.searchSection}>
        <div className="container">
          <div className={styles.searchBarContainer}>
            <h2 className={styles.searchTitle}>Find a Course</h2>
            <div className={styles.searchRow}>
              <div className={styles.searchWrapper}>
                <input 
                  type="text" 
                  placeholder="Search for a program..." 
                  className={styles.searchInput}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg className={styles.searchIcon} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>
              <button className={styles.filterBtn} onClick={() => setIsSidebarOpen(true)}>
                Filters
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Sidebar */}
      <div className={`${styles.sidebarOverlay} ${isSidebarOpen ? styles.open : ''}`} onClick={() => setIsSidebarOpen(false)}></div>
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
        <div className={styles.sidebarHeader}>
          <h3 className={styles.sidebarTitle}>All filters</h3>
          <button className={styles.closeBtn} onClick={() => setIsSidebarOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        <div className={styles.filterGroup}>
          <h4 className={styles.groupTitle}>Course</h4>
          <select 
            className={styles.sidebarSelect}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className={styles.filterGroup}>
          <h4 className={styles.groupTitle}>Awarding Bodies</h4>
          <select 
            className={styles.sidebarSelect}
            value={selectedBody}
            onChange={(e) => setSelectedBody(e.target.value)}
          >
            {bodies.map(body => (
              <option key={body} value={body}>{body}</option>
            ))}
          </select>
        </div>

        <button 
          className={styles.clearFilters}
          onClick={() => {
            setSelectedCategory("All Categories");
            setSelectedBody("All Awarding Bodies");
            setSearchTerm("");
          }}
        >
          Clear filters
        </button>
      </div>

      <div className={styles.coursesContainer}>
        <div className="container">
          {/* Results count */}
          <p style={{ color: '#666', marginBottom: '2rem', fontSize: '1rem', fontWeight: '500' }}>
            Showing {visibleCourses.length} of {filteredCourses.length} programs
          </p>

          {/* Courses Grid */}
          <div className={styles.coursesGrid}>
            {visibleCourses.length > 0 ? (
              visibleCourses.map((course) => (
                <div key={course.id} className={styles.courseCard}>
                  <div className={styles.imageWrapper}>
                    {course.image || course.heroImage ? (
                      <Image 
                        src={
                          typeof course.image === 'string' 
                            ? course.image 
                            : (urlForImage(course.image || course.heroImage)?.url() || "/course inside hero section .jpg")
                        } 
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
                  style={{ color: '#bc0000', fontSize: '1rem', marginTop: '1rem', cursor: 'pointer', background: 'none', border: 'none', textDecoration: 'underline' }}
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
      </div>
    </section>
  );
}
