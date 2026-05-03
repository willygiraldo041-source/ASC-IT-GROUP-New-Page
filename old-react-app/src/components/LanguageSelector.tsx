import { useLanguage } from "../i18n/LanguageContext"
import { Languages } from "lucide-react"

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2 bg-secondary border border-border rounded-md px-3 py-2">
      <Languages className="w-4 h-4 text-primary" />
      <button
        onClick={() => setLanguage("es")}
        className={`text-xs font-semibold uppercase transition-colors ${
          language === "es" ? "text-primary" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        ES
      </button>
      <span className="text-border">|</span>
      <button
        onClick={() => setLanguage("en")}
        className={`text-xs font-semibold uppercase transition-colors ${
          language === "en" ? "text-primary" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  )
}
