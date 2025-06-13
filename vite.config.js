import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';


// Use Node's process.env safely
const isProduction = process.env.NODE_ENV === 'production';


// https://vite.dev/config/
export default defineConfig({
  base: isProduction ? '/My-Portfolio/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
