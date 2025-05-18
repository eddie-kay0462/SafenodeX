import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, Globe, Bot, Lock, Code, BookOpen } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">What We Offer</h2>
            <p className="mt-4 text-gray-300 md:text-xl max-w-3xl mx-auto">
              End-to-end digital solutions that solve real business problems with the power of automation and artificial
              intelligence.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Globe className="h-10 w-10" />,
              title: "Web App Development",
              description: "Custom web applications tailored to your specific industry needs and business processes.",
            },
            {
              icon: <Smartphone className="h-10 w-10" />,
              title: "Mobile App Development",
              description: "Native and cross-platform mobile solutions that keep your business accessible anywhere.",
            },
            {
              icon: <Bot className="h-10 w-10" />,
              title: "AI Integration",
              description:
                "Chatbots, predictive analytics, and smart agents that automate routine tasks and provide insights.",
            },
            {
              icon: <Lock className="h-10 w-10" />,
              title: "Security-First Approach",
              description: "Rigorous security testing for every solution before delivery, ensuring data protection.",
            },
            {
              icon: <Code className="h-10 w-10" />,
              title: "API Services",
              description: "Scalable APIs for recurring use by clients, available on a subscription basis.",
            },
            {
              icon: <BookOpen className="h-10 w-10" />,
              title: "Training & Documentation",
              description: "One-time user training and comprehensive documentation to ensure smooth adoption.",
            },
          ].map((service, index) => (
            <AnimatedSection key={index} delay={100 * index}>
              <ServiceCard icon={service.icon} title={service.title} description={service.description} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card className="bg-[#1A2A4A] border-none">
      <CardHeader>
        <div className="text-[#FF5722]">{icon}</div>
        <CardTitle className="text-xl font-bold text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300">{description}</p>
      </CardContent>
    </Card>
  )
}
