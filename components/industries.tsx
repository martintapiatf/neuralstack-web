"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { useLanguage } from "@/components/language-provider"

const industryKeys = [
  "industries.greentech",
  "industries.saas",
  "industries.fintech",
  "industries.compliance",
]

function MarqueeRow({
  reverse = false,
  items,
}: {
  reverse?: boolean
  items: string[]
}) {
  return (
    <div
      className="flex shrink-0 gap-8"
      style={{
        animation: `marquee 20s linear infinite${reverse ? " reverse" : ""}`,
      }}
    >
      {Array.from({ length: 4 })
        .flatMap(() => items)
        .map((industry, i) => (
          <span
            key={`${industry}-${i}`}
            className="whitespace-nowrap text-lg font-bold tracking-tight text-foreground/80 md:text-2xl"
          >
            {industry}
            <span className="ml-8 text-primary/40" aria-hidden="true">
              /
            </span>
          </span>
        ))}
    </div>
  )
}

export function Industries() {
  const { t } = useLanguage()

  const industries = industryKeys.map((key) => t(key))

  return (
    <section className="overflow-hidden py-16 lg:py-20">
      <ScrollReveal>
        <div className="mx-auto mb-10 max-w-7xl px-6 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
            {t("industries.label")}
          </p>
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
            {t("industries.heading")}
          </h2>
        </div>
      </ScrollReveal>

      <div className="flex flex-col gap-4">
        <div className="flex overflow-hidden">
          <MarqueeRow items={industries} />
        </div>
        <div className="flex overflow-hidden">
          <MarqueeRow reverse items={industries} />
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}
