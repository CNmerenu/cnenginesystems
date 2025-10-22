import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import AboutPreview from "@/components/home/AboutPreview";
import CTASection from "@/components/home/CTASection";
import { generateMetadata as createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "CN Engine Systems Ltd - Engineering Excellence in Nigeria",
  description: "Leading engineering services company in Nigeria providing comprehensive solutions in engineering design, equipment procurement, professional installation, and maintenance services for industrial and commercial projects.",
  url: "https://cnenginesystems.com"
});

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AboutPreview />
      <CTASection />
    </>
  );
}
