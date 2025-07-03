/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        extend: {
            colors: {
                background: '#F9F1F0',
                primary: '#FADCD9',
                secondary: '#F8AFA6',
                text: '#000000',
            },
            fontFamily: {
                playfair: ['"Playfair Display"', 'serif'],
                Instrument:[ "Instrument Serif", 'serif'],
                quicksand: ['Quicksand', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
