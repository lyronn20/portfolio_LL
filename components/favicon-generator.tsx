"use client"

import { useEffect } from "react"

export function FaviconGenerator() {
  useEffect(() => {
    // Cette fonction est exécutée côté client uniquement
    // Elle génère dynamiquement un favicon si celui-ci n'est pas chargé correctement
    const canvas = document.createElement("canvas")
    canvas.width = 32
    canvas.height = 32
    const ctx = canvas.getContext("2d")

    if (ctx) {
      // Fond
      ctx.fillStyle = "#0a192f"
      ctx.fillRect(0, 0, 32, 32)

      // Texte
      ctx.font = "bold 16px Arial"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      // Premier L
      const gradient1 = ctx.createLinearGradient(8, 16, 14, 16)
      gradient1.addColorStop(0, "#38bdf8")
      gradient1.addColorStop(1, "#2563eb")
      ctx.fillStyle = gradient1
      ctx.fillText("L", 11, 16)

      // Point
      ctx.fillStyle = "#38bdf8"
      ctx.fillText(".", 16, 16)

      // Deuxième L
      const gradient2 = ctx.createLinearGradient(18, 16, 24, 16)
      gradient2.addColorStop(0, "#38bdf8")
      gradient2.addColorStop(1, "#2563eb")
      ctx.fillStyle = gradient2
      ctx.fillText("L", 21, 16)

      // Créer un lien favicon dynamique
      const link = document.querySelector("link[rel*='icon']") || document.createElement("link")
      link.type = "image/x-icon"
      link.rel = "shortcut icon"
      link.href = canvas.toDataURL("image/x-icon")
      document.getElementsByTagName("head")[0].appendChild(link)
    }
  }, [])

  return null
}
