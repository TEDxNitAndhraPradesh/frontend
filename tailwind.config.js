/** @type {import('tailwindcss').Config} */

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvitica: ["helvitica", "sans-serif"],
      },
      colors: {
        tedred: "#ff2b06",
      },
    },
  },
  plugins: [],
};
export default config;
