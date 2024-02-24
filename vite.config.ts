import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@assets': path.resolve(__dirname, './src/assets/'),
			'@styles': path.resolve(__dirname, './src/styles/'),
			'@data': path.resolve(__dirname, './src/data/'),
			'@hooks': path.resolve(__dirname, './src/hooks/'),
			'@components': path.resolve(__dirname, './src/components/'),
			'@reducers': path.resolve(__dirname, './src/reducers/'),
			'@contexts': path.resolve(__dirname, './src/contexts/'),
		},
	},
	server: {
		open: true,
	},
	build: {
		outDir: 'build',
		sourcemap: true,
	},
	preview: {
		open: true,
	},
});
