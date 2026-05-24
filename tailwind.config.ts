import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"]
      },
      colors: {
        ink: "#0b0b0a",
        neon: "#f2c94c",
        ocean: "#ffd86e",
        violet: "#9f8f63",
        gold: "#f2c94c"
      },
      boxShadow: {
        glow: "0 0 36px rgba(242, 201, 76, 0.2)",
        blueglow: "0 0 42px rgba(255, 216, 110, 0.16)"
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        fadeUp: "fadeUp 0.8s ease both",
        pulseSoft: "pulseSoft 2.8s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" }
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        pulseSoft: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(242, 201, 76, 0.24)" },
          "50%": { boxShadow: "0 0 0 12px rgba(242, 201, 76, 0)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
