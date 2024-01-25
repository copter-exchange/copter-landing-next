import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-person': "url('/persona.svg')",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-fast': 'spin 1s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'bounce-fast': 'bounce 1s infinite',
      },
      height: {
        'hero-sm': '200px',
        'hero-md': '500px',
        'hero-lg': '600px',
        'hero-xl': '800px',
      },
      width: {
        'hero-sm': '400px',
        'hero-md': '500px',
        'hero-lg': '600px',
        'hero-xl': '800px',
      },
      colors: {
        'copter-blue-dark': '#090923',
        'copter-blue-light': '#2e2cb1',
        'copter-blue-shine': '#020DD9',
        'copter-gray-help': '#F0F0F0',
        'copter-gray-service': '#F5F7FA',
        'copter-gray-otc': '#F5F7FA'
        
      },
      fontSize: {
        "heading1-bold": [
          "2.25rem",
          {
            lineHeight: "2.5rem",
            fontWeight: "900",
          }
        ],
        "heading2-bold": [
          "3.25rem",
          {
            lineHeight: "2.5rem",
            fontWeight: "900",
          }
        ],

      }
    },
  },
  plugins: [],
};
export default config;
