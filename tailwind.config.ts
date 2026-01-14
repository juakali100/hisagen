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

        // Gradient Color Stops
        // Use with Tailwind gradient utilities:
        // "Earth to Sky": from-primary via-sky-teal to-sky-blue
        // "Harvest Sunrise": from-secondary via-leaf-green to-accent
        // "Field Growth": from-primary to-leaf-green
        "gradient-start": "#1F6A4A", // Forest Green for gradients
        "gradient-mid": "#4BA0A6", // Sky Teal for gradients
        "gradient-end": "#90BEE1", // Sky Blue for gradients
      },
      fontFamily: {
        serif: ['"Source Serif 4"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        md: "6px",
        lg: "8px",
      },
      backgroundImage: {
        // Predefined gradient combinations from brand guidelines
        "earth-to-sky": "linear-gradient(135deg, #1F6A4A 0%, #4BA0A6 50%, #90BEE1 100%)",
        "harvest-sunrise": "linear-gradient(90deg, #1F2E3A 0%, #4F9C74 50%, #D8B75A 100%)",
        "field-growth": "linear-gradient(180deg, #1F6A4A 0%, #4F9C74 100%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
