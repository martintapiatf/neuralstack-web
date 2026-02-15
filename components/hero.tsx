"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useLanguage } from "@/components/language-provider"

const codeLines = [
  { text: "POST /v1/lexai/compliance HTTP/1.1", delay: 0 },
  { text: "Host: api.neuralstack.dev", delay: 600 },
  { text: "Authorization: Bearer ns_live_****", delay: 1200 },
  { text: "Content-Type: application/json", delay: 1800 },
  { text: "", delay: 2400 },
  { text: "{", delay: 2600 },
  { text: '  "model": "lexai-eu-v2",', delay: 3000 },
  { text: '  "document": "contract_2024.pdf",', delay: 3500 },
  { text: '  "regulation": "eu-ai-act",', delay: 4000 },
  { text: '  "audit_level": "comprehensive"', delay: 4500 },
  { text: "}", delay: 5000 },
  { text: "", delay: 5400 },
  { text: "// Response: 200 OK", delay: 5800 },
  { text: '// { "compliant": true, "score": 0.97 }', delay: 6400 },
]

function TypewriterCode() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []

    codeLines.forEach((line, index) => {
      const timer = setTimeout(() => {
        setVisibleLines(index + 1)
      }, line.delay)
      timers.push(timer)
    })

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className="relative">
      {/* Green glow behind the code container */}
      <div
        className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(76 39% 36% / 0.35), transparent 70%)",
        }}
      />

      <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-foreground/95 p-6 shadow-2xl">
        {/* Window chrome */}
        <div className="mb-4 flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-400/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <div className="h-3 w-3 rounded-full bg-green-400/80" />
          <span className="ml-3 font-mono text-xs text-white/30">
            neuralstack-api
          </span>
        </div>

        {/* Code lines */}
        <pre className="font-mono text-xs leading-6 text-white/80 md:text-sm md:leading-7">
          {codeLines.slice(0, visibleLines).map((line, i) => (
            <div key={i} className="flex">
              <span className="mr-4 inline-block w-5 select-none text-right text-white/20">
                {i + 1}
              </span>
              <span>
                {line.text.startsWith("//") ? (
                  <span className="text-green-400/70">{line.text}</span>
                ) : line.text.startsWith("POST") ? (
                  <>
                    <span className="font-semibold text-green-400">POST</span>
                    <span className="text-white/60">
                      {line.text.slice(4)}
                    </span>
                  </>
                ) : line.text.includes(":") &&
                  !line.text.startsWith("{") &&
                  !line.text.startsWith("}") &&
                  !line.text.startsWith(" ") ? (
                  <>
                    <span className="text-blue-300">
                      {line.text.split(":")[0]}
                    </span>
                    <span className="text-white/50">
                      :{line.text.split(":").slice(1).join(":")}
                    </span>
                  </>
                ) : line.text.includes('"') && line.text.includes(":") ? (
                  <>
                    <span className="text-blue-300">
                      {line.text.split(":")[0]}
                    </span>
                    <span className="text-white/50">:</span>
                    <span className="text-amber-300">
                      {line.text.split(":").slice(1).join(":")}
                    </span>
                  </>
                ) : (
                  <span className="text-white/70">{line.text}</span>
                )}
              </span>
            </div>
          ))}
          {visibleLines < codeLines.length && (
            <div className="flex">
              <span className="mr-4 inline-block w-5 select-none text-right text-white/20">
                {visibleLines + 1}
              </span>
              <span className="animate-blink inline-block h-4 w-2 bg-green-400" />
            </div>
          )}
        </pre>
      </div>
    </div>
  )
}

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Left Side */}
        <ScrollReveal className="flex flex-col items-start gap-6 lg:w-[60%]">
          <Badge
            variant="secondary"
            className="border-secondary/60 bg-secondary/30 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-foreground"
          >
            {t("hero.badge")}
          </Badge>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {t("hero.title")}
          </h1>

          <p className="max-w-lg text-pretty leading-relaxed text-muted-foreground">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button
              size="lg"
              className="gap-2 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              {t("hero.cta.start")}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-foreground/20 font-semibold text-foreground transition-all duration-300 hover:scale-105 hover:bg-foreground/5 hover:text-foreground hover:shadow-lg"
            >
              {t("hero.cta.projects")}
            </Button>
          </div>
        </ScrollReveal>

        {/* Right Side — Typewriter Code Preview */}
        <ScrollReveal delay={0.2} className="w-full lg:w-[40%]">
          <TypewriterCode />
        </ScrollReveal>
      </div>
    </section>
  )
}
