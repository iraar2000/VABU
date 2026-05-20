import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@public': path.resolve(__dirname, './public'),
      '@pgcomponent': path.resolve(__dirname, './src/components/pages-components'),
      '@objcomponent': path.resolve(__dirname, './src/components/object-components'),
      '@sctcomponent': path.resolve(__dirname, './src/components/section-components')
    }
  },

  server: {
    port: 3003,
    hmr: {
      overlay: false
    }
  },

  build: {
    sourcemap: true,
    target: 'esnext',
    chunkSizeWarningLimit: 1000
  },

  plugins: [
    react(),
    tailwindcss()
  ],
})
