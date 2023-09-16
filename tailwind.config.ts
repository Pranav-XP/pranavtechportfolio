import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth:{
        container:"1440px",
        contentContainer:"1140px",
        containerSmall:"1024px",
        containerxs:"768px",
      },fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      fontFamily:{
        bodyFont:["Roboto Mono", "monospace"],
        titleFont:["Inter","sans-serif"]
      },
      colors:{
        navbarColor:"#101010",
        bodyColor:"#111111",
        textLight:"#ffffff",
        textDark:"#9c9c9c",
        textBlue:"#b8f8ff",
        hoverColor:"rgba(100,255,218,0.1",

      },
      boxShadow:{
        footerShadow:"0 -10px 20px -10px rgba(75, 75, 75, 0.9)",
        navbarShadow:"0 10px 30px -10px rgba(75, 75, 75, 0.9)"
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)"
        ]
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
export default config
