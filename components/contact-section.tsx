import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-[#0F1A2E]">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Get In Touch</h2>
          <p className="mt-4 text-gray-300 md:text-xl max-w-3xl mx-auto">
            Ready to transform your business with smart, secure solutions? Contact us today to get started.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactForm />
          <div className="space-y-6">
            <Card className="bg-[#1A2A4A] border-none">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-[#FF5722] mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-white">Email Us</h3>
                    <p className="text-gray-300">info@safenodex.com</p>
                    <p className="text-gray-300">support@safenodex.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[#1A2A4A] border-none">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-[#FF5722] mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-white">Call Us</h3>
                    <p className="text-gray-300">+233 50 123 4567</p>
                    <p className="text-gray-300">+233 24 987 6543</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[#1A2A4A] border-none">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-[#FF5722] mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-white">Visit Us</h3>
                    <p className="text-gray-300">
                      123 Tech Hub, Innovation Street
                      <br />
                      Accra, Ghana
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
