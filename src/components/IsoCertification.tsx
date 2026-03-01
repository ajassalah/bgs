import styles from "./Certification.module.css";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

export default function IsoCertification({ data }: { data?: any }) {
  const rawBlock = (data?.certificationBlocks && data.certificationBlocks[1]) ? data.certificationBlocks[1] : null;
  
  const block = {
    logo: "/cghe_logo.png",
    text: rawBlock?.text || "CQHE operates as a global accrediting authority, emphasizing innovation in education delivery and the maintenance of international academic standards.",
    mainImage: "/cqhe homea.jpeg",
    buttonText: rawBlock?.buttonText || "Learn More",
    buttonLink: rawBlock?.buttonLink || "/about"
  };

  // Resolve Images
  if (rawBlock?.logo) {
    if (typeof rawBlock.logo === 'string') block.logo = rawBlock.logo;
    else if (rawBlock.logo.asset) block.logo = urlForImage(rawBlock.logo)?.url() || block.logo;
  }
  if (rawBlock?.mainImage) {
    if (typeof rawBlock.mainImage === 'string') block.mainImage = rawBlock.mainImage;
    else if (rawBlock.mainImage.asset) block.mainImage = urlForImage(rawBlock.mainImage)?.url() || block.mainImage;
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`${styles.grid} ${styles.reverse} ${styles.asicGrid}`}>
          <div className={styles.content}>
            <div className={styles.logoItem}>
              <Image 
                src={block.logo || "/cghe_logo.png"} 
                alt="CGHE Logo" 
                width={120} 
                height={60} 
                className={styles.logoImage}
              />
            </div>
            <p className={styles.text}>
              {block.text || "CQHE operates as a global accrediting authority..."}
            </p>
            <Link href={block.buttonLink || "/about"} className={styles.btnRed}>{block.buttonText || "Learn More"}</Link>
          </div>
          <div className={`${styles.imageBox} ${styles.asicImageBox}`}>
            <Image 
              src={block.mainImage || "/cqhe homea.jpeg"} 
              alt="Graduation Flowers ISO" 
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
