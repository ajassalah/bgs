import styles from "./Certification.module.css";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

export default function OthmCertification({ data }: { data?: any }) {
  const rawBlock = (data?.certificationBlocks && data.certificationBlocks[3]) ? data.certificationBlocks[3] : null;

  const block = {
    logo: "/nqual logo.jpeg",
    text: rawBlock?.text || "NQUAL (National Qualification Organisation for Applied Learning) is an emerging UK-based awarding body committed to applied and technical education.",
    mainImage: "/Gemini_Generated_Image_hbcxkqhbcxkqhbcx.png",
    buttonText: rawBlock?.buttonText || "Learn More",
    buttonLink: rawBlock?.buttonLink || "/othm"
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
                src={block.logo || "/nqual logo.jpeg"} 
                alt="NQUAL Logo" 
                width={120} 
                height={60} 
                className={styles.logoImage}
              />
            </div>
            <p className={styles.text}>
              {block.text || "NQUAL (National Qualification Organisation for Applied Learning) is an emerging UK-based awarding body..."}
            </p>
            <Link href={block.buttonLink || "/othm"} className={styles.btnRed}>{block.buttonText || "Learn More"}</Link>
          </div>
          <div className={`${styles.imageBox} ${styles.asicImageBox}`}>
            <Image 
              src={block.mainImage || "/Gemini_Generated_Image_hbcxkqhbcxkqhbcx.png"} 
              alt="BGS Graduation Ceremony" 
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
