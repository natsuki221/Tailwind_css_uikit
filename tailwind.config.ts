// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['jf-openhuninn-2.1','Klee One', 'sans-serif'], // Replace 'YourCustomFont' with your font name
      },
    },
  },
  plugins: [],
}

export default config;
