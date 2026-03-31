import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
      colors: {
        accent: {
          DEFAULT: "#22c55e",
          dark: "#16a34a",
        },
        warm: "#C4974A",
        surface: {
          DEFAULT: "#0a0a0f",
          light: "#0b0b10",
          lighter: "#08080d",
        },
        ink: {
          DEFAULT: "#ffffff",
          muted: "#b0bec5",
          subtle: "#8a9bb0",
          faint: "#6b7f96",
          ghost: "#56687d",
        },
      },
      maxWidth: {
        container: "1120px",
      },
    },
  },
  plugins: [],
};

export default config;
