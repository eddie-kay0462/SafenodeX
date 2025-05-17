'use client'

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lightbulb, Layers, Scale } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 text-white">About SafenodeX</h2>
            <p className="text-gray-200 mb-6">
              SafenodeX is a next-generation software development brand focused on building smart, secure, and
              intelligent digital solutions for businesses. We aim to revolutionize how businesses operate by automating
              core tasks and increasing visibility through well-crafted mobile and web applications.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-[#FF5722] mb-2">Our Mission</h3>
                <p className="text-gray-200">
                  To build smart, secure, and scalable digital solutions that solve real business problems with the
                  power of automation and artificial intelligence.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#FF5722] mb-2">Our Vision</h3>
                <p className="text-gray-200">
                  To become Africa's leading provider of secure, intelligent software platforms that streamline business
                  operations and empower growth within the next 5 years.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <UspCard
              icon={<Shield className="h-8 w-8" />}
              title="Security-First Builds"
              description="Every solution undergoes rigorous security testing before delivery."
            />
            <UspCard
              icon={<Lightbulb className="h-8 w-8" />}
              title="Practical AI Use"
              description="AI integration that delivers real business value, not just buzzwords."
            />
            <UspCard
              icon={<Layers className="h-8 w-8" />}
              title="Scalable Modules"
              description="Build now, scale later approach with modular, reusable components."
            />
            <UspCard
              icon={<Scale className="h-8 w-8" />}
              title="Industry-Specific"
              description="Solutions tailored to the unique needs of your industry."
            />
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-white">Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMember
              name="Maxwell B. Antwi"
              role="CEO, Security & DB Lead"
              description="Oversees product security and database integrity."
            />
            <TeamMember
              name="Edward Ofosu Mensah"
              role="Mobile/Web Dev Lead"
              description="Focuses on front-end and back-end delivery for apps."
            />
            <TeamMember
              name="Evans Kumi"
              role="AI & Automation Lead"
              description="Leads the design of smart features and agents."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function UspCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="bg-[#1A2A4A] border-none">
      <CardContent className="p-6">
        <div className="text-[#009688] mb-4">{icon}</div>
        <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-200 text-sm">{description}</p>
      </CardContent>
    </Card>
  )
}

function TeamMember({ name, role, description }: { name: string; role: string; description: string }) {
  // Convert name to lowercase, replace spaces with hyphens, and remove periods
  const imageName = name.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '')
  const [imgSrc, setImgSrc] = React.useState(`/images/team/${imageName}.jpg`)
  
  return (
    <Card className="bg-[#1A2A4A] border-none">
      <CardContent className="p-6 text-center">
        <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden relative">
          <Image
            src={imgSrc}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 96px) 100vw, 96px"
            priority={name === "Maxwell B. Antwi"}
            onError={() => {
              // If lowercase jpg fails, try uppercase JPG
              if (imgSrc.endsWith('.jpg')) {
                setImgSrc(imgSrc.replace('.jpg', '.JPG'))
              }
            }}
          />
        </div>
        <h4 className="text-xl font-bold text-white">{name}</h4>
        <p className="text-[#FF5722] mb-2">{role}</p>
        <p className="text-gray-200 text-sm">{description}</p>
      </CardContent>
    </Card>
  )
}
