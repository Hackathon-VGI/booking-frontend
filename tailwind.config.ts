import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F9F9F9",
        primary: "#717171",
        secondary: "#7E88A0",
        dark: "#041023",
        tertiary: "#F0F2F5",
        btnBlue: "#0083C6",
        btnGreen: "#79B834",
        label: "#3C3C43",
        red: "#FF0000",
      },
      fontFamily: {
        sans: ['"Inter", sans-serif'],
      },
      boxShadow: {
        searchBox: "0px 2px 12px 0px #0000000F",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
