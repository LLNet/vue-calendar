// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	mode: 'jit',
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		screens:{
			'print': {'raw': 'print'},
			'xs': '475px',
			'3xl': '1792px',
			...defaultTheme.screens,
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
