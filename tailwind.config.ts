import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1B2B44",
        teal: "#247A8A",
        paper: "#FFFFFF",
        coral: "#1F3A60",
        line: "#E3EAEE",
      },
      fontFamily: {
        display: ["Fredoka", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
