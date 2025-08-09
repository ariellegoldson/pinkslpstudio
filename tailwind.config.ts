import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#fff6fb',
          100: '#fdebf3', 
          200: '#f9d9e7',
          300: '#f5c7db',
          400: '#f1b5cf',
          500: '#f5bcd6',
          600: '#e9a1c2',
          700: '#cc7ea1',
        },
        sage: {
          50: '#f4f8f5',
          100: '#e8f0ea',
          200: '#d4e2d9',
          300: '#b7cdbf',
          400: '#98b1a3',
          500: '#7f988a',
          600: '#6b8471',
          700: '#5a6f61',
        },
        garden: {
          50: '#f0f4f0',
          100: '#dde9dd', 
          200: '#b8d4b8',
          300: '#8fb98f',
          400: '#6a9d6a',
          500: '#4a7c59',
          600: '#3d634a',
          700: '#2f4d3a',
        },
        cream: {
          50: '#fffefd',
          100: '#fbfaf7',
          200: '#f6f1e9',
          300: '#f0ebe1',
        },
        ink: {
          600: '#374151',
          700: '#30343a',
          800: '#1f2937',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        serif: ['Cormorant Garamond', 'serif'], 
        sans: ['Inter', 'sans-serif'],
        script: ['Dancing Script', 'Great Vibes', 'cursive'],
      },
      borderRadius: {
        '2xl': '1rem',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'garden': '0 4px 20px -2px rgba(74, 124, 89, 0.15)',
      },
      backgroundImage: {
        'grain': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPGZpbHRlciBpZD0iYSI+IDx0dXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii45IiBudW1PY3RhdmVzPSI0IiByZXN1bHQ9Im5vaXNlIi8+IDxjb2xvck1hdHJpeCB2YWx1ZXM9IjEgMCAwIDAgMCAwIDEgMCAwIDAgMCAwIDEgMCAwIDAgMCAwIDEgMCIgaW49Im5vaXNlIi8+IDwvZmlsdGVyPiA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ0cmFuc3BhcmVudCIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIwLjEiLz4gPC9zdmc+')",
        'garden-gradient': 'linear-gradient(135deg, #f0f4f0 0%, #dde9dd 50%, #b8d4b8 100%)',
      },
    },
  },
  plugins: [],
};

export default config;