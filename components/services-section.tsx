import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, Globe, Bot, Lock, Code, BookOpen } from "lucide-react"

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">What We Offer</h2>
          <p className="mt-4 text-gray-300 md:text-xl max-w-3xl mx-auto">
            End-to-end digital solutions that solve real business problems with the power of automation and artificial
            intelligence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={<Globe className="h-10 w-10" />}
            title="Web App Development"
            description="Custom web applications tailored to your specific industry needs and business processes."
          />
          <ServiceCard
            icon={<Smartphone className="h-10 w-10" />}
            title="Mobile App Development"
            description="Native and cross-platform mobile solutions that keep your business accessible anywhere."
          />
          <ServiceCard
            icon={<Bot className="h-10 w-10" />}
            title="AI Integration"
            description="Chatbots, predictive analytics, and smart agents that automate routine tasks and provide insights."
          />
          <ServiceCard
            icon={<Lock className="h-10 w-10" />}
            title="Security-First Approach"
            description="Rigorous security testing for every solution before delivery, ensuring data protection."
          />
          <ServiceCard
            icon={<Code className="h-10 w-10" />}
            title="API Services"
            description="Scalable APIs for recurring use by clients, available on a subscription basis."
          />
          <ServiceCard
            icon={<BookOpen className="h-10 w-10" />}
            title="Training & Documentation"
            description="One-time user training and comprehensive documentation to ensure smooth adoption."
          />
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="bg-[#1A2A4A] border-none">
      <CardHeader>
        <div className="text-[#FF5722]">{icon}</div>
        <CardTitle className="text-xl font-bold text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-200">{description}</p>
      </CardContent>
    </Card>
  )
}
