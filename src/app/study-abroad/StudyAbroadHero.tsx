"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./StudyAbroad.module.css";

const heroImages = [
  "/Study abroad Hero section image.jpg", // Original image
  "/london-skyline-at-dusk-related.jpg", // UK - London
  "/california.jpg", // USA - California
  "/Melbourne.jpg", // Australia - Melbourne
  "/Vancouver.jpeg", // Canada - Vancouver
  "/Berlin.jpg", // Germany - Berlin
  "/Delhi.jpg", // India - Delhi
];

export default function StudyAbroadHero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 15000); // 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      {heroImages.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Study Abroad Location ${index}`}
          fill
          priority={index === 0}
          className={`${styles.heroImage} ${index === currentImageIndex ? styles.activeImage : styles.inactiveImage}`}
        />
      ))}
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Discover where studying abroad can take you</h1>
        <p className={styles.heroSubtitle}>
          Build your future at leading universities and education providers in the UK, USA, Canada, Germany, Australia or India.
        </p>
        <div style={{ marginTop: '3rem' }}>
           <Link href="#locations-detail" className={styles.heroBtn}>Find a location →</Link>
        </div>
      </div>
    </section>
  );
}
