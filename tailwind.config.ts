import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],


  theme: {
    extend: {
      fontFamily: {
        primary: "var(--font-bebas)",
        secondary: "var(--font-inter)",
      },
      colors: {
        primary: "#10151F",
        secondary: "#475467",
        Accent: "#65b0aa",
        hover: "#79d3cc",
      },
    boxShadow: {
      custom: "0px 14px 54px rgba(0,0,0,0.1)",
    },
  },
},
  plugins: [],
} satisfies Config;
