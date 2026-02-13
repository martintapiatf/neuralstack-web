import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "electric-blue": "#00D9FF",
        "electric-purple": "#9333EA",
      },
    },
  },
  plugins: [],
}

export default config
