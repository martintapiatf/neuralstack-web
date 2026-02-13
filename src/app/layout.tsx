import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "NeuralStack - Infraestructura de IA y APIs Escalables",
  description:
    "Soluciones inteligentes de próxima generación para empresas que buscan transformar sus operaciones con inteligencia artificial.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <body className="bg-gray-900 text-gray-100 min-h-screen antialiased">
        {children}
      </body>
    </html>
  )
}
