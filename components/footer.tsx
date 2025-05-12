import { Heart, Linkedin, Github } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-[#1e3a5f] bg-[#0c1e36] text-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© {currentYear} Langlois Lyronn. Tous droits réservés.</p>
          </div>

          <div className="flex items-center space-x-4 mb-4 md:mb-0">
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

          <div className="flex items-center">
            <p className="text-sm flex items-center">
              Créé avec <Heart className="h-4 w-4 text-red-500 mx-1" /> en utilisant Next.js et Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
