import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/ingram-ignites/',
  plugins: [react(), tailwindcss()],
  server: {
    port: parseInt(process.env.PORT || '5174'),
  },
})
