import { PortableText, PortableTextComponents } from '@portabletext/react'
import { PortableTextBlock } from '@portabletext/react'
import Image from 'next/image'
import { getImageUrl } from '@/lib/sanity/image'

interface PortableTextRendererProps {
  content: PortableTextBlock[]
}

const components: PortableTextComponents = {
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-3xl font-bold mt-12 mb-6">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-2xl font-bold mt-8 mb-4">{children}</h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="text-xl font-bold mt-6 mb-3">{children}</h4>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="mb-6 text-lg leading-relaxed text-foreground/80">{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-primary pl-6 py-4 my-8 italic text-foreground/90 bg-primary/5 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc list-inside mb-6 space-y-2 text-foreground/80">
        {children}
      </ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal list-inside mb-6 space-y-2 text-foreground/80">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => <li className="ml-4">{children}</li>,
    number: ({ children }: { children?: React.ReactNode }) => <li className="ml-4">{children}</li>,
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => <strong className="font-bold text-foreground">{children}</strong>,
    em: ({ children }: { children?: React.ReactNode }) => <em className="italic">{children}</em>,
    code: ({ children }: { children?: React.ReactNode }) => (
      <code className="bg-secondary px-2 py-1 rounded text-sm font-mono text-primary">
        {children}
      </code>
    ),
    link: ({ value, children }: { value?: any; children?: React.ReactNode }) => {
      const raw = value?.href || ''
      const href = /^(https?:|mailto:|tel:)/i.test(raw) ? raw : undefined
      const external = href?.startsWith('http')
      return (
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className="text-primary hover:underline font-medium"
        >
          {children}
        </a>
      )
    },
  },
  types: {
    image: ({ value }: { value?: any }) => {
      if (!value?.asset) return null

      return (
        <div className="my-10 rounded-xl overflow-hidden">
          <Image
            src={getImageUrl(value.asset, 1200, 800)}
            alt={value.alt || 'Imagen del artículo'}
            width={1200}
            height={800}
            className="w-full h-auto"
          />
          {value.alt && (
            <p className="text-sm text-foreground/60 text-center mt-3 italic">
              {value.alt}
            </p>
          )}
        </div>
      )
    },
    code: ({ value }: { value?: any }) => (
      <div className="my-8">
        <pre className="bg-secondary/50 rounded-lg p-6 overflow-x-auto">
          <code className="text-sm font-mono text-foreground">{value.code}</code>
        </pre>
        {value.language && (
          <p className="text-xs text-foreground/60 mt-2">
            Lenguaje: {value.language}
          </p>
        )}
      </div>
    ),
  },
}

export function PortableTextRenderer({ content }: PortableTextRendererProps) {
  return <PortableText value={content} components={components} />
}
