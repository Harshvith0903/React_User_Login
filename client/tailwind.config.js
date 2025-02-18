/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner-image" : "url('/Users/harshvith/Desktop/Hextasphere/React/projects/login-signup/client/src/assets/background.jpg')",
      }
    },
  },
  plugins: [],
}

