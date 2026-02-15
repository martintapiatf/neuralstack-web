"use client"

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react"

export type Locale = "en" | "es"

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const translations: Record<Locale, Record<string, string>> = {
  en: {
    // Navbar
    "nav.products": "Products",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.apiDocs": "API Docs",

    // Hero
    "hero.badge": "Intelligence Infrastructure",
    "hero.title": "Deploy AI with Confidence and Full Compliance",
    "hero.subtitle":
      "NeuralStack provides scalable, enterprise-grade APIs that let your team integrate intelligent capabilities into any product — with built-in governance and regulatory compliance from day one.",
    "hero.cta.start": "Get Started",
    "hero.cta.projects": "View Projects",

    // Products
    "products.label": "Our Solutions",
    "products.heading": "Three Products. One Intelligent Platform.",
    "products.subheading":
      "Each product is purpose-built to solve critical business challenges with AI-first architecture and full regulatory awareness.",
    "products.lexai.name": "LexAI Compliance Gateway",
    "products.lexai.description":
      "Secure your competitive edge in Europe with automated regulatory compliance.",
    "products.lexai.details":
      "Automated EU AI Act auditing, risk scoring, and regulatory compliance logs. Enterprise-ready governance for every AI deployment.",
    "products.lcv.name": "Lead Capture Validator",
    "products.lcv.description":
      "Eliminate noise in your sales funnel with instant validation.",
    "products.lcv.details":
      "Real-time API for email syntax validation, MX record checks, and international phone number verification.",
    "products.ecoledge.name": "EcoLedge AI",
    "products.ecoledge.description":
      "Data-driven decisions for a sustainable business future.",
    "products.ecoledge.details":
      "Sustainability management and energy auditing platform for green tech operations. Track, report, and optimize your carbon footprint.",

    // Vision
    "vision.label": "Our Vision",
    "vision.heading":
      "Making AI Invisible, Secure, and Universally Accessible",
    "vision.text":
      "At NeuralStack, we believe the most powerful AI is the kind you never have to think about. Our mission is to build infrastructure so reliable, so secure, and so deeply integrated that intelligence becomes a seamless layer of every product — invisible to the end user, indispensable to the business.",

    // Founder
    "founder.label": "Behind the Stack",
    "founder.heading": "Built by Someone Who Understands the Problem",
    "founder.text":
      "NeuralStack was founded with a clear conviction: AI infrastructure should empower teams, not burden them. Every product we build reflects a deep understanding of the gap between cutting-edge AI research and real-world enterprise needs.",
    "founder.highlight.1":
      "Specialist in scalable AI solutions and enterprise-grade API development.",
    "founder.highlight.2":
      "Currently studying at Universidad Torcuato Di Tella.",
    "founder.highlight.3":
      "Focused on building AI infrastructure that is invisible, secure, and enterprise-ready.",

    // Tech Stack
    "tech.label": "Infrastructure",
    "tech.heading": "Enterprise Stack, Startup Speed",
    "tech.subheading":
      "Every layer of NeuralStack is built on proven, scalable technologies — chosen for reliability, security, and developer experience.",
    "tech.nextjs.role": "Application Framework",
    "tech.nextjs.desc":
      "Server-rendered React framework powering all NeuralStack interfaces with edge-optimized performance.",
    "tech.railway.role": "Cloud Deployment",
    "tech.railway.desc":
      "Zero-config deployments with auto-scaling infrastructure, ensuring 99.9% uptime for all API services.",
    "tech.supabase.role": "Security & Database",
    "tech.supabase.desc":
      "Row-level security, real-time database, and authentication — the backbone of our data protection layer.",

    // Industries
    "industries.label": "Industries We Serve",
    "industries.heading":
      "Purpose-Built for Regulated, High-Impact Sectors",
    "industries.greentech": "Green Tech",
    "industries.saas": "Enterprise SaaS",
    "industries.fintech": "Fintech",
    "industries.compliance": "Regulatory Compliance",

    // Contact
    "contact.label": "Get in Touch",
    "contact.heading": "Ready to Secure your AI Stack?",
    "contact.subheading":
      "Let's talk about how our APIs can optimize your infrastructure.",
    "contact.name": "Name",
    "contact.name.placeholder": "Your full name",
    "contact.email": "Email",
    "contact.email.placeholder": "you@company.com",
    "contact.message": "Message",
    "contact.message.placeholder": "Tell us about your project or question...",
    "contact.submit": "Send Message",
    "contact.sending": "Sending...",
    "contact.error.title": "// Error",
    "contact.error.text":
      "We couldn't send your message. Please check your connection and try again.",
    "contact.success.label": "// Status: 200 OK",
    "contact.success.title": "Message Received",
    "contact.success.text":
      "Thank you for reaching out to NeuralStack. Our team will review your message and get back to you within 24 hours.",
    "contact.success.another": "Send Another Message",

    // Docs
    "docs.title": "Documentation",
    "docs.backHome": "Back to Home",
    "docs.copied": "Copied!",
    "docs.copy": "Copy",
    "docs.maintained": "Documentation maintained by the NeuralStack team | Student at Universidad Torcuato Di Tella",
    "docs.sidebar.introduction": "Introduction",
    "docs.sidebar.welcome": "Welcome",
    "docs.sidebar.authentication": "Authentication",
    "docs.sidebar.errorCodes": "Error Codes",
    "docs.sidebar.apis": "APIs",
    "docs.sidebar.lexai": "LexAI Compliance",
    "docs.sidebar.lcv": "Lead Capture Validator",
    "docs.sidebar.saas": "SaaS",
    "docs.sidebar.ecoledge": "EcoLedge AI",
    "docs.welcome.title": "Welcome to NeuralStack Docs",
    "docs.welcome.intro": "NeuralStack provides enterprise-grade AI infrastructure through three core products. This documentation covers authentication, API endpoints, request/response formats, and integration guides for each service.",
    "docs.welcome.getStarted": "Get started by authenticating your requests, then explore the API references for LexAI Compliance, Lead Capture Validator (LCV), or EcoLedge AI.",
    "docs.welcome.quickStart": "Quick Start",
    "docs.welcome.quickStartDesc": "Jump straight into the essentials:",
    "docs.welcome.qs.auth": "Set up API Key",
    "docs.welcome.qs.authDesc": "Configure authentication and get your Bearer token.",
    "docs.welcome.qs.lcv": "Validate your first Lead",
    "docs.welcome.qs.lcvDesc": "Send your first email and phone validation request via LCV.",
    "docs.welcome.qs.lexai": "Check EU AI Act compliance",
    "docs.welcome.qs.lexaiDesc": "Run a risk audit on your AI system with LexAI.",
    "docs.sidebar.search": "Search docs...",
    "docs.welcome.baseUrl": "Base URL",
    "docs.welcome.allRequests": "All API requests should be made to:",
    "docs.auth.title": "Authentication",
    "docs.auth.intro": "All NeuralStack API endpoints require authentication via Bearer tokens. Include your API key in the Authorization header of every request.",
    "docs.auth.headerFormat": "Header Format",
    "docs.auth.obtaining": "Obtaining Your API Key",
    "docs.auth.step1": "Sign in to your NeuralStack dashboard.",
    "docs.auth.step2": "Navigate to Settings > API Keys.",
    "docs.auth.step3": "Click Generate New Key and store it securely.",
    "docs.auth.warning": "Never expose your API key in client-side code. Always make API calls from your backend server.",
    "docs.errors.title": "Error Codes",
    "docs.errors.intro": "NeuralStack APIs use standard HTTP response codes. Below are the most common error responses you may encounter.",
    "docs.errors.code": "Code",
    "docs.errors.meaning": "Meaning",
    "docs.errors.description": "Description",
    "docs.errors.400": "Bad Request",
    "docs.errors.400.desc": "The request body is malformed or missing required fields.",
    "docs.errors.401": "Unauthorized",
    "docs.errors.401.desc": "Invalid or missing API key in the Authorization header.",
    "docs.errors.403": "Forbidden",
    "docs.errors.403.desc": "Your API key does not have permission for this resource.",
    "docs.errors.404": "Not Found",
    "docs.errors.404.desc": "The requested endpoint or resource does not exist.",
    "docs.errors.429": "Rate Limited",
    "docs.errors.429.desc": "You have exceeded the rate limit. Wait and retry.",
    "docs.errors.500": "Internal Error",
    "docs.errors.500.desc": "An unexpected server error occurred. Contact support.",
    "docs.errors.exampleResponse": "Example Error Response",
    "docs.lexai.title": "LexAI Compliance Gateway",
    "docs.lexai.intro": "LexAI provides automated EU AI Act compliance auditing for your AI systems. It evaluates risk levels according to Article 6(2) of the EU AI Act classification framework and returns detailed scoring with remediation guidance.",
    "docs.lexai.endpoint": "Compliance Audit Endpoint",
    "docs.lexai.requestBody": "Request Body",
    "docs.lexai.field": "Field",
    "docs.lexai.type": "Type",
    "docs.lexai.required": "Required",
    "docs.lexai.fieldDesc": "Description",
    "docs.lexai.systemName": "A unique identifier for your AI system.",
    "docs.lexai.systemType": "The category of AI application. Values: classification, generation, recommendation, autonomous.",
    "docs.lexai.region": "Deployment region. Use eu for EU AI Act compliance.",
    "docs.lexai.dataCategories": "Array of data types processed: personal, biometric, financial, health.",
    "docs.lexai.exampleRequest": "Example Request",
    "docs.lexai.exampleResponse": "Example Response",
    "docs.lexai.riskLevels": "Risk Levels",
    "docs.lexai.riskLevelsDesc": "The EU AI Act (Article 6/2) classifies AI systems into four risk tiers:",
    "docs.lexai.unacceptable": "Unacceptable",
    "docs.lexai.unacceptableDesc": "Banned AI practices (e.g., social scoring).",
    "docs.lexai.high": "High",
    "docs.lexai.highDesc": "Requires conformity assessment and human oversight.",
    "docs.lexai.limited": "Limited",
    "docs.lexai.limitedDesc": "Transparency obligations apply.",
    "docs.lexai.minimal": "Minimal",
    "docs.lexai.minimalDesc": "No specific obligations.",
    "docs.lcv.title": "Lead Capture Validator (LCV)",
    "docs.lcv.intro": "LCV provides real-time validation for leads entering your sales funnel. It verifies email addresses via MX record lookups and validates international phone numbers using the E.164 format standard. Built on Railway and Supabase for sub-100ms latency.",
    "docs.lcv.endpoint": "Validation Endpoint",
    "docs.lcv.requestBody": "Request Body",
    "docs.lcv.email": "The email address to validate. MX records are checked.",
    "docs.lcv.phone": "Phone number in E.164 international format (e.g., +5491155551234).",
    "docs.lcv.companyDomain": "Optional. Corporate domain for cross-referencing.",
    "docs.lcv.exampleRequest": "Example Request",
    "docs.lcv.exampleResponse": "Example Response",
    "docs.lcv.mxExplain": "MX Record Validation",
    "docs.lcv.mxExplainDesc": "LCV performs a real-time DNS lookup on the email domain to verify that valid Mail Exchange (MX) records exist. This catches disposable, typo, and fake email domains before they enter your CRM.",
    "docs.lcv.e164Explain": "E.164 Phone Format",
    "docs.lcv.e164ExplainDesc": "All phone numbers must follow the E.164 standard: a + prefix, country code, and subscriber number with no spaces or dashes. Example: +5491155551234 for an Argentine mobile number.",
    "docs.ecoledge.title": "EcoLedge AI",
    "docs.ecoledge.intro": "EcoLedge AI is a sustainability management and energy auditing SaaS platform for technology companies. It analyzes your tech stack's energy consumption patterns and provides actionable recommendations for carbon footprint reduction.",
    "docs.ecoledge.endpoint": "Energy Audit Endpoint",
    "docs.ecoledge.requestBody": "Request Body",
    "docs.ecoledge.companyName": "Your company or project name.",
    "docs.ecoledge.infraType": "Infrastructure type: cloud, hybrid, on-premise.",
    "docs.ecoledge.services": "Array of services to audit with provider, type, and region.",
    "docs.ecoledge.period": "Audit period. Values: monthly, quarterly, annual.",
    "docs.ecoledge.exampleRequest": "Example Request",
    "docs.ecoledge.exampleResponse": "Example Response",
    "docs.ecoledge.model": "Auditing Model",
    "docs.ecoledge.modelDesc": "EcoLedge AI cross-references your infrastructure configuration against regional energy grids, provider sustainability reports, and industry benchmarks. It calculates CO2-equivalent emissions per service and generates a composite sustainability score from 0 to 100.",

    // Footer
    "footer.tagline":
      "Intelligence Infrastructure for the Future. Scalable APIs, enterprise-grade governance, and AI solutions built in Buenos Aires for the world.",
    "footer.product": "Product",
    "footer.resources": "Resources",
    "footer.apiDocs": "API Docs",
    "footer.privacy": "Privacy Policy",
    "footer.utdt":
      "Developed with precision by a software specialist at Universidad Torcuato Di Tella",
    "footer.copyright":
      "\u00a9 2026 NeuralStack. All rights reserved. Built in Buenos Aires.",
  },
  es: {
    // Navbar
    "nav.products": "Productos",
    "nav.about": "Nosotros",
    "nav.contact": "Contacto",
    "nav.apiDocs": "Docs API",

    // Hero
    "hero.badge": "Infraestructura Inteligente",
    "hero.title":
      "Despliega IA con Confianza y Cumplimiento Total",
    "hero.subtitle":
      "NeuralStack ofrece APIs escalables de nivel empresarial que permiten a tu equipo integrar capacidades inteligentes en cualquier producto, con gobernanza y cumplimiento normativo desde el primer dia.",
    "hero.cta.start": "Comenzar",
    "hero.cta.projects": "Ver Proyectos",

    // Products
    "products.label": "Nuestras Soluciones",
    "products.heading": "Tres Productos. Una Plataforma Inteligente.",
    "products.subheading":
      "Cada producto esta disenado para resolver desafios empresariales criticos con una arquitectura AI-first y plena consciencia regulatoria.",
    "products.lexai.name": "LexAI Compliance Gateway",
    "products.lexai.description":
      "Asegura tu ventaja competitiva en Europa con cumplimiento normativo automatizado.",
    "products.lexai.details":
      "Auditoria automatizada del EU AI Act, puntuacion de riesgo y registros de cumplimiento normativo. Gobernanza empresarial lista para cada despliegue de IA.",
    "products.lcv.name": "Lead Capture Validator",
    "products.lcv.description":
      "Elimina el ruido en tu embudo de ventas con validacion instantanea.",
    "products.lcv.details":
      "API en tiempo real para validacion de sintaxis de email, verificacion de registros MX y validacion de numeros telefonicos internacionales.",
    "products.ecoledge.name": "EcoLedge AI",
    "products.ecoledge.description":
      "Decisiones basadas en datos para un futuro empresarial sostenible.",
    "products.ecoledge.details":
      "Plataforma de gestion de sostenibilidad y auditoria energetica para operaciones de tecnologia verde. Rastrea, reporta y optimiza tu huella de carbono.",

    // Vision
    "vision.label": "Nuestra Vision",
    "vision.heading":
      "Hacer que la IA sea Invisible, Segura y Universalmente Accesible",
    "vision.text":
      "En NeuralStack, creemos que la IA mas poderosa es aquella en la que nunca tienes que pensar. Nuestra mision es construir infraestructura tan confiable, tan segura y tan profundamente integrada que la inteligencia se convierta en una capa transparente de cada producto: invisible para el usuario final, indispensable para el negocio.",

    // Founder
    "founder.label": "Detras del Stack",
    "founder.heading": "Construido por Alguien que Entiende el Problema",
    "founder.text":
      "NeuralStack fue fundada con una conviccion clara: la infraestructura de IA debe empoderar a los equipos, no abrumarlos. Cada producto que construimos refleja una comprension profunda de la brecha entre la investigacion de IA de vanguardia y las necesidades empresariales reales.",
    "founder.highlight.1":
      "Especialista en soluciones de IA escalables y desarrollo de APIs de nivel empresarial.",
    "founder.highlight.2":
      "Actualmente estudiando en la Universidad Torcuato Di Tella.",
    "founder.highlight.3":
      "Enfocado en construir infraestructura de IA que sea invisible, segura y lista para empresas.",

    // Tech Stack
    "tech.label": "Infraestructura",
    "tech.heading": "Stack Empresarial, Velocidad Startup",
    "tech.subheading":
      "Cada capa de NeuralStack esta construida sobre tecnologias probadas y escalables, elegidas por su fiabilidad, seguridad y experiencia de desarrollo.",
    "tech.nextjs.role": "Framework de Aplicacion",
    "tech.nextjs.desc":
      "Framework React renderizado en servidor que impulsa todas las interfaces de NeuralStack con rendimiento optimizado en el edge.",
    "tech.railway.role": "Despliegue Cloud",
    "tech.railway.desc":
      "Despliegues sin configuracion con infraestructura de auto-escalado, garantizando 99.9% de uptime para todos los servicios API.",
    "tech.supabase.role": "Seguridad y Base de Datos",
    "tech.supabase.desc":
      "Seguridad a nivel de fila, base de datos en tiempo real y autenticacion: la columna vertebral de nuestra capa de proteccion de datos.",

    // Industries
    "industries.label": "Industrias que Servimos",
    "industries.heading":
      "Disenado para Sectores Regulados y de Alto Impacto",
    "industries.greentech": "Tecnologia Verde",
    "industries.saas": "SaaS Empresarial",
    "industries.fintech": "Fintech",
    "industries.compliance": "Cumplimiento Normativo",

    // Contact
    "contact.label": "Contactanos",
    "contact.heading": "Listo para Asegurar tu Stack de IA?",
    "contact.subheading":
      "Hablemos sobre como nuestras APIs pueden optimizar tu infraestructura.",
    "contact.name": "Nombre",
    "contact.name.placeholder": "Tu nombre completo",
    "contact.email": "Email",
    "contact.email.placeholder": "tu@empresa.com",
    "contact.message": "Mensaje",
    "contact.message.placeholder": "Contanos sobre tu proyecto o consulta...",
    "contact.submit": "Enviar Mensaje",
    "contact.sending": "Enviando...",
    "contact.error.title": "// Error",
    "contact.error.text":
      "No pudimos enviar tu mensaje. Verifica tu conexion e intenta de nuevo.",
    "contact.success.label": "// Estado: 200 OK",
    "contact.success.title": "Mensaje Recibido",
    "contact.success.text":
      "Gracias por contactar a NeuralStack. Nuestro equipo revisara tu mensaje y te respondera dentro de 24 horas.",
    "contact.success.another": "Enviar Otro Mensaje",

    // Docs
    "docs.title": "Documentacion",
    "docs.backHome": "Volver al Inicio",
    "docs.copied": "Copiado!",
    "docs.copy": "Copiar",
    "docs.maintained": "Documentacion mantenida por el equipo de NeuralStack | Estudiante de la Universidad Torcuato Di Tella",
    "docs.sidebar.introduction": "Introduccion",
    "docs.sidebar.welcome": "Bienvenida",
    "docs.sidebar.authentication": "Autenticacion",
    "docs.sidebar.errorCodes": "Codigos de Error",
    "docs.sidebar.apis": "APIs",
    "docs.sidebar.lexai": "LexAI Compliance",
    "docs.sidebar.lcv": "Lead Capture Validator",
    "docs.sidebar.saas": "SaaS",
    "docs.sidebar.ecoledge": "EcoLedge AI",
    "docs.welcome.title": "Bienvenido a la Documentacion de NeuralStack",
    "docs.welcome.intro": "NeuralStack proporciona infraestructura de IA de nivel empresarial a traves de tres productos principales. Esta documentacion cubre autenticacion, endpoints de API, formatos de solicitud/respuesta y guias de integracion para cada servicio.",
    "docs.welcome.getStarted": "Comienza autenticando tus solicitudes, luego explora las referencias de API para LexAI Compliance, Lead Capture Validator (LCV) o EcoLedge AI.",
    "docs.welcome.quickStart": "Inicio Rapido",
    "docs.welcome.quickStartDesc": "Accede directamente a lo esencial:",
    "docs.welcome.qs.auth": "Configurar API Key",
    "docs.welcome.qs.authDesc": "Configura la autenticacion y obtiene tu token Bearer.",
    "docs.welcome.qs.lcv": "Validar tu primer Lead",
    "docs.welcome.qs.lcvDesc": "Envia tu primera solicitud de validacion de email y telefono via LCV.",
    "docs.welcome.qs.lexai": "Verificar cumplimiento EU AI Act",
    "docs.welcome.qs.lexaiDesc": "Ejecuta una auditoria de riesgo en tu sistema de IA con LexAI.",
    "docs.sidebar.search": "Buscar en docs...",
    "docs.welcome.baseUrl": "URL Base",
    "docs.welcome.allRequests": "Todas las solicitudes API deben realizarse a:",
    "docs.auth.title": "Autenticacion",
    "docs.auth.intro": "Todos los endpoints de la API de NeuralStack requieren autenticacion mediante tokens Bearer. Incluye tu clave API en el encabezado Authorization de cada solicitud.",
    "docs.auth.headerFormat": "Formato del Encabezado",
    "docs.auth.obtaining": "Obteniendo tu Clave API",
    "docs.auth.step1": "Inicia sesion en tu panel de NeuralStack.",
    "docs.auth.step2": "Navega a Configuracion > Claves API.",
    "docs.auth.step3": "Haz clic en Generar Nueva Clave y almacenala de forma segura.",
    "docs.auth.warning": "Nunca expongas tu clave API en codigo del lado del cliente. Siempre realiza las llamadas API desde tu servidor backend.",
    "docs.errors.title": "Codigos de Error",
    "docs.errors.intro": "Las APIs de NeuralStack usan codigos de respuesta HTTP estandar. A continuacion se muestran las respuestas de error mas comunes.",
    "docs.errors.code": "Codigo",
    "docs.errors.meaning": "Significado",
    "docs.errors.description": "Descripcion",
    "docs.errors.400": "Solicitud Incorrecta",
    "docs.errors.400.desc": "El cuerpo de la solicitud esta mal formado o faltan campos requeridos.",
    "docs.errors.401": "No Autorizado",
    "docs.errors.401.desc": "Clave API invalida o faltante en el encabezado Authorization.",
    "docs.errors.403": "Prohibido",
    "docs.errors.403.desc": "Tu clave API no tiene permiso para este recurso.",
    "docs.errors.404": "No Encontrado",
    "docs.errors.404.desc": "El endpoint o recurso solicitado no existe.",
    "docs.errors.429": "Limite Excedido",
    "docs.errors.429.desc": "Has excedido el limite de solicitudes. Espera y reintenta.",
    "docs.errors.500": "Error Interno",
    "docs.errors.500.desc": "Ocurrio un error inesperado en el servidor. Contacta soporte.",
    "docs.errors.exampleResponse": "Ejemplo de Respuesta de Error",
    "docs.lexai.title": "LexAI Compliance Gateway",
    "docs.lexai.intro": "LexAI proporciona auditoria automatizada de cumplimiento del EU AI Act para tus sistemas de IA. Evalua niveles de riesgo segun el Articulo 6(2) del marco de clasificacion del EU AI Act y devuelve puntuacion detallada con guia de remediacion.",
    "docs.lexai.endpoint": "Endpoint de Auditoria de Cumplimiento",
    "docs.lexai.requestBody": "Cuerpo de la Solicitud",
    "docs.lexai.field": "Campo",
    "docs.lexai.type": "Tipo",
    "docs.lexai.required": "Requerido",
    "docs.lexai.fieldDesc": "Descripcion",
    "docs.lexai.systemName": "Un identificador unico para tu sistema de IA.",
    "docs.lexai.systemType": "La categoria de aplicacion de IA. Valores: classification, generation, recommendation, autonomous.",
    "docs.lexai.region": "Region de despliegue. Usa eu para cumplimiento del EU AI Act.",
    "docs.lexai.dataCategories": "Array de tipos de datos procesados: personal, biometric, financial, health.",
    "docs.lexai.exampleRequest": "Ejemplo de Solicitud",
    "docs.lexai.exampleResponse": "Ejemplo de Respuesta",
    "docs.lexai.riskLevels": "Niveles de Riesgo",
    "docs.lexai.riskLevelsDesc": "El EU AI Act (Articulo 6/2) clasifica los sistemas de IA en cuatro niveles de riesgo:",
    "docs.lexai.unacceptable": "Inaceptable",
    "docs.lexai.unacceptableDesc": "Practicas de IA prohibidas (ej: puntuacion social).",
    "docs.lexai.high": "Alto",
    "docs.lexai.highDesc": "Requiere evaluacion de conformidad y supervision humana.",
    "docs.lexai.limited": "Limitado",
    "docs.lexai.limitedDesc": "Se aplican obligaciones de transparencia.",
    "docs.lexai.minimal": "Minimo",
    "docs.lexai.minimalDesc": "Sin obligaciones especificas.",
    "docs.lcv.title": "Lead Capture Validator (LCV)",
    "docs.lcv.intro": "LCV proporciona validacion en tiempo real para leads que ingresan a tu embudo de ventas. Verifica direcciones de email mediante busquedas de registros MX y valida numeros telefonicos internacionales usando el estandar E.164. Construido sobre Railway y Supabase para latencia inferior a 100ms.",
    "docs.lcv.endpoint": "Endpoint de Validacion",
    "docs.lcv.requestBody": "Cuerpo de la Solicitud",
    "docs.lcv.email": "La direccion de email a validar. Se verifican los registros MX.",
    "docs.lcv.phone": "Numero telefonico en formato internacional E.164 (ej: +5491155551234).",
    "docs.lcv.companyDomain": "Opcional. Dominio corporativo para verificacion cruzada.",
    "docs.lcv.exampleRequest": "Ejemplo de Solicitud",
    "docs.lcv.exampleResponse": "Ejemplo de Respuesta",
    "docs.lcv.mxExplain": "Validacion de Registros MX",
    "docs.lcv.mxExplainDesc": "LCV realiza una busqueda DNS en tiempo real sobre el dominio del email para verificar que existan registros Mail Exchange (MX) validos. Esto detecta dominios de email desechables, con errores tipograficos y falsos antes de que ingresen a tu CRM.",
    "docs.lcv.e164Explain": "Formato Telefonico E.164",
    "docs.lcv.e164ExplainDesc": "Todos los numeros telefonicos deben seguir el estandar E.164: un prefijo +, codigo de pais y numero de suscriptor sin espacios ni guiones. Ejemplo: +5491155551234 para un numero movil argentino.",
    "docs.ecoledge.title": "EcoLedge AI",
    "docs.ecoledge.intro": "EcoLedge AI es una plataforma SaaS de gestion de sostenibilidad y auditoria energetica para empresas tecnologicas. Analiza los patrones de consumo energetico de tu stack tecnologico y proporciona recomendaciones accionables para la reduccion de huella de carbono.",
    "docs.ecoledge.endpoint": "Endpoint de Auditoria Energetica",
    "docs.ecoledge.requestBody": "Cuerpo de la Solicitud",
    "docs.ecoledge.companyName": "El nombre de tu empresa o proyecto.",
    "docs.ecoledge.infraType": "Tipo de infraestructura: cloud, hybrid, on-premise.",
    "docs.ecoledge.services": "Array de servicios a auditar con proveedor, tipo y region.",
    "docs.ecoledge.period": "Periodo de auditoria. Valores: monthly, quarterly, annual.",
    "docs.ecoledge.exampleRequest": "Ejemplo de Solicitud",
    "docs.ecoledge.exampleResponse": "Ejemplo de Respuesta",
    "docs.ecoledge.model": "Modelo de Auditoria",
    "docs.ecoledge.modelDesc": "EcoLedge AI cruza la configuracion de tu infraestructura contra redes energeticas regionales, reportes de sostenibilidad de proveedores y benchmarks de la industria. Calcula emisiones equivalentes de CO2 por servicio y genera una puntuacion de sostenibilidad compuesta de 0 a 100.",

    // Footer
    "footer.tagline":
      "Infraestructura Inteligente para el Futuro. APIs escalables, gobernanza empresarial y soluciones de IA construidas en Buenos Aires para el mundo.",
    "footer.product": "Producto",
    "footer.resources": "Recursos",
    "footer.apiDocs": "Docs API",
    "footer.privacy": "Politica de Privacidad",
    "footer.utdt":
      "Desarrollado con precision por un especialista en software de la Universidad Torcuato Di Tella",
    "footer.copyright":
      "\u00a9 2026 NeuralStack. Todos los derechos reservados. Construido en Buenos Aires.",
  },
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en")

  // Detect browser language on first load
  useEffect(() => {
    const browserLang = navigator.language || ""
    if (browserLang.startsWith("es")) {
      setLocale("es")
    }
  }, [])

  function t(key: string): string {
    return translations[locale][key] ?? key
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
