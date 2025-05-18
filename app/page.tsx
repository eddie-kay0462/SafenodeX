import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { FeatureCards } from "@/components/feature-cards"
import { ServicesSection } from "@/components/services-section"
import { IndustriesSection } from "@/components/industries-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { AutomationSection } from "@/components/automation-section"
import { AnimatedSection } from "@/components/animated-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#14213D] text-white">
      <Navbar />
      <HeroSection />

      <AnimatedSection>
        <FeatureCards />
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <AutomationSection />
      </AnimatedSection>

      <div id="solutions">
        <AnimatedSection>
          <ServicesSection />
        </AnimatedSection>
      </div>

      <div id="industries">
        <AnimatedSection>
          <IndustriesSection />
        </AnimatedSection>
      </div>

      <div id="about">
        <AnimatedSection>
          <AboutSection />
        </AnimatedSection>
      </div>

      <div id="contact">
        <AnimatedSection>
          <ContactSection />
        </AnimatedSection>
      </div>

      <Footer />
    </main>
  )
}
