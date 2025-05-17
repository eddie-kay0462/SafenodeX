import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0A1425] py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#FF5722]" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4a3 3 0 110 6 3 3 0 010-6zm0 9.5c-2.05 0-3.9-.85-5.18-2.35.26-.81 1.57-1.65 2.68-1.65h5c1.11 0 2.42.84 2.68 1.65-1.28 1.5-3.13 2.35-5.18 2.35z" />
              </svg>
              <span className="text-xl font-bold text-white">SafenodeX</span>
            </div>
            <p className="text-gray-400">Smart. Secure. Seamless.</p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-[#FF5722]">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-[#FF5722]">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-[#FF5722]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-[#FF5722]">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-[#FF5722]">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#FF5722]">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#FF5722]">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#FF5722]">
                  AI Integration
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#FF5722]">
                  Business Automation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#FF5722]">
                  API Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-[#FF5722]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#FF5722]">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#FF5722]">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-[#FF5722]">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#FF5722]">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
            <div className="flex space-x-2">
              <Input placeholder="Your email" className="bg-[#14213D] border-[#14213D]" />
              <Button className="bg-[#009688] hover:bg-[#00796B] text-white">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SafenodeX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
