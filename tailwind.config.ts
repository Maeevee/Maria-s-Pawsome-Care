/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#F1ECE9',
        'primary': '#EA854C',
        'secondary': '#F0EEED',
        'salmon': '#ed8383',
        'light-peach': '#fdf0ec'
      },
      gridTemplateColumns: {
        '24': 'repeat(24, minmax(0, 1fr))'
      },
      gridTemplateRows: {
        '17': 'repeat(17, minmax(0, 1fr))',
      },
      gridColumnStart: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
        '21': '21',
        '22': '22',
      }
    },
    fontFamily: {
      'rufina': ['Rufina', 'serif'],
    }
  },
  plugins: [],
}
