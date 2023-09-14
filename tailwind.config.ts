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
      },
      screens:{
        xs:"320px",
        sm:"375px",
        sml:"500px",
        md:"667px",
        mdl:"768px",
        lg:"960px",
        lgl:"1024px",
        xl:"1280px",
      },
      fontFamily:{
        bodyFont:["Roboto Mono", "monospace"],
        titleFont:["Inter","sans-serif"]
      },
      colors:{
        bodyColor:"#111111",
        textLight:"#ffffff",
        textDark:"#ccd6f6",
        textGreen:"#64ffda",
        hoverColor:"rgba(100,255,218,0.1",

      },
      boxShadow:{
        navbarShadow:"0 10px 30px -10px rgba(2,12,27,0.7"
      }
    },
  },
  plugins: [],
}
export default config
