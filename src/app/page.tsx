const CHECKOUT_PRO =
  "https://neuralstack.lemonsqueezy.com/checkout/buy/c3d34fb0-89e9-4844-b30d-a26d0b154a23"
const CHECKOUT_ULTRA =
  "https://neuralstack.lemonsqueezy.com/checkout/buy/66abc4e3-8b64-4d9c-855e-95a34d859253"

const LCV_API = process.env.NEXT_PUBLIC_LCV_API_URL ?? "#"

/* ─── tiny SVG check helpers ─── */
function Check({ className = "text-electric-purple" }: { className?: string }) {
  return (
    <svg
      className={`w-5 h-5 mr-3 mt-0.5 shrink-0 ${className}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default function Home() {
  return (
    <>
      {/* ═══ Hero ═══ */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-electric-blue bg-clip-text text-transparent leading-tight">
            Infraestructura de IA
            <br />y APIs Escalables
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Soluciones inteligentes de próxima generación para empresas que
            buscan transformar sus operaciones con inteligencia artificial
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#productos"
              className="px-8 py-4 bg-gradient-to-r from-electric-purple to-electric-blue rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Explorar Productos
            </a>
            <a
              href="#precios"
              className="px-8 py-4 border-2 border-electric-purple rounded-lg font-semibold hover:bg-electric-purple/10 transition-all duration-300"
            >
              Ver Precios
            </a>
          </div>
        </div>

        <div className="absolute top-20 left-10 w-72 h-72 bg-electric-purple/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric-blue/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </section>

      {/* ═══ Productos ═══ */}
      <section id="productos" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-electric-purple bg-clip-text text-transparent">
            Nuestros Productos
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 – EcoLedge AI */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-electric-purple transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Sustainability Management API</h3>
              <p className="text-sm text-electric-purple mb-4 font-semibold">EcoLedge AI</p>
              <p className="text-gray-400 leading-relaxed">
                Gestión de datos ESG y auditoría energética para empresas.
                Soluciones completas para el cumplimiento de sostenibilidad y
                optimización de recursos.
              </p>
            </div>

            {/* Card 2 – AI Voice Assistant */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-electric-blue transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-electric-blue rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">AI Voice Assistant</h3>
              <p className="text-sm text-electric-blue mb-4 font-semibold">Sistema de Reservas</p>
              <p className="text-gray-400 leading-relaxed">
                Sistema de reservas automáticas para el sector gastronómico.
                Asistente de voz inteligente que optimiza la gestión de
                reservas y mejora la experiencia del cliente.
              </p>
            </div>

            {/* Card 3 – Academic Economics Engine */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-electric-purple transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-electric-purple rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Academic Economics Engine</h3>
              <p className="text-sm text-electric-purple mb-4 font-semibold">Herramientas de Aprendizaje</p>
              <p className="text-gray-400 leading-relaxed">
                Herramientas de aprendizaje inteligente para economía.
                Plataforma educativa avanzada con análisis predictivo y
                simulaciones económicas interactivas.
              </p>
            </div>

            {/* Card 4 – LexAI */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-electric-purple transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 transform hover:-translate-y-2 flex flex-col">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">LexAI</h3>
              <p className="text-sm text-electric-purple mb-4 font-semibold">Cumplimiento EU AI Act</p>
              <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                Herramientas y auditoría para el cumplimiento del Reglamento
                Europeo de Inteligencia Artificial (EU AI Act). Documentación,
                evaluación de riesgo y gobernanza de sistemas de IA.
              </p>
              <div className="flex justify-center mt-auto">
                <a
                  href={CHECKOUT_PRO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Empezar — Desde $49.99/mes
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Precios ═══ */}
      <section id="precios" className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-white to-electric-blue bg-clip-text text-transparent">
            Planes y Precios
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Elige el plan que mejor se adapte a tu equipo
          </p>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* BASIC */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border-2 border-gray-700 hover:border-gray-600 transition-all duration-300 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-1">BASIC</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">$0</span>
                <span className="text-gray-400">/mes</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start text-gray-300">
                  <Check className="text-gray-500" />
                  100 requests/mo
                </li>
                <li className="flex items-start text-gray-300">
                  <Check className="text-gray-500" />
                  Immutable Audit Logs
                </li>
                <li className="flex items-start text-gray-300">
                  <Check className="text-gray-500" />
                  UUID Traceability
                </li>
              </ul>
              <a
                href="#productos"
                className="block w-full text-center px-6 py-3.5 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-gray-500 hover:bg-gray-700/50 transition-all duration-300"
              >
                Empezar gratis
              </a>
            </div>

            {/* PRO – Recommended */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border-2 border-electric-purple shadow-lg shadow-purple-500/20 transition-all duration-300 flex flex-col relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-wide">
                Más popular
              </div>
              <h3 className="text-xl font-bold text-white mb-1">PRO</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold bg-gradient-to-r from-electric-purple to-electric-blue bg-clip-text text-transparent">
                  $49.99
                </span>
                <span className="text-gray-400">/mes</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start text-gray-300">
                  <Check />
                  5,000 requests/mo
                </li>
                <li className="flex items-start text-gray-300">
                  <Check />
                  Real-time Risk Scoring
                </li>
                <li className="flex items-start text-gray-300">
                  <Check />
                  Usage API Access
                </li>
              </ul>
              <a
                href={CHECKOUT_PRO}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3.5 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Contratar Pro
              </a>
            </div>

            {/* ULTRA */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border-2 border-gray-700 hover:border-electric-purple transition-all duration-300 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-1">ULTRA</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold bg-gradient-to-r from-electric-purple to-electric-blue bg-clip-text text-transparent">
                  $99.99
                </span>
                <span className="text-gray-400">/mes</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start text-gray-300">
                  <Check />
                  50,000 requests/mo
                </li>
                <li className="flex items-start text-gray-300">
                  <Check />
                  Priority Support
                </li>
                <li className="flex items-start text-gray-300">
                  <Check />
                  Full Compliance Reporting
                </li>
                <li className="flex items-start text-gray-300">
                  <Check />
                  Custom Metadata
                </li>
              </ul>
              <a
                href={CHECKOUT_ULTRA}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3.5 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Contratar Ultra
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="bg-gray-950 border-t border-gray-800 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-electric-purple bg-clip-text text-transparent">
                NeuralStack
              </h4>
              <p className="text-gray-400 text-sm">
                Infraestructura de IA y APIs escalables para el futuro de tu
                negocio.
              </p>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4 text-white">Contacto</h5>
              <p className="text-gray-400 mb-2">
                <span className="font-semibold">Martin Tapia</span>
              </p>
              <a
                href="mailto:martin@neuralstack.com"
                className="text-electric-purple hover:text-electric-blue transition-colors duration-200"
              >
                martin@neuralstack.com
              </a>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4 text-white">Pagos Seguros</h5>
              <p className="text-gray-400 text-sm flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.65-8 11.317C5.34 16.65 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Secure payments processed by Lemon Squeezy
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} NeuralStack. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
