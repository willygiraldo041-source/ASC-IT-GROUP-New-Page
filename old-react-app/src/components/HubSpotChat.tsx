import { useEffect } from "react"

interface HubSpotChatProps {
  portalId: string
}

export default function HubSpotChat({ portalId }: HubSpotChatProps) {
  useEffect(() => {
    // Verificar si el script ya existe
    if (document.getElementById("hs-script-loader")) {
      return
    }

    // Crear y cargar el script de HubSpot
    const script = document.createElement("script")
    script.id = "hs-script-loader"
    script.src = `//js.hs-scripts.com/${portalId}.js`
    script.async = true
    script.defer = true

    document.body.appendChild(script)

    return () => {
      // Cleanup cuando el componente se desmonta
      const existingScript = document.getElementById("hs-script-loader")
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [portalId])

  return null
}
