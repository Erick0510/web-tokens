/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
		"./index.html",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors : {
				gray: '#94a3b8',
				indigo: '#6366f1',
				sky: '#38bdf8'
			}
			// colors: {
			// 	base: {
			// 		800: '#19191A',
			// 		900: '#0A0A0A',
			// 	},
			// 	accent: {
			// 		green: '#059669',
			// 		yellow: '#eab308',
			// 		amber: '#F59B0A',
			// 	},
			// 	custom: {
			// 		light: '#e7e5e4',
			// 		mate: '#d6d3d1',
			// 		gray: '#52525b',
			// 	},
			// },
			// keyframes: {
			// 	'accordion-down': {
			// 		from: { height: '0' },
			// 		to: { height: 'var(--radix-accordion-content-height)' },
			// 	},
			// 	'accordion-up': {
			// 		from: { height: 'var(--radix-accordion-content-height)' },
			// 		to: { height: '0' },
			// 	},
			// },
			// animation: {
			// 	'accordion-down': 'accordion-down 0.2s ease-out',
			// 	'accordion-up': 'accordion-up 0.2s ease-out',
			// },
		},
	},
	plugins: [
		require('tailwindcss-animate'),
		nextui()
	],
};
