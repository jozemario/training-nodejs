/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '1.5rem',
        },
        extend: {},
    },
    plugins: [],
};
