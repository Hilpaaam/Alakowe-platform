import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        alakowe: {
          bg: "#f8fafc",
          surface: "#ffffff",
          text: "#0f172a",
          muted: "#64748b",
          primary: "#1d4ed8",
          primaryDark: "#1e40af",
          accent: "#3b82f6",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
