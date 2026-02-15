"use client"

export function OrganicBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <svg
        className="absolute h-full w-full animate-organic-float"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Concentric organic curves - layer 1 */}
        <path
          d="M-100 450C100 350 300 500 500 400S800 250 1000 350S1300 500 1540 400"
          stroke="hsl(76 39% 36%)"
          strokeWidth="1.5"
          strokeOpacity="0.07"
          fill="none"
        />
        <path
          d="M-100 480C120 380 340 530 540 430S840 280 1040 380S1340 530 1540 430"
          stroke="hsl(76 39% 36%)"
          strokeWidth="1"
          strokeOpacity="0.05"
          fill="none"
        />
        <path
          d="M-100 510C140 410 380 560 580 460S880 310 1080 410S1380 560 1540 460"
          stroke="hsl(76 39% 36%)"
          strokeWidth="1.5"
          strokeOpacity="0.08"
          fill="none"
        />

        {/* Concentric organic curves - layer 2, offset */}
        <path
          d="M-100 200C200 130 400 280 600 200S900 100 1100 200S1400 320 1540 240"
          stroke="hsl(76 39% 36%)"
          strokeWidth="1"
          strokeOpacity="0.06"
          fill="none"
        />
        <path
          d="M-100 230C220 160 420 310 620 230S920 130 1120 230S1420 350 1540 270"
          stroke="hsl(76 39% 36%)"
          strokeWidth="1.5"
          strokeOpacity="0.05"
          fill="none"
        />

        {/* Concentric organic curves - layer 3, lower */}
        <path
          d="M-100 700C150 620 350 750 550 680S850 570 1050 660S1350 770 1540 700"
          stroke="hsl(76 39% 36%)"
          strokeWidth="1"
          strokeOpacity="0.06"
          fill="none"
        />
        <path
          d="M-100 730C170 650 370 780 570 710S870 600 1070 690S1370 800 1540 730"
          stroke="hsl(76 39% 36%)"
          strokeWidth="1.5"
          strokeOpacity="0.07"
          fill="none"
        />
        <path
          d="M-100 760C190 680 390 810 590 740S890 630 1090 720S1390 830 1540 760"
          stroke="hsl(76 39% 36%)"
          strokeWidth="1"
          strokeOpacity="0.05"
          fill="none"
        />
      </svg>
    </div>
  )
}
