import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-[#0F1A2E]">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">Get In Touch</h2>
          <p className="mt-4 text-gray-200 md:text-xl max-w-3xl mx-auto">
            Ready to transform your business with smart, secure solutions? Contact us today to get started.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-[#1A2A4A] border-none">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" className="bg-[#14213D] border-[#14213D]" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" className="bg-[#14213D] border-[#14213D]" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-white">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Subject" className="bg-[#14213D] border-[#14213D]" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="min-h-[120px] bg-[#14213D] border-[#14213D]"
                  />
                </div>
                <Button className="w-full bg-[#FF5722] hover:bg-[#E64A19] text-white">Send Message</Button>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-6">
            <Card className="bg-[#1A2A4A] border-none">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-[#FF5722] mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-white">Email Us</h3>
                    <p className="text-gray-200">info@safenodex.com</p>
                    <p className="text-gray-200">support@safenodex.com</p>
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
                    <p className="text-gray-200">+233 50 123 4567</p>
                    <p className="text-gray-200">+233 24 987 6543</p>
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
                    <p className="text-gray-200">
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
