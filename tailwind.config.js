/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#1f3a2b",
        gold: "#d4a017",
        cream: "#f5efe0",
        parchment: "#e8dcc8",
        walnut: "#5c3d2e",
        sage: "#7a9367",
        chalkboard: "#1a3327",
      },
      fontFamily: {
        serif: ["Fraunces", "Georgia", "serif"],
        sans: ["Source Sans 3", "system-ui", "sans-serif"],
        hand: ["Caveat", "cursive"],
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
