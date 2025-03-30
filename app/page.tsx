import { Header } from "@/components/common/Header";
import { Hero } from "@/components/home/hero-section";
// import { HowItWorks } from "@/components/home/how-it-works";
import { Pricing } from "@/components/home/pricing-section";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      {/* <HowItWorks /> */}
      <Pricing />
    </>
  );
}
