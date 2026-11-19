import { Categories } from "@/components/Categories";
import { FeaturedCourse } from "@/components/FeaturedCourse";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedCourse />
        <HowItWorks />
      </main>
    </>
  );
}
