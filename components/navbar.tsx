"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Cpu, Globe } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Navbar() {
  const { locale, setLocale, t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Cpu className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold tracking-tight text-foreground">
            NeuralStack
          </span>
        </Link>

        {/* Center Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#products"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            {t("nav.products")}
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            {t("nav.about")}
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            {t("nav.contact")}
          </Link>
        </div>

        {/* Right side: Language Toggle + CTA */}
        <div className="flex items-center gap-3">
          {/* Language Selector */}
          <button
            type="button"
            onClick={() => setLocale(locale === "en" ? "es" : "en")}
            className="flex items-center gap-1.5 rounded-lg border border-border/60 px-2.5 py-1.5 text-xs font-semibold transition-colors hover:bg-muted"
            aria-label={
              locale === "en" ? "Switch to Spanish" : "Cambiar a Ingles"
            }
          >
            <Globe className="h-3.5 w-3.5 text-foreground/70" />
            <span
              className={
                locale === "en"
                  ? "text-primary"
                  : "text-foreground/60"
              }
            >
              EN
            </span>
            <span className="text-foreground/30">/</span>
            <span
              className={
                locale === "es"
                  ? "text-primary"
                  : "text-foreground/60"
              }
            >
              ES
            </span>
          </button>

          <Button size="sm" className="font-medium" asChild>
            <Link href="/docs">{t("nav.apiDocs")}</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}
