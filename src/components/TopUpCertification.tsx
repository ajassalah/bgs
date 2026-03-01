import styles from "./Certification.module.css";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

export default function TopUpCertification({ data }: { data?: any }) {
  const rawBlock = (data?.certificationBlocks && data.certificationBlocks[2]) ? data.certificationBlocks[2] : null;
  
  const block = {
    text: rawBlock?.text || "BGS programmes open pathways to globally recognised Bachelor's and Master's top-up degrees, available both locally and internationally.",
    mainImage: "/programes home page.jpg",
    buttonText: rawBlock?.buttonText || "Find Courses",
    buttonLink: rawBlock?.buttonLink || "/courses"
  };

  // Resolve Images
  if (rawBlock?.mainImage) {
    if (typeof rawBlock.mainImage === 'string') block.mainImage = rawBlock.mainImage;
    else if (rawBlock.mainImage.asset) block.mainImage = urlForImage(rawBlock.mainImage)?.url() || block.mainImage;
  }

  return (
    <section className={`${styles.section} ${styles.asicBg}`} style={{ backgroundColor: '#00234a' }}>
      <div className="container">
        <div className={`${styles.grid} ${styles.asicGrid}`}>
          <div className={styles.content}>
            <p className={styles.text} style={{ fontSize: '1.4rem', fontWeight: 600 }}>
              {block.text || "BGS programmes open pathways to globally recognised Bachelor's and Master's top-up degrees..."}
            </p>
            <Link href={block.buttonLink || "/courses"} className={styles.btnRed}>{block.buttonText || "Find Courses"}</Link>
          </div>
          <div className={`${styles.imageBox} ${styles.asicImageBox}`}>
            <Image 
              src={block.mainImage || "/programes home page.jpg"} 
              alt="BGS Top-Up Programmes" 
              width={600} 
              height={400} 
              className={styles.gradImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
