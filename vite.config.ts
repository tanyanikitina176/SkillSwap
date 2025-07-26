import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path' // Добавляем импорт path

export default defineConfig({
  plugins: [
    react(),
    svgr() // Добавляем плагин для работы с SVG
  ],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@icons': path.resolve(__dirname, './src/assets/icons'), // Алиас для иконок
      // Здесь можно добавить другие алиасы по необходимости
    }
  }
})
