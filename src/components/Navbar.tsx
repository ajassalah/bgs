"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={`${styles.wrapper} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.topLinks}>
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
          </div>
          <div className={styles.topLinks}>
            <Link href="https://studentportal.britishgraduateschool.co.uk/" target="_blank">Student Portal</Link>
            <div className={styles.socials}>
              <Link href="https://www.facebook.com/britishgraduateschooluk/?_rdc=1&_rdr#" target="_blank" className={styles.socialLink}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </Link>
              <Link href="https://uk.linkedin.com/company/britishgraduateschool" target="_blank" className={styles.socialLink}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </Link>
              <Link href="https://www.instagram.com/britishgraduateschool?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className={styles.socialLink}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <Image src="/bgs-logo-cropped.webp" alt="BGS Logo" width={180} height={60} style={{ height: '60px', width: 'auto' }} />
          </Link>
          <div className={styles.navLinks}>
            <Link href="/courses" className={styles.navLink}>Courses</Link>
            <Link href="/study-abroad" className={styles.navLink}>Study Abroad</Link>
            <Link href="/othm" className={styles.navLink}>OTHM Sri Lanka</Link>
            <Link href="/qualifi" className={styles.navLink}>Qualifi Endorsement</Link>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
            <Link href="/apply" className={styles.cta}>Inquire Now</Link>
          </div>

          {/* Hamburger Button */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ""}`}></span>
            <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ""}`}></span>
            <span className={`${styles.bar} ${menuOpen ? styles.bar3Open : ""}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className={styles.mobileOverlay} onClick={closeMenu}></div>
      )}

      {/* Mobile Menu Drawer */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <button className={styles.closeBtn} onClick={closeMenu}>✕</button>
        <Link href="/" className={styles.mobileLink} onClick={closeMenu}>Home</Link>
        <Link href="/blog" className={styles.mobileLink} onClick={closeMenu}>Blog</Link>
        <Link href="/about" className={styles.mobileLink} onClick={closeMenu}>About</Link>
        <Link href="/courses" className={styles.mobileLink} onClick={closeMenu}>Courses</Link>
        <Link href="/study-abroad" className={styles.mobileLink} onClick={closeMenu}>Study Abroad</Link>
        <Link href="/othm" className={styles.mobileLink} onClick={closeMenu}>OTHM Sri Lanka</Link>
        <Link href="/qualifi" className={styles.mobileLink} onClick={closeMenu}>Qualifi Endorsement</Link>
        <Link href="/contact" className={styles.mobileLink} onClick={closeMenu}>Contact</Link>
        <Link href="/apply" className={styles.mobileCta} onClick={closeMenu}>Inquire Now</Link>
      </div>
    </div>
  );
}
