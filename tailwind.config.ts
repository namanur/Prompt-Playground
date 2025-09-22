import type { Config } from "tailwindcss";
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(240 10% 4%)",
        foreground: "hsl(0 0% 98%)",
        muted: "hsl(240 4.8% 16%)",
        card: "hsl(240 6% 10%)",
        border: "hsl(240 5% 26%)"
      }
    }
  },
  plugins: []
} satisfies Config;
