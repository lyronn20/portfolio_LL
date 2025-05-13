"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react"
import emailjs from "@emailjs/browser"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; message?: string } | null>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Initialiser EmailJS
  useEffect(() => {
    emailjs.init("YOUR_PUBLIC_KEY") // Remplacez par votre clé publique EmailJS
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Configuration EmailJS
      const serviceId = "service_onosh97" // ID de service fourni
      const templateId = "template_id" // À remplacer par votre ID de template

      // Préparation des données pour EmailJS
      const templateParams = {
        to_email: "lyronn.langlois@supinfo.com",
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }

      if (formRef.current) {
        // Envoi de l'email via EmailJS
        await emailjs.sendForm(serviceId, templateId, formRef.current)
      }

      setSubmitStatus({
        success: true,
        message: "Votre message a été envoyé avec succès!",
      })

      // Réinitialiser le formulaire
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Erreur lors de l'envoi du message:", error)
      setSubmitStatus({
        success: false,
        message: "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-cyan-400" />,
      title: "Email",
      value: "langlois.lyronn@supinfo.com",
      link: "mailto:langlois.lyronn@supinfo.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-cyan-400" />,
      title: "Téléphone",
      value: "07 50 57 13 13",
      link: "tel:+33750571313",
    },
    {
      icon: <MapPin className="h-5 w-5 text-cyan-400" />,
      title: "Adresse",
      value: "Caen/Paris, France",
      link: "https://maps.google.com/?q=Caen,France",
    },
  ]

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/lyronn-langlois/",
    },
    {
      icon: <Github className="h-5 w-5" />,
      title: "GitHub",
      url: "https://github.com/lyronn20",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-[#0a192f]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Me Contacter</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Vous avez un projet en tête ou une opportunité d'alternance? N'hésitez pas à me contacter!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="lg:col-span-1">
            <Card className="bg-[#172a46] border-[#1e3a5f] text-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-white">Informations de contact</h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex-shrink-0 p-3 rounded-full bg-[#0d2240]">{info.icon}</div>
                      <div>
                        <h4 className="font-medium text-white">{info.title}</h4>
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-cyan-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8">
                  <h4 className="font-medium mb-4 text-white">Réseaux sociaux</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-[#0d2240] text-cyan-400 hover:bg-cyan-900/50 transition-colors"
                        aria-label={social.title}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-medium mb-4 text-white">Centres d'intérêt</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Football", "Basketball", "MMA", "Musique", "Séries", "Films", "Voyages"].map(
                      (interest, index) => (
                        <span key={index} className="px-3 py-1 bg-[#0d2240] text-cyan-400 rounded-full text-sm">
                          {interest}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="bg-[#172a46] border-[#1e3a5f] text-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-white">Envoyez-moi un message</h3>

                {submitStatus && (
                  <div
                    className={`mb-6 p-4 rounded-md ${submitStatus.success ? "bg-green-900/30 text-green-400" : "bg-red-900/30 text-red-400"}`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-white">
                        Nom complet
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        required
                        className="bg-[#0d2240] border-[#1e3a5f] text-gray-200 placeholder:text-gray-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-white">
                        Adresse email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        required
                        className="bg-[#0d2240] border-[#1e3a5f] text-gray-200 placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-white">
                      Sujet
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Sujet de votre message"
                      required
                      className="bg-[#0d2240] border-[#1e3a5f] text-gray-200 placeholder:text-gray-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-white">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Votre message..."
                      rows={6}
                      required
                      className="bg-[#0d2240] border-[#1e3a5f] text-gray-200 placeholder:text-gray-400"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-700 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Envoi en cours...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Envoyer le message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
