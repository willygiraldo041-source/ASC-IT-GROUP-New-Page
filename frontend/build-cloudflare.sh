#!/bin/bash
set -e

echo "🔧 Installing dependencies with npm..."
npm install --legacy-peer-deps

echo "🏗️ Building Next.js app..."
npm run build

echo "✅ Build completed successfully!"
