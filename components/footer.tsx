"use client"

import Link from "next/link"
import { Cpu } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t } = useLanguage()

  const productLinks = [
    { labelKey: "products.lexai.name", href: "#products" },
    { labelKey: "products.lcv.name", href: "#products" },
    { labelKey: "products.ecoledge.name", href: "#products" },
  ]

  const resourceLinks = [
    { labelKey: "footer.apiDocs", href: "#" },
    { labelKey: "footer.privacy", href: "#" },
    { label: "LinkedIn", href: "https://linkedin.com", external: true },
  ]

  return (
    <footer className="border-t border-foreground/10 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        {/* Three-column grid */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* Column 1 -- Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Cpu className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold tracking-tight text-foreground">
                NeuralStack
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Column 2 -- Product */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground">
              {t("footer.product")}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {productLinks.map((link) => (
                <li key={link.labelKey}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 -- Resources */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground">
              {t("footer.resources")}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {resourceLinks.map((link) => (
                <li key={"labelKey" in link ? link.labelKey : link.label}>
                  <Link
                    href={link.href}
                    {...("external" in link && link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {"labelKey" in link ? t(link.labelKey) : link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center gap-3 border-t border-foreground/5 pt-8 text-center">
          <p className="text-xs leading-relaxed text-muted-foreground">
            {t("footer.utdt")}
          </p>
          <p className="text-xs text-muted-foreground">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}
