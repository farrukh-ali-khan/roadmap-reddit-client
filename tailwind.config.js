/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "reddit-orange": "#ff4500",
        "dark-bg": "#0f1117",
        "card-dark": "#1a1d25",
        "accent-blue": "#3b82f6",
        "accent-purple": "#8b5cf6",
      },
    },
  },
  plugins: [],
};
