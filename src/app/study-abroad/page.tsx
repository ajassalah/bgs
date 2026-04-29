import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./StudyAbroad.module.css";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { Metadata } from "next";
import Link from "next/link";
import StudyAbroadHero from "./StudyAbroadHero";

export const metadata: Metadata = {
  title: "Study Abroad | Global Pathways & Global Transfers",
  description: "Explore study abroad opportunities with British Graduate School. Transfer to top universities in the UK, USA, and worldwide through our recognized pathways.",
};

const locations = [
  {
    id: "uk",
    country: "United Kingdom (UK)",
    description: "We partner with top universities and institutions across the UK to help students achieve their education goals. Choose from over 1000+ courses or degrees.",
    btnText: "Study in United Kingdom",
    cities: [
      { name: "London", desc: "Explore studying abroad in London and join over 300,000 international students in a city that celebrates every culture and background.", img: "/london-skyline-at-dusk-related.jpg" },
      { name: "Scotland", desc: "Immerse yourself in student life in one of Scotland's most vibrant university cities, whether the coastal delights of Dundee or the historic streets of Edinburgh.", img: "/Scotland.jpg" },
      { name: "England", desc: "England blends academic excellence with centuries of history and culture plus a warm, inclusive student experience.", img: "/England.jpg" },
      { name: "Wales", desc: "A world-class study destination welcoming over 25,000 international students every year, discover why Wales is a great location to live and learn.", img: "/wales.jpg" },
    ]
  },
  {
    id: "usa",
    country: "United States (USA)",
    description: "Step into a world of possibilities and study abroad in the United States, where you can turn your career ambitions into impact.",
    btnText: "Study in United States",
    cities: [
      { name: "California", desc: "Unlock your potential by choosing to study in California, globally recognised as a hub for innovation, creativity and progress.", img: "/california.jpg" },
      { name: "Kentucky", desc: "Build towards your goals in Kentucky, a uniquely rewarding place to study with its mix of big-city energy and small-town friendliness.", img: "/kentucky.jpg" },
      { name: "New York", desc: "Learn, connect and grow in New York and transform your academic journey into real-world success.", img: "/newyork.jpg", large: true },
    ]
  },
  {
    id: "australia",
    country: "Australia",
    description: "From its welcoming culture to beautiful landscapes and vibrant cities, discover why Australia could be the right choice for you.",
    btnText: "Study in Australia",
    cities: [
      { name: "Melbourne", desc: "World-class education meets vibrant city life in Melbourne, home to a thriving arts scene, spacious green parks plus iconic sport and entertainment.", img: "/Melbourne.jpg" },
      { name: "Sydney", desc: "With its natural beauty, iconic attractions and rich cultural heritage, Sydney provides a unique backdrop for academic and personal growth.", img: "/Sydney.jpg" },
      { name: "Perth", desc: "A safe, sun-soaked city with stunning beaches and a relaxed lifestyle, Perth offers the perfect environment to study, work and explore.", img: "/pertish.jpg", large: true },
    ]
  },
  {
    id: "canada",
    country: "Canada",
    description: "With world-renowned universities, diverse cultural experiences and awe-inspiring landscapes, Canada offers an unparalleled setting for you to thrive academically and socially.",
    btnText: "Study in Canada",
    cities: [
      { name: "Vancouver", desc: "From diverse neighbourhoods to scenic parks and cultural hotspots, studying in Vancouver offers an irresistible blend of dynamic city living and outdoor adventure.", img: "/Vancouver.jpeg" },
      { name: "Halifax", desc: "One of Canada's most picturesque destinations, study by the sea in a compact, coastal city known for innovation, opportunity and a high quality of life.", img: "/Halifaxs.jpg" },
      { name: "Toronto", desc: "Canada's largest and most diverse city, Toronto offers an inspiring environment for students around the world to live, learn and succeed.", img: "/toronto.jpg", large: true },
    ]
  },
  {
    id: "germany",
    country: "Germany",
    description: "Start your international education journey in one of Europe's most student-friendly destinations.",
    btnText: "Study in Germany",
    cities: [
      { name: "Berlin", desc: "Immerse yourself in student life in Germany's bustling capital, whether exploring Berlin's innovative start-up scene or its thriving creative and cultural hubs.", img: "/Berlin.jpg", large: true },
    ]
  },
  {
    id: "india",
    country: "India",
    description: "With a rich cultural heritage and one of the world's most diverse populations, discover the benefits of studying abroad in India.",
    btnText: "Study in India",
    cities: [
      { name: "Delhi", desc: "Enjoy an immersive student experience in one of the world's most dynamic cities, where 33 million residents create a vibrant blend of history, modernity and culture.", img: "/Delhi.jpg", large: true },
    ]
  },
  {
    id: "new-zealand",
    country: "New Zealand",
    description: "Experience world-class education in a country known for its stunning natural beauty and high quality of life.",
    btnText: "Study in New Zealand",
    cities: [
      { name: "Auckland", desc: "Study in New Zealand's largest city, a hub for innovation and cultural diversity.", img: "/Newzeland.png", large: true },
    ]
  }
];

