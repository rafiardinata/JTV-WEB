/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				primary: '#FFFFFF',
				secondary: {
					'300': '#EBEBEB',
					'500': '#58585A',
					'600': '#2563EB',
					'700': '#323232',
					'900': '#111827'
				},
				accent: {
					'500': '#E01A3F',
					'700': '#ED1212'
				}
			},
			fontFamily: {
				poppins: [
					'Poppins',
					'system-ui'
				],
			},
			animation: {
				ripple: 'ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite'
			},
			keyframes: {
				ripple: {
					'0%, 100%': {
						transform: 'translate(-50%, -50%) scale(1)'
					},
					'50%': {
						transform: 'translate(-50%, -50%) scale(0.9)'
					}
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}
