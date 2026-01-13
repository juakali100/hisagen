import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F6A4A",
        secondary: "#1F2E3A",
        accent: "#D8B75A",
        ink: "#0F172A",
        slate: "#334155",
        mist: "#CBD5E1",
        parchment: "#F7F8F5",
      },
      fontFamily: {
        serif: ['"Source Serif 4"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        md: "6px",
        lg: "8px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
