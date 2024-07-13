/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#407BFF",
          50: "#F8FAFF",
          100: "#E3ECFF",
          200: "#BAD0FF",
          300: "#92B3FF",
          400: "#6997FF",
          500: "#407BFF",
          600: "#0854FF",
          700: "#0040CF",
          800: "#002F97",
          900: "#001D5F",
          950: "#001543",
        },
      },
    },
  },
  plugins: [],
  // corePlugins: {
  //   preflight: false,
  // },
};
