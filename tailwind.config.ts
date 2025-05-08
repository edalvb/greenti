import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/core/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#12B759",
        secondary: "#002140",
        accent: {
          light: "#E6F8EF", 
          DEFAULT: "#12B759",
          dark: "#0D8C43",
        },
        neutral: {
          lightest: "#F8F9FA",
          lighter: "#E9ECEF",
          light: "#DEE2E6",
          DEFAULT: "#CED4DA",
          dark: "#ADB5BD",
          darker: "#6C757D",
          darkest: "#212529", 
        },
        'stat-green-dark': '#15803d',
        'stat-teal': '#0f766e',
        'stat-orange': '#ea580c',
        'stat-blue': '#1d4ed8',
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;