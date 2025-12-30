import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: '#FFD1DC',
          blue: '#AEC6CF',
          purple: '#E0BBE4',
          peach: '#FFDAB9',
          mint: '#C7EEFF',
          lavender: '#E6E6FA',
          coral: '#FFB3B3',
          sage: '#C9E4C5',
          cream: '#FFF8DC',
          lilac: '#DDA0DD',
        },
      },
    },
  },
  plugins: [],
};

export default config;
