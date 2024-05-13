/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"),],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          secondary: "#d4711a",
        },
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          secondary: "#f08b33",
        },
      },
    ],
  },
}

