# ASC IT GROUP - Landing Page

A modern, full-screen dark hero landing page for ASC IT GROUP cybersecurity company, featuring an embedded Spline 3D scene background.

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library
- **Spline** - 3D scene integration (@splinetool/react-spline)
- **Google Fonts (Sora)** - Custom typography

## Features

- 🎨 **Dark Theme** - Sleek dark color scheme with vivid green accents
- 🌐 **3D Background** - Interactive Spline 3D scene
- 📱 **Responsive Design** - Fluid typography using CSS clamp()
- ✨ **Smooth Animations** - Staggered fade-up animations with cubic-bezier easing
- 🎯 **Modern UI** - Clean, professional interface with shadcn/ui components
- ⚡ **Performance** - Lazy-loaded 3D scene with React Suspense

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── features/
│   ├── navbar/
│   │   └── Navbar.tsx       # Fixed navigation bar
│   └── hero/
│       └── HeroSection.tsx  # Hero section with Spline 3D
├── components/
│   └── ui/
│       └── button.tsx       # shadcn/ui Button component
├── lib/
│   └── utils.ts             # Utility functions (cn helper)
├── App.tsx                  # Main app component
├── main.tsx                 # App entry point
└── index.css                # Global styles and Tailwind config
```

## Color Theme

- **Background**: `hsl(0 0% 10%)` - Dark charcoal
- **Foreground**: `hsl(0 0% 96%)` - Near white
- **Primary**: `hsl(119 99% 46%)` - Vivid green
- **Secondary**: `hsl(0 0% 18%)` - Dark gray
- **Hero Background**: `hsl(0 0% 8%)` - Nearly black

## Custom Animations

- **fade-up**: Opacity + translateY + blur animation (0.7s cubic-bezier)
- **fade-in**: Simple opacity fade (0.5s ease-out)

## Typography

Using **Sora** font family from Google Fonts with weights:
- 300 (Light)
- 400 (Regular)
- 500 (Medium)
- 600 (Semi-bold)
- 700 (Bold)

## Spline 3D Scene

The 3D background is loaded from:
`https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode`

The scene is lazy-loaded using React.lazy() and Suspense for optimal performance.

## License

Private project for ASC IT GROUP
