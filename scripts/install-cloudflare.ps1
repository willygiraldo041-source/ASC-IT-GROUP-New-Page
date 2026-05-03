# ========================================
# ASC IT GROUP - Cloudflare Setup Script (Windows)
# ========================================

Write-Host "🚀 Instalando dependencias de Cloudflare..." -ForegroundColor Cyan

# Ir al directorio frontend
Set-Location -Path "$PSScriptRoot\..\frontend"

Write-Host "📦 Instalando pnpm globalmente..." -ForegroundColor Blue
npm install -g pnpm@latest

Write-Host "📦 Instalando dependencias del proyecto..." -ForegroundColor Blue
pnpm install

Write-Host "☁️ Actualizando Wrangler CLI a la última versión..." -ForegroundColor Blue
pnpm add -D wrangler@latest

Write-Host "🔧 Instalando adaptador de Cloudflare..." -ForegroundColor Blue
pnpm add -D "@cloudflare/next-on-pages@latest"
pnpm add -D "@cloudflare/workers-types@latest"

Write-Host ""
Write-Host "✅ Instalación completada!" -ForegroundColor Green
Write-Host ""
Write-Host "📝 Próximos pasos:" -ForegroundColor Yellow
Write-Host "1. Configura tus variables de entorno (revisa ENV_SETUP.md)"
Write-Host "2. Haz login a Cloudflare: " -NoNewline
Write-Host "pnpm wrangler login" -ForegroundColor Blue
Write-Host "3. Build para Cloudflare: " -NoNewline
Write-Host "pnpm build:cloudflare" -ForegroundColor Blue
Write-Host "4. Preview local: " -NoNewline
Write-Host "pnpm preview:cloudflare" -ForegroundColor Blue
Write-Host "5. Deploy: " -NoNewline
Write-Host "pnpm deploy:cloudflare" -ForegroundColor Blue
Write-Host ""
Write-Host "🎉 ¡Todo listo para deployar!" -ForegroundColor Green
Write-Host ""
Write-Host "💡 Tip: Para actualizar dependencias en el futuro:" -ForegroundColor Cyan
Write-Host "   pnpm update wrangler @cloudflare/next-on-pages @cloudflare/workers-types" -ForegroundColor Gray
