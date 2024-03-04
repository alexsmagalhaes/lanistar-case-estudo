import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '@tablet': '640px',
        '@laptop': '1024px',
        '@desktop': '1280px',
      },
      backgroundImage: {

      },
      colors: {

      },
      fontFamily: {
        barlow: ['var(--font-barlow)'],
      },
      padding: {
        'page-padding': '1.5rem',
      },
      maxWidth: {
        'grid': '76rem'
      },
      animation: {
        'default-animation': 'ease 250ms'
      },
    },
  },
  plugins: [],
};
export default config;
