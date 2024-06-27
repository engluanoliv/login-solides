import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tenor: ["Tenor Sans", "sans-serif"],
      },
      colors: {
        "custom-input": "#E9ECEF",
        "custom-label-input": "#20130B",
        "custom-placeholder": "#8B8B8B",
        "custom-input-icon": "#CCCCCC",
        "custom-button-login": "#BC8363",
      },
      backgroundImage: {
        "custom-imagem": "url('/background.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
