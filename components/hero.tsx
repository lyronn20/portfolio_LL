"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[#0a192f]">
        {/* Circuit pattern overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/50 via-[#0a192f]/70 to-[#0a192f]"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Bonjour, je suis
            </span>
            <br />
            <span className="mt-2 inline-block text-white">Langlois Lyronn</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10">
            Étudiant à SUPINFO en Bachelor of Engineering
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="px-8 bg-cyan-600 hover:bg-cyan-700 text-white w-full sm:w-auto"
              onClick={() => scrollToSection("projects")}
            >
              Voir mes projets
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 border-cyan-600 text-cyan-400 hover:bg-cyan-950 w-full sm:w-auto"
              onClick={() => scrollToSection("contact")}
            >
              Me contacter
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToSection("about")}
          aria-label="Scroll down"
          className="text-cyan-400"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}
