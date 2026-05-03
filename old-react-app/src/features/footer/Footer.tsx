import { Linkedin, Twitter, Facebook, Instagram, Youtube, Send } from "lucide-react"
import { useLanguage } from "@/i18n/LanguageContext"

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/company/ascybersecurity/",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/asccybersec",
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/asccybersec",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/ascibersecurity/",
  },
  {
    name: "Youtube",
    icon: Youtube,
    url: "https://www.youtube.com/@ascitgroup",
  },
  {
    name: "Telegram",
    icon: Send,
    url: "https://t.me/ASCybersecurity",
  },
]

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="relative z-20 bg-secondary border-t border-border py-3">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-2">
          <p className="text-foreground text-sm font-light mb-2">
            {t.footer.message}
          </p>
          <p className="text-muted-foreground text-xs mb-2">
            {t.footer.social}
          </p>
          <div className="flex justify-center gap-2">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-8 h-8 bg-primary hover:bg-primary rounded flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-[0_0_15px_rgba(0,128,255,0.6)] active:scale-95"
                  aria-label={social.name}
                >
                  <Icon className="w-4 h-4 text-primary-foreground transition-transform duration-300 group-hover:rotate-12" />
                </a>
              )
            })}
          </div>
        </div>

        <div className="text-center pt-2 border-t border-border/50">
          <p className="text-muted-foreground text-[10px]">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
