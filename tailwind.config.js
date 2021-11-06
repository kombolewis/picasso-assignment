const defaultTheme = require('tailwindcss/defaultTheme')

const extraSizings = {
  btn: '6rem',
  14: '3.5rem',
  '4xs': '10rem',
  '3xs': '12rem',
  '2xs': '16rem',
  xs: '20rem',
  sm: '24rem',
  md: '28rem',
  lg: '32rem',
  xl: '36rem',
  '2xl': '42rem',
  '3xl': '48rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem',
  lw: '17.3rem'
}

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true
  },

  theme: {
    container: {
      center: true,
      padding: '1rem'
    },

    colors: {
      white: '#fff',
      black: '#04070a',
      leaderboard: '#00000d',
      transparent: 'transparent',      
      home: '#1B1616',
      'green':'#43F2FF',
      'dark-blue-main':'#171543',
      'light-bluish':'#2A2769',
      'light-pink':'#8AF9DD',
      'light-grey': '#302E6F',
      'light-purple': '#211F51',
      'dark-blueish':'#211F51',
      // 'dark-black':'#000000',
      'greyish':'#302E6F',
      'blueish': '#242257',
      'dark-blue': '#211F5199',
      'light-light-blue': '#26245F',
      'light-green': '#31DD80',
      'light-blue': '#27255E',
      'blue-main': '#3617E2',
      'blue-light': '#2351D0',
      'light-blue-main': '#79E9F1',
      'light-blue-dark': '#A3D8E7',
      'pink-main': '#F62BD6',
      'pink-light': '#FC69FB',
      'pink-dark': '#EF79F1',
      'neon-green-main': '#00F1B6',
      'neon-green-light': '#8AF9DD',
      'dark-main': '#0C0A31',
      'dark-light': '#18154E',
      'dark-grey-main': '#152630',
      'dark-grey-light': '#28495B',
      'dark-red': '#FF5252',
      'dark-black': '#100E2F',      
      'light-black':'#211F51',
      'light-white':'#474E61',
      'blue-light-bg': '27255D',
      'blueish-dark' : '#151239',
      'gradient-blue': '#9CF8FF',

      dark: {
        border: 'rgba(210,210,225,0.05)',
        hover200: 'rgba(32,38,55,0.7)',
        hover300: 'rgba(21,23,30,0.6)',
        500: '#343c55',
        600: '#262b3b',
        700: '#1d1f2b',
        800: '#15171e',
        900: '#14151a',
        hero: "#1C1A45"
      },

      /* primary: {
        100: '#f0feff',
        200: '#b3fbff',
        300: '#75f8ff',
        400: '#3df5ff',
        500: '#00F2FE',
        600: '#00c2cc',
        700: '#009199',
        800: '#006166',
        900: '#003033'
      }, */

      primary: {
        100: '#dcf5f3',
        200: '#b8ebe7',
        300: '#95e1dc',
        400: '#71d7d0',
        500: '#4ecdc4',
        600: '#3ea49d',
        700: '#2f7b76',
        800: '#1f524e',
        900: '#102927',
        1000:'#F45B8A'
      },

      aqua: {
        100: '#f0fffc',
        200: '#b3fff0',
        300: '#7affe4',
        400: '#3dffd8',
        500: '#00ffcc',
        600: '#00cca3',
        700: '#00997a',
        800: '#006652',
        900: '#003329'
      },

      red: {
        100: '#fcf3f4',
        200: '#f0cbce',
        300: '#e4a0a4',
        400: '#ff5778',
        500: '#ff2954',
        600: '#eb002f',
        700: '#83252b',
        800: '#53181c',
        900: '#280b0d'
      },

      gray: {
        50: '#F8FAFC',
        100: '#F1F5F9',
        200: '#E2E8F0',
        300: '#CBD5E1',
        400: '#94A3B8',
        500: '#64748B',
        600: '#475569',
        700: '#334155',
        800: '#1E293B',
        900: '#0F172A'
      }
    },

    extend: {
      backgroundColor: {
        home: '#F7F7F5',
        'light-purple': '#211f51'
      },

      zIndex: {
        '19': 19
      },

      backgroundImage: {
        'market-pattern': "url('/home/market-new.png')",
        'home-pattern': "url('/home/background.svg')",
        'curve-pattern': "url('/home/curve-pattern.svg')",
        'common-pattern': "url('/home/rectangle-border.svg')",
        'spot-common-pattern' : "url('/images/Spot_community_pattern.svg')",
        'spot-pattern': "url('/home/Rectangle-border-spot.svg')",
        'about-pattern': "url('/home/about-border.svg')",
        'spot_about-pattern': "url('/images/spot_about.svg')",
        'transfer-border': "url('/images/spot-dropdown-popup.png')",
        'secondary-gradient': 'linear-gradient(90deg, rgba(239,121,241,1) -50%, rgba(39,37,94,1) 25%)',
        'tertiary-gradient': 'linear-gradient(90deg, rgba(0,241,182,1) -200%, rgba(39,37,94,1) 100%)',
        'hero-section_desktop': "url('/home/hero-section_desktop.jpg')",
        'hero-section_mobile': "url('/home/hero-section_mobile.jpg')",
        'footer-desktop': "url('/home/footer-desktop.jpg')",
        'footer-mobile': "url('/home/footer-mobile.jpg')",
        'spot-desktop': "url('/images/spot.jpg')",
        'footer': "url('/home/Footer.jpg')",
        'model': "url('/home/bg.jpg')",
        'close': "url('/home/iconclose.png')",
        'spot': "url('/home/spot.png')",
        'trade': "url('/home/trade.png')",
        'secondary-gradient-market': 'linear-gradient(140deg, rgba(239,121,241,1) -18%, rgba(39,37,94,1) 15%)'
       },

      borderColor: {
        home: "#6992FC",
        'commuity': '#302E6F',
        'white': '#F7F7F5',
        'lightBlue': '#79E9F1'
      },

      flex: {
        2: '2 2 0%',
        3: '3 3 0%',
        4: '4 4 0%',
        5: '5 5 0%'
      },

      shadow: {
        inner: 'inset 0 0 8px 1px rgba(12,16,25,0.45)'
      },

      screens: {
        'laptop-screen' : '1440px',
        '2xl': '1536px',
        '3xl': '1960px'
      },

      fontSize: {
        '2xs': '0.7rem',
        '3xs': '0.81rem',
        footer: '0.85rem',
        'xsm': '0.625rem',
        'small': '0.875rem',
        'sm': '0.9rem',
        'md': '18px',
        'large': '2rem',
        'md_l':'16px'
      },

      fontFamily: {
        sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
        mono: ['Droid Sans', ...defaultTheme.fontFamily.mono],
        sora: ['Sora', ...defaultTheme.fontFamily.sans],
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans]
      },

      opacity: {
        33: '0.33',
        90: '0.9'
      },

      maxHeight: {
        ...extraSizings,
        modal: '96vh',
        scrollAbleModel : '88vh',
        scrollAbleLogin : '82vh',
        44: '11rem'
      },

      maxWidth: {
        ...extraSizings
      },

      width: {
        ...extraSizings,
        '1/8': '12.5%'
      },

      height: {
        ...extraSizings,
        36: '9rem',
        76: '19rem',
        92: '23rem',
        'perpetuals-trade': '44rem',
        'competition-hero': '576px',
        footer: '3.3rem',
        chart: '70vh',
        orders: '30vh'
      },

      minHeight: {
        ...extraSizings,
        chart: '70vh',
        orders: '30vh'
      },

      minWidth: {
        ...extraSizings
      },

      spacing: {
        ...extraSizings
      },

      letterSpacing: {
        loose: '0.005em'
      }
    }
  },

  variants: {
    borderWidth: ['even', 'odd', 'first', 'last', 'responsive'],
    backgroundColor: ['hover'],
    borderColor: ['hover'],
    textColor: ['group-hover', 'hover']
  },

  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./**/*.vue'],
    whitelist: [
      'tooltip',
      'tooltip-arrow',
      'tooltip-inner',
      'vue-tooltip-theme'
    ],
    whitelistPatterns: [/tooltip/]
  }
}
