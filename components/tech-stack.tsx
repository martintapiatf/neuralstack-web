"use client"

import { Globe, Shield, Server } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useLanguage } from "@/components/language-provider"

export function TechStack() {
  const { t } = useLanguage()

  const stack = [
    {
      icon: Globe,
      name: "Next.js",
      roleKey: "tech.nextjs.role",
      descKey: "tech.nextjs.desc",
    },
    {
      icon: Server,
      name: "Railway",
      roleKey: "tech.railway.role",
      descKey: "tech.railway.desc",
    },
    {
      icon: Shield,
      name: "Supabase",
      roleKey: "tech.supabase.role",
      descKey: "tech.supabase.desc",
    },
  ]

  return (
    <section className="border-t border-border/50 bg-card">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <ScrollReveal>
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              {t("tech.label")}
            </p>
            <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
              {t("tech.heading")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              {t("tech.subheading")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {stack.map((item, idx) => (
            <ScrollReveal key={item.name} delay={0.1 + idx * 0.1}>
              <div className="group flex flex-col items-center gap-4 rounded-2xl border border-border/60 bg-background p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-7 w-7 text-primary group-hover:animate-icon-pulse" />
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground">
                    {item.name}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-primary">
                    {t(item.roleKey)}
                  </p>
                </div>
                <p className="leading-relaxed text-muted-foreground">
                  {t(item.descKey)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
