import Image from "next/image";
import HeroSection from "@/components/HeroSection"
import IntroSection from "@/components/IntroSection";
import ContactSection from "@/components/ContactSection"

export default function Home() {
  return (
    <>
    <HeroSection />
    <IntroSection />
    <ContactSection />
    </>
  );
}
