import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/e-comerce-/',
    server: {
    port: 3030, // Aquí defines el puerto que desees
  },
})
