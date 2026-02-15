"use client"

import { User, GraduationCap, Code2 } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useLanguage } from "@/components/language-provider"

export function Founder() {
  const { t } = useLanguage()

  const highlights = [
    { icon: Code2, key: "founder.highlight.1" },
    { icon: GraduationCap, key: "founder.highlight.2" },
    { icon: User, key: "founder.highlight.3" },
  ]

  return (
    <section id="founder" className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
      <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-20">
        {/* Left column */}
        <ScrollReveal className="lg:w-2/5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
            {t("founder.label")}
          </p>
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
            {t("founder.heading")}
          </h2>
        </ScrollReveal>

        {/* Right column */}
        <ScrollReveal delay={0.15} className="flex flex-col gap-8 lg:w-3/5">
          <p className="text-pretty leading-relaxed text-muted-foreground">
            {t("founder.text")}
          </p>

          <div className="flex flex-col gap-6">
            {highlights.map((item, idx) => (
              <ScrollReveal key={item.key} delay={0.2 + idx * 0.1}>
                <div className="group flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary group-hover:animate-icon-pulse" />
                  </div>
                  <p className="pt-2 leading-relaxed text-foreground">
                    {t(item.key)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
