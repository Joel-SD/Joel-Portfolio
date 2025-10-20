import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configuración para GitHub Pages
  // Si usas un dominio personalizado, comenta la siguiente línea o déjala como '/'
  base: '/Joel_Portfolio/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Optimizaciones de build
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'i18n-vendor': ['react-i18next', 'i18next'],
        }
      }
    }
  },
  server: {
    // Configuraciones específicas para Windows
    watch: {
      usePolling: true, // Usar polling en lugar de eventos del sistema de archivos
      interval: 1000,   // Intervalo de polling en ms
    },
    // Mejorar compatibilidad con Windows
    fs: {
      strict: false
    }
  },
  // Optimizaciones para Windows
  optimizeDeps: {
    exclude: ['fsevents'] // Excluir fsevents que causa problemas en Windows
  }
})
