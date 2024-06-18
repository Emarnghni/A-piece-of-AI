import type { Config } from "tailwindcss";

const config: Config = {
  darkMode:"class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bottom-gradient":
          "linear-gradient(to bottom, rgba(24,21,31,0.2) 75%, rgba(7,1,13,1) 100%)",
        "left-gradient":
          "linear-gradient(to left, rgba(24,21,31,0.2) 75%, rgba(7,1,13,1) 100%)",
      },
      colors: {
        black: "#07010D",
        white: "#F3F2F4",
        accsent: "#1e1e1e",
        gray: "#7C7C7C",
        "dark-purple": "#0B0812",
        purple: "#18151F",
        pink: "#897BF8",
      },
      height: {
        screen: "100dvh",
      },
      fontSize: {
        mini: "10px",
      },
      borderRadius: {
        "4xl": "40px",
      },
    },
  },
  plugins: [],
};
export default config;
