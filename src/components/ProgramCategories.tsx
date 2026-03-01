import styles from "./ProgramCategories.module.css";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

export default function ProgramCategories({ data }: { data?: any }) {
  const categories = (data?.programCategories && data.programCategories.length > 0) ? data.programCategories : [
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
          {categories.map((cat: any, idx: number) => {
            const categoryLink = cat.link || `/courses?category=${encodeURIComponent(cat.title || "")}`;
            
            // Try Different Methods to resolve the image URL
            let imageSrc = "";
            
            if (cat.imageUrl && typeof cat.imageUrl === 'string' && cat.imageUrl.startsWith('http')) {
              imageSrc = cat.imageUrl;
            } else if (cat.image) {
              if (typeof cat.image === 'string' && (cat.image.startsWith('http') || cat.image.startsWith('/'))) {
                imageSrc = cat.image;
              } else if (cat.image.asset) {
                // If we have an asset object, try to build the URL
                const sanityUrl = urlForImage(cat.image)?.url();
                if (sanityUrl) imageSrc = sanityUrl;
              }
            }

            // Absolute Fallback: If no valid image from Sanity, use professional placeholders
            if (!imageSrc || imageSrc.length < 5 || imageSrc.includes('undefined')) {
              const gallery = [
                "/cat-foundation.png",
                "/cat-undergrad.png",
                "/cat-postgrad.png",
                "/cat-masters.png"
              ];
              
              const title = (cat.title || "").toLowerCase();
              if (title.includes('foundation')) imageSrc = gallery[0];
              else if (title.includes('undergraduate')) imageSrc = gallery[1];
              else if (title.includes('postgraduate') || title.includes('diploma')) imageSrc = gallery[2];
              else if (title.includes('master')) imageSrc = gallery[3];
              else imageSrc = gallery[idx % 4]; // Rotate fallback if title doesn't match
            }

            return (
              <Link href={categoryLink} key={`${cat.title}-${idx}`} className={styles.card}>
                <div className={styles.imageContainer} style={{ position: 'relative', overflow: 'hidden', background: '#00234a' }}>
                  <Image 
                    src={imageSrc} 
                    alt={cat.title || "Program Category"} 
                    fill 
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    priority={idx < 4}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.overlay}>
                  <h3 className={styles.title}>{cat.title}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
