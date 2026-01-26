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

        // Terracotta - Warm earthy red for alerts/problems (replaces harsh red)
        terracotta: {
          50: "#FDF5F3",   // Very light warm
          100: "#F9E8E2",  // Light terracotta tint
          200: "#F2CFC3",  // Soft terracotta
          300: "#E5A892",  // Medium light
          400: "#D4836A",  // Medium
          500: "#C4674A",  // Primary terracotta
          600: "#B85A3F",  // Darker
          700: "#9A4A35",  // Dark terracotta
          800: "#7D3E2E",  // Very dark
          900: "#663528",  // Darkest
        }
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
