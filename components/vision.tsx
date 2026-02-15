"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { useLanguage } from "@/components/language-provider"

export function Vision() {
  const { t } = useLanguage()

  return (
    <section id="about" className="border-t border-border/50 bg-card">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:py-28">
        <ScrollReveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
            {t("vision.label")}
          </p>
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
            {t("vision.heading")}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            {t("vision.text")}
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
