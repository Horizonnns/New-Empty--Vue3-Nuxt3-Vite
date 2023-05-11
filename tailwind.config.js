/*@type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/**/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    container: {
      center: true,

      screens: {
        lg: '1220px',
      },
    },

    extend: {
      colors: {
        primary: '#00b956',
        secondary: '#731982',
        gray: {
          10: '#999',
          11: '#faf9f9',
          20: '#787575',
          30: '#333',
          40: '#f6f6f6',
          50: '#ededed',
        },
        red: {
          10: '#eb5a40',
          20: '#ffe3e5',
        },
        link: '#35aaf2',
        green: {
          10: '#EDFAF3',
        },
      },

      boxShadow: {
        cards: '0px 4px 20px 0px rgba(0,0,0,0.10)',
      },
      backgroundImage: {
        'header-gradient':
          'linear-gradient(90deg, #00a44c 50%, rgba(0, 185, 86, 0.75) 100%)',
      },

      fontFamily: {
        GTWalsheimPro: "'GTWalsheimPro",
      },

      keyframes: {
        wave: {
          '0%': {
            transform: 'scale(1, 1)',
          },
          '50%': { transform: 'scale(1.4)' },
          '100%': { transform: 'scale(1, 1)' },
        },
      },
      animation: {
        waving: 'wave 1s ease infinite',
      },
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },
};
