import type { Metadata } from 'next'
import { Inter, Space_Mono } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neuralstack.dev'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'NeuralStack | Soluciones de IA y Automatización SaaS',
    template: '%s — NeuralStack',
  },

  description:
    'Impulsando la próxima generación de software con IA. Especialistas en validación de leads, cumplimiento normativo y automatización inteligente — infraestructura retro-futurista para el futuro.',

  keywords: [
    'IA',
    'SaaS',
    'NeuralStack',
    'Automatización',
    'Lead Validation',
    'Tecnología',
    'AI Infrastructure',
    'EU AI Act',
    'Compliance',
    'API',
  ],

  authors: [{ name: 'NeuralStack', url: siteUrl }],
  creator: 'NeuralStack',
  publisher: 'NeuralStack',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'es_AR',
    alternateLocale: 'en_US',
    url: siteUrl,
    siteName: 'NeuralStack',
    title: 'NeuralStack | Soluciones de IA y Automatización SaaS',
    description:
      'Infraestructura inteligente retro-futurista. APIs escalables, gobernanza empresarial y soluciones de IA construidas en Buenos Aires para el mundo.',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'NeuralStack | Soluciones de IA y Automatización SaaS',
    description:
      'Infraestructura inteligente retro-futurista. APIs escalables, gobernanza empresarial y automatización con IA.',
    creator: '@neuralstack',
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${spaceMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
