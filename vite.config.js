import { sveltekit } from '@sveltejs/kit/vite';
import VitePluginRestart from 'vite-plugin-restart'
import { defineConfig } from 'vite';
import path from 'path'


const ViteRestart = VitePluginRestart.default

export default defineConfig({
	plugins: [
		sveltekit(),
	],
	resolve: {
		alias: {
			'@': path.resolve('src')
		}
	},
	server: {
		fs: {
		  // Allow serving files from one level up to the project root
		  allow: ['C:/Users/sanorris/Desktop/cit/myapp/build'],
		},
	  },
});
