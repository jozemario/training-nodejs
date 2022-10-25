module.exports = {
    content: [
        // Example content paths...
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
