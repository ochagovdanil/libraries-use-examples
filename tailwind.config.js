/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		container: {
			center: true,
			padding: '1rem',
		},
		backgroundImage: {
			textured: "url('./src/assets/pipes.webp')",
		},
	},
	plugins: [],
};
