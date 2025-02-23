import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/heroes-vue-app/',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    headers: {
      'Content-Security-Policy':
        "default-src 'self'; font-src 'self' data: https://fonts.gstatic.com;",
    },
  }
})
