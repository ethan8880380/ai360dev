import Blog from "@/components/sections/blog";
import CTA from "@/components/sections/cta";
import FAQ from "@/components/sections/faq";
import Features from "@/components/sections/features";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import HowItWorks from "@/components/sections/how-it-works";
import Logos from "@/components/sections/logos";
import Pricing from "@/components/sections/pricing";
import Problem from "@/components/sections/problem";
import Solution from "@/components/sections/solution";
import Testimonials from "@/components/sections/testimonials";
import TestimonialsCarousel from "@/components/sections/testimonials-carousel";
import { ButtonContainer } from "@/components/sections/button-container";
import { Banner } from "@/components/sections/banner";
import CommunityOfPractice from "@/components/sections/community-of-practice";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <ButtonContainer />
      <Problem />
      <Banner />
      <CommunityOfPractice />
      <Solution />
      <FAQ />
      <Blog />
      <CTA />
      <Footer />
    </main>
  );
}
