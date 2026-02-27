import styles from "./Welcome.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Welcome({ data }: { data?: any }) {
  const title = data?.welcomeTitle || "Experience More Than Just Lectures";
  const content = data?.welcomeContent || "At British Graduates School (BGS), we believe in a holistic educational experience. Beyond the classroom, our students engage in a vibrant community that fosters growth, leadership, and lifelong connections.\n\nFrom interactive webinars to global networking events, life at BGS is designed to prepare you for the real world while creating memories that last a lifetime.";
  const image = data?.welcomeImage || "/Gemini_Generated_Image_91k04k91k04k91k0.png";

  return (
    <section className={`section ${styles.welcomeContainer}`} style={{ background: '#f8f9fa' }}>
      <div className="container">
        <div className={styles.welcome}>
          <div className={styles.content}>
            <span className="text-muted uppercase font-bold tracking-widest text-sm" style={{ letterSpacing: '2px', display: 'block', marginBottom: '1rem' }}>LIFE AT BGS</span>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.description}>
              {content.split('\n').map((para: string, i: number) => (
                para ? <p key={i}>{para}</p> : null
              ))}
            </div>
            
            <div className={styles.stats}>
              {(data?.welcomeStats || [
                { label: "PGD Holders", value: "2500+" },
                { label: "Global Partners", value: "15+" }
              ]).map((stat: any, idx: number) => (
                <div key={idx} className={styles.statItem}>
                  <span className={styles.statNumber}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
            
            <Link href="/life" className="btn btn-outline mt-2">Explore Campus Life</Link>
          </div>
          
          <div className={styles.imageBox}>
            <Image 
              src={image} 
              alt={title} 
              width={600} 
              height={400} 
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
