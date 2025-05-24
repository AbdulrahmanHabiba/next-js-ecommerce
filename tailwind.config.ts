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
        // --- Premium Theme Colors ---
        primary: {
          DEFAULT: '#7f53ac', // main gradient start
          dark: '#232946',   // dark background
          light: '#e0e6f7',  // light text
        },
        secondary: {
          DEFAULT: '#647dee', // main gradient end
        },
        accent: {
          DEFAULT: '#e94560', // accent (danger, remove, etc)
        },
        bgdark: {
          DEFAULT: '#181c2b', // background dark
        },
        glass: {
          DEFAULT: 'rgba(255,255,255,0.10)', // glassmorphism
        },
        textmain: {
          DEFAULT: '#e0e6f7', // main text
        },
        textmuted: {
          DEFAULT: '#bfc9e0', // muted text
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
