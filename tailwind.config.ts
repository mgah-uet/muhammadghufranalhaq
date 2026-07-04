import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-blueprint": "#0b1826",
        "bg-panel": "#101f30",
        "line-grid": "#1c3349",
        "copper": "#c97a3d",
        "copper-bright": "#e8a868",
        "signal-green": "#3adb8f",
        "paper": "#edf1f5",
        "paper-muted": "#93a5b8",
      },
    },
  },
  plugins: [],
};
export default config;
