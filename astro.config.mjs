// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
	base: '/',
	output: 'static',
	adapter: vercel({}),
	i18n: {
		defaultLocale: 'es',
		locales: ['es', 'en'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
