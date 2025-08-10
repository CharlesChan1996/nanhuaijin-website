/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 中式古色古香配色方案
        primary: {
          50: '#faf7f2',
          100: '#f4ede0',
          200: '#e8d9c0',
          300: '#d9c196',
          400: '#c8a56a',
          500: '#b8904a',
          600: '#a67c3e',
          700: '#8a6535',
          800: '#715330',
          900: '#5c442a',
        },
        secondary: {
          50: '#f7f5f3',
          100: '#ede8e3',
          200: '#ddd4ca',
          300: '#c7b8a8',
          400: '#b09a85',
          500: '#9d8269',
          600: '#8f7159',
          700: '#775d4b',
          800: '#624d40',
          900: '#524135',
        },
        accent: {
          50: '#f9f7f4',
          100: '#f1ebe2',
          200: '#e3d5c4',
          300: '#d1b89e',
          400: '#bc9876',
          500: '#a87d56',
          600: '#96694a',
          700: '#7d553e',
          800: '#664636',
          900: '#553a2e',
        },
        sage: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7d0c7',
          300: '#a3b2a3',
          400: '#7d917d',
          500: '#607560',
          600: '#4c5e4c',
          700: '#3f4e3f',
          800: '#354135',
          900: '#2d362d',
        }
      },
      fontFamily: {
        'chinese': ['PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', 'sans-serif'],
        'serif-chinese': ['STSong', 'SimSun', 'serif'],
      },
      backgroundImage: {
        'paper-texture': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23f4ede0\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"7\" cy=\"7\" r=\"1\"/%3E%3Ccircle cx=\"53\" cy=\"53\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}