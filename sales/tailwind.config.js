const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        // Example content paths...
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
    theme: {
        screens: {
            // sm: '576px',
            // md: '960px',
            // lg: '1440px',
            // tablet: '640px',
            // laptop: '1024px',
            // desktop: '1280px',
            // sm: { min: '640px', max: '767px' },
            // md: { min: '768px', max: '1023px' },
            // lg: { min: '1024px', max: '1279px' },
            // xl: { min: '1280px', max: '1535px' },
            // '2xl': { min: '1536px' },
            // xs: '475px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            rose: colors.rose,
            pink: colors.pink,
            fuchsia: colors.fuchsia,
            purple: colors.purple,
            violet: colors.violet,
            indigo: colors.indigo,
            blue: colors.blue,
            sky: colors.sky,
            cyan: colors.cyan,
            teal: colors.teal,
            emerald: colors.emerald,
            green: colors.green,
            lime: colors.lime,
            yellow: colors.yellow,
            amber: colors.amber,
            orange: colors.orange,
            red: colors.red,
            slate: colors.slate,
            zinc: colors.zinc,
            gray: colors.gray,
            neutral: colors.slate,
            stone: colors.stone,
        },
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
            //sans: ['Graphik', 'sans-serif'],
            //serif: ['Merriweather', 'serif'],
        },
        extend: {
            spacing: {
                128: '32rem',
                144: '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
            screens: {
                '3xl': '1600px',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
