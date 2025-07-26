import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'

export default defineConfig({
  plugins: [react(), svgr()],
  server: { open: true },
  resolve: {
    alias: [
      { find: '@icons', replacement: path.resolve(__dirname, './src/assets/icons') }
    ]
  }
})