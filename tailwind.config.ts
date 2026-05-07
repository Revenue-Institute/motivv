import type { Config } from "tailwindcss";

import typography from "@tailwindcss/typography";
import radix from "tailwindcss-radix";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: "var(--font-sans)",
      display: "var(--font-display)",
      mono: "var(--font-mono)",
    },
    colors: {
      // Dynamic colors
      black: "#000",
      white: "#fff",
      transparent: "transparent",
      "brand-mint": {
        50: "#f0fbf6",
        100: "#d6f5e6",
        200: "#adebcb",
        300: "#7fdcae",
        400: "#5fcca0",
        500: "#48be9a",
        600: "#3aa384",
        700: "#2c8268",
        800: "#226852",
        900: "#1c5443",
        950: "#0d2e25",
        DEFAULT: "#48be9a",
      },
      "brand-teal": {
        50: "var(--brand-teal-50)",
        100: "var(--brand-teal-100)",
        200: "var(--brand-teal-200)",
        300: "var(--brand-teal-300)",
        400: "var(--brand-teal-400)",
        500: "var(--brand-teal-500)",
        600: "var(--brand-teal-600)",
        700: "var(--brand-teal-700)",
        800: "var(--brand-teal-800)",
        900: "var(--brand-teal-900)",
        DEFAULT: "var(--brand-teal-600)",
      },
      "brand-sky": {
        50: "var(--brand-sky-50)",
        100: "var(--brand-sky-100)",
        200: "var(--brand-sky-200)",
        300: "var(--brand-sky-300)",
        400: "var(--brand-sky-400)",
        500: "var(--brand-sky-500)",
        600: "var(--brand-sky-600)",
        700: "var(--brand-sky-700)",
        800: "var(--brand-sky-800)",
        900: "var(--brand-sky-900)",
        DEFAULT: "var(--brand-sky-400)",
      },
      accent: {
        50: "rgba(var(--accent-rgb-50), <alpha-value>)",
        100: "rgba(var(--accent-rgb-100), <alpha-value>)",
        200: "rgba(var(--accent-rgb-200), <alpha-value>)",
        300: "rgba(var(--accent-rgb-300), <alpha-value>)",
        400: "rgba(var(--accent-rgb-400), <alpha-value>)",
        500: "rgba(var(--accent-rgb-500), <alpha-value>)",
        600: "rgba(var(--accent-rgb-600), <alpha-value>)",
        700: "rgba(var(--accent-rgb-700), <alpha-value>)",
        800: "rgba(var(--accent-rgb-800), <alpha-value>)",
        900: "rgba(var(--accent-rgb-900), <alpha-value>)",
        950: "rgba(var(--accent-rgb-950), <alpha-value>)",
      },
      grayscale: {
        50: "rgba(var(--grayscale-rgb-50), <alpha-value>)",
        100: "rgba(var(--grayscale-rgb-100), <alpha-value>)",
        200: "rgba(var(--grayscale-rgb-200), <alpha-value>)",
        300: "rgba(var(--grayscale-rgb-300), <alpha-value>)",
        400: "rgba(var(--grayscale-rgb-400), <alpha-value>)",
        500: "rgba(var(--grayscale-rgb-500), <alpha-value>)",
        600: "rgba(var(--grayscale-rgb-600), <alpha-value>)",
        700: "rgba(var(--grayscale-rgb-700), <alpha-value>)",
        800: "rgba(var(--grayscale-rgb-800), <alpha-value>)",
        900: "rgba(var(--grayscale-rgb-900), <alpha-value>)",
        950: "rgba(var(--grayscale-rgb-950), <alpha-value>)",
      },
      ["text-on-accent"]: {
        primary: "var(--text-on-accent, var(--grayscale-50))",
      },
      dark: {
        text: {
          primary: "rgba(var(--grayscale-rgb-50), <alpha-value>)",
          secondary: "rgba(var(--grayscale-rgb-400), <alpha-value>)",
          tertiary: "rgba(var(--grayscale-rgb-500), <alpha-value>)",
        },
        surface: {
          primary: "rgba(var(--grayscale-rgb-950), <alpha-value>)",
          secondary: "rgba(var(--grayscale-rgb-900), <alpha-value>)",
          tertiary: "rgba(var(--grayscale-rgb-800), <alpha-value>)",
        },
        border: {
          DEFAULT: "rgba(var(--grayscale-rgb-800), <alpha-value>)",
        },
        control: {
          DEFAULT: "rgba(var(--accent-rgb-500), <alpha-value>)",
        },
      },
      text: {
        primary: "rgba(var(--grayscale-rgb-950), <alpha-value>)",
        secondary: "rgba(var(--grayscale-rgb-600), <alpha-value>)",
        tertiary: "rgba(var(--grayscale-rgb-500), <alpha-value>)",
      },
      surface: {
        primary: "rgba(var(--grayscale-rgb-50), <alpha-value>)",
        secondary: "rgba(var(--grayscale-rgb-100), <alpha-value>)",
        tertiary: "rgba(var(--grayscale-rgb-200), <alpha-value>)",
      },
      border: {
        DEFAULT: "rgba(var(--grayscale-rgb-300), <alpha-value>)",
      },
      control: {
        DEFAULT: "rgba(var(--accent-rgb-500), <alpha-value>)",
      },
      error: {
        DEFAULT: "#FF453A",
      },
      success: {
        DEFAULT: "#14C9A2",
      },
    },
    fontSize: {
      "2xs": ["11px", { lineHeight: "1.3", letterSpacing: "-0.3px", fontWeight: "300" }],
      xs: ["0.75rem", { lineHeight: "1rem", letterSpacing: "-0.36px", fontWeight: "300" }],
      sm: ["0.875rem", { lineHeight: "1.25rem", letterSpacing: "-0.42px" }],
      base: ["1rem", { lineHeight: "1.6", letterSpacing: "-0.48px" }],
      lg: ["1.125rem", { lineHeight: "1.75rem", letterSpacing: "-0.72px" }],
      xl: ["1.25rem", { lineHeight: "1.75rem", letterSpacing: "-0.8px" }],
      "2xl": ["1.5rem", { lineHeight: "2rem", letterSpacing: "-1.04px" }],
      "3xl": ["2rem", { lineHeight: "2.25rem", letterSpacing: "-1.2px" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem", letterSpacing: "-1.44px" }],
      "5xl": ["3rem", { letterSpacing: "-1.6px" }],
      "6xl": ["3.75rem", { letterSpacing: "-1.8px" }],
      "7xl": ["4.5rem", { letterSpacing: "-2px" }],
      "8xl": ["6rem", { letterSpacing: "-2.4px" }],
      "9xl": ["8rem", { letterSpacing: "-3.2px" }],
    },
    extend: {
      maxWidth: {
        prose: "75ch",
      },
      gridTemplateColumns: {
        header: "1fr max-content 1fr",
      },
      boxShadow: {
        neon: "0 0 2px 2px var(--tw-shadow), 0 0 6px 3px var(--tw-ring-offset-shadow), 0 0 8px 4px var(--tw-ring-shadow)",
      },
      zIndex: {
        modal: "9999",
      },
      keyframes: {
        enterFromRight: {
          from: { opacity: "0", transform: "translateX(200px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        enterFromLeft: {
          from: { opacity: "0", transform: "translateX(-200px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        exitToRight: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(200px)" },
        },
        exitToLeft: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(-200px)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "rotateX(-10deg) scale(0.9)" },
          to: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
        },
        scaleOut: {
          from: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
          to: { opacity: "0", transform: "rotateX(-10deg) scale(0.95)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        slideDown: {
          from: { height: "0px" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0px" },
        },
        pulse: {
          "50%": {
            opacity: "0.5",
          },
        },
      },
      letterSpacing: {
        tighter: "-0.58px",
        tight: "-0.48px",
      },
      typography: {
        DEFAULT: {
          css: {
            p: {
              letterSpacing: "-0.48px",
            },
            code: {
              letterSpacing: "normal",
            },
          },
        },
      },
    },
    animation: {
      slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      scaleIn: "scaleIn 200ms ease",
      scaleOut: "scaleOut 200ms ease",
      fadeIn: "fadeIn 200ms ease",
      fadeOut: "fadeOut 200ms ease",
      enterFromLeft: "enterFromLeft 250ms ease",
      enterFromRight: "enterFromRight 250ms ease",
      exitToLeft: "exitToLeft 250ms ease",
      exitToRight: "exitToRight 250ms ease",
      pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    },
  },
  plugins: [typography, radix],
};

export default config;
