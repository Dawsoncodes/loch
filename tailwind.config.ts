import type { Config } from "tailwindcss"

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
        primary: {
          "50": "#f8f2fc",
          "100": "#efe3fa",
          "200": "#d6bdf2",
          "300": "#b896eb",
          "400": "#7752de",
          "500": "#2f15cf",
          "600": "#2711ba",
          "700": "#1c0b9c",
          "800": "#13077d",
          "900": "#0c045c",
          "950": "#07023b",
        },
        secondary: {
          "50": "#f5faf0",
          "100": "#eaf5df",
          "200": "#c7e3b1",
          "300": "#a2d188",
          "400": "#5cb045",
          "500": "#1e8e13",
          "600": "#19800f",
          "700": "#116b0b",
          "800": "#0c5707",
          "900": "#084004",
          "950": "#042902",
        },
        dark: {
          "50": "#f5f5f5",
          "100": "#e8e8e8",
          "200": "#c5c6c7",
          "300": "#a0a1a3",
          "400": "#5c5c5e",
          "500": "#19191a",
          "600": "#141417",
          "700": "#0d0d12",
          "800": "#09090f",
          "900": "#04040a",
          "950": "#020208",
        },
      },
    },
  },
  plugins: [],
}
export default config
