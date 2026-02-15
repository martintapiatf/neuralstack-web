import { ImageResponse } from 'next/og'

export const alt = 'NeuralStack — Soluciones de IA y Automatización SaaS'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#1b263b',
        }}
      >
        {/* === Risograph layer 1: Large olive circle (top-left, offset) === */}
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            left: '-80px',
            width: '520px',
            height: '520px',
            borderRadius: '50%',
            backgroundColor: '#708238',
            opacity: 0.15,
          }}
        />

        {/* === Risograph layer 2: Sage ellipse (center-right) === */}
        <div
          style={{
            position: 'absolute',
            top: '80px',
            right: '-60px',
            width: '480px',
            height: '600px',
            borderRadius: '50%',
            backgroundColor: '#a3b18a',
            opacity: 0.1,
          }}
        />

        {/* === Risograph layer 3: Pink rectangle (bottom, misregistered) === */}
        <div
          style={{
            position: 'absolute',
            bottom: '-30px',
            left: '200px',
            width: '700px',
            height: '200px',
            backgroundColor: '#fbcfd6',
            opacity: 0.07,
            transform: 'rotate(-2deg)',
          }}
        />

        {/* === Risograph layer 4: Olive vertical bar (left accent) === */}
        <div
          style={{
            position: 'absolute',
            top: '60px',
            left: '80px',
            width: '4px',
            height: '510px',
            backgroundColor: '#708238',
            opacity: 0.4,
          }}
        />

        {/* === Risograph layer 5: Small pink circle (top-right, print overlap) === */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            right: '120px',
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            backgroundColor: '#fbcfd6',
            opacity: 0.12,
          }}
        />

        {/* === Risograph layer 6: Sage horizontal bar (bottom accent) === */}
        <div
          style={{
            position: 'absolute',
            bottom: '80px',
            right: '80px',
            width: '400px',
            height: '3px',
            backgroundColor: '#a3b18a',
            opacity: 0.5,
          }}
        />

        {/* === Grain simulation: dot grid pattern === */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage:
              'radial-gradient(circle, #e1d3c1 0.5px, transparent 0.5px)',
            backgroundSize: '24px 24px',
            opacity: 0.04,
          }}
        />

        {/* === Risograph layer 7: Olive diagonal strip (misregistered print) === */}
        <div
          style={{
            position: 'absolute',
            top: '300px',
            left: '-100px',
            width: '600px',
            height: '60px',
            backgroundColor: '#708238',
            opacity: 0.08,
            transform: 'rotate(-8deg)',
          }}
        />

        {/* === Content container === */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            padding: '60px 80px',
            position: 'relative',
          }}
        >
          {/* Top-left code annotation */}
          <div
            style={{
              position: 'absolute',
              top: '40px',
              left: '100px',
              display: 'flex',
              fontSize: '14px',
              fontFamily: 'monospace',
              color: '#708238',
              opacity: 0.6,
              letterSpacing: '0.05em',
            }}
          >
            // neuralstack.dev
          </div>

          {/* Top-right version badge */}
          <div
            style={{
              position: 'absolute',
              top: '38px',
              right: '80px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px',
              fontFamily: 'monospace',
              color: '#a3b18a',
              opacity: 0.5,
            }}
          >
            v1.0 — 2026
          </div>

          {/* Main title */}
          <div
            style={{
              display: 'flex',
              fontSize: '86px',
              fontWeight: 700,
              color: '#e1d3c1',
              letterSpacing: '-0.03em',
              lineHeight: 1,
              textAlign: 'center',
            }}
          >
            NeuralStack
          </div>

          {/* Decorative separator — olive line */}
          <div
            style={{
              display: 'flex',
              width: '120px',
              height: '4px',
              backgroundColor: '#708238',
              marginTop: '28px',
              marginBottom: '24px',
              borderRadius: '2px',
              opacity: 0.7,
            }}
          />

          {/* Subtitle */}
          <div
            style={{
              display: 'flex',
              fontSize: '26px',
              fontFamily: 'monospace',
              color: '#fbcfd6',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textAlign: 'center',
              opacity: 0.85,
            }}
          >
            AI Infrastructure Platform
          </div>

          {/* Tagline */}
          <div
            style={{
              display: 'flex',
              fontSize: '17px',
              color: '#a3b18a',
              marginTop: '16px',
              letterSpacing: '0.02em',
              textAlign: 'center',
              opacity: 0.7,
            }}
          >
            Impulsando la próxima generación de SaaS con inteligencia artificial
          </div>

          {/* Bottom-left product badges */}
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              left: '100px',
              display: 'flex',
              gap: '16px',
            }}
          >
            {['LexAI', 'LCV', 'EcoLedge'].map((product) => (
              <div
                key={product}
                style={{
                  display: 'flex',
                  fontSize: '12px',
                  fontFamily: 'monospace',
                  color: '#e1d3c1',
                  backgroundColor: '#708238',
                  opacity: 0.3,
                  padding: '4px 12px',
                  borderRadius: '4px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                {product}
              </div>
            ))}
          </div>

          {/* Bottom-right location */}
          <div
            style={{
              position: 'absolute',
              bottom: '42px',
              right: '80px',
              display: 'flex',
              fontSize: '13px',
              fontFamily: 'monospace',
              color: '#e1d3c1',
              opacity: 0.25,
              letterSpacing: '0.05em',
            }}
          >
            Built in Buenos Aires
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
