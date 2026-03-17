import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Ye zaroori hai

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Ye engine ko activate karega
  ],
})