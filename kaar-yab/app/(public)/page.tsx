import Hero from "@/components/home/Hero";
import FeaturedOpportunities from "@/components/home/FeaturedOpportunities";
import Categories from "@/components/home/Categories";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AboutCTA from "@/components/about/AboutCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedOpportunities />
      <Categories />
      <WhyChooseUs />
      <AboutCTA />
    </>
  );
}