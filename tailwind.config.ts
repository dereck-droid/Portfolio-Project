import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0d0d0d",
        surface: "#111111",
        "surface-light": "#161616",
        border: "#1f1f1f",
        "text-primary": "#f0f0f0",
        "text-secondary": "#888888",
        accent: "#3b82f6",
        "accent-hover": "#60a5fa",
        "status-green": "#22c55e",
        "status-red": "#ef4444",
        "status-amber": "#f59e0b",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "Fira Code", "monospace"],
      },
      maxWidth: {
        content: "1100px",
      },
    },
  },
  plugins: [],
};
export default config;
