import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkColor1: "#0A1828",
        darkColor2: "#172435",
        black: "rgba(13,13,13,0.99)",
        lightColor: "#FCFAEE",
        activeColor: "#FDE64E",
        activeColor2: "#4DD12D",
        secondaryColor: "#FDFAE6",
      },
      fontFamily: {
        dosis: ["Dosis", "sans"],
      },
    },
  },
  plugins: [],
};
export default config;
