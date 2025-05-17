import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { FeatureCards } from "@/components/feature-cards"
import { ServicesSection } from "@/components/services-section"
import { IndustriesSection } from "@/components/industries-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { AutomationSection } from "@/components/automation-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#14213D] text-white">
      <Navbar />
      <HeroSection />
      <FeatureCards />
      <AutomationSection />
      <div id="solutions">
        <ServicesSection />
      </div>
      <div id="industries">
        <IndustriesSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}
