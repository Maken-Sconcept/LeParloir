import type { Config } from "tailwindcss";

const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        card: "hsl(var(--card) / <alpha-value>)",
        "card-foreground": "hsl(var(--card-foreground) / <alpha-value>)",
        popover: "hsl(var(--popover) / <alpha-value>)",
        "popover-foreground": "hsl(var(--popover-foreground) / <alpha-value>)",
        primary: "hsl(var(--primary) / <alpha-value>)",
        "primary-foreground": "hsl(var(--primary-foreground) / <alpha-value>)",
        secondary: "hsl(var(--secondary) / <alpha-value>)",
        "secondary-foreground":
          "hsl(var(--secondary-foreground) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        "muted-foreground": "hsl(var(--muted-foreground) / <alpha-value>)",
        accent: "hsl(var(--accent) / <alpha-value>)",
        "accent-foreground": "hsl(var(--accent-foreground) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        gold: "hsl(var(--gold) / <alpha-value>)",
        "gold-light": "hsl(var(--gold-light) / <alpha-value>)",
        champagne: "hsl(var(--champagne) / <alpha-value>)",
        charcoal: "hsl(var(--charcoal) / <alpha-value>)",
        "charcoal-deep": "hsl(var(--charcoal-deep) / <alpha-value>)",
        obsidian: "hsl(var(--obsidian) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans-family)"],
        serif: ["var(--font-serif-family)"],
      },
    },
  },
} satisfies Config;

export default config;
