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
        beige: "rgb(200,170,144)",
        marine: "rgb(115,181,223)",
        green: "rgb(44,104,78)",
      },
    },
  },
  plugins: [],
};
export default config;