export default function StudyAbroadPage() {
  return (
    <main style={{ overflowX: 'hidden' }}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Study Abroad Pathways",
          "description": "Information about international university transfer programs and study abroad opportunities at BGS.",
          "breadcrumb": "Home > Study Abroad"
        }}
      />
      <Navbar />
      
      <StudyAbroadHero />      {/* Your Getaway to Global Education Excellence Section */}
      <section className={styles.introSection}>
        <div className="container">
          <div className={styles.introBox}>
            <h2 className={styles.mainTitle}>Your Getaway to Global Education Excellence</h2>
            <p className={styles.description}>
              At British Graduate School, we offer Study Abroad Opportunities that broaden your educational horizons. Through our partnerships with top universities and colleges worldwide, we provide seamless pathways to renowned institutions. Our expert guidance ensures that you’re well-prepared for a smooth transition and valuable international exposure, enriching your academic and cultural experiences.
            </p>
            <p className={styles.description}>
              With Accreditations and Partnerships from leading educational bodies, our programs maintain the highest academic standards. You can trust that your qualifications, earned through our globally recognized programs, will be respected by employers around the world.
            </p>
          </div>

          <div className={styles.destinationGrid}>
            <div className={styles.destinationCard}>
              <div className={styles.destImageWrapper}>
                <Image src="/study in usa.png" alt="Study in the USA" fill className={styles.img} />
              </div>
              <div className={styles.destContent}>
                <h3>Study in the USA</h3>
                <p>Explore world-class opportunities at leading American universities through our exclusive pathways.</p>
                <a href="https://register.findmycareer.org.uk/apply" target="_blank" rel="noopener noreferrer" className={styles.btnApply}>Apply Now</a>
              </div>
            </div>

            <div className={styles.destinationCard}>
              <div className={styles.destImageWrapper}>
                <Image src="/study in uk.jpg" alt="Study in the UK" fill className={styles.img} />
              </div>
              <div className={styles.destContent}>
                <h3>Study in the UK</h3>
                <p>Access prestigious British institutions including Southampton Solent University and University of Wolverhampton.</p>
                <a href="https://register.findmycareer.org.uk/apply" target="_blank" rel="noopener noreferrer" className={styles.btnApply}>Apply Now</a>
              </div>
            </div>
          </div>

          <div className={styles.infoGrid}>
            <div className={styles.infoBox}>
              <h3 className={styles.subTitle}>IELTS Preparation</h3>
              <p>At British Graduate School, we offer comprehensive IELTS training to help you achieve your best score. Our expert instructors provide personalized coaching, practice tests, and valuable tips to ensure you&apos;re fully prepared for the exam. Whether you&apos;re aiming to study abroad or improve your language proficiency, we’ll guide you every step of the way.</p>
            </div>
            <div className={styles.infoBox}>
              <h3 className={styles.subTitle}>Why Choose Us for Your Journey?</h3>
              <ul className={styles.list}>
                <li><strong>Scholarships Available</strong> – Financial support opportunities to make your global education more affordable.</li>
                <li><strong>Offer Letters Within 48 Hours</strong> – Get speedy responses and move forward with your academic journey without delays.</li>
                <li><strong>Fast-Track Application Process</strong> – Simplified procedures to ensure a quick and hassle-free university application experience.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

     
      {/* Six Locations Detailed Section */}
      <section id="locations-detail" className={styles.locationsSection}>
        <div className="container">
          <div className={styles.locationsHeader}>
            <h2>Six locations across the world</h2>
            <p>Grow, connect and discover the world on your terms with British Graduate School.</p>
          </div>

          <div className={styles.allLocations}>
            {locations.map((loc) => (
              <div key={loc.id} id={loc.id} className={styles.locationsContent} style={{ marginBottom: '8rem' }}>
                {/* Sidebar */}
                <div className={styles.sidebar}>
                  <h3>{loc.country}</h3>
                  <p>{loc.description}</p>
                  <div className={styles.sidebarActions}>
                    <Link href="/apply" className={styles.sidebarBtn}>
                      {loc.btnText} <span>→</span>
                    </Link>
                  </div>
                </div>

                {/* Cities Grid */}
                <div className={styles.citiesGrid}>
                  {loc.cities.map((city, idx) => (
                    <div key={idx} className={`${styles.cityCard} ${city.large ? styles.cityCardLarge : ""}`}>
                      <Image src={city.img} alt={city.name} fill className={styles.cityImage} />
                      <div className={styles.cityOverlay}></div>
                      <div className={styles.cityContent}>
                        <h4>{city.name}</h4>
                        <p>{city.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
