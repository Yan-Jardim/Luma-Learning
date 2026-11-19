import { Categories } from "@/components/Categories";
import { Community } from "@/components/Community";
import { FeaturedCourse } from "@/components/FeaturedCourse";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonial } from "@/components/Testimonial";

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
      </main>
    </>
  );
}
