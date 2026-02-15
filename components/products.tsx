"use client"

import { useRef, type MouseEvent as ReactMouseEvent } from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck, MailCheck, Leaf } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useLanguage } from "@/components/language-provider"

function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: ReactMouseEvent<HTMLDivElement>) {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -4
    const rotateY = ((x - centerX) / centerX) * 4
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
  }

  function handleMouseLeave() {
    const card = cardRef.current
    if (!card) return
    card.style.transform =
      "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transition: "transform 0.3s ease-out",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  )
}

export function Products() {
  const { t } = useLanguage()

  const products = [
    {
      nameKey: "products.lexai.name",
      badge: "Flagship",
      descKey: "products.lexai.description",
      detailsKey: "products.lexai.details",
      icon: ShieldCheck,
      highlight: true,
    },
    {
      nameKey: "products.lcv.name",
      badge: "API",
      descKey: "products.lcv.description",
      detailsKey: "products.lcv.details",
      icon: MailCheck,
      highlight: false,
    },
    {
      nameKey: "products.ecoledge.name",
      badge: "SaaS",
      descKey: "products.ecoledge.description",
      detailsKey: "products.ecoledge.details",
      icon: Leaf,
      highlight: false,
    },
  ]

  return (
    <section id="products" className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
      <ScrollReveal>
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
            {t("products.label")}
          </p>
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
            {t("products.heading")}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {t("products.subheading")}
          </p>
        </div>
      </ScrollReveal>

      {/* Bento Grid */}
      <div className="grid gap-5 md:grid-cols-2">
        {/* LexAI Flagship */}
        <ScrollReveal delay={0.1} className="md:col-span-2">
          <TiltCard className="group">
            <Card className="border-primary/20 transition-shadow duration-300 hover:shadow-xl">
              <CardHeader className="flex flex-row items-start gap-5 p-8">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <ShieldCheck className="h-7 w-7 text-primary group-hover:animate-icon-pulse" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <CardTitle className="text-xl">
                      {t(products[0].nameKey)}
                    </CardTitle>
                    <Badge className="bg-primary text-primary-foreground">
                      {products[0].badge}
                    </Badge>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {t(products[0].detailsKey)}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <div className="rounded-lg border border-primary/10 bg-primary/5 px-5 py-4">
                  <p className="font-medium text-foreground">
                    {t(products[0].descKey)}
                  </p>
                </div>
              </CardContent>
            </Card>
          </TiltCard>
        </ScrollReveal>

        {/* LCV and EcoLedge */}
        {products.slice(1).map((product, idx) => (
          <ScrollReveal key={product.nameKey} delay={0.15 + idx * 0.1}>
            <TiltCard className="group h-full">
              <Card className="flex h-full flex-col transition-shadow duration-300 hover:shadow-xl">
                <CardHeader className="flex flex-row items-start gap-4 p-8">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/20">
                    <product.icon className="h-6 w-6 text-foreground group-hover:animate-icon-pulse" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <CardTitle className="text-lg">
                        {t(product.nameKey)}
                      </CardTitle>
                      <Badge variant="outline" className="text-foreground">
                        {product.badge}
                      </Badge>
                    </div>
                    <CardDescription className="leading-relaxed">
                      {t(product.detailsKey)}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="mt-auto px-8 pb-8">
                  <div className="rounded-lg border border-border bg-muted/50 px-5 py-4">
                    <p className="text-sm font-medium text-foreground">
                      {t(product.descKey)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
