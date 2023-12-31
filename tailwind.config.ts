// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // theme: {
  //   extend: {},
  //   colors: {
  //     CPrimary: ' #FFB300',
  //     CSecondary: '#04185C',
  //     CText:'#333333',
  //     CError: '#ea4335',
  //     CDark: '#27272E',
  //     // textPrimary: ' #111111',
  //     // textSecondary: '#555555',

  //   },
  // },

  darkMode: "class",

  important: true,
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#FFB300",
              foreground: "#333333",
            },
            secondary: {
              DEFAULT: "#04185C",
              foreground: "#333333",
            },
          },
        },
        dark: {
          primary: {
            DEFAULT: "#FFB300",
            foreground: "#FFFFFF",
          },
        },
      },
    }),
  ],
};
