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
import QualifiCertification from "@/components/QualifiCertification";
import IsoCertification from "@/components/IsoCertification";
import OthmCertification from "@/components/OthmCertification";
import TopUpCertification from "@/components/TopUpCertification";
import CTASection from "@/components/CTASection";

import { getHomeData } from "@/sanity/lib/queries";

export const dynamic = "force-dynamic";

export default async function Home() {
  const homeData = await getHomeData();

  return (
    <main style={{ overflowX: 'hidden' }}>
      <Navbar />
      <Hero data={homeData} />
      <Introduction data={homeData} />
      <ProgramCategories data={homeData} />
      <Accreditations data={homeData} />
      <FeaturedCourses data={homeData} />
      <WhyChooseUs data={homeData} />
      <Welcome data={homeData} />
      <Testimonials data={homeData} />
      <QualifiCertification data={homeData} />
      <IsoCertification data={homeData} />
      <TopUpCertification data={homeData} />
      <OthmCertification data={homeData} />
      <ResourcesNews data={homeData} />
      <CTASection data={homeData} />
      <Footer />
    </main>
  );
}
