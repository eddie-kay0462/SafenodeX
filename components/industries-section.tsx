import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingBag, Hotel, Pill, School, TrendingUp, Stethoscope } from "lucide-react"

export function IndustriesSection() {
  return (
    <section className="py-16 md:py-24 bg-[#0F1A2E]">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">Industries We Serve</h2>
          <p className="mt-4 text-gray-200 md:text-xl max-w-3xl mx-auto">
            We specialize in creating tailored solutions for various industries, understanding their unique challenges
            and requirements.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <IndustryCard
            icon={<ShoppingBag className="h-10 w-10" />}
            title="Retail & Small Businesses"
            description="Inventory management, invoicing systems, and customer engagement solutions."
          />
          <IndustryCard
            icon={<Hotel className="h-10 w-10 " />}
            title="Hotels & Hospitality"
            description="Reservation tracking, guest engagement, and operational management systems."
          />
          <IndustryCard
            icon={<Pill className="h-10 w-10" />}
            title="Pharmacies"
            description="Stock management, prescription tracking, and customer reminder systems."
          />
          <IndustryCard
            icon={<School className="h-10 w-10" />}
            title="Schools & Education"
            description="Academic records management, communication platforms, and learning systems."
          />
          <IndustryCard
            icon={<TrendingUp className="h-10 w-10" />}
            title="Investment Firms"
            description="Portfolio tracking, reporting dashboards, and financial analysis tools."
          />
          <IndustryCard
            icon={<Stethoscope className="h-10 w-10" />}
            title="Clinics & Health Centers"
            description="Appointment scheduling, patient records, and billing automation systems."
          />
        </div>
      </div>
    </section>
  )
}

function IndustryCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="bg-[#1A2A4A] border-none">
      <CardHeader>
        <div className="text-[#009688]">{icon}</div>
        <CardTitle className="text-xl font-bold text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-200">{description}</p>
      </CardContent>
    </Card>
  )
}
