import styles from "./ProgramCategories.module.css";
import Link from "next/link";
import Image from "next/image";

export default function ProgramCategories() {
  const categories = [
    { 
      title: "FOUNDATION", 
      image: "/pexels-jibarofoto-18255287.jpg" 
    },
    { 
      title: "UNDERGRADUATE", 
      image: "/pexels-karola-g-8106690.jpg" 
    },
    { 
      title: "POSTGRADUATE DIPLOMA", 
      image: "/pexels-vantha-thang-1224068-2361316.jpg" 
    },
    { 
      title: "MASTERS", 
      image: "/pexels-vantha-thang-1224068-2332083.jpg" 
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {categories.map((cat, idx) => (
            <Link href={`/courses?category=${cat.title.toLowerCase()}`} key={idx} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image 
                  src={cat.image} 
                  alt={cat.title} 
                  fill 
                  className={styles.image}
                />
              </div>
              <div className={styles.overlay}>
                <h3 className={styles.title}>{cat.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
