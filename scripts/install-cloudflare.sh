#!/bin/bash

# ========================================
# ASC IT GROUP - Cloudflare Setup Script
# ========================================

echo "🚀 Instalando dependencias de Cloudflare..."

# Colores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Ir al directorio frontend
cd "$(dirname "$0")/../frontend" || exit

echo "${BLUE}📦 Instalando pnpm globalmente...${NC}"
npm install -g pnpm@latest

echo "${BLUE}📦 Instalando dependencias del proyecto...${NC}"
pnpm install

echo "${BLUE}☁️ Instalando Wrangler CLI...${NC}"
pnpm add -D wrangler@latest

echo "${BLUE}🔧 Instalando adaptador de Cloudflare...${NC}"
pnpm add -D @cloudflare/next-on-pages@latest
pnpm add -D @cloudflare/workers-types@latest

echo "${GREEN}✅ Instalación completada!${NC}"
echo ""
echo "${YELLOW}📝 Próximos pasos:${NC}"
echo "1. Configura tus variables de entorno (revisa ENV_SETUP.md)"
echo "2. Haz login a Cloudflare: ${BLUE}pnpm wrangler login${NC}"
echo "3. Build para Cloudflare: ${BLUE}pnpm build:cloudflare${NC}"
echo "4. Preview local: ${BLUE}pnpm preview:cloudflare${NC}"
echo "5. Deploy: ${BLUE}pnpm deploy:cloudflare${NC}"
echo ""
echo "${GREEN}🎉 ¡Todo listo para deployar!${NC}"
