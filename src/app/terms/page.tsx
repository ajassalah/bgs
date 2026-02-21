import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "../legal.module.css";

export default function TermsAndConditions() {
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
          <h1 className={styles.heroTitle}>Terms and Conditions</h1>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <h2>British Graduates School (BGS) – Terms and Conditions</h2>
          <p>
            Welcome to the official website of the British Graduates School (BGS). Your access, browsing, and use of this website are governed by the following terms and conditions of use, together with all applicable laws and our Privacy Policy. By accessing and navigating this website, you expressly accept and agree to be bound by these terms and conditions, without limitation or qualification. Any other agreements between you and BGS in respect of this website are hereby superseded and rendered null and void.
          </p>
          <p>
            Please be advised that continued use of this website constitutes your agreement to comply with and be legally bound by these terms and conditions. These terms, in conjunction with our Privacy Policy, form the basis of the relationship between you (the user) and the British Graduate School in relation to your use of this website and the services we provide through it.
          </p>
          <p>
            For the purposes of these Terms and Conditions, the term “British Graduates School” or “BGS” or “us” or “we” refers to the owner and operator of the website. The term “you” refers to the user, browser, student, prospective student, or any visitor engaging with our website.
          </p>

          <h3>1. Acceptance of Terms</h3>
          <p>
            BGS grants you a limited, non-exclusive, non-transferable licence to access and use course content, materials, and digital resources solely for your personal and academic development. You must not copy, modify, reverse engineer, disassemble, or otherwise attempt to derive source code from any part of the Website or associated software.
          </p>
          <p>
            You are prohibited from selling, sublicensing, assigning, pledging, or transferring any rights to the Website or its content. You agree not to access BGS services via unauthorised methods or interfaces not explicitly provided by us.
          </p>

          <h3>2. Your Privacy</h3>
          <p>
            At the British Graduates School, we take your privacy with utmost seriousness. Our practices regarding the collection, processing, and usage of personal data are governed by our Privacy Policy, which forms an integral part of these Terms and Conditions.
          </p>

          <h3>3. User Account, Password, and Security</h3>
          <p>
            To enrol in our programmes or access certain areas of the Website, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials, including your username and password. You accept responsibility for all activities conducted under your account.
          </p>

          <h3>4. Proprietary Rights and Intellectual Property</h3>
          <p>
            All content and materials made available on the Website, including but not limited to text, graphics, video, documents, icons, and software, are the intellectual property of BGS or its licensors and are protected under UK and international intellectual property laws.
          </p>

          <h3>6. Amendments and Modifications</h3>
          <p>
            BGS reserves the right to revise or amend these Terms and Conditions at any time without prior notice. Any changes will be published on this page, and your continued use of the Website following such changes constitutes acceptance of the revised terms.
          </p>

          <h3>7. Limitation of Liability</h3>
          <p>
            Whilst every effort is made to ensure that the information and resources provided on the Website are accurate and up-to-date, BGS makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, or availability of the content.
          </p>

          <h3>8. Termination of Use</h3>
          <p>
            BGS reserves the right, at its sole discretion, to terminate your access to the Website or any part thereof at any time and without notice, particularly in the event of a breach of these Terms and Conditions.
          </p>

          <h3>9. Governing Law and Jurisdiction</h3>
          <p>
            These Terms and Conditions shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>

          <h3>10. Use of the Online Platform</h3>
          <p>
            By enrolling at the British Graduates School (BGS), you are granted a limited, non-exclusive, and non-transferable licence to access and use our online platform and associated educational resources strictly for your own personal, academic, and non-commercial use.
          </p>

          <h3>11. Course Access and Duration</h3>
          <p>
            The standard duration of access is five (5) years from the date of enrolment. During this time, you are expected to complete your studies, assessments, and any capstone projects or dissertations as applicable.
          </p>

          <h3>12. Refund and Cancellation Policy</h3>
          <p>
            Refunds may be requested within fourteen (14) calendar days from the date of course access activation, provided that you have not extensively accessed or downloaded significant course content.
          </p>

          <h3>13. Tuition Fees and Payments</h3>
          <p>
            All tuition fees must be paid in full prior to course commencement or in accordance with an officially approved payment plan.
          </p>

          <h3>16. Academic Integrity</h3>
          <p>
            BGS upholds the highest standards of academic honesty. All students are expected to complete assessments and coursework with integrity and originality.
          </p>

          <h3>25. Certification and University Progression</h3>
          <p>
            Certificates and transcripts are issued in collaboration with the relevant awarding organisation and are subject to their verification timelines, typically ranging from 4 to 12 weeks.
          </p>

          <p style={{ marginTop: '3rem', fontWeight: 'bold' }}>
            BGS believe in Ensuring Inclusive, Equitable and Quality Education and the Promotion of Lifelong Learning Opportunities for all.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
