import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Outfit, sans-serif'],
            },
            screens: {
                '2xsm': '360px', // or whatever width you want
            },
            zIndex: Object.fromEntries(
                Array.from({ length: 100000 }, (_, i) => [i + 1, `${i + 1}`])
            ),
            colors: {
                brand: {
                    50: '#ecf3ff',
                    100: '#dde9ff',
                    200: '#c2d6ff',
                    300: '#9cb9ff',
                    400: '#7592ff',
                    500: '#465fff',
                    600: '#3641f5',
                    800: '#252dae',
                    950: '#161950',
                },
                success: {
                    DEFAULT: '#039855',
                    50: '#e6f4eb',
                    100: '#cce9d6',
                    200: '#99d3ad',
                    300: '#66bd85',
                    400: '#33a75c',
                    500: '#009133',
                    600: '#00742a',
                    700: '#005721',
                    800: '#003a17',
                    900: '#001d0e',
                },
                info: {
                    50: '#e6f4fa',
                    100: '#cce9f5',
                    200: '#99d3ec',
                    300: '#66bde2',
                    400: '#33a7d9',
                    500: '#0091cf',
                    600: '#0074a6',
                    700: '#00577c',
                    800: '#003a53',
                    900: '#001d29',
                },
                warning: {
                    50: '#fff8e6',
                    100: '#fff1cc',
                    200: '#ffe299',
                    300: '#ffd366',
                    400: '#ffc433',
                    500: '#ffb500',
                    600: '#cc9100',
                    700: '#996d00',
                    800: '#664800',
                    900: '#332400',
                },
                error: {
                    DEFAULT: '#D92D20',
                    50: '#fbeaea',
                    100: '#f7d5d5',
                    200: '#efaaaa',
                    300: '#e77f7f',
                    400: '#df5454',
                    500: '#d72929',
                    600: '#ac2121',
                    700: '#801919',
                    800: '#551010',
                    900: '#2a0808',
                },
            },
        },
    },

    plugins: [forms],
};
