/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html", // This will include all HTML files in all folders
    "./**/*.js", // This will include all JS files in all folders
    "./pages/**/*.html", // If your privacy policy HTML file is in the 'pages' folder
  ],

  theme: {
    screens: {
      xxs: "321px",
      xs: "450px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      backgroundImage: {
        bgImage: "url('/images/purple.png')",
        policyBg: "url('/images/64c2218c3dd3ad3ffed2f1b4_-26.png')",
        signinBg: "url('/images/signin-ng.jpeg')",
        heroBg: "url('/images/hero-bg3.jpg')",
        aboutBg: "url('/images/about-bg.jpg')",
      },
      boxShadow: {
        whiteshadow: "0 0 1rem rgb(234 157 213)",
        btnshadow: "0 0 1rem #f0abfc",
        cardShadow:
          "0 0 1rem #f0abfc , 0 0 1.5rem white , 0.5rem 0.5rem 2rem #f0abfc",
        cardShadow2: "0 0 1rem #f0abfc",
      },
    },
  },
  plugins: [],
};
