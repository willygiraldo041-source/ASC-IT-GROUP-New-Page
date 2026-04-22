import { MessageCircle } from "lucide-react"
import { useLanguage } from "@/i18n/LanguageContext"

export default function FloatingWhatsApp() {
  const { language } = useLanguage()
  const message = language === "es" 
    ? "¡Hola! Me gustaría obtener más información sobre sus servicios de ciberseguridad." 
    : "Hello! I would like to get more information about your cybersecurity services."

  const whatsappUrl = `https://wa.me/573147950662?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Pulse animation */}
        <span className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></span>
        
        {/* Main button */}
        <div className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95">
          <MessageCircle className="w-7 h-7" />
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-secondary border border-border text-foreground text-sm px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
            {language === "es" ? "Chatea con nosotros" : "Chat with us"}
            <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-border"></div>
          </div>
        </div>
      </div>
    </a>
  )
}
