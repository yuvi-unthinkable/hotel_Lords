import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),
  react()],
  server : {
    proxy : {
      '/api' : {
        target : 'https://chai-and-backend.onrender.com/',
        changeOrigin : true,
        secure: false,
      }
    }
  }
})
