import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "ccrf-green": "#93A34B",
        "accent-gray": "#cbcbc9",
        "hero-overlay": "#201916",
      },
      spacing: {
        "128": "32rem",
        "144": "36rem",
        "256": "64rem",
        "192": "48rem",
      },
    },
  },
  plugins: [],
};
export default config;
