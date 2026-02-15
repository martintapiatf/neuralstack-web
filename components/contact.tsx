"use client"

import { useState, useRef, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/components/language-provider"

type FormStatus = "idle" | "loading" | "success" | "error"

export function Contact() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const formRef = useRef<HTMLFormElement>(null)
  const { t } = useLanguage()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormStatus("loading")
    setErrorMessage("")

    const formData = new FormData(e.currentTarget)
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || "Request failed")
      }

      setFormStatus("success")
      formRef.current?.reset()
    } catch (err) {
      setFormStatus("error")
      setErrorMessage(
        err instanceof Error ? err.message : t("contact.error.text")
      )
    }
  }

  function handleReset() {
    setFormStatus("idle")
    setErrorMessage("")
  }

  const isLoading = formStatus === "loading"

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-2xl">
        <ScrollReveal>
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              {t("contact.label")}
            </p>
            <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
              {t("contact.heading")}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
              {t("contact.subheading")}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm md:p-10">
            <AnimatePresence mode="wait">
              {formStatus !== "success" ? (
                <motion.form
                  ref={formRef}
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground"
                    >
                      {t("contact.name")}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      disabled={isLoading}
                      placeholder={t("contact.name.placeholder")}
                      className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      {t("contact.email")}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      disabled={isLoading}
                      placeholder={t("contact.email.placeholder")}
                      className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      {t("contact.message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      disabled={isLoading}
                      rows={5}
                      placeholder={t("contact.message.placeholder")}
                      className="resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm leading-relaxed text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  {/* Error Feedback — Risograph style */}
                  <AnimatePresence>
                    {formStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="riso-grain flex items-start gap-3 rounded-lg border-2 border-destructive/30 bg-destructive/5 px-4 py-3.5">
                          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                          <div className="flex flex-col gap-1">
                            <p className="font-mono text-xs font-bold uppercase tracking-wider text-destructive">
                              {t("contact.error.title")}
                            </p>
                            <p className="text-sm leading-relaxed text-foreground/70">
                              {errorMessage || t("contact.error.text")}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                    className="mt-2 w-full gap-2 font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:pointer-events-none disabled:opacity-60"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        {t("contact.sending")}
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        {t("contact.submit")}
                      </>
                    )}
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                  className="flex flex-col items-center gap-5 py-10 text-center"
                >
                  {/* Success badge — Risograph grain + palette */}
                  <div className="riso-grain flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-primary/30 bg-primary/10">
                    <CheckCircle2 className="h-9 w-9 text-primary" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
                      {t("contact.success.label")}
                    </p>
                    <h3 className="text-xl font-bold text-foreground">
                      {t("contact.success.title")}
                    </h3>
                  </div>

                  <p className="max-w-sm leading-relaxed text-muted-foreground">
                    {t("contact.success.text")}
                  </p>

                  <Button
                    variant="outline"
                    className="mt-2 border-foreground/20 font-semibold text-foreground transition-all duration-300 hover:scale-105 hover:bg-foreground/5 hover:text-foreground"
                    onClick={handleReset}
                  >
                    {t("contact.success.another")}
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
