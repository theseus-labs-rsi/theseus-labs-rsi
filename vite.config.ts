import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      input: ['index.html', 'testa/index.html', 'testb/index.html'],
    },
  },
})
