import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
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
