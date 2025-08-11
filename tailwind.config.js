/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'head-md': ['26px', { lineHeight: '31.2px', fontWeight: '500', fontStyle: 'normal', color: 'var(--primary-text)' }],
        'sub-md': ['20px', { lineHeight: '24px', fontWeight: '500', fontStyle: 'normal', color: 'var(--secondary-text)' }],
        'highlink-md': ['16px', { lineHeight: '24px', fontWeight: '400', fontStyle: 'normal', color: 'var(--primary-text)' }],
        'para-md': ['16px', { lineHeight: '22.4px', fontWeight: '400', fontStyle: 'normal', color: 'var(--secondary-text)' }],
        's-sub-md': ['14px', { lineHeight: '19.6px', fontWeight: '400', fontStyle: 'normal', color: 'var(--secondary-text)' }],
        'section-heading-md': ['20px', { lineHeight: '24px', fontWeight: '500', fontStyle: 'normal', color: 'var(--primary-text)' }],
      },
      screens: {
        sm: '640px',
        md: '809px',
        lg: '1024px'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1.5s infinite',
      },
    },
  },
  plugins: [],
  
}
