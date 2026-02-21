import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Welcome from "@/components/Welcome";
import FeaturedCourses from "@/components/FeaturedCourses";
import Accreditations from "@/components/Accreditations";
import WhyChooseUs from "@/components/WhyChooseUs";
import ResourcesNews from "@/components/ResourcesNews";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ProgramCategories from "@/components/ProgramCategories";
import AsicCertification from "@/components/AsicCertification";
import IsoCertification from "@/components/IsoCertification";
import OthmCertification from "@/components/OthmCertification";
import TopUpCertification from "@/components/TopUpCertification";

export default function Home() {
  return (
    <main style={{ overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <Introduction />
      <ProgramCategories />
      <Accreditations />
      <FeaturedCourses />
      <WhyChooseUs />
      <Welcome />
      <Testimonials />
      <AsicCertification />
      <IsoCertification />
      <TopUpCertification />
      <OthmCertification />
      <ResourcesNews />
      <Footer />
    </main>
  );
}
