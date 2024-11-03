/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    boxShadow: {
      table:
        "0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.20)",
      "form-sheet": "0px 1px 4px 0px rgba(21, 34, 50, 0.08)",
      "card-sheet":
        "0px 12px 32px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(28, 5, 77, 0.10);",
    },
    extend: {
      colors: {
        // Primary Colors
        "primary-1": "hsl(var(--primary-color-1))",
        "primary-70": "hsl(var(--primary-color-70))",
        "primary-50": "hsl(var(--primary-color-50))",
        "primary-20": "hsl(var(--primary-color-20))",
        "primary-12": "hsl(var(--primary-color-12))",
        "primary-8": "hsl(var(--primary-color-8))",
        "primary-6": "hsl(var(--primary-color-6))",

        // Success Colors
        success: "hsl(var(--success-color))",
        "success-70": "hsl(var(--success-color-70))",
        "success-50": "hsl(var(--success-color-50))",
        "success-20": "hsl(var(--success-color-20))",
        "success-12": "hsl(var(--success-color-12))",

        // Basic Colors
        "basic-white": "hsl(var(--basic-white))",
        "basic-white-70": "hsl(var(--basic-white-70))",
        "basic-white-50": "hsl(var(--basic-white-50))",
        "basic-white-20": "hsl(var(--basic-white-20))",
        "basic-white-12": "hsl(var(--basic-white-12))",

        // Error Colors
        "error-100": "hsl(var(--error-color-100))",
        "error-70": "hsl(var(--error-color-70))",
        "error-50": "hsl(var(--error-color-50))",
        "error-20": "hsl(var(--error-color-20))",
        "error-12": "hsl(var(--error-color-12))",
        "error-8": "hsl(var(--error-color-8))",

        // Neutral Colors
        "neutral-100": "hsl(var(--neutral-100))",
        "neutral-70": "hsl(var(--neutral-70))",
        "neutral-50": "hsl(var(--neutral-50))",
        "neutral-20": "hsl(var(--neutral-20))",
        "neutral-12": "hsl(var(--neutral-12))",
        "neutral-8": "hsl(var(--neutral-8))",
        "neutral-6": "hsl(var(--neutral-6))",
        "neutral-4": "hsl(var(--neutral-4))",

        // Gray Colors
        "gray-60": "hsl(var(--gray-60))",
        "gray-100": "hsl(var(--gray-100))",
        "gray-600": "hsl(var(--gray-600))",

        // Background Color
        "background-light": "hsl(var(--background-light))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "blink-border": {
          "0%": { "border-color": "transparent" },
          "50%": { "border-color": "hsl(var(--error-color-70))" },
          "100%": { "border-color": "transparent" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "blink-border": "blink-border 2s 2",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
