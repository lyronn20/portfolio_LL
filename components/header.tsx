"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
            L<span className="text-cyan-400">.</span>L
          </div>
          <div className="h-6 w-px mx-3 bg-gradient-to-b from-cyan-400/20 to-blue-600/20"></div>
          <span className="text-lg font-medium text-gray-200">Portfolio</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground/80 hover:text-cyan-400 transition-colors"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground/80 hover:text-cyan-400 transition-colors"
            >
              Projets
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-foreground/80 hover:text-cyan-400 transition-colors"
            >
              Compétences
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground/80 hover:text-cyan-400 transition-colors"
            >
              Contact
            </button>
          </nav>
          <div className="flex items-center space-x-3">
            <a
              href="https://www.linkedin.com/in/lyronn-langlois/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/lyronn20"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <a
              href="https://www.linkedin.com/in/lyronn-langlois/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/lyronn20"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md shadow-md">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("about")}
              className="py-2 text-foreground/80 hover:text-cyan-400 transition-colors"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="py-2 text-foreground/80 hover:text-cyan-400 transition-colors"
            >
              Projets
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="py-2 text-foreground/80 hover:text-cyan-400 transition-colors"
            >
              Compétences
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="py-2 text-foreground/80 hover:text-cyan-400 transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
