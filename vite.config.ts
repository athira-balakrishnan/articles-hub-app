import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@apis': path.resolve(__dirname, 'src/apis'),
    },
  },
  server: {
    port: 3000, // Set the development server port
  },
  build: {
    outDir: 'build', // Specify the output directory for production build
    sourcemap: true, // Enable source maps for easier debugging
  },
})
