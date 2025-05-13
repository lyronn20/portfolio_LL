"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Project = {
  id: number
  title: string
  description: string
  image: string
  category: string
  technologies: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "iStore Ltd - Gestion d'Inventaire",
    description:
      "Application Java complète de gestion d'inventaire avec authentification, gestion utilisateurs, gestion admin, et gestion de stocks pour entreprises.",
    image: "/images/project-inventory.png",
    category: "Application",
    technologies: ["Java", "JavaFX", "SQL", "UML"],
  },
  {
    id: 2,
    title: "Gestion de Tournois Sportifs",
    description:
      "Application Symfony permettant de gérer des tournois, les inscriptions d'équipes, la création de comptes utilisateurs, et la visualisation des participants.",
    image: "/images/project-tournament.png",
    category: "Web",
    technologies: ["PHP 8.3", "Symfony", "SQL", "Twig", "WampServer"],
  },
  {
    id: 3,
    title: "Star Battle Solver",
    description:
      "Développement d'un solveur pour le jeu Star Battle en Python, implémentant différentes méthodes de résolution (backtracking, forward checking) et comparant leur efficacité.",
    image: "/images/project-starbattle.png",
    category: "Application",
    technologies: ["Python", "Algorithmes", "Structures de données"],
  },
  {
    id: 4,
    title: "Papers Please - Système de Contrôle",
    description:
      "Système de contrôle informatisé basé sur le jeu 'Papers, Please', développé sur infrastructure Linux avec pare-feu, routeur et postes de travail.",
    image: "/images/project-papers.png",
    category: "Système",
    technologies: ["Linux", "Scripting", "Sécurité", "Réseau"],
  },
  {
    id: 5,
    title: "Site WordPress ANC Conciergerie",
    description: "Site web créé pour ANC Conciergerie lors de mon stage de fin de première année à SUPINFO.",
    image: "/images/project-wordpress.png",
    category: "Web",
    technologies: ["WordPress", "PHP", "CSS"],
  },
  {
    id: 6,
    title: "SupRailroad Design",
    description:
      "Conception d'un écosystème unifié permettant aux utilisateurs d'acheter et d'utiliser des billets de transport (bus, métro, train). Inclut des fonctionnalités pour utilisateurs et administrateurs.",
    image: "/images/project-railroad.png",
    category: "Design",
    technologies: ["UX/UI Design", "Responsive Design", "Prototypage", "User Research"],
  },
]

const categories = ["Tous", "Web", "Application", "Système", "Design"]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("Tous")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProjects =
    activeCategory === "Tous" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 bg-[#0a192f]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Mes Projets</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Découvrez une sélection de mes projets, illustrant mon expertise et mes compétences techniques.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`mb-2 ${
                activeCategory === category
                  ? "bg-cyan-600 hover:bg-cyan-700 text-white"
                  : "border-cyan-600 text-cyan-400 hover:bg-cyan-950"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col bg-[#172a46] border-[#1e3a5f] text-gray-200">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="object-contain w-full h-full transition-transform duration-300 hover:scale-105 bg-white p-4"
                  />
                </div>
                <CardContent className="flex-1 flex flex-col p-6">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 text-xs rounded-full bg-cyan-900/50 text-cyan-400">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4 flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-[#0d2240] rounded-md text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
