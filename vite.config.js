import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Code loaded on demand (the resume PDF renderer) gets its own folder. Moving it
        // gave it a new URL after browsers cached a bad redirect for the old one, 10/2026.
        chunkFileNames: 'assets/chunks/[name]-[hash].js',
      },
    },
  },
})
