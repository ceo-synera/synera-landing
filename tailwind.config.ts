import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1917",
        accent: "#185FA5",
        "accent-light": "#E6F1FB",
        "accent-mid": "#378ADD",
        "accent-dark": "#0C447C",
        muted: "#888780",
        surface: "#f8f7f4",
        "border-light": "#d0cec8",
        teal: "#1D9E75",
        "teal-light": "#E1F5EE",
        amber: "#BA7517",
        "amber-light": "#FAEEDA",
      },
      fontFamily: {
        sora: ["var(--font-sora)", "sans-serif"],
        "dm-sans": ["var(--font-dm-sans)", "sans-serif"],
      },
      animation: {
        "fade-up-0": "fadeUp 0.5s ease 0s forwards",
        "fade-up-1": "fadeUp 0.5s ease 0.1s forwards",
        "fade-up-2": "fadeUp 0.5s ease 0.2s forwards",
        "fade-up-3": "fadeUp 0.5s ease 0.3s forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
