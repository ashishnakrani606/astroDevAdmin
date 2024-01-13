/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',

    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class' ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',   
        'black': '#000000',
        'blacklight':'#1c1c1c',       
        'gray-1':'#333333',
        'graydark':"#87898E",
        'primary-light':'#F7F9FB',
        'primary-blue':'#E3F5FF',
        'blue-1':'#2F80ED',
        'primary-green':'#219653',
        'primary-greena':'#4AA785',
        'primary-greenb':'#27AE60',
        'primary-purple':'#E5ECF6',
        'secondary-purplea':'#95A4FC',
        'secondary-purpleb':'#C6C7F8',
        'secondary-bluea':'#A8C5DA',
        'secondary-blueb':'#B1E3FF',
        'secondary-greena':'#A1E3CB',
        'secondary-greenb':'#BAEDBD',
        'secondary-yellow':'#FFE999',
        'secondary-red':'#FF4747',
        'secondary-redb':'#EB5757',
        'trinary-bule':'#4541FF',
        'bright-grey': '#3E3E59' ,
        'brand05':"#0D0D0F",
        'black300': "#EAEAEA",
        'black400': "#C4C4C4",
        'black900': "#121212",
        'black800': "#212121", 
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      'sm': '640px',  
      'md': '768px',
      'lg': '1024px',    
      'lgm':'1200px',
      'xl': '1280px',    
      '2xl': '1536px',      
    }
  },
    plugins: [],
}
