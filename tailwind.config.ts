import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ResultBg: "#133040",
        DarkBg: "#0E2431",
        Lime: "hsl(61, 70%, 52%)",
        LightLime: "#FAF8DC",
        Red: "hsl(4, 69%, 50%)",
        Slate: {
          100: "hsl(202, 86%, 94%)",
          300: "hsl(203, 41%, 72%)",
          500: "hsl(200, 26%, 54%)",
          700: "hsl(200, 24%, 40%)",
          900: "hsl(202, 55%, 16%)",
        },
      },
      boxShadow: {
        inputShadow: "0.25px -0.25px 0.25px hsl(202, 86%, 94%)",
      },
    },
  },
  plugins: [],
};

export default config;
