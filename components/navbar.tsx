"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#14213D]/10 bg-[#14213D] backdrop-blur">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-10">
              <img src="/SafenodeXlogo.png" alt="SafenodeX's Logo" className="h-10 w-10" />
            </div>
            <span className="text-xl font-bold text-white">SafenodeX</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-white hover:text-[#FF5722] transition-colors">
            Home
          </Link>
          <Link href="#solutions" className="text-sm font-medium text-white hover:text-[#FF5722] transition-colors">
            Solutions
          </Link>
          <Link href="#industries" className="text-sm font-medium text-white hover:text-[#FF5722] transition-colors">
            Industries
          </Link>
          <Link href="#about" className="text-sm font-medium text-white hover:text-[#FF5722] transition-colors">
            About
          </Link>
          <Button asChild variant="outline" className="border-[#10CFC9] text-[#10CFC9] bg-[#192233] transition-all duration-200 hover:bg-[#192233] hover:text-[#10CFC9] hover:border-2 hover:border-[#10CFC9] hover:shadow-[0_0_8px_2px_#10CFC9]">
            <Link href="#contact">Contact</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#14213D] border-t border-[#14213D]/10 py-4">
          <nav className="container flex flex-col space-y-4">
            <Link
              href="/"
              className="text-white hover:text-[#FF5722] transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#solutions"
              className="text-white hover:text-[#FF5722] transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="#industries"
              className="text-white hover:text-[#FF5722] transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Industries
            </Link>
            <Link
              href="#about"
              className="text-white hover:text-[#FF5722] transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="px-4 pt-2">
              <Button asChild className="w-full border-[#10CFC9] text-[#10CFC9] bg-[#192233] transition-all duration-200 hover:bg-[#192233] hover:text-[#10CFC9] hover:border-2 hover:border-[#10CFC9] hover:shadow-[0_0_8px_2px_#10CFC9]">
                <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
