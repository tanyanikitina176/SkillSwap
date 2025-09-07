import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
	base: "/SkillSwap/",
	plugins: [
		react(),
		svgr(),
		viteStaticCopy({
			targets: [
				{
					src: 'public/db',  // source folder
					dest: 'assets'       // copy to root of dist
				}
			]
		})
	],
	server: { open: true },
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@api': path.resolve(__dirname, 'src/api'),
			'@app': path.resolve(__dirname, 'src/app'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@entities': path.resolve(__dirname, 'src/entities'),
			'@features': path.resolve(__dirname, 'src/features'),
			'@shared': path.resolve(__dirname, 'src/shared'),
			'@widgets': path.resolve(__dirname, 'src/widgets'),
			'@public': path.resolve(__dirname, 'public'),
			'@icons': path.resolve(__dirname, 'src/assets/icons'),
		},
	},
})
