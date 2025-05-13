"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-[#0c1e36]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">À propos de moi</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-square max-w-md mx-auto md:mx-0"
          >
            <div className="absolute inset-0 border-2 border-cyan-500 rounded-lg transform translate-x-4 translate-y-4"></div>
            <div className="relative h-full w-full overflow-hidden rounded-lg bg-[#172a46]">
              <Image
                src="/images/profile.png"
                alt="Portrait de Lyronn Langlois"
                width={500}
                height={500}
                className="object-cover h-full w-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-300"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Qui suis-je?</h3>
            <p className="mb-6">
              Je suis Lyronn Langlois, étudiant en 2ème année de Bachelor of Engineering à SUPINFO. Déterminé, sérieux
              et autonome, je suis actuellement à la recherche d'une alternance à partir de septembre 2025 dans le
              domaine du développement, Office365 et systèmes et réseaux.
            </p>
            <p className="mb-6">
              Mon parcours m'a permis d'acquérir diverses expériences professionnelles, notamment en tant que serveur et
              barman, ainsi qu'un stage en conciergerie où j'ai développé un site avec WordPress. Je suis passionné par
              l'informatique et constamment à la recherche de nouveaux défis.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-bold mb-2 text-cyan-400">Nom:</h4>
                <p>Langlois Lyronn</p>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-cyan-400">Email:</h4>
                <p>langlois.lyronn@supinfo.com</p>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-cyan-400">Téléphone:</h4>
                <p>07 50 57 13 13</p>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-cyan-400">Localisation:</h4>
                <p>Caen/Paris, France</p>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-cyan-400">Formation:</h4>
                <p>Bachelor of Engineering</p>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-cyan-400">Disponibilité:</h4>
                <p>Alternance (Sept. 2025)</p>
              </div>
            </div>

            <a href="/CV-LangloisLyronn.pdf" download="CV-LangloisLyronn.pdf">
              <Button className="gap-2 bg-cyan-600 hover:bg-cyan-700 text-white">
                <Download className="h-4 w-4" />
                Télécharger mon CV
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
