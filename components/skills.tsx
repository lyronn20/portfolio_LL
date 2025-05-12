"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Database, Lightbulb } from "lucide-react"

type Skill = {
  name: string
  level: number
}

type SkillCategory = {
  id: string
  name: string
  icon: React.ReactNode
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    id: "langages",
    name: "Langages",
    icon: <Code className="h-5 w-5" />,
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "PHP", level: 80 },
      { name: "SQL", level: 80 },
      { name: "Python", level: 75 },
      { name: "Java", level: 70 },
      { name: "C/C++", level: 65 },
      { name: "TypeScript", level: 70 },
    ],
  },
  {
    id: "logiciels",
    name: "Logiciels",
    icon: <Database className="h-5 w-5" />,
    skills: [
      { name: "Office 365", level: 95 },
      { name: "WordPress", level: 85 },
      { name: "PHPmyadmin", level: 80 },
      { name: "Canva", level: 85 },
      { name: "VMWare", level: 75 },
    ],
  },
  {
    id: "langues",
    name: "Langues",
    icon: <Palette className="h-5 w-5" />,
    skills: [
      { name: "Français", level: 100 },
      { name: "Anglais", level: 70 },
      { name: "Espagnol", level: 60 },
    ],
  },
  {
    id: "autres",
    name: "Autres",
    icon: <Lightbulb className="h-5 w-5" />,
    skills: [
      { name: "Travail d'équipe", level: 90 },
      { name: "Communication", level: 85 },
      { name: "Autonomie", level: 90 },
      { name: "Résolution de problèmes", level: 85 },
      { name: "Permis B", level: 100 },
    ],
  },
]

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20 bg-[#0c1e36]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Mes Compétences</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Un aperçu des technologies, langages et outils que j'utilise pour développer des applications.
          </p>
        </motion.div>

        <Tabs defaultValue="langages" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8 bg-[#172a46]">
            {skillCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center gap-2 data-[state=active]:bg-cyan-700 data-[state=active]:text-white"
              >
                {category.icon}
                <span className="hidden sm:inline">{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <Card className="bg-[#172a46] border-[#1e3a5f] text-gray-200">
                <CardContent className="pt-6">
                  <div className="grid gap-6">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-white">{skill.name}</span>
                          <span className="text-cyan-400">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2 bg-[#0d2240]" indicatorClassName="bg-cyan-500" />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
