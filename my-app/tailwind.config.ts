import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cinemaYellow: "#faba0c",
        cinemaBlue: "#0a2b24",
      },

      backgroundImage: {
        bannerImg: "url('/red.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
