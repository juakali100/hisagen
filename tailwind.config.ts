import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        primary: "#1F6A4A", // Forest Green - main brand color
        secondary: "#1F2E3A", // Deep Blue-Grey - institutional feel
        accent: "#D8B75A", // Goldenrod - highlight/CTA color

        // Neutral Colors
        ink: "#0F172A", // Nearly black for body text
        slate: "#334155", // Dark grey for secondary text
        mist: "#CBD5E1", // Light grey for backgrounds
        parchment: "#F7F8F5", // Warm off-white base background

        // Secondary Palette - Extended colors for flexibility
        "sky-teal": "#4BA0A6", // Teal-blue accent
        "leaf-green": "#4F9C74", // Lighter muted green
        "soil-brown": "#795548", // Earth tone for soil context
        "sky-blue": "#90BEE1", // Light clear blue for backgrounds
        "sunset-orange": "#F2994A", // Soft orange highlight

        // Semantic Colors - For UI states
        success: "#1F6A4A", // Using Forest Green
        info: "#90BEE1", // Using Sky Blue
        warning: "#D8B75A", // Using Goldenrod
        error: "#E5534B", // Bright coral for errors
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
