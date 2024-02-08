/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'background':'#FBFBFB',
        'primary':{
          100:"#BACBD1",
          300:"#7C9DA8",
          500:"#3F6F7F",
          700:"#2B4B56",
          800:"#213A42"
        },
        'secondary':{
          100:"#E8C1DB",
          200:"#DEA6CB",
          300:"#D38ABB",
          500:"#BF539B",
          700:"#823869",
          800:"#632B51"
        },
        'primary-text':'#04364A',
        'secondary-text':'#737373'
      },
      screens:{
        "small":"320px"
      },
      fontFamily: {
        'Tajawal': ['Tajawal', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
