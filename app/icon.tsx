import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1b263b',
          borderRadius: '6px',
        }}
      >
        {/* Minimal "N" letterform built with three geometric bars */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '2px',
            height: '18px',
          }}
        >
          {/* Left vertical stroke */}
          <div
            style={{
              width: '4px',
              height: '18px',
              backgroundColor: '#e1d3c1',
              borderRadius: '1px',
            }}
          />
          {/* Diagonal connector */}
          <div
            style={{
              width: '4px',
              height: '18px',
              backgroundColor: '#fbcfd6',
              borderRadius: '1px',
              transform: 'skewX(-12deg)',
            }}
          />
          {/* Right vertical stroke */}
          <div
            style={{
              width: '4px',
              height: '18px',
              backgroundColor: '#e1d3c1',
              borderRadius: '1px',
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  )
}
