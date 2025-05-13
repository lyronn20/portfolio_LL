"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

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

  // Fermer le menu si la fenêtre est redimensionnée à une largeur supérieure à md
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center z-20">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
            L<span className="text-cyan-400">.</span>L
          </div>
        </Link>

        {/* Navigation desktop */}
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

        {/* Bouton menu mobile */}
        <div className="md:hidden flex items-center z-20">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Menu"
            className="relative w-10 h-10 flex items-center justify-center text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/30"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed top-[72px] left-0 w-full bg-background/95 backdrop-blur-md shadow-md z-10 overflow-hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="container mx-auto px-4 py-6 flex flex-col"
            >
              <div className="flex flex-col space-y-4 mb-6">
                <button
                  onClick={() => scrollToSection("about")}
                  className="py-3 px-4 text-lg font-medium text-foreground/80 hover:text-cyan-400 transition-colors rounded-md hover:bg-cyan-950/10"
                >
                  À propos
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="py-3 px-4 text-lg font-medium text-foreground/80 hover:text-cyan-400 transition-colors rounded-md hover:bg-cyan-950/10"
                >
                  Projets
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="py-3 px-4 text-lg font-medium text-foreground/80 hover:text-cyan-400 transition-colors rounded-md hover:bg-cyan-950/10"
                >
                  Compétences
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="py-3 px-4 text-lg font-medium text-foreground/80 hover:text-cyan-400 transition-colors rounded-md hover:bg-cyan-950/10"
                >
                  Contact
                </button>
              </div>

              <div className="border-t border-[#1e3a5f] pt-6">
                <p className="text-sm text-gray-400 mb-4 px-4">Réseaux sociaux</p>
                <div className="flex items-center space-x-4 px-4">
                  <a
                    href="https://www.linkedin.com/in/lyronn-langlois/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors py-2"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/lyronn20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors py-2"
                  >
                    <Github className="h-5 w-5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
