import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "../legal.module.css";

export default function PrivacyPolicy() {
  return (
    <main>
      <Navbar />
      
      <section className={styles.hero}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className={styles.heroVideo}
        >
          <source src="https://kensleygraduateschool.com/wp-content/uploads/2025/03/4508070-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <h1 className={styles.heroTitle}>Privacy Policy</h1>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <p>Effective Date: 1st May 2025</p>
          <p>
            At the British Graduates School (BGS), we are fully committed to safeguarding the privacy and personal data of all users, visitors, and students who interact with our website and services. This Privacy Policy outlines how we collect, use, and protect your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and relevant data protection legislation.
          </p>
          <p>By accessing and using our website, you accept and consent to the practices described in this policy.</p>

          <h3>1. Information We Collect</h3>
          <p>We may collect and process the following types of information:</p>
          <ul>
            <li>Your name and job title</li>
            <li>Contact details, including email address and phone number</li>
            <li>Demographic data such as address, postcode, and preferences</li>
            <li>Information about your educational background and interests</li>
            <li>Technical data, including IP address, browser type, and operating system</li>
            <li>Any other information you provide through forms, surveys, or enquiries</li>
          </ul>

          <h3>2. How We Use Your Data</h3>
          <p>The data we collect helps us better understand your needs and tailor our services to you. Specifically, we use your personal information for:</p>
          <ul>
            <li>Internal record-keeping and compliance with regulatory requirements</li>
            <li>Communicating with you regarding course updates, enrolment, or administrative matters</li>
            <li>Improving our educational products, services, and student experience</li>
            <li>Sending promotional material, if you have opted in to receive such information</li>
            <li>Conducting occasional market research to understand your preferences and satisfaction</li>
          </ul>
          <p>You may withdraw consent for marketing communications at any time by clicking the “unsubscribe” link in our emails or contacting us directly.</p>

          <h3>3. Data Security Measures</h3>
          <p>We are committed to ensuring that your personal data is secure. We have implemented suitable physical, electronic, and managerial procedures to safeguard the information we collect online. These include:</p>
          <ul>
            <li>Secure server infrastructure</li>
            <li>Encrypted communications (SSL/TLS protocols)</li>
            <li>Access control and authentication measures</li>
            <li>Staff training and compliance procedures</li>
          </ul>
          <p>Despite these efforts, no data transmission over the internet is completely secure. As such, we cannot guarantee the absolute security of your data, but we will take all reasonable precautions.</p>

          <h3>4. Use of Cookies</h3>
          <p>Cookies are small text files stored on your computer to collect standard internet log information and visitor behaviour data.</p>
          <p>We use two types of first-party cookies:</p>
          <ol>
            <li><strong>Session Cookies</strong> – These are temporary and expire after your session ends. They help us remember your inputs while navigating our site.</li>
            <li><strong>Persistent Cookies</strong> – These remain on your device after your session and help us track usage patterns and improve your browsing experience.</li>
          </ol>
          <p>Our cookies do not store personal or confidential information. You can manage or disable cookies through your browser settings. However, disabling cookies may limit certain functionalities of our website.</p>

          <h3>5. Links to Third-Party Sites</h3>
          <p>Our website may contain links to external sites that are not operated by BGS. We are not responsible for the privacy practices or content of these websites. We advise you to read the privacy policies of any third-party sites you visit.</p>

          <h3>6. Controlling Your Personal Data</h3>
          <p>You may choose to restrict the use of your personal data in the following ways:</p>
          <ul>
            <li>Indicate your preferences when filling out forms on our site</li>
            <li>Unsubscribe from marketing communications at any time</li>
          </ul>
          <p>We do not sell, lease, or distribute your personal data to third parties without your consent unless required by law. If you opt in, we may share relevant promotional content from our trusted partners.</p>

          <h3>7. Your Rights Under UK GDPR</h3>
          <p>Under the UK General Data Protection Regulation, you have the following rights:</p>
          <ul>
            <li><strong>Right to access</strong> – You may request a copy of the data we hold about you</li>
            <li><strong>Right to rectification</strong> – You may ask us to correct inaccurate or incomplete data</li>
            <li><strong>Right to erasure</strong> – You may request that we delete your personal data under certain conditions</li>
            <li><strong>Right to restrict processing</strong> – You may ask us to limit how we use your data</li>
            <li><strong>Right to data portability</strong> – You can request your data in a machine-readable format</li>
            <li><strong>Right to object</strong> – You can object to us processing your data for direct marketing or other purposes</li>
          </ul>

          <h3>8. Data Retention</h3>
          <p>We will retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, including legal, regulatory, tax, and reporting obligations. Once data is no longer required, it will be securely deleted or anonymised.</p>

          <h3>9. Data Transfers Outside the UK</h3>
          <p>Due to the international nature of our operations, your data may be transferred outside the UK or EEA. Where such transfers occur, we will ensure that appropriate safeguards are in place, such as:</p>
          <ul>
            <li>Standard Contractual Clauses approved by the European Commission</li>
            <li>Data processing agreements with our partners</li>
            <li>Hosting within GDPR-compliant regions</li>
          </ul>

          <h3>10. Children’s Privacy</h3>
          <p>Our website and services are not intended for individuals under the age of 16. We do not knowingly collect personal data from minors. If we learn that we have collected data from a child under 16 without verified parental consent, we will delete that information.</p>

          <h3>11. Changes to This Policy</h3>
          <p>We may revise this Privacy Policy at any time by updating this page. You should check this page periodically to ensure you are happy with any changes. Your continued use of our website indicates acceptance of any updates.</p>

          <h3>12. Contact Us</h3>
          <p>If you have questions or concerns about this Privacy Policy, or if you would like to exercise your data protection rights, please contact:</p>
          <p>
            British Graduates School of Business<br />
            2nd Floor, 1st, 4 De Montfort St<br />
            Leicester, LE1 7GA<br />
            United Kingdom<br />
            Email: info@britishgraduateschool.co.uk<br />
            Phone: +44 7566 756499
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
