import { Header } from "@/components/common/Header";
import { Hero } from "@/components/home/hero-section";
import { HowItWorks } from "@/components/home/how-it-works";
import { Pricing } from "@/components/home/pricing-section";
import { Testimonials } from "@/components/home/testimonials";
export default function Home() {
  return (
    <>
      <section id="header">
        <Header />
      </section>
      <section id="hero">
        <Hero />
      </section>
      <section id="howitworks">
        <HowItWorks />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
    </>
  );
}
