import type { Config } from "tailwindcss";

const config: Config = {
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
        backgroundSecondary:"var(--background-secondary)",
        captionLabel: "var(--caption-label)",
        White: "var(--text-white)",
        callAction : "var(--call-action)",
        gradient: "var(--gradient-2)",
        gradientTwo: "var(--gradient-3)",
      },
    },
  },
  plugins: [],
};
export default config;
