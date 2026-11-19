import { Categories } from "@/components/Categories/Categories";
import { Community } from "@/components/Community/Community";
import { Contact } from "@/components/Contact/Contact";
import { FeaturedCourse } from "@/components/FeaturedCourse/FeaturedCourse";
import { FinalCta } from "@/components/FinalCta/FinalCta";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { HowItWorks } from "@/components/HowItWorks/HowItWorks";
import { Testimonial } from "@/components/Testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedCourse />
        <HowItWorks />
        <Testimonial />
        <Community />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
