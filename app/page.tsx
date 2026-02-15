import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Products } from "@/components/products"
import { Vision } from "@/components/vision"
import { Founder } from "@/components/founder"
import { TechStack } from "@/components/tech-stack"
import { Industries } from "@/components/industries"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { OrganicBackground } from "@/components/organic-background"
import { LanguageProvider } from "@/components/language-provider"

export default function Page() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <OrganicBackground />
        <Navbar />
        <Hero />
        <Products />
        <Vision />
        <Founder />
        <TechStack />
        <Industries />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
