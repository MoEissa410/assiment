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
        "base-white": "#fff",
        "y-500": "#ffd803",
        "gray-900": "#272343",
        "gray-600": "#7a778f",
        "gray-200": "#e3e2e7",
        "gray-300": "#c8c6d0",
        "gray-25": "#f9f9fd",
        "beige-50": "#fbf8f5",
        "beige-200": "#f2eae1",
        darkslategray: "rgba(64, 60, 92, 0.7)",
      },
      fontFamily: {
        "body-default-regular": "'Basier Square'",
        "button-large": "'Basier Square'",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontSize: {
      lg: "18px",
      base: "16px",
      "5xl": "24px",
      "13xl": "32px",
      inherit: "inherit",
    },
  },
  plugins: [],
};
export default config;
