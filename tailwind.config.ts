import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base oscura tipo terminal / CRT apagado
        ink: {
          DEFAULT: "#0a0a0b",
          900: "#08080a",
          800: "#101013",
          700: "#16161b",
          600: "#1e1e25",
          500: "#2a2a33",
        },
        // Texto: blanco hueso cálido (no blanco puro, más premium)
        bone: "#f1efe6",
        muted: "#8d8c84",
        // Acento principal: ámbar retro (eco del amarillo de la referencia)
        amber: {
          DEFAULT: "#ffc23d",
          400: "#ffd066",
          500: "#ffc23d",
          600: "#e9a417",
        },
        // Fósforo verde de monitor antiguo
        phosphor: "#7dffb0",
        // Cyan secundario
        signal: "#6fd2ff",
      },
      fontFamily: {
        sans: ["var(--font-space)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "92%": { opacity: "1" },
          "93%": { opacity: "0.78" },
          "94%": { opacity: "1" },
          "97%": { opacity: "0.85" },
          "98%": { opacity: "1" },
        },
        "scan-move": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
        flicker: "flicker 6s linear infinite",
        "scan-move": "scan-move 7s linear infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
