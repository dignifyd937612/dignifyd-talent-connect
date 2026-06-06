/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        marqueeUp: {
          "0%": {
            transform: "translateY(0%)",
          },
          "100%": {
            transform: "translateY(-66.666%)",
          },
        },

        marqueeDown: {
          "0%": {
            transform: "translateY(-66.666%)",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        },
      },

      animation: {
        "marquee-up": "marqueeUp 35s linear infinite",
        "marquee-down": "marqueeDown 35s linear infinite",
      },
    },
  },
  plugins: [],
};
