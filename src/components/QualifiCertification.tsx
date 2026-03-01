import styles from "./Certification.module.css";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

export default function QualifiCertification({ data }: { data?: any }) {
  const rawBlock = (data?.certificationBlocks && data.certificationBlocks[0]) ? data.certificationBlocks[0] : null;
  
  const block = {
    logo: "/qualifi-endorsed-729x800.png",
    text: rawBlock?.text || "Qualifi offers a wide range of vocational and academic qualifications from Level 3 to Level 8 and maintains articulation agreements with numerous UK and international universities.",
    mainImage: "/Student Graduation ASIC.png",
    buttonText: rawBlock?.buttonText || "Learn More",
    buttonLink: rawBlock?.buttonLink || "/qualifi"
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
    <section className={`${styles.section} ${styles.asicBg}`}>
      <div className="container">
        <div className={`${styles.grid} ${styles.asicGrid}`}>
          <div className={styles.content}>
            <div className={styles.logoItem}>
              <Image 
                src={block.logo || "/qualifi-endorsed-729x800.png"} 
                alt="Qualifi Endorsement" 
                width={150} 
                height={100} 
                className={styles.logoImage}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p className={styles.text}>
              {block.text || "Qualifi offers a wide range of vocational and academic qualifications..."}
            </p>
            <Link href={block.buttonLink || "/qualifi"} className={styles.btnRed}>{block.buttonText || "Learn More"}</Link>
          </div>
          <div className={`${styles.imageBox} ${styles.asicImageBox}`}>
            <Image 
              src={block.mainImage || "/Student Graduation ASIC.png"} 
              alt="BGS Graduation" 
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
