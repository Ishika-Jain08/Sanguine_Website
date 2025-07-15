import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from "dotenv"
import path from 'path'

dotenv.config();
export default defineConfig({
  plugins: [react()],
   resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 👈 this line
    },
  },
  server: {
    host: '0.0.0.0', 
    port: process.env.VITE_APP_PORT? parseInt(process.env.VITE_APP_PORT) : 5173, 
  },
})
