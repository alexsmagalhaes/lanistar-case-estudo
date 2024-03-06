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
        'brand-blue-dark': '#008ECB',
        'brand-blue-default': '#07BCFF',
        'brand-blue-light': '#6ED8FF',

        'brand-green-dark': '#2AB163',
        'brand-green-default': '#41DD83',
        'brand-green-light': '#79ECAA',

        'brand-pink-default': '#FFA6E3',

        'neutral-gray-100': '#0A1D2E',
        'neutral-gray-200': '#29394A',
        'neutral-gray-300': '#475567',
        'neutral-gray-400': '#7C8999',
        'neutral-gray-500': '#A6AEB8',
        'neutral-gray-600': '#CDD1D6',
      },
      fontFamily: {
        'font-title': ['var(--font-barlow)'],
        'font-body': ['var(--font-barlow)'],
      },
      padding: {
        'page-padding': '1.5rem',
      },
      maxWidth: {
        'grid': '79rem'
      },
    },
  },
  plugins: [],
};
export default config;
