import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Smart, Secure, AI-Powered
              <br />
              Solutions for Businesses
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              We develop intelligent web and mobile applications to automate processes, enhance security, and drive
              growth.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-[#FF5722] hover:bg-[#E64A19] text-white">
              <Link href="#contact">Get Started</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#009688] text-[#009688] hover:bg-[#009688] hover:text-white"
            >
              <Link href="#services">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
