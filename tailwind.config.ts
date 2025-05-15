import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import { heroPlugin } from "./src/core/config/ui/heroPlugin"; 

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/core/providers/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/react/**/*.{js,ts,jsx,tsx,mdx}", 
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--color-primary) / <alpha-value>)", 
        secondary: "hsl(var(--color-secondary) / <alpha-value>)",
        accent: {
          light: "hsl(var(--color-accent-light) / <alpha-value>)",
          DEFAULT: "hsl(var(--color-accent-default) / <alpha-value>)", 
          dark: "hsl(var(--color-accent-dark) / <alpha-value>)",
        },
        neutral: {
          lightest: "hsl(var(--color-neutral-lightest) / <alpha-value>)",
          lighter: "hsl(var(--color-neutral-lighter) / <alpha-value>)",
          light: "hsl(var(--color-neutral-light) / <alpha-value>)",
          DEFAULT: "hsl(var(--color-neutral-default) / <alpha-value>)", 
          dark: "hsl(var(--color-neutral-dark) / <alpha-value>)",
          darker: "hsl(var(--color-neutral-darker) / <alpha-value>)",
          darkest: "hsl(var(--color-neutral-darkest) / <alpha-value>)",
        },
        background: 'hsl(var(--color-background) / <alpha-value>)',
        foreground: 'hsl(var(--color-foreground) / <alpha-value>)',
        'stat-green-dark': '#15803d',
        'stat-teal': '#0f766e',
        'stat-orange': '#ea580c',
        'stat-blue': '#1d4ed8',
      },
      fontFamily: {
        sans: ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--border-radius)', 
        md: 'calc(var(--border-radius) - 2px)',
        sm: 'calc(var(--border-radius) - 4px)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    heroPlugin(), 
  ],
};
export default config;