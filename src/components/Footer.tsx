import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <Image src="/bgs-logo-cropped.webp" alt="BGS Logo" width={120} height={40} style={{ height: '40px', width: 'auto' }} />
            </Link>
            <p className={styles.description}>
              BGS believe in Ensuring Inclusive, Equitable and Quality Education and the Promotion of Lifelong Learning Opportunities for all.
            </p>
             <div className={styles.socials} style={{ marginTop: '1rem' } }>
            <Link href="https://www.facebook.com/britishgraduateschooluk/?_rdc=1&_rdr#" target="_blank" className={styles.socialLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </Link>
            <Link href="https://uk.linkedin.com/company/britishgraduateschool" target="_blank" className={styles.socialLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </Link>
            <Link href="https://www.instagram.com/britishgraduateschool?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className={styles.socialLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </Link>
            <Link href="#" target="_blank" className={styles.socialLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
            </Link>
          </div>
            </div>
          
          <div className={styles.linksGrid}>
            <div className={styles.linkColumn}>
              <h3>Quick Links</h3>
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/courses">All Courses</Link>
              <Link href="/life">Life at BGS</Link>
            </div>
            
            <div className={styles.linkColumn}>
              <h3>Resources</h3>
              <Link href="/blog">Our Blog</Link>
              <Link href="/terms">Terms and Conditions</Link>
              <Link href="/privacy">Privacy Policy</Link>
            </div>
            
            <div className={styles.linkColumn}>
              <h3>Contact Us</h3>
              <p className={styles.contactItem}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                +44 756 675 6499
              </p>
              <p className={styles.contactItem}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                info@britishgraduateschool.co.uk
              </p>
              <p className={styles.contactItem}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Leicester, United Kingdom
              </p>
            </div>
          </div>
          
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Designed by <Link href="https://levelweb.co.uk" target="_blank">levelweb.co.uk</Link>. All Rights Reserved.</p>
         
        </div>
      </div>
    </footer>
  );
}
