"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowLeft,
  Copy,
  Check,
  Globe,
  Cpu,
  Shield,
  AlertTriangle,
  Zap,
  Leaf,
  Menu,
  X,
  Search,
  Key,
  UserCheck,
  Scale,
  ArrowRight,
} from "lucide-react"
import { LanguageProvider, useLanguage } from "@/components/language-provider"

type DocSection =
  | "welcome"
  | "authentication"
  | "errors"
  | "lexai"
  | "lcv"
  | "ecoledge"

/* ─── Code Block with Copy ─── */
function CodeBlock({
  code,
  language = "bash",
}: {
  code: string
  language?: string
}) {
  const [copied, setCopied] = useState(false)
  const { t } = useLanguage()

  async function handleCopy() {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group relative overflow-hidden rounded-lg border border-foreground/10 bg-[#1b263b]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <span className="font-mono text-xs text-white/40">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-white/50 transition-colors hover:bg-white/10 hover:text-white"
          type="button"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3 text-[#708238]" />
              <span className="text-[#708238]">{t("docs.copied")}</span>
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              <span>{t("docs.copy")}</span>
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-4">
        <code className="font-mono text-sm leading-relaxed text-white/90">
          {code}
        </code>
      </pre>
    </div>
  )
}

/* ─── Field Table ─── */
function FieldTable({
  fields,
}: {
  fields: {
    name: string
    type: string
    required: boolean
    description: string
  }[]
}) {
  const { t } = useLanguage()
  return (
    <div className="overflow-x-auto rounded-lg border border-foreground/10">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-foreground/10 bg-muted/50">
            <th className="px-4 py-3 font-semibold text-foreground">
              {t("docs.lexai.field")}
            </th>
            <th className="px-4 py-3 font-semibold text-foreground">
              {t("docs.lexai.type")}
            </th>
            <th className="px-4 py-3 font-semibold text-foreground">
              {t("docs.lexai.required")}
            </th>
            <th className="px-4 py-3 font-semibold text-foreground">
              {t("docs.lexai.fieldDesc")}
            </th>
          </tr>
        </thead>
        <tbody>
          {fields.map((f) => (
            <tr
              key={f.name}
              className="border-b border-foreground/5 last:border-0"
            >
              <td className="px-4 py-3 font-mono text-xs text-primary">
                {f.name}
              </td>
              <td className="px-4 py-3 font-mono text-xs text-foreground/70">
                {f.type}
              </td>
              <td className="px-4 py-3">
                {f.required ? (
                  <span className="rounded-full bg-primary/15 px-2 py-0.5 text-xs font-medium text-primary">
                    Yes
                  </span>
                ) : (
                  <span className="text-xs text-foreground/50">No</span>
                )}
              </td>
              <td className="px-4 py-3 text-sm text-foreground/80">
                {f.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ─── Quick Start Card ─── */
function QuickStartCard({
  icon: Icon,
  title,
  description,
  onClick,
}: {
  icon: React.ElementType
  title: string
  description: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex flex-col gap-3 rounded-xl border border-foreground/10 bg-card p-5 text-left transition-all hover:border-primary/30 hover:shadow-md"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h4 className="text-sm font-semibold text-foreground">{title}</h4>
        <p className="mt-1 text-xs leading-relaxed text-foreground/60">
          {description}
        </p>
      </div>
      <div className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
        <ArrowRight className="h-3 w-3" />
      </div>
    </button>
  )
}

/* ─── Section Components ─── */
function WelcomeSection({ onNavigate }: { onNavigate: (s: DocSection) => void }) {
  const { t } = useLanguage()
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground text-balance">
          {t("docs.welcome.title")}
        </h1>
        <p className="text-base leading-relaxed text-foreground/80">
          {t("docs.welcome.intro")}
        </p>
        <p className="text-base leading-relaxed text-foreground/80">
          {t("docs.welcome.getStarted")}
        </p>
      </div>

      {/* Quick Start Grid */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">
          {t("docs.welcome.quickStart")}
        </h2>
        <p className="text-sm text-foreground/60">
          {t("docs.welcome.quickStartDesc")}
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <QuickStartCard
            icon={Key}
            title={t("docs.welcome.qs.auth")}
            description={t("docs.welcome.qs.authDesc")}
            onClick={() => onNavigate("authentication")}
          />
          <QuickStartCard
            icon={UserCheck}
            title={t("docs.welcome.qs.lcv")}
            description={t("docs.welcome.qs.lcvDesc")}
            onClick={() => onNavigate("lcv")}
          />
          <QuickStartCard
            icon={Scale}
            title={t("docs.welcome.qs.lexai")}
            description={t("docs.welcome.qs.lexaiDesc")}
            onClick={() => onNavigate("lexai")}
          />
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground">
          {t("docs.welcome.baseUrl")}
        </h3>
        <p className="text-sm text-foreground/70">
          {t("docs.welcome.allRequests")}
        </p>
        <CodeBlock code="https://api.neuralstack.dev/v1" language="url" />
      </div>
    </div>
  )
}

function AuthSection() {
  const { t } = useLanguage()
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        {t("docs.auth.title")}
      </h1>
      <p className="text-base leading-relaxed text-foreground/80">
        {t("docs.auth.intro")}
      </p>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground">
          {t("docs.auth.headerFormat")}
        </h3>
        <CodeBlock
          code={"Authorization: Bearer YOUR_API_KEY"}
          language="http"
        />
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground">
          {t("docs.auth.obtaining")}
        </h3>
        <ol className="list-inside list-decimal space-y-2 text-sm leading-relaxed text-foreground/80">
          <li>{t("docs.auth.step1")}</li>
          <li>{t("docs.auth.step2")}</li>
          <li>{t("docs.auth.step3")}</li>
        </ol>
      </div>

      <div className="flex items-start gap-3 rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
        <p className="text-sm leading-relaxed text-foreground/80">
          {t("docs.auth.warning")}
        </p>
      </div>
    </div>
  )
}

function ErrorsSection() {
  const { t } = useLanguage()
  const errors = [
    {
      code: "400",
      meaning: t("docs.errors.400"),
      desc: t("docs.errors.400.desc"),
    },
    {
      code: "401",
      meaning: t("docs.errors.401"),
      desc: t("docs.errors.401.desc"),
    },
    {
      code: "403",
      meaning: t("docs.errors.403"),
      desc: t("docs.errors.403.desc"),
    },
    {
      code: "404",
      meaning: t("docs.errors.404"),
      desc: t("docs.errors.404.desc"),
    },
    {
      code: "429",
      meaning: t("docs.errors.429"),
      desc: t("docs.errors.429.desc"),
    },
    {
      code: "500",
      meaning: t("docs.errors.500"),
      desc: t("docs.errors.500.desc"),
    },
  ]
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        {t("docs.errors.title")}
      </h1>
      <p className="text-base leading-relaxed text-foreground/80">
        {t("docs.errors.intro")}
      </p>

      <div className="overflow-x-auto rounded-lg border border-foreground/10">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-foreground/10 bg-muted/50">
              <th className="px-4 py-3 font-semibold text-foreground">
                {t("docs.errors.code")}
              </th>
              <th className="px-4 py-3 font-semibold text-foreground">
                {t("docs.errors.meaning")}
              </th>
              <th className="px-4 py-3 font-semibold text-foreground">
                {t("docs.errors.description")}
              </th>
            </tr>
          </thead>
          <tbody>
            {errors.map((e) => (
              <tr
                key={e.code}
                className="border-b border-foreground/5 last:border-0"
              >
                <td className="px-4 py-3 font-mono text-xs font-bold text-primary">
                  {e.code}
                </td>
                <td className="px-4 py-3 font-medium text-foreground">
                  {e.meaning}
                </td>
                <td className="px-4 py-3 text-foreground/80">{e.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground">
          {t("docs.errors.exampleResponse")}
        </h3>
        <CodeBlock
          code={`{
  "error": {
    "code": 401,
    "message": "Invalid API key",
    "details": "The provided Bearer token is expired or malformed."
  }
}`}
          language="json"
        />
      </div>
    </div>
  )
}

function LexaiSection() {
  const { t } = useLanguage()
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        {t("docs.lexai.title")}
      </h1>
      <p className="text-base leading-relaxed text-foreground/80">
        {t("docs.lexai.intro")}
      </p>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground">
          {t("docs.lexai.endpoint")}
        </h3>
        <CodeBlock code="POST /v1/lexai/compliance" language="http" />
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground">
          {t("docs.lexai.requestBody")}
        </h3>
        <FieldTable
          fields={[
            {
              name: "system_name",
              type: "string",
              required: true,
              description: t("docs.lexai.systemName"),
            },
            {
              name: "system_type",
              type: "string",
              required: true,
              description: t("docs.lexai.systemType"),
            },
            {
              name: "region",
              type: "string",
              required: true,
              description: t("docs.lexai.region"),
            },
            {
              name: "data_categories",
              type: "string[]",
              required: true,
              description: t("docs.lexai.dataCategories"),
            },
          ]}
        />
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground">
          {t("docs.lexai.exampleRequest")}
        </h3>
        <CodeBlock
          code={`curl -X POST https://api.neuralstack.dev/v1/lexai/compliance \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "system_name": "recruitment-ai-v2",
    "system_type": "classification",
    "region": "eu",
    "data_categories": ["personal", "biometric"]
  }'`}
          language="bash"
        />
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground">
          {t("docs.lexai.exampleResponse")}
        </h3>
        <CodeBlock
          code={`{
  "audit_id": "lex_a8f2k9d1",
  "system_name": "recruitment-ai-v2",
  "risk_level": "high",
  "risk_score": 78,
  "eu_ai_act_article": "Article 6(2)",
  "classification": "High-Risk AI System",
  "requirements": [
    "Conformity assessment required",
    "Human oversight mandatory",
    "Technical documentation must be maintained",
    "Registration in EU database required"
  ],
  "compliance_status": "non_compliant",
  "remediation_steps": [
    "Implement human-in-the-loop review process",
    "Complete data protection impact assessment",
    "Register system in EU AI database"
  ],
  "timestamp": "2026-02-15T14:30:00Z"
}`}
          language="json"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">
          {t("docs.lexai.riskLevels")}
        </h3>
        <p className="text-sm leading-relaxed text-foreground/80">
          {t("docs.lexai.riskLevelsDesc")}
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              level: t("docs.lexai.unacceptable"),
              desc: t("docs.lexai.unacceptableDesc"),
              color:
                "bg-red-500/10 text-red-700 border-red-500/20",
            },
            {
              level: t("docs.lexai.high"),
              desc: t("docs.lexai.highDesc"),
              color:
                "bg-orange-500/10 text-orange-700 border-orange-500/20",
            },
            {
              level: t("docs.lexai.limited"),
              desc: t("docs.lexai.limitedDesc"),
              color:
                "bg-amber-500/10 text-amber-700 border-amber-500/20",
            },
            {
              level: t("docs.lexai.minimal"),
              desc: t("docs.lexai.minimalDesc"),
              color:
                "bg-primary/10 text-primary border-primary/20",
            },
          ].map((r) => (
            <div
              key={r.level}
              className={`rounded-lg border p-4 ${r.color}`}
            >
              <p className="font-semibold">{r.level}</p>
              <p className="mt-1 text-sm opacity-80">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function LcvSection() {
  const { t } = useLanguage()
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        {t("docs.lcv.title")}
      </h1>
      <p className="text-base leading-relaxed text-foreground/80">
        {t("docs.lcv.intro")}
      </p>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground">
          {t("docs.lcv.endpoint")}
        </h3>
        <CodeBlock code="POST /v1/lcv/validate" language="http" />
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground">
          {t("docs.lcv.requestBody")}
        </h3>
        <FieldTable
          fields={[
            {
              name: "email",
              type: "string",
              required: true,
              description: t("docs.lcv.email"),
            },
            {
              name: "phone",
              type: "string",
              required: true,
              description: t("docs.lcv.phone"),
            },
            {
              name: "company_domain",
              type: "string",
              required: false,
              description: t("docs.lcv.companyDomain"),
            },
          ]}
        />
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground">
          {t("docs.lcv.exampleRequest")}
        </h3>
        <CodeBlock
          code={`curl -X POST https://api.neuralstack.dev/v1/lcv/validate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "maria.garcia@techcorp.eu",
    "phone": "+5491155551234",
    "company_domain": "techcorp.eu"
  }'`}
          language="bash"
        />
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground">
          {t("docs.lcv.exampleResponse")}
        </h3>
        <CodeBlock
          code={`{
  "validation_id": "lcv_x7m3p2q9",
  "email": {
    "address": "maria.garcia@techcorp.eu",
    "valid_syntax": true,
    "mx_record_found": true,
    "mx_host": "mx1.techcorp.eu",
    "disposable": false,
    "corporate_match": true
  },
  "phone": {
    "number": "+5491155551234",
    "e164_valid": true,
    "country_code": "AR",
    "carrier": "Movistar",
    "line_type": "mobile"
  },
  "lead_score": 94,
  "recommendation": "high_quality",
  "latency_ms": 47
}`}
          language="json"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">
          {t("docs.lcv.mxExplain")}
        </h3>
        <p className="text-sm leading-relaxed text-foreground/80">
          {t("docs.lcv.mxExplainDesc")}
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">
          {t("docs.lcv.e164Explain")}
        </h3>
        <p className="text-sm leading-relaxed text-foreground/80">
          {t("docs.lcv.e164ExplainDesc")}
        </p>
        <CodeBlock
          code={"+[country code][subscriber number]\n+5491155551234  →  AR mobile\n+442079460958   →  UK landline\n+14155552671    →  US mobile"}
          language="text"
        />
      </div>
    </div>
  )
}

function EcoledgeSection() {
  const { t } = useLanguage()
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        {t("docs.ecoledge.title")}
      </h1>
      <p className="text-base leading-relaxed text-foreground/80">
        {t("docs.ecoledge.intro")}
      </p>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground">
          {t("docs.ecoledge.endpoint")}
        </h3>
        <CodeBlock code="POST /v1/ecoledge/audit" language="http" />
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground">
          {t("docs.ecoledge.requestBody")}
        </h3>
        <FieldTable
          fields={[
            {
              name: "company_name",
              type: "string",
              required: true,
              description: t("docs.ecoledge.companyName"),
            },
            {
              name: "infrastructure_type",
              type: "string",
              required: true,
              description: t("docs.ecoledge.infraType"),
            },
            {
              name: "services",
              type: "object[]",
              required: true,
              description: t("docs.ecoledge.services"),
            },
            {
              name: "audit_period",
              type: "string",
              required: true,
              description: t("docs.ecoledge.period"),
            },
          ]}
        />
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground">
          {t("docs.ecoledge.exampleRequest")}
        </h3>
        <CodeBlock
          code={`curl -X POST https://api.neuralstack.dev/v1/ecoledge/audit \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "company_name": "GreenOps Inc.",
    "infrastructure_type": "cloud",
    "services": [
      { "provider": "AWS", "type": "compute", "region": "eu-west-1" },
      { "provider": "Vercel", "type": "edge", "region": "global" },
      { "provider": "Supabase", "type": "database", "region": "eu-central-1" }
    ],
    "audit_period": "quarterly"
  }'`}
          language="bash"
        />
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground">
          {t("docs.ecoledge.exampleResponse")}
        </h3>
        <CodeBlock
          code={`{
  "audit_id": "eco_k4n8v2w1",
  "company_name": "GreenOps Inc.",
  "period": "Q1 2026",
  "sustainability_score": 72,
  "total_co2_kg": 1847.3,
  "breakdown": [
    {
      "service": "AWS Compute (eu-west-1)",
      "co2_kg": 1203.5,
      "energy_kwh": 4812.0,
      "grid_source": "Ireland - 30% renewable"
    },
    {
      "service": "Vercel Edge (global)",
      "co2_kg": 89.2,
      "energy_kwh": 356.8,
      "grid_source": "Multi-region - 65% renewable avg"
    },
    {
      "service": "Supabase DB (eu-central-1)",
      "co2_kg": 554.6,
      "energy_kwh": 2218.4,
      "grid_source": "Frankfurt - 45% renewable"
    }
  ],
  "recommendations": [
    "Migrate compute to eu-north-1 (Sweden, 98% renewable grid)",
    "Enable auto-scaling to reduce idle compute waste",
    "Consolidate database queries to reduce active connection time"
  ]
}`}
          language="json"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">
          {t("docs.ecoledge.model")}
        </h3>
        <p className="text-sm leading-relaxed text-foreground/80">
          {t("docs.ecoledge.modelDesc")}
        </p>
      </div>
    </div>
  )
}

/* ─── Sidebar Navigation Data ─── */
const sidebarGroups = [
  {
    categoryKey: "docs.sidebar.introduction",
    items: [
      { key: "welcome" as DocSection, labelKey: "docs.sidebar.welcome", icon: Cpu },
      { key: "authentication" as DocSection, labelKey: "docs.sidebar.authentication", icon: Key },
      { key: "errors" as DocSection, labelKey: "docs.sidebar.errorCodes", icon: AlertTriangle },
    ],
  },
  {
    categoryKey: "docs.sidebar.apis",
    items: [
      { key: "lexai" as DocSection, labelKey: "docs.sidebar.lexai", icon: Shield },
      { key: "lcv" as DocSection, labelKey: "docs.sidebar.lcv", icon: UserCheck },
    ],
  },
  {
    categoryKey: "docs.sidebar.saas",
    items: [
      { key: "ecoledge" as DocSection, labelKey: "docs.sidebar.ecoledge", icon: Leaf },
    ],
  },
]

/* ─── Static Sidebar ─── */
function DocsSidebar({
  activeSection,
  onSelect,
}: {
  activeSection: DocSection
  onSelect: (s: DocSection) => void
}) {
  const { t } = useLanguage()

  return (
    <div className="flex h-full flex-col">
      {/* Search Input */}
      <div className="px-4 pb-2 pt-5">
        <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
          <Search className="h-4 w-4 shrink-0 text-white/30" />
          <input
            type="text"
            placeholder={t("docs.sidebar.search")}
            className="w-full bg-transparent text-sm text-[#e1d3c1] placeholder-white/30 outline-none"
            aria-label="Search documentation"
          />
        </div>
      </div>

      {/* Navigation - always expanded */}
      <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Documentation navigation">
        {sidebarGroups.map((group) => (
          <div key={group.categoryKey} className="mb-6">
            {/* Category label — uppercase small caps, muted */}
            <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-widest text-white/35">
              {t(group.categoryKey)}
            </p>

            <div className="flex flex-col gap-0.5">
              {group.items.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.key
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => onSelect(item.key)}
                    className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-all ${
                      isActive
                        ? "bg-[#708238]/20 font-semibold text-[#a3b18a]"
                        : "text-[#e1d3c1]/70 hover:bg-white/5 hover:text-[#e1d3c1]"
                    }`}
                  >
                    <Icon
                      className={`h-4 w-4 shrink-0 ${
                        isActive ? "text-[#708238]" : "text-white/30"
                      }`}
                    />
                    <span>{t(item.labelKey)}</span>
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Sidebar Footer */}
      <div className="border-t border-white/10 px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white/5">
            <Cpu className="h-3 w-3 text-[#708238]" />
          </div>
          <p className="text-[11px] font-semibold leading-tight text-[#e1d3c1]/80">
            NeuralStack
          </p>
        </div>
      </div>
    </div>
  )
}

/* ─── Main Docs Layout ─── */
function DocsContent() {
  const { locale, setLocale, t } = useLanguage()
  const [activeSection, setActiveSection] = useState<DocSection>("welcome")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  function handleSelect(section: DocSection) {
    setActiveSection(section)
    setMobileMenuOpen(false)
  }

  const sectionComponents: Record<DocSection, React.ReactNode> = {
    welcome: <WelcomeSection onNavigate={handleSelect} />,
    authentication: <AuthSection />,
    errors: <ErrorsSection />,
    lexai: <LexaiSection />,
    lcv: <LcvSection />,
    ecoledge: <EcoledgeSection />,
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/95 backdrop-blur">
        <div className="flex h-14 items-center justify-between px-4 lg:px-6">
          <div className="flex items-center gap-3">
            {/* Mobile menu toggle — only visible below md */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-md p-1.5 text-foreground/70 transition-colors hover:bg-muted md:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>

            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">{t("docs.backHome")}</span>
            </Link>

            <span className="text-foreground/20">|</span>

            <div className="flex items-center gap-2">
              <Cpu className="h-4 w-4 text-primary" />
              <span className="text-sm font-bold text-foreground">
                NeuralStack
              </span>
              <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                {t("docs.title")}
              </span>
            </div>
          </div>

          {/* Language Toggle */}
          <button
            type="button"
            onClick={() => setLocale(locale === "en" ? "es" : "en")}
            className="flex items-center gap-1.5 rounded-lg border border-foreground/10 px-2.5 py-1.5 text-xs font-semibold transition-colors hover:bg-muted"
            aria-label={
              locale === "en" ? "Switch to Spanish" : "Cambiar a Ingles"
            }
          >
            <Globe className="h-3.5 w-3.5 text-foreground/70" />
            <span
              className={
                locale === "en" ? "text-primary" : "text-foreground/60"
              }
            >
              EN
            </span>
            <span className="text-foreground/30">/</span>
            <span
              className={
                locale === "es" ? "text-primary" : "text-foreground/60"
              }
            >
              ES
            </span>
          </button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Desktop Sidebar — fixed 280px, visible from md upward */}
        <aside className="hidden w-[280px] shrink-0 border-r border-white/10 bg-[#1b263b] md:block">
          <div className="sticky top-14 h-[calc(100vh-3.5rem)]">
            <DocsSidebar
              activeSection={activeSection}
              onSelect={handleSelect}
            />
          </div>
        </aside>

        {/* Mobile Drawer Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
                onClick={() => setMobileMenuOpen(false)}
              />
              <motion.aside
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
                transition={{ type: "spring", damping: 28, stiffness: 300 }}
                className="fixed left-0 top-14 z-50 h-[calc(100vh-3.5rem)] w-[280px] bg-[#1b263b] shadow-2xl md:hidden"
              >
                <DocsSidebar
                  activeSection={activeSection}
                  onSelect={handleSelect}
                />
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* Content Area */}
        <div className="flex-1 overflow-x-hidden">
          <div className="mx-auto max-w-3xl px-6 py-10 lg:px-10 lg:py-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                {sectionComponents[activeSection]}
              </motion.div>
            </AnimatePresence>

            {/* Footer note */}
            <div className="mt-16 border-t border-foreground/10 pt-6">
              <p className="text-center text-xs leading-relaxed text-foreground/50">
                {t("docs.maintained")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Page Wrapper ─── */
export default function DocsPage() {
  return (
    <LanguageProvider>
      <DocsContent />
    </LanguageProvider>
  )
}
